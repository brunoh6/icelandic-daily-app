/* Reading texts with a tap-to-translate line view and comprehension checks. */

import { esc, html, raw } from "../dom.js";
import { content, index } from "../data.js";
import { puffinSVG } from "../puffin.js";

export const readFilter = { level: "all" };

export function renderRead() {
  if (!content.readings.length) {
    return `<div class="empty">${puffinSVG({ mood: "think", size: 110 })}
      <h2 class="h2">No texts yet</h2><p class="small">Readings have not been generated.</p></div>`;
  }

  const levels = Array.from(new Set(content.readings.map((r) => r.level))).sort();
  const list =
    readFilter.level === "all" ? content.readings : content.readings.filter((r) => r.level === readFilter.level);

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Learn</button>
    <header class="page-head">
      <p class="eyebrow">Lestur</p>
      <h1 class="h-display">Reading</h1>
      <p class="muted small">
        Tap any line to see the English. Read it once for the shape, once for the words, once out loud.
      </p>
    </header>

    <div class="chips">
      <button class="fchip ${readFilter.level === "all" ? "is-active" : ""}" data-act="read-level" data-level="all">
        All ${content.readings.length}
      </button>
      ${raw(
        levels
          .map(
            (l) =>
              `<button class="fchip ${readFilter.level === l ? "is-active" : ""}" data-act="read-level" data-level="${esc(l)}">
                ${esc(l)}
              </button>`
          )
          .join("")
      )}
    </div>

    <section class="stack">
      ${raw(
        list
          .map(
            (r) => `<button class="card card--press read-row" data-act="read" data-id="${esc(r.id)}">
              <span class="grow">
                <span class="read-row__t is">${esc(r.title)}</span>
                <span class="tiny dim">${esc(r.en || "")} · ${r.text.length} lines · ${r.minutes || 4} min</span>
              </span>
              <span class="badge badge--cefr">${esc(r.level)}</span>
            </button>`
          )
          .join("")
      )}
    </section>
  `;
}

export function renderReading(id) {
  const r = index.readingById.get(id);
  if (!r) return `<div class="empty"><p>Text not found.</p></div>`;

  const full = r.text.map((s) => s.is).join(" ");

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Reading</button>
    <header class="page-head">
      <p class="eyebrow">${r.level} · Unit ${r.unit ?? "—"}</p>
      <h1 class="h1 is">${r.title}</h1>
      <p class="muted">${r.en || ""}</p>
      <div class="row" style="gap:.5rem">
        <button class="btn btn--sm" data-act="speak" data-text="${full}">▶ Read aloud</button>
        <button class="btn btn--sm" data-act="toggle-en">Show all English</button>
      </div>
    </header>

    <section class="reading" id="readingBody">
      ${raw(
        r.text
          .map(
            (s, i) => `<p class="rline" data-act="rline" data-i="${i}">
              <span class="rline__is is">${esc(s.is)}</span>
              <span class="rline__en">${esc(s.en)}</span>
            </p>`
          )
          .join("")
      )}
    </section>

    ${r.glossary?.length
      ? html`<section class="card stack">
          <h2 class="h3">Glossary</h2>
          <div class="gloss">
            ${raw(
              r.glossary
                .map(
                  ([w, g]) => `<span class="gloss__row"><b class="is">${esc(w)}</b><span class="tiny dim">${esc(g)}</span></span>`
                )
                .join("")
            )}
          </div>
        </section>`
      : ""}

    <button class="btn btn--primary btn--block" data-act="read-quiz" data-id="${r.id}">
      Check comprehension · ${r.qs.length} questions
    </button>
  `;
}

/** Comprehension questions as engine items. */
export function readingExercises(reading) {
  return (reading.qs || []).map((q) => ({
    t: "choice",
    q: q.q,
    opts: q.opts,
    a: q.a,
    note: q.why || "",
    tags: [`reading:${reading.id}`]
  }));
}
