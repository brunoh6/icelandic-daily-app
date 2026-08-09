#!/usr/bin/env node
/**
 * Content-quality scan — the checks the structural validator cannot make.
 * Looks for repeated exercises, answers that leak into their own prompt,
 * near-identical options, and prompts too long to read on a phone.
 *
 *   node tools/scan.js
 */
import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = process.cwd();
const UNITS = path.join(ROOT, "data/units");

const norm = (s) =>
  String(s ?? "")
    .toLowerCase()
    .replace(/[.,!?;:"“”„]/g, "")
    .replace(/\s+/g, " ")
    .trim();

// Prompts that are meant to repeat — a generic instruction is not a duplicate.
const GENERIC = /^(match|complete|choose|put|type|write|listen|say|which)\b/i;

async function main() {
  if (!existsSync(UNITS)) {
    console.error("data/units not found — run from the repo root.");
    process.exit(2);
  }
  const files = (await readdir(UNITS)).filter((f) => /^u\d\d\.js$/.test(f)).sort();

  let total = 0;
  const byKey = new Map();
  const leaks = [];
  const optDupes = [];
  const longPrompts = [];
  const typeCounts = {};

  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(UNITS, file)).href);
    const unit = mod.unit || mod.default;
    for (const lesson of unit.lessons || []) {
      for (const item of lesson.items || []) {
        total++;
        typeCounts[item.t] = (typeCounts[item.t] || 0) + 1;

        const promptText = item.q || item.sentence || item.speak || item.word || item.is || "";
        const key = `${norm(promptText)}|${norm(item.a)}`;
        // A shared generic instruction with no answer is not a repeat.
        if (norm(item.a) || !GENERIC.test(promptText)) {
          byKey.set(key, [...(byKey.get(key) || []), lesson.id]);
        }

        const haystack = norm(`${item.q || ""} ${item.sentence || ""}`);
        if (
          typeof item.a === "string" &&
          item.a.length > 3 &&
          item.t !== "table" &&
          item.t !== "speak" &&
          haystack.includes(norm(item.a))
        ) {
          leaks.push(`${lesson.id} [${item.t}] answer "${item.a}" appears in its own prompt`);
        }

        if (Array.isArray(item.opts)) {
          const seen = item.opts.map(norm);
          if (new Set(seen).size !== seen.length) {
            optDupes.push(`${lesson.id} [${item.t}] ${JSON.stringify(item.opts)}`);
          }
        }

        if (String(item.q || "").length > 140) {
          longPrompts.push(`${lesson.id} prompt is ${String(item.q).length} characters`);
        }
      }
    }
  }

  const repeats = [...byKey.entries()].filter(([, ids]) => new Set(ids).size > 1);
  // A lesson repeating in its own unit's checkpoint is deliberate revision.
  const crossUnit = repeats.filter(([, ids]) => new Set(ids.map((i) => i.slice(0, 3))).size > 1);

  console.log(`items scanned      ${total}`);
  console.log(`types              ${JSON.stringify(typeCounts)}`);
  console.log(`repeats (any)      ${repeats.length}`);
  console.log(`repeats (cross-unit) ${crossUnit.length}`);
  crossUnit.slice(0, 20).forEach(([k, ids]) => console.log(`   ${ids.join(", ")} :: ${k.slice(0, 72)}`));
  console.log(`answer leaks       ${leaks.length}`);
  leaks.slice(0, 20).forEach((l) => console.log(`   ${l}`));
  console.log(`duplicate options  ${optDupes.length}`);
  optDupes.slice(0, 20).forEach((l) => console.log(`   ${l}`));
  console.log(`overlong prompts   ${longPrompts.length}`);
  longPrompts.slice(0, 10).forEach((l) => console.log(`   ${l}`));

  const problems = leaks.length + optDupes.length + longPrompts.length;
  console.log(problems ? `\n${problems} thing(s) worth a look.` : "\nNothing to flag.");
}

main().catch((e) => {
  console.error("scan failed:", e);
  process.exit(2);
});
