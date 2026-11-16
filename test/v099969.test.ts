import assert from 'node:assert/strict';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { AuthService, GUEST_TTL_MS, isGuest } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';
import { createApiHandler } from '../src/server/http';
import { StudyService } from '../src/server/study/StudyService';
import { keepAwake } from '../src/server/keepAwake';

const src = (f: string) => readFileSync(f, 'utf8');

async function serve() {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const api = createApiHandler(auth, study, {});
  const server: Server = createServer((req, res) => void api(req, res).then((ok) => { if (!ok) res.writeHead(404).end(); }));
  await new Promise<void>((r) => server.listen(0, r));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  const call = async (method: string, url: string, token?: string, body?: unknown) => {
    const r = await fetch(base + url, { method, headers: token ? { Authorization: `Bearer ${token}` } : {}, body: body === undefined ? undefined : JSON.stringify(body) });
    return { status: r.status, body: (await r.json()) as any };
  };
  return { store, auth, server, call };
}

test('0.9.9.9.6.9 guests: play at once — a made-up login, no email, everything but messages and friends', async () => {
  const { store, server, call } = await serve();
  try {
    const g = await call('POST', '/api/guest');
    assert.equal(g.status, 200);
    assert.match(g.body.user.username, /^guest-[0-9a-f]{7}$/);
    assert.equal(g.body.user.guest, true);
    assert.equal(g.body.user.email, null);
    const me = await call('GET', '/api/me', g.body.token);
    assert.equal(me.status, 200, 'a guest is signed in');
    assert.equal(me.body.user.guest, true);
    // study works
    assert.equal((await call('PUT', '/api/study/daily-levels', g.body.token, { levels: { N5: 5 } })).status, 200);
    // writing to people doesn't
    for (const [m, u] of [['POST', '/api/friends'], ['POST', '/api/groups'], ['PUT', '/api/me/nickname'], ['PUT', '/api/me/avatar'], ['POST', '/api/messages/abc']] as const) {
      const r = await call(m, u, g.body.token, { username: 'x', name: 'x', text: 'hi' });
      assert.equal(r.status, 403, `${m} ${u}`);
      assert.match(r.body.error, /Save your account first/);
    }
    assert.ok(isGuest((await store.findById(g.body.user.id))!));
  } finally { server.close(); }
});

test('0.9.9.9.6.9 a guest saves the account: same id and progress, a login, a password and an email', async () => {
  const { store, auth, server, call } = await serve();
  try {
    const g = await call('POST', '/api/guest');
    await store.addXp(g.body.user.id, 120);
    await auth.register('takenname', 'secret12', 'taken@mail.ru');
    assert.equal((await call('POST', '/api/guest/claim', g.body.token, { username: 'takenname', password: 'secret12', email: 'me@mail.ru' })).status, 409);
    assert.match((await call('POST', '/api/guest/claim', g.body.token, { username: 'mine', password: 'secret12', email: 'taken+x@mail.ru' })).body.error, /already has an account/);
    assert.match((await call('POST', '/api/guest/claim', g.body.token, { username: 'guest-me', password: 'secret12', email: 'me@mail.ru' })).body.error, /login of your own/);
    const c = await call('POST', '/api/guest/claim', g.body.token, { username: 'Hikari', password: 'secret12', email: 'me@mail.ru' });
    assert.equal(c.status, 200);
    assert.equal(c.body.user.id, g.body.user.id, 'the same account');
    assert.equal(c.body.user.guest, undefined);
    assert.equal(c.body.user.username, 'hikari');
    const rec = (await store.findById(g.body.user.id))!;
    assert.equal(rec.xp, 120, 'progress kept');
    assert.equal(isGuest(rec), false);
    assert.equal(rec.emailKey, 'me@mail.ru');
    // the guest's token still works; the login and password too
    assert.equal((await call('GET', '/api/me', g.body.token)).status, 200);
    assert.equal((await call('POST', '/api/login', undefined, { username: 'hikari', password: 'secret12' })).status, 200);
    // now friends work, and it can't be "claimed" twice
    assert.notEqual((await call('POST', '/api/friends', c.body.token, { username: 'takenname' })).status, 403);
    assert.equal((await call('POST', '/api/guest/claim', c.body.token, { username: 'other', password: 'secret12', email: 'o@mail.ru' })).status, 409);
    // nobody can sign up as a guest-looking login
    await assert.rejects(auth.register('guest-1234567', 'secret12', 'g@mail.ru'), /login of your own/);
  } finally { server.close(); }
});

test('0.9.9.9.6.9 guests not seen for a month are removed; saved accounts and recent guests stay', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const old = await auth.guest(), recent = await auth.guest();
  const now = Date.now() + GUEST_TTL_MS + 86_400_000;
  await store.update(recent.user.id, { lastSeen: now - 3_600_000 });
  await auth.register('keeper', 'secret12', 'k@mail.ru');
  assert.equal(await auth.sweepGuests(now), 1);
  assert.equal(await store.findById(old.user.id), null);
  assert.ok(await store.findById(recent.user.id));
  assert.ok(await store.findByUsername('keeper'));
});

test('0.9.9.9.6.9 keep awake: asks its own public address every 10 minutes on Render (off with KEEP_AWAKE=0)', async () => {
  assert.equal(keepAwake({}), null, 'not on Render: nothing');
  assert.equal(keepAwake({ RENDER_EXTERNAL_URL: 'https://x.onrender.com', KEEP_AWAKE: '0' }), null);
  const asked: string[] = [];
  const k = keepAwake({ RENDER_EXTERNAL_URL: 'https://x.onrender.com' }, 20, async (u) => { asked.push(u); })!;
  assert.equal(k.url, 'https://x.onrender.com/api/online');
  await new Promise((r) => setTimeout(r, 75));
  k.stop();
  assert.ok(asked.length >= 2 && asked.every((u) => u === k.url));
  assert.match(src('src/server/index.ts'), /const awake = keepAwake\(\);/);
});

test('0.9.9.9.6.9 the client: Play now on the sign-in screen, Save progress by your name; the bundles are built, not tracked', () => {
  const html = src('public/index.html');
  assert.match(html, /id="guestPlay"/);
  assert.match(html, /id="guestSave" class="guest-save" hidden/);
  assert.match(src('src/client/main.ts'), /const res = await api\.guest\(\);/);
  assert.match(src('src/client/account.ts'), /export function claimDialog\(/);
  const ignore = src('.gitignore');
  for (const f of ['public/app.js', 'public/arena3d.js', 'public/sw.js']) assert.match(ignore, new RegExp(`^${f.replace('.', '\\.')}$`, 'm'));
});
