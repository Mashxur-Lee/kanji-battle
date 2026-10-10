import type { IncomingMessage, ServerResponse } from 'node:http';
import { AuthError, toPublic, type AuthService } from './auth/AuthService';
import { resolveToday, StudyError, type StudyService } from './study/StudyService';
import { DailyError, type DailyService } from './study/DailyService';
import { SocialError, type SocialService } from './study/SocialService';
import { playerDay } from './study/ProgressService';

const MAX_BODY = 4 * 1024;

/** Simple fixed-window rate limit per IP for login/register (brute-force protection). */
class RateLimiter {
  private hits = new Map<string, { n: number; reset: number }>();
  constructor(private readonly limit: number, private readonly windowMs: number) {}
  allow(key: string, now = Date.now()) {
    const h = this.hits.get(key);
    if (!h || h.reset < now) { this.hits.set(key, { n: 1, reset: now + this.windowMs }); return true; }
    h.n++;
    if (this.hits.size > 10_000) this.hits.clear(); // memory guard
    return h.n <= this.limit;
  }
}

function readJson(req: IncomingMessage, maxBody = MAX_BODY): Promise<Record<string, unknown>> {
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

const send = (res: ServerResponse, status: number, body: unknown) =>
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }).end(JSON.stringify(body));

const bearer = (req: IncomingMessage) => (req.headers.authorization ?? '').replace(/^Bearer\s+/i, '');

/** Handles /api/*; returns false for any other path so static files can be served. */
export interface ApiExtras {
  presence?: (userId: string) => { online: boolean; activity?: string; since?: number; lastSeen?: number };
  daily?: DailyService;
  social?: SocialService;
  /** reference strokes of a character in stroke order (stroke-order hints) */
  strokes?: (ch: string) => unknown;
}
export function createApiHandler(auth: AuthService, study: StudyService, extras: ApiExtras = {}) {
  const { presence, daily, social, strokes } = extras;
  const limiter = new RateLimiter(20, 60_000);

  return async (req: IncomingMessage, res: ServerResponse): Promise<boolean> => {
    const [url, qs] = (req.url ?? '/').split('?');
    const query = new URLSearchParams(qs ?? '');
    if (!url.startsWith('/api/')) return false;
    const ip = String(req.headers['x-forwarded-for'] ?? req.socket.remoteAddress ?? '').split(',')[0].trim();
    try {
      if (req.method === 'POST' && (url === '/api/register' || url === '/api/login')) {
        if (!limiter.allow(ip)) throw new AuthError('Too many attempts — wait a minute', 429);
        const body = await readJson(req);
        const result = url === '/api/register' ? await auth.register(body.username, body.password) : await auth.login(body.username, body.password);
        send(res, 200, result);
      } else if (req.method === 'GET' && url === '/api/me') {
        let u = await auth.authenticate(bearer(req));
        if (query.get('today')) u = await study.touchLogin(u, resolveToday(query.get('today'))); // daily login streak
        send(res, 200, { user: toPublic(u), profile: await study.profile(u) });
      } else if (req.method === 'GET' && /^\/api\/avatar\/[\w-]+$/.test(url)) {
        // profile pictures are public (shown next to names in games); versioned URLs → cache forever
        const img = await study.avatar(url.split('/')[3]);
        if (!img) { send(res, 404, { error: 'No picture' }); return true; }
        res.writeHead(200, { 'Content-Type': img.mime, 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff', 'Content-Length': img.data.length }).end(img.data);
      } else if (req.method === 'PUT' && url === '/api/me/avatar') {
        const u = await auth.authenticate(bearer(req));
        await study.setAvatar(u, (await readJson(req, 120 * 1024)).image);
        send(res, 200, { profile: await study.profile((await auth.authenticate(bearer(req)))) });
      } else if (req.method === 'DELETE' && url === '/api/me/avatar') {
        const u = await auth.authenticate(bearer(req));
        await study.setAvatar(u, null);
        send(res, 200, { profile: await study.profile((await auth.authenticate(bearer(req)))) });
      } else if (req.method === 'PUT' && url === '/api/me/background') {
        const u = await auth.authenticate(bearer(req));
        await study.setBackground(u, (await readJson(req)).background);
        send(res, 200, { profile: await study.profile((await auth.authenticate(bearer(req)))) });
      } else if (req.method === 'PUT' && url === '/api/me/flame') {
        const u = await auth.authenticate(bearer(req));
        await study.setFlame(u, (await readJson(req)).flame);
        send(res, 200, { profile: await study.profile((await auth.authenticate(bearer(req)))) });
      } else if (req.method === 'PUT' && url === '/api/me/staff') {
        const u = await auth.authenticate(bearer(req));
        await study.setStaff(u, (await readJson(req)).staff);
        send(res, 200, { profile: await study.profile((await auth.authenticate(bearer(req)))) });
      } else if (req.method === 'PUT' && url === '/api/me/tutorial') {
        const u = await auth.authenticate(bearer(req));
        await auth.store.update(u.id, { tutorialDone: true });
        send(res, 200, { ok: true });
      } else if (req.method === 'GET' && url === '/api/progress') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, await study.progress.page(u, query.get('today') ? resolveToday(query.get('today')) : playerDay(u)));
      } else if (req.method === 'GET' && url === '/api/strokes') {
        // stroke order for up to 8 characters (public data: reference strokes from the recogniser)
        const chars = [...(query.get('k') ?? '')].slice(0, 8);
        send(res, 200, { strokes: Object.fromEntries(chars.map((c) => [c, strokes?.(c) ?? null])) });
      } else if (daily && req.method === 'GET' && url === '/api/daily') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, await daily.overview(u));
      } else if (daily && req.method === 'POST' && url === '/api/daily/start') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, { word: await daily.start(u) });
      } else if (daily && req.method === 'POST' && url === '/api/daily/answer') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, await daily.answer(u, (await readJson(req)).text));
      } else if (daily && req.method === 'POST' && url === '/api/daily/finish') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, { done: await daily.finishStale(u) });
      } else if (social && req.method === 'GET' && url === '/api/friends') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, { friends: await social.list(u.id) });
      } else if (social && req.method === 'POST' && url === '/api/friends') {
        const u = await auth.authenticate(bearer(req));
        const result = await social.request(u.id, u.username, (await readJson(req)).username);
        send(res, 200, { result, friends: await social.list(u.id) });
      } else if (social && req.method === 'POST' && /^\/api\/friends\/[\w-]+\/accept$/.test(url)) {
        const u = await auth.authenticate(bearer(req));
        await social.accept(u.id, u.username, url.split('/')[3]);
        send(res, 200, { friends: await social.list(u.id) });
      } else if (social && req.method === 'DELETE' && /^\/api\/friends\/[\w-]+$/.test(url)) {
        const u = await auth.authenticate(bearer(req));
        await social.remove(u.id, url.split('/')[3]);
        send(res, 200, { friends: await social.list(u.id) });
      } else if (req.method === 'GET' && url === '/api/matches') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, { matches: await study.matches(u.id) });
      } else if (req.method === 'GET' && /^\/api\/matches\/[\w-]+$/.test(url)) {
        const u = await auth.authenticate(bearer(req));
        const m = await study.match(u.id, url.split('/')[3]);
        if (m) send(res, 200, { match: m }); else send(res, 404, { error: 'No such match' });
      } else if (req.method === 'GET' && /^\/api\/users\/[\w-]+$/.test(url)) {
        await auth.authenticate(bearer(req)); // players only
        const p = await study.publicProfile(url.split('/')[3]);
        if (p) send(res, 200, { profile: p }); else send(res, 404, { error: 'No such player' });
      } else if (req.method === 'GET' && url === '/api/study') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, await study.summary(u, resolveToday(query.get('today'))));
      } else if (req.method === 'PUT' && url === '/api/study/levels') {
        const u = await auth.authenticate(bearer(req));
        const body = await readJson(req);
        await study.setStudyLevels(u, body.levels, resolveToday(body.today));
        send(res, 200, await study.summary(await auth.authenticate(bearer(req)), resolveToday(body.today)));
      } else if (req.method === 'GET' && url === '/api/study/queue') {
        const u = await auth.authenticate(bearer(req));
        const deck = query.get('deck') === 'struggling' ? 'struggling' : 'all';
        send(res, 200, { cards: await study.queue(u, deck) });
      } else if (req.method === 'POST' && url === '/api/study/review') {
        const u = await auth.authenticate(bearer(req));
        const body = await readJson(req);
        const tz = Number(body.tz);
        send(res, 200, await study.review(u, body.vocabId, body.rating, Date.now(), resolveToday(body.today), Number.isFinite(tz) && Math.abs(tz) <= 840 ? tz : 0));
      } else if (req.method === 'GET' && url === '/api/admin/users') {
        await auth.requireAdmin(bearer(req));
        const stats = await study.adminStats(await auth.listUsers());
        const users = stats.users.map((u) => {
          const p = presence?.(u.id);
          return p ? { ...u, online: p.online, activity: p.activity, onlineSince: p.since, lastSeen: p.lastSeen } : u;
        });
        send(res, 200, { ...stats, users });
      } else if (req.method === 'POST' && /^\/api\/admin\/users\/[\w-]+\/ban$/.test(url)) {
        const admin = await auth.requireAdmin(bearer(req));
        const body = await readJson(req);
        const id = url.split('/')[4];
        send(res, 200, { user: await auth.setBanned(admin, id, body.banned === true) });
      } else {
        send(res, 404, { error: 'Not found' });
      }
    } catch (e) {
      if (e instanceof AuthError || e instanceof StudyError || e instanceof DailyError || e instanceof SocialError) send(res, e.status, { error: e.message });
      else { console.error(e); send(res, 500, { error: 'Server error' }); }
    }
    return true;
  };
}
