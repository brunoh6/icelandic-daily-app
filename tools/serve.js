#!/usr/bin/env node
/* Minimal static file server for local development.
   node tools/serve.js [port]   */
import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const ROOT = resolve(process.cwd());
const PORT = Number(process.argv[2] || process.env.PORT || 5173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

createServer((req, res) => {
  let pathname = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  const filePath = join(ROOT, normalize(pathname).replace(/^(\.\.[/\\])+/, ""));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  let stat;
  try {
    stat = statSync(filePath);
    if (stat.isDirectory()) throw new Error("dir");
  } catch {
    res.writeHead(404, { "content-type": "text/plain" }).end("Not found: " + pathname);
    return;
  }

  res.writeHead(200, {
    "content-type": TYPES[extname(filePath)] || "application/octet-stream",
    "content-length": stat.size,
    "cache-control": "no-cache",
    "service-worker-allowed": "/"
  });
  createReadStream(filePath).pipe(res);
}).listen(PORT, "127.0.0.1", () => {
  console.log(`Lundi dev server: http://127.0.0.1:${PORT}/`);
});
