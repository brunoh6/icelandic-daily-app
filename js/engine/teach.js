/* Renders a lesson's teaching blocks — the short "class" you read before the
   drilling starts, and the same markup the unit page uses for revision. */

import { esc } from "../dom.js";
import { CASE_LABELS } from "../data.js";
import { speakButton } from "./items.js";

function table(t) {
  if (!t || !Array.isArray(t.cols) || !Array.isArray(t.rows)) return "";
  const head = t.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join("");
  const body = t.rows
    .map((row) => {
      const cells = Array.isArray(row) ? row : [];
      const caseAttr = CASE_LABELS[cells[0]] ? ` data-case="${esc(cells[0])}"` : "";
      const first = `<th scope="row">${esc(cells[0] ?? "")}</th>`;
      const rest = cells
        .slice(1)
        .map((c) => `<td class="is">${esc(c)}</td>`)
        .join("");
      return `<tr${caseAttr}>${first}${rest}</tr>`;
    })
    .join("");
  return `<div class="tbl-wrap"><table class="tbl"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function examples(list) {
  if (!Array.isArray(list) || !list.length) return "";
  return `<div class="pairs">${list
    .map((pair) => {
      const [is, en] = Array.isArray(pair) ? pair : [pair, ""];
      return `<div class="pair">
        <span class="pair__is">${esc(is)} ${speakButton(is)}</span>
        ${en ? `<span class="pair__en">${esc(en)}</span>` : ""}
      </div>`;
    })
    .join("")}</div>`;
}

export function teachBlock(block) {
  if (!block) return "";
  return `<section class="teach-block">
    <h3 class="teach-block__h">${esc(block.h || "")}</h3>
    ${block.p ? `<p class="teach-block__p">${esc(block.p)}</p>` : ""}
    ${Array.isArray(block.list) ? `<ul class="bullets">${block.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    ${table(block.table)}
    ${examples(block.ex)}
    ${block.tip ? `<p class="callout">${esc(block.tip)}</p>` : ""}
  </section>`;
}

export function teachBlocks(blocks) {
  if (!Array.isArray(blocks) || !blocks.length) return "";
  return blocks.map(teachBlock).join("");
}

export function storyBlock(story) {
  if (!story || !Array.isArray(story.lines)) return "";
  const full = story.lines.map((l) => l.is).join(" ");
  return `<section class="teach-block">
    <div class="row row--between">
      <h3 class="teach-block__h">${esc(story.title || "Story")}</h3>
      <button class="btn btn--sm btn--ghost" type="button" data-act="speak" data-text="${esc(full)}">▶ All</button>
    </div>
    <div class="dialogue">
      ${story.lines
        .map(
          (l) => `<div class="dline" data-act="rline">
            ${l.sp ? `<span class="dline__sp">${esc(l.sp)}</span>` : ""}
            <span class="dline__is is">${esc(l.is)} ${speakButton(l.is)}</span>
            <span class="dline__en">${esc(l.en)}</span>
          </div>`
        )
        .join("")}
    </div>
    ${
      Array.isArray(story.glossary) && story.glossary.length
        ? `<div class="gloss">${story.glossary
            .map(
              ([w, g]) => `<span class="gloss__row"><b class="is">${esc(w)}</b><span class="tiny dim">${esc(g)}</span></span>`
            )
            .join("")}</div>`
        : ""
    }
  </section>`;
}
