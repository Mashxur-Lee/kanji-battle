import { VERSION } from '../shared/version';
import type { MissedWord } from '../shared/protocol';
import { createServer, type IncomingMessage } from 'node:http';
import { readFile } from 'node:fs/promises';
import { brotliCompressSync, constants as zc, gzipSync } from 'node:zlib';
import path from 'node:path';
import { WebSocketServer } from 'ws';
import { AuthService } from './auth/AuthService';
import { TokenSigner } from './auth/tokens';
import { PgStore } from './db/PgStore';
import { FileStore, type Store } from './db/Store';
import { createWritingJudge, isWritable } from './handwriting/judge';
import { Recognizer } from './handwriting/recognizer';
import { createApiHandler } from './http';
import { StudyService } from './study/StudyService';
import { DailyService } from './study/DailyService';
import { SocialService } from './study/SocialService';
import { RoomManager } from './RoomManager';
import { deviceOf, Session, SessionHub } from './Session';
import { Push, type PushNote } from './push';
import { Bucket, clientIp, inlineScriptHashes, isPublicServer, securityHeaders, viaHttps } from './security';
import { Matchmaker } from './Matchmaker';
import { StoryService } from './study/StoryService';
import { InsightsService } from './study/InsightsService';
import { isMuted, MessageService } from './study/MessageService';
import { onServerError, reportServerError } from './errors';
import { DictService } from './study/DictService';

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const TYPES: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.glb': 'model/gltf-binary', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.json': 'application/json; charset=utf-8' };

// ── accounts ──────────────────────────────────────────────────────────────────
/** Neon / any Postgres when DATABASE_URL is set; otherwise a local JSON file (wiped on Render's free disk!). */
function makeStore(): Store {
  if (process.env.DATABASE_URL) return new PgStore(process.env.DATABASE_URL);
  return new FileStore(process.env.USERS_FILE ?? path.resolve(__dirname, '../../.data/users.json'));
}
const store = makeStore();
const tokens = new TokenSigner();
const auth = new AuthService(store, tokens);
const study = new StudyService(store);
const hub = new SessionHub((userId, at) => { void store.update(userId, { lastSeen: at }).catch(() => { /* not important */ }); });
const daily = new DailyService(store, study.progress);
daily.onPerfect = (id) => study.grantAchievements(id, undefined, ['perfect-day']);
const social = new SocialService(store, hub);
// 0.9.9.9.5.3: a friend coming online (or leaving) shows at once — the friends list and the lobby's invite list
// used to wait for their next refresh (the lobby's never came until the room changed)
hub.setPresenceHook((userId, online) => {
  void store.friends(userId).then((links) => {
    for (const f of links) if (f.status === 'accepted') hub.sendTo(f.id, { type: 'friend_presence', friendId: userId, online });
  }).catch(() => { /* not important */ });
});
// 0.9.9.9.5: invites reach a friend's phone while the app is closed (Firebase; FIREBASE_SERVICE_ACCOUNT)
const push = new Push(process.env.FIREBASE_SERVICE_ACCOUNT);
console.log(`Push notifications: ${push.enabled ? 'on' : 'off (set FIREBASE_SERVICE_ACCOUNT to turn them on)'}`);
/** 0.9.9.9.5.3: the notification itself, in the language of the game on that phone */
function noteFor(data: Record<string, string>, unlocks: readonly string[] | undefined): PushNote | undefined {
  const ru = (unlocks ?? []).includes('plang:ru');
  if (data.kind === 'invite') return ru
    ? { title: `⚔ ${data.fromName} приглашает вас`, body: `Комната ${data.mode} · ${data.code} — нажмите, чтобы присоединиться`, tag: `invite-${data.fromId}` }
    : { title: `⚔ ${data.fromName} invites you`, body: `Join their ${data.mode} room · ${data.code} — tap to join`, tag: `invite-${data.fromId}` };
  // 0.9.9.9.6: a message in the messenger
  if (data.kind === 'dm') return { title: `✉ ${data.fromName}`, body: data.text, tag: `dm-${data.fromId}` };
  if (data.kind === 'test') return ru
    ? { title: '✓ Уведомления работают', body: 'Так придёт приглашение друга, даже когда игра закрыта.', tag: 'test' }
    : { title: '✓ Invite notifications work', body: 'This is how a friend’s invite reaches you, even with the game closed.', tag: 'test' };
  return undefined;
}
hub.setNotifier(async (userId, data) => {
  if (!push.enabled) return false;
  const u = await store.findById(userId);
  const tokens = u?.pushTokens ?? [];
  if (!tokens.length) return false;
  try {
    const r = await push.send(tokens, data, data.kind === 'dm' ? 86_400 : 120, noteFor(data, u?.unlocks));
    if (r.dead.length) await store.update(userId, { pushTokens: tokens.filter((t) => !r.dead.includes(t)) });
    // 0.9.9.9.5.2: a push Google refused shows in the admin's errors (it failed without a word before)
    if (!r.sent && r.errors.length && r.dead.length < tokens.length) reportServerError('push', new Error(r.errors.join(' | ')));
    return r.sent > 0;
  } catch (e) { reportServerError('push', e); return false; }
});
// 0.9.9.9.6: the messenger — live over the game's connection, or a push when the app is closed
const messages = new MessageService(store, {
  deliver: (to, message, fromName) => {
    const msg = { type: 'dm' as const, message, fromName };
    if (to === 'admins') hub.sendAdmins(msg);
    else for (const id of to) {
      // (0.9.9.9.6.1: muted: it still arrives, marked, and the app shows no note for it)
      void store.findById(id).then((u) => hub.sendTo(id, isMuted(u?.unlocks, message.from) ? { ...msg, muted: true } : msg)).catch(() => hub.sendTo(id, msg));
    }
  },
  read: (writer, reader) => {
    const msg = { type: 'dm_read' as const, reader: reader };
    if (writer === 'support') hub.sendAdmins(msg); else hub.sendTo(writer, msg);
  },
  push: (to, fromId, fromName, text) => { void hub.notify(to, { kind: 'dm', fromId, fromName, text: text.slice(0, 160) }); },
  online: (id) => hub.online(id),
});
const pushTested = new Map<string, number>(); // (one test every few seconds)
const recognizer = Recognizer.fromFile();
const insights = new InsightsService(store);
onServerError((message, details) => void insights.error(message, details, null));
const stories = new StoryService();
console.log(`Reading passage stories: ${stories.describe}`);
const api = createApiHandler(auth, study, { presence: (id) => hub.presence(id), daily, social, strokes: (ch) => recognizer.strokes(ch), insights, onlineCount: () => hub.onlineCount, stories, dict: new DictService(), inviteDecline: (id, name, fromId) => hub.decline(id, name, fromId), pushOn: () => push.enabled, messages,
  // 0.9.9.9.5.2: Settings → "Test invite notification": the whole way, with what went wrong
  pushTest: async (userId, delaySec = 0) => {
    if (!push.enabled) return { ok: false, reason: 'server-off' };
    if ((pushTested.get(userId) ?? 0) > Date.now() - 8000) return { ok: false, reason: 'wait' };
    pushTested.set(userId, Date.now());
    const u = await store.findById(userId);
    const tokens = u?.pushTokens ?? [];
    if (!tokens.length) return { ok: false, reason: 'no-phone' };
    if (delaySec > 0) await new Promise((ok) => setTimeout(ok, delaySec * 1000)); // (time to leave the app: the real case)
    const r = await push.send(tokens, { kind: 'test' }, 60, noteFor({ kind: 'test' }, u?.unlocks));
    if (r.dead.length) await store.update(userId, { pushTokens: tokens.filter((t) => !r.dead.includes(t)) });
    return r.sent ? { ok: true, sent: r.sent, phones: tokens.length } : { ok: false, reason: r.dead.length === tokens.length ? 'stale' : 'refused', errors: r.errors.slice(0, 3) };
  } });

// ── game ──────────────────────────────────────────────────────────────────────
const rooms = new RoomManager({
  judgeWriting: createWritingJudge(recognizer),
  judgeDeck: createWritingJudge(recognizer, { lenient: true }), // Deck Duel: extra forgiving
  writableFilter: isWritable(recognizer),
  // Deck Duel drafts from both players' All spells (0.9.9.4.4)
  spellIds: async (id) => new Set((await store.cards(id)).filter((c) => (c.deck ?? 'all') === 'all').map((c) => c.vocabId)),
  // after every match: XP + missed words into each player's "Struggling spells"
  onGameStart: (mode, playerIds) => { for (const id of playerIds) void insights.event(id, `game_start:${mode}`); },
  onMatchEnd: async (mode, results) => {
    for (const r of results) void insights.event(r.id, `game_end:${mode}`);
    const out: Record<string, { gained: number; xp: number; crit: number; achievements: string[]; missed: MissedWord[] }> = {};
    // 0.9.9.3.4: "Kingslayer" — winning against an admin who played it out (no forfeit)
    const admins = new Set<string>();
    for (const r of results) if ((await store.findById(r.id))?.role === 'admin') admins.add(r.id);
    for (const r of results) {
      const beatAdmin = r.outcome === 'win' && results.some((o) => o.id !== r.id && o.outcome === 'loss' && !o.forfeited && admins.has(o.id));
      const { gained, xp, achievements, missed } = await study.recordMatch(r.id, r.outcome, r.accuracy, mode, r.missed, r.forfeited, r.vsAi, r.record, r.seen, beatAdmin);
      out[r.id] = { gained, xp, crit: await study.crit(r.id), achievements, missed };
    }
    return out;
  },
});
const matchmaker = new Matchmaker(rooms);
setInterval(() => matchmaker.tick(), 2_000).unref();
auth.onBan((userId) => hub.kick(userId, 'This account has been banned.'));

// 0.9.9.4.1: the Android app from the game's own address. Opening GitHub's link from the installed game
// went through an in-app browser tab where Chrome can't ask "download this APK?" — the download failed
// at 100%. Same address = the download stays in the game's window. Fetched from the latest GitHub release
// and kept for 10 minutes.
const APK_URL = process.env.APK_URL ?? 'https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download/KanjiWizards.apk';
let apkCache: { at: number; data: Buffer; v?: string } | null = null;
/** `want`: the release the in-app updater (0.9.9.6.1) saw — a cached copy from before it is fetched again. */
async function latestApk(want?: string): Promise<Buffer> {
  const age = apkCache ? Date.now() - apkCache.at : Infinity;
  if (apkCache && (age < 60_000 || (age < 10 * 60_000 && (!want || apkCache.v === want)))) return apkCache.data;
  const r = await fetch(APK_URL, { redirect: 'follow' });
  if (!r.ok) throw new Error(`APK ${r.status}`);
  apkCache = { at: Date.now(), data: Buffer.from(await r.arrayBuffer()), v: want };
  return apkCache.data;
}

const GZ = new Map<string, Buffer>();
let pageHashes: string[] = [];
let pageHashesFor = -1;
const server = createServer(async (req, res) => {
  if (await api(req, res)) return;
  const pathOnly = (req.url ?? '/').split('?')[0];
  if (pathOnly === '/download/KanjiWizards.apk') {
    try {
      const want = new URL(req.url ?? '/', 'http://x').searchParams.get('v')?.slice(0, 32) || undefined;
      const data = await latestApk(want);
      res.writeHead(200, { 'Content-Type': 'application/vnd.android.package-archive', 'Content-Disposition': 'attachment; filename="KanjiWizards.apk"', 'Content-Length': data.length, 'Cache-Control': 'no-cache' }).end(data);
    } catch (e) {
      reportServerError('APK download', e);
      res.writeHead(302, { Location: APK_URL }).end(); // GitHub directly, then
    }
    return;
  }
  const url = pathOnly === '/' ? '/index.html' : pathOnly; // '/?anything' is the app too
  const file = path.join(PUBLIC_DIR, path.normalize(url));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) { res.writeHead(403).end(); return; } // (+ sep: not a sibling folder)
  try {
    const data = await readFile(file);
    const type = TYPES[path.extname(file)] ?? 'application/octet-stream';
    // the service worker and the page are checked for a new version every time (0.9.9.4)
    // 0.9.9.9.5: + the security headers (the page's inline script allowed by its hash)
    if (url === '/index.html' && pageHashesFor !== data.length) { pageHashes = inlineScriptHashes(data.toString('utf8')); pageHashesFor = data.length; }
    const fresh: Record<string, string> = { ...securityHeaders(pageHashes, viaHttps(req)), ...(url === '/sw.js' || url === '/index.html' ? { 'Cache-Control': 'no-cache' } : url.startsWith('/bg/') || url.startsWith('/models/') ? { 'Cache-Control': 'public, max-age=604800' } : {}) };
    // text files go out gzipped (app.js, arena3d.js and the Russian meanings are large); cached per build
    // 0.9.9.9: Brotli where the browser takes it (the dictionary ~25% smaller than gzip), else gzip
    const accept = String(req.headers['accept-encoding'] ?? '');
    const enc = /\bbr\b/.test(accept) ? 'br' : /\bgzip\b/.test(accept) ? 'gzip' : '';
    if (enc && /text|json|javascript|svg|gltf/.test(type) && data.length > 1024) { // (0.9.9.9.5.2: the 3D models too — about half the size)
      const key = `${enc}:${file}:${data.length}`;
      let gz = GZ.get(key);
      if (!gz) {
        gz = enc === 'br'
          ? brotliCompressSync(data, { params: { [zc.BROTLI_PARAM_QUALITY]: data.length > 2e6 ? 9 : 11, [zc.BROTLI_PARAM_SIZE_HINT]: data.length } })
          : gzipSync(data, { level: 9 });
        GZ.set(key, gz);
      }
      res.writeHead(200, { 'Content-Type': type, 'Content-Encoding': enc, Vary: 'Accept-Encoding', ...fresh }).end(gz);
      return;
    }
    res.writeHead(200, { 'Content-Type': type, ...fresh }).end(data);
  } catch {
    res.writeHead(404, { 'X-Content-Type-Options': 'nosniff' }).end('Not found');
  }
});

// Handwriting answers carry stroke data, so allow bigger frames than plain JSON messages.
const wss = new WebSocketServer({ server, maxPayload: 96 * 1024 });
// 0.9.9.9.5: at most 12 game connections from one address at once (a family or a school shares one; a script
// opening hundreds doesn't get them), and each connection may send a few messages a second — a flood is cut off
const perIp = new Map<string, number>();
wss.on('connection', (ws, ...rest: unknown[]) => {
  const req = rest[0] as IncomingMessage | undefined; // (the upgrade request: its User-Agent says app or browser)
  const ip = req ? clientIp(req) : '';
  const n = (perIp.get(ip) ?? 0) + 1;
  if (n > 12) { ws.close(1008, 'Too many connections'); return; }
  perIp.set(ip, n);
  const session = new Session(rooms, auth, hub, study, (json) => ws.readyState === ws.OPEN && ws.send(json), () => ws.close(), matchmaker, social);
  session.device = deviceOf(req?.headers['user-agent']);
  const bucket = new Bucket(60, 20);
  let dropped = 0;
  ws.on('message', (data) => {
    if (!bucket.take()) { if (++dropped > 200) ws.close(1008, 'Too many messages'); return; }
    void session.onRaw(data.toString());
  });
  ws.on('close', () => {
    session.onClose();
    const left = (perIp.get(ip) ?? 1) - 1;
    if (left > 0) perIp.set(ip, left); else perIp.delete(ip);
  });
});

// stability: an unexpected error is logged and reported, and the server keeps running for everyone else
process.on('uncaughtException', (e) => reportServerError('uncaught exception', e));
process.on('unhandledRejection', (e) => reportServerError('unhandled rejection', e));
// a restart (deploy): tell everyone, then close — the browsers reconnect by themselves
let stopping = false;
for (const sig of ['SIGTERM', 'SIGINT'] as const) {
  process.on(sig, () => {
    if (stopping) return;
    stopping = true;
    hub.broadcast({ type: 'notice', message: 'The game is updating — you\'ll be reconnected in a moment.' });
    setTimeout(() => { server.close(); void store.close?.(); process.exit(0); }, 1200).unref();
  });
}

const port = Number(process.env.PORT ?? 3000);
// 0.9.9.9.5: the built-in accounts' default passwords are in the public README — on a public server they are
// only made with passwords from the environment, and if one still has its default password it gets locked
store.init().then(() => auth.seed([
  { username: 'user', password: process.env.USER_PASSWORD ?? 'user123', role: 'user', fromEnv: !!process.env.USER_PASSWORD },
  { username: 'admin', password: process.env.ADMIN_PASSWORD ?? 'adminn123', role: 'admin', fromEnv: !!process.env.ADMIN_PASSWORD },
], isPublicServer())).then(() => {
  server.listen(port, () => {
    console.log(`Kanji Battle running on http://localhost:${port}`);
    console.log(`Kanji Wizards v${VERSION}`);
    console.log(`Accounts: ${auth.store.name}${tokens.ephemeral ? ' · AUTH_SECRET not set: logins reset on restart' : ''}`);
    if (process.env.RENDER && !process.env.DATABASE_URL) {
      console.warn('DATABASE_URL is not set: accounts, XP and study sets live on Render\'s disk and are wiped on every deploy. Add your Neon connection string in Render → Environment.');
    }
    if (!process.env.ADMIN_PASSWORD) console.warn(isPublicServer() ? 'ADMIN_PASSWORD not set: no admin account with the README password on a public server — set ADMIN_PASSWORD to sign in as admin' : 'ADMIN_PASSWORD not set: the admin account uses the default password from the README');
  });
}).catch((e) => {
  console.error('Could not start (database unreachable? check DATABASE_URL)', e);
  process.exit(1);
});
