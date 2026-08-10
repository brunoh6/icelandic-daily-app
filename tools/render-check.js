#!/usr/bin/env node
/**
 * Renders every view against the real content and fails if any markup came out
 * escaped — i.e. shows up as visible "<p class=…" text instead of an element.
 *
 * The trap this catches: the `html` tagged template escapes every interpolation
 * unless it is already raw. A nested html`…` is fine, but a plain backtick
 * string is just a string, so its tags get escaped and render as gibberish.
 * Grepping for the pattern misses cases (`: \`<` , bare `${fn()}`), so this
 * checks the actual output instead.
 *
 *   node tools/render-check.js
 */
import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = process.cwd();

/* ------------------------------------------------------------------ DOM */
// The views only touch a handful of browser APIs at render time. Stub enough
// of them that the modules import and run under Node.
function installDomStubs() {
  const noop = () => {};
  const el = () => ({
    style: {},
    dataset: {},
    classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    setAttribute: noop,
    removeAttribute: noop,
    appendChild: noop,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: noop,
    removeEventListener: noop,
    getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 })
  });

  const store = new Map();
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear()
  };
  globalThis.document = {
    documentElement: el(),
    body: el(),
    createElement: el,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: noop,
    removeEventListener: noop,
    visibilityState: "visible"
  };
  globalThis.window = globalThis;
  globalThis.addEventListener = noop;
  globalThis.removeEventListener = noop;
  globalThis.matchMedia = () => ({ matches: false, addEventListener: noop, addListener: noop });
  globalThis.CSS = { escape: (s) => String(s) };
  globalThis.requestAnimationFrame = (fn) => setTimeout(fn, 0);
  globalThis.navigator = { vibrate: noop, serviceWorker: undefined };
  // No speech engine in Node — voicePicker() must take its "no voice" branch,
  // which is exactly the branch that was rendering as raw text.
  delete globalThis.speechSynthesis;
}

installDomStubs();

/* --------------------------------------------------------------- checks */

const problems = [];

/** Anything that looks like an escaped tag or attribute in rendered output. */
const ESCAPED_MARKUP = /&lt;\/?[a-zA-Z][^&]{0,80}&gt;|&lt;[a-zA-Z]+\s+class=|class=&quot;/;

function check(label, output) {
  const text = String(output ?? "");
  if (!text) return;
  const match = text.match(ESCAPED_MARKUP);
  if (match) {
    const at = Math.max(0, match.index - 40);
    problems.push({
      label,
      snippet: text.slice(at, match.index + match[0].length + 60).replace(/\s+/g, " ").trim()
    });
  }
}

async function main() {
  const mod = (p) => import(pathToFileURL(path.join(ROOT, p)).href);

  const { loadCore, content, index } = await mod("js/data.js");
  await loadCore();
  if (!content.manifest.length) {
    console.error("No content loaded — run node tools/build.js first.");
    process.exit(2);
  }

  const Learn = await mod("js/views/learn.js");
  const Drill = await mod("js/views/drill.js");
  const Words = await mod("js/views/words.js");
  const Grammar = await mod("js/views/grammar.js");
  const Read = await mod("js/views/read.js");
  const Novels = await mod("js/views/novels.js");
  const Me = await mod("js/views/me.js");

  /* ---- the always-on views ---- */
  check("learn", Learn.renderLearn());
  check("drill", Drill.renderDrill("all"));
  check("words", Words.renderWords());
  check("phrases", Words.renderPhrases());
  check("grammar", Grammar.renderGrammar());
  check("grammar/cases", Grammar.renderCases());
  check("grammar/preps", Grammar.renderPreps());
  check("grammar/verbs", Grammar.renderVerbs());
  check("read", Read.renderRead());
  check("novels", Novels.renderNovels());
  check("me", Me.renderMe());

  /* ---- every detail page, against every real record ---- */
  for (const u of content.manifest) check(`learn/${u.slug}`, await Learn.renderUnit(u.slug));
  for (const d of content.drills) check(`drill/${d.id}`, Drill.renderDrillDetail(d.id));
  for (const t of content.grammar) check(`topic/${t.id}`, Grammar.renderTopic(t.id));
  for (const r of content.readings) check(`read/${r.id}`, Read.renderReading(r.id));
  for (const n of content.novels) {
    check(`novel/${n.id}`, Novels.renderNovel(n.id));
    for (const c of n.chapters) check(`novel/${n.id}/${c.n}`, Novels.renderChapter(n.id, c.n));
  }
  for (const v of content.vocab) check(`word/${v.w}`, Words.wordSheet(v.w));

  /* ---- the empty branches, which only appear when a filter matches nothing ---- */
  Grammar.prepFilter.q = "zzzzz";
  check("grammar/preps (no matches)", Grammar.renderPreps());
  Grammar.prepFilter.q = "";

  Grammar.verbFilter.q = "zzzzz";
  check("grammar/verbs (no matches)", Grammar.renderVerbs());
  Grammar.verbFilter.q = "";

  Words.wordFilters.q = "zzzzz";
  check("words (no matches)", Words.renderWords());
  Words.wordFilters.q = "";

  let extra = 3;

  /* ---- branches that only fire once there is progress ----
     Crowns, done-nodes, streaks and cleared drill rounds are invisible to a
     fresh state, so seed one and render again. */
  const { state, save } = await mod("js/store.js");
  const seeded = [];
  for (const u of content.manifest) {
    for (const l of u.lessons) {
      state.lessons[l.id] = { completed: 2, best: 1, lastAt: Date.now(), crown: 3 };
      seeded.push(l.id);
    }
  }
  for (const d of content.drills) {
    state.drills[d.id] = { round: 5, cleared: 1, best: { 1: 6, 2: 6, 3: 6, 4: 6, 5: 6 }, lastAt: Date.now() };
  }
  for (const v of content.vocab.slice(0, 50)) {
    state.srs[`w:${v.w}`] = { key: `w:${v.w}`, ef: 2.5, ivl: 30, due: "2000-01-01", reps: 6, lapses: 0, seen: 6, lastAt: 1 };
  }
  for (const n of content.novels) {
    state.novels[n.id] = Object.fromEntries(n.chapters.map((c) => [c.n, true]));
  }
  state.xp = 5000;
  state.streak = { count: 30, best: 30, lastDay: "2000-01-01", freezes: 1 };
  save({ quiet: true });

  check("learn (course complete)", Learn.renderLearn());
  check("drill (all cleared)", Drill.renderDrill("all"));
  check("words (with progress)", Words.renderWords());
  check("me (with progress)", Me.renderMe());
  check("novels (all read)", Novels.renderNovels());
  for (const n of content.novels) check(`novel/${n.id} (read)`, Novels.renderNovel(n.id));
  for (const u of content.manifest.slice(0, 3)) check(`learn/${u.slug} (done)`, await Learn.renderUnit(u.slug));
  extra += 5 + content.novels.length + 3;

  /* ---- the "no content at all" branches ---- */
  const backup = {};
  for (const key of ["manifest", "vocab", "grammar", "drills", "prepositions", "verbCases", "phrases", "readings", "novels"]) {
    backup[key] = content[key];
    content[key] = [];
  }
  check("learn (no content)", Learn.renderLearn());
  check("drill (no content)", Drill.renderDrill("all"));
  check("words (no content)", Words.renderWords());
  check("phrases (no content)", Words.renderPhrases());
  check("grammar (no content)", Grammar.renderGrammar());
  check("grammar/preps (no content)", Grammar.renderPreps());
  check("grammar/verbs (no content)", Grammar.renderVerbs());
  check("read (no content)", Read.renderRead());
  check("novels (no content)", Novels.renderNovels());
  check("me (no content)", Me.renderMe());
  extra += 10;
  Object.assign(content, backup);

  /* ---- report ---- */
  const surfaces =
    11 +
    content.manifest.length +
    content.drills.length +
    content.grammar.length +
    content.readings.length +
    content.novels.reduce((a, n) => a + n.chapters.length + 1, 0) +
    content.vocab.length +
    extra;

  console.log(`rendered ${surfaces} surfaces (fresh, with progress, and with no content)`);
  if (problems.length) {
    console.log(`\n${problems.length} surface(s) leaked escaped markup:\n`);
    for (const p of problems.slice(0, 20)) {
      console.log(`  ✗ ${p.label}`);
      console.log(`      …${p.snippet}…`);
    }
    if (problems.length > 20) console.log(`  … and ${problems.length - 20} more`);
    console.log("\nFAILED — an interpolated plain string needs raw(...) or html`...`");
    process.exit(1);
  }
  console.log("\nOK — no escaped markup in any view");
}

main().catch((err) => {
  console.error("render-check crashed:", err);
  process.exit(2);
});
