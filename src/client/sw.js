// Kanji Wizards service worker (0.9.9.4) — makes the web app installable and lets it open without internet.
// scripts/build-client.mjs fills in the file list and a build id; a new build means a new cache, and the
// page reloads into it the next time you're on the menu. The API is never cached here (offline study is the
// app's own offline engine), except profile pictures.
const BUILD = '__BUILD__';
const SHELL = __SHELL__;
const CACHE = `kw-shell-${BUILD}`;
// 0.9.9.9.6.5: the word lists in a cache of their own, versioned by their content — a new build of the game no
// longer downloads them again (nor the dictionary, which isn't cached here at all)
const DATA = __DATA__;
const DATA_CACHE = `kw-data-__DATA_V__`;
const RUNTIME = 'kw-runtime';
const NEVER = new Set(['/dict.json']); // (kept on the device by the dictionary itself, when you choose to)

// 0.9.9.9.6.9: only the game's own files go in the cache. While Render wakes a sleeping server it answers every
// request with its own "waking up" page (HTML, 200) — kept as /index.html, that page came back on every start,
// instead of the game and its own waking-up screen.
const KIND = (u) => (u === '/' || u.endsWith('.html') ? 'html' : u.endsWith('.js') ? 'javascript' : u.endsWith('.css') ? 'css' : u.endsWith('.json') ? 'json' : '');
async function genuine(u, r) {
  if (!r || !r.ok) return false;
  const k = KIND(new URL(u, location.origin).pathname);
  if (k && !(r.headers.get('content-type') || '').includes(k)) return false;
  if (k === 'html') return (await r.clone().text()).includes('id="wakeScreen"');
  return true;
}
const CORE = ['/index.html', '/app.js', '/style.css'];
const LEGAL = new Set(['/privacy.html', '/terms.html']); // (0.9.9.9.9.5)

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // one by one, fresh from the network: a missing file doesn't stop the rest — but without the game's own page,
    // script and styles this version isn't installed at all (the one before stays; the browser tries again later)
    const bad = [];
    const get = (cache, u) => fetch(u, { cache: 'reload' }).then(async (r) => { if (await genuine(u, r)) return cache.put(u, r); bad.push(u); return null; }).catch(() => { bad.push(u); return null; });
    const d = await caches.open(DATA_CACHE);
    const missing = [];
    for (const u of DATA) if (!(await d.match(u))) missing.push(u);
    await Promise.all([...SHELL.map((u) => get(c, u)), ...missing.map((u) => get(d, u))]);
    if (CORE.some((u) => bad.includes(u))) { await caches.delete(CACHE); throw new Error('the server is waking up — not installing yet'); }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if ((k.startsWith('kw-shell-') && k !== CACHE) || (k.startsWith('kw-data-') && k !== DATA_CACHE)) await caches.delete(k);
    // (older builds kept the dictionary and the word lists in the runtime cache too)
    try { const rt = await caches.open(RUNTIME); for (const u of [...NEVER, ...DATA]) await rt.delete(u, { ignoreSearch: true }); } catch { /* fine */ }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith('/api/avatar/') || url.pathname.startsWith('/api/media/')) { e.respondWith(cacheFirst(req, RUNTIME)); return; }
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/download/')) return; // live data / app downloads: never the cached page
  if (NEVER.has(url.pathname)) return; // the network (and the browser's own cache) — not 8 MB in ours
  // 0.9.9.9.9.5: the Privacy policy and the Terms are pages of their own (not the game)
  if (req.mode === 'navigate') { e.respondWith(shell(LEGAL.has(url.pathname) ? url.pathname : '/index.html', req)); return; }
  e.respondWith(shell(url.pathname, req));
});

/** From this build's cache; anything not in it from the network (kept for next time). */
async function shell(path, req) {
  const hit = (await caches.match(path, { cacheName: CACHE })) ?? (await caches.match(path, { cacheName: DATA_CACHE }));
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (req.mode !== 'navigate' && (await genuine(req.url, res))) (await caches.open(RUNTIME)).put(req, res.clone());
    return res;
  } catch (err) {
    // (0.9.9.9.9.6: no internet — any copy kept of it: another cache, an older build's; for a page, the game's own
    // page from whichever build is still here. Without one an offline start showed the phone's "Webpage not available")
    const old = (await caches.match(req)) ?? (await caches.match(path));
    if (old) return old;
    if (req.mode === 'navigate') { for (const k of await caches.keys()) { if (!k.startsWith('kw-shell-')) continue; const p = await (await caches.open(k)).match('/index.html'); if (p) return p; } }
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

// ── reminders (0.9.9.6): a check now and then, where the browser allows it (an installed app in Chrome) ──
// The rules are the page's (reminders.ts → decide); the page saves the sign-in token and the language here.
function kv(mode) {
  return new Promise((ok, no) => {
    const r = indexedDB.open('kw-remind', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => ok(r.result.transaction('kv', mode).objectStore('kv'));
    r.onerror = () => no(r.error);
  });
}
const kvGet = async (k) => { const s = await kv('readonly'); return new Promise((ok) => { const q = s.get(k); q.onsuccess = () => ok(q.result); q.onerror = () => ok(undefined); }); };
const kvPut = async (k, v) => { const s = await kv('readwrite'); return new Promise((ok) => { const q = s.put(v, k); q.onsuccess = () => ok(); q.onerror = () => ok(); }); };
async function remind() {
  const token = await kvGet('token');
  if (!token) return;
  const ru = (await kvGet('lang')) === 'ru';
  const d = new Date(), hour = d.getHours();
  if (hour < 12 || hour >= 23) return;
  const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  let s;
  try {
    const r = await fetch(`/api/notify/status?today=${today}`, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });
    if (!r.ok) return;
    s = await r.json();
  } catch { return; }
  const out = [];
  if (!s.challengeDone) out.push(['challenge', ru ? '⚔ Ежедневный вызов ждёт' : '⚔ Today’s Daily challenge is waiting', ru ? 'Десять слов, одинаковых для всех, — насколько вы быстры?' : 'Ten words, the same for everyone — how fast are you?']);
  if (s.allDue >= 50) out.push(['reviews', ru ? `📚 ${s.allDue} заклинаний ждут повторения` : `📚 ${s.allDue} spells are waiting for review`, ru ? `В колоде «Все заклинания» ${s.allDue} карточек к повторению.` : `Your All spells deck has ${s.allDue} cards to review.`]);
  if (hour >= 18 && s.tasksLeft > 0) out.push(['tasks', ru ? '🔥 Сохраните серию' : '🔥 Keep your streak', ru ? `Осталось заданий на сегодня: ${s.tasksLeft} из ${s.tasksTotal}.` : `${s.tasksLeft} of ${s.tasksTotal} daily tasks left today.`]);
  const shown = (await kvGet('shown')) || {};
  for (const [kind, title, body] of out) {
    if (shown[kind] === today) continue;
    shown[kind] = today;
    await self.registration.showNotification(title, { body, icon: '/icons/icon-192.png', badge: '/icons/icon-192.png', tag: `kw-${kind}` });
  }
  await kvPut('shown', shown);
}
self.addEventListener('periodicsync', (e) => { if (e.tag === 'kw-remind') e.waitUntil(remind()); });
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const w = wins.find((c) => new URL(c.url).origin === location.origin);
    if (w) return w.focus();
    return self.clients.openWindow('/');
  })());
});
