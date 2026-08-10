#!/usr/bin/env node
/**
 * Inventory of every Icelandic string the app can speak, so we know exactly
 * what a pre-generated audio pack would have to contain.
 *
 *   node tools/audio-inventory.js [--list out.txt]
 */
import { readdir, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = process.cwd();
const imp = (p) => import(pathToFileURL(path.join(ROOT, p)).href);
const { audioHash } = await imp("js/audio-hash.js");

const utterances = new Map(); // text -> Set of sources

function add(text, source) {
  if (typeof text !== "string") return;
  const t = text.normalize("NFC").trim();
  if (!t) return;
  if (!utterances.has(t)) utterances.set(t, new Set());
  utterances.get(t).add(source);
}

const { loadCore, content } = await imp("js/data.js");
// data.js touches no DOM at import time, but store.js (pulled in by views) does.
await loadCore();

/* ---- reference data ---- */
for (const v of content.vocab) {
  add(v.w, "vocab.word");
  add(v.ex?.is, "vocab.example");
}
for (const g of content.phrases) for (const p of g.items) add(p.is, "phrase");
for (const p of content.prepositions) {
  add(p.p, "prep.word");
  for (const s of p.senses || []) add(s.is, "prep.example");
}
for (const v of content.verbCases) {
  add(v.v, "verb.word");
  add(v.ex?.is, "verb.example");
}
for (const t of content.grammar) {
  for (const s of t.sections || []) for (const pair of s.ex || []) add(pair[0], "grammar.example");
}
for (const r of content.readings) for (const s of r.text) add(s.is, "reading.line");
for (const n of content.novels) for (const c of n.chapters) for (const line of c.text) add(line, "novel.line");

/* ---- the hand-written case examples in the Grammar > cases view ---- */
for (const pair of [
  ["Hundurinn sefur.", ""], ["Þetta er góð bók.", ""],
  ["Ég sé hundinn.", ""], ["Við förum í bæinn.", ""],
  ["Ég hjálpa vinkonu minni.", ""], ["Bókin er á borðinu.", ""],
  ["Bíll pabba er gamall.", ""], ["Við bíðum eftir rútunni til Akureyrar.", ""]
]) add(pair[0], "grammar.cases-view");

/* ---- units ---- */
const files = (await readdir(path.join(ROOT, "data/units"))).filter((f) => /^u\d\d\.js$/.test(f)).sort();
for (const f of files) {
  const mod = await imp(`data/units/${f}`);
  for (const l of (mod.unit.lessons || [])) {
    for (const tb of l.teach || []) for (const pair of tb.ex || []) add(pair[0], "teach.example");
    for (const line of l.story?.lines || []) add(line.is, "story.line");
    for (const it of l.items || []) {
      add(it.speak, "item.speak");
      if (it.t === "gender") add(it.word, "item.gender");
      if (it.t === "speak") add(it.is, "item.say");
      // On a wrong answer the session speaks the correct answer, but only for
      // types whose answer is actually Icelandic.
      if (["type", "build", "fill", "listen"].includes(it.t)) add(it.a, "item.answer");
      if (it.t === "table") for (const r of it.rows || []) for (const i of r.blank || []) add(r.cells[i], "item.table-cell");
    }
  }
}

/* ---- report ---- */
const ICELANDIC = /[áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ]/;
const rows = [...utterances.entries()].map(([text, src]) => {
  const words = text.split(/\s+/).length;
  // TTS at a normal pace runs ~14 characters a second; short items need a floor.
  const seconds = Math.max(0.7, text.length / 14 + 0.35);
  return { text, words, seconds, sources: [...src], diacritic: ICELANDIC.test(text) };
});

const bySource = {};
for (const r of rows) for (const s of r.sources) bySource[s] = (bySource[s] || 0) + 1;

const single = rows.filter((r) => r.words <= 2);
const phrase = rows.filter((r) => r.words > 2);
const totalSec = rows.reduce((a, r) => a + r.seconds, 0);

const fmt = (n) => n.toLocaleString("en-US");
const mb = (bytesPerSec) => ((totalSec * bytesPerSec) / 1024 / 1024).toFixed(1);

console.log(`distinct utterances   ${fmt(rows.length)}`);
console.log(`  single words/short  ${fmt(single.length)}`);
console.log(`  phrases/sentences   ${fmt(phrase.length)}`);
console.log(`  contain a diacritic ${fmt(rows.filter((r) => r.diacritic).length)}`);
console.log(`\ntotal audio          ${(totalSec / 60).toFixed(1)} min  (${totalSec.toFixed(0)}s est.)`);
console.log(`longest utterance    ${Math.max(...rows.map((r) => r.seconds)).toFixed(1)}s, ${Math.max(...rows.map((r) => r.text.length))} chars`);
console.log(`\nestimated pack size`);
console.log(`  WAV 16k/16-bit mono (32 KB/s)   ${mb(32 * 1024)} MB`);
console.log(`  MP3 64 kbps mono     (8 KB/s)   ${mb(8 * 1024)} MB`);
console.log(`  AAC 48 kbps mono     (6 KB/s)   ${mb(6 * 1024)} MB`);
console.log(`  AAC 32 kbps mono     (4 KB/s)   ${mb(4 * 1024)} MB`);
console.log(`  Opus 24 kbps mono    (3 KB/s)   ${mb(3 * 1024)} MB`);

console.log(`\nby source`);
for (const [k, v] of Object.entries(bySource).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k.padEnd(22)} ${fmt(v)}`);
}

/* ---- collision check for a naive slugify ---- */
const slug = (s) =>
  s.toLowerCase().replace(/þ/g, "th").replace(/ð/g, "d").replace(/æ/g, "ae").replace(/ö/g, "o")
   .normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const slugs = new Map();
for (const r of rows) {
  const s = slug(r.text) || "empty";
  if (!slugs.has(s)) slugs.set(s, []);
  slugs.get(s).push(r.text);
}
const collisions = [...slugs.entries()].filter(([, v]) => v.length > 1);
console.log(`\nnaive slugify (þ→th, ð→d, strip accents)`);
console.log(`  distinct slugs      ${fmt(slugs.size)}`);
console.log(`  COLLIDING slugs     ${fmt(collisions.length)}  (${fmt(rows.length - slugs.size)} utterances lost)`);
for (const [s, v] of collisions.slice(0, 8)) console.log(`    ${s} <- ${v.slice(0, 4).map((x) => JSON.stringify(x)).join(" , ")}`);

/* ---- hash every utterance and refuse to continue if two ever collide ---- */
const byHash = new Map();
for (const r of rows) {
  r.hash = audioHash(r.text);
  if (byHash.has(r.hash) && byHash.get(r.hash) !== r.text) {
    console.error(`\nHASH COLLISION on ${r.hash}:`);
    console.error(`  ${JSON.stringify(byHash.get(r.hash))}`);
    console.error(`  ${JSON.stringify(r.text)}`);
    process.exit(1);
  }
  byHash.set(r.hash, r.text);
}
console.log(`\nFNV-1a 64 hashing   ${fmt(byHash.size)} unique names, 0 collisions`);

const listArg = process.argv.indexOf("--list");
if (listArg > -1 && process.argv[listArg + 1]) {
  await writeFile(process.argv[listArg + 1], rows.map((r) => r.text).join("\n") + "\n", "utf8");
  console.log(`wrote ${process.argv[listArg + 1]}`);
}

// The synthesis plan the Python side consumes. It never hashes anything
// itself — it is told the filename for each string.
const jsonArg = process.argv.indexOf("--plan");
if (jsonArg > -1 && process.argv[jsonArg + 1]) {
  const plan = rows.map((r) => ({ h: r.hash, t: r.text }));
  await writeFile(process.argv[jsonArg + 1], JSON.stringify(plan, null, 0), "utf8");
  console.log(`wrote ${process.argv[jsonArg + 1]} (${fmt(plan.length)} clips)`);
}
