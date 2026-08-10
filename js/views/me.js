/* The Me tab — streak calendar, stats, settings, backup. */

import { esc, html, raw, dayKey, plural } from "../dom.js";
import { content } from "../data.js";
import { state, exportJSON, todayXP, studiedMinutes } from "../store.js";
import { levelOf, dueCount } from "../srs.js";
import { icelandicVoices, audioPack } from "../audio.js";
import { puffinSVG } from "../puffin.js";
import { courseProgress } from "./learn.js";

const GOALS = [
  { xp: 15, label: "Casual", sub: "≈ 5 min" },
  { xp: 30, label: "Steady", sub: "≈ 10 min" },
  { xp: 50, label: "Serious", sub: "≈ 18 min" },
  { xp: 80, label: "Intense", sub: "≈ 30 min" }
];

export function renderMe() {
  const progress = courseProgress();
  const acc = state.stats.answered ? Math.round((state.stats.correct / state.stats.answered) * 100) : 0;
  const strongWords = content.vocab.filter((v) => levelOf(`w:${v.w}`) >= 4).length;
  const totalMinutes = studiedMinutes();
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return html`
    <header class="page-head">
      <div class="row" style="gap:var(--sp-3)">
        ${raw(puffinSVG({ mood: "wave", size: 82 }))}
        <div class="grow">
          <p class="eyebrow">Þín staða</p>
          <h1 class="h1">${state.profile.name || "Learner"}</h1>
          <p class="muted small">
            ${state.streak.count ? plural(state.streak.count, "day streak", "day streak") : "No streak yet"}
            · best ${state.streak.best}
          </p>
        </div>
      </div>
    </header>

    <section class="word-stats">
      <div class="stat-tile"><span class="stat-tile__v num">${state.xp}</span><span class="stat-tile__l">total XP</span></div>
      <div class="stat-tile"><span class="stat-tile__v num">${acc}%</span><span class="stat-tile__l">accuracy</span></div>
      <div class="stat-tile"><span class="stat-tile__v num">${strongWords}</span><span class="stat-tile__l">strong words</span></div>
      <div class="stat-tile"><span class="stat-tile__v num">${hours ? `${hours}h ${mins}m` : `${mins}m`}</span><span class="stat-tile__l">studied</span></div>
    </section>

    <section class="card stack">
      <div class="row row--between">
        <h2 class="h3">Course progress</h2>
        <span class="tiny dim num">${progress.done}/${progress.total}</span>
      </div>
      <div class="bar"><div class="bar__fill" style="width:${Math.round(progress.pct * 100)}%"></div></div>
      <p class="tiny dim">
        ${progress.done ? `You are ${Math.round(progress.pct * 100)}% through the path.` : "Your first lesson is waiting."}
        ${dueCount("w:") ? ` ${plural(dueCount("w:"), "word is", "words are")} due for review.` : ""}
      </p>
    </section>

    <section class="card stack">
      <h2 class="h3">Last 12 weeks</h2>
      ${raw(heatmap())}
      <p class="tiny dim">Each square is a day. Darker means more XP.</p>
    </section>

    <section class="card stack">
      <h2 class="h3">Daily goal</h2>
      <div class="goal-grid">
        ${raw(
          GOALS.map(
            (g) => `<button class="goal-opt ${state.profile.dailyGoal === g.xp ? "is-active" : ""}"
              data-act="set-goal" data-xp="${g.xp}">
              <span class="goal-opt__l">${esc(g.label)}</span>
              <span class="goal-opt__x num">${g.xp} XP</span>
              <span class="goal-opt__s">${esc(g.sub)}</span>
            </button>`
          ).join("")
        )}
      </div>
      <p class="tiny dim num">${todayXP()} XP earned today.</p>
    </section>

    <section class="card stack">
      <h2 class="h3">Sound & feel</h2>
      ${raw(toggle("sound", "Sound effects and speech", state.profile.sound))}
      ${raw(toggle("haptics", "Haptic feedback", state.profile.haptics))}
      ${raw(toggle("autoSpeak", "Speak new phrases automatically", state.profile.autoSpeak))}
      <label class="field">
        <span class="field__l">Speech speed</span>
        <input type="range" min="0.5" max="1.2" step="0.02" value="${state.profile.rate}"
          data-act="set-rate" aria-label="Speech speed" />
        <span class="field__v num">${Number(state.profile.rate).toFixed(2)}×</span>
      </label>
      ${raw(voicePicker())}
    </section>

    <section class="card stack">
      <h2 class="h3">Appearance</h2>
      <div class="seg" role="group" aria-label="Theme">
        ${raw(
          ["auto", "light", "dark"]
            .map(
              (t) =>
                `<button class="seg__btn ${state.profile.theme === t ? "is-active" : ""}"
                  data-act="set-theme" data-theme="${t}">${t[0].toUpperCase() + t.slice(1)}</button>`
            )
            .join("")
        )}
      </div>
    </section>

    <section class="card stack">
      <h2 class="h3">Offline & data</h2>
      <p class="tiny dim">
        Lundi works with no signal once the lessons are cached. Download them before a flight or a
        drive around the ring road.
      </p>
      <button class="btn btn--sm" data-act="download-all" id="dlBtn">Download all ${content.manifest.length} units</button>
      <button class="btn btn--sm" data-act="download-audio" id="dlAudioBtn">Download the voice pack</button>
      <div class="row" style="gap:.5rem">
        <button class="btn btn--sm grow" data-act="export">Export backup</button>
        <button class="btn btn--sm grow" data-act="import">Import backup</button>
      </div>
      <button class="btn btn--sm btn--ghost" data-act="reset" style="color:var(--danger)">Reset all progress</button>
    </section>

    <section class="card stack">
      <h2 class="h3">About</h2>
      <p class="tiny dim">
        Lundi is a self-contained Icelandic course: ${content.manifest.length} units,
        ${content.vocab.length} words, ${content.drills.length} drill sets,
        ${content.grammar.length} grammar topics, ${content.readings.length} texts.
        Curriculum sequencing follows the classic beginner progression; every sentence, dialogue and
        exercise here was written for this app.
      </p>
      <p class="tiny dim">Lúlli the puffin says: <span class="is">gangi þér vel!</span></p>
    </section>
  `;
}

function toggle(key, label, on) {
  return `<label class="switch">
    <span class="switch__l">${esc(label)}</span>
    <input type="checkbox" data-act="toggle" data-key="${esc(key)}" ${on ? "checked" : ""} />
    <span class="switch__ui" aria-hidden="true"></span>
  </label>`;
}

function voicePicker() {
  const pack = audioPack();
  const isVoices = icelandicVoices();

  // The recorded pack is the normal path — iOS has no Icelandic system voice,
  // which is the whole reason it exists.
  if (pack.clipCount) {
    const mb = pack.packBytes ? ` · ${(pack.packBytes / 1024 / 1024).toFixed(0)} MB` : "";
    return `<p class="callout">
      Icelandic is spoken by ${pack.clipCount.toLocaleString("en-US")} recorded clips
      (voice <b>${esc(String(pack.voice || "").replace("is_IS-", "").replace("-medium", ""))}</b>${mb}),
      so it sounds right even though iOS ships no Icelandic voice.
      ${isVoices.length ? "Anything not in the pack falls back to your device voice." : ""}
    </p>`;
  }

  if (!isVoices.length) {
    return `<p class="callout">
      No Icelandic voice is installed on this device and the recorded pack has not loaded,
      so speech will sound off. On iPhone: Settings → Accessibility → Spoken Content → Voices → Icelandic.
    </p>`;
  }
  const options = isVoices
    .map(
      (v) =>
        `<option value="${esc(v.voiceURI)}" ${state.profile.voiceURI === v.voiceURI ? "selected" : ""}>
          ${esc(v.name)}
        </option>`
    )
    .join("");
  return `<label class="field">
    <span class="field__l">Voice</span>
    <select data-act="set-voice" class="field__sel">${options}</select>
  </label>`;
}

/* ------------------------------------------------------------- heatmap */

function heatmap() {
  const cells = [];
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() - 83);

  for (let i = 0; i < 84; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = dayKey(d);
    const xp = state.days[key]?.xp || 0;
    const level = xp === 0 ? 0 : xp < 15 ? 1 : xp < 35 ? 2 : xp < 70 ? 3 : 4;
    cells.push(
      `<span class="hm__cell hm__cell--${level}" title="${key}: ${xp} XP" aria-label="${key}: ${xp} XP"></span>`
    );
  }
  return `<div class="hm" role="img" aria-label="XP over the last twelve weeks">${cells.join("")}</div>`;
}

export { exportJSON };
