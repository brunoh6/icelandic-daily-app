#!/usr/bin/env node
/**
 * One-off port: lifts the graded novels out of the pre-rebuild app.js
 * (kept in git history) and writes them as data/novels.js in the current
 * schema. Run once; the generated file is then edited like any other data.
 *
 *   git show <old-commit>:app.js > /tmp/remote-app.js && node tools/port-novels.js
 */
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(process.argv[2] || "/tmp/remote-app.js", "utf8");
const start = src.indexOf("const novels = [");
if (start < 0) throw new Error("novels array not found in the source file");

let depth = 0;
let end = -1;
for (let i = src.indexOf("[", start); i < src.length; i++) {
  const c = src[i];
  if (c === "[") depth++;
  else if (c === "]") {
    depth--;
    if (!depth) {
      end = i + 1;
      break;
    }
  }
}
const novels = new Function("return " + src.slice(src.indexOf("[", start), end))();

const ported = novels.map((n) => ({
  id: n.id,
  title: n.title,
  en: n.subtitle,
  level: n.level,
  tagline: n.tagline,
  minutes: Math.max(3, Math.round(n.chapters.reduce((a, c) => a + c.text.length, 0) / 4)),
  chapters: n.chapters.map((c, i) => ({
    n: i + 1,
    // The source titles are numbered ("1. Flutningurinn"); the app numbers
    // them itself, so strip the prefix.
    title: String(c.title).replace(/^\s*\d+\.\s*/, ""),
    en: c.subtitle,
    text: c.text,
    translation: c.translation,
    hints: (c.hints || []).map((h) => {
      const m = String(h).match(/^([^:]+):\s*(.+)$/);
      return m ? [m[1].trim(), m[2].trim()] : [String(h), ""];
    }),
    qs: (c.checks || []).map((q) => ({ q: q.prompt, opts: q.options, a: q.answer }))
  }))
}));

const body =
  `// Graded readers — extended narrative practice, one chapter at a sitting.\n` +
  `// Ported from the pre-rebuild app by tools/port-novels.js.\n\n` +
  `export const novels = ${JSON.stringify(ported, null, 2)};\n\nexport default novels;\n`;

writeFileSync("data/novels.js", body, "utf8");
console.log(
  `data/novels.js — ${ported.length} novels, ${ported.reduce((a, n) => a + n.chapters.length, 0)} chapters`
);
