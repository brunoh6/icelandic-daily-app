/* Tiny DOM + template helpers. Views build HTML strings; interaction is
   handled with event delegation on [data-act], so there is exactly one
   listener per surface instead of hundreds. */

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export function esc(value) {
  if (value === null || value === undefined) return "";
  return String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);
}

const RAW = Symbol("raw");

const rawProto = {
  [RAW]: true,
  toString() {
    return this.str;
  }
};

/** Mark a string as already-safe HTML so `html` will not escape it. */
export function raw(str) {
  const node = Object.create(rawProto);
  node.str = String(str);
  return node;
}

export const isRaw = (value) => Boolean(value) && typeof value === "object" && value[RAW] === true;

function render(value) {
  if (value === null || value === undefined || value === false || value === true) return "";
  if (Array.isArray(value)) return value.map(render).join("");
  if (isRaw(value)) return value.str;
  return esc(value);
}

/**
 * Tagged template that escapes every interpolation unless it is already raw.
 * It returns a raw node itself, so nested html`` blocks compose without
 * being escaped a second time.
 */
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) out += render(values[i]) + strings[i + 1];
  return raw(out);
}

/** Compose child HTML strings without re-escaping them. */
export const frag = (...parts) => raw(parts.map((p) => (isRaw(p) ? p.str : p)).join(""));

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/**
 * Delegated listener. `handler(event, matchedElement)`.
 * Returns an unsubscribe function.
 */
export function delegate(root, type, selector, handler, options) {
  const listener = (event) => {
    const target = event.target instanceof Element ? event.target.closest(selector) : null;
    if (target && root.contains(target)) handler(event, target);
  };
  root.addEventListener(type, listener, options);
  return () => root.removeEventListener(type, listener, options);
}

export function setHTML(node, markup) {
  node.innerHTML = isRaw(markup) ? markup.str : String(markup ?? "");
  return node;
}

/* ------------------------------------------------------------------ misc */

export const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

export function shuffle(list, rng = Math.random) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const sample = (list, n) => shuffle(list).slice(0, n);

export const pick = (list) => list[Math.floor(Math.random() * list.length)];

/** Deterministic 32-bit hash — used to give each day a stable "random" set. */
export function hashCode(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Seeded RNG so a given day's practice set is stable across reloads. */
export function seededRandom(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
}

export function debounce(fn, ms = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

/** YYYY-MM-DD in the user's own timezone — the unit of a "day" everywhere. */
export function dayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function daysBetween(aKey, bKey) {
  const a = new Date(`${aKey}T00:00:00`);
  const b = new Date(`${bKey}T00:00:00`);
  return Math.round((b - a) / 86400000);
}

export function plural(n, one, many) {
  return `${n} ${n === 1 ? one : many}`;
}

/* ------------------------------------------------------- Icelandic text */

/** Strip diacritics for lenient matching (þ→th, ð→d, á→a …). */
export function deaccent(str) {
  return String(str)
    .toLowerCase()
    .replace(/þ/g, "th")
    .replace(/ð/g, "d")
    .replace(/æ/g, "ae")
    .replace(/ö/g, "o")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Canonical form used to compare a typed answer with the key. */
export function normalizeAnswer(str) {
  return String(str)
    .toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[.,!?;:¡¿"“”„«»]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Icelandic-aware sort. */
export const collator = new Intl.Collator("is", { sensitivity: "base" });
