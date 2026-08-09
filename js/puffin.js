/* Lúlli — the Atlantic puffin who lives in this app.
   One inline SVG, several moods, no image assets. */

const MOODS = new Set(["idle", "cheer", "sad", "think", "sleep", "wave"]);

/**
 * @param {object} opts
 * @param {"idle"|"cheer"|"sad"|"think"|"sleep"|"wave"} opts.mood
 * @param {number} opts.size  css pixels
 */
export function puffinSVG({ mood = "idle", size = 86, className = "" } = {}) {
  const m = MOODS.has(mood) ? mood : "idle";
  const eyeShut = m === "sleep";
  const brow = m === "sad" ? 6 : m === "think" ? -3 : 0;

  return `
<svg class="puffin ${className}" data-mood="${m}" viewBox="0 0 120 124" role="img"
     aria-label="Lúlli the puffin" style="--puffin-size:${size}px">
  <defs>
    <linearGradient id="pf-back" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3b4654"/>
      <stop offset="1" stop-color="#161d27"/>
    </linearGradient>
    <linearGradient id="pf-beak-out" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffb02e"/>
      <stop offset="0.45" stop-color="#ff8a2b"/>
      <stop offset="1" stop-color="#f4542b"/>
    </linearGradient>
    <linearGradient id="pf-belly" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#dfe8f2"/>
    </linearGradient>
  </defs>

  <g class="p-body">
    <!-- feet -->
    <g class="p-feet" fill="#ff8a2b">
      <path d="M40 106c-6 3-9 6-8 8 1 2 6 2 12 1 4-1 7-3 7-5z"/>
      <path d="M76 106c6 3 9 6 8 8-1 2-6 2-12 1-4-1-7-3-7-5z"/>
    </g>

    <!-- back / head silhouette -->
    <path class="p-back" fill="url(#pf-back)"
      d="M60 8c25 0 40 18 40 42v22c0 22-16 38-40 38S20 94 20 72V50C20 26 35 8 60 8Z"/>

    <!-- wings -->
    <path class="p-wing-l" fill="#222b36"
      d="M24 52c-6 4-8 14-6 26 2 11 7 18 12 17 4-1 5-8 4-18-1-11-3-21-4-25-1-3-4-2-6 0Z"/>
    <path class="p-wing-r" fill="#222b36"
      d="M96 52c6 4 8 14 6 26-2 11-7 18-12 17-4-1-5-8-4-18 1-11 3-21 4-25 1-3 4-2 6 0Z"/>

    <!-- belly -->
    <path class="p-belly" fill="url(#pf-belly)"
      d="M60 44c19 0 30 12 30 30 0 21-13 34-30 34S30 95 30 74c0-18 11-30 30-30Z"/>

    <!-- face patch -->
    <ellipse class="p-face" cx="60" cy="46" rx="27" ry="24" fill="#f4f8fc"/>

    <!-- eyes -->
    <g class="p-eyes">
      <ellipse class="p-eye-l" cx="49" cy="${44 + brow * 0.2}" rx="4.6" ry="${eyeShut ? 0.9 : 5.2}" fill="#141b24"/>
      <ellipse class="p-eye-r" cx="71" cy="${44 + brow * 0.2}" rx="4.6" ry="${eyeShut ? 0.9 : 5.2}" fill="#141b24"/>
      ${
        eyeShut
          ? ""
          : `<circle cx="50.6" cy="${42 + brow * 0.2}" r="1.5" fill="#fff" opacity=".9"/>
             <circle cx="72.6" cy="${42 + brow * 0.2}" r="1.5" fill="#fff" opacity=".9"/>`
      }
      <!-- the red eye ornaments a puffin wears in summer -->
      <path d="M44 ${36 + brow}h10l-5 3z" fill="#e8503a"/>
      <path d="M66 ${36 + brow}h10l-5 3z" fill="#e8503a"/>
    </g>

    <!-- beak -->
    <g class="p-beak">
      <path fill="url(#pf-beak-out)"
        d="M60 54c11 0 19 5 19 11s-8 12-19 12-19-6-19-12 8-11 19-11Z"/>
      <path fill="#9fb4c8" opacity=".85"
        d="M60 54c-6.5 0-12 1.7-15.5 4.4C46 62 52.4 64 60 64s14-2 15.5-5.6C72 55.7 66.5 54 60 54Z"/>
      <path d="M41 63h38" stroke="#c9421f" stroke-width="1.6" opacity=".55" fill="none"/>
      <path d="M52 68c5 2 11 2 16 0" stroke="#c9421f" stroke-width="1.4" fill="none" opacity=".45"/>
    </g>
  </g>
</svg>`.trim();
}

/** Swap a rendered puffin's mood, restarting its animation. */
export function setMood(root, mood) {
  const svg = root?.querySelector?.(".puffin") || (root?.classList?.contains("puffin") ? root : null);
  if (!svg) return;
  svg.setAttribute("data-mood", "idle");
  // Force a reflow so the animation restarts even for the same mood.
  void svg.getBoundingClientRect();
  svg.setAttribute("data-mood", mood);
}

/* ------------------------------------------------- things Lúlli says */

const LINES = {
  welcome: [
    "Góðan daginn! Ready for today?",
    "Sæl og blessuð! Let us do a little Icelandic.",
    "The wind is up. Perfect weather for grammar."
  ],
  correct: ["Rétt!", "Einmitt!", "Frábært!", "Nákvæmlega!", "Flott hjá þér!", "Já, akkúrat."],
  wrong: ["Ekki alveg.", "Næstum því!", "Nei, reyndu aftur.", "Close. Look again."],
  streak: [
    "Two days in a row is a habit forming.",
    "Þú ert á góðri leið — you are on a good path.",
    "The streak lives another day."
  ],
  done: [
    "Vel gert! That is today handled.",
    "Búið! Go and be smug about it.",
    "Þetta var gott. Same time tomorrow?"
  ],
  idle: [
    "Prepositions are just birds with cases.",
    "Icelandic has four cases. I have two feet. We both manage.",
    "If in doubt, it is probably dative."
  ]
};

export function lulliSays(kind = "idle") {
  const pool = LINES[kind] || LINES.idle;
  return pool[Math.floor(Math.random() * pool.length)];
}

/** A puffin plus a speech bubble, ready to drop into any view. */
export function puffinSpeech(text, { mood = "idle", size = 72 } = {}) {
  return `<div class="row" style="align-items:flex-start;gap:.6rem">
    ${puffinSVG({ mood, size })}
    <div class="speech">${text}</div>
  </div>`;
}
