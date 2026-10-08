import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { WebSocketServer } from 'ws';
import { RoomManager } from './RoomManager';
import { Session } from './Session';

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const TYPES: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css' };

const server = createServer(async (req, res) => {
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

const rooms = new RoomManager();
const wss = new WebSocketServer({ server, maxPayload: 4 * 1024 }); // clients only send tiny JSON messages
wss.on('connection', (ws) => {
  const session = new Session(rooms, (json) => ws.readyState === ws.OPEN && ws.send(json));
  ws.on('message', (data) => session.onRaw(data.toString()));
  ws.on('close', () => session.onClose());
});

const port = Number(process.env.PORT ?? 3000);
server.listen(port, () => console.log(`Kanji Battle running on http://localhost:${port}`));
