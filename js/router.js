/* Hash routing — works on GitHub Pages with no server rewrites, and keeps the
   hardware back button meaningful inside the app. */

const routes = [];
let current = null;
let onChange = null;

/** register("learn/:slug", handler) */
export function register(pattern, handler) {
  const parts = pattern.split("/").filter(Boolean);
  routes.push({ pattern, parts, handler });
}

export function parseHash(hash = location.hash) {
  const raw = hash.replace(/^#\/?/, "").split("?")[0];
  const parts = raw.split("/").filter(Boolean).map(decodeURIComponent);
  return parts;
}

function match(parts) {
  for (const route of routes) {
    if (route.parts.length !== parts.length) continue;
    const params = {};
    let ok = true;
    for (let i = 0; i < route.parts.length; i++) {
      const seg = route.parts[i];
      if (seg.startsWith(":")) params[seg.slice(1)] = parts[i];
      else if (seg !== parts[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return { route, params };
  }
  return null;
}

/* Each history entry Lundi creates is stamped with its in-app depth, so "back"
   can tell a previous Lundi screen from whatever page was in the tab before it.
   history.length cannot: it counts the whole tab's history. */
let pendingDepth = 0;

const currentDepth = () => (history.state && typeof history.state.lundi === "number" ? history.state.lundi : 0);

export function go(path, { replace = false } = {}) {
  const target = "#/" + String(path).replace(/^#?\/?/, "");
  if (location.hash === target) {
    resolve();
    return;
  }
  if (replace) {
    history.replaceState({ lundi: currentDepth() }, "", target);
    resolve();
  } else {
    pendingDepth = currentDepth() + 1;
    location.hash = target;
  }
}

export function back(fallback = "learn") {
  if (currentDepth() > 0) history.back();
  else go(fallback, { replace: true });
}

export function currentRoute() {
  return current;
}

let resolving = false;

export async function resolve() {
  if (resolving) return;
  resolving = true;
  try {
    // Stamp this entry with its depth the first time we see it.
    if (!history.state || typeof history.state.lundi !== "number") {
      history.replaceState({ lundi: pendingDepth }, "");
    }
    pendingDepth = 0;

    const parts = parseHash();
    if (!parts.length) {
      history.replaceState({ lundi: currentDepth() }, "", "#/learn");
      parts.push("learn");
    }
    const found = match(parts);
    current = { parts, path: parts.join("/"), params: found?.params || {} };
    if (!found) {
      // An unknown or stale hash (a typo, a bookmark, an old link) must not
      // leave the address bar pointing at something that will not resolve.
      history.replaceState({ lundi: currentDepth() }, "", "#/learn");
      const fallback = match(["learn"]);
      current = { parts: ["learn"], path: "learn", params: {} };
      await fallback?.route.handler({});
    } else {
      await found.route.handler(found.params);
    }
    onChange?.(current);
  } catch (err) {
    console.error("Lundi: route failed", err);
  } finally {
    resolving = false;
  }
}

export function start(changeHandler) {
  onChange = changeHandler;
  addEventListener("hashchange", resolve);
  return resolve();
}
