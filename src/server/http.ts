import type { IncomingMessage, ServerResponse } from 'node:http';
import { AuthError, type AuthService } from './auth/AuthService';

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

function readJson(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks: Buffer[] = [];
    req.on('data', (c: Buffer) => {
      size += c.length;
      if (size > MAX_BODY) { reject(new AuthError('Request too large', 413)); req.destroy(); return; }
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
export function createApiHandler(auth: AuthService) {
  const limiter = new RateLimiter(20, 60_000);

  return async (req: IncomingMessage, res: ServerResponse): Promise<boolean> => {
    const url = (req.url ?? '/').split('?')[0];
    if (!url.startsWith('/api/')) return false;
    const ip = String(req.headers['x-forwarded-for'] ?? req.socket.remoteAddress ?? '').split(',')[0].trim();
    try {
      if (req.method === 'POST' && (url === '/api/register' || url === '/api/login')) {
        if (!limiter.allow(ip)) throw new AuthError('Too many attempts — wait a minute', 429);
        const body = await readJson(req);
        const result = url === '/api/register' ? await auth.register(body.username, body.password) : await auth.login(body.username, body.password);
        send(res, 200, result);
      } else if (req.method === 'GET' && url === '/api/me') {
        const u = await auth.authenticate(bearer(req));
        send(res, 200, { user: { id: u.id, username: u.username, role: u.role } });
      } else if (req.method === 'GET' && url === '/api/admin/users') {
        await auth.requireAdmin(bearer(req));
        send(res, 200, { users: await auth.listUsers() });
      } else if (req.method === 'POST' && /^\/api\/admin\/users\/[\w-]+\/ban$/.test(url)) {
        const admin = await auth.requireAdmin(bearer(req));
        const body = await readJson(req);
        const id = url.split('/')[4];
        send(res, 200, { user: await auth.setBanned(admin, id, body.banned === true) });
      } else {
        send(res, 404, { error: 'Not found' });
      }
    } catch (e) {
      if (e instanceof AuthError) send(res, e.status, { error: e.message });
      else { console.error(e); send(res, 500, { error: 'Server error' }); }
    }
    return true;
  };
}
