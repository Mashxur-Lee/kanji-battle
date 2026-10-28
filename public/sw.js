// Kanji Wizards service worker (0.9.9.4) — makes the web app installable and lets it open without internet.
// scripts/build-client.mjs fills in the file list and a build id; a new build means a new cache, and the
// page reloads into it the next time you're on the menu. The API is never cached here (offline study is the
// app's own offline engine), except profile pictures.
const BUILD = '450ad8ce31eb';
const SHELL = ["/","/index.html","/app.js","/arena3d.js","/style.css","/favicon.svg","/vocab.json","/examples.json","/kanji.json","/meanings-ru.json","/manifest.webmanifest","/icons/icon-192.png","/icons/icon-512.png","/icons/maskable-512.png","/icons/apple-touch-icon.png"];
const CACHE = `kw-shell-${BUILD}`;
const RUNTIME = 'kw-runtime';

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // one by one, fresh from the network: a missing file doesn't stop the rest
    await Promise.all(SHELL.map((u) => fetch(u, { cache: 'reload' }).then((r) => (r.ok ? c.put(u, r) : null)).catch(() => null)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('kw-shell-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith('/api/avatar/')) { e.respondWith(cacheFirst(req, RUNTIME)); return; }
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/download/')) return; // live data / app downloads: never the cached page
  if (req.mode === 'navigate') { e.respondWith(shell('/index.html', req)); return; }
  e.respondWith(shell(url.pathname, req));
});

/** From this build's cache; anything not in it from the network (kept for next time). */
async function shell(path, req) {
  const hit = await caches.match(path, { cacheName: CACHE });
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res.ok && req.mode !== 'navigate') (await caches.open(RUNTIME)).put(req, res.clone());
    return res;
  } catch (err) {
    const old = await caches.match(req);
    if (old) return old;
    throw err;
  }
}
async function cacheFirst(req, name) {
  const c = await caches.open(name);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) c.put(req, res.clone());
  return res;
}
