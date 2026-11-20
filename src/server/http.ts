import { AsyncLocalStorage } from 'node:async_hooks';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { reportServerError } from './errors';
import { clientIp } from './security';
import { AuthError, type AuthService } from './auth/AuthService';
import type { StudyService } from './study/StudyService';
import { createApiRouter, MAX_BODY, type ApiExtras, type ApiResponse } from './router';
import { setNowProvider } from './now';
import { DAILY_PLAY, handles } from '../shared/offline';

export type { ApiExtras } from './router';

function readJson(req: IncomingMessage, maxBody = MAX_BODY): Promise<Record<string, any>> {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks: Buffer[] = [];
    req.on('data', (c: Buffer) => {
      size += c.length;
      if (size > maxBody) { reject(new AuthError('Request too large', 413)); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => {
      try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); } catch { reject(new AuthError('Bad JSON')); }
    });
    req.on('error', reject);
  });
}

// 0.9.9.4: study the app did offline is replayed later with `X-KW-At: <epoch ms>` — the moment it really
// happened. Within the last week only (and never in the future), so the clock can't be wound far.
export const REPLAY_WINDOW_MS = 7 * 86_400_000;
const requestTime = new AsyncLocalStorage<number>();
setNowProvider(() => requestTime.getStore() ?? Date.now());
export function replayTime(header: unknown, real = Date.now()): number | null {
  const at = Number(Array.isArray(header) ? header[0] : header);
  if (!Number.isFinite(at) || at <= 0) return null;
  return Math.min(real, Math.max(real - REPLAY_WINDOW_MS, Math.round(at)));
}

// 0.9.9.4.2: a change sent with `X-KW-Op: <id>` is done once — the same id again (the app timed out, did it
// offline and replays it) gets the first answer back. Kept for an hour.
const OP_TTL = 60 * 60_000;
/**
 * 0.9.9.9.7.2: how much is kept — all the answers together, and one sign-in's (`op` is "<token tail>:<id>"). It was
 * 50,000 whole answers for an hour, whatever their size, and nothing stopped one player sending a new id with every
 * call: a script could fill the server's memory. The oldest go first; one answer bigger than a sign-in's share isn't kept.
 */
export const OP_MAX_BYTES = 16 * 1024 * 1024, OP_MAX_BYTES_EACH = 1024 * 1024, OP_MAX_COUNT = 50_000;
const done = new Map<string, { at: number; out: ApiResponse; bytes: number; who: string }>();
const byWho = new Map<string, { bytes: number; count: number; keys: string[] }>();
let doneBytes = 0;
const forgetOp = (k: string) => {
  const v = done.get(k);
  if (!v) return;
  done.delete(k);
  doneBytes -= v.bytes;
  const w = byWho.get(v.who);
  if (w) { w.bytes -= v.bytes; w.count--; if (w.count <= 0) byWho.delete(v.who); }
};
export function rememberOp(op: string, out: ApiResponse, now = Date.now()) {
  const who = op.slice(0, Math.max(0, op.lastIndexOf(':')));
  const bytes = 96 + op.length + (out.raw ? out.raw.data.length : JSON.stringify(out.body ?? null).length);
  forgetOp(op);
  if (bytes > OP_MAX_BYTES_EACH) return;
  // the oldest go first: expired ones, then as many as it takes to stay within the limits
  for (const [k, v] of done) { if (now - v.at > OP_TTL || doneBytes + bytes > OP_MAX_BYTES || done.size >= OP_MAX_COUNT) forgetOp(k); else break; }
  const mine = byWho.get(who) ?? { bytes: 0, count: 0, keys: [] };
  while (mine.bytes + bytes > OP_MAX_BYTES_EACH && mine.keys.length) forgetOp(mine.keys.shift()!);
  // (keys forgotten some other way stay in the list until it is tidied — now and then, not on every call)
  if (mine.keys.length > 2 * mine.count + 64) mine.keys = mine.keys.filter((k) => done.has(k));
  done.set(op, { at: now, out, bytes, who });
  doneBytes += bytes;
  mine.bytes += bytes;
  mine.count++;
  mine.keys.push(op);
  byWho.set(who, mine);
}
/** for the tests: what is kept, in bytes */
export const opMemory = () => ({ bytes: doneBytes, count: done.size });
export function recalledOp(op: string, now = Date.now()) {
  const d = done.get(op);
  return d && now - d.at < OP_TTL ? d.out : null;
}
const opOf = (h: unknown) => { const v = String(Array.isArray(h) ? h[0] : h ?? ''); return /^[\w-]{8,64}$/.test(v) ? v : null; };

/** Handles /api/*; returns false for any other path so static files can be served. */
export function createApiHandler(auth: AuthService, study: StudyService, extras: ApiExtras = {}) {
  const route = createApiRouter(auth, study, { onError: reportServerError, ...extras });
  return async (req: IncomingMessage, res: ServerResponse): Promise<boolean> => {
    const [url, qs] = (req.url ?? '/').split('?');
    if (!url.startsWith('/api/')) return false;
    const ip = clientIp(req); // (0.9.9.9.5: the proxy's entry, not one the caller can make up)
    const call = () => route({
      method: req.method ?? 'GET', url, query: new URLSearchParams(qs ?? ''), ip,
      token: (req.headers.authorization ?? '').replace(/^Bearer\s+/i, ''),
      json: (max) => readJson(req, max),
    });
    // 0.9.9.9.7.1: the moment a call was made offline counts only for the calls the app really does offline (study,
    // decks, Customize…). Any call could set the server's clock up to a week back before — the Daily challenge's
    // timer too: 10 / 10 "in 2 seconds" with all the time in the world. A Daily move sent as a replay (an older app
    // that played it offline) is refused: its timing can't be trusted, and the app drops it from its outbox.
    const stamped = req.headers['x-kw-at'] !== undefined;
    if (stamped && req.method === 'POST' && DAILY_PLAY.test(url)) {
      res.writeHead(409, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' })
        .end(JSON.stringify({ error: 'The Daily challenge is played online - a run played offline can\'t be counted' }));
      return true;
    }
    const at = stamped && handles(req.method ?? 'GET', url) ? replayTime(req.headers['x-kw-at']) : null;
    const op = req.method !== 'GET' ? opOf(req.headers['x-kw-op']) : null;
    const token = (req.headers.authorization ?? '').slice(-16);
    const seen = op ? recalledOp(`${token}:${op}`) : null;
    const out = seen ?? (at === null ? await call() : await requestTime.run(at, call))!;
    if (op && !seen && out.status < 500) rememberOp(`${token}:${op}`, out);
    // (0.9.9.9.5: never sniffed as something else; a served file — a profile picture — can't run anything)
    if (out.raw) res.writeHead(out.status, { 'Content-Type': out.raw.mime, 'Content-Length': out.raw.data.length, 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'none'; sandbox", 'Cross-Origin-Resource-Policy': 'same-origin', ...out.raw.headers }).end(out.raw.data);
    else res.writeHead(out.status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }).end(JSON.stringify(out.body));
    return true;
  };
}
