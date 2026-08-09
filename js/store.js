/* Persistent learner state: progress, streak, XP, SRS scheduling, settings.
   Everything lives in one localStorage record so export/import is a single file. */

import { dayKey, daysBetween, clamp } from "./dom.js";

const KEY = "lundi.state.v1";
const LEGACY_KEYS = ["icelandic-daily-progress-v1"];
const SCHEMA = 1;

function blank() {
  const today = dayKey();
  return {
    v: SCHEMA,
    createdAt: today,
    profile: {
      name: "",
      dailyGoal: 30,
      theme: "auto",
      sound: true,
      haptics: true,
      voiceURI: null,
      rate: 0.92,
      showRomanHints: true,
      autoSpeak: true
    },
    xp: 0,
    streak: { count: 0, best: 0, lastDay: null, freezes: 2 },
    days: {},
    lessons: {},
    drills: {},
    srs: {},
    words: {},
    stats: { correct: 0, answered: 0, byTag: {}, seconds: 0 },
    flags: { onboarded: false },
    reviewedAt: {}
  };
}

/* ------------------------------------------------------------ load/save */

function migrate(raw) {
  const base = blank();
  if (!raw || typeof raw !== "object") return base;
  // Shallow-merge each section so a new field added later still gets a default.
  const out = {
    ...base,
    ...raw,
    profile: { ...base.profile, ...(raw.profile || {}) },
    streak: { ...base.streak, ...(raw.streak || {}) },
    stats: { ...base.stats, ...(raw.stats || {}) },
    flags: { ...base.flags, ...(raw.flags || {}) },
    days: raw.days || {},
    lessons: raw.lessons || {},
    drills: raw.drills || {},
    srs: raw.srs || {},
    words: raw.words || {},
    reviewedAt: raw.reviewedAt || {}
  };
  out.v = SCHEMA;
  out.xp = Number(out.xp) || 0;
  // Study time used to be banked in whole minutes; carry those over.
  if (!out.stats.seconds && raw.stats?.minutes) out.stats.seconds = raw.stats.minutes * 60;
  delete out.stats.minutes;
  out.stats.seconds = Number(out.stats.seconds) || 0;
  return out;
}

function read() {
  try {
    const rawText = localStorage.getItem(KEY);
    if (rawText) return migrate(JSON.parse(rawText));
  } catch (err) {
    console.warn("Lundi: could not read saved state, starting fresh.", err);
  }
  // One-time courtesy: clear the previous app's key so it does not linger.
  for (const k of LEGACY_KEYS) {
    try {
      localStorage.removeItem(k);
    } catch {
      /* ignore */
    }
  }
  return blank();
}

export const state = read();

const listeners = new Set();
let saveTimer = null;
let dirty = false;

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  for (const fn of listeners) {
    try {
      fn(state);
    } catch (err) {
      console.error("Lundi: store listener failed", err);
    }
  }
}

export function save({ quiet = false } = {}) {
  dirty = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flush, 220);
  if (!quiet) emit();
}

export function flush() {
  if (!dirty) return;
  dirty = false;
  clearTimeout(saveTimer);
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Lundi: could not save state (storage full or blocked).", err);
  }
}

addEventListener("pagehide", flush);
addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flush();
});

/* ------------------------------------------------------------ day + streak */

export function today() {
  return dayKey();
}

export function dayRecord(key = today()) {
  if (!state.days[key]) state.days[key] = { xp: 0, lessons: 0, correct: 0, answered: 0, seconds: 0 };
  return state.days[key];
}

export function todayXP() {
  return dayRecord().xp;
}

export function goalProgress() {
  const goal = Math.max(10, state.profile.dailyGoal || 30);
  return clamp(todayXP() / goal, 0, 1);
}

export function goalMet() {
  return todayXP() >= Math.max(10, state.profile.dailyGoal || 30);
}

/** Called once a session earns XP. Advances the streak at most once per day. */
export function touchStreak() {
  const key = today();
  const s = state.streak;
  if (s.lastDay === key) return s.count;
  if (!s.lastDay) {
    s.count = 1;
  } else {
    const gap = daysBetween(s.lastDay, key);
    if (gap === 1) s.count += 1;
    else if (gap > 1) {
      // A single freeze covers exactly one missed day.
      if (gap === 2 && s.freezes > 0) {
        s.freezes -= 1;
        s.count += 1;
      } else {
        s.count = 1;
      }
    }
  }
  s.lastDay = key;
  s.best = Math.max(s.best || 0, s.count);
  return s.count;
}

/** True when the streak has already lapsed (shown greyed out in the topbar). */
export function streakIsCold() {
  const s = state.streak;
  if (!s.lastDay) return true;
  return daysBetween(s.lastDay, today()) > 1;
}

/* ------------------------------------------------------------ awards */

export function addXP(amount) {
  const n = Math.max(0, Math.round(amount));
  if (!n) return state.xp;
  state.xp += n;
  dayRecord().xp += n;
  touchStreak();
  save();
  return state.xp;
}

export function recordAnswer({ correct, tags = [] }) {
  const d = dayRecord();
  d.answered += 1;
  state.stats.answered += 1;
  if (correct) {
    d.correct += 1;
    state.stats.correct += 1;
  }
  for (const tag of tags) {
    const t = (state.stats.byTag[tag] ||= { correct: 0, answered: 0 });
    t.answered += 1;
    if (correct) t.correct += 1;
  }
}

/** Study time is banked in seconds — rounding to minutes on every call used to
    swallow short sessions entirely. */
export function addSeconds(seconds) {
  const n = Math.max(0, Math.round(seconds));
  dayRecord().seconds += n;
  state.stats.seconds = (state.stats.seconds || 0) + n;
}

export function studiedMinutes() {
  return Math.floor((state.stats.seconds || 0) / 60);
}

/* ------------------------------------------------------------ lessons */

export function lessonRecord(id) {
  return state.lessons[id] || null;
}

export function lessonDone(id) {
  return Boolean(state.lessons[id]?.completed);
}

export function completeLesson(id, { score = 1, seconds = 0 } = {}) {
  const rec = (state.lessons[id] ||= { completed: 0, best: 0, lastAt: null, crown: 0 });
  rec.completed += 1;
  rec.best = Math.max(rec.best, score);
  rec.lastAt = Date.now();
  // A lesson gains a crown level each time it is finished at 90%+, up to 3.
  if (score >= 0.9 && rec.crown < 3) rec.crown += 1;
  dayRecord().lessons += 1;
  addSeconds(seconds);
  save();
  return rec;
}

/* ------------------------------------------------------------ drills */

export function drillRecord(id) {
  return (state.drills[id] ||= { round: 1, cleared: 0, best: {}, lastAt: null });
}

export function completeDrillRound(id, round, score) {
  const rec = drillRecord(id);
  rec.best[round] = Math.max(rec.best[round] || 0, score);
  rec.lastAt = Date.now();
  if (score >= 5 && rec.round === round) rec.round = Math.min(5, round + 1);
  if (round === 5 && score >= 5) rec.cleared += 1;
  save();
  return rec;
}

export function drillProgress(id) {
  const rec = state.drills[id];
  if (!rec) return 0;
  const cleared = Object.entries(rec.best).filter(([, v]) => v >= 5).length;
  return cleared / 5;
}

/* ------------------------------------------------------------ settings */

export function setProfile(patch) {
  Object.assign(state.profile, patch);
  save();
}

export function resetAll() {
  const fresh = blank();
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, fresh);
  save();
}

export function exportJSON() {
  return JSON.stringify(state, null, 2);
}

export function importJSON(text) {
  const parsed = JSON.parse(text);
  const migrated = migrate(parsed);
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, migrated);
  save();
}
