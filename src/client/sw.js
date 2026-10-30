// Kanji Wizards service worker (0.9.9.4) — makes the web app installable and lets it open without internet.
// scripts/build-client.mjs fills in the file list and a build id; a new build means a new cache, and the
// page reloads into it the next time you're on the menu. The API is never cached here (offline study is the
// app's own offline engine), except profile pictures.
const BUILD = '__BUILD__';
const SHELL = __SHELL__;
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
