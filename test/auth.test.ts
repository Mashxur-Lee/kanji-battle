import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { hashPassword, verifyPassword } from '../src/server/auth/passwords';
import { SupabaseUserStore } from '../src/server/auth/SupabaseUserStore';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryUserStore } from '../src/server/auth/UserStore';

const SEED = [
  { username: 'user', password: 'user123', role: 'user' as const },
  { username: 'admin', password: 'adminn123', role: 'admin' as const },
];

async function setup() {
  const auth = new AuthService(new MemoryUserStore(), new TokenSigner('test-secret'));
  await auth.seed(SEED);
  return auth;
}

test('passwords are salted scrypt hashes', async () => {
  const a = await hashPassword('hunter2'), b = await hashPassword('hunter2');
  assert.notEqual(a, b);
  assert.ok(!a.includes('hunter2'));
  assert.ok(await verifyPassword('hunter2', a));
  assert.ok(!(await verifyPassword('hunter3', a)));
});

test('tokens: valid, forged, expired', () => {
  const t = new TokenSigner('s1', 1000);
  const tok = t.sign('abc', 0);
  assert.equal(t.verify(tok, 500), 'abc');
  assert.equal(t.verify(tok, 2000), null, 'expired');
  assert.equal(new TokenSigner('s2').verify(tok, 500), null, 'other secret');
  assert.equal(t.verify(tok.replace('abc', 'xyz'), 500), null, 'tampered');
});

test('seeded accounts log in; seeding twice is harmless', async () => {
  const auth = await setup();
  await auth.seed(SEED);
  assert.equal((await auth.listUsers()).length, 2);
  assert.equal((await auth.login('admin', 'adminn123')).user.role, 'admin');
  assert.equal((await auth.login('USER', 'user123')).user.role, 'user', 'usernames are case-insensitive');
  await assert.rejects(auth.login('user', 'nope'), /Wrong username or password/);
  await assert.rejects(auth.login('ghost', 'nope'), /Wrong username or password/);
});

test('register validates and rejects duplicates', async () => {
  const auth = await setup();
  const r = await auth.register('Kenji_99', 'secret1');
  assert.equal(r.user.username, 'kenji_99');
  assert.equal(r.user.role, 'user');
  assert.equal((await auth.authenticate(r.token)).id, r.user.id);
  await assert.rejects(auth.register('kenji_99', 'secret1'), /taken/);
  await assert.rejects(auth.register('a', 'secret1'), /Username/);
  await assert.rejects(auth.register('bad name!', 'secret1'), /Username/);
  await assert.rejects(auth.register('okname', '123'), /Password/);
});

test('admin can list and ban users; banned users are locked out and kicked', async () => {
  const auth = await setup();
  const { token: adminTok } = await auth.login('admin', 'adminn123');
  const { token: userTok, user } = await auth.login('user', 'user123');
  await assert.rejects(auth.requireAdmin(userTok), /Admins only/);
  const admin = await auth.requireAdmin(adminTok);
  const kicked: string[] = [];
  auth.onBan((id) => kicked.push(id));
  const row = await auth.setBanned(admin, user.id, true);
  assert.equal(row.banned, true);
  assert.deepEqual(kicked, [user.id]);
  await assert.rejects(auth.authenticate(userTok), /banned/);
  await assert.rejects(auth.login('user', 'user123'), /banned/);
  await assert.rejects(auth.setBanned(admin, admin.id, true), /yourself/);
  await auth.setBanned(admin, user.id, false);
  assert.ok(await auth.login('user', 'user123'));
});

test('Supabase store speaks PostgREST (against a fake)', async () => {
  const rows: any[] = [];
  const calls: string[] = [];
  const fake = (async (url: string, init: RequestInit = {}) => {
    const u = new URL(url);
    const method = init.method ?? 'GET';
    calls.push(`${method} ${u.pathname}${u.search}`);
    assert.equal((init.headers as Record<string, string>).apikey, 'svc');
    const eq = (k: string) => u.searchParams.get(k)?.replace(/^eq\./, '');
    let out = rows;
    if (eq('username')) out = rows.filter((r) => r.username === eq('username'));
    if (eq('id')) out = rows.filter((r) => r.id === eq('id'));
    if (method === 'POST') {
      const body = JSON.parse(String(init.body));
      if (rows.some((r) => r.username === body.username)) return new Response('dup', { status: 409 });
      const row = { id: `id${rows.length + 1}`, created_at: new Date().toISOString(), ...body };
      rows.push(row);
      return new Response(JSON.stringify([row]), { status: 201 });
    }
    if (method === 'PATCH') { for (const r of out) Object.assign(r, JSON.parse(String(init.body))); }
    return new Response(JSON.stringify(out), { status: 200 });
  }) as unknown as typeof fetch;
  const store = new SupabaseUserStore('https://x.supabase.co/', 'svc', fake);
  const auth = new AuthService(store, new TokenSigner('t'));
  await auth.seed(SEED);
  assert.equal(rows.length, 2);
  assert.ok(calls[0].startsWith('GET /rest/v1/kb_users?username=eq.user'));
  const r = await auth.register('newbie', 'secret1');
  await assert.rejects(auth.register('newbie', 'secret1'), /taken/);
  const admin = await auth.requireAdmin((await auth.login('admin', 'adminn123')).token);
  await auth.setBanned(admin, r.user.id, true);
  assert.equal(rows.find((x) => x.username === 'newbie').banned, true);
});
