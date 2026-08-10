/* The one place a spoken string is turned into a filename.
 *
 * Imported by BOTH the app (js/audio.js) and the build tool
 * (tools/audio-inventory.js) so the two can never drift apart. The Python
 * synthesiser never hashes anything — it is handed the names.
 *
 * Why hash rather than slugify: transliterating þ→th, ð→d and stripping
 * accents collides on 176 names across this corpus — "halló", "Halló",
 * "Halló?" and "Halló!" all become "hallo" — and it turns a 104-character
 * sentence into a 104-character filename. FNV-1a 64-bit has a collision
 * probability under 1e-12 at this scale, and the build aborts if one ever
 * does occur.
 */

const FNV_OFFSET = 0xcbf29ce484222325n;
const FNV_PRIME = 0x100000001b3n;
const MASK = 0xffffffffffffffffn;

const encoder = new TextEncoder();

/** Stable 16-hex-character name for a spoken string. */
export function audioHash(text) {
  // NFC first: "ó" can be one code point or two, and they must hash alike.
  const bytes = encoder.encode(String(text).normalize("NFC"));
  let h = FNV_OFFSET;
  for (let i = 0; i < bytes.length; i++) {
    h ^= BigInt(bytes[i]);
    h = (h * FNV_PRIME) & MASK;
  }
  return h.toString(16).padStart(16, "0");
}

/** Where that clip lives, sharded 256 ways so no directory holds thousands. */
export function audioPath(text) {
  const h = audioHash(text);
  return `audio/is/${h.slice(0, 2)}/${h}.aac`;
}

export function pathForHash(h) {
  return `audio/is/${h.slice(0, 2)}/${h}.aac`;
}
