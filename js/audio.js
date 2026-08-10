/* Sound.
 *
 * Icelandic speech comes from a pre-recorded pack: every string the course can
 * say was synthesised ahead of time with Piper using a Talrómur voice, and
 * ships as ADTS AAC under audio/is/. iOS has no Icelandic system voice at all,
 * so the browser's own speechSynthesis is only a fallback for anything the
 * pack does not cover.
 *
 * Feedback tones and the haptics stay generated at runtime — no asset needed.
 */

import { state } from "./store.js";
import { audioHash, pathForHash } from "./audio-hash.js";

/* ------------------------------------------------------- recorded clips */

let clipSet = null; // Set of 16-char hashes, or null until loaded
let packInfo = { voice: null, clipCount: 0, packBytes: 0 };

/** Load the list of clips that actually exist, so we never request a 404. */
export async function loadAudioPack() {
  if (clipSet) return packInfo;
  try {
    const mod = await import("../data/audio-manifest.js");
    const blob = mod.hashes || "";
    const set = new Set();
    for (let i = 0; i + 16 <= blob.length; i += 16) set.add(blob.slice(i, i + 16));
    clipSet = set;
    packInfo = { voice: mod.voice, clipCount: mod.clipCount ?? set.size, packBytes: mod.packBytes ?? 0 };
  } catch {
    clipSet = new Set();
  }
  return packInfo;
}

export const audioPack = () => packInfo;
export const packIsReady = () => Boolean(clipSet && clipSet.size);

/** The URL for a string, or null when the pack has no clip for it. */
export function clipUrl(text) {
  if (!clipSet || !text) return null;
  const h = audioHash(text);
  return clipSet.has(h) ? pathForHash(h) : null;
}

export function hasClip(text) {
  return Boolean(clipUrl(text));
}

/* One element, reused. iOS unlocks audio per element on a user gesture, so a
   fresh Audio() per utterance would need a fresh gesture every time. */
let player = null;
function getPlayer() {
  if (!player) {
    player = new Audio();
    player.preload = "auto";
  }
  return player;
}

function playClip(url, { rate, onstart, onend } = {}) {
  return new Promise((resolve) => {
    const el = getPlayer();
    let settled = false;
    const finish = (ok) => {
      if (settled) return;
      settled = true;
      el.onended = el.onerror = el.onplaying = null;
      onend?.();
      resolve(ok);
    };
    try {
      el.pause();
      el.src = url;
      // Safari keeps the pitch steady across playbackRate by default, which is
      // what the "Slower" button wants.
      el.playbackRate = Math.min(2, Math.max(0.5, rate ?? state.profile.rate ?? 1));
      el.onplaying = () => onstart?.();
      el.onended = () => finish(true);
      el.onerror = () => finish(false);
      const p = el.play();
      if (p?.catch) p.catch(() => finish(false));
    } catch {
      finish(false);
    }
  });
}

/** Warm the HTTP/service-worker cache for clips a session is about to need. */
export function prefetchClips(texts, limit = 24) {
  if (!clipSet) return;
  const seen = new Set();
  let n = 0;
  for (const t of texts) {
    if (n >= limit) break;
    const url = clipUrl(t);
    if (!url || seen.has(url)) continue;
    seen.add(url);
    n++;
    fetch(url, { cache: "force-cache" }).catch(() => {});
  }
}

/* ------------------------------------------------------------------ TTS */

let voices = [];
let chosen = null;
let warned = false;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = speechSynthesis.getVoices() || [];
  chosen = null;
}

if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

export function icelandicVoices() {
  if (!voices.length) loadVoices();
  return voices.filter((v) => /^is(-|_|$)/i.test(v.lang || ""));
}

export function allVoices() {
  if (!voices.length) loadVoices();
  return voices;
}

export function hasIcelandicVoice() {
  return icelandicVoices().length > 0;
}

function bestVoice() {
  if (!voices.length) loadVoices();

  // Check the saved preference first, every time — memoising ahead of this
  // means picking a new voice in Settings would not take effect until reload.
  const preferred = state.profile.voiceURI;
  if (preferred) {
    const match = voices.find((v) => v.voiceURI === preferred);
    if (match) return (chosen = match);
  }

  if (chosen) return chosen;

  const isVoices = icelandicVoices();
  if (isVoices.length) {
    // Prefer a local/offline voice when one exists — it starts instantly.
    chosen = isVoices.find((v) => v.localService) || isVoices[0];
    return chosen;
  }

  if (!warned) {
    warned = true;
    console.info(
      "Lundi: no Icelandic (is-IS) voice found. On iOS add one in Settings › Accessibility › Spoken Content › Voices."
    );
  }
  return null;
}

let speaking = false;

/**
 * Say something in Icelandic. Recorded clip first, the browser's own voice
 * second, silence third. Resolves when it finishes.
 */
export function speak(text, opts = {}) {
  if (!text || !state.profile.sound) {
    opts.onend?.();
    return Promise.resolve(false);
  }
  stopSpeaking();
  const url = clipUrl(text);
  if (url) {
    return playClip(url, opts).then((ok) => (ok ? true : speakSynth(text, opts)));
  }
  return speakSynth(text, opts);
}

/** The browser's own speech engine — on iOS there is no Icelandic voice. */
function speakSynth(text, { rate, onstart, onend } = {}) {
  if (!("speechSynthesis" in window)) {
    onend?.();
    return Promise.resolve(false);
  }
  return new Promise((resolve) => {
    try {
      speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(String(text));
      const voice = bestVoice();
      if (voice) utter.voice = voice;
      utter.lang = voice?.lang || "is-IS";
      utter.rate = rate ?? state.profile.rate ?? 0.92;
      utter.pitch = 1;
      const finish = (ok) => {
        speaking = false;
        onend?.();
        resolve(ok);
      };
      utter.onstart = () => {
        speaking = true;
        onstart?.();
      };
      utter.onend = () => finish(true);
      utter.onerror = () => finish(false);
      speechSynthesis.speak(utter);
      // Safari occasionally drops the utterance without firing any event.
      setTimeout(() => {
        if (speaking && !speechSynthesis.speaking) finish(false);
      }, 400);
    } catch (err) {
      console.warn("Lundi: speech failed", err);
      onend?.();
      resolve(false);
    }
  });
}

export function stopSpeaking() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  speaking = false;
  if (player) {
    player.onended = player.onerror = player.onplaying = null;
    try {
      player.pause();
    } catch {
      /* ignore */
    }
  }
}

let primed = false;

/** iOS will not play audio until it has seen a gesture — call this from the
    first tap. Guarded, because doing it on every tap would queue silent
    utterances. Unlocks BOTH the clip player and the speech engine. */
export function primeSpeech() {
  if (primed) return;
  primed = true;
  // Unlock the shared <audio> element with a silent play/pause.
  try {
    const el = getPlayer();
    el.muted = true;
    const p = el.play();
    if (p?.then) p.then(() => { el.pause(); el.muted = false; }).catch(() => { el.muted = false; });
    else { el.pause(); el.muted = false; }
  } catch {
    /* ignore */
  }
  if (!("speechSynthesis" in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}

/* ------------------------------------------------------------------ SFX */

let ctx = null;

function audioContext() {
  if (ctx) return ctx;
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (!Ctor) return null;
  ctx = new Ctor();
  return ctx;
}

export function primeAudio() {
  const ac = audioContext();
  if (ac && ac.state === "suspended") ac.resume().catch(() => {});
}

function tone(freq, start, duration, { type = "sine", gain = 0.09, slideTo = null } = {}) {
  const ac = audioContext();
  if (!ac) return;
  const osc = ac.createOscillator();
  const amp = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ac.currentTime + start);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, ac.currentTime + start + duration);
  amp.gain.setValueAtTime(0.0001, ac.currentTime + start);
  amp.gain.exponentialRampToValueAtTime(gain, ac.currentTime + start + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + duration);
  osc.connect(amp).connect(ac.destination);
  osc.start(ac.currentTime + start);
  osc.stop(ac.currentTime + start + duration + 0.02);
}

const SOUNDS = {
  correct: () => {
    tone(660, 0, 0.14, { type: "triangle", gain: 0.08 });
    tone(990, 0.07, 0.2, { type: "triangle", gain: 0.07 });
  },
  wrong: () => {
    tone(196, 0, 0.22, { type: "sawtooth", gain: 0.05, slideTo: 130 });
  },
  complete: () => {
    [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.09, 0.3, { type: "triangle", gain: 0.075 }));
  },
  tap: () => tone(880, 0, 0.05, { type: "sine", gain: 0.035 }),
  streak: () => {
    [392, 523, 659, 880, 1174].forEach((f, i) => tone(f, i * 0.07, 0.26, { type: "sine", gain: 0.07 }));
  },
  levelup: () => {
    [523, 622, 784, 1046, 1318].forEach((f, i) => tone(f, i * 0.08, 0.34, { type: "triangle", gain: 0.08 }));
  }
};

export function sfx(name) {
  if (!state.profile.sound) return;
  try {
    SOUNDS[name]?.();
  } catch {
    /* audio is a nice-to-have, never fatal */
  }
}

/* -------------------------------------------------------------- haptics */

const HAPTICS = {
  tap: 8,
  correct: [0, 18],
  wrong: [0, 32, 45, 32],
  complete: [0, 20, 60, 20, 60, 40]
};

export function haptic(name) {
  if (!state.profile.haptics) return;
  if (!("vibrate" in navigator)) return;
  try {
    navigator.vibrate(HAPTICS[name] ?? 10);
  } catch {
    /* ignore */
  }
}

/** One call for the common "react to an answer" case. */
export function feedback(kind) {
  sfx(kind);
  haptic(kind);
}
