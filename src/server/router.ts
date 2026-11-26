// The REST API without the transport (0.9.9.4): the Node server (http.ts) feeds it real requests, and the
// app's offline engine (client/offline) feeds it the same calls while there is no internet — so offline
// study, quizzes, passages and the daily challenge run exactly the server's code.
import { outcome, posKey, replay } from '../shared/chess';
import { parseList, UserDeckError, USER_DECKS_MAX, type ImportRow } from './study/UserDecks';
import { achCounts } from '../shared/achievements';
import { isTransientDbError, retryDelay } from './db/transient';
import { displayName, type UserRecord } from './db/Store';
import { CLIENT_EVENTS, InsightsError, type InsightsService } from './study/InsightsService';
import { MessageError, type MessageService } from './study/MessageService';
import { AuthError, isGuest, toSelf, type AuthService } from './auth/AuthService';
import { resolveToday, StudyError, type StudyService } from './study/StudyService';
import { isDeck, type DeckId } from '../shared/srs';
import type { Role } from '../shared/protocol';
import { DailyError, type DailyService } from './study/DailyService';
import { SocialError, type SocialService } from './study/SocialService';
import { playerDay } from './study/ProgressService';
import { now as clockNow } from './now';
import { isStoryLevel, StoryService } from './study/StoryService';
import type { DictService } from './study/DictService';
import { Strikes } from './strikes';

export const MAX_BODY = 4 * 1024;
/** 0.9.9.9.9.6: a deck's own errors (no such deck, a name missing) come back as 400s */
async function deckCall<T>(fn: () => Promise<T>): Promise<T> { try { return await fn(); } catch (e) { if (e instanceof UserDeckError) throw new StudyError(e.message); throw e; } }

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
  /** 0.9.9.9.6.6: send a password-reset code (index.ts: by email, or to the admin's inbox when email is off) */
  resetMail?: (m: import('./auth/AuthService').ResetMail) => Promise<void>;
  presence?: (userId: string) => { online: boolean; activity?: string; since?: number; lastSeen?: number };
  daily?: DailyService;
  social?: SocialService;
  /** reference strokes of a character in stroke order (stroke-order hints) */
  strokes?: (ch: string) => unknown;
  /** 0.9.9.9.9.6: the dictionary's draw-a-kanji search — the closest characters to a drawing (best first) */
  recognize?: (strokes: Array<Array<[number, number]>>) => string[];
  /** 0.9.9.9.9.6: an Anki deck file (base64) → its words (server only: node:sqlite — kept out of the offline app) */
  readApkg?: (base64: string) => Promise<ImportRow[]>;
  /** 0.9.9.9.9.6: GIFs for Messages (GIPHY, through us); absent: not set up */
  gifs?: { search(q: string, offset: number, lang: string): Promise<unknown[]>; media(host: string, path: string): Promise<{ mime: string; data: Uint8Array } | null> };
  /** 0.9.9.9.9.6: AI memory pictures (absent: not set up) */
  mnemonics?: { picture(ch: string): Promise<{ mime: string; data: Buffer } | null>; paint(ch: string, userId: string): Promise<{ ok: boolean; why?: string }> };
  insights?: InsightsService;
  onlineCount?: () => number;
  /** 0.9.9.4.4.1: AI-written reading passage stories (off without an API key) */
  stories?: StoryService;
  /** server errors (500s) are reported here */
  onError?: (where: string, e: unknown) => void;
  /** 0.9.9.7: the dictionary (online only — the offline engine has none) */
  dict?: DictService;
  /** 0.9.9.9.5.1: whether push to the Android app is set up (FIREBASE_SERVICE_ACCOUNT) — shown to admins */
  pushOn?: () => boolean;
  /** 0.9.9.9.9: the ranked ladder and replays */
  ranked?: { ladder(me: UserRecord, friendIds: string[]): Promise<unknown>; replay(id: string): Promise<unknown | null>;
    savedList(userId: string): Promise<{ saved: unknown[]; max: number }>; saveFor(userId: string, id: string, label: string): Promise<'ok' | 'gone' | 'full'>; unsaveFor(userId: string, id: string): Promise<boolean> }; // (study/RankedService — kept out of the offline app's bundle)
  /** 0.9.9.9.5: "Decline" on an invite notification (the app was closed — no websocket) */
  inviteDecline?: (userId: string, name: string, fromId: string) => void;
  /** 0.9.9.9.6: the messenger */
  messages?: MessageService;
}

/** Routes one /api/* call; null for any other path. */
export function createApiRouter(auth: AuthService, study: StudyService, extras: ApiExtras = {}) {
  const { presence, daily, social, strokes, insights, onlineCount, onError, stories, dict, inviteDecline, pushOn, messages, ranked, recognize, readApkg, gifs, mnemonics } = extras;
  const limiter = new RateLimiter(20, 60_000);
  const errorLimiter = new RateLimiter(30, 60_000); // browser error reports per IP
  const signupLimiter = new RateLimiter(10, 3600_000);
  const loginFails = new Strikes(20, 60_000); // 0.9.9.9.7.1: wrong passwords per address
  /** 0.9.9.9.7.3: the player as they are now, after a change (the sign-in was checked a moment ago — it was checked again) */
  const fresh = async (u: UserRecord) => (await auth.store.findById(u.id)) ?? u;

  // 0.9.9.9.5: a GET whose database connection failed while opening (the database waking up) is tried again —
  // up to 3 times over ~4 s — instead of failing with "Server error" and an Inbox entry
  const route = async (r: ApiRequest): Promise<ApiResponse | null> => {
    for (let attempt = 0; ; attempt++) {
      const out = await handle(r, attempt < 3 && r.method === 'GET');
      if (out !== RETRY) return out;
      await retryDelay(attempt);
    }
  };
  const RETRY = Symbol('retry');
  // 0.9.9.9.7: emails (a reset code, a code to confirm an address) go out in the background
  const sendMail = (m: import('./auth/AuthService').ResetMail) => (extras.resetMail ? extras.resetMail(m) : Promise.resolve());
  const GUEST_BLOCKED = /^\/api\/(messages|groups|friends|push|invite|block|report)(\/|$)|^\/api\/me\/(avatar|nickname|email|password)$/; // (0.9.9.9.7.4: + block, report)
  const handle = async (r: ApiRequest, canRetry: boolean): Promise<ApiResponse | null | typeof RETRY> => {
    const url = r.url;
    if (!url.startsWith('/api/')) return null;
    const query = r.query;
    const ip = r.ip;
    try {
      // 0.9.9.9.6.9: guests play, study and race the daily — writing to people (messages, groups, friends, a picture,
      // a nickname, push) waits until the account is saved
      if (r.method !== 'GET' && GUEST_BLOCKED.test(url) && r.token) {
        const g = await auth.authenticate(r.token).catch(() => null);
        if (g && isGuest(g)) throw new AuthError('Save your account first (it takes a moment) - then you can message and add friends', 403);
      }
      if (r.method === 'POST' && url === '/api/guest') {
        // 0.9.9.9.6.9: play at once, no account
        if (!limiter.allow(ip) || !signupLimiter.allow(ip)) throw new AuthError('Too many new accounts from here - try again later', 429);
        const result = await auth.guest();
        void insights?.event(result.user.id, 'guest');
        return res(200, result);
      }
      if (r.method === 'POST' && url === '/api/guest/claim') {
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`cl:${ip}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        const result = await auth.claim(u, body.username, body.password, body.email, sendMail);
        void insights?.event(u.id, 'signup');
        return res(200, result);
      }
      if (r.method === 'POST' && url === '/api/login') {
        // 0.9.9.9.7.1: an address is limited on its wrong passwords, not on every login (a school or a mobile network
        // shares one address: one busy minute of right passwords locked everyone there out); each account has its own
        // limit too (AuthService.login)
        if (loginFails.blocked(ip)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        try { return res(200, await auth.login(body.username, body.password, undefined, ip)); } catch (e) { if (e instanceof AuthError && e.status === 401) loginFails.add(ip); throw e; }
      } else if (r.method === 'POST' && url === '/api/register') {
        if (!limiter.allow(ip)) throw new AuthError('Too many attempts - wait a minute', 429);
        // 0.9.9.9.5: and at most 10 new accounts an hour from one address
        if (!signupLimiter.allow(ip)) throw new AuthError('Too many new accounts from here - try again later', 429);
        const body = await r.json();
        const result = await auth.register(body.username, body.password, body.email, sendMail);
        void insights?.event(result.user.id, 'signup');
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
        // 0.9.9.9.6: it's in your conversation with the team too — an admin can answer it there
        const text = typeof body.text === 'string' ? body.text.trim() : '';
        if (messages && text.length >= 3) await messages.feedback(u, body.kind === 'suggestion' ? 'suggestion' : 'bug', text).catch(() => { /* the report itself is in */ });
        return res(200, { ok: true });
      } else if (messages && r.method === 'GET' && url === '/api/messages') {
        // 0.9.9.9.6: your conversations (an admin: ?as=support — the team's)
        const u = await auth.authenticate(r.token);
        return res(200, await messages.list(u, query.get('as') === 'support'));
      } else if (messages && r.method === 'PUT' && url === '/api/messages/mute') {
        // 0.9.9.9.6.1: mute all your messages, or one conversation
        const u = await auth.authenticate(r.token);
        const b = await r.json();
        return res(200, await messages.mute(u, b.who, b.on === true));
      } else if (messages && r.method === 'GET' && url === '/api/messages/unread') {
        return res(200, await messages.unread(await auth.authenticate(r.token)));
      } else if (messages && r.method === 'PUT' && url === '/api/messages/notify') {
        // 0.9.9.9.6.4: a conversation notifies for everything, only @mentions, or nothing
        const u = await auth.authenticate(r.token);
        const b = await r.json();
        return res(200, await messages.setNotify(u, b.who, b.mode));
      } else if (messages && r.method === 'POST' && url === '/api/messages/media') {
        // 0.9.9.9.6.4: a photo (made smaller by the app first), sent with a message or as a group's picture
        const u = await auth.authenticate(r.token);
        return res(200, await messages.upload(u, (await r.json(1024 * 1024)).image));
      } else if (messages && r.method === 'GET' && /^\/api\/media\/[\w-]{10,40}$/.test(url)) {
        // (behind an address nobody can guess; kept forever by the browser — a photo never changes)
        const img = await messages.media(url.split('/')[3]);
        if (!img) return res(404, { error: 'No such photo' });
        return { status: 200, raw: { mime: img.mime, data: img.data, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } } };
      } else if (messages && /^\/api\/messages\/m\/[0-9a-f-]{36}(\/react|\/forward)?$/i.test(url)) {
        // 0.9.9.9.6.4: one message — edit it, delete it, react to it, forward it
        const u = await auth.authenticate(r.token);
        const [, , , , id, what] = url.split('/');
        if (what === 'react' && r.method === 'PUT') return res(200, { message: await messages.react(u, id, (await r.json()).emoji ?? null) });
        if (what === 'forward' && r.method === 'POST') return res(200, { messages: await messages.forward(u, id, (await r.json()).to) });
        if (!what && r.method === 'PATCH') return res(200, { message: await messages.edit(u, id, (await r.json()).text) });
        if (!what && r.method === 'DELETE') return res(200, { message: await messages.remove(u, id) });
        return res(405, { error: 'Not allowed' });
      } else if (messages && r.method === 'POST' && url === '/api/groups') {
        // 0.9.9.9.6.4: group chats
        const u = await auth.authenticate(r.token);
        const b = await r.json(8 * 1024);
        return res(200, await messages.createGroup(u, b.name, b.members, b.pic));
      } else if (messages && /^\/api\/groups\/(g(:|%3A))?[0-9a-f-]{36}(\/[\w-]+){0,2}$/i.test(url)) {
        const u = await auth.authenticate(r.token);
        const [, , , raw, sub, who] = url.split('/');
        const key = `g:${decodeURIComponent(raw).replace(/^g:/, '')}`;
        if (!sub && r.method === 'GET') return res(200, { group: await messages.groupInfo(u, key) });
        if (!sub && r.method === 'PATCH') { const b = await r.json(); return res(200, { group: await messages.updateGroup(u, key, { name: b.name, pic: b.pic, perms: b.perms }) }); }
        if (!sub && r.method === 'DELETE') return res(200, await messages.deleteGroup(u, key));
        if (sub === 'leave' && r.method === 'POST') return res(200, await messages.leave(u, key));
        if (sub === 'members' && !who && r.method === 'POST') return res(200, { group: await messages.addMembers(u, key, (await r.json(8 * 1024)).ids) });
        if (sub === 'members' && who && r.method === 'DELETE') return res(200, { group: await messages.removeMember(u, key, who) });
        if (sub === 'members' && who && r.method === 'PUT') return res(200, { group: await messages.setRole(u, key, who, (await r.json()).role) });
        return res(405, { error: 'Not allowed' });
      } else if (messages && r.method === 'GET' && /^\/api\/messages\/(g(:|%3A))?[\w-]{1,64}$/i.test(url)) {
        const u = await auth.authenticate(r.token);
        const before = Number(query.get('before')) || undefined;
        return res(200, await messages.thread(u, decodeURIComponent(url.split('/')[3]), query.get('as') === 'support', before));
      } else if (messages && r.method === 'POST' && /^\/api\/messages\/(g(:|%3A))?[\w-]{1,64}$/i.test(url)) {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        // (0.9.9.9.6.4: with a photo — its id from /api/messages/media)
        return res(200, { message: await messages.send(u, decodeURIComponent(url.split('/')[3]), body.text, query.get('as') === 'support', undefined, { media: body.media, ...(body.gif !== undefined ? { gif: body.gif } : {}) }) });
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
      } else if (r.method === 'POST' && url === '/api/admin/self-test') {
        // 0.9.9.9.6.3: an admin testing the game on their own account — a streak of any length (to see its flame), and
        // the win/loss record wiped (test forfeits). Only ever their own account.
        const u = await auth.requireAdmin(r.token);
        const b = await r.json();
        const patch: Record<string, unknown> = {};
        if (b.streak !== undefined) {
          const n = Math.round(Number(b.streak));
          if (!Number.isFinite(n) || n < 0 || n > 3650) return res(400, { error: 'A streak from 0 to 3650 days' });
          patch.streak = n; patch.streakDay = n > 0 ? playerDay(u) : null; patch.bestStreak = Math.max(u.bestStreak ?? 0, n);
        }
        if (b.resetRecord === true) { patch.wins = 0; patch.losses = 0; }
        if (!Object.keys(patch).length) return res(400, { error: 'Nothing to change' });
        const now = (await auth.store.update(u.id, patch as never))!;
        return res(200, { user: toSelf(now), profile: await study.profile(now) });
      } else if (r.method === 'GET' && url === '/api/admin/stats') {
        await auth.requireAdmin(r.token);
        const users = await auth.store.list();
        const stats = insights ? await insights.stats(users, onlineCount?.() ?? 0) : {};
        // 0.9.9.9.5.1: push — on or off on this server, and how many accounts have a phone that can get it
        return res(200, { ...stats, push: { on: pushOn?.() ?? false, phones: users.filter((u) => (u.pushTokens?.length ?? 0) > 0).length } });
      } else if (r.method === 'GET' && url === '/api/me') {
        let u = await auth.authenticate(r.token);
        if (query.get('today')) u = await study.touchLogin(u, resolveToday(query.get('today'))); // daily login streak
        return res(200, { user: toSelf(u), profile: await study.profile(u) });
      } else if (r.method === 'GET' && /^\/api\/avatar\/[\w-]+$/.test(url)) {
        // profile pictures are public (shown next to names in games); versioned URLs → cache forever
        const img = await study.avatar(url.split('/')[3]);
        if (!img) return res(404, { error: 'No picture' });
        return { status: 200, raw: { mime: img.mime, data: img.data, headers: { 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff' } } };
      } else if (r.method === 'PUT' && url === '/api/me/avatar') {
        const u = await auth.authenticate(r.token);
        await study.setAvatar(u, (await r.json(120 * 1024)).image);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if ((r.method === 'PUT' || r.method === 'DELETE') && url === '/api/push') {
        // 0.9.9.9.5: the Android app's push token (friends' invites while the app is closed); DELETE at logout
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await (r.method === 'PUT' ? study.addPushToken(u, body.token, body.lang) : study.dropPushToken(u, body.token));
        return res(200, { ok: true });
      } else if (r.method === 'POST' && url === '/api/invite/decline') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        inviteDecline?.(u.id, u.nickname || u.username, String(body.fromId ?? ''));
        return res(200, { ok: true });
      } else if (r.method === 'DELETE' && url === '/api/me/avatar') {
        const u = await auth.authenticate(r.token);
        await study.setAvatar(u, null);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'PUT' && url === '/api/me/background') {
        const u = await auth.authenticate(r.token);
        await study.setBackground(u, (await r.json()).background);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'PUT' && url === '/api/me/flame') {
        const u = await auth.authenticate(r.token);
        await study.setFlame(u, (await r.json()).flame);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'PUT' && url === '/api/me/character') {
        const u = await auth.authenticate(r.token);
        await study.setCharacter(u, (await r.json()).character);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'PUT' && url === '/api/me/pose') {
        const u = await auth.authenticate(r.token);
        await study.setPose(u, (await r.json()).pose);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'PUT' && url === '/api/me/staff') {
        const u = await auth.authenticate(r.token);
        await study.setStaff(u, (await r.json()).staff);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'POST' && url === '/api/me/quiz') {
        // 0.9.9.9.5.5: a finished quiz → the Quizzes screen's records, with the account
        const u = await auth.authenticate(r.token);
        const b = await r.json();
        return res(200, { quizStats: await study.recordQuiz(u, b.kind, b.score, b.total, b.ms) });
      } else if (r.method === 'PUT' && url === '/api/me/quizstats') {
        const u = await auth.authenticate(r.token);
        return res(200, { quizStats: await study.mergeQuizStats(u, (await r.json()).stats) });
      } else if (r.method === 'PUT' && url === '/api/me/kana') {
        const u = await auth.authenticate(r.token);
        await study.setKanaMastered(u, (await r.json()).mastered === true);
        return res(200, { profile: await study.profile(await fresh(u)) });
      } else if (r.method === 'PUT' && url === '/api/kana') {
        // 0.9.9.9.5: the Kana section's stars
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        return res(200, await study.setKana(u, body.kana, resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/me/tutorial') {
        const u = await auth.authenticate(r.token);
        await auth.store.update(u.id, { tutorialDone: true });
        return res(200, { ok: true });
      } else if (r.method === 'GET' && url === '/api/progress') {
        const u = await auth.authenticate(r.token);
        const page = await study.progress.page(u, query.get('today') ? resolveToday(query.get('today')) : playerDay(u));
        return res(200, { ...page, achCounts: achCounts(await study.achFacts(u)) }); // 0.9.9.6.1: "12 / 50" on the badges
      } else if (recognize && r.method === 'POST' && url === '/api/recognize') {
        // 0.9.9.9.9.6: look a kanji up by drawing it — one character, its closest matches
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`rec:${u.id}`)) throw new AuthError('Too many attempts — wait a minute', 429);
        const raw = (await r.json().catch(() => ({}))) as { strokes?: unknown };
        const ok = Array.isArray(raw.strokes) && raw.strokes.length > 0 && raw.strokes.length <= 40 && raw.strokes.every((s) => Array.isArray(s) && s.length > 0 && s.length <= 400 && s.every((p) => Array.isArray(p) && p.length === 2 && p.every((n) => typeof n === 'number' && Number.isFinite(n) && Math.abs(n) < 1e5)));
        if (!ok) return res(400, { error: 'Draw a character first' });
        // (long strokes thinned to 64 points, as the battles' judge takes them)
        const strokes = (raw.strokes as Array<Array<[number, number]>>).map((s) => (s.length <= 64 ? s : Array.from({ length: 64 }, (_, i) => s[Math.round((i * (s.length - 1)) / 63)])));
        return res(200, { chars: recognize(strokes).slice(0, 12) });
      } else if (r.method === 'GET' && url === '/api/strokes') {
        // stroke order for up to 8 characters (public data: reference strokes from the recogniser)
        const chars = [...(query.get('k') ?? '')].slice(0, 8);
        return res(200, { strokes: Object.fromEntries(chars.map((c) => [c, strokes?.(c) ?? null])) });
      } else if (daily && r.method === 'GET' && url === '/api/daily') {
        const u = await auth.authenticate(r.token);
        return res(200, await daily.overview(u, query.get('today')));
      } else if (daily && r.method === 'GET' && url === '/api/daily/past') {
        // 0.9.9.9.6: an earlier day's words and boards, every league
        const u = await auth.authenticate(r.token);
        return res(200, await daily.past(u, query.get('day'), query.get('today')));
      } else if (daily && r.method === 'POST' && url === '/api/daily/start') {
        const u = await auth.authenticate(r.token);
        return res(200, { word: await daily.start(u, (await r.json()).today) });
      } else if (daily && r.method === 'POST' && url === '/api/daily/answer') {
        const u = await auth.authenticate(r.token);
        return res(200, await daily.answer(u, (await r.json()).text));
      } else if (daily && r.method === 'POST' && url === '/api/daily/finish') {
        const u = await auth.authenticate(r.token);
        return res(200, { done: await daily.finishStale(u) });
      } else if (social && r.method === 'PUT' && url === '/api/block') {
        // 0.9.9.9.7.4: block or unblock a player (they can't message, befriend or invite you)
        const u = await auth.authenticate(r.token);
        const b = await r.json();
        return res(200, { blocked: await social.block(u, b.id, b.on === true) });
      } else if (social && r.method === 'POST' && url === '/api/report') {
        // 0.9.9.9.7.4: report a player to the team (admin → Inbox)
        const u = await auth.authenticate(r.token);
        const b = await r.json();
        await social.report(u, b.id, b.reason, b.text, b.messageId);
        return res(200, { ok: true });
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
      } else if (ranked && r.method === 'GET' && url === '/api/ladder') {
        // 0.9.9.9.9: the ranked ladder: the top 50, you, your friends
        const u = await auth.authenticate(r.token);
        const friends = social ? (await social.list(u.id)).filter((f) => f.status === 'accepted').map((f) => f.id) : [];
        return res(200, await ranked.ladder(u, friends));
      } else if (ranked && r.method === 'GET' && /^\/api\/replays\/[\w-]{16}$/.test(url)) {
        // 0.9.9.9.9: a match's replay — anyone with the link (the id can't be guessed); kept two weeks
        if (!limiter.allow(`rp:${ip}`)) throw new AuthError('Too many attempts — wait a minute', 429);
        const rp = await ranked.replay(url.split('/')[3]);
        return rp ? res(200, { replay: rp }) : res(404, { error: 'This replay is gone (they are kept for a week unless saved)' });
      } else if (ranked && r.method === 'GET' && url === '/api/me/replays') {
        // 0.9.9.9.9.5: the replays you saved to your account (kept for good, SAVED_REPLAYS_MAX at most)
        const u = await auth.authenticate(r.token);
        return res(200, await ranked.savedList(u.id));
      } else if (ranked && r.method === 'PUT' && /^\/api\/me\/replays\/[\w-]{16}$/.test(url)) {
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`rps:${u.id}`)) throw new AuthError('Too many attempts — wait a minute', 429);
        const b = ((await r.json().catch(() => ({}))) ?? {}) as { label?: unknown };
        const out = await ranked.saveFor(u.id, url.split('/')[4], typeof b.label === 'string' ? b.label : '');
        if (out === 'gone') return res(404, { error: 'This replay is gone (they are kept for a week unless saved)' });
        if (out === 'full') { const { max } = await ranked.savedList(u.id); return res(409, { error: `You can keep ${max} saved replays - remove one in Match history → Saved first` }); }
        return res(200, await ranked.savedList(u.id));
      } else if (ranked && r.method === 'DELETE' && /^\/api\/me\/replays\/[\w-]{16}$/.test(url)) {
        const u = await auth.authenticate(r.token);
        await ranked.unsaveFor(u.id, url.split('/')[4]);
        return res(200, await ranked.savedList(u.id));
      } else if (r.method === 'GET' && url === '/api/matches') {
        const u = await auth.authenticate(r.token);
        return res(200, { matches: await study.matches(u.id) });
      } else if (r.method === 'GET' && /^\/api\/matches\/[\w-]+$/.test(url)) {
        const u = await auth.authenticate(r.token);
        const m = await study.match(u.id, url.split('/')[3]);
        return m ? res(200, { match: m }) : res(404, { error: 'No such match' });
      } else if (r.method === 'GET' && /^\/api\/users\/by-login\/[\w.-]{1,32}$/.test(url)) {
        // 0.9.9.9.6.3: "@admin" in a chat — the card of the player with that login
        const viewer = await auth.authenticate(r.token); // players only
        const p = await study.publicProfileByLogin(decodeURIComponent(url.split('/')[4]));
        if (p && social && p.id !== viewer.id && (await social.areFriends(viewer.id, p.id) || (messages && await messages.shareGroup(viewer.id, p.id)))) p.status = await social.statusOf(p.id);
        return p ? res(200, { profile: p }) : res(404, { error: 'No such player' });
      } else if (r.method === 'GET' && /^\/api\/users\/[\w-]+$/.test(url)) {
        const viewer = await auth.authenticate(r.token); // players only
        const p = await study.publicProfile(url.split('/')[3]);
        // 0.9.9.9.6.4: a friend's card says what they're up to (online, playing, away, last seen)
        if (p && social && p.id !== viewer.id && (await social.areFriends(viewer.id, p.id) || (messages && await messages.shareGroup(viewer.id, p.id)))) p.status = await social.statusOf(p.id);
        return p ? res(200, { profile: p }) : res(404, { error: 'No such player' });
      } else if (r.method === 'GET' && url === '/api/study') {
        const u = await auth.authenticate(r.token);
        return res(200, await study.summary(u, resolveToday(query.get('today'))));
      } else if (r.method === 'PUT' && url === '/api/study/pause') {
        // 0.9.9.9.6.3: pause / resume a deck (All spells, Onomatopoeia, Struggling)
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setPaused(u, body.deck, body.on === true);
        return res(200, await study.summary(await fresh(u), resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/study/ono-daily') {
        // 0.9.9.7: new Onomatopoeia words a day
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setOnoDaily(u, body.n, resolveToday(body.today));
        return res(200, await study.summary(await fresh(u), resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/study/daily-levels') {
        // 0.9.9.4.4: new words a day per level
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setDailyLevels(u, body.levels, resolveToday(body.today));
        return res(200, await study.summary(await fresh(u), resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/study/levels') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        await study.setStudyLevels(u, body.levels, resolveToday(body.today));
        return res(200, await study.summary(await fresh(u), resolveToday(body.today)));
      } else if (r.method === 'GET' && url === '/api/study/queue') {
        const u = await auth.authenticate(r.token);
        const deck = query.get('deck');
        const set = query.get('set'); // (0.9.9.9.9.6: one of your own decks)
        return res(200, { cards: await study.queue(u, (set ? 'custom' : isDeck(deck) ? deck : 'all') as DeckId, undefined, undefined, resolveToday(query.get('today')), set) });
      } else if (r.method === 'POST' && url === '/api/study/review') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        const tz = Number(body.tz);
        return res(200, await study.review(u, body.vocabId, body.rating, clockNow(), resolveToday(body.today), Number.isFinite(tz) && Math.abs(tz) <= 840 ? tz : 0, body.deck));
      } else if (r.method === 'POST' && url === '/api/study/undo') {
        const u = await auth.authenticate(r.token);
        const body = await r.json();
        return res(200, await study.undo(u, body.vocabId, body.deck));
      } else if (/^\/api\/kanji-pic\/[^/]{1,12}$/.test(url) && (r.method === 'GET' || r.method === 'POST')) {
        // 0.9.9.9.9.6: a kanji's AI memory picture — GET it (404: none yet), POST to have it painted (the first time)
        const ch = decodeURIComponent(url.split('/')[3]);
        if (![...ch].length || [...ch].length !== 1 || !/\p{Script=Han}/u.test(ch)) return res(400, { error: 'One kanji' });
        if (!mnemonics) return res(404, { error: 'No picture', can: false });
        if (r.method === 'GET') { const p = await mnemonics.picture(ch); return p ? { status: 200, raw: { mime: p.mime, data: p.data, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } } } as ApiResponse : res(404, { error: 'No picture yet', can: true }); }
        const u = await auth.authenticate(r.token);
        const out = await mnemonics.paint(ch, u.id);
        if (out.ok) return res(200, { url: `/api/kanji-pic/${encodeURIComponent(ch)}` });
        return res(out.why === 'limit' ? 429 : out.why === 'none' ? 404 : 502, { error: out.why === 'limit' ? 'Enough new pictures for today - more tomorrow' : out.why === 'none' ? 'No story for this kanji yet' : 'The picture could not be made right now' });
      } else if (r.method === 'GET' && url.startsWith('/api/gif-media/')) {
        // 0.9.9.9.9.6: a GIF picture through us (GIPHY is blocked in some countries); only GIPHY's media, cached a year
        if (!gifs) return res(404, { error: 'No GIFs' });
        if (!limiter.allow(`gm:${ip}`)) throw new AuthError('Too many requests — wait a minute', 429);
        const [host, ...rest] = url.slice('/api/gif-media/'.length).split('/');
        const m = await gifs.media(host ?? '', rest.join('/')).catch(() => null);
        return m ? { status: 200, raw: { mime: m.mime, data: m.data, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } } } : res(404, { error: 'No such GIF' });
      } else if (r.method === 'GET' && url === '/api/gifs') {
        const u = await auth.authenticate(r.token);
        if (!gifs) return res(503, { error: 'GIFs aren\'t switched on yet' });
        if (!limiter.allow(`gif:${u.id}`)) throw new AuthError('Too many searches — wait a minute', 429);
        try { return res(200, { gifs: await gifs.search(query.get('q') ?? '', Number(query.get('offset') ?? 0), query.get('lang') ?? 'en') }); }
        catch (e) { return res(502, { error: (e as Error).message }); }
      } else if (r.method === 'GET' && url === '/api/chess/games') {
        // 0.9.9.9.9.6 (round 4): your Kanji chess games (Match history → Chess)
        const u = await auth.authenticate(r.token);
        return res(200, { games: await study.chessGames(u.id) });
      } else if (r.method === 'POST' && url === '/api/chess/games') {
        // a game against a bot wizard (played in the app): its moves are checked, the result read from them where it can be
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`chessrec:${u.id}`)) throw new AuthError('Too many attempts — wait a minute', 429);
        const b = (await r.json(64 * 1024)) as Record<string, unknown>;
        const moves = Array.isArray(b.moves) ? (b.moves as unknown[]).filter((x): x is string => typeof x === 'string' && /^[a-h][1-8][a-h][1-8][qrbn]?$/.test(x)).slice(0, 600) : [];
        const bots = ['goblin', 'knight', 'witch', 'wizard'];
        if (!bots.includes(String(b.bot)) || !moves.length) return res(400, { error: 'Not a game' });
        const g = replay(moves);
        if (!g.ok) return res(400, { error: 'Not a game' });
        const color = b.color === 'b' ? 'b' : 'w';
        const end = outcome(g.positions[g.positions.length - 1], g.positions.slice(0, -1).map(posKey));
        const reason = end.over ? end.reason : ['resigned', 'time', 'left'].includes(String(b.reason)) ? String(b.reason) : 'left';
        const result = end.over ? (end.winner === null ? 'draw' : end.winner === color ? 'win' : 'loss') : reason === 'time' && b.result === 'win' ? 'win' : 'loss';
        const times = Array.isArray(b.times) ? (b.times as unknown[]).map((x) => Math.max(0, Math.min(3_600_000, Math.round(Number(x) || 0)))).slice(0, moves.length) : [];
        await study.addChessGame(u.id, { at: Date.now(), vs: String(b.bot), vsBot: String(b.bot), color, result, reason, moves, times, base: Number(b.base) || 0, inc: Number(b.inc) || 0 });
        return res(200, { ok: true });
      } else if (r.method === 'GET' && url === '/api/decks') {
        // 0.9.9.9.9.6: decks of your own — each with its words, how many are due and how many new
        const u = await auth.authenticate(r.token);
        const rows = await study.deckList(u, 'custom');
        await study.decks.migrate(u.id, rows.map((w) => w.vocabId)); // (round 2: Custom spells → a deck "My words", once)
        const decks = await study.decks.list(u.id);
        const now = Date.now();
        // (round 2: counted by the cards there are — like the other decks: new, learning, to review)
        return res(200, { decks: decks.map((d) => { const mine = new Set(d.words); const cards = rows.filter((w) => mine.has(w.vocabId)); return { id: d.id, name: d.name, count: cards.length, due: cards.filter((c) => c.state === 'review' && c.due <= now).length, learning: cards.filter((c) => c.state === 'learning' || c.state === 'relearning').length, fresh: cards.filter((c) => c.state === 'new').length }; }), max: USER_DECKS_MAX });
      } else if (r.method === 'POST' && url === '/api/decks') {
        const u = await auth.authenticate(r.token);
        return res(200, { deck: await deckCall(async () => study.decks.create(u.id, (await r.json()).name)) });
      } else if (/^\/api\/decks\/[\w-]{1,24}$/.test(url) && (r.method === 'PUT' || r.method === 'DELETE')) {
        const u = await auth.authenticate(r.token);
        const id = url.split('/')[3];
        if (r.method === 'DELETE') return res(200, { removed: await study.decks.remove(u, id) });
        return res(200, { deck: await deckCall(async () => study.decks.rename(u.id, id, (await r.json()).name)) });
      } else if (r.method === 'GET' && /^\/api\/decks\/[\w-]{1,24}\/words$/.test(url)) {
        const u = await auth.authenticate(r.token);
        const d = await study.decks.get(u.id, url.split('/')[3]);
        if (!d) return res(404, { error: 'No such deck' });
        const mine = new Set(d.words);
        return res(200, { name: d.name, words: (await study.deckList(u, 'custom')).filter((w) => mine.has(w.vocabId)) });
      } else if (r.method === 'POST' && /^\/api\/decks\/[\w-]{1,24}\/(words|import|remove)$/.test(url)) {
        // words typed or pasted (a list, a CSV / TSV from Quizlet or Anki), or an Anki package (.apkg, base64)
        const u = await auth.authenticate(r.token);
        const [, , , id, what] = url.split('/');
        if (!limiter.allow(`deck:${u.id}`)) throw new AuthError('Too many attempts — wait a minute', 429);
        if (what === 'remove') return res(200, { deck: await deckCall(async () => study.decks.removeWords(u, id, (await r.json()).words)) });
        const body = await r.json(what === 'import' ? 28 * 1024 * 1024 : 512 * 1024);
        let rows: ImportRow[];
        if (what === 'import') {
          if (typeof body.data !== 'string') return res(400, { error: 'No file' });
          if (!readApkg) return res(503, { error: 'Anki files need the internet - paste the words instead' });
          try { rows = await readApkg(body.data); } catch (e) { return res(400, { error: (e as Error).message }); }
        } else if (Array.isArray(body.rows)) {
          // (round 2: words picked in the deck's own window — from the dictionary, or typed in its form)
          rows = (body.rows as unknown[]).slice(0, 50).flatMap((x) => { const o = x as Record<string, unknown>; return typeof o?.kanji === 'string' && o.kanji.trim() ? [{ kanji: o.kanji.trim().slice(0, 16), reading: String(o.reading ?? '').trim().slice(0, 32), meaning: String(o.meaning ?? '').trim().slice(0, 120) }] : []; });
        } else rows = typeof body.text === 'string' ? parseList(body.text.slice(0, 400_000)) : [];
        if (!rows.length) return res(400, { error: 'No Japanese words found in it' });
        return res(200, await deckCall(() => study.decks.addWords(u, id, rows)));
      } else if (r.method === 'GET' && url === '/api/study/deck') {
        const u = await auth.authenticate(r.token);
        return res(200, { words: await study.deckList(u, query.get('deck')) });
      } else if (r.method === 'GET' && url === '/api/dict') {
        // 0.9.9.7: the dictionary — search by kanji, kana, romaji or English
        await auth.authenticate(r.token);
        if (!dict) return res(503, { error: 'The dictionary needs internet' });
        return res(200, { words: dict.search(query.get('q')), tags: query.get('tags') ? dict.tagNames() : undefined });
      } else if (r.method === 'GET' && /^\/api\/dict\/\d+$/.test(url)) {
        await auth.authenticate(r.token);
        if (!dict) return res(503, { error: 'The dictionary needs internet' });
        const e = dict.get(Number(url.split('/')[3]));
        if (!e) return res(404, { error: 'No such word' });
        const chars = [...new Set([...(e.kanji[0] ?? '')].filter((c) => /\p{Script=Han}/u.test(c)))];
        return res(200, { word: e, withKanji: Object.fromEntries(chars.map((c) => [c, dict.withKanji(c, 8).filter((x) => x.i !== e.i)])) });
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
        // 0.9.9.9.5: ?deck=all&levels=N5,N4 (the reading passage's settings)
        return res(200, { questions: await study.quiz(u, Number(query.get('n')) || 10, { deck: query.get('deck') ?? undefined, levels: query.get('levels')?.split(',') }) });
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
        return res(200, await study.summary(await fresh(u), resolveToday(body.today)));
      } else if (r.method === 'PUT' && url === '/api/me/email') {
        // 0.9.9.9.6.6: add or change your email (with your password)
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`em:${u.id}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        return res(200, await auth.setEmail(u, body.email, body.password, sendMail)); // (0.9.9.9.7: { user, pending } — a code went to it)
      } else if (r.method === 'POST' && url === '/api/me/email/confirm') {
        // 0.9.9.9.7: the code from the email
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`ec:${u.id}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        return res(200, await auth.confirmEmail(u, body.code));
      } else if (r.method === 'POST' && url === '/api/me/email/resend') {
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`em:${u.id}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        return res(200, await auth.resendConfirm(u, sendMail));
      } else if (r.method === 'POST' && url === '/api/password/forgot') {
        // 0.9.9.9.6.6: a code by email — the same answer whether or not the account exists
        if (!limiter.allow(`fg:${ip}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        // (answered at once — the email goes out in the background; a slow mail service doesn't keep the player waiting)
        void auth.forgot(body.login, (m) => extras.resetMail ? extras.resetMail(m) : Promise.resolve()).catch((e) => console.error('[reset mail]', e));
        return res(200, { sent: true });
      } else if (r.method === 'POST' && url === '/api/password/reset') {
        if (!limiter.allow(`rs:${ip}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        return res(200, await auth.resetPassword(body.login, body.code, body.password));
      } else if (r.method === 'DELETE' && url === '/api/me') {
        // 0.9.9.9.9.5: delete your own account (with your password)
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`del:${u.id}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const b = (await r.json().catch(() => ({}))) as { password?: unknown };
        await auth.deleteSelf(u, b.password);
        return res(200, { ok: true });
      } else if (r.method === 'POST' && url === '/api/me/signout-others') {
        // 0.9.9.9.8: sign out on all other devices
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`so:${u.id}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        return res(200, await auth.signOutOthers(u));
      } else if (r.method === 'PUT' && url === '/api/me/password') {
        // 0.9.9.9.6.5: change your password (with the current one); every other device is signed out
        const u = await auth.authenticate(r.token);
        if (!limiter.allow(`pw:${u.id}`)) throw new AuthError('Too many attempts - wait a minute', 429);
        const body = await r.json();
        return res(200, await auth.changePassword(u, body.current, body.password));
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
        return res(200, await study.snapshot(u, daily?.keyFor(u, query.get('today'))));
      } else {
        return res(404, { error: 'Not found' });
      }
    } catch (e) {
      if (e instanceof AuthError || e instanceof StudyError || e instanceof DailyError || e instanceof SocialError || e instanceof InsightsError || e instanceof MessageError) return res(e.status, { error: e.message });
      if (isTransientDbError(e)) {
        if (canRetry) return RETRY;
        // still not reachable (or not a GET): one "database unreachable" row in the Inbox, counted, not one per URL
        onError?.('database unreachable', e);
        return res(503, { error: 'The server is busy - try again in a moment.' });
      }
      onError?.(`${r.method} ${url}`, e);
      return res(500, { error: 'Server error' });
    }
  };
  return route;
}
