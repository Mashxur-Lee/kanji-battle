import { AsyncLocalStorage } from 'node:async_hooks';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { reportServerError } from './errors';
import { AuthError, type AuthService } from './auth/AuthService';
import type { StudyService } from './study/StudyService';
import { createApiRouter, MAX_BODY, type ApiExtras, type ApiResponse } from './router';
import { setNowProvider } from './now';

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
const done = new Map<string, { at: number; out: ApiResponse }>();
export function rememberOp(op: string, out: ApiResponse, now = Date.now()) {
  done.set(op, { at: now, out });
  if (done.size > 50_000) for (const [k, v] of done) { if (now - v.at > OP_TTL || done.size > 40_000) done.delete(k); else break; }
}
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
    const ip = String(req.headers['x-forwarded-for'] ?? req.socket.remoteAddress ?? '').split(',')[0].trim();
    const call = () => route({
      method: req.method ?? 'GET', url, query: new URLSearchParams(qs ?? ''), ip,
      token: (req.headers.authorization ?? '').replace(/^Bearer\s+/i, ''),
      json: (max) => readJson(req, max),
    });
    const at = replayTime(req.headers['x-kw-at']);
    const op = req.method !== 'GET' ? opOf(req.headers['x-kw-op']) : null;
    const token = (req.headers.authorization ?? '').slice(-16);
    const seen = op ? recalledOp(`${token}:${op}`) : null;
    const out = seen ?? (at === null ? await call() : await requestTime.run(at, call))!;
    if (op && !seen && out.status < 500) rememberOp(`${token}:${op}`, out);
    if (out.raw) res.writeHead(out.status, { 'Content-Type': out.raw.mime, 'Content-Length': out.raw.data.length, ...out.raw.headers }).end(out.raw.data);
    else res.writeHead(out.status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }).end(JSON.stringify(out.body));
    return true;
  };
}
