/* The Learn tab: today's card plus the winding lesson path. */

import { esc, html, raw, plural } from "../dom.js";
import { content, index, loadUnit, allLessons } from "../data.js";
import { state, lessonRecord, lessonDone, goalProgress, todayXP, streakIsCold } from "../store.js";
import { dueCount } from "../srs.js";
import { puffinSVG, lulliSays } from "../puffin.js";

/* ------------------------------------------------------------ unlocking */

/** A unit opens once the previous one is 5/6 done. Unit 1 is always open. */
export function unitUnlocked(unitId) {
  if (unitId <= 1) return true;
  const prev = index.unitById.get(unitId - 1);
  if (!prev) return true;
  const done = prev.lessons.filter((l) => lessonDone(l.id)).length;
  return done >= Math.max(1, prev.lessons.length - 1);
}

/** Lessons open in order inside a unit. */
export function lessonUnlocked(unitId, n) {
  if (!unitUnlocked(unitId)) return false;
  if (n <= 1) return true;
  const unit = index.unitById.get(unitId);
  const prev = unit?.lessons.find((l) => l.n === n - 1);
  return prev ? lessonDone(prev.id) : true;
}

export function unitProgress(unitId) {
  const unit = index.unitById.get(unitId);
  if (!unit || !unit.lessons.length) return 0;
  const done = unit.lessons.filter((l) => lessonDone(l.id)).length;
  return done / unit.lessons.length;
}

/** The next thing the learner should tap. */
export function nextLesson() {
  for (const unit of content.manifest) {
    for (const lesson of unit.lessons) {
      if (!lessonDone(lesson.id)) {
        if (!unitUnlocked(unit.id)) continue;
        if (!lessonUnlocked(unit.id, lesson.n)) continue;
        return { ...lesson, unit: unit.id, unitSlug: unit.slug, unitTitle: unit.title };
      }
    }
  }
  return null;
}

export function courseProgress() {
  const lessons = allLessons();
  if (!lessons.length) return { done: 0, total: 0, pct: 0 };
  const done = lessons.filter((l) => lessonDone(l.id)).length;
  return { done, total: lessons.length, pct: done / lessons.length };
}

/* --------------------------------------------------------------- views */

export function renderLearn() {
  if (!content.manifest.length) return emptyContent();

  const next = nextLesson();
  const progress = courseProgress();
  const due = dueCount("w:");
  const goalPct = Math.round(goalProgress() * 100);

  return html`
    <section class="today">
      <div class="today__top">
        <div class="today__copy">
          <p class="eyebrow">${greeting()}</p>
          <h1 class="h-display">${next ? next.title : "Course complete"}</h1>
          <p class="muted small">${next ? next.goal : "Every lesson is behind you. Keep the streak with review."}</p>
        </div>
        ${raw(puffinSVG({ mood: streakIsCold() ? "think" : "wave", size: 74 }))}
      </div>

      <div class="today__meter">
        <div class="bar bar--thin"><div class="bar__fill" style="width:${goalPct}%"></div></div>
        <p class="tiny dim">
          ${todayXP()} / ${state.profile.dailyGoal} XP today${goalPct >= 100 ? " · goal met 🎉" : ""}
        </p>
      </div>

      ${next
        ? html`<button class="btn btn--primary btn--block" data-act="play" data-lesson="${next.id}">
            ${lessonRecord(next.id) ? "Practise again" : "Start lesson"}
          </button>`
        : html`<button class="btn btn--primary btn--block" data-act="review-all">Review session</button>`}

      <div class="quick">
        <button class="quick__btn" data-act="review-all">
          <span class="quick__ico">🔁</span>
          <span class="quick__t">Review</span>
          <span class="quick__s">${due ? plural(due, "card due", "cards due") : "all caught up"}</span>
        </button>
        <button class="quick__btn" data-nav="drill">
          <span class="quick__ico">🏋️</span>
          <span class="quick__t">Drill</span>
          <span class="quick__s">grammar gym</span>
        </button>
        <button class="quick__btn" data-nav="read">
          <span class="quick__ico">📖</span>
          <span class="quick__t">Read</span>
          <span class="quick__s">${content.readings.length} texts</span>
        </button>
      </div>
    </section>

    <section class="stack">
      <div class="row row--between">
        <h2 class="h2">Your path</h2>
        <span class="tiny dim num">${progress.done}/${progress.total} lessons</span>
      </div>
      ${raw(content.manifest.map((u) => unitBlock(u, next)).join(""))}
      <p class="center tiny dim" style="padding-block:var(--sp-6)">
        ${esc(lulliSays("idle"))}
      </p>
    </section>
  `;
}

function unitBlock(unit, next) {
  const open = unitUnlocked(unit.id);
  const pct = Math.round(unitProgress(unit.id) * 100);
  const isCurrent = next && next.unit === unit.id;

  return `
  <article class="unit ${open ? "" : "is-locked"} ${isCurrent ? "is-current" : ""}" id="unit-${unit.id}">
    <header class="unit__head" data-act="unit" data-unit="${esc(unit.slug)}">
      <span class="unit__icon" aria-hidden="true">${esc(unit.icon || "•")}</span>
      <div class="grow">
        <p class="unit__kicker">Unit ${unit.id} · <span class="badge badge--cefr">${esc(unit.cefr)}</span></p>
        <h3 class="unit__title is">${esc(unit.title)}</h3>
        <p class="unit__en tiny dim">${esc(unit.en)}</p>
      </div>
      <span class="unit__pct num tiny">${open ? `${pct}%` : "🔒"}</span>
    </header>
    <div class="path">
      ${unit.lessons.map((l, i) => pathNode(unit, l, i, next)).join("")}
    </div>
  </article>`;
}

const OFFSETS = [0, 28, 44, 28, 0, -28];

function pathNode(unit, lesson, i, next) {
  const done = lessonDone(lesson.id);
  const rec = lessonRecord(lesson.id);
  const open = lessonUnlocked(unit.id, lesson.n);
  const isNext = next && next.id === lesson.id;
  const crowns = rec?.crown || 0;
  const nodeState = done ? "done" : open ? "open" : "locked";
  const x = OFFSETS[i % OFFSETS.length];

  const label =
    lesson.kind === "checkpoint"
      ? "Checkpoint"
      : lesson.kind === "story"
        ? "Story"
        : lesson.kind === "grammar"
          ? "Grammar"
          : `Lesson ${lesson.n}`;

  return `
  <div class="path__row" style="--x:${x}px">
    <button class="node node--${nodeState} ${isNext ? "is-next" : ""} node--${esc(lesson.kind)}"
      type="button" data-act="${open ? "play" : "locked"}" data-lesson="${esc(lesson.id)}"
      aria-label="${esc(label)}: ${esc(lesson.title)}${open ? "" : " (locked)"}">
      <span class="node__face" aria-hidden="true">${done ? "★" : open ? esc(lesson.icon || "◆") : "🔒"}</span>
      ${crowns ? `<span class="node__crowns" aria-hidden="true">${"●".repeat(crowns)}</span>` : ""}
      ${isNext ? `<span class="node__pop">Start</span>` : ""}
    </button>
    <div class="path__meta">
      <p class="path__label">${esc(label)}</p>
      <p class="path__title is">${esc(lesson.title)}</p>
      <p class="path__en tiny dim">${esc(lesson.en)} · ${lesson.minutes} min</p>
    </div>
  </div>`;
}

/* ------------------------------------------------------------ unit page */

export async function renderUnit(slug) {
  const meta = index.unitBySlug.get(slug);
  if (!meta) return `<div class="empty"><p>That unit does not exist.</p></div>`;

  let unit = null;
  try {
    unit = await loadUnit(slug);
  } catch {
    /* metadata is enough to render the overview */
  }

  const pct = Math.round(unitProgress(meta.id) * 100);
  const words = index.vocabByUnit.get(meta.id) || [];

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Path</button>
    <header class="unit-hero">
      <span class="unit-hero__icon">${meta.icon}</span>
      <p class="eyebrow">Unit ${meta.id} · ${meta.cefr}</p>
      <h1 class="h-display is">${meta.title}</h1>
      <p class="muted">${meta.en}</p>
      <p class="small">${meta.blurb}</p>
      <div class="bar bar--thin"><div class="bar__fill" style="width:${pct}%"></div></div>
      <p class="tiny dim num">${pct}% complete · ${words.length} words</p>
    </header>

    <section class="card stack">
      <h2 class="h3">By the end you can</h2>
      <ul class="cando">
        ${raw((meta.canDo || []).map((c) => `<li>${esc(c)}</li>`).join(""))}
      </ul>
    </section>

    <section class="stack">
      <h2 class="h2">Lessons</h2>
      ${raw(
        meta.lessons
          .map((l) => {
            const done = lessonDone(l.id);
            const open = lessonUnlocked(meta.id, l.n);
            return `<button class="card card--press lesson-row ${done ? "is-done" : ""} ${open ? "" : "is-locked"}"
              data-act="${open ? "play" : "locked"}" data-lesson="${esc(l.id)}">
              <span class="lesson-row__icon">${done ? "★" : open ? esc(l.icon || "◆") : "🔒"}</span>
              <span class="grow">
                <span class="lesson-row__title is">${esc(l.title)}</span>
                <span class="lesson-row__sub tiny dim">${esc(l.en)} · ${l.items} exercises · ${l.minutes} min</span>
              </span>
              <span class="badge">${esc(l.kind)}</span>
            </button>`;
          })
          .join("")
      )}
    </section>

    ${words.length
      ? html`<section class="stack">
          <h2 class="h2">Words in this unit</h2>
          <div class="wordchips">
            ${raw(
              words
                .map(
                  (w) =>
                    `<button class="wordchip" data-act="word" data-w="${esc(w.w)}">
                      <span class="is">${esc(w.w)}</span><span class="tiny dim">${esc(w.en)}</span>
                    </button>`
                )
                .join("")
            )}
          </div>
        </section>`
      : ""}

    ${unit
      ? html`<button class="btn btn--primary btn--block" data-act="unit-test" data-unit="${slug}">
          Unit workout · 16 mixed questions
        </button>`
      : ""}
  `;
}

/* ------------------------------------------------------------- helpers */

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Góða nótt";
  if (h < 12) return "Góðan daginn";
  if (h < 18) return "Góðan dag";
  return "Gott kvöld";
}

function emptyContent() {
  return `<div class="empty">
    ${puffinSVG({ mood: "think", size: 110 })}
    <h2 class="h2">No lessons loaded</h2>
    <p class="small">Run <span class="kbd">node tools/build.js</span> to generate the content manifest.</p>
  </div>`;
}
