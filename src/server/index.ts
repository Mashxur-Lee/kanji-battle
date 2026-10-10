import { VERSION } from '../shared/version';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
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

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const TYPES: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };

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
const api = createApiHandler(auth, study, { presence: (id) => hub.presence(id), daily, social, strokes: (ch) => recognizer.strokes(ch) });

// ── game ──────────────────────────────────────────────────────────────────────
const rooms = new RoomManager({
  judgeWriting: createWritingJudge(recognizer),
  judgeDeck: createWritingJudge(recognizer, { lenient: true }), // Deck Duel: extra forgiving
  writableFilter: isWritable(recognizer),
  // after every match: XP + missed words into each player's "Struggling spells"
  onMatchEnd: async (mode, results) => {
    const out: Record<string, { gained: number; xp: number; crit: number; achievements: string[] }> = {};
    for (const r of results) {
      const { gained, xp, achievements } = await study.recordMatch(r.id, r.outcome, r.accuracy, mode, r.missed, r.forfeited, r.vsAi, r.record, r.seen);
      out[r.id] = { gained, xp, crit: await study.crit(r.id), achievements };
    }
    return out;
  },
});
const matchmaker = new Matchmaker(rooms);
auth.onBan((userId) => hub.kick(userId, 'This account has been banned.'));

const server = createServer(async (req, res) => {
  if (await api(req, res)) return;
  const pathOnly = (req.url ?? '/').split('?')[0];
  const url = pathOnly === '/' ? '/index.html' : pathOnly; // '/?anything' is the app too
  const file = path.join(PUBLIC_DIR, path.normalize(url));
  if (!file.startsWith(PUBLIC_DIR)) { res.writeHead(403).end(); return; }
  try {
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' }).end(data);
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
