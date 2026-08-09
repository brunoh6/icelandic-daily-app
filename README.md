# Lundi — Icelandic every day

A self-contained Icelandic course that lives on your phone. Built to be opened for ten minutes a
day for a year and to take you from **A0+ to a solid A2 / early B1**.

Named after *lundi*, the Atlantic puffin. Lúlli, the puffin in question, keeps score.

**Live:** https://brunoh6.github.io/icelandic-daily-app/

---

## What's in it

**Learn** — a winding path of units, each with lessons, a heavier grammar lesson, an original story,
and a checkpoint. Nine exercise types: choose, write, build-from-tiles, listen, match, fill the
right form, complete a paradigm table, assign gender, and say it out loud.

**Drill** — the grammar gym. Every set repeats **one instruction across five rounds of six items**:
round 1 masculine and cued, round 5 the same operation inside full sentences with no scaffolding.
That deliberate repetition is the whole point — it is how declension tables actually become automatic.

**Read** — short graded texts, plus **graded readers**: whole stories told over four or five chapters,
each with the Icelandic first, a translation you have to ask for, words to lean on, and a
comprehension check. This is the bridge from A2 to B1 — extended narrative rather than isolated
sentences.

**Words** — every word with its gender, its full declension or conjugation, and a sentence that shows
it doing its job. Spaced repetition (SM-2) schedules what comes back and when.

**Grammar** — the reference you reach for mid-sentence: the four cases, prepositions grouped by the
case they govern (with the motion-vs-location contrast made visible), verbs grouped by the case their
object takes, and written topics from the alphabet to the subjunctive.

**Me** — streak, XP, a twelve-week heatmap, daily goal, speech settings, offline download, backup.

### The case colour code

Four cases, four colours, used identically everywhere in the app — tables, badges, example sentences,
preposition cards. Once you have seen `ÞGF` in moss green fifty times, the dative starts to feel like
a place rather than a rule.

| | | | |
|---|---|---|---|
| **NF** nefnifall | nominative | subject | glacier blue |
| **ÞF** þolfall | accusative | direct object, motion, duration | puffin orange |
| **ÞGF** þágufall | dative | indirect object, location, instrument | moss green |
| **EF** eignarfall | genitive | possession, measure | lupine violet |

---

## Running it

No build step, no dependencies. It is plain ES modules served as static files.

```bash
node tools/serve.js 5173     # http://127.0.0.1:5173
```

After editing anything in `data/`:

```bash
node tools/build.js          # merges authoring files into the modules the app loads
node tools/validate.js       # structural + content checks; must print OK
```

`build.js` generates `data/vocab.js`, `data/manifest.js`, `data/grammar.js`, `data/drills.js` and
`data/readings.js`. Do not edit those by hand — edit the unit files and `data/src/*` instead.

---

## Layout

```
index.html            app shell
styles/               tokens · base · components · views · session
js/
  main.js             boot, routing, delegated actions, session launching
  views/novels.js     the graded readers
  store.js            progress, streak, XP, settings (localStorage)
  srs.js              spaced repetition
  data.js             content loading + indexes (units load lazily)
  audio.js            Icelandic TTS + synthesised feedback tones
  puffin.js           Lúlli
  engine/items.js     the nine exercise renderers
  engine/session.js   the lesson player
  views/              learn · drill · words · grammar · read · me
data/
  units/uNN.js        a unit: 6 lessons + the vocabulary it introduces
  src/                grammar-*, drills-*, readings-* (merged by build.js)
  prepositions.js  verbcases.js  phrases.js  novels.js
tools/                build.js · validate.js · scan.js · serve.js
sw.js                 offline: network-first shell, cache-first content
```

---

## Notes

**Speech.** Lundi speaks Icelandic through the browser's own speech synthesis. iOS ships Icelandic
voices but they are not installed by default — add one under *Settings › Accessibility › Spoken
Content › Voices › Icelandic* and the app will pick it up. Without one it falls back gracefully and
tells you so in Settings.

**Offline.** The shell and reference data are cached on first visit; unit content is cached as you
reach it. "Download all units" in **Me** pulls the whole course down for a flight or the ring road.

**Your data.** Everything is stored locally in your browser. Nothing is uploaded anywhere. Export a
JSON backup from **Me** before clearing site data.

**Sources.** The curriculum *sequencing* follows the classic beginner progression used by
*Colloquial Icelandic* (Neijmann, Routledge), and grammatical paradigms are facts about the language.
Every explanation, example sentence, dialogue, reading and exercise in this app was written for it.

**History.** The three graded readers predate the rebuild — they were written for the earlier
single-file version of this app and ported into the current data format by `tools/port-novels.js`.
Everything else in `data/` was authored for the rebuild.
