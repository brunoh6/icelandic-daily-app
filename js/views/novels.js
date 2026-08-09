/* Graded readers — a story told over several chapters, one chapter a sitting.
   Longer than the Reading texts and the bridge from A2 into B1. */

import { esc, html, raw, plural } from "../dom.js";
import { content, index } from "../data.js";
import { state } from "../store.js";
import { speakButton } from "../engine/items.js";
import { puffinSVG } from "../puffin.js";

/* -------------------------------------------------------------- progress */

export function chapterDone(novelId, n) {
  return Boolean(state.novels?.[novelId]?.[n]);
}

export function markChapter(novelId, n) {
  state.novels ||= {};
  state.novels[novelId] ||= {};
  state.novels[novelId][n] = true;
}

export function novelProgress(novel) {
  const done = novel.chapters.filter((c) => chapterDone(novel.id, c.n)).length;
  return { done, total: novel.chapters.length, pct: done / novel.chapters.length };
}

/** The next unread chapter, or the last one if the book is finished. */
export function nextChapter(novel) {
  return novel.chapters.find((c) => !chapterDone(novel.id, c.n)) || novel.chapters[novel.chapters.length - 1];
}

/* ----------------------------------------------------------------- views */

export function renderNovels() {
  if (!content.novels.length) {
    return `<div class="empty">${puffinSVG({ mood: "think", size: 110 })}
      <h2 class="h2">No readers yet</h2><p class="small">The graded novels have not been built.</p></div>`;
  }

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Reading</button>
    <header class="page-head">
      <p class="eyebrow">Framhaldssögur</p>
      <h1 class="h-display">Graded readers</h1>
      <p class="muted small">
        Whole stories, a chapter at a time. Read the Icelandic first and only then look at the English —
        guessing is most of the work.
      </p>
    </header>

    <section class="stack">
      ${raw(content.novels.map(novelCard).join(""))}
    </section>
  `;
}

function novelCard(novel) {
  const { done, total, pct } = novelProgress(novel);
  return `
  <button class="card card--press novel-card" data-act="novel" data-id="${esc(novel.id)}">
    <div class="row row--between">
      <span class="badge badge--cefr">${esc(novel.level)}</span>
      <span class="tiny dim num">${done}/${total} chapters</span>
    </div>
    <h3 class="h2 is">${esc(novel.title)}</h3>
    <p class="muted small">${esc(novel.en || "")}</p>
    <p class="tiny dim">${esc(novel.tagline || "")}</p>
    <div class="bar bar--thin"><div class="bar__fill" style="width:${Math.round(pct * 100)}%"></div></div>
  </button>`;
}

export function renderNovel(id) {
  const novel = index.novelById.get(id);
  if (!novel) return `<div class="empty"><p>That reader does not exist.</p></div>`;
  const { done, total } = novelProgress(novel);
  const next = nextChapter(novel);

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Readers</button>
    <header class="page-head">
      <p class="eyebrow">${novel.level} · ${plural(total, "chapter", "chapters")}</p>
      <h1 class="h-display is">${novel.title}</h1>
      <p class="muted">${novel.en || ""}</p>
      <p class="small">${novel.tagline || ""}</p>
    </header>

    <button class="btn btn--primary btn--block" data-act="chapter" data-id="${novel.id}" data-n="${next.n}">
      ${done ? `Continue · chapter ${next.n}` : "Start reading"}
    </button>

    <section class="stack">
      ${raw(
        novel.chapters
          .map((c) => {
            const read = chapterDone(novel.id, c.n);
            return `<button class="card card--press chapter-row ${read ? "is-done" : ""}"
              data-act="chapter" data-id="${esc(novel.id)}" data-n="${c.n}">
              <span class="chapter-row__n">${read ? "✓" : c.n}</span>
              <span class="grow">
                <span class="chapter-row__t is">${esc(c.title)}</span>
                <span class="tiny dim">${esc(c.en || "")} · ${c.text.length} sentences</span>
              </span>
            </button>`;
          })
          .join("")
      )}
    </section>
  `;
}

export function renderChapter(id, n) {
  const novel = index.novelById.get(id);
  if (!novel) return `<div class="empty"><p>That reader does not exist.</p></div>`;
  const chapter = novel.chapters.find((c) => c.n === Number(n));
  if (!chapter) return `<div class="empty"><p>No such chapter.</p></div>`;

  const full = chapter.text.join(" ");
  const prev = novel.chapters.find((c) => c.n === chapter.n - 1);
  const next = novel.chapters.find((c) => c.n === chapter.n + 1);

  return html`
    <button class="btn btn--ghost btn--sm" data-act="novel" data-id="${novel.id}">← ${novel.title}</button>
    <header class="page-head">
      <p class="eyebrow">Chapter ${chapter.n} of ${novel.chapters.length}</p>
      <h1 class="h1 is">${chapter.title}</h1>
      <p class="muted">${chapter.en || ""}</p>
      <div class="row" style="gap:.5rem">
        <button class="btn btn--sm" data-act="speak" data-text="${full}">▶ Read aloud</button>
        <button class="btn btn--sm" data-act="toggle-translation">Show translation</button>
      </div>
    </header>

    <section class="reading">
      ${raw(
        chapter.text
          .map((line) => `<p class="rline rline--plain is">${esc(line)} ${speakButton(line)}</p>`)
          .join("")
      )}
    </section>

    <section class="card stack" id="translationBlock" hidden>
      <h2 class="h3">In English</h2>
      <p class="small muted">${chapter.translation || ""}</p>
    </section>

    ${chapter.hints?.length
      ? html`<section class="card stack">
          <h2 class="h3">Words to lean on</h2>
          <div class="gloss">
            ${raw(
              chapter.hints
                .map(
                  ([w, g]) => `<span class="gloss__row"><b class="is">${esc(w)}</b><span class="tiny dim">${esc(g)}</span></span>`
                )
                .join("")
            )}
          </div>
        </section>`
      : ""}

    ${chapter.qs?.length
      ? html`<button class="btn btn--primary btn--block" data-act="chapter-quiz" data-id="${novel.id}" data-n="${chapter.n}">
          Check you followed it · ${chapter.qs.length} questions
        </button>`
      : ""}

    <div class="row" style="gap:.5rem">
      ${prev
        ? html`<button class="btn btn--sm grow" data-act="chapter" data-id="${novel.id}" data-n="${prev.n}">← Chapter ${prev.n}</button>`
        : ""}
      ${next
        ? html`<button class="btn btn--sm grow" data-act="chapter" data-id="${novel.id}" data-n="${next.n}">Chapter ${next.n} →</button>`
        : ""}
    </div>
  `;
}

/** Chapter comprehension questions as engine items. */
export function chapterExercises(novel, chapter) {
  return (chapter.qs || []).map((q) => ({
    t: "choice",
    q: q.q,
    opts: q.opts,
    a: q.a,
    note: q.why || "",
    tags: [`novel:${novel.id}`]
  }));
}
