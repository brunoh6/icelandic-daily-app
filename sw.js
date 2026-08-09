/* Lundi service worker.
   Shell + core data are precached on install. Unit bodies, which load lazily,
   are cached the first time they are fetched, so anything you have studied
   stays available with no signal. */

const VERSION = "lundi-v3";
const SHELL = `${VERSION}-shell`;
const RUNTIME = `${VERSION}-runtime`;

const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./styles/tokens.css",
  "./styles/base.css",
  "./styles/components.css",
  "./styles/views.css",
  "./styles/session.css",
  "./js/main.js",
  "./js/dom.js",
  "./js/store.js",
  "./js/srs.js",
  "./js/audio.js",
  "./js/puffin.js",
  "./js/data.js",
  "./js/router.js",
  "./js/engine/items.js",
  "./js/engine/teach.js",
  "./js/engine/session.js",
  "./js/views/learn.js",
  "./js/views/drill.js",
  "./js/views/words.js",
  "./js/views/grammar.js",
  "./js/views/read.js",
  "./js/views/me.js",
  "./data/manifest.js",
  "./data/vocab.js",
  "./data/grammar.js",
  "./data/drills.js",
  "./data/prepositions.js",
  "./data/verbcases.js",
  "./data/phrases.js",
  "./data/readings.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL).then(async (cache) => {
      // addAll rejects the whole batch if one entry 404s, so add them one by one.
      await Promise.all(
        PRECACHE.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch(() => {
            /* a file that does not exist yet must not block installation */
          })
        )
      );
      await self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== SHELL && k !== RUNTIME).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

/** Race the network against a timeout, falling back to whatever we cached. */
async function networkFirst(request, cacheName, timeoutMs = 3000) {
  const cache = await caches.open(cacheName);
  try {
    const response = await Promise.race([
      fetch(request),
      new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), timeoutMs))
    ]);
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    const anywhere = await caches.match(request);
    if (anywhere) return anywhere;
    if (request.mode === "navigate") {
      const shell = await caches.match("./index.html");
      if (shell) return shell;
    }
    return Response.error();
  }
}

/** Serve instantly from cache, then quietly refresh it for next time. */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  // Content files are precached into SHELL at install but refreshed into
  // RUNTIME, so both caches have to be consulted or the first offline launch
  // finds nothing.
  const cached = (await cache.match(request)) || (await caches.match(request));
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);
  return cached || (await network) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  // App code must never go stale against a freshly deployed index.html,
  // so the shell is network-first with a short leash.
  const isShell =
    request.mode === "navigate" ||
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".css") ||
    (url.pathname.includes("/js/") && url.pathname.endsWith(".js")) ||
    url.pathname.endsWith("/sw.js") ||
    url.pathname.endsWith(".webmanifest") ||
    // The manifest lists every unit, so a stale copy hides newly added content
    // for a whole session. It is tiny; fetch it fresh when there is a network.
    url.pathname.endsWith("/data/manifest.js");

  if (isShell) {
    event.respondWith(networkFirst(request, SHELL));
    return;
  }

  // Content and images are big and change rarely: serve them instantly.
  event.respondWith(staleWhileRevalidate(request, RUNTIME));
});

self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") self.skipWaiting();
});
