/* Spaced repetition. A trimmed SM-2: four grades, an ease factor that drifts
   between 1.3 and 2.9, and intervals in whole days. Keys are namespaced so
   words ("w:hundur") and grammar patterns ("g:case-acc") share one queue. */

import { state, save, today } from "./store.js";
import { daysBetween } from "./dom.js";

export const GRADE = { AGAIN: 0, HARD: 1, GOOD: 2, EASY: 3 };

// Days to wait after the 1st, 2nd and 3rd successful review.
const FIRST_STEPS = [1, 3, 7];

function blankCard(key) {
  return { key, ef: 2.5, ivl: 0, due: today(), reps: 0, lapses: 0, seen: 0, lastAt: 0 };
}

export function card(key) {
  const existing = state.srs[key];
  if (existing) return existing;
  const fresh = blankCard(key);
  state.srs[key] = fresh;
  return fresh;
}

export function has(key) {
  return Boolean(state.srs[key]);
}

function addDays(dayString, days) {
  const d = new Date(`${dayString}T00:00:00`);
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

/**
 * First exposure: put a card in the queue without grading it, due tomorrow.
 * Called when a lesson introduces its vocabulary, so Review has something to
 * work with instead of staying permanently empty.
 */
export function seed(key, { days = 1 } = {}) {
  if (state.srs[key]) return state.srs[key];
  const c = card(key);
  c.seen = 1;
  c.ivl = days;
  c.due = addDays(today(), days);
  save({ quiet: true });
  return c;
}

/** Record a review. `grade` is one of GRADE.*. Returns the updated card. */
export function review(key, grade) {
  const c = card(key);
  c.seen += 1;
  c.lastAt = Date.now();

  if (grade === GRADE.AGAIN) {
    c.lapses += 1;
    c.reps = 0;
    c.ef = Math.max(1.3, c.ef - 0.2);
    c.ivl = 0;
    c.due = today();
  } else {
    if (grade === GRADE.HARD) c.ef = Math.max(1.3, c.ef - 0.15);
    else if (grade === GRADE.EASY) c.ef = Math.min(2.9, c.ef + 0.1);

    if (c.reps < FIRST_STEPS.length) {
      c.ivl = FIRST_STEPS[c.reps];
      if (grade === GRADE.EASY) c.ivl = Math.round(c.ivl * 1.5);
      if (grade === GRADE.HARD) c.ivl = Math.max(1, Math.round(c.ivl * 0.6));
    } else {
      const factor = grade === GRADE.HARD ? 1.2 : c.ef;
      c.ivl = Math.max(1, Math.round(c.ivl * factor));
    }
    c.ivl = Math.min(c.ivl, 365);
    c.reps += 1;
    c.due = addDays(today(), c.ivl);
  }
  save({ quiet: true });
  return c;
}

/** Convenience: map a right/wrong answer plus hint usage onto a grade. */
export function gradeFor(correct, { usedHint = false, fast = false } = {}) {
  if (!correct) return GRADE.AGAIN;
  if (usedHint) return GRADE.HARD;
  return fast ? GRADE.EASY : GRADE.GOOD;
}

/** Every card whose due date is today or earlier, soonest first. */
export function dueCards(prefix = null) {
  const now = today();
  return Object.values(state.srs)
    .filter((c) => (prefix ? c.key.startsWith(prefix) : true))
    .filter((c) => daysBetween(c.due, now) >= 0)
    .sort((a, b) => (a.due < b.due ? -1 : a.due > b.due ? 1 : b.lapses - a.lapses));
}

export function dueCount(prefix = null) {
  return dueCards(prefix).length;
}

/** 0–1 strength used for the little bars on word cards. */
export function strength(key) {
  const c = state.srs[key];
  if (!c || !c.reps) return 0;
  const byInterval = Math.min(1, c.ivl / 60);
  const byReps = Math.min(1, c.reps / 8);
  return Math.round(Math.max(byInterval, byReps * 0.9) * 100) / 100;
}

export const LEVEL_NAMES = ["new", "seen", "learning", "familiar", "strong", "known"];

export function levelOf(key) {
  const c = state.srs[key];
  if (!c || !c.seen) return 0;
  if (c.reps === 0) return 1;
  if (c.ivl < 3) return 2;
  if (c.ivl < 10) return 3;
  if (c.ivl < 45) return 4;
  return 5;
}

/** Aggregate mastery across a set of keys, for the profile screen. */
export function mastery(keys) {
  if (!keys.length) return 0;
  let sum = 0;
  for (const k of keys) sum += strength(k);
  return sum / keys.length;
}
