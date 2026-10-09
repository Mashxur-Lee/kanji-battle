import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { hashPassword, verifyPassword } from '../src/server/auth/passwords';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';

const SEED = [
  { username: 'user', password: 'user123', role: 'user' as const },
  { username: 'admin', password: 'adminn123', role: 'admin' as const },
];

async function setup() {
  const auth = new AuthService(new MemoryStore(), new TokenSigner('test-secret'));
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
  await assert.rejects(auth.register('a', 'secret1'), /Login/);
  await assert.rejects(auth.register('bad name!', 'secret1'), /Login/);
  assert.ok(await auth.register('a_much_longer_login.name-2026', 'secret1'), 'logins up to 32 characters');
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

