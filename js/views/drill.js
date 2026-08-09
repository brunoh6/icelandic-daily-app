/* The Drill tab — a grammar gym.
   Each set repeats ONE instruction across five rounds of six items. Round 1
   is cued and gentle; round 5 is the same operation inside full sentences.
   That deliberate repetition is what makes the paradigm stick. */

import { esc, html, raw, shuffle } from "../dom.js";
import { content, index } from "../data.js";
import { state, drillRecord } from "../store.js";
import { puffinSVG } from "../puffin.js";

const CAT_LABEL = {
  cases: "Cases & nouns",
  adjectives: "Adjectives",
  pronouns: "Pronouns",
  numbers: "Numbers",
  verbs: "Verbs",
  prepositions: "Prepositions",
  syntax: "Sentences",
  sounds: "Sounds",
  nouns: "Nouns",
  wordformation: "Word building"
};

const CAT_ICON = {
  cases: "🧊",
  adjectives: "🎨",
  pronouns: "🫵",
  numbers: "🔢",
  verbs: "⚡",
  prepositions: "🧭",
  syntax: "🧱",
  sounds: "🔊",
  nouns: "📦",
  wordformation: "🔗"
};

export function renderDrill(filterCat = "all") {
  if (!content.drills.length) {
    return `<div class="empty">${puffinSVG({ mood: "think", size: 110 })}
      <h2 class="h2">The gym is still being built</h2>
      <p class="small">Drill sets have not been generated yet.</p></div>`;
  }

  const cats = Array.from(index.drillByCat.keys());
  const list = filterCat === "all" ? content.drills : index.drillByCat.get(filterCat) || [];

  const cleared = content.drills.filter((d) => roundsCleared(d.id) === 5).length;

  return html`
    <header class="page-head">
      <p class="eyebrow">Grammar gym</p>
      <h1 class="h-display">Æfingar</h1>
      <p class="muted small">
        One instruction, five rounds, six items each. Round five is the real test — same job,
        no scaffolding.
      </p>
      <p class="tiny dim num">${cleared} of ${content.drills.length} sets fully cleared</p>
    </header>

    <div class="chips" role="tablist" aria-label="Drill categories">
      <button class="fchip ${filterCat === "all" ? "is-active" : ""}" data-act="drill-cat" data-cat="all">
        All ${content.drills.length}
      </button>
      ${raw(
        cats
          .map(
            (c) =>
              `<button class="fchip ${filterCat === c ? "is-active" : ""}" data-act="drill-cat" data-cat="${esc(c)}">
                ${esc(CAT_ICON[c] || "•")} ${esc(CAT_LABEL[c] || c)}
              </button>`
          )
          .join("")
      )}
    </div>

    <section class="stack">
      ${raw(list.map(drillCard).join(""))}
    </section>
  `;
}

function roundsCleared(id) {
  const rec = state.drills[id];
  if (!rec) return 0;
  return Object.entries(rec.best).filter(([, v]) => v >= 5).length;
}

function drillCard(drill) {
  const cleared = roundsCleared(drill.id);
  const pips = Array.from({ length: 5 }, (_, i) => {
    const n = i + 1;
    const best = state.drills[drill.id]?.best?.[n] || 0;
    const cls = best >= 5 ? "is-clear" : best > 0 ? "is-part" : "";
    return `<span class="pip ${cls}" aria-hidden="true">${n}</span>`;
  }).join("");

  return `
  <button class="card card--press drill-card" data-act="drill" data-id="${esc(drill.id)}">
    <div class="row row--between">
      <span class="drill-card__icon">${esc(CAT_ICON[drill.cat] || "•")}</span>
      <span class="badge badge--cefr">${esc(drill.cefr)}</span>
    </div>
    <h3 class="h3">${esc(drill.title)}</h3>
    <p class="tiny dim">${esc(drill.instruction)}</p>
    <div class="pips" aria-label="${cleared} of 5 rounds cleared">${pips}</div>
  </button>`;
}

/* ------------------------------------------------------------- detail */

export function renderDrillDetail(id) {
  const drill = index.drillById.get(id);
  if (!drill) return `<div class="empty"><p>Drill not found.</p></div>`;
  const rec = drillRecord(id);

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Gym</button>
    <header class="page-head">
      <p class="eyebrow">${CAT_LABEL[drill.cat] || drill.cat} · ${drill.cefr}</p>
      <h1 class="h1">${drill.title}</h1>
      <p class="muted">${drill.instruction}</p>
    </header>

    <section class="card stack">
      <p class="eyebrow">Worked example</p>
      <p class="is" style="font-size:var(--fs-lg)">${drill.example.q}</p>
      <p class="row" style="gap:.4rem">
        <span class="tiny dim">→</span>
        <span class="is" style="color:var(--success);font-weight:800">${drill.example.a}</span>
      </p>
    </section>

    <section class="stack">
      <h2 class="h2">Five rounds</h2>
      <p class="tiny dim">
        The instruction never changes. Only the material gets harder. Clear a round with 5 of 6
        to open the next.
      </p>
      ${raw(
        drill.rounds
          .map((round) => {
            const best = rec.best[round.n] || 0;
            const open = round.n <= rec.round || best > 0;
            const cleared = best >= 5;
            return `<button class="card card--press round-row ${cleared ? "is-done" : ""} ${open ? "" : "is-locked"}"
              data-act="${open ? "drill-round" : "locked"}" data-id="${esc(drill.id)}" data-round="${round.n}">
              <span class="round-row__n">${round.n}</span>
              <span class="grow">
                <span class="round-row__title">${esc(round.label)}</span>
                <span class="tiny dim">${round.items.length} items${best ? ` · best ${best}/6` : ""}</span>
              </span>
              <span class="round-row__state">${cleared ? "★" : open ? "▶" : "🔒"}</span>
            </button>`;
          })
          .join("")
      )}
    </section>

    <button class="btn btn--primary btn--block" data-act="drill-all" data-id="${drill.id}">
      Marathon · all 30 items
    </button>
  `;
}

/* --------------------------------------------------- drill → exercises */

/** Turn a drill item into something the session engine can render. */
export function drillItemToExercise(item, drill) {
  const hasGap = String(item.q).includes("___");
  const base = {
    note: item.why || "",
    tags: [`drill:${drill.id}`, `cat:${drill.cat}`],
    hint: item.hint
  };

  if (hasGap) {
    return {
      ...base,
      t: "fill",
      q: drill.instruction,
      sentence: item.q,
      base: item.base,
      case: item.case,
      a: item.a,
      mode: item.opts ? "choice" : "type",
      opts: item.opts
    };
  }
  if (item.opts) {
    return { ...base, t: "choice", q: item.q, opts: item.opts, a: item.a };
  }
  return { ...base, t: "type", q: item.q, a: item.a };
}

export function roundExercises(drill, roundN) {
  const round = drill.rounds.find((r) => r.n === roundN);
  if (!round) return [];
  return shuffle(round.items).map((it) => drillItemToExercise(it, drill));
}

export function marathonExercises(drill) {
  return drill.rounds.flatMap((r) => r.items.map((it) => drillItemToExercise(it, drill)));
}

export { CAT_LABEL, CAT_ICON };
