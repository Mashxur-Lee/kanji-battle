import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { WebSocketServer } from 'ws';
import { AuthService } from './auth/AuthService';
import { SupabaseUserStore } from './auth/SupabaseUserStore';
import { TokenSigner } from './auth/tokens';
import { FileUserStore, type UserStore } from './auth/UserStore';
import { createWritingJudge, isWritable } from './handwriting/judge';
import { Recognizer } from './handwriting/recognizer';
import { createApiHandler } from './http';
import { RoomManager } from './RoomManager';
import { Session, SessionHub } from './Session';

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const TYPES: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css' };

// ── accounts ──────────────────────────────────────────────────────────────────
function makeStore(): UserStore {
  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) return new SupabaseUserStore(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  return new FileUserStore(process.env.USERS_FILE ?? path.resolve(__dirname, '../../.data/users.json'));
}
const tokens = new TokenSigner();
const auth = new AuthService(makeStore(), tokens);
const api = createApiHandler(auth);

// ── game ──────────────────────────────────────────────────────────────────────
const recognizer = Recognizer.fromFile();
const rooms = new RoomManager({ judgeWriting: createWritingJudge(recognizer), writableFilter: isWritable(recognizer) });
const hub = new SessionHub();
auth.onBan((userId) => hub.kick(userId, 'This account has been banned.'));

const server = createServer(async (req, res) => {
  if (await api(req, res)) return;
  const url = req.url === '/' ? '/index.html' : (req.url ?? '/').split('?')[0];
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
  const session = new Session(rooms, auth, hub, (json) => ws.readyState === ws.OPEN && ws.send(json), () => ws.close());
  ws.on('message', (data) => void session.onRaw(data.toString()));
  ws.on('close', () => session.onClose());
});

const port = Number(process.env.PORT ?? 3000);
auth.seed([
  { username: 'user', password: process.env.USER_PASSWORD ?? 'user123', role: 'user' },
  { username: 'admin', password: process.env.ADMIN_PASSWORD ?? 'adminn123', role: 'admin' },
]).then(() => {
  server.listen(port, () => {
    console.log(`Kanji Battle running on http://localhost:${port}`);
    console.log(`Accounts: ${auth.store.name}${tokens.ephemeral ? ' · AUTH_SECRET not set: logins reset on restart' : ''}`);
    if (!process.env.ADMIN_PASSWORD) console.warn('ADMIN_PASSWORD not set: the admin account uses the default password from the README');
  });
}).catch((e) => {
  console.error('Could not start (account storage unreachable?)', e);
  process.exit(1);
});
