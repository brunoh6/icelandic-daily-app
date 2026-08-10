/* The lesson player: a full-screen layer that walks a queue of exercises,
   grades them, re-queues mistakes once, and finishes on a results card. */

import { esc, delegate, shuffle, clamp } from "../dom.js";
import { speak, stopSpeaking, feedback, sfx, primeSpeech, primeAudio, prefetchClips } from "../audio.js";
import { puffinSVG, setMood, lulliSays } from "../puffin.js";
import { rendererFor, TYPE_LABEL } from "./items.js";
import { teachBlocks, storyBlock } from "./teach.js";
import { state, recordAnswer } from "../store.js";
import { review, gradeFor } from "../srs.js";

const XP_PER_ITEM = 2;
const XP_FINISH = 10;
const XP_PERFECT = 6;

const isTouch = matchMedia("(hover: none)").matches;

const ENCOURAGE = ["Nice", "Rétt!", "Sharp", "Flott!", "Yes", "Einmitt", "Clean", "Vel gert"];

let active = null;

export function sessionIsActive() {
  return Boolean(active);
}

export function closeSession() {
  if (!active) return;
  active.teardown();
  active = null;
}

/**
 * @param {HTMLElement} host      the .layer element
 * @param {object} config
 * @param {string} config.title
 * @param {string} config.subtitle
 * @param {Array}  config.items
 * @param {string} config.kind      "lesson" | "drill" | "review" | "test"
 * @param {(summary:object)=>void} config.onFinish
 * @param {()=>void} config.onQuit
 */
export function startSession(host, config) {
  closeSession();
  const items = (config.items || []).filter((it) => rendererFor(it));
  if (!items.length) {
    config.onQuit?.();
    return null;
  }

  const session = {
    host,
    config,
    queue: items.slice(),
    total: items.length,
    done: 0,
    correct: 0,
    wrongOnce: new Set(),
    combo: 0,
    bestCombo: 0,
    startedAt: Date.now(),
    phase: "playing", // playing | checked | finished
    current: null,
    result: null,
    unbind: []
  };
  active = session;

  session.teardown = () => {
    stopSpeaking();
    for (const off of session.unbind) off();
    session.unbind = [];
    host.hidden = true;
    host.innerHTML = "";
    document.body.classList.remove("is-playing");
  };

  document.body.classList.add("is-playing");
  host.hidden = false;
  host.innerHTML = shell(config);

  const itemHost = host.querySelector("#itemHost");
  const footer = host.querySelector("#sessFooter");
  let lastField = null;

  /* ---------------------------------------------------------- rendering */

  function paintProgress() {
    const pct = clamp(session.done / session.total, 0, 1) * 100;
    const fill = host.querySelector("#sessBar");
    if (fill) fill.style.width = `${pct}%`;
    const combo = host.querySelector("#sessCombo");
    if (combo) {
      combo.textContent = session.combo >= 2 ? `${session.combo}× combo` : "";
      combo.classList.toggle("is-on", session.combo >= 2);
    }
  }

  /** The short "class" that runs before the drilling, when a lesson has one. */
  function showBrief() {
    session.phase = "brief";
    const { teach, story, title, subtitle } = config;
    itemHost.innerHTML = `
      <div class="brief">
        <header class="brief__head">
          <p class="eyebrow">${esc(subtitle || "Before we practise")}</p>
          <h2 class="h1">${esc(title || "")}</h2>
          ${config.goal ? `<p class="muted small">${esc(config.goal)}</p>` : ""}
        </header>
        ${story ? storyBlock(story) : ""}
        ${teachBlocks(teach)}
      </div>`;
    itemHost.scrollTop = 0;
    footer.className = "sess-footer";
    footer.innerHTML = `<button class="btn btn--primary btn--block" type="button" data-act="begin">
      Got it — let's practise</button>`;
    host.querySelector("#sessBar").style.width = "0%";
  }

  /** Re-open the brief over the top of the current exercise, without losing it. */
  function toggleNotes() {
    const open = host.querySelector("#notesPanel");
    if (open) {
      open.remove();
      return;
    }
    const panel = document.createElement("div");
    panel.id = "notesPanel";
    panel.className = "notes-panel";
    panel.innerHTML = `
      <div class="notes-panel__scroll">
        <div class="brief">
          <header class="brief__head">
            <p class="eyebrow">Notes</p>
            <h2 class="h1">${esc(config.title || "")}</h2>
          </header>
          ${config.story ? storyBlock(config.story) : ""}
          ${teachBlocks(config.teach)}
        </div>
      </div>
      <div class="notes-panel__foot">
        <button class="btn btn--primary btn--block" type="button" data-act="notes">Back to practice</button>
      </div>`;
    host.querySelector(".sess").appendChild(panel);
  }

  function nextItem() {
    stopSpeaking();
    session.phase = "playing";
    session.result = null;
    session.usedHint = false;
    session.itemStartedAt = Date.now();
    lastField = null;
    const item = session.queue.shift();
    if (!item) return finish();
    session.current = item;

    const renderer = rendererFor(item);
    itemHost.innerHTML = `<div class="item" data-type="${esc(item.t)}">${renderer.render(item, ctx())}</div>`;
    itemHost.scrollTop = 0;
    renderer.mount?.(item, itemHost, ctx());

    footer.className = "sess-footer";
    footer.innerHTML = footerPlaying(renderer, item);
    paintProgress();
    syncCheckButton();
  }

  function ctx() {
    return { autoSpeak: state.profile.autoSpeak, touch: isTouch };
  }

  function syncCheckButton() {
    if (session.phase !== "playing") return;
    const renderer = rendererFor(session.current);
    const btn = host.querySelector("#checkBtn");
    if (!btn || !renderer) return;
    btn.disabled = !renderer.ready(session.current, itemHost);
  }

  /* ------------------------------------------------------------ grading */

  function submit() {
    if (session.phase !== "playing") return;
    const item = session.current;
    const renderer = rendererFor(item);
    if (!renderer.ready(item, itemHost)) return;

    const result = renderer.check(item, itemHost);
    session.result = result;
    session.phase = "checked";
    renderer.reveal?.(item, itemHost, result);

    applyResult(item, result);
    footer.className = `sess-footer is-open ${result.correct ? "is-good" : "is-bad"}`;
    footer.innerHTML = footerChecked(item, result);
    feedback(result.correct ? "correct" : "wrong");
    setMood(host, result.correct ? "cheer" : "sad");
    if (!result.correct && item.t !== "match") {
      // Only replay the answer when the answer is Icelandic. A choice item's
      // answer is often the English gloss ("dog"), and a gender item's is a
      // grammar label ("kk") — reading those aloud in Icelandic is nonsense.
      const answerIsIcelandic = ["type", "build", "fill", "listen"].includes(item.t);
      const say = item.speak || (answerIsIcelandic ? item.a : null) || item.is;
      if (typeof say === "string" && say.trim()) setTimeout(() => speak(say), 260);
    }
    host.querySelector("#continueBtn")?.focus({ preventScroll: true });
  }

  function applyResult(item, result) {
    session.done += 1;
    if (result.correct) {
      session.correct += 1;
      session.combo += 1;
      session.bestCombo = Math.max(session.bestCombo, session.combo);
    } else {
      session.combo = 0;
      if (!session.wrongOnce.has(item)) {
        session.wrongOnce.add(item);
        // Give the learner a second run at it, a few cards later.
        const insertAt = Math.min(session.queue.length, 2 + Math.floor(Math.random() * 2));
        session.queue.splice(insertAt, 0, item);
        session.total += 1;
      }
    }
    recordAnswer({ correct: result.correct, tags: item.tags || [] });
    const grade = gradeFor(result.correct, {
      usedHint: session.usedHint,
      fast: Date.now() - session.itemStartedAt < 6000
    });
    for (const tag of item.tags || []) review(`t:${tag}`, grade);
    if (item.srsKey) review(item.srsKey, grade);
    paintProgress();
  }

  function advance() {
    if (session.phase !== "checked") return;
    nextItem();
  }

  /* ------------------------------------------------------------- finish */

  function finish() {
    session.phase = "finished";
    const seconds = Math.round((Date.now() - session.startedAt) / 1000);
    const accuracy = session.total ? session.correct / session.total : 0;
    const perfect = session.correct === session.total;
    const xp = session.correct * XP_PER_ITEM + XP_FINISH + (perfect ? XP_PERFECT : 0);
    const summary = {
      total: session.total,
      correct: session.correct,
      accuracy,
      perfect,
      seconds,
      xp,
      bestCombo: session.bestCombo
    };
    sfx("complete");
    itemHost.innerHTML = resultsCard(summary, config);
    footer.className = "sess-footer is-open is-good";
    footer.innerHTML = `<button class="btn btn--success btn--block" id="doneBtn" type="button" data-act="finish">Collect ${xp} XP</button>`;
    host.querySelector("#sessTop")?.classList.add("is-hidden");
    host.querySelector("#doneBtn")?.focus({ preventScroll: true });
    session.summary = summary;
  }

  /* ------------------------------------------------------------ events */

  session.unbind.push(
    delegate(host, "click", "[data-act]", (event, el) => {
      const act = el.dataset.act;
      primeSpeech();
      primeAudio();

      if (act === "speak") {
        el.classList.add("is-playing");
        speak(el.dataset.text, { onend: () => el.classList.remove("is-playing") });
        return;
      }
      if (act === "speak-slow") {
        speak(el.dataset.text, { rate: 0.6 });
        return;
      }
      if (act === "quit") return quit();
      if (act === "begin") return nextItem();
      if (act === "notes") return toggleNotes();
      if (act === "rline") {
        el.classList.toggle("is-open");
        return;
      }
      if (act === "check") return submit();
      if (act === "continue") return advance();
      if (act === "finish") {
        const summary = session.summary;
        closeSession();
        config.onFinish?.(summary);
        return;
      }
      if (act === "skip") {
        if (session.phase !== "playing") return;
        session.result = { correct: false, given: "", expected: session.current.a || "" };
        rendererFor(session.current).reveal?.(session.current, itemHost, session.result);
        applyResult(session.current, session.result);
        session.phase = "checked";
        footer.className = "sess-footer is-open is-bad";
        footer.innerHTML = footerChecked(session.current, session.result);
        return;
      }

      if (session.phase !== "playing") return;

      if (act === "choose") {
        const group = el.closest(".opts");
        for (const other of group.querySelectorAll(".opt")) {
          other.classList.remove("is-picked");
          other.setAttribute("aria-checked", "false");
        }
        el.classList.add("is-picked");
        el.setAttribute("aria-checked", "true");
        sfx("tap");
        syncCheckButton();
        return;
      }

      if (act === "insert") {
        const target = el.dataset.target;
        const active = document.activeElement;
        // A table's letter bar has no fixed target, so type into whichever
        // cell the learner is actually in — activeElement, not :focus, which
        // stops matching whenever the window itself loses focus.
        const input =
          (target && itemHost.querySelector(`#${CSS.escape(target)}`)) ||
          (active instanceof HTMLInputElement && itemHost.contains(active) ? active : null) ||
          (lastField && itemHost.contains(lastField) ? lastField : null) ||
          itemHost.querySelector(".cell-input, .answer-input");
        if (!input) return;
        insertAtCursor(input, el.dataset.ch);
        syncCheckButton();
        return;
      }

      if (act === "bank") return moveTile(el, "answer");
      if (act === "answer") return moveTile(el, "bank");
      if (act === "match") return tapMatch(el);
      if (act === "hint") {
        el.hidden = true;
        el.nextElementSibling?.removeAttribute("hidden");
        session.usedHint = true;
        return;
      }
    })
  );

  session.unbind.push(
    delegate(host, "input", "input", () => syncCheckButton())
  );

  // Remember which field the learner was last in, so the Icelandic letter bar
  // types into that one rather than the first blank on the card.
  session.unbind.push(
    delegate(host, "focusin", "input", (event, el) => {
      lastField = el;
    })
  );

  // Pressing a letter key must not steal focus from the field it types into.
  session.unbind.push(
    delegate(
      host,
      "pointerdown",
      ".keybar__key",
      (event) => event.preventDefault(),
      { passive: false }
    )
  );

  const keyHandler = (event) => {
    if (event.key === "Enter") {
      if (session.phase === "brief") {
        event.preventDefault();
        nextItem();
      } else if (session.phase === "playing") {
        event.preventDefault();
        submit();
      } else if (session.phase === "checked") {
        event.preventDefault();
        advance();
      } else if (session.phase === "finished") {
        event.preventDefault();
        host.querySelector("#doneBtn")?.click();
      }
      return;
    }
    if (event.key === "Escape" && session.phase !== "finished") {
      event.preventDefault();
      quit();
      return;
    }
    // 1-4 pick an option, like the desktop shortcuts learners expect.
    if (session.phase === "playing" && /^[1-9]$/.test(event.key)) {
      const opts = itemHost.querySelectorAll(".opts .opt");
      const target = opts[Number(event.key) - 1];
      if (target) {
        event.preventDefault();
        target.click();
      }
    }
  };
  addEventListener("keydown", keyHandler);
  session.unbind.push(() => removeEventListener("keydown", keyHandler));

  /* ------------------------------------------------------------ widgets */

  function moveTile(el, to) {
    const answer = itemHost.querySelector("#buildAnswer");
    const bank = itemHost.querySelector("#buildBank");
    if (!answer || !bank) return;
    sfx("tap");
    if (to === "answer") {
      el.dataset.act = "answer";
      answer.appendChild(el);
    } else {
      el.dataset.act = "bank";
      bank.appendChild(el);
    }
    answer.dataset.filled = answer.children.length ? "1" : "";
    syncCheckButton();
  }

  let matchPick = null;
  function tapMatch(el) {
    if (el.classList.contains("is-solved")) return;
    if (!matchPick) {
      matchPick = el;
      el.classList.add("is-picked");
      sfx("tap");
      return;
    }
    if (matchPick === el) {
      el.classList.remove("is-picked");
      matchPick = null;
      return;
    }
    if (matchPick.dataset.side === el.dataset.side) {
      matchPick.classList.remove("is-picked");
      matchPick = el;
      el.classList.add("is-picked");
      return;
    }
    const ok = matchPick.dataset.i === el.dataset.i;
    if (ok) {
      matchPick.classList.remove("is-picked");
      matchPick.classList.add("is-solved");
      el.classList.add("is-solved");
      matchPick.disabled = true;
      el.disabled = true;
      feedback("correct");
      matchPick = null;
      const remaining = itemHost.querySelectorAll(".mtile:not(.is-solved)").length;
      if (remaining === 0) {
        const item = session.current;
        const clean = !session.matchMissed;
        session.result = {
          correct: clean,
          given: "",
          expected: "",
          note: clean ? null : "One pair went astray, so this set comes back later."
        };
        session.phase = "checked";
        applyResult(item, session.result);
        session.matchMissed = false;
        footer.className = `sess-footer is-open ${clean ? "is-good" : "is-bad"}`;
        footer.innerHTML = footerChecked(item, session.result);
        setMood(host, clean ? "cheer" : "sad");
      }
    } else {
      const a = matchPick;
      a.classList.add("is-miss");
      el.classList.add("is-miss");
      session.matchMissed = true;
      feedback("wrong");
      setTimeout(() => {
        a.classList.remove("is-picked", "is-miss");
        el.classList.remove("is-miss");
      }, 420);
      matchPick = null;
    }
  }

  function quit() {
    if (session.phase === "finished") {
      const summary = session.summary;
      closeSession();
      config.onFinish?.(summary);
      return;
    }
    if (session.done === 0) {
      closeSession();
      config.onQuit?.();
      return;
    }
    const ok = confirm("Leave now? This session's progress will not be saved.");
    if (!ok) return;
    closeSession();
    config.onQuit?.();
  }

  session.matchMissed = false;

  // Warm the clips this session will need, so nothing stalls mid-lesson.
  prefetchClips(
    [
      ...items.flatMap((it) => [it.speak, it.word, it.is, it.a]),
      ...(config.story?.lines || []).map((l) => l.is),
      ...(config.teach || []).flatMap((t) => (t.ex || []).map((p) => p[0]))
    ].filter((t) => typeof t === "string")
  );

  const hasBrief = (Array.isArray(config.teach) && config.teach.length) || config.story;
  if (hasBrief) showBrief();
  else nextItem();
  return session;
}

/* --------------------------------------------------------------- views */

function shell(config) {
  const hasNotes = (Array.isArray(config.teach) && config.teach.length) || config.story;
  return `
  <div class="sess">
    <header class="sess-top" id="sessTop">
      <button class="sess-x" type="button" data-act="quit" aria-label="Close session">✕</button>
      <div class="sess-bar" role="progressbar" aria-label="Session progress">
        <div class="sess-bar__fill" id="sessBar"></div>
      </div>
      <span class="sess-combo" id="sessCombo"></span>
      ${hasNotes ? `<button class="sess-notes" type="button" data-act="notes" aria-label="Show the lesson notes">?</button>` : ""}
    </header>
    <div class="sess-body">
      <div class="sess-scroll" id="itemHost"></div>
    </div>
    <footer class="sess-footer" id="sessFooter"></footer>
  </div>`;
}

function footerPlaying(renderer, item) {
  if (renderer.auto) {
    return `<p class="sess-hint">Tap a word on the left, then its match on the right.</p>`;
  }
  const skip = item.t === "speak" ? "" : `<button class="btn btn--ghost" type="button" data-act="skip">Skip</button>`;
  return `
    <div class="sess-actions">
      ${skip}
      <button class="btn btn--primary grow" id="checkBtn" type="button" data-act="check" disabled>Check</button>
    </div>`;
}

function footerChecked(item, result) {
  const good = result.correct;
  const title = good
    ? result.note || `${ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)]}!`
    : "Not quite";
  const answerLine =
    !good && result.expected
      ? `<p class="fb__answer"><span class="fb__label">Answer</span> <span class="is">${esc(result.expected)}</span></p>`
      : "";
  const why = item.note || item.why || (item.case ? `That slot needs the ${esc(item.case)}.` : "");
  return `
    <div class="fb">
      <div class="fb__head">
        <span class="fb__icon">${good ? "✓" : "✕"}</span>
        <p class="fb__title">${esc(title)}</p>
      </div>
      ${answerLine}
      ${why ? `<p class="fb__why">${esc(why)}</p>` : ""}
    </div>
    <button class="btn ${good ? "btn--success" : "btn--danger"} btn--block" id="continueBtn"
      type="button" data-act="continue">Continue</button>`;
}

function resultsCard(summary, config) {
  const pct = Math.round(summary.accuracy * 100);
  const mins = Math.max(1, Math.round(summary.seconds / 60));
  const mood = summary.perfect ? "cheer" : pct >= 70 ? "wave" : "think";
  const headline = summary.perfect
    ? "Fullkomið! Not a single slip."
    : pct >= 80
      ? "Sterkt. That is a solid pass."
      : pct >= 60
        ? "Gott. The shaky ones will come back around."
        : "Klárað. Repetition is the whole trick — go again soon.";

  return `
  <div class="results">
    ${puffinSVG({ mood, size: 128 })}
    <h2 class="h1 center">${esc(config.title || "Session complete")}</h2>
    <p class="muted center">${esc(headline)}</p>
    <div class="results__grid">
      <div class="stat-tile">
        <span class="stat-tile__v num">${pct}%</span>
        <span class="stat-tile__l">accuracy</span>
      </div>
      <div class="stat-tile">
        <span class="stat-tile__v num">${summary.correct}/${summary.total}</span>
        <span class="stat-tile__l">correct</span>
      </div>
      <div class="stat-tile">
        <span class="stat-tile__v num">${summary.bestCombo}×</span>
        <span class="stat-tile__l">best combo</span>
      </div>
      <div class="stat-tile">
        <span class="stat-tile__v num">${mins}</span>
        <span class="stat-tile__l">min</span>
      </div>
    </div>
    <p class="results__quip">${esc(lulliSays(summary.perfect ? "done" : "idle"))}</p>
  </div>`;
}

function insertAtCursor(input, text) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = input.value.slice(0, start) + text + input.value.slice(end);
  const pos = start + text.length;
  input.focus();
  try {
    input.setSelectionRange(pos, pos);
  } catch {
    /* some input types do not support selection */
  }
}

/* --------------------------------------------------- queue construction */

/** Build a session queue from a lesson, capped and lightly shuffled. */
export function lessonQueue(lesson, { max = 16 } = {}) {
  const items = (lesson.items || []).slice();
  // Keep the first two in place as a gentle warm-up, shuffle the rest.
  const head = items.slice(0, 2);
  const tail = shuffle(items.slice(2));
  return [...head, ...tail].slice(0, max);
}

export { TYPE_LABEL };
