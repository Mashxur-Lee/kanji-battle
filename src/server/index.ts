import { VERSION } from '../shared/version';
import type { MissedWord } from '../shared/protocol';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
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
import { Session, SessionHub } from './Session';
import { Matchmaker } from './Matchmaker';
import { StoryService } from './study/StoryService';
import { InsightsService } from './study/InsightsService';
import { onServerError, reportServerError } from './errors';

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const TYPES: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json; charset=utf-8' };

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
const hub = new SessionHub();
const daily = new DailyService(store, study.progress);
daily.onPerfect = (id) => study.grantAchievements(id, undefined, ['perfect-day']);
const social = new SocialService(store, hub);
const recognizer = Recognizer.fromFile();
const insights = new InsightsService(store);
onServerError((message, details) => void insights.error(message, details, null));
const stories = new StoryService();
console.log(`Reading passage stories: ${stories.describe}`);
const api = createApiHandler(auth, study, { presence: (id) => hub.presence(id), daily, social, strokes: (ch) => recognizer.strokes(ch), insights, onlineCount: () => hub.onlineCount, stories });

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
let apkCache: { at: number; data: Buffer } | null = null;
async function latestApk(): Promise<Buffer> {
  if (apkCache && Date.now() - apkCache.at < 10 * 60_000) return apkCache.data;
  const r = await fetch(APK_URL, { redirect: 'follow' });
  if (!r.ok) throw new Error(`APK ${r.status}`);
  apkCache = { at: Date.now(), data: Buffer.from(await r.arrayBuffer()) };
  return apkCache.data;
}

const GZ = new Map<string, Buffer>();
const server = createServer(async (req, res) => {
  if (await api(req, res)) return;
  const pathOnly = (req.url ?? '/').split('?')[0];
  if (pathOnly === '/download/KanjiWizards.apk') {
    try {
      const data = await latestApk();
      res.writeHead(200, { 'Content-Type': 'application/vnd.android.package-archive', 'Content-Disposition': 'attachment; filename="KanjiWizards.apk"', 'Content-Length': data.length, 'Cache-Control': 'no-cache' }).end(data);
    } catch (e) {
      reportServerError('APK download', e);
      res.writeHead(302, { Location: APK_URL }).end(); // GitHub directly, then
    }
    return;
  }
  const url = pathOnly === '/' ? '/index.html' : pathOnly; // '/?anything' is the app too
  const file = path.join(PUBLIC_DIR, path.normalize(url));
  if (!file.startsWith(PUBLIC_DIR)) { res.writeHead(403).end(); return; }
  try {
    const data = await readFile(file);
    const type = TYPES[path.extname(file)] ?? 'application/octet-stream';
    // the service worker and the page are checked for a new version every time (0.9.9.4)
    const fresh: Record<string, string> = url === '/sw.js' || url === '/index.html' ? { 'Cache-Control': 'no-cache' } : {};
    // text files go out gzipped (app.js, arena3d.js and the Russian meanings are large); cached per build
    if (/text|json|javascript|svg/.test(type) && /\bgzip\b/.test(String(req.headers['accept-encoding'] ?? '')) && data.length > 1024) {
      const key = `${file}:${data.length}`;
      let gz = GZ.get(key);
      if (!gz) { gz = gzipSync(data); GZ.set(key, gz); }
      res.writeHead(200, { 'Content-Type': type, 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding', ...fresh }).end(gz);
      return;
    }
    res.writeHead(200, { 'Content-Type': type, ...fresh }).end(data);
  } catch {
    res.writeHead(404).end('Not found');
  }
});

// Handwriting answers carry stroke data, so allow bigger frames than plain JSON messages.
const wss = new WebSocketServer({ server, maxPayload: 96 * 1024 });
wss.on('connection', (ws) => {
  const session = new Session(rooms, auth, hub, study, (json) => ws.readyState === ws.OPEN && ws.send(json), () => ws.close(), matchmaker, social);
  ws.on('message', (data) => void session.onRaw(data.toString()));
  ws.on('close', () => session.onClose());
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
store.init().then(() => auth.seed([
  { username: 'user', password: process.env.USER_PASSWORD ?? 'user123', role: 'user' },
  { username: 'admin', password: process.env.ADMIN_PASSWORD ?? 'adminn123', role: 'admin' },
])).then(() => {
  server.listen(port, () => {
    console.log(`Kanji Battle running on http://localhost:${port}`);
    console.log(`Kanji Wizards v${VERSION}`);
    console.log(`Accounts: ${auth.store.name}${tokens.ephemeral ? ' · AUTH_SECRET not set: logins reset on restart' : ''}`);
    if (process.env.RENDER && !process.env.DATABASE_URL) {
      console.warn('DATABASE_URL is not set: accounts, XP and study sets live on Render\'s disk and are wiped on every deploy. Add your Neon connection string in Render → Environment.');
    }
    if (!process.env.ADMIN_PASSWORD) console.warn('ADMIN_PASSWORD not set: the admin account uses the default password from the README');
  });
}).catch((e) => {
  console.error('Could not start (database unreachable? check DATABASE_URL)', e);
  process.exit(1);
});
