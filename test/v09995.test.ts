import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { IncomingMessage } from 'node:http';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { verifyPassword } from '../src/server/auth/passwords';
import { MemoryStore } from '../src/server/db/Store';
import { isTransientDbError } from '../src/server/db/transient';
import { createApiRouter } from '../src/server/router';
import { StudyService } from '../src/server/study/StudyService';
import { InsightsService } from '../src/server/study/InsightsService';
import { Bucket, clientIp, inlineScriptHashes, securityHeaders } from '../src/server/security';

test('0.9.9.9.5: which database errors are a connection that failed while opening', () => {
  const coded = (code: string, message = 'x') => Object.assign(new Error(message), { code });
  assert.equal(isTransientDbError(coded('CONNECT_TIMEOUT', 'write CONNECT_TIMEOUT undefined:undefined')), true);
  assert.equal(isTransientDbError(new Error('Authentication timed out')), true);
  assert.equal(isTransientDbError(new Error('Client network socket disconnected before secure TLS connection was established')), true);
  assert.equal(isTransientDbError(coded('57P01', 'terminating connection due to administrator command')), true);
  assert.equal(isTransientDbError(coded('23505', 'duplicate key value violates unique constraint')), false, 'a real error is not retried');
  assert.equal(isTransientDbError(new TypeError("Cannot read properties of undefined (reading 'x')")), false);
  assert.equal(isTransientDbError(null), false);
});

/** a store whose next `n` reads fail like a sleeping database */
function flaky(n: number) {
  const store = new MemoryStore();
  let fail = 0;
  const findById = store.findById.bind(store);
  store.findById = async (id: string) => {
    if (fail > 0) { fail--; throw Object.assign(new Error('write CONNECT_TIMEOUT undefined:undefined'), { code: 'CONNECT_TIMEOUT' }); }
    return findById(id);
  };
  return { store, arm: () => { fail = n; } };
}

test('0.9.9.9.5: a GET whose database is waking up is tried again — no "Server error", no Inbox row', async () => {
  const { store, arm } = flaky(2);
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const errors: string[] = [];
  const route = createApiRouter(auth, study, { onError: (where) => errors.push(where) });
  const { token } = await auth.register('sleepy1', 'secret12');
  const ask = (method: string, url: string) => route({ method, url, query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => ({}) });
  arm();
  const r = await ask('GET', '/api/me');
  assert.equal(r?.status, 200, 'the third try worked');
  assert.deepEqual(errors, []);
});

test('0.9.9.9.5: still unreachable → 503 and one "database unreachable" report (POSTs are not repeated)', async () => {
  const { store, arm } = flaky(1);
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const errors: string[] = [];
  const route = createApiRouter(auth, study, { onError: (where) => errors.push(where) });
  const { token } = await auth.register('sleepy2', 'secret12');
  arm();
  const r = await route({ method: 'POST', url: '/api/feedback', query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => ({ kind: 'bug', text: 'hello there' }) });
  assert.equal(r?.status, 503);
  assert.deepEqual(errors, ['database unreachable']);
});

test('0.9.9.9.5: the README passwords never work on a public server', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  // a public server without the environment passwords: the built-in accounts are not made
  await auth.seed([{ username: 'user', password: 'user123', role: 'user', fromEnv: false }, { username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], true);
  assert.equal(await store.findByUsername('admin'), null);
  assert.equal(await store.findByUsername('user'), null);
  // an older server made them with the README password → locked on the next start
  const local = new AuthService(store, new TokenSigner('t'));
  await local.seed([{ username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], false);
  const before = (await store.findByUsername('admin'))!;
  assert.equal(await verifyPassword('adminn123', before.passwordHash), true);
  await auth.seed([{ username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], true);
  const after = (await store.findByUsername('admin'))!;
  assert.equal(await verifyPassword('adminn123', after.passwordHash), false, 'locked');
  // the environment password works (and replaces whatever was there)
  await auth.seed([{ username: 'admin', password: 'from-env-9x', role: 'admin', fromEnv: true }], true);
  assert.equal(await verifyPassword('from-env-9x', (await store.findByUsername('admin'))!.passwordHash), true);
  await assert.rejects(auth.login('admin', 'adminn123'));
});

test('0.9.9.9.5: the caller\'s address is the one the proxy added (the last), not one they wrote', () => {
  const req = (xff?: string, remote = '10.0.0.1') => ({ headers: xff ? { 'x-forwarded-for': xff } : {}, socket: { remoteAddress: remote } }) as unknown as IncomingMessage;
  assert.equal(clientIp(req('6.6.6.6, 203.0.113.9')), '203.0.113.9');
  assert.equal(clientIp(req('203.0.113.9')), '203.0.113.9');
  assert.equal(clientIp(req()), '10.0.0.1');
});

test('0.9.9.9.5: the flood limit — a burst, then a steady rate', () => {
  let now = 0;
  const b = new Bucket(5, 1, () => now);
  for (let i = 0; i < 5; i++) assert.equal(b.take(), true);
  assert.equal(b.take(), false, 'the burst is used up');
  now += 2_000;
  assert.equal(b.take(), true);
  assert.equal(b.take(), true);
  assert.equal(b.take(), false);
});

test('0.9.9.9.5: security headers — scripts only from the site and the page\'s own inline script', () => {
  const page = '<html><head><script>try { a(); } catch (e) {}</script><script src="/app.js"></script></head></html>';
  const hashes = inlineScriptHashes(page);
  assert.equal(hashes.length, 1, 'only the inline one');
  assert.match(hashes[0], /^'sha256-[A-Za-z0-9+/]+=*'$/);
  const h = securityHeaders(hashes, true);
  assert.match(h['Content-Security-Policy'], /script-src 'self' 'sha256-/);
  assert.match(h['Content-Security-Policy'], /frame-ancestors 'none'/);
  assert.match(h['Content-Security-Policy'], /object-src 'none'/);
  assert.doesNotMatch(h['Content-Security-Policy'], /unsafe-eval/);
  assert.equal(h['X-Content-Type-Options'], 'nosniff');
  assert.ok(h['Strict-Transport-Security']);
  assert.equal(securityHeaders(hashes, false)['Strict-Transport-Security'], undefined);
});

test('0.9.9.9.5: the same open error is one Inbox row with a count', async () => {
  const store = new MemoryStore();
  let now = 1_000_000;
  const ins = new InsightsService(store, () => now);
  for (let i = 0; i < 4; i++) { await ins.error('[server] database unreachable: timeout', 'x', null); now += 70_000; }
  await ins.error('[browser] something else', 'y', null);
  const rows = (await store.reports(10)).filter((r) => r.kind === 'error');
  assert.equal(rows.length, 2);
  assert.equal(rows.find((r) => r.text.includes('database'))!.count, 4);
});
