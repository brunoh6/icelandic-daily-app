/* What is actually available offline.
 *
 * The download buttons used to be dumb labels: they said "Download all 20
 * units" whether or not you had already done it, because nothing was ever
 * asked or remembered. A stored "downloaded" flag would be the obvious fix
 * and the wrong one — the browser can evict a cache at any time, so the flag
 * would go on claiming everything was saved long after it wasn't.
 *
 * So we ask the Cache API itself, which is the only source of truth.
 */

const AUDIO_RE = /\/audio\/is\/[0-9a-f]{2}\/[0-9a-f]{16}\.aac$/;
const UNIT_RE = /\/data\/units\/u\d\d\.js$/;

/** Every URL this origin has cached, across all of our caches. */
async function cachedUrls() {
  if (!("caches" in window)) return [];
  try {
    const names = await caches.keys();
    const lists = await Promise.all(
      names.map(async (n) => {
        const c = await caches.open(n);
        const reqs = await c.keys();
        return reqs.map((r) => r.url);
      })
    );
    return lists.flat();
  } catch {
    return [];
  }
}

/**
 * How much of each pack is on the device.
 * @returns {Promise<{units:number, clips:number}>}
 */
export async function offlineStatus() {
  const urls = await cachedUrls();
  const units = new Set();
  const clips = new Set();
  for (const u of urls) {
    if (UNIT_RE.test(u)) units.add(u);
    else if (AUDIO_RE.test(u)) clips.add(u);
  }
  return { units: units.size, clips: clips.size };
}
