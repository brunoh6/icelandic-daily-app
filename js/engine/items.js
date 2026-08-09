/* Exercise renderers. Every type implements the same small contract:
     render(item, ctx) -> html string
     mount(item, root, ctx) -> void            (focus, wire up local widgets)
     ready(item, root) -> boolean              (is Check allowed yet?)
     check(item, root) -> { correct, given, expected, note? }
     reveal(item, root, result) -> void        (paint the right answer in place)
   `auto: true` types grade themselves and call ctx.autoResolve().
*/

import { esc, html, shuffle, normalizeAnswer, deaccent } from "../dom.js";
import { speak } from "../audio.js";
import { CASE_LABELS, GENDER_LABELS } from "../data.js";

export const ICELANDIC_KEYS = ["á", "ð", "é", "í", "ó", "ú", "ý", "þ", "æ", "ö"];

const speakerIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12.5 3a4.5 4.5 0 0 0-2.2-3.9v7.8A4.5 4.5 0 0 0 16.5 12Zm-2.2-8.4v2.1A6.5 6.5 0 0 1 14.3 20.4v2.1"/></svg>`;

export function speakButton(text, { large = false, label = "Play audio" } = {}) {
  if (!text) return "";
  return `<button class="speak-btn${large ? " speak-btn--lg" : ""}" type="button"
    data-act="speak" data-text="${esc(text)}" aria-label="${esc(label)}">${speakerIcon}</button>`;
}

function keyboardBar(targetId) {
  return `<div class="keybar" role="group" aria-label="Icelandic letters">
    ${ICELANDIC_KEYS.map(
      (k) => `<button class="keybar__key" type="button" data-act="insert" data-ch="${k}" data-target="${targetId}">${k}</button>`
    ).join("")}
  </div>`;
}

function textInput(id, { placeholder = "Type in Icelandic…", value = "" } = {}) {
  return `<input class="answer-input" id="${id}" type="text" value="${esc(value)}"
    placeholder="${esc(placeholder)}" autocomplete="off" autocorrect="off"
    autocapitalize="off" spellcheck="false" enterkeyhint="done" lang="is" />`;
}

/* ------------------------------------------------------------ grading */

/** Compare a typed answer with the key, tolerating punctuation and case. */
export function gradeText(given, expected, alternates = []) {
  const g = normalizeAnswer(given);
  if (!g) return { correct: false, accentSlip: false };
  const keys = [expected, ...(alternates || [])].filter(Boolean);
  for (const key of keys) {
    if (g === normalizeAnswer(key)) return { correct: true, accentSlip: false };
  }
  for (const key of keys) {
    if (deaccent(g) === deaccent(normalizeAnswer(key))) return { correct: true, accentSlip: true };
  }
  return { correct: false, accentSlip: false };
}

const prompt = (text, sub) =>
  `<div class="q">
     <p class="q__text">${esc(text)}</p>
     ${sub ? `<p class="q__sub">${sub}</p>` : ""}
   </div>`;

/* ------------------------------------------------------------- choice */

const choice = {
  render(item) {
    const opts = shuffle(item.opts);
    return `
      ${prompt(item.q, item.speak ? `<span class="q__is">${esc(item.speak)}</span> ${speakButton(item.speak)}` : "")}
      <div class="opts" role="radiogroup" aria-label="Answer options">
        ${opts
          .map(
            (o, i) => `<button class="opt" type="button" role="radio" aria-checked="false"
              data-act="choose" data-value="${esc(o)}">
              <span class="opt__key">${i + 1}</span>
              <span class="opt__text is">${esc(o)}</span>
            </button>`
          )
          .join("")}
      </div>`;
  },
  mount(item, root, ctx) {
    if (item.speak && ctx.autoSpeak) speak(item.speak);
  },
  ready(item, root) {
    return Boolean(root.querySelector(".opt.is-picked"));
  },
  check(item, root) {
    const picked = root.querySelector(".opt.is-picked");
    const given = picked?.dataset.value ?? "";
    return { correct: given === item.a, given, expected: item.a };
  },
  reveal(item, root, result) {
    for (const el of root.querySelectorAll(".opt")) {
      const value = el.dataset.value;
      if (value === item.a) el.classList.add("is-right");
      else if (value === result.given) el.classList.add("is-wrong");
      el.disabled = true;
    }
  }
};

/* --------------------------------------------------------------- type */

const type = {
  render(item) {
    return `
      ${prompt(item.q, item.speak ? speakButton(item.speak) : "")}
      ${textInput("ansInput")}
      ${keyboardBar("ansInput")}
      ${item.hint ? `<button class="hint-btn" type="button" data-act="hint">Need a hint?</button>
        <p class="hint-text" hidden>${esc(item.hint)}</p>` : ""}`;
  },
  mount(item, root, ctx) {
    const input = root.querySelector("#ansInput");
    if (input && !ctx.touch) setTimeout(() => input.focus(), 60);
    if (item.speak && ctx.autoSpeak) speak(item.speak);
  },
  ready(item, root) {
    return root.querySelector("#ansInput")?.value.trim().length > 0;
  },
  check(item, root) {
    const given = root.querySelector("#ansInput")?.value ?? "";
    const res = gradeText(given, item.a, item.alt);
    return {
      correct: res.correct,
      given: given.trim(),
      expected: item.a,
      note: res.accentSlip ? "Right — but mind the accents." : null
    };
  },
  reveal(item, root, result) {
    const input = root.querySelector("#ansInput");
    if (input) {
      input.classList.add(result.correct ? "is-right" : "is-wrong");
      input.readOnly = true;
    }
  }
};

/* -------------------------------------------------------------- build */

const build = {
  render(item) {
    const tokens = shuffle([...String(item.a).trim().split(/\s+/), ...(item.extra || [])]);
    return `
      ${prompt(item.q, item.speak ? speakButton(item.speak) : "")}
      <div class="build-answer" id="buildAnswer" data-empty="Tap the words below" aria-live="polite"></div>
      <div class="build-bank" id="buildBank">
        ${tokens
          .map(
            (t, i) => `<button class="tile" type="button" data-act="bank" data-i="${i}">${esc(t)}</button>`
          )
          .join("")}
      </div>`;
  },
  mount(item, root, ctx) {
    if (item.speak && ctx.autoSpeak) speak(item.speak);
  },
  ready(item, root) {
    return root.querySelectorAll("#buildAnswer .tile").length > 0;
  },
  check(item, root) {
    const given = Array.from(root.querySelectorAll("#buildAnswer .tile"))
      .map((t) => t.textContent.trim())
      .join(" ");
    const res = gradeText(given, item.a, item.alt);
    return { correct: res.correct, given, expected: item.a };
  },
  reveal(item, root, result) {
    root.querySelector("#buildAnswer")?.classList.add(result.correct ? "is-right" : "is-wrong");
    for (const t of root.querySelectorAll(".tile")) t.disabled = true;
  }
};

/* ------------------------------------------------------------- listen */

const listen = {
  render(item) {
    const mode = item.mode || "type";
    const body =
      mode === "choice"
        ? `<div class="opts">
            ${shuffle(item.opts)
              .map(
                (o) => `<button class="opt" type="button" data-act="choose" data-value="${esc(o)}">
                  <span class="opt__text is">${esc(o)}</span></button>`
              )
              .join("")}
           </div>`
        : `${textInput("ansInput", { placeholder: "Write what you hear…" })}${keyboardBar("ansInput")}`;
    return `
      ${prompt(item.q || "What do you hear?")}
      <div class="listen-stage">
        ${speakButton(item.speak, { large: true, label: "Play again" })}
        <button class="btn btn--sm btn--ghost" type="button" data-act="speak-slow" data-text="${esc(item.speak)}">
          Slower
        </button>
      </div>
      ${body}`;
  },
  mount(item, root, ctx) {
    if (ctx.autoSpeak) setTimeout(() => speak(item.speak), 180);
  },
  ready(item, root) {
    return (item.mode || "type") === "choice"
      ? Boolean(root.querySelector(".opt.is-picked"))
      : root.querySelector("#ansInput")?.value.trim().length > 0;
  },
  check(item, root) {
    if ((item.mode || "type") === "choice") return choice.check(item, root);
    const given = root.querySelector("#ansInput")?.value ?? "";
    const res = gradeText(given, item.a, item.alt);
    return {
      correct: res.correct,
      given: given.trim(),
      expected: item.a,
      note: res.accentSlip ? "Right — but mind the accents." : null
    };
  },
  reveal(item, root, result) {
    if ((item.mode || "type") === "choice") return choice.reveal(item, root, result);
    return type.reveal(item, root, result);
  }
};

/* -------------------------------------------------------------- match */

const match = {
  auto: true,
  render(item) {
    const left = shuffle(item.pairs.map((p, i) => ({ text: p[0], i })));
    const right = shuffle(item.pairs.map((p, i) => ({ text: p[1], i })));
    return `
      ${prompt(item.q || "Tap the pairs")}
      <div class="match">
        <div class="match__col">
          ${left
            .map(
              (c) => `<button class="mtile is" type="button" data-act="match" data-side="l" data-i="${c.i}">
                ${esc(c.text)}</button>`
            )
            .join("")}
        </div>
        <div class="match__col">
          ${right
            .map(
              (c) => `<button class="mtile" type="button" data-act="match" data-side="r" data-i="${c.i}">
                ${esc(c.text)}</button>`
            )
            .join("")}
        </div>
      </div>`;
  },
  ready() {
    return false;
  },
  check(item, root) {
    const solved = root.querySelectorAll(".mtile.is-solved").length;
    return { correct: solved === item.pairs.length * 2, given: "", expected: "" };
  },
  reveal() {}
};

/* --------------------------------------------------------------- fill */

const fill = {
  render(item) {
    const caseTag = item.case
      ? `<span class="badge badge--${CASE_LABELS[item.case]?.cls || "nom"}">${esc(item.case)}</span>`
      : "";
    const mode = item.mode || "type";
    const gap =
      mode === "choice"
        ? `<span class="gap gap--choice" id="gapSlot">___</span>`
        : `<span class="gap" id="gapSlot">___</span>`;
    const sentence = esc(item.sentence).replace("___", gap);
    const body =
      mode === "choice"
        ? `<div class="opts opts--inline">
            ${shuffle(item.opts)
              .map(
                (o) => `<button class="opt opt--sm" type="button" data-act="choose" data-value="${esc(o)}">
                  <span class="opt__text is">${esc(o)}</span></button>`
              )
              .join("")}
           </div>`
        : `${textInput("ansInput", { placeholder: "The right form…" })}${keyboardBar("ansInput")}`;
    return `
      ${prompt(item.q || "Complete the sentence.")}
      <p class="cloze is">${sentence}</p>
      <div class="cloze-meta">
        ${item.base ? `<span class="badge">${esc(item.base)}</span>` : ""}
        ${caseTag}
      </div>
      ${body}`;
  },
  mount(item, root, ctx) {
    const input = root.querySelector("#ansInput");
    if (input && !ctx.touch) setTimeout(() => input.focus(), 60);
  },
  ready(item, root) {
    return (item.mode || "type") === "choice"
      ? Boolean(root.querySelector(".opt.is-picked"))
      : root.querySelector("#ansInput")?.value.trim().length > 0;
  },
  check(item, root) {
    if ((item.mode || "type") === "choice") {
      const picked = root.querySelector(".opt.is-picked");
      const given = picked?.dataset.value ?? "";
      return { correct: given === item.a, given, expected: item.a };
    }
    const given = root.querySelector("#ansInput")?.value ?? "";
    const res = gradeText(given, item.a, item.alt);
    return {
      correct: res.correct,
      given: given.trim(),
      expected: item.a,
      note: res.accentSlip ? "Right — but mind the accents." : null
    };
  },
  reveal(item, root, result) {
    const slot = root.querySelector("#gapSlot");
    if (slot) {
      slot.textContent = item.a;
      slot.classList.add(result.correct ? "is-right" : "is-wrong");
    }
    if ((item.mode || "type") === "choice") choice.reveal(item, root, result);
    else type.reveal(item, root, result);
  }
};

/* -------------------------------------------------------------- table */

const table = {
  render(item) {
    let n = 0;
    const head = item.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join("");
    const body = item.rows
      .map((row) => {
        const cells = row.cells
          .map((cell, ci) => {
            if ((row.blank || []).includes(ci)) {
              const id = `tblIn${n++}`;
              return `<td><input class="cell-input" id="${id}" data-answer="${esc(cell)}" type="text"
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" lang="is"
                aria-label="${esc(row.label)} ${esc(item.cols[ci + 1] || "")}" /></td>`;
            }
            return `<td class="is">${esc(cell)}</td>`;
          })
          .join("");
        const caseAttr = CASE_LABELS[row.label] ? ` data-case="${esc(row.label)}"` : "";
        return `<tr${caseAttr}><th scope="row">${esc(row.label)}</th>${cells}</tr>`;
      })
      .join("");
    return `
      ${prompt(item.q || "Complete the table.")}
      <div class="tbl-wrap"><table class="tbl tbl--fill"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>
      ${keyboardBar("")}`;
  },
  mount(item, root, ctx) {
    const first = root.querySelector(".cell-input");
    if (first && !ctx.touch) setTimeout(() => first.focus(), 60);
  },
  ready(item, root) {
    return Array.from(root.querySelectorAll(".cell-input")).every((i) => i.value.trim().length > 0);
  },
  check(item, root) {
    const inputs = Array.from(root.querySelectorAll(".cell-input"));
    let allRight = true;
    let slipped = false;
    const given = [];
    for (const input of inputs) {
      const res = gradeText(input.value, input.dataset.answer);
      input.dataset.ok = res.correct ? "1" : "0";
      input.dataset.slip = res.accentSlip ? "1" : "";
      if (!res.correct) allRight = false;
      if (res.accentSlip) slipped = true;
      given.push(input.value.trim());
    }
    return {
      correct: allRight,
      given: given.join(", "),
      expected: inputs.map((i) => i.dataset.answer).join(", "),
      note: allRight && slipped ? "Right — but the accents matter in a paradigm." : null
    };
  },
  reveal(item, root) {
    for (const input of root.querySelectorAll(".cell-input")) {
      const ok = input.dataset.ok === "1";
      const slip = input.dataset.slip === "1";
      input.classList.add(ok && !slip ? "is-right" : slip ? "is-slip" : "is-wrong");
      // Always leave the canonical spelling on screen — this is a paradigm drill.
      if (!ok || slip) input.value = input.dataset.answer;
      input.readOnly = true;
    }
  }
};

/* ------------------------------------------------------------- gender */

const gender = {
  render(item) {
    return `
      ${prompt(item.q || "Which gender is this noun?")}
      <p class="big-word is">${esc(item.word)} ${speakButton(item.word)}</p>
      <div class="opts opts--gender">
        ${["kk", "kvk", "hk"]
          .map(
            (g) => `<button class="opt opt--g opt--${g}" type="button" data-act="choose" data-value="${g}">
              <span class="opt__text">${esc(GENDER_LABELS[g].is)}</span>
              <span class="opt__sub">${esc(GENDER_LABELS[g].en)}</span>
            </button>`
          )
          .join("")}
      </div>`;
  },
  mount(item, root, ctx) {
    if (ctx.autoSpeak) speak(item.word);
  },
  ready(item, root) {
    return Boolean(root.querySelector(".opt.is-picked"));
  },
  check(item, root) {
    const picked = root.querySelector(".opt.is-picked");
    const given = picked?.dataset.value ?? "";
    return {
      correct: given === item.a,
      given,
      expected: `${GENDER_LABELS[item.a].is} (${GENDER_LABELS[item.a].en})`
    };
  },
  reveal(item, root, result) {
    for (const el of root.querySelectorAll(".opt")) {
      if (el.dataset.value === item.a) el.classList.add("is-right");
      else if (el.dataset.value === result.given) el.classList.add("is-wrong");
      el.disabled = true;
    }
  }
};

/* -------------------------------------------------------------- speak */

const speakItem = {
  selfGraded: true,
  render(item) {
    return `
      ${prompt("Say it out loud, then rate yourself.")}
      <p class="big-word is">${esc(item.is)}</p>
      <p class="q__sub">${esc(item.en || "")}</p>
      <div class="listen-stage">${speakButton(item.is, { large: true, label: "Hear it" })}</div>
      ${item.tip ? `<p class="tip">${esc(item.tip)}</p>` : ""}
      <div class="opts opts--inline">
        <button class="opt opt--sm" type="button" data-act="choose" data-value="again">Tricky</button>
        <button class="opt opt--sm" type="button" data-act="choose" data-value="ok">Got it</button>
      </div>`;
  },
  mount(item, root, ctx) {
    if (ctx.autoSpeak) setTimeout(() => speak(item.is), 220);
  },
  ready(item, root) {
    return Boolean(root.querySelector(".opt.is-picked"));
  },
  check(item, root) {
    const given = root.querySelector(".opt.is-picked")?.dataset.value ?? "ok";
    return { correct: given === "ok", given, expected: item.is, selfGraded: true };
  },
  reveal() {}
};

export const RENDERERS = {
  choice,
  type,
  build,
  listen,
  match,
  fill,
  table,
  gender,
  speak: speakItem
};

export function rendererFor(item) {
  return RENDERERS[item?.t] || null;
}

/** Short human label used on the results screen. */
export const TYPE_LABEL = {
  choice: "Choose",
  type: "Write",
  build: "Build",
  listen: "Listen",
  match: "Match",
  fill: "Form",
  table: "Table",
  gender: "Gender",
  speak: "Say"
};
