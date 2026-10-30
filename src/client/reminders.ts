// Reminders (0.9.9.6): the bell in the top bar. When it's on, the game reminds you — at most once a day each —
// of today's Daily challenge (from midday), of 50+ spells waiting in All spells, and (from 18:00) of the daily
// streak tasks still left. Nothing when it's all done.
//  · Android app: the app itself checks twice a day (Reminders.java), even when it's closed.
//  · Browsers: the service worker checks now and then where the browser allows it (an installed app in Chrome);
//    and while the game is open in a background tab or window, the page checks every 15 minutes.
import { api, getToken } from './api';
import { lang, tr } from './i18n';
import * as ui from './ui';

const KEY = 'kw:remind';
type Bridge = { setReminders?: (on: boolean, token: string, lang: string) => void; notificationsAllowed?: () => boolean };
const android = (): Bridge | null => { const b = (window as unknown as { KWAndroid?: Bridge }).KWAndroid; return b?.setReminders ? b : null; };

export const remindersOn = () => { try { return localStorage.getItem(KEY) === 'on'; } catch { return false; } };
const save = (on: boolean) => { try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch { /* private mode */ } };

// ── a tiny key–value store the service worker can read too (it has no localStorage) ──
function idb(): Promise<IDBDatabase> {
  return new Promise((ok, no) => {
    const r = indexedDB.open('kw-remind', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => ok(r.result);
    r.onerror = () => no(r.error);
  });
}
async function put(k: string, v: unknown) {
  try { const db = await idb(); await new Promise<void>((ok) => { const t = db.transaction('kv', 'readwrite'); t.objectStore('kv').put(v, k); t.oncomplete = () => ok(); t.onerror = () => ok(); }); } catch { /* no IndexedDB */ }
}
async function get<T>(k: string): Promise<T | undefined> {
  try { const db = await idb(); return await new Promise((ok) => { const q = db.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => ok(q.result as T); q.onerror = () => ok(undefined); }); } catch { return undefined; }
}

/** what to remind of now (the service worker has its own copy of these rules) */
export function decide(s: { tasksLeft: number; tasksTotal: number; challengeDone: boolean; allDue: number }, hour: number, ru: boolean) {
  const out: Array<{ kind: string; title: string; body: string }> = [];
  if (hour < 12 || hour >= 23) return out; // not in the morning or at night
  if (!s.challengeDone) out.push({ kind: 'challenge', title: ru ? '⚔ Ежедневный вызов ждёт' : '⚔ Today’s Daily challenge is waiting', body: ru ? 'Десять слов, одинаковых для всех, — насколько вы быстры?' : 'Ten words, the same for everyone — how fast are you?' });
  if (s.allDue >= 50) out.push({ kind: 'reviews', title: ru ? `📚 ${s.allDue} заклинаний ждут повторения` : `📚 ${s.allDue} spells are waiting for review`, body: ru ? `В колоде «Все заклинания» ${s.allDue} карточек к повторению.` : `Your All spells deck has ${s.allDue} cards to review.` });
  if (hour >= 18 && s.tasksLeft > 0) out.push({ kind: 'tasks', title: ru ? '🔥 Сохраните серию' : '🔥 Keep your streak', body: ru ? `Осталось заданий на сегодня: ${s.tasksLeft} из ${s.tasksTotal}.` : `${s.tasksLeft} of ${s.tasksTotal} daily tasks left today.` });
  return out;
}
const dayOf = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

/** checks and shows what's due (once a day per kind, shared with the service worker) */
async function check() {
  if (!remindersOn() || android() || !('Notification' in window) || Notification.permission !== 'granted') return;
  let s: Awaited<ReturnType<typeof api.notifyStatus>>;
  try { s = await api.notifyStatus(); } catch { return; }
  const today = dayOf();
  const shown = (await get<Record<string, string>>('shown')) ?? {};
  for (const n of decide(s, new Date().getHours(), lang() === 'ru')) {
    if (shown[n.kind] === today) continue;
    shown[n.kind] = today;
    try {
      const reg = await navigator.serviceWorker?.getRegistration();
      if (reg) await reg.showNotification(n.title, { body: n.body, icon: '/icons/icon-192.png', tag: `kw-${n.kind}` });
      else new Notification(n.title, { body: n.body, icon: '/favicon.svg', tag: `kw-${n.kind}` });
    } catch { /* not allowed here */ }
  }
  await put('shown', shown);
}

/** the token and language the service worker uses for its own checks (or the Android app for its alarms) */
async function share(on: boolean) {
  const token = on ? getToken() : '';
  const b = android();
  if (b) { b.setReminders!(on, token, lang()); return; }
  await put('token', token);
  await put('lang', lang());
  try {
    const reg = await navigator.serviceWorker?.ready;
    const ps = (reg as unknown as { periodicSync?: { register(tag: string, o: { minInterval: number }): Promise<void>; unregister(tag: string): Promise<void> } } | undefined)?.periodicSync;
    if (ps) { if (on) await ps.register('kw-remind', { minInterval: 4 * 3600_000 }); else await ps.unregister('kw-remind'); }
  } catch { /* the browser doesn't allow background checks — the open page still does */ }
}

function draw() {
  const b = ui.$('notifyBtn');
  const on = remindersOn();
  b.textContent = on ? '🔔' : '🔕';
  b.classList.toggle('on', on);
  b.setAttribute('aria-pressed', String(on));
  b.title = tr(on ? 'Reminders on — tap to turn them off' : 'Reminders off — tap for daily reminders (Daily challenge, reviews, streak tasks)');
}

async function toggle() {
  if (remindersOn()) {
    save(false); draw(); await share(false);
    ui.toast(tr('Reminders off'));
    return;
  }
  const b = android();
  if (!b) {
    if (!('Notification' in window)) { ui.toast(tr('This browser can’t show notifications — try the app (menu → Get the app).'), 5000); return; }
    const p = Notification.permission === 'default' ? await Notification.requestPermission() : Notification.permission;
    if (p !== 'granted') { ui.toast(tr('Notifications are blocked — allow them for this site in the browser settings, then tap the bell again.'), 6000); return; }
  }
  save(true); draw(); await share(true);
  if (b && b.notificationsAllowed && !b.notificationsAllowed()) ui.toast(tr('Allow notifications for Kanji Wizards in Android settings to get the reminders.'), 6000);
  else ui.toast(tr('Reminders on: the Daily challenge, 50+ spells to review, and your streak tasks in the evening.'), 5000);
}

/** called once at start; `signedIn` refreshes the token the background checks use */
export function initReminders() {
  draw();
  ui.$('notifyBtn').onclick = () => void toggle();
  setInterval(() => { if (document.hidden) void check(); }, 15 * 60_000);
  document.addEventListener('visibilitychange', () => { if (document.hidden) setTimeout(() => { if (document.hidden) void check(); }, 60_000); });
}
export function remindersSignedIn() { if (remindersOn()) void share(true); }
export function remindersSignedOut(): Promise<void> { return remindersOn() ? share(false) : Promise.resolve(); }
