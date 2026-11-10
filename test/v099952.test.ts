import assert from 'node:assert/strict';
import { test } from 'node:test';
import { generateKeyPairSync } from 'node:crypto';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';
import { createApiRouter } from '../src/server/router';
import { StudyService } from '../src/server/study/StudyService';
import { Push } from '../src/server/push';
import { Room, DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import type { ServerMessage } from '../src/shared/protocol';
import { characterOf } from '../src/shared/progress';

const ask = (route: ReturnType<typeof createApiRouter>, token: string, method: string, url: string, body: unknown = {}) =>
  route({ method, url, query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => body });

test('0.9.9.9.5.2 character: picked in Customize, unlocked by the Daily challenge league (Knight N4, Witch N3, Wizard N2)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const route = createApiRouter(auth, study, {});
  const { token, user } = await auth.register('charpick', 'secret12');
  const set = (c: string) => ask(route, token, 'PUT', '/api/me/character', { character: c });
  // a new player: the goblin, nothing else
  assert.equal(characterOf((await store.findById(user.id))!.unlocks), 'goblin');
  assert.equal((await set('knight'))?.status, 403, 'the Kana league: the knight is locked');
  assert.equal((await set('dragon'))?.status, 400, 'no such character');
  // the N4 league: the knight
  await store.update(user.id, { unlocks: [...((await store.findById(user.id))!.unlocks ?? []), 'dleague:N4'] });
  const r = await set('knight');
  assert.equal(r?.status, 200);
  assert.equal(characterOf((r!.body as { profile: { unlocks: string[] } }).profile.unlocks), 'knight', 'the profile says so');
  assert.equal((await set('witch'))?.status, 403);
  // back to the goblin: no "char:" left
  assert.equal((await set('goblin'))?.status, 200);
  assert.ok(!(await store.findById(user.id))!.unlocks!.some((x) => x.startsWith('char:')));
  // admins have them all
  await store.update(user.id, { role: 'admin' });
  assert.equal((await set('wizard'))?.status, 200);
  assert.equal(characterOf((await store.findById(user.id))!.unlocks), 'wizard');
});

test('0.9.9.9.5.2 character: the room shows the picked character (not one from the levels)', () => {
  const msgs: ServerMessage[] = [];
  const client = { send: (m: ServerMessage) => msgs.push(m) };
  const room = new Room('CHAR', 'reading', { onEmpty: () => {} }, DEFAULT_ROOM_OPTIONS);
  room.join('a', 'Ann', client, ['N1'], { crit: 0, xp: 0, character: 'witch' });
  room.join('b', 'Bo', { send: () => {} }, ['KANA'], { crit: 0, xp: 0 });
  const lobby = msgs.filter((m) => m.type === 'lobby').at(-1) as Extract<ServerMessage, { type: 'lobby' }>;
  assert.equal(lobby.players.find((p) => p.id === 'a')!.avatar, 'witch', 'N1 picked, but the witch chosen');
  assert.equal(lobby.players.find((p) => p.id === 'b')!.avatar, 'goblin', 'nothing chosen: the goblin (not by the kana level)');
  room.leave('b'); room.leave('a');
});

test('0.9.9.9.5.2 push: Google\'s answer is kept; the test route says where it stops', async () => {
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048, privateKeyEncoding: { type: 'pkcs8', format: 'pem' }, publicKeyEncoding: { type: 'spki', format: 'pem' } });
  const sa = JSON.stringify({ project_id: 'kw-test', client_email: 'x@kw-test.iam.gserviceaccount.com', private_key: privateKey });
  const ok = (status: number, j: unknown) => ({ ok: status < 300, status, json: async () => j, text: async () => JSON.stringify(j) });
  // the access token refused: no throw, the reason comes back
  const noAuth = new Push(sa, (async () => ok(400, { error: 'invalid_grant' })) as never);
  const r0 = await noAuth.send(['tok'], { kind: 'test' });
  assert.equal(r0.sent, 0);
  assert.match(r0.errors[0], /token 400.*invalid_grant/);
  // a token Firebase doesn't know (wrong project / sender): kept as the error, not counted as sent
  const wrong = new Push(sa, (async (url: string) => (url.includes('oauth2') ? ok(200, { access_token: 'AT' }) : ok(403, { error: { status: 'PERMISSION_DENIED', message: 'SenderId mismatch' } }))) as never);
  const r1 = await wrong.send(['tok'], { kind: 'test' });
  assert.deepEqual([r1.sent, r1.dead.length], [0, 0]);
  assert.match(r1.errors[0], /^403 .*SenderId mismatch/);

  // the route: whatever the server's push says, as it is
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const { token } = await auth.register('pushtest', 'secret12');
  const off = createApiRouter(auth, study, {});
  assert.deepEqual((await ask(off, token, 'POST', '/api/push/test'))?.body, { ok: false, reason: 'server-off' });
  const on = createApiRouter(auth, study, { pushTest: async () => ({ ok: true, sent: 1, phones: 1 }) });
  assert.deepEqual((await ask(on, token, 'POST', '/api/push/test'))?.body, { ok: true, sent: 1, phones: 1 });
  assert.equal((await ask(on, '', 'POST', '/api/push/test'))?.status, 401, 'signed in only');
});
