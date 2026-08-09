/* The Words tab — vocabulary with context, full declensions, and the SRS queue. */

import { esc, html, raw, collator, plural } from "../dom.js";
import { content, index, CASE_ORDER, CASE_LABELS, GENDER_LABELS, POS_LABELS, topics } from "../data.js";
import { levelOf, strength, dueCards, dueCount, LEVEL_NAMES } from "../srs.js";
import { speakButton } from "../engine/items.js";
import { puffinSVG } from "../puffin.js";

export const wordFilters = { q: "", topic: "all", pos: "all", only: "all" };

const PRONOUN_ROWS = [
  ["ég", "mig", "mér", "mín"],
  ["þú", "þig", "þér", "þín"],
  ["hann", "hann", "honum", "hans"],
  ["hún", "hana", "henni", "hennar"],
  ["það", "það", "því", "þess"],
  ["við", "okkur", "okkur", "okkar"],
  ["þið", "ykkur", "ykkur", "ykkar"],
  ["þeir", "þá", "þeim", "þeirra"],
  ["þær", "þær", "þeim", "þeirra"],
  ["þau", "þau", "þeim", "þeirra"]
];

export function renderWords() {
  if (!content.vocab.length) {
    return `<div class="empty">${puffinSVG({ mood: "think", size: 110 })}
      <h2 class="h2">No words yet</h2><p class="small">The vocabulary file has not been built.</p></div>`;
  }

  const list = filtered();
  const due = dueCount("w:");
  const known = content.vocab.filter((v) => levelOf(`w:${v.w}`) >= 4).length;

  return html`
    <header class="page-head">
      <p class="eyebrow">Orðaforði</p>
      <h1 class="h-display">Words</h1>
      <p class="muted small">
        ${content.vocab.length} words with gender, full declensions and a sentence that shows the
        word doing its job.
      </p>
    </header>

    <div class="word-stats">
      <div class="stat-tile"><span class="stat-tile__v num">${known}</span><span class="stat-tile__l">strong</span></div>
      <div class="stat-tile"><span class="stat-tile__v num">${due}</span><span class="stat-tile__l">due now</span></div>
      <div class="stat-tile"><span class="stat-tile__v num">${content.vocab.length}</span><span class="stat-tile__l">total</span></div>
    </div>

    <div class="row" style="gap:.5rem">
      <button class="btn btn--primary grow" data-act="review-words">
        ${due ? `Review ${plural(due, "word", "words")}` : "Practise anyway"}
      </button>
      <button class="btn btn--sm" data-act="quiz-visible">Quiz these</button>
    </div>

    <div class="search">
      <span class="dim" aria-hidden="true">🔍</span>
      <input id="wordSearch" type="search" placeholder="Search Icelandic or English…"
        value="${wordFilters.q}" autocomplete="off" />
    </div>

    <div class="chips">
      ${raw(
        ["all", ...topics()]
          .map(
            (t) =>
              `<button class="fchip ${wordFilters.topic === t ? "is-active" : ""}"
                data-act="word-topic" data-topic="${esc(t)}">${esc(t === "all" ? "All topics" : t)}</button>`
          )
          .join("")
      )}
    </div>

    <div class="chips">
      ${raw(
        ["all", "noun", "verb", "adj", "adv", "prep", "pron", "num", "phrase"]
          .map(
            (p) =>
              `<button class="fchip ${wordFilters.pos === p ? "is-active" : ""}"
                data-act="word-pos" data-pos="${esc(p)}">${esc(p === "all" ? "All types" : POS_LABELS[p] || p)}</button>`
          )
          .join("")
      )}
    </div>

    <p class="tiny dim num">${list.length} shown</p>
    <section class="word-grid">
      ${raw(list.slice(0, 300).map(wordCard).join(""))}
    </section>
    ${list.length > 300 ? `<p class="center tiny dim">Showing the first 300. Narrow the search to see more.</p>` : ""}
  `;
}

export function filtered() {
  const q = wordFilters.q.trim().toLowerCase();
  return content.vocab
    .filter((v) => {
      if (wordFilters.topic !== "all" && v.topic !== wordFilters.topic) return false;
      if (wordFilters.pos !== "all" && v.pos !== wordFilters.pos) return false;
      if (wordFilters.only === "due" && !isDue(v)) return false;
      if (!q) return true;
      return (
        v.w.toLowerCase().includes(q) ||
        v.en.toLowerCase().includes(q) ||
        (v.ex?.is || "").toLowerCase().includes(q)
      );
    })
    .sort((a, b) => a.unit - b.unit || collator.compare(a.w, b.w));
}

function isDue(v) {
  return dueCards("w:").some((c) => c.key === `w:${v.w}`);
}

function wordCard(v) {
  const lvl = levelOf(`w:${v.w}`);
  const bars = Array.from({ length: 5 }, (_, i) => `<i class="${i < lvl ? "on" : ""}"></i>`).join("");
  const gTag = v.g ? `<span class="badge badge--${v.g}">${esc(GENDER_LABELS[v.g].short)}</span>` : "";
  return `
  <button class="word-card" data-act="word" data-w="${esc(v.w)}">
    <div class="word-card__top">
      <span class="word-card__w is">${esc(v.w)}</span>
      ${gTag}
    </div>
    <span class="word-card__en">${esc(v.en)}</span>
    <div class="word-card__foot">
      <span class="tiny dim">${esc(POS_LABELS[v.pos] || v.pos)} · U${v.unit}</span>
      <span class="strength" title="${esc(LEVEL_NAMES[lvl])}">${bars}</span>
    </div>
  </button>`;
}

/* --------------------------------------------------------- word detail */

export function wordSheet(word) {
  const v = index.vocabByWord.get(word);
  if (!v) return `<p>Word not found.</p>`;

  const lvl = levelOf(`w:${v.w}`);
  const pct = Math.round(strength(`w:${v.w}`) * 100);

  return `
    <div class="sheet__grab"></div>
    <div class="row row--between">
      <div>
        <p class="eyebrow">${esc(POS_LABELS[v.pos] || v.pos)}${v.g ? ` · ${esc(GENDER_LABELS[v.g].is)}` : ""}</p>
        <h2 class="sheet__title is">${esc(v.w)}</h2>
        <p class="muted">${esc(v.en)}</p>
      </div>
      ${speakButton(v.w, { large: true })}
    </div>

    <div class="row row--wrap" style="gap:.4rem;margin-block:var(--sp-3)">
      <span class="badge badge--cefr">${esc(v.cefr)}</span>
      <span class="badge">Unit ${v.unit}</span>
      <span class="badge">${esc(v.topic)}</span>
      ${v.gov ? `<span class="badge badge--${caseCls(v.gov)}">takes ${esc(v.gov)}</span>` : ""}
      <span class="badge">${esc(LEVEL_NAMES[lvl])} · ${pct}%</span>
    </div>

    <div class="pair">
      <span class="pair__is">${esc(v.ex.is)} ${speakButton(v.ex.is)}</span>
      <span class="pair__en">${esc(v.ex.en)}</span>
    </div>

    ${formsBlock(v)}

    <div class="row" style="gap:.5rem;margin-top:var(--sp-4)">
      <button class="btn btn--sm grow" data-act="speak" data-text="${esc(v.w)}">Hear it</button>
      <button class="btn btn--sm grow" data-act="close-sheet">Close</button>
    </div>`;
}

function caseCls(gov) {
  const key = String(gov).replace(/^impersonal-/, "").split("+")[0];
  return CASE_LABELS[key]?.cls || "nom";
}

function formsBlock(v) {
  if (v.pos === "noun" && v.forms?.sg) return nounTable(v);
  if (v.pos === "verb" && v.conj?.pres) return verbTable(v);
  if (v.pos === "adj" && v.decl?.nom) return adjTable(v);
  if (v.pos === "pron") return pronounNote(v);
  return "";
}

function nounTable(v) {
  const sg = v.forms.sg || [];
  const pl = v.forms.pl || null;
  const rows = CASE_ORDER.map(
    (c, i) => `<tr data-case="${c}">
      <th scope="row">${c}</th>
      <td class="is">${esc(sg[i] ?? "—")}</td>
      <td class="is">${pl ? esc(pl[i] ?? "—") : "—"}</td>
    </tr>`
  ).join("");
  return `
  <h3 class="h3" style="margin-top:var(--sp-4)">Declension</h3>
  <p class="tiny dim">${esc(GENDER_LABELS[v.g]?.is || "")} — ${esc(GENDER_LABELS[v.g]?.en || "")}</p>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th scope="col">fall</th><th scope="col">eintala</th><th scope="col">fleirtala</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  ${pl ? "" : `<p class="tiny dim">This noun has no ordinary plural.</p>`}`;
}

const PERSONS = ["ég", "þú", "hann/hún/það", "við", "þið", "þeir/þær/þau"];

function verbTable(v) {
  const pres = v.conj.pres || [];
  const past = v.conj.past || null;
  const rows = PERSONS.map(
    (p, i) => `<tr>
      <th scope="row">${esc(p)}</th>
      <td class="is">${esc(pres[i] ?? "—")}</td>
      <td class="is">${past ? esc(past[i] ?? "—") : "—"}</td>
    </tr>`
  ).join("");
  return `
  <h3 class="h3" style="margin-top:var(--sp-4)">Conjugation</h3>
  ${v.vclass ? `<p class="tiny dim">${esc(v.vclass)} verb${v.conj.pp ? ` · past participle <b class="is">${esc(v.conj.pp)}</b>` : ""}</p>` : ""}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th scope="col"></th><th scope="col">nútíð</th><th scope="col">þátíð</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div>`;
}

function adjTable(v) {
  const [m, f, n] = v.decl.nom;
  return `
  <h3 class="h3" style="margin-top:var(--sp-4)">Forms</h3>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th scope="col">karlkyn</th><th scope="col">kvenkyn</th><th scope="col">hvorugkyn</th></tr></thead>
    <tbody><tr><td class="is">${esc(m)}</td><td class="is">${esc(f)}</td><td class="is">${esc(n)}</td></tr></tbody>
  </table></div>
  ${
    v.decl.comp || v.decl.sup
      ? `<p class="small" style="margin-top:var(--sp-2)">
          ${v.decl.comp ? `Comparative <b class="is">${esc(v.decl.comp)}</b>` : ""}
          ${v.decl.sup ? ` · superlative <b class="is">${esc(v.decl.sup)}</b>` : ""}
         </p>`
      : ""
  }`;
}

function pronounNote(v) {
  const row = PRONOUN_ROWS.find((r) => r[0] === v.w);
  if (!row) return "";
  return `
  <h3 class="h3" style="margin-top:var(--sp-4)">Case forms</h3>
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr>${CASE_ORDER.map((c) => `<th scope="col">${c}</th>`).join("")}</tr></thead>
    <tbody><tr>${row.map((x) => `<td class="is">${esc(x)}</td>`).join("")}</tr></tbody>
  </table></div>`;
}

/* ------------------------------------------------------- review queues */

/** Build a review session from the SRS queue, mixing question directions. */
export function reviewExercises(limit = 20) {
  const due = dueCards("w:").slice(0, limit);
  const words = due.map((c) => index.vocabByWord.get(c.key.slice(2))).filter(Boolean);
  const pool = words.length ? words : sampleForReview(limit);
  return pool.map((v, i) => wordExercise(v, i));
}

export function sampleForReview(limit) {
  const seen = content.vocab.filter((v) => levelOf(`w:${v.w}`) > 0);
  const base = seen.length >= 6 ? seen : content.vocab;
  return base.slice(0, Math.max(6, limit));
}

/** Quiz whatever the Words list is currently showing. */
export function quizExercises(list, limit = 16) {
  return list.slice(0, limit).map((v, i) => wordExercise(v, i));
}

function wordExercise(v, i) {
  const key = `w:${v.w}`;
  const distractors = pickDistractors(v, 3);

  // Rotate the question shape so review never feels like the same drill twice.
  const mode = i % 4;
  if (mode === 0) {
    return {
      t: "choice",
      q: `What does “${v.w}” mean?`,
      opts: shuffleSmall([v.en, ...distractors.map((d) => d.en)]),
      a: v.en,
      speak: v.w,
      note: `${v.ex.is} — ${v.ex.en}`,
      srsKey: key,
      tags: [`topic:${v.topic}`]
    };
  }
  if (mode === 1) {
    return {
      t: "choice",
      q: `Which word means “${v.en}”?`,
      opts: shuffleSmall([v.w, ...distractors.map((d) => d.w)]),
      a: v.w,
      note: `${v.ex.is} — ${v.ex.en}`,
      srsKey: key,
      tags: [`topic:${v.topic}`]
    };
  }
  if (mode === 2) {
    return {
      t: "listen",
      speak: v.w,
      q: "Which word did you hear?",
      mode: "choice",
      opts: shuffleSmall([v.w, ...distractors.map((d) => d.w)]),
      a: v.w,
      note: `${v.w} — ${v.en}`,
      srsKey: key
    };
  }
  return {
    t: "type",
    q: `Write “${v.en}” in Icelandic.`,
    a: v.w,
    hint: `${v.w.slice(0, 1)}… (${v.pos})`,
    note: `${v.ex.is} — ${v.ex.en}`,
    srsKey: key
  };
}

function pickDistractors(v, n) {
  const sameTopic = (index.vocabByTopic.get(v.topic) || []).filter((x) => x.w !== v.w && x.pos === v.pos);
  const samePos = content.vocab.filter((x) => x.pos === v.pos && x.w !== v.w);
  const pool = sameTopic.length >= n ? sameTopic : samePos.length >= n ? samePos : content.vocab.filter((x) => x.w !== v.w);
  const out = [];
  const used = new Set([v.en.toLowerCase(), v.w.toLowerCase()]);
  for (const cand of shuffleSmall(pool)) {
    if (out.length >= n) break;
    if (used.has(cand.en.toLowerCase()) || used.has(cand.w.toLowerCase())) continue;
    used.add(cand.en.toLowerCase());
    used.add(cand.w.toLowerCase());
    out.push(cand);
  }
  return out;
}

function shuffleSmall(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ------------------------------------------------------------ phrases */

export function renderPhrases() {
  if (!content.phrases.length) {
    return `<div class="empty"><p>No phrasebook yet.</p></div>`;
  }
  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Words</button>
    <header class="page-head">
      <p class="eyebrow">Frasar</p>
      <h1 class="h-display">Phrasebook</h1>
      <p class="muted small">The lines that actually get you through a week in Reykjavík.</p>
    </header>
    ${raw(
      content.phrases
        .map(
          (group) => `
        <section class="stack">
          <h2 class="h2">${esc(group.icon || "")} ${esc(group.cat)}</h2>
          <div class="stack" style="gap:.4rem">
            ${group.items
              .map(
                (p) => `<div class="phrase">
                  <div class="row row--between" style="align-items:flex-start">
                    <div class="grow">
                      <p class="is phrase__is">${esc(p.is)}</p>
                      <p class="small muted">${esc(p.en)}</p>
                      ${p.lit ? `<p class="tiny dim">lit. ${esc(p.lit)}</p>` : ""}
                      ${p.when ? `<p class="tiny dim">${esc(p.when)}</p>` : ""}
                    </div>
                    ${speakButton(p.is)}
                  </div>
                </div>`
              )
              .join("")}
          </div>
        </section>`
        )
        .join("")
    )}
  `;
}
