// Offline mode (0.9.9.4). While the server can't be reached, the API calls that make sense alone — Study
// spells, decks, the JLPT quiz, reading passages, the daily challenge, Customize, Progress, match history —
// are answered by the offline engine (the server's own code, in the browser) on a snapshot of your account.
// Every change is also written to an outbox; once the server answers again the outbox is replayed in order,
// each call stamped with the moment you made it (X-KW-At), and a fresh snapshot replaces the local one.
// Online games (queue, private rooms, friends, chat) need the server and say so.
import type { Snapshot } from '../../server/db/Store';
import { SNAPSHOT_V } from '../../server/db/Store';
import { createEngine, type Engine } from './engine';
import * as kv from './idb';

export interface OutboxEntry { method: string; url: string; body?: unknown; at: number }
type Listener = (offline: boolean) => void;

let offline = false;
let engine: Engine | null = null;
let engineFor = '';
let outbox: OutboxEntry[] = [];
let token: () => string = () => '';
let syncing: Promise<boolean> | null = null;
let probeTimer = 0;
let snapTimer = 0;
let saveTimer = 0;
const listeners: Listener[] = [];

const UID_KEY = 'kb:uid';
const snapKey = (uid: string) => `snap:${uid}`;
const boxKey = (uid: string) => `outbox:${uid}`;
const storedUid = () => { try { return localStorage.getItem(UID_KEY) ?? ''; } catch { return ''; } };

// ── which calls work offline ────────────────────────────────────────────────
const OFFLINE_ROUTES: Array<[string, RegExp]> = [
  ['GET', /^\/api\/(me|study|study\/queue|study\/deck|study\/search|study\/quiz|progress|daily|matches|matches\/[\w-]+)$/],
  ['PUT', /^\/api\/(me\/(flame|staff|background|border|badges|kana|tutorial)|study\/levels|study\/daily-new)$/],
  ['POST', /^\/api\/(study\/(review|deck\/remove|deck\/add|custom|task)|daily\/(start|answer|finish))$/],
];
const pathOf = (url: string) => url.split('?')[0];
export const handles = (method: string, url: string) => OFFLINE_ROUTES.some(([m, re]) => m === method && re.test(pathOf(url)));
/** Calls that change something (replayed later). GET /api/me records the day's login, GET /api/study adds the day's new cards. */
const changes = (method: string, url: string) => method !== 'GET' || /^\/api\/(me|study)$/.test(pathOf(url));

export const isOffline = () => offline;
export function onChange(fn: Listener) { listeners.push(fn); }
function setOffline(v: boolean) {
  if (offline === v) return;
  offline = v;
  for (const fn of listeners) fn(v);
  clearInterval(probeTimer);
  if (v) probeTimer = window.setInterval(() => void tryReconnect(), 20_000);
}

export function init(getToken: () => string) {
  token = getToken;
  addEventListener('online', () => void tryReconnect());
  addEventListener('offline', () => void goOffline());
}

/** Something failed to connect (the game socket): is the server gone? Then go offline right away. */
export async function probe() {
  if (offline || !storedUid()) return;
  if (!navigator.onLine || !(await reachable())) await goOffline();
}

/** Signed in (online): remember who, and keep a fresh snapshot for when the connection goes. */
export async function signedIn(uid: string) {
  try { localStorage.setItem(UID_KEY, uid); } catch { /* private mode */ }
  outbox = (await kv.get<OutboxEntry[]>(boxKey(uid))) ?? [];
  if (outbox.length) void tryReconnect(); // study left over from last time offline
  else scheduleSnapshot(1500);
}
/** Signed out: forget the local copy of the account. */
export async function signedOut() {
  const uid = storedUid();
  engine = null; engineFor = ''; outbox = [];
  try { localStorage.removeItem(UID_KEY); } catch { /* private mode */ }
  if (uid) { await kv.del(snapKey(uid)); await kv.del(boxKey(uid)); }
  setOffline(false);
}

// ── the engine ──────────────────────────────────────────────────────────────
async function ensureEngine(): Promise<Engine | null> {
  const uid = storedUid();
  if (!uid) return null;
  if (engine && engineFor === uid) return engine;
  const snap = await kv.get<Snapshot>(snapKey(uid));
  if (!snap || snap.v !== SNAPSHOT_V || snap.user.id !== uid) return null;
  try {
    engine = await createEngine(snap, () => {
      clearTimeout(saveTimer);
      saveTimer = window.setTimeout(() => { if (engine) void kv.set(snapKey(uid), engine.dump()); }, 250);
    });
    engineFor = uid;
    outbox = (await kv.get<OutboxEntry[]>(boxKey(uid))) ?? outbox;
    return engine;
  } catch (e) {
    console.warn('offline engine unavailable', e);
    return null;
  }
}

/** The connection is gone: switch to the engine if there is a snapshot (false: nothing to work with). */
export async function goOffline(): Promise<boolean> {
  if (offline) return !!engine;
  const e = await ensureEngine();
  if (!e) return false;
  setOffline(true);
  return true;
}

/** Answer a call locally (and queue it for the server if it changes something). */
export async function call(method: string, url: string, body?: unknown): Promise<{ status: number; body: any }> {
  const e = await ensureEngine();
  if (!e) return { status: 503, body: { error: 'You\'re offline.' } };
  const out = await e.request(method, url, body);
  if (out.status < 400 && changes(method, url)) {
    // the same GET twice (e.g. opening Study again) only needs replaying once
    if (!(method === 'GET' && outbox.some((x) => x.method === 'GET' && x.url === url))) {
      outbox.push({ method, url, body, at: Date.now() });
      await kv.set(boxKey(e.userId), outbox);
    }
  }
  return { status: out.status, body: out.body ?? {} };
}

// ── back online ─────────────────────────────────────────────────────────────
const timeout = (ms: number) => { const c = new AbortController(); setTimeout(() => c.abort(), ms); return c.signal; };
const authHeaders = (): Record<string, string> => ({ 'Content-Type': 'application/json', ...(token() ? { Authorization: `Bearer ${token()}` } : {}) });

/** Is the server there? (cheap, no account needed) */
async function reachable() {
  try { return (await fetch('/api/online', { cache: 'no-store', signal: timeout(6000) })).ok; } catch { return false; }
}

export function tryReconnect(): Promise<boolean> {
  syncing ??= (async () => {
    try {
      if (!(await reachable())) return false;
      const uid = storedUid();
      if (!uid || !token()) { setOffline(false); return true; }
      // replay what was done offline, oldest first
      while (outbox.length) {
        const x = outbox[0];
        let res: Response;
        try {
          res = await fetch(x.url, { method: x.method, headers: { ...authHeaders(), 'X-KW-At': String(x.at) }, body: x.body === undefined ? undefined : JSON.stringify(x.body), signal: timeout(20_000) });
        } catch { return false; } // gone again: try later
        if (res.status === 401 || res.status === 403) return false; // signed out: keep it for after signing in
        if (res.status === 429 || res.status === 502 || res.status === 503 || res.status === 504) return false;
        outbox.shift(); // done (or refused for good: a 4xx won't get better by retrying)
        await kv.set(boxKey(uid), outbox);
      }
      await refreshSnapshot();
      setOffline(false);
      return true;
    } finally { syncing = null; }
  })();
  return syncing;
}

// ── snapshots ───────────────────────────────────────────────────────────────
export async function refreshSnapshot() {
  const uid = storedUid();
  if (!uid || !token() || outbox.length) return;
  try {
    const res = await fetch('/api/sync/snapshot', { headers: authHeaders(), cache: 'no-store', signal: timeout(30_000) });
    if (!res.ok) return;
    const snap = (await res.json()) as Snapshot;
    if (snap.user?.id !== uid) return;
    await kv.set(snapKey(uid), snap);
    engine = null; engineFor = ''; // rebuilt from the new snapshot when needed
  } catch { /* try again later */ }
}
/** Refresh the snapshot in a while. More changes meanwhile ride along — never postponed, only brought forward. */
let snapDue = 0;
function scheduleSnapshot(ms = 6000) {
  const due = Date.now() + ms;
  if (snapTimer && snapDue <= due) return;
  clearTimeout(snapTimer);
  snapDue = due;
  snapTimer = window.setTimeout(() => { snapTimer = 0; if (!offline) void refreshSnapshot(); }, ms);
}
/** After an online call that changed something: the local copy is behind, refresh it soon. */
export function changedOnline(method: string, url: string) { if (changes(method, url) && handles(method, url)) scheduleSnapshot(); }
/** How many changes are waiting to be sent. */
export const pending = () => outbox.length;
