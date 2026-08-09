/* Lundi — app controller: boot, routing, delegated actions, sessions. */

import { $, $$, delegate, debounce, shuffle } from "./dom.js";
import { loadCore, content, index, loadUnit, loadLesson, loadAllUnits } from "./data.js";
import {
  state,
  save,
  subscribe,
  addXP,
  completeLesson,
  completeDrillRound,
  setProfile,
  resetAll,
  exportJSON,
  importJSON,
  todayXP,
  goalProgress,
  streakIsCold
} from "./store.js";
import * as router from "./router.js";
import { speak, primeSpeech, primeAudio, sfx, haptic } from "./audio.js";
import { startSession, lessonQueue } from "./engine/session.js";
import { seed } from "./srs.js";
import { puffinSVG } from "./puffin.js";

import * as Learn from "./views/learn.js";
import * as Drill from "./views/drill.js";
import * as Words from "./views/words.js";
import * as Grammar from "./views/grammar.js";
import * as Read from "./views/read.js";
import * as Novels from "./views/novels.js";
import * as Me from "./views/me.js";

const screen = $("#screen");
const layer = $("#layer");
const sheetHost = $("#sheetHost");
const toasts = $("#toasts");
const app = $("#app");
const boot = $("#boot");

const scrollMemory = new Map();
let currentPath = "";

/* ------------------------------------------------------------- chrome */

function applyTheme() {
  document.documentElement.dataset.theme = state.profile.theme || "auto";
}

function paintTopbar() {
  const streakEl = $("#statStreak");
  if (streakEl) {
    streakEl.textContent = state.streak.count;
    streakEl.closest(".chip")?.classList.toggle("is-cold", streakIsCold());
  }
  const xpEl = $("#statXp");
  if (xpEl) xpEl.textContent = state.xp >= 10000 ? `${Math.round(state.xp / 1000)}k` : state.xp;
  const goalEl = $("#statGoal");
  if (goalEl) goalEl.textContent = todayXP();
  const ring = $("#goalRing");
  if (ring) {
    const circumference = 2 * Math.PI * 15.5;
    ring.style.strokeDasharray = String(circumference);
    ring.style.strokeDashoffset = String(circumference * (1 - goalProgress()));
  }
}

function setActiveTab(name) {
  for (const tab of $$(".tab")) tab.classList.toggle("is-active", tab.dataset.nav === name);
}

function toast(message, kind = "") {
  const el = document.createElement("div");
  el.className = `toast ${kind ? `toast--${kind}` : ""}`;
  el.textContent = message;
  toasts.appendChild(el);
  setTimeout(() => {
    el.classList.add("is-out");
    setTimeout(() => el.remove(), 260);
  }, 2600);
}

/* -------------------------------------------------------------- sheets */

function openSheet(markup) {
  sheetHost.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${String(markup ?? "")}</div>`;
  sheetHost.hidden = false;
  document.body.style.overflow = "hidden";
  sheetHost.querySelector(".sheet")?.focus?.();
}

function closeSheet() {
  sheetHost.hidden = true;
  sheetHost.innerHTML = "";
  document.body.style.overflow = "";
}

/* -------------------------------------------------------------- render */

/** A search box that survived a re-render should keep focus and caret. */
let focusRestore = null;

function rememberFocus(el) {
  focusRestore = {
    id: el.id,
    start: el.selectionStart,
    end: el.selectionEnd
  };
}

function restoreFocus() {
  if (!focusRestore) return;
  const { id, start, end } = focusRestore;
  focusRestore = null;
  const el = id && screen.querySelector(`#${CSS.escape(id)}`);
  if (!el) return;
  el.focus({ preventScroll: true });
  try {
    el.setSelectionRange(start ?? el.value.length, end ?? el.value.length);
  } catch {
    /* search inputs do not always support selection ranges */
  }
}

async function show(markup, { tab, path }) {
  if (currentPath) scrollMemory.set(currentPath, window.scrollY);
  currentPath = path;
  screen.innerHTML = String(markup ?? "");
  restoreFocus();
  setActiveTab(tab);
  paintTopbar();
  const y = scrollMemory.get(path);
  requestAnimationFrame(() => {
    if (y !== undefined) {
      window.scrollTo({ top: y, behavior: "auto" });
      return;
    }
    // First visit to the path this session: put the unit you are actually on
    // in view instead of making you scroll past everything you finished.
    const current = path === "learn" ? screen.querySelector(".unit.is-current") : null;
    if (current && current.offsetTop > window.innerHeight * 0.6) {
      window.scrollTo({ top: current.offsetTop - 120, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  });
}

/* -------------------------------------------------------------- routes */

router.register("learn", async () => show(Learn.renderLearn(), { tab: "learn", path: "learn" }));
router.register("learn/:slug", async ({ slug }) =>
  show(await Learn.renderUnit(slug), { tab: "learn", path: `learn/${slug}` })
);
router.register("read", async () => show(Read.renderRead(), { tab: "learn", path: "read" }));
router.register("read/:id", async ({ id }) => show(Read.renderReading(id), { tab: "learn", path: `read/${id}` }));
router.register("novels", async () => show(Novels.renderNovels(), { tab: "learn", path: "novels" }));
router.register("novel/:id", async ({ id }) => show(Novels.renderNovel(id), { tab: "learn", path: `novel/${id}` }));
router.register("novel/:id/:n", async ({ id, n }) =>
  show(Novels.renderChapter(id, n), { tab: "learn", path: `novel/${id}/${n}` })
);

router.register("drill", async () => show(Drill.renderDrill(drillCat), { tab: "drill", path: "drill" }));
router.register("drill/:id", async ({ id }) =>
  show(Drill.renderDrillDetail(id), { tab: "drill", path: `drill/${id}` })
);

router.register("words", async () => show(Words.renderWords(), { tab: "words", path: "words" }));
router.register("phrases", async () => show(Words.renderPhrases(), { tab: "words", path: "phrases" }));

router.register("grammar", async () => show(Grammar.renderGrammar(), { tab: "grammar", path: "grammar" }));
router.register("grammar/cases", async () => show(Grammar.renderCases(), { tab: "grammar", path: "grammar/cases" }));
router.register("grammar/preps", async () => show(Grammar.renderPreps(), { tab: "grammar", path: "grammar/preps" }));
router.register("grammar/verbs", async () => show(Grammar.renderVerbs(), { tab: "grammar", path: "grammar/verbs" }));
router.register("topic/:id", async ({ id }) => show(Grammar.renderTopic(id), { tab: "grammar", path: `topic/${id}` }));

router.register("me", async () => show(Me.renderMe(), { tab: "me", path: "me" }));

let drillCat = "all";

function refresh() {
  return router.resolve();
}

/* ------------------------------------------------------------ sessions */

function play(config) {
  primeSpeech();
  primeAudio();
  startSession(layer, config);
}

async function playLesson(lessonId) {
  const lesson = await loadLesson(lessonId);
  if (!lesson) return toast("That lesson could not be loaded.", "bad");
  const items = lessonQueue(lesson);
  if (!items.length) return toast("That lesson has no exercises.", "bad");

  play({
    title: lesson.title,
    subtitle: lesson.en,
    goal: lesson.goal,
    teach: lesson.teach,
    story: lesson.story,
    kind: "lesson",
    items,
    onFinish(summary) {
      completeLesson(lessonId, { score: summary.accuracy, seconds: summary.seconds });
      // The words this lesson introduced now enter the review queue.
      for (const word of lesson.vocab || []) seed(`w:${word}`);
      const before = state.streak.count;
      addXP(summary.xp);
      paintTopbar();
      if (state.streak.count > before && state.streak.count > 1) {
        sfx("streak");
        toast(`${state.streak.count}-day streak!`, "good");
      } else {
        toast(`+${summary.xp} XP`, "good");
      }
      refresh();
    },
    onQuit: refresh
  });
}

async function playUnitTest(slug) {
  let unit;
  try {
    unit = await loadUnit(slug);
  } catch {
    return toast("That unit could not be loaded.", "bad");
  }
  const pool = (unit.lessons || []).flatMap((l) => l.items || []);
  const items = shuffle(pool).slice(0, 16);
  if (!items.length) return toast("Nothing to test yet.", "bad");
  play({
    title: `${unit.title} · workout`,
    kind: "test",
    items,
    onFinish(summary) {
      addXP(summary.xp);
      toast(`+${summary.xp} XP`, "good");
      refresh();
    },
    onQuit: refresh
  });
}

function playReview(limit = 20) {
  const items = Words.reviewExercises(limit);
  if (!items.length) return toast("Nothing is due right now.", "");
  play({
    title: "Review",
    kind: "review",
    items,
    onFinish(summary) {
      addXP(summary.xp);
      toast(`+${summary.xp} XP`, "good");
      refresh();
    },
    onQuit: refresh
  });
}

function playDrillRound(id, roundN) {
  const drill = index.drillById.get(id);
  if (!drill) return toast("Drill not found.", "bad");
  const items = Drill.roundExercises(drill, roundN);
  if (!items.length) return toast("That round is empty.", "bad");
  play({
    title: `${drill.title} · round ${roundN}`,
    kind: "drill",
    items,
    onFinish(summary) {
      completeDrillRound(id, roundN, summary.correct);
      addXP(summary.xp);
      if (summary.correct >= 5 && roundN < 5) toast(`Round ${roundN + 1} unlocked`, "good");
      else if (summary.correct >= 5 && roundN === 5) toast("Set cleared. Nicely done.", "good");
      else toast(`${summary.correct}/6 — clear 5 to move on`, "");
      refresh();
    },
    onQuit: refresh
  });
}

function playDrillMarathon(id) {
  const drill = index.drillById.get(id);
  if (!drill) return;
  play({
    title: `${drill.title} · marathon`,
    kind: "drill",
    items: Drill.marathonExercises(drill),
    onFinish(summary) {
      addXP(summary.xp);
      toast(`+${summary.xp} XP`, "good");
      refresh();
    },
    onQuit: refresh
  });
}

function playChapterQuiz(id, n) {
  const novel = index.novelById.get(id);
  const chapter = novel?.chapters.find((c) => c.n === n);
  if (!chapter) return;
  const items = Novels.chapterExercises(novel, chapter);
  if (!items.length) return toast("No questions for this chapter.", "");
  play({
    title: `${novel.title} · ${chapter.title}`,
    kind: "review",
    items,
    onFinish(summary) {
      Novels.markChapter(id, n);
      addXP(summary.xp);
      save();
      toast(`+${summary.xp} XP`, "good");
      refresh();
    },
    onQuit: refresh
  });
}

function playReadingQuiz(id) {
  const reading = index.readingById.get(id);
  if (!reading) return;
  const items = Read.readingExercises(reading);
  if (!items.length) return toast("No questions for this text.", "");
  play({
    title: reading.title,
    kind: "review",
    items,
    onFinish(summary) {
      addXP(summary.xp);
      toast(`+${summary.xp} XP`, "good");
      refresh();
    },
    onQuit: refresh
  });
}

/* ------------------------------------------------------------- actions */

const searchWords = debounce(() => refresh(), 260);

function wireActions() {
  // Tab bar and anything with data-nav.
  delegate(document.body, "click", "[data-nav]", (event, el) => {
    event.preventDefault();
    primeSpeech();
    primeAudio();
    const dest = el.dataset.nav;
    router.go(dest === "learn" ? "learn" : dest);
  });

  delegate(document.body, "click", "[data-act]", async (event, el) => {
    // The session player has its own delegate on #layer. Both listeners see the
    // same bubbling click, so anything inside the layer must be left to it —
    // otherwise toggles fire twice and speech cancels itself.
    if (layer.contains(el)) return;

    const act = el.dataset.act;

    /* ---- global ---- */
    if (act === "speak") {
      event.preventDefault();
      primeSpeech();
      el.classList.add("is-playing");
      speak(el.dataset.text, { onend: () => el.classList.remove("is-playing") });
      return;
    }
    if (act === "back") {
      event.preventDefault();
      router.back("learn");
      return;
    }
    if (act === "close-sheet") return closeSheet();
    if (act === "goto-me") {
      closeSheet();
      return router.go("me");
    }
    if (act === "locked") {
      haptic("wrong");
      toast("Finish the lesson before this one first.", "");
      return;
    }

    /* ---- learn ---- */
    if (act === "play") return playLesson(el.dataset.lesson);
    if (act === "unit") return router.go(`learn/${el.dataset.unit}`);
    if (act === "unit-test") return playUnitTest(el.dataset.unit);
    if (act === "review-all") return playReview(20);

    /* ---- words ---- */
    if (act === "word") return openSheet(Words.wordSheet(el.dataset.w));
    if (act === "review-words") return playReview(20);
    if (act === "quiz-visible") {
      const items = Words.quizExercises(Words.filtered(), 16);
      if (!items.length) return toast("No words to quiz.", "");
      return play({
        title: "Word quiz",
        kind: "review",
        items,
        onFinish(summary) {
          addXP(summary.xp);
          toast(`+${summary.xp} XP`, "good");
          refresh();
        },
        onQuit: refresh
      });
    }
    if (act === "word-topic") {
      Words.wordFilters.topic = el.dataset.topic;
      return refresh();
    }
    if (act === "word-pos") {
      Words.wordFilters.pos = el.dataset.pos;
      return refresh();
    }

    /* ---- drill ---- */
    if (act === "drill") return router.go(`drill/${el.dataset.id}`);
    if (act === "drill-cat") {
      drillCat = el.dataset.cat;
      return refresh();
    }
    if (act === "drill-cat-go") {
      drillCat = el.dataset.cat;
      return router.go("drill");
    }
    if (act === "drill-round") return playDrillRound(el.dataset.id, Number(el.dataset.round));
    if (act === "drill-all") return playDrillMarathon(el.dataset.id);

    /* ---- grammar ---- */
    if (act === "g-cases") return router.go("grammar/cases");
    if (act === "g-preps") return router.go("grammar/preps");
    if (act === "g-verbs") return router.go("grammar/verbs");
    if (act === "g-topic") return router.go(`topic/${el.dataset.id}`);
    if (act === "prep-case") {
      Grammar.prepFilter.case = el.dataset.case;
      return refresh();
    }
    if (act === "verb-gov") {
      Grammar.verbFilter.gov = el.dataset.gov;
      return refresh();
    }

    /* ---- reading ---- */
    if (act === "read") return router.go(`read/${el.dataset.id}`);
    if (act === "read-level") {
      Read.readFilter.level = el.dataset.level;
      return refresh();
    }
    if (act === "read-quiz") return playReadingQuiz(el.dataset.id);
    if (act === "novels") return router.go("novels");
    if (act === "novel") return router.go(`novel/${el.dataset.id}`);
    if (act === "chapter") return router.go(`novel/${el.dataset.id}/${el.dataset.n}`);
    if (act === "chapter-quiz") return playChapterQuiz(el.dataset.id, Number(el.dataset.n));
    if (act === "toggle-translation") {
      const block = $("#translationBlock");
      if (!block) return;
      const shown = block.hasAttribute("hidden");
      block.toggleAttribute("hidden", !shown);
      el.textContent = shown ? "Hide translation" : "Show translation";
      if (shown) block.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return;
    }
    if (act === "rline") {
      el.classList.toggle("is-open");
      return;
    }
    if (act === "toggle-en") {
      const body = $("#readingBody");
      if (!body) return;
      const on = body.classList.toggle("show-en");
      el.textContent = on ? "Hide all English" : "Show all English";
      return;
    }

    /* ---- me ---- */
    if (act === "set-goal") {
      setProfile({ dailyGoal: Number(el.dataset.xp) });
      paintTopbar();
      return refresh();
    }
    if (act === "set-theme") {
      setProfile({ theme: el.dataset.theme });
      applyTheme();
      return refresh();
    }
    if (act === "export") {
      downloadBackup();
      return;
    }
    if (act === "import") {
      importBackup();
      return;
    }
    if (act === "reset") {
      if (!confirm("Erase all progress, streak and review history? This cannot be undone.")) return;
      resetAll();
      applyTheme();
      paintTopbar();
      toast("Progress reset.", "");
      return refresh();
    }
    if (act === "download-all") {
      el.disabled = true;
      const label = el.textContent;
      await loadAllUnits((done, total) => {
        el.textContent = `Downloading ${done}/${total}…`;
      });
      el.textContent = "Available offline ✓";
      toast("All units cached for offline use.", "good");
      setTimeout(() => {
        el.textContent = label;
        el.disabled = false;
      }, 4000);
      return;
    }
  });

  // The three topbar chips open a small explainer sheet.
  delegate(document.body, "click", "[data-sheet]", (event, el) => {
    event.preventDefault();
    openSheet(statSheet(el.dataset.sheet));
  });

  // Toggles, ranges and selects.
  delegate(document.body, "change", "[data-act='toggle']", (event, el) => {
    setProfile({ [el.dataset.key]: el.checked });
  });
  delegate(document.body, "input", "[data-act='set-rate']", (event, el) => {
    setProfile({ rate: Number(el.value) });
    const out = el.parentElement?.querySelector(".field__v");
    if (out) out.textContent = `${Number(el.value).toFixed(2)}×`;
  });
  delegate(document.body, "change", "[data-act='set-voice']", (event, el) => {
    setProfile({ voiceURI: el.value });
    speak("Góðan daginn");
  });

  // Search inputs. Each re-renders its list, so the caret has to be preserved.
  delegate(document.body, "input", "#wordSearch", (event, el) => {
    Words.wordFilters.q = el.value;
    rememberFocus(el);
    searchWords();
  });
  delegate(document.body, "input", "#prepSearch", (event, el) => {
    Grammar.prepFilter.q = el.value;
    rememberFocus(el);
    searchWords();
  });
  delegate(document.body, "input", "#verbSearch", (event, el) => {
    Grammar.verbFilter.q = el.value;
    rememberFocus(el);
    searchWords();
  });

  // Skip link: move focus without letting "#screen" reach the hash router.
  $(".skip-link")?.addEventListener("click", (event) => {
    event.preventDefault();
    screen.focus({ preventScroll: false });
    screen.scrollIntoView({ block: "start" });
  });

  // Dismiss the sheet by tapping the scrim or pressing Escape.
  sheetHost.addEventListener("click", (event) => {
    if (event.target === sheetHost) closeSheet();
  });
  addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !sheetHost.hidden) closeSheet();
  });
}

/* -------------------------------------------------------------- backup */

function downloadBackup() {
  try {
    const blob = new Blob([exportJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lundi-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Backup downloaded.", "good");
  } catch {
    toast("Could not create the backup file.", "bad");
  }
}

function importBackup() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json,.json";
  input.addEventListener("change", async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      importJSON(await file.text());
      applyTheme();
      paintTopbar();
      toast("Backup restored.", "good");
      refresh();
    } catch {
      toast("That file could not be read.", "bad");
    }
  });
  input.click();
}

/* ---------------------------------------------------------------- boot */

async function main() {
  applyTheme();

  try {
    await loadCore();
  } catch (err) {
    console.error("Lundi: content failed to load", err);
  }

  // Restore the search filter state on a soft reload.
  wireActions();
  subscribe(paintTopbar);
  paintTopbar();

  await router.start(() => paintTopbar());

  app.hidden = false;
  boot.classList.add("is-gone");
  setTimeout(() => boot.remove(), 500);

  if (!state.flags.onboarded) {
    state.flags.onboarded = true;
    save();
    setTimeout(() => openSheet(welcomeSheet()), 550);
  }

  if (content.missing.length) {
    console.warn("Lundi: some content modules are missing:", content.missing);
  }

  registerServiceWorker();
}

function statSheet(kind) {
  const goal = Math.max(10, state.profile.dailyGoal || 30);
  const left = Math.max(0, goal - todayXP());
  const pct = Math.round(goalProgress() * 100);

  if (kind === "streak") {
    const cold = streakIsCold();
    return `
      <div class="sheet__grab"></div>
      <h2 class="sheet__title">🔥 ${state.streak.count}-day streak</h2>
      <p class="muted small">
        ${
          cold
            ? "Your streak has gone cold. Finish anything today and it starts again at one."
            : `Longest ever: ${state.streak.best} days. Earn any XP before midnight to keep it.`
        }
      </p>
      <p class="tiny dim" style="margin-top:var(--sp-3)">
        You have ${state.streak.freezes} streak ${state.streak.freezes === 1 ? "freeze" : "freezes"} left —
        each one covers a single missed day, automatically.
      </p>
      <button class="btn btn--block" style="margin-top:var(--sp-4)" data-act="close-sheet">Close</button>`;
  }

  if (kind === "xp") {
    return `
      <div class="sheet__grab"></div>
      <h2 class="sheet__title">💎 ${state.xp} XP</h2>
      <p class="muted small">
        Two XP for every correct answer, ten for finishing a session, six more for a clean sweep.
      </p>
      <p class="tiny dim" style="margin-top:var(--sp-3)">
        ${state.stats.answered} answers given, ${state.stats.correct} of them right.
      </p>
      <button class="btn btn--block" style="margin-top:var(--sp-4)" data-act="close-sheet">Close</button>`;
  }

  return `
    <div class="sheet__grab"></div>
    <h2 class="sheet__title">Today's goal</h2>
    <p class="muted small">${todayXP()} of ${goal} XP — ${pct}% of the way there.</p>
    <div class="bar" style="margin-block:var(--sp-3)"><div class="bar__fill" style="width:${pct}%"></div></div>
    <p class="tiny dim">${left ? `${left} XP to go. That is about one lesson.` : "Goal met. Anything more is a bonus."}</p>
    <button class="btn btn--block" style="margin-top:var(--sp-4)" data-act="goto-me">Change my daily goal</button>
    <button class="btn btn--ghost btn--block" data-act="close-sheet">Close</button>`;
}

function welcomeSheet() {
  return `
    <div class="sheet__grab"></div>
    <div class="center stack">
      ${puffinSVG({ mood: "wave", size: 120 })}
      <h2 class="h1">Komdu sæll og blessaður!</h2>
      <p class="muted small">
        I am Lúlli. I will be here every day, whether or not you are.
      </p>
      <div class="stack" style="text-align:left;gap:.5rem">
        <p class="small"><b>Learn</b> walks the path — ${content.manifest.length} units from your first hello to real conversations.</p>
        <p class="small"><b>Drill</b> is the gym: one instruction, five rounds, until the endings are automatic.</p>
        <p class="small"><b>Words</b> and <b>Grammar</b> are always there to look things up mid-sentence.</p>
      </div>
      <button class="btn btn--primary btn--block" data-act="close-sheet">Byrjum! Let's start</button>
    </div>`;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol === "file:") return;
  const register = () =>
    navigator.serviceWorker.register("sw.js").catch((err) => {
      console.info("Lundi: service worker not registered.", err?.message || err);
    });
  // Boot finishes after `load` has already fired, so listening for it would
  // silently never run. Register straight away in that case.
  if (document.readyState === "complete") register();
  else addEventListener("load", register, { once: true });
}

main();
