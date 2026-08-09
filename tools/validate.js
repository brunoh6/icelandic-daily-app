#!/usr/bin/env node
/**
 * Structural validator for every data module in the app.
 * Run from the repo root:  node tools/validate.js
 * Exits non-zero and prints a report when anything is malformed.
 */
import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = process.cwd();
const errors = [];
const warnings = [];
const stats = {};

const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const CASES = new Set(["NF", "ÞF", "ÞGF", "EF"]);
const GENDERS = new Set(["kk", "kvk", "hk"]);
const POS = new Set(["noun", "verb", "adj", "adv", "prep", "pron", "num", "conj", "phrase", "interj"]);
const KINDS = new Set(["lesson", "grammar", "story", "review", "checkpoint"]);
const ITEM_TYPES = new Set(["choice", "type", "build", "listen", "match", "fill", "table", "gender", "speak"]);
const GRAMMAR_CATS = new Set([
  "sounds", "nouns", "adjectives", "verbs", "pronouns",
  "numbers", "cases", "prepositions", "syntax", "wordformation"
]);
const GOV = new Set(["ÞF", "ÞGF", "EF", "ÞF+ÞGF", "impersonal-ÞF", "impersonal-ÞGF", "none"]);

// Characters that should never appear in authored content.
const BAD_CHARS = /[-�]|&[a-z]+;|&#\d+;/i;

async function load(rel) {
  const abs = path.join(ROOT, rel);
  if (!existsSync(abs)) return null;
  return import(pathToFileURL(abs).href + `?t=${Date.now()}`);
}

function checkText(where, s) {
  if (typeof s !== "string") return;
  if (BAD_CHARS.test(s)) err(where, `contains mojibake or an HTML entity: ${JSON.stringify(s.slice(0, 80))}`);
  if (/\s{2,}/.test(s.trim())) warn(where, `has a double space: ${JSON.stringify(s.slice(0, 60))}`);
}

function walkStrings(where, value, seen = new Set()) {
  if (typeof value === "string") return checkText(where, value);
  if (!value || typeof value !== "object" || seen.has(value)) return;
  seen.add(value);
  for (const [k, v] of Object.entries(value)) walkStrings(`${where}.${k}`, v, seen);
}

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[.,!?;:"“”„«»]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/* ------------------------------------------------------------------ items */
function validateItem(where, it, vocabSet) {
  if (!it || typeof it !== "object") return err(where, "item is not an object");
  if (!ITEM_TYPES.has(it.t)) return err(where, `unknown item type ${JSON.stringify(it.t)}`);
  walkStrings(where, it);

  const need = (field) => {
    if (it[field] === undefined || it[field] === null || it[field] === "") {
      err(where, `${it.t} is missing "${field}"`);
      return false;
    }
    return true;
  };

  switch (it.t) {
    case "choice": {
      if (!need("q") || !need("a")) break;
      if (!Array.isArray(it.opts) || it.opts.length < 3 || it.opts.length > 5) {
        err(where, "choice needs 3-5 opts");
        break;
      }
      if (new Set(it.opts.map(norm)).size !== it.opts.length) err(where, "choice has duplicate opts");
      if (!it.opts.includes(it.a)) err(where, `choice answer ${JSON.stringify(it.a)} is not among opts`);
      break;
    }
    case "type": {
      if (!need("q") || !need("a")) break;
      if (it.alt && !Array.isArray(it.alt)) err(where, "alt must be an array");
      if (it.alt) {
        for (const a of it.alt) {
          if (norm(a) === norm(it.a)) warn(where, `alt ${JSON.stringify(a)} only differs by case/punctuation`);
        }
      }
      if (String(it.a).trim().split(/\s+/).length > 10) warn(where, "type answer longer than 10 words");
      break;
    }
    case "build": {
      if (!need("q") || !need("a")) break;
      const tokens = String(it.a).trim().split(/\s+/);
      if (tokens.length < 2) err(where, "build answer needs at least 2 tokens");
      if (/[.,!?;:]/.test(it.a)) err(where, "build answer must not contain punctuation");
      if (it.extra) {
        if (!Array.isArray(it.extra)) err(where, "extra must be an array");
        else {
          const lower = new Set(tokens.map((t) => t.toLowerCase()));
          for (const x of it.extra) {
            if (lower.has(String(x).toLowerCase())) err(where, `extra token ${JSON.stringify(x)} also appears in the answer`);
            if (/\s/.test(x)) err(where, `extra token ${JSON.stringify(x)} contains a space`);
          }
          if (new Set(it.extra.map((x) => x.toLowerCase())).size !== it.extra.length) {
            err(where, "extra has duplicate tokens");
          }
        }
      }
      break;
    }
    case "listen": {
      if (!need("speak") || !need("a")) break;
      const mode = it.mode || "type";
      if (!["type", "choice"].includes(mode)) err(where, `listen mode must be type or choice`);
      if (mode === "choice") {
        if (!Array.isArray(it.opts) || it.opts.length < 3) err(where, "listen/choice needs at least 3 opts");
        else if (!it.opts.includes(it.a)) err(where, "listen/choice answer is not among opts");
      }
      break;
    }
    case "match": {
      if (!Array.isArray(it.pairs) || it.pairs.length < 4 || it.pairs.length > 6) {
        err(where, "match needs 4-6 pairs");
        break;
      }
      const left = it.pairs.map((p) => p && p[0]);
      const right = it.pairs.map((p) => p && p[1]);
      if (it.pairs.some((p) => !Array.isArray(p) || p.length !== 2 || !p[0] || !p[1])) {
        err(where, "each match pair must be [icelandic, english]");
      }
      if (new Set(left.map(norm)).size !== left.length) err(where, "match has duplicate Icelandic sides");
      if (new Set(right.map(norm)).size !== right.length) err(where, "match has duplicate English sides");
      break;
    }
    case "fill": {
      if (!need("sentence") || !need("a")) break;
      const gaps = (String(it.sentence).match(/___/g) || []).length;
      if (gaps !== 1) err(where, `fill sentence must contain exactly one "___" (found ${gaps})`);
      if (it.case && !CASES.has(it.case)) err(where, `unknown case ${JSON.stringify(it.case)}`);
      const mode = it.mode || "type";
      if (mode === "choice") {
        if (!Array.isArray(it.opts) || it.opts.length < 3) err(where, "fill/choice needs at least 3 opts");
        else if (!it.opts.includes(it.a)) err(where, "fill/choice answer is not among opts");
      }
      break;
    }
    case "table": {
      if (!Array.isArray(it.cols) || it.cols.length < 2) {
        err(where, "table needs a cols array of length >= 2");
        break;
      }
      if (!Array.isArray(it.rows) || !it.rows.length) {
        err(where, "table needs rows");
        break;
      }
      let blanks = 0;
      it.rows.forEach((r, ri) => {
        const w2 = `${where}.rows[${ri}]`;
        if (!r || typeof r !== "object") return err(w2, "row is not an object");
        if (!r.label) err(w2, "row is missing a label");
        if (!Array.isArray(r.cells) || r.cells.length !== it.cols.length - 1) {
          err(w2, `row needs ${it.cols.length - 1} cells, has ${r.cells ? r.cells.length : 0}`);
          return;
        }
        for (const b of r.blank || []) {
          if (!Number.isInteger(b) || b < 0 || b >= r.cells.length) err(w2, `blank index ${b} out of range`);
          else blanks++;
        }
      });
      if (blanks === 0) err(where, "table has no blanks");
      if (blanks > 4) err(where, `table has ${blanks} blanks (max 4)`);
      break;
    }
    case "gender": {
      if (!need("word")) break;
      if (!GENDERS.has(it.a)) err(where, `gender answer must be kk|kvk|hk, got ${JSON.stringify(it.a)}`);
      break;
    }
    case "speak": {
      if (!need("is")) break;
      break;
    }
  }

  if (it.tags && !Array.isArray(it.tags)) err(where, "tags must be an array");
  if (vocabSet && Array.isArray(it.vocab)) {
    for (const v of it.vocab) if (!vocabSet.has(v)) err(where, `unknown vocab ref ${JSON.stringify(v)}`);
  }
}

/* ------------------------------------------------------------------ main */
async function main() {
  /* ---------- vocab ---------- */
  const vocabSet = new Set();
  const vocabMod = await load("data/vocab.js");
  if (!vocabMod) err("data/vocab.js", "file is missing");
  else {
    const vocab = vocabMod.vocab || vocabMod.default;
    if (!Array.isArray(vocab)) err("data/vocab.js", "must export an array named `vocab`");
    else {
      stats.vocab = vocab.length;
      vocab.forEach((v, i) => {
        const w = `vocab[${i}]${v && v.w ? ` (${v.w})` : ""}`;
        if (!v || typeof v !== "object") return err(w, "entry is not an object");
        walkStrings(w, v);
        for (const f of ["w", "en", "pos", "topic", "cefr"]) if (!v[f]) err(w, `missing "${f}"`);
        if (v.unit === undefined) err(w, 'missing "unit"');
        if (v.pos && !POS.has(v.pos)) err(w, `unknown pos ${JSON.stringify(v.pos)}`);
        if (!v.ex || !v.ex.is || !v.ex.en) err(w, "missing ex.is / ex.en");
        if (vocabSet.has(v.w)) err(w, `duplicate headword ${JSON.stringify(v.w)}`);
        vocabSet.add(v.w);

        if (v.pos === "noun") {
          if (!GENDERS.has(v.g)) err(w, `noun needs g = kk|kvk|hk (got ${JSON.stringify(v.g)})`);
          if (!v.forms || !Array.isArray(v.forms.sg) || v.forms.sg.length !== 4) {
            err(w, "noun needs forms.sg with 4 entries (NF ÞF ÞGF EF)");
          }
          if (v.forms && v.forms.pl !== null && v.forms.pl !== undefined && (!Array.isArray(v.forms.pl) || v.forms.pl.length !== 4)) {
            err(w, "noun forms.pl must be 4 entries or null");
          }
        }
        if (v.pos === "verb") {
          if (!v.conj || !Array.isArray(v.conj.pres) || v.conj.pres.length !== 6) {
            err(w, "verb needs conj.pres with 6 forms");
          }
          if (v.conj && v.conj.past && v.conj.past.length !== 6) err(w, "verb conj.past must have 6 forms");
          if (v.gov && !GOV.has(v.gov)) err(w, `unknown gov ${JSON.stringify(v.gov)}`);
        }
        if (v.pos === "adj") {
          if (!v.decl || !Array.isArray(v.decl.nom) || v.decl.nom.length !== 3) {
            err(w, "adjective needs decl.nom = [masc, fem, neut]");
          }
        }
      });
    }
  }

  /* ---------- units ---------- */
  const unitsDir = path.join(ROOT, "data/units");
  const lessonIds = new Set();
  let unitFiles = [];
  if (existsSync(unitsDir)) unitFiles = (await readdir(unitsDir)).filter((f) => /^u\d\d\.js$/.test(f)).sort();
  if (!unitFiles.length) err("data/units", "no unit files found");
  stats.units = unitFiles.length;
  stats.lessons = 0;
  stats.items = 0;

  for (const file of unitFiles) {
    const rel = `data/units/${file}`;
    const mod = await load(rel);
    if (!mod) {
      err(rel, "could not be imported");
      continue;
    }
    const u = mod.unit || mod.default;
    if (!u || typeof u !== "object") {
      err(rel, "must export `unit`");
      continue;
    }
    const expectedSlug = file.replace(/\.js$/, "");
    if (u.slug !== expectedSlug) err(rel, `slug ${JSON.stringify(u.slug)} should be ${JSON.stringify(expectedSlug)}`);
    if (u.id !== Number(expectedSlug.slice(1))) err(rel, `id ${u.id} should be ${Number(expectedSlug.slice(1))}`);
    for (const f of ["title", "en", "cefr", "icon", "blurb"]) if (!u[f]) err(rel, `unit missing "${f}"`);
    if (!Array.isArray(u.canDo) || u.canDo.length < 3) err(rel, "unit needs at least 3 canDo statements");
    if (!Array.isArray(u.lessons) || u.lessons.length < 4 || u.lessons.length > 8) {
      err(rel, `unit needs 4-8 lessons (has ${u.lessons ? u.lessons.length : 0})`);
    } else if (u.lessons.length !== 6) {
      warn(rel, `unit has ${u.lessons.length} lessons; the standard shape is 6`);
    }

    (u.lessons || []).forEach((l, li) => {
      const w = `${rel} lesson[${li}]${l && l.id ? ` (${l.id})` : ""}`;
      if (!l || typeof l !== "object") return err(w, "lesson is not an object");
      walkStrings(w, l);
      stats.lessons++;
      if (l.n !== li + 1) err(w, `lesson n should be ${li + 1}, got ${l.n}`);
      if (l.id !== `${expectedSlug}l${li + 1}`) err(w, `lesson id should be "${expectedSlug}l${li + 1}"`);
      if (lessonIds.has(l.id)) err(w, `duplicate lesson id ${l.id}`);
      lessonIds.add(l.id);
      if (!KINDS.has(l.kind)) err(w, `unknown lesson kind ${JSON.stringify(l.kind)}`);
      for (const f of ["title", "en", "goal", "icon"]) if (!l[f]) err(w, `lesson missing "${f}"`);
      if (typeof l.minutes !== "number") err(w, "lesson minutes must be a number");

      if (l.kind !== "checkpoint" && (!Array.isArray(l.teach) || !l.teach.length)) {
        err(w, "lesson needs at least one teach block");
      }
      (l.teach || []).forEach((tb, ti) => {
        if (!tb || !tb.h) err(`${w}.teach[${ti}]`, "teach block needs an h");
        if (tb.table) {
          if (!Array.isArray(tb.table.cols) || !Array.isArray(tb.table.rows)) {
            err(`${w}.teach[${ti}]`, "teach table needs cols and rows arrays");
          } else {
            tb.table.rows.forEach((r, ri) => {
              if (!Array.isArray(r) || r.length !== tb.table.cols.length) {
                err(`${w}.teach[${ti}].table.rows[${ri}]`, `row needs ${tb.table.cols.length} cells`);
              }
            });
          }
        }
        if (tb.ex) {
          if (!Array.isArray(tb.ex)) err(`${w}.teach[${ti}]`, "ex must be an array");
          else
            tb.ex.forEach((pair, pi) => {
              if (!Array.isArray(pair) || pair.length !== 2) {
                err(`${w}.teach[${ti}].ex[${pi}]`, "each ex must be [icelandic, english]");
              }
            });
        }
      });

      if (l.kind === "story") {
        if (!l.story || !Array.isArray(l.story.lines) || l.story.lines.length < 6) {
          err(w, "story lesson needs story.lines with at least 6 lines");
        }
        (l.story?.lines || []).forEach((ln, ni) => {
          if (!ln || !ln.is || !ln.en) err(`${w}.story.lines[${ni}]`, "line needs is and en");
        });
      }

      for (const ref of l.vocab || []) {
        if (vocabSet.size && !vocabSet.has(ref)) err(w, `vocab ref ${JSON.stringify(ref)} is not in data/vocab.js`);
      }

      if (!Array.isArray(l.items) || l.items.length < 8) {
        err(w, `lesson needs at least 8 items (has ${l.items ? l.items.length : 0})`);
      }
      const types = new Set();
      let matchCount = 0;
      (l.items || []).forEach((it, ii) => {
        stats.items++;
        validateItem(`${w}.items[${ii}]`, it, vocabSet);
        if (it && it.t) {
          types.add(it.t);
          if (it.t === "match") matchCount++;
        }
      });
      if (types.size < 4) warn(w, `only ${types.size} distinct item types`);
      if (matchCount > 1) err(w, "a lesson may contain at most one match item");
    });
  }

  /* ---------- prepositions ---------- */
  const prepMod = await load("data/prepositions.js");
  if (!prepMod) err("data/prepositions.js", "file is missing");
  else {
    const preps = prepMod.prepositions || prepMod.default;
    if (!Array.isArray(preps)) err("data/prepositions.js", "must export an array named `prepositions`");
    else {
      stats.prepositions = preps.length;
      const seen = new Set();
      preps.forEach((p, i) => {
        const w = `prepositions[${i}]${p && p.p ? ` (${p.p})` : ""}`;
        walkStrings(w, p);
        if (!p.p) return err(w, "missing p");
        if (seen.has(p.p)) err(w, `duplicate preposition ${p.p}`);
        seen.add(p.p);
        if (!p.en) err(w, "missing en");
        if (!Array.isArray(p.cases) || !p.cases.length) err(w, "missing cases array");
        else for (const c of p.cases) if (!CASES.has(c)) err(w, `unknown case ${JSON.stringify(c)}`);
        if (!Array.isArray(p.senses) || !p.senses.length) err(w, "needs at least one sense");
        else
          p.senses.forEach((s, si) => {
            const w2 = `${w}.senses[${si}]`;
            if (!s.case || !CASES.has(s.case)) err(w2, `sense case must be one of NF/ÞF/ÞGF/EF`);
            else if (!p.cases.includes(s.case)) err(w2, `sense case ${s.case} is not listed in cases`);
            if (!s.en) err(w2, "missing en");
            if (!s.is || !s.enx) err(w2, "missing example is/enx");
          });
      });
    }
  }

  /* ---------- verb cases ---------- */
  const vcMod = await load("data/verbcases.js");
  if (!vcMod) err("data/verbcases.js", "file is missing");
  else {
    const vc = vcMod.verbCases || vcMod.default;
    if (!Array.isArray(vc)) err("data/verbcases.js", "must export an array named `verbCases`");
    else {
      stats.verbCases = vc.length;
      const seen = new Set();
      vc.forEach((v, i) => {
        const w = `verbCases[${i}]${v && v.v ? ` (${v.v})` : ""}`;
        walkStrings(w, v);
        if (!v.v) return err(w, "missing v");
        if (seen.has(v.v)) err(w, `duplicate verb ${v.v}`);
        seen.add(v.v);
        if (!v.en) err(w, "missing en");
        if (!GOV.has(v.gov)) err(w, `unknown gov ${JSON.stringify(v.gov)}`);
        if (!Array.isArray(v.pres) || v.pres.length !== 6) err(w, "pres must have 6 forms");
        if (v.past && v.past.length !== 6) err(w, "past must have 6 forms");
        if (!v.ex || !v.ex.is || !v.ex.en) err(w, "missing ex.is / ex.en");
      });
    }
  }

  /* ---------- grammar ---------- */
  const gMod = await load("data/grammar.js");
  if (!gMod) err("data/grammar.js", "file is missing");
  else {
    const g = gMod.grammar || gMod.default;
    if (!Array.isArray(g)) err("data/grammar.js", "must export an array named `grammar`");
    else {
      stats.grammar = g.length;
      const ids = new Set();
      g.forEach((t, i) => {
        const w = `grammar[${i}]${t && t.id ? ` (${t.id})` : ""}`;
        walkStrings(w, t);
        if (!t.id) return err(w, "missing id");
        if (ids.has(t.id)) err(w, `duplicate id ${t.id}`);
        ids.add(t.id);
        if (!GRAMMAR_CATS.has(t.cat)) err(w, `unknown cat ${JSON.stringify(t.cat)}`);
        for (const f of ["title", "summary", "cefr"]) if (!t[f]) err(w, `missing "${f}"`);
        if (!Array.isArray(t.sections) || !t.sections.length) err(w, "needs sections");
        (t.sections || []).forEach((s, si) => {
          const w2 = `${w}.sections[${si}]`;
          if (!s.h) err(w2, "section needs an h");
          if (s.table) {
            if (!Array.isArray(s.table.cols) || !Array.isArray(s.table.rows)) err(w2, "table needs cols and rows");
            else
              s.table.rows.forEach((r, ri) => {
                if (!Array.isArray(r) || r.length !== s.table.cols.length) {
                  err(`${w2}.table.rows[${ri}]`, `needs ${s.table.cols.length} cells, has ${Array.isArray(r) ? r.length : "?"}`);
                }
              });
          }
        });
      });
      // related ids must resolve
      g.forEach((t, i) => {
        for (const r of t.related || []) {
          if (!ids.has(r)) warn(`grammar[${i}] (${t.id})`, `related id ${JSON.stringify(r)} does not exist`);
        }
      });
    }
  }

  /* ---------- drills ---------- */
  const dMod = await load("data/drills.js");
  if (!dMod) err("data/drills.js", "file is missing");
  else {
    const d = dMod.drills || dMod.default;
    if (!Array.isArray(d)) err("data/drills.js", "must export an array named `drills`");
    else {
      stats.drills = d.length;
      stats.drillItems = 0;
      const ids = new Set();
      d.forEach((dr, i) => {
        const w = `drills[${i}]${dr && dr.id ? ` (${dr.id})` : ""}`;
        walkStrings(w, dr);
        if (!dr.id) return err(w, "missing id");
        if (ids.has(dr.id)) err(w, `duplicate drill id ${dr.id}`);
        ids.add(dr.id);
        for (const f of ["title", "cat", "cefr", "instruction"]) if (!dr[f]) err(w, `missing "${f}"`);
        if (!dr.example || !dr.example.q || !dr.example.a) err(w, "missing example.q / example.a");
        if (!Array.isArray(dr.rounds) || dr.rounds.length !== 5) {
          err(w, `needs exactly 5 rounds (has ${dr.rounds ? dr.rounds.length : 0})`);
          return;
        }
        dr.rounds.forEach((r, ri) => {
          const w2 = `${w}.rounds[${ri}]`;
          if (r.n !== ri + 1) err(w2, `round n should be ${ri + 1}`);
          if (!r.label) err(w2, "round needs a label");
          if (!Array.isArray(r.items) || r.items.length !== 6) {
            err(w2, `round needs exactly 6 items (has ${r.items ? r.items.length : 0})`);
            return;
          }
          r.items.forEach((it, ii) => {
            const w3 = `${w2}.items[${ii}]`;
            stats.drillItems++;
            if (!it.q) err(w3, "missing q");
            if (it.a === undefined || it.a === "") err(w3, "missing a");
            if (it.opts) {
              if (!Array.isArray(it.opts) || it.opts.length < 3) err(w3, "opts must have at least 3 entries");
              else if (!it.opts.includes(it.a)) err(w3, "answer is not among opts");
            }
          });
        });
      });
    }
  }

  /* ---------- readings ---------- */
  const rMod = await load("data/readings.js");
  if (!rMod) err("data/readings.js", "file is missing");
  else {
    const r = rMod.readings || rMod.default;
    if (!Array.isArray(r)) err("data/readings.js", "must export an array named `readings`");
    else {
      stats.readings = r.length;
      const ids = new Set();
      r.forEach((x, i) => {
        const w = `readings[${i}]${x && x.id ? ` (${x.id})` : ""}`;
        walkStrings(w, x);
        if (!x.id) return err(w, "missing id");
        if (ids.has(x.id)) err(w, `duplicate reading id ${x.id}`);
        ids.add(x.id);
        for (const f of ["title", "level"]) if (!x[f]) err(w, `missing "${f}"`);
        if (!Array.isArray(x.text) || x.text.length < 6) err(w, "text needs at least 6 sentences");
        (x.text || []).forEach((s, si) => {
          if (!s || !s.is || !s.en) err(`${w}.text[${si}]`, "sentence needs is and en");
        });
        if (!Array.isArray(x.qs) || x.qs.length < 3) err(w, "needs at least 3 comprehension questions");
        (x.qs || []).forEach((q, qi) => {
          const w2 = `${w}.qs[${qi}]`;
          if (!q.q) err(w2, "missing q");
          if (!Array.isArray(q.opts) || q.opts.length < 3) err(w2, "needs at least 3 opts");
          else if (!q.opts.includes(q.a)) err(w2, "answer is not among opts");
        });
      });
    }
  }

  /* ---------- phrases ---------- */
  const pMod = await load("data/phrases.js");
  if (!pMod) err("data/phrases.js", "file is missing");
  else {
    const p = pMod.phrases || pMod.default;
    if (!Array.isArray(p)) err("data/phrases.js", "must export an array named `phrases`");
    else {
      stats.phraseGroups = p.length;
      p.forEach((grp, i) => {
        const w = `phrases[${i}]${grp && grp.cat ? ` (${grp.cat})` : ""}`;
        walkStrings(w, grp);
        if (!grp.cat) err(w, "missing cat");
        if (!Array.isArray(grp.items) || !grp.items.length) err(w, "missing items");
        (grp.items || []).forEach((it, ii) => {
          if (!it.is || !it.en) err(`${w}.items[${ii}]`, "phrase needs is and en");
        });
      });
    }
  }

  /* ---------- report ---------- */
  const line = "─".repeat(60);
  console.log(line);
  console.log("Content stats:", JSON.stringify(stats, null, 0));
  console.log(line);
  if (warnings.length) {
    console.log(`\n${warnings.length} warning(s):`);
    for (const w of warnings.slice(0, 60)) console.log("  ! " + w);
    if (warnings.length > 60) console.log(`  … and ${warnings.length - 60} more`);
  }
  if (errors.length) {
    console.log(`\n${errors.length} ERROR(s):`);
    for (const e of errors.slice(0, 200)) console.log("  ✗ " + e);
    if (errors.length > 200) console.log(`  … and ${errors.length - 200} more`);
    console.log("\nFAILED");
    process.exit(1);
  }
  console.log("\nOK");
}

main().catch((e) => {
  console.error("validator crashed:", e);
  process.exit(2);
});
