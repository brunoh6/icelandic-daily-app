/* Content loading and indexing.
   The unit metadata manifest is small and loads up front; the heavy unit
   bodies (teach blocks + exercises) are imported the moment they are needed
   and then cached, so first paint stays fast on a phone. */

import { collator } from "./dom.js";

export const content = {
  manifest: [],
  vocab: [],
  grammar: [],
  drills: [],
  prepositions: [],
  verbCases: [],
  phrases: [],
  readings: [],
  novels: [],
  ready: false,
  missing: []
};

const index = {
  vocabByWord: new Map(),
  vocabByTopic: new Map(),
  vocabByUnit: new Map(),
  grammarById: new Map(),
  grammarByCat: new Map(),
  drillById: new Map(),
  drillByCat: new Map(),
  readingById: new Map(),
  novelById: new Map(),
  unitBySlug: new Map(),
  unitById: new Map(),
  lessonById: new Map(),
  prepByWord: new Map(),
  verbByWord: new Map()
};

export { index };

async function tryImport(path, key, fallback = []) {
  try {
    const mod = await import(path);
    const value = mod[key] ?? mod.default;
    if (!value) throw new Error(`module has no export "${key}"`);
    return value;
  } catch (err) {
    content.missing.push(path);
    console.warn(`Lundi: ${path} is not available yet.`, err?.message || err);
    return fallback;
  }
}

export async function loadCore() {
  if (content.ready) return content;

  const [manifest, vocab, grammar, drills, prepositions, verbCases, phrases, readings, novels] = await Promise.all([
    tryImport("../data/manifest.js", "manifest"),
    tryImport("../data/vocab.js", "vocab"),
    tryImport("../data/grammar.js", "grammar"),
    tryImport("../data/drills.js", "drills"),
    tryImport("../data/prepositions.js", "prepositions"),
    tryImport("../data/verbcases.js", "verbCases"),
    tryImport("../data/phrases.js", "phrases"),
    tryImport("../data/readings.js", "readings"),
    tryImport("../data/novels.js", "novels")
  ]);

  Object.assign(content, { manifest, vocab, grammar, drills, prepositions, verbCases, phrases, readings, novels });
  buildIndexes();
  content.ready = true;
  return content;
}

function buildIndexes() {
  index.vocabByWord.clear();
  index.vocabByTopic.clear();
  index.vocabByUnit.clear();
  for (const v of content.vocab) {
    if (!v || !v.w) continue;
    index.vocabByWord.set(v.w, v);
    if (!index.vocabByTopic.has(v.topic)) index.vocabByTopic.set(v.topic, []);
    index.vocabByTopic.get(v.topic).push(v);
    if (!index.vocabByUnit.has(v.unit)) index.vocabByUnit.set(v.unit, []);
    index.vocabByUnit.get(v.unit).push(v);
  }

  index.grammarById.clear();
  index.grammarByCat.clear();
  for (const g of content.grammar) {
    if (!g || !g.id) continue;
    index.grammarById.set(g.id, g);
    if (!index.grammarByCat.has(g.cat)) index.grammarByCat.set(g.cat, []);
    index.grammarByCat.get(g.cat).push(g);
  }

  index.drillById.clear();
  index.drillByCat.clear();
  for (const d of content.drills) {
    if (!d || !d.id) continue;
    index.drillById.set(d.id, d);
    if (!index.drillByCat.has(d.cat)) index.drillByCat.set(d.cat, []);
    index.drillByCat.get(d.cat).push(d);
  }

  index.readingById.clear();
  for (const r of content.readings) if (r?.id) index.readingById.set(r.id, r);

  index.novelById.clear();
  for (const n of content.novels) if (n?.id) index.novelById.set(n.id, n);

  index.prepByWord.clear();
  for (const p of content.prepositions) if (p?.p) index.prepByWord.set(p.p, p);

  index.verbByWord.clear();
  for (const v of content.verbCases) if (v?.v) index.verbByWord.set(v.v, v);

  index.unitBySlug.clear();
  index.unitById.clear();
  index.lessonById.clear();
  for (const u of content.manifest) {
    index.unitBySlug.set(u.slug, u);
    index.unitById.set(u.id, u);
    for (const l of u.lessons || []) index.lessonById.set(l.id, { ...l, unit: u.id, unitSlug: u.slug });
  }
}

/* --------------------------------------------------------- unit bodies */

const unitCache = new Map();
const unitPending = new Map();

export function unitIsLoaded(slug) {
  return unitCache.has(slug);
}

export async function loadUnit(slug) {
  if (unitCache.has(slug)) return unitCache.get(slug);
  if (unitPending.has(slug)) return unitPending.get(slug);

  const promise = import(`../data/units/${slug}.js`)
    .then((mod) => {
      const unit = mod.unit || mod.default;
      unitCache.set(slug, unit);
      unitPending.delete(slug);
      return unit;
    })
    .catch((err) => {
      unitPending.delete(slug);
      console.error(`Lundi: could not load unit ${slug}`, err);
      throw err;
    });

  unitPending.set(slug, promise);
  return promise;
}

export async function loadLesson(lessonId) {
  const meta = index.lessonById.get(lessonId);
  if (!meta) return null;
  const unit = await loadUnit(meta.unitSlug);
  const lesson = (unit.lessons || []).find((l) => l.id === lessonId);
  return lesson ? { ...lesson, unit } : null;
}

/** Pull every unit body into the cache — used by "make available offline". */
export async function loadAllUnits(onProgress) {
  const slugs = content.manifest.map((u) => u.slug);
  let done = 0;
  for (const slug of slugs) {
    try {
      await loadUnit(slug);
    } catch {
      /* keep going; a single bad unit should not block the rest */
    }
    done += 1;
    onProgress?.(done, slugs.length);
  }
  return done;
}

/* ------------------------------------------------------------ queries */

export function allLessons() {
  return content.manifest.flatMap((u) =>
    (u.lessons || []).map((l) => ({ ...l, unit: u.id, unitSlug: u.slug, unitTitle: u.title }))
  );
}

export function unitOf(lessonId) {
  const meta = index.lessonById.get(lessonId);
  return meta ? index.unitById.get(meta.unit) : null;
}

export function vocabForUnit(unitId) {
  return index.vocabByUnit.get(unitId) || [];
}

export function vocabUpTo(unitId) {
  return content.vocab.filter((v) => v.unit <= unitId);
}

export function topics() {
  return Array.from(index.vocabByTopic.keys()).sort(collator.compare);
}

export function searchVocab(query, { topic = "all", pos = "all", limit = 400 } = {}) {
  const q = query.trim().toLowerCase();
  let list = content.vocab;
  if (topic !== "all") list = list.filter((v) => v.topic === topic);
  if (pos !== "all") list = list.filter((v) => v.pos === pos);
  if (q) {
    list = list.filter(
      (v) =>
        v.w.toLowerCase().includes(q) ||
        v.en.toLowerCase().includes(q) ||
        (v.ex?.is || "").toLowerCase().includes(q)
    );
  }
  return list.slice(0, limit);
}

export const CASE_LABELS = {
  NF: { short: "NF", is: "nefnifall", en: "nominative", cls: "nom" },
  "ÞF": { short: "ÞF", is: "þolfall", en: "accusative", cls: "acc" },
  "ÞGF": { short: "ÞGF", is: "þágufall", en: "dative", cls: "dat" },
  EF: { short: "EF", is: "eignarfall", en: "genitive", cls: "gen" }
};

export const CASE_ORDER = ["NF", "ÞF", "ÞGF", "EF"];

export const GENDER_LABELS = {
  kk: { is: "karlkyn", en: "masculine", short: "m." },
  kvk: { is: "kvenkyn", en: "feminine", short: "f." },
  hk: { is: "hvorugkyn", en: "neuter", short: "n." }
};

export const POS_LABELS = {
  noun: "noun",
  verb: "verb",
  adj: "adjective",
  adv: "adverb",
  prep: "preposition",
  pron: "pronoun",
  num: "number",
  conj: "conjunction",
  phrase: "phrase",
  interj: "interjection"
};
