/* The Grammar tab — a reference you can actually browse:
   the four cases, prepositions by case, verbs by the case they govern,
   and the full set of written topics. */

import { esc, html, raw, collator } from "../dom.js";
import { content, index, CASE_ORDER, CASE_LABELS } from "../data.js";
import { speakButton } from "../engine/items.js";
import { puffinSVG } from "../puffin.js";

const CAT_ORDER = [
  "sounds",
  "nouns",
  "adjectives",
  "pronouns",
  "numbers",
  "verbs",
  "cases",
  "prepositions",
  "syntax",
  "wordformation"
];

const CAT_META = {
  sounds: { label: "Sounds & spelling", icon: "🔊" },
  nouns: { label: "Nouns", icon: "📦" },
  adjectives: { label: "Adjectives", icon: "🎨" },
  pronouns: { label: "Pronouns", icon: "🫵" },
  numbers: { label: "Numbers", icon: "🔢" },
  verbs: { label: "Verbs", icon: "⚡" },
  cases: { label: "Cases", icon: "🧊" },
  prepositions: { label: "Prepositions", icon: "🧭" },
  syntax: { label: "Sentences", icon: "🧱" },
  wordformation: { label: "Word building", icon: "🔗" }
};

const CASE_INTRO = {
  NF: {
    role: "The subject. Who or what is doing the verb.",
    cue: "Hér er …",
    examples: [["Hundurinn sefur.", "The dog is sleeping."], ["Þetta er góð bók.", "This is a good book."]]
  },
  "ÞF": {
    role: "The direct object, plus motion-to and stretches of time.",
    cue: "Um …",
    examples: [["Ég sé hundinn.", "I see the dog."], ["Við förum í bæinn.", "We are going into town."]]
  },
  "ÞGF": {
    role: "The indirect object, static location, and the tool you use.",
    cue: "Frá …",
    examples: [["Ég hjálpa vinkonu minni.", "I help my friend."], ["Bókin er á borðinu.", "The book is on the table."]]
  },
  EF: {
    role: "Possession, measure, and whatever the genitive prepositions take.",
    cue: "Til …",
    examples: [["Bíll pabba er gamall.", "Dad's car is old."], ["Við bíðum eftir rútunni til Akureyrar.", "We are waiting for the coach to Akureyri."]]
  }
};

/* ------------------------------------------------------------------ hub */

export function renderGrammar() {
  const topicCount = content.grammar.length;
  const cats = CAT_ORDER.filter((c) => index.grammarByCat.has(c));

  return html`
    <header class="page-head">
      <p class="eyebrow">Málfræði</p>
      <h1 class="h-display">Grammar</h1>
      <p class="muted small">
        Everything explained once, properly, and then always here when you need to look it up.
      </p>
    </header>

    <section class="hub">
      <button class="hub__card hub__card--cases" data-act="g-cases">
        <span class="hub__icon">🧊</span>
        <span class="hub__t">The four cases</span>
        <span class="hub__s">What each one is for, colour-coded everywhere in the app</span>
      </button>
      <button class="hub__card hub__card--preps" data-act="g-preps">
        <span class="hub__icon">🧭</span>
        <span class="hub__t">Prepositions</span>
        <span class="hub__s">${content.prepositions.length} of them, sorted by the case they take</span>
      </button>
      <button class="hub__card hub__card--verbs" data-act="g-verbs">
        <span class="hub__icon">⚡</span>
        <span class="hub__t">Verbs & their cases</span>
        <span class="hub__s">${content.verbCases.length} verbs, conjugated, with what their object needs</span>
      </button>
      <button class="hub__card hub__card--phrases" data-nav="phrases">
        <span class="hub__icon">💬</span>
        <span class="hub__t">Phrasebook</span>
        <span class="hub__s">Ready-made lines for real situations</span>
      </button>
    </section>

    <section class="stack">
      <h2 class="h2">${topicCount} topics</h2>
      ${raw(
        cats
          .map((cat) => {
            const list = (index.grammarByCat.get(cat) || []).slice().sort((a, b) => (a.unit || 0) - (b.unit || 0));
            return `<div class="stack" style="gap:.4rem">
              <p class="eyebrow">${esc(CAT_META[cat]?.icon || "")} ${esc(CAT_META[cat]?.label || cat)}</p>
              ${list
                .map(
                  (t) => `<button class="card card--press topic-row" data-act="g-topic" data-id="${esc(t.id)}">
                    <span class="grow">
                      <span class="topic-row__t">${esc(t.title)}</span>
                      <span class="tiny dim">${esc(t.summary)}</span>
                    </span>
                    <span class="badge badge--cefr">${esc(t.cefr)}</span>
                  </button>`
                )
                .join("")}
            </div>`;
          })
          .join("")
      )}
      ${topicCount
        ? ""
        : raw(
            `<div class="empty">${puffinSVG({ mood: "think", size: 100 })}<p>Grammar topics have not been generated yet.</p></div>`
          )}
    </section>
  `;
}

/* ---------------------------------------------------------------- cases */

export function renderCases() {
  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Grammar</button>
    <header class="page-head">
      <p class="eyebrow">Föllin fjögur</p>
      <h1 class="h-display">The four cases</h1>
      <p class="muted small">
        Icelandic nouns, adjectives, articles, numbers and pronouns all change shape depending on the
        job they are doing. Icelanders recite them in this order — so does this app, everywhere.
      </p>
    </header>

    ${raw(
      CASE_ORDER.map((c) => {
        const meta = CASE_LABELS[c];
        const intro = CASE_INTRO[c];
        return `
        <section class="case-card case-card--${meta.cls}">
          <div class="row row--between">
            <div>
              <p class="eyebrow" style="color:var(--case-${meta.cls})">${esc(meta.short)}</p>
              <h2 class="h2 is">${esc(meta.is)}</h2>
              <p class="tiny dim">${esc(meta.en)}</p>
            </div>
            <span class="case-cue">${esc(intro.cue)}</span>
          </div>
          <p class="small">${esc(intro.role)}</p>
          <div class="pairs">
            ${intro.examples
              .map(
                ([is, en]) => `<div class="pair" style="border-left-color:var(--case-${meta.cls})">
                  <span class="pair__is">${esc(is)} ${speakButton(is)}</span>
                  <span class="pair__en">${esc(en)}</span>
                </div>`
              )
              .join("")}
          </div>
        </section>`;
      }).join("")
    )}

    <section class="card stack">
      <h2 class="h2">The article, all sixteen slots</h2>
      <p class="tiny dim">The definite article is glued to the end of the noun. Learn these three rows and most nouns fall into line.</p>
      <div class="tbl-wrap"><table class="tbl">
        <thead><tr><th>fall</th><th>kk. hundur</th><th>kvk. borg</th><th>hk. barn</th></tr></thead>
        <tbody>
          <tr data-case="NF"><th scope="row">NF</th><td class="is">hundurinn</td><td class="is">borgin</td><td class="is">barnið</td></tr>
          <tr data-case="ÞF"><th scope="row">ÞF</th><td class="is">hundinn</td><td class="is">borgina</td><td class="is">barnið</td></tr>
          <tr data-case="ÞGF"><th scope="row">ÞGF</th><td class="is">hundinum</td><td class="is">borginni</td><td class="is">barninu</td></tr>
          <tr data-case="EF"><th scope="row">EF</th><td class="is">hundsins</td><td class="is">borgarinnar</td><td class="is">barnsins</td></tr>
        </tbody>
      </table></div>
    </section>

    <section class="card stack">
      <h2 class="h2">Personal pronouns</h2>
      <div class="tbl-wrap"><table class="tbl">
        <thead><tr><th>fall</th><th>ég</th><th>þú</th><th>hann</th><th>hún</th><th>það</th><th>við</th><th>þið</th><th>þeir</th></tr></thead>
        <tbody>
          <tr data-case="NF"><th scope="row">NF</th><td class="is">ég</td><td class="is">þú</td><td class="is">hann</td><td class="is">hún</td><td class="is">það</td><td class="is">við</td><td class="is">þið</td><td class="is">þeir</td></tr>
          <tr data-case="ÞF"><th scope="row">ÞF</th><td class="is">mig</td><td class="is">þig</td><td class="is">hann</td><td class="is">hana</td><td class="is">það</td><td class="is">okkur</td><td class="is">ykkur</td><td class="is">þá</td></tr>
          <tr data-case="ÞGF"><th scope="row">ÞGF</th><td class="is">mér</td><td class="is">þér</td><td class="is">honum</td><td class="is">henni</td><td class="is">því</td><td class="is">okkur</td><td class="is">ykkur</td><td class="is">þeim</td></tr>
          <tr data-case="EF"><th scope="row">EF</th><td class="is">mín</td><td class="is">þín</td><td class="is">hans</td><td class="is">hennar</td><td class="is">þess</td><td class="is">okkar</td><td class="is">ykkar</td><td class="is">þeirra</td></tr>
        </tbody>
      </table></div>
    </section>

    <button class="btn btn--primary btn--block" data-act="drill-cat-go" data-cat="cases">
      Drill the cases
    </button>
  `;
}

/* --------------------------------------------------------- prepositions */

export const prepFilter = { case: "all", q: "" };

export function renderPreps() {
  const list = content.prepositions
    .filter((p) => (prepFilter.case === "all" ? true : p.cases.includes(prepFilter.case)))
    .filter((p) => {
      const q = prepFilter.q.trim().toLowerCase();
      if (!q) return true;
      return p.p.toLowerCase().includes(q) || p.en.toLowerCase().includes(q);
    })
    .sort((a, b) => (a.freq || 2) - (b.freq || 2) || collator.compare(a.p, b.p));

  const counts = {
    all: content.prepositions.length,
    NF: 0,
    "ÞF": content.prepositions.filter((p) => p.cases.includes("ÞF")).length,
    "ÞGF": content.prepositions.filter((p) => p.cases.includes("ÞGF")).length,
    EF: content.prepositions.filter((p) => p.cases.includes("EF")).length
  };

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Grammar</button>
    <header class="page-head">
      <p class="eyebrow">Forsetningar</p>
      <h1 class="h-display">Prepositions</h1>
      <p class="muted small">
        Every preposition forces a case on whatever follows it. Some force two — and then the case
        itself carries meaning: movement or stillness.
      </p>
    </header>

    <div class="chips">
      <button class="fchip ${prepFilter.case === "all" ? "is-active" : ""}" data-act="prep-case" data-case="all">
        All ${counts.all}
      </button>
      ${raw(
        ["ÞF", "ÞGF", "EF"]
          .map(
            (c) =>
              `<button class="fchip ${prepFilter.case === c ? "is-active" : ""}" data-act="prep-case" data-case="${c}">
                <span class="mark-${CASE_LABELS[c].cls}">${c}</span> ${counts[c]}
              </button>`
          )
          .join("")
      )}
    </div>

    <div class="search">
      <span class="dim" aria-hidden="true">🔍</span>
      <input id="prepSearch" type="search" placeholder="Find a preposition…" value="${prepFilter.q}" autocomplete="off" />
    </div>

    <section class="stack">
      ${raw(list.map(prepCard).join(""))}
      ${list.length ? "" : raw(`<div class="empty"><p>Nothing matches that.</p></div>`)}
    </section>
  `;
}

function prepCard(p) {
  const caseTags = p.cases
    .map((c) => `<span class="badge badge--${CASE_LABELS[c].cls}">${esc(c)}</span>`)
    .join("");
  return `
  <article class="card stack prep-card">
    <div class="row row--between">
      <h3 class="h2 is">${esc(p.p)}</h3>
      <div class="row" style="gap:.3rem">${caseTags}${speakButton(p.p)}</div>
    </div>
    <p class="muted small">${esc(p.en)}</p>
    <div class="stack" style="gap:.4rem">
      ${p.senses
        .map(
          (s) => `<div class="sense sense--${CASE_LABELS[s.case].cls}">
            <p class="sense__head">
              <span class="badge badge--${CASE_LABELS[s.case].cls}">${esc(s.case)}</span>
              <span class="small">${esc(s.en)}</span>
            </p>
            <p class="is">${esc(s.is)} ${speakButton(s.is)}</p>
            <p class="tiny dim">${esc(s.enx)}</p>
          </div>`
        )
        .join("")}
    </div>
    ${p.contrast ? `<p class="callout">${esc(p.contrast)}</p>` : ""}
    ${p.opposite ? `<p class="tiny dim">Opposite movement: <b class="is">${esc(p.opposite)}</b></p>` : ""}
  </article>`;
}

/* ------------------------------------------------------ verbs and cases */

export const verbFilter = { gov: "all", q: "" };

const GOV_LABEL = {
  "ÞF": "accusative object",
  "ÞGF": "dative object",
  EF: "genitive object",
  "ÞF+ÞGF": "two objects",
  "impersonal-ÞF": "accusative subject",
  "impersonal-ÞGF": "dative subject",
  none: "no object"
};

export function renderVerbs() {
  const govs = Array.from(new Set(content.verbCases.map((v) => v.gov)));
  const list = content.verbCases
    .filter((v) => (verbFilter.gov === "all" ? true : v.gov === verbFilter.gov))
    .filter((v) => {
      const q = verbFilter.q.trim().toLowerCase();
      if (!q) return true;
      return v.v.toLowerCase().includes(q) || v.en.toLowerCase().includes(q);
    })
    .sort((a, b) => (a.unit || 0) - (b.unit || 0) || collator.compare(a.v, b.v));

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Grammar</button>
    <header class="page-head">
      <p class="eyebrow">Sagnir og föll</p>
      <h1 class="h-display">Verbs & cases</h1>
      <p class="muted small">
        English gives every verb the same kind of object. Icelandic does not — and the case is part
        of the verb, so learn them together.
      </p>
    </header>

    <div class="chips">
      <button class="fchip ${verbFilter.gov === "all" ? "is-active" : ""}" data-act="verb-gov" data-gov="all">
        All ${content.verbCases.length}
      </button>
      ${raw(
        govs
          .map(
            (g) =>
              `<button class="fchip ${verbFilter.gov === g ? "is-active" : ""}" data-act="verb-gov" data-gov="${esc(g)}">
                ${esc(GOV_LABEL[g] || g)}
              </button>`
          )
          .join("")
      )}
    </div>

    <div class="search">
      <span class="dim" aria-hidden="true">🔍</span>
      <input id="verbSearch" type="search" placeholder="Find a verb…" value="${verbFilter.q}" autocomplete="off" />
    </div>

    <section class="stack">
      ${raw(list.map(verbCard).join(""))}
      ${list.length ? "" : raw(`<div class="empty"><p>Nothing matches that.</p></div>`)}
    </section>
  `;
}

function verbCard(v) {
  const cls = CASE_LABELS[String(v.gov).replace(/^impersonal-/, "").split("+")[0]]?.cls || "nom";
  return `
  <article class="card stack verb-card">
    <div class="row row--between">
      <div>
        <h3 class="h3 is">${esc(v.v)}</h3>
        <p class="tiny dim">${esc(v.en)}${v.vclass ? ` · ${esc(v.vclass)}` : ""}</p>
      </div>
      <div class="row" style="gap:.3rem">
        <span class="badge badge--${cls}">${esc(GOV_LABEL[v.gov] || v.gov)}</span>
        ${speakButton(v.v)}
      </div>
    </div>
    <div class="conj-strip">
      ${(v.pres || []).map((f, i) => `<span><i>${esc(["ég", "þú", "hann", "við", "þið", "þeir"][i])}</i>${esc(f)}</span>`).join("")}
    </div>
    ${v.past ? `<p class="tiny dim">þátíð: <span class="is">${esc(v.past[0])}</span>${v.pp ? ` · lh.þt. <span class="is">${esc(v.pp)}</span>` : ""}</p>` : ""}
    <div class="pair" style="border-left-color:var(--case-${cls})">
      <span class="pair__is">${esc(v.ex.is)} ${speakButton(v.ex.is)}</span>
      <span class="pair__en">${esc(v.ex.en)}</span>
    </div>
    ${v.note ? `<p class="tiny dim">${esc(v.note)}</p>` : ""}
  </article>`;
}

/* ---------------------------------------------------------- topic page */

export function renderTopic(id) {
  const topic = index.grammarById.get(id);
  if (!topic) return `<div class="empty"><p>Topic not found.</p></div>`;

  return html`
    <button class="btn btn--ghost btn--sm" data-act="back">← Grammar</button>
    <header class="page-head">
      <p class="eyebrow">${esc(CAT_META[topic.cat]?.label || topic.cat)} · ${topic.cefr}</p>
      <h1 class="h1">${topic.title}</h1>
      ${topic.en ? html`<p class="muted is">${topic.en}</p>` : ""}
      <p class="small">${topic.summary}</p>
    </header>

    ${raw((topic.sections || []).map(section).join(""))}

    ${topic.related?.length
      ? html`<section class="stack">
          <h2 class="h2">See also</h2>
          <div class="chips">
            ${raw(
              topic.related
                .filter((r) => index.grammarById.has(r))
                .map(
                  (r) =>
                    `<button class="fchip" data-act="g-topic" data-id="${esc(r)}">${esc(index.grammarById.get(r).title)}</button>`
                )
                .join("")
            )}
          </div>
        </section>`
      : ""}
  `;
}

function section(s) {
  const table = s.table
    ? `<div class="tbl-wrap"><table class="tbl">
        <thead><tr>${s.table.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
        <tbody>${s.table.rows
          .map((row) => {
            const caseAttr = CASE_LABELS[row[0]] ? ` data-case="${esc(row[0])}"` : "";
            return `<tr${caseAttr}><th scope="row">${esc(row[0])}</th>${row
              .slice(1)
              .map((cell) => `<td class="is">${esc(cell)}</td>`)
              .join("")}</tr>`;
          })
          .join("")}</tbody>
      </table></div>`
    : "";

  const examples = s.ex
    ? `<div class="pairs">${s.ex
        .map(
          ([is, en]) => `<div class="pair">
            <span class="pair__is">${esc(is)} ${speakButton(is)}</span>
            <span class="pair__en">${esc(en)}</span>
          </div>`
        )
        .join("")}</div>`
    : "";

  const list = s.list ? `<ul class="bullets">${s.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";

  return `<section class="card stack topic-sec">
    <h2 class="h3">${esc(s.h)}</h2>
    ${s.p ? `<p class="small">${esc(s.p)}</p>` : ""}
    ${list}
    ${table}
    ${examples}
    ${s.tip ? `<p class="callout">${esc(s.tip)}</p>` : ""}
  </section>`;
}

export { CAT_META };
