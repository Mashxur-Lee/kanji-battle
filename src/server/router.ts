// The REST API without the transport (0.9.9.4): the Node server (http.ts) feeds it real requests, and the
// app's offline engine (client/offline) feeds it the same calls while there is no internet — so offline
// study, quizzes, passages and the daily challenge run exactly the server's code.
import { displayName } from './db/Store';
import { CLIENT_EVENTS, InsightsError, type InsightsService } from './study/InsightsService';
import { AuthError, toPublic, type AuthService } from './auth/AuthService';
import { resolveToday, StudyError, type StudyService } from './study/StudyService';
import { isDeck, type DeckId } from '../shared/srs';
import type { Role } from '../shared/protocol';
import { DailyError, type DailyService } from './study/DailyService';
import { SocialError, type SocialService } from './study/SocialService';
import { playerDay } from './study/ProgressService';
import { now as clockNow } from './now';
import { isStoryLevel, StoryService } from './study/StoryService';

export const MAX_BODY = 4 * 1024;

/** Simple fixed-window rate limit per IP for login/register (brute-force protection). */
export class RateLimiter {
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

export interface ApiRequest {
  method: string;
  /** the path, e.g. /api/study */
  url: string;
  query: URLSearchParams;
  /** the bearer token ('' = none) */
  token: string;
  ip: string;
  /** the JSON body (rejects past `maxBody` bytes) */
  json(maxBody?: number): Promise<Record<string, any>>;
}
export interface ApiResponse { status: number; body?: unknown; raw?: { mime: string; data: Uint8Array; headers?: Record<string, string> } }
const res = (status: number, body: unknown): ApiResponse => ({ status, body });

export interface ApiExtras {
  presence?: (userId: string) => { online: boolean; activity?: string; since?: number; lastSeen?: number };
  daily?: DailyService;
  social?: SocialService;
  /** reference strokes of a character in stroke order (stroke-order hints) */
  strokes?: (ch: string) => unknown;
  insights?: InsightsService;
  onlineCount?: () => number;
  /** 0.9.9.4.4.1: AI-written reading passage stories (off without an API key) */
  stories?: StoryService;
  /** server errors (500s) are reported here */
  onError?: (where: string, e: unknown) => void;
}

/** Routes one /api/* call; null for any other path. */
export function createApiRouter(auth: AuthService, study: StudyService, extras: ApiExtras = {}) {
  const { presence, daily, social, strokes, insights, onlineCount, onError, stories } = extras;
  const limiter = new RateLimiter(20, 60_000);
  const errorLimiter = new RateLimiter(30, 60_000); // browser error reports per IP

  return async (r: ApiRequest): Promise<ApiResponse | null> => {
    const url = r.url;
    if (!url.startsWith('/api/')) return null;
    const query = r.query;
    const ip = r.ip;
    try {
      if (r.method === 'POST' && (url === '/api/register' || url === '/api/login')) {
        if (!limiter.allow(ip)) throw new AuthError('Too many attempts — wait a minute', 429);
        const body = await r.json();
        const result = url === '/api/register' ? await auth.register(body.username, body.password) : await auth.login(body.username, body.password);
        if (url === '/api/register') void insights?.event(result.user.id, 'signup');
        return res(200, result);
      } else if (r.method === 'GET' && url === '/api/online') {
        return res(200, { online: onlineCount?.() ?? 0 });
      } else if (r.method === 'POST' && url === '/api/errors') {
        // the browser reports its own crashes (signed in or not)
        if (!errorLimiter.allow(ip)) return { status: 429, body: { ok: false } };
        const body = await r.json();
        const who = await auth.authenticate(r.token).catch(() => null);
        await insights?.error(`[browser] ${String(body.message ?? '')}`, String(body.details ?? ''), who);
        return res(200, { ok: true });
      } else if (r.method === 'POST' && url === '/api/feedback') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await insights?.feedback(u, body.kind, body.text, body.meta);
        return res(200, { ok: true });
      } else if (r.method === 'POST' && url === '/api/event') {
        const u = await auth.authenticate(r.token);
        const name = String((await r.json()).name ?? '');
        if ((CLIENT_EVENTS as readonly string[]).includes(name)) await insights?.event(u.id, name);
        return res(200, { ok: true });
      } else if (r.method === 'GET' && url === '/api/admin/inbox') {
        await auth.requireAdmin(r.token);
        return res(200, { reports: insights ? await auth.store.reports(300) : [] });
      } else if (r.method === 'POST' && /^\/api\/admin\/inbox\/[\w-]+$/.test(url)) {
        await auth.requireAdmin(r.token);
        await auth.store.setReportDone(url.split('/')[4], (await r.json()).done === true);
        return res(200, { ok: true });
      } else if (r.method === 'DELETE' && /^\/api\/admin\/inbox\/[\w-]+$/.test(url)) {
        await auth.requireAdmin(r.token);
        await auth.store.deleteReport(url.split('/')[4]);
        return res(200, { ok: true });
      } else if (r.method === 'GET' && url === '/api/admin/stats') {
        await auth.requireAdmin(r.token);
        return res(200, insights ? await insights.stats(await auth.store.list(), onlineCount?.() ?? 0) : {});
      } else if (r.method === 'GET' && url === '/api/me') {
        let u = await auth.authenticate(r.token);
        if (query.get('today')) u = await study.touchLogin(u, resolveToday(query.get('today'))); // daily login streak
        return res(200, { user: toPublic(u), profile: await study.profile(u) });
      } else if (r.method === 'GET' && /^\/api\/avatar\/[\w-]+$/.test(url)) {
        // profile pictures are public (shown next to names in games); versioned URLs → cache forever
        const img = await study.avatar(url.split('/')[3]);
        if (!img) return res(404, { error: 'No picture' });
        return { status: 200, raw: { mime: img.mime, data: img.data, headers: { 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff' } } };
      } else if (r.method === 'PUT' && url === '/api/me/avatar') {
        const u = await auth.authenticate(r.token);
        await study.setAvatar(u, (await r.json(120 * 1024)).image);
        return res(200, { profile: await study.profile((await auth.authenticate(r.token))) });
      } else if (r.method === 'DELETE' && url === '/api/me/avatar') {
        const u = await auth.authenticate(r.token);
        await study.setAvatar(u, null);
        return res(200, { profile: await study.profile((await auth.authenticate(r.token))) });
      } else if (r.method === 'PUT' && url === '/api/me/background') {
        const u = await auth.authenticate(r.token);
        await study.setBackground(u, (await r.json()).background);
        return res(200, { profile: await study.profile((await auth.authenticate(r.token))) });
      } else if (r.method === 'PUT' && url === '/api/me/flame') {
        const u = await auth.authenticate(r.token);
        await study.setFlame(u, (await r.json()).flame);
        return res(200, { profile: await study.profile((await auth.authenticate(r.token))) });
      } else if (r.method === 'PUT' && url === '/api/me/staff') {
        const u = await auth.authenticate(r.token);
        await study.setStaff(u, (await r.json()).staff);
        return res(200, { profile: await study.profile((await auth.authenticate(r.token))) });
      } else if (r.method === 'PUT' && url === '/api/me/kana') {
        const u = await auth.authenticate(r.token);
        await study.setKanaMastered(u, (await r.json()).mastered === true);
        return res(200, { profile: await study.profile(await auth.authenticate(r.token)) });
      } else if (r.method === 'PUT' && url === '/api/me/tutorial') {
        const u = await auth.authenticate(r.token);
        await auth.store.update(u.id, { tutorialDone: true });
        return res(200, { ok: true });
      } else if (r.method === 'GET' && url === '/api/progress') {
        const u = await auth.authenticate(r.token);
        return res(200, await study.progress.page(u, query.get('today') ? resolveToday(query.get('today')) : playerDay(u)));
      } else if (r.method === 'GET' && url === '/api/strokes') {
        // stroke order for up to 8 characters (public data: reference strokes from the recogniser)
        const chars = [...(query.get('k') ?? '')].slice(0, 8);
        return res(200, { strokes: Object.fromEntries(chars.map((c) => [c, strokes?.(c) ?? null])) });
      } else if (daily && r.method === 'GET' && url === '/api/daily') {
        const u = await auth.authenticate(r.token);
        return res(200, await daily.overview(u));
      } else if (daily && r.method === 'POST' && url === '/api/daily/start') {
        const u = await auth.authenticate(r.token);
        return res(200, { word: await daily.start(u) });
      } else if (daily && r.method === 'POST' && url === '/api/daily/answer') {
        const u = await auth.authenticate(r.token);
        return res(200, await daily.answer(u, (await r.json()).text));
      } else if (daily && r.method === 'POST' && url === '/api/daily/finish') {
        const u = await auth.authenticate(r.token);
        return res(200, { done: await daily.finishStale(u) });
      } else if (social && r.method === 'GET' && url === '/api/friends') {
        const u = await auth.authenticate(r.token);
        return res(200, { friends: await social.list(u.id) });
      } else if (social && r.method === 'POST' && url === '/api/friends') {
        const u = await auth.authenticate(r.token);
        const result = await social.request(u.id, displayName(u), (await r.json()).username);
        return res(200, { result, friends: await social.list(u.id) });
      } else if (social && r.method === 'POST' && /^\/api\/friends\/[\w-]+\/accept$/.test(url)) {
        const u = await auth.authenticate(r.token);
        await social.accept(u.id, displayName(u), url.split('/')[3]);
        return res(200, { friends: await social.list(u.id) });
      } else if (social && r.method === 'DELETE' && /^\/api\/friends\/[\w-]+$/.test(url)) {
        const u = await auth.authenticate(r.token);
        await social.remove(u.id, url.split('/')[3]);
        return res(200, { friends: await social.list(u.id) });
      } else if (r.method === 'GET' && url === '/api/matches') {
        const u = await auth.authenticate(r.token);
        return res(200, { matches: await study.matches(u.id) });
      } else if (r.method === 'GET' && /^\/api\/matches\/[\w-]+$/.test(url)) {
        const u = await auth.authenticate(r.token);
        const m = await study.match(u.id, url.split('/')[3]);
        return m ? res(200, { match: m }) : res(404, { error: 'No such match' });
      } else if (r.method === 'GET' && /^\/api\/users\/[\w-]+$/.test(url)) {
        await auth.authenticate(r.token); // players only
        const p = await study.publicProfile(url.split('/')[3]);
        return p ? res(200, { profile: p }) : res(404, { error: 'No such player' });
      } else if (r.method === 'GET' && url === '/api/study') {
        const u = await auth.authenticate(r.token);
        return res(200, await study.summary(u, resolveToday(query.get('today'))));
      } else if (r.method === 'PUT' && url === '/api/study/daily-levels') {
        // 0.9.9.4.4: new words a day per level
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setDailyLevels(u, body.levels, resolveToday(body.today));
        return res(200, await study.summary(await auth.authenticate(r.token), resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/study/levels') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setStudyLevels(u, body.levels, resolveToday(body.today));
        return res(200, await study.summary(await auth.authenticate(r.token), resolveToday(body.today)));
      } else if (r.method === 'GET' && url === '/api/study/queue') {
        const u = await auth.authenticate(r.token);
        const deck = query.get('deck');
        return res(200, { cards: await study.queue(u, (isDeck(deck) ? deck : 'all') as DeckId) });
      } else if (r.method === 'POST' && url === '/api/study/review') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        const tz = Number(body.tz);
        return res(200, await study.review(u, body.vocabId, body.rating, clockNow(), resolveToday(body.today), Number.isFinite(tz) && Math.abs(tz) <= 840 ? tz : 0, body.deck));
      } else if (r.method === 'POST' && url === '/api/study/undo') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        return res(200, await study.undo(u, body.vocabId, body.deck));
      } else if (r.method === 'GET' && url === '/api/study/deck') {
        const u = await auth.authenticate(r.token);
        return res(200, { words: await study.deckList(u, query.get('deck')) });
      } else if (r.method === 'GET' && url === '/api/notify/status') {
        const u = await auth.authenticate(r.token);
        return res(200, await study.notifyStatus(u, resolveToday(query.get('today'))));
      } else if (r.method === 'PUT' && url === '/api/me/nickname') {
        const u = await auth.authenticate(r.token);
        return res(200, { user: await auth.setNickname(u, (await r.json()).nickname) });
      } else if (r.method === 'PUT' && url === '/api/study/star') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        return res(200, { starred: await study.setStar(u, body.vocabId, body.on) });
      } else if (r.method === 'POST' && url === '/api/study/deck/remove') {
        const u = await auth.authenticate(r.token);
        const body = await r.json(32 * 1024);
        return res(200, { removed: await study.removeFromDeck(u, body.deck, body.ids) });
      } else if (r.method === 'POST' && url === '/api/study/deck/add') {
        const u = await auth.authenticate(r.token);
        const body = await r.json(32 * 1024);
        return res(200, { added: await study.addToDeck(u, body.deck, body.ids) });
      } else if (r.method === 'GET' && url === '/api/study/search') {
        await auth.authenticate(r.token);
        return res(200, { words: study.search(query.get('q')) });
      } else if (r.method === 'POST' && url === '/api/study/custom') {
        const u = await auth.authenticate(r.token);
        return res(200, await study.addCustom(u, await r.json()));
      } else if (r.method === 'GET' && url === '/api/study/quiz') {
        const u = await auth.authenticate(r.token);
        return res(200, { questions: await study.quiz(u, Number(query.get('n')) || 10) });
      } else if (r.method === 'POST' && url === '/api/study/story') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        const words = StoryService.clean(body.words);
        const day = resolveToday(body.today);
        const admin = u.role === 'admin';
        // 0.9.9.5.1: the app starts the story and asks for it every couple of seconds (see StoryService.startJob)
        if (body.async === true && stories) {
          const job = stories.startJob(u.id, words, day, { level: isStoryLevel(body.level) ? body.level : undefined, admin });
          return res(200, { job, words, usage: stories.usage(u.id, day, admin) });
        }
        const out = stories ? await stories.story(u.id, words, day, { level: isStoryLevel(body.level) ? body.level : undefined, admin }) : { story: null, why: 'off' };
        return res(200, { ...out, words, usage: stories?.usage(u.id, day, admin) ?? { enabled: false, used: 0, limit: 0 } });
      } else if (r.method === 'GET' && url === '/api/study/story/job') {
        const u = await auth.authenticate(r.token);
        const out = stories?.job(u.id, String(query.get('id') ?? ''));
        if (out === undefined) return res(404, { error: 'No such story' });
        const day = resolveToday(query.get('today'));
        return res(200, out === null ? { pending: true } : { ...out, usage: stories!.usage(u.id, day, u.role === 'admin') });
      } else if (r.method === 'GET' && url === '/api/study/story') {
        const u = await auth.authenticate(r.token);
        return res(200, stories?.usage(u.id, resolveToday(query.get('today')), u.role === 'admin') ?? { enabled: false, used: 0, limit: 0 });
      } else if (r.method === 'POST' && url === '/api/study/task') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        return res(200, await study.recordTask(u, body.task, resolveToday(body.today), body.score, body.total));
      } else if (r.method === 'PUT' && url === '/api/study/daily-new') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setDailyNew(u, body.n, resolveToday(body.today));
        return res(200, await study.summary(await auth.authenticate(r.token), resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/me/border') {
        const u = await auth.authenticate(r.token);
        return res(200, { profile: await study.setBorder(u, (await r.json()).border) });
      } else if (r.method === 'PUT' && url === '/api/me/badges') {
        const u = await auth.authenticate(r.token);
        return res(200, { badges: await study.setBadges(u, (await r.json()).badges) });
      } else if (r.method === 'GET' && url === '/api/admin/users') {
        await auth.requireAdmin(r.token);
        const stats = await study.adminStats(await auth.listUsers());
        const users = stats.users.map((u) => {
          const p = presence?.(u.id);
          return p ? { ...u, online: p.online, activity: p.activity, onlineSince: p.since, lastSeen: p.lastSeen } : u;
        });
        return res(200, { ...stats, users });
      } else if (r.method === 'POST' && /^\/api\/admin\/users\/[\w-]+\/ban$/.test(url)) {
        const admin = await auth.requireAdmin(r.token);
        const body = await r.json();
        const id = url.split('/')[4];
        return res(200, { user: await auth.setBanned(admin, id, body.banned === true) });
      } else if (r.method === 'DELETE' && /^\/api\/admin\/users\/[\w-]+$/.test(url)) {
        const admin = await auth.requireAdmin(r.token);
        await auth.deleteUser(admin, url.split('/')[4]);
        return res(200, { ok: true });
      } else if (r.method === 'POST' && /^\/api\/admin\/users\/[\w-]+\/role$/.test(url)) {
        const admin = await auth.requireAdmin(r.token);
        const body = await r.json();
        const id = url.split('/')[4];
        return res(200, { user: await auth.setRole(admin, id, body.role as Role) });
      } else if (r.method === 'GET' && url === '/api/sync/snapshot') {
        // 0.9.9.4: everything the app needs to keep studying offline (see client/offline)
        const u = await auth.authenticate(r.token);
        return res(200, await study.snapshot(u, daily?.today()));
      } else {
        return res(404, { error: 'Not found' });
      }
    } catch (e) {
      if (e instanceof AuthError || e instanceof StudyError || e instanceof DailyError || e instanceof SocialError || e instanceof InsightsError) return res(e.status, { error: e.message });
      onError?.(`${r.method} ${url}`, e);
      return res(500, { error: 'Server error' });
    }
  };
}
