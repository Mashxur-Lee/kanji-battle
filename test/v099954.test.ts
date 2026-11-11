import assert from 'node:assert/strict';
import { test } from 'node:test';
import { generateKeyPairSync } from 'node:crypto';
import { Push, reservedKey } from '../src/server/push';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { SCREEN_ACTIVITY } from '../src/server/Session';

test('0.9.9.9.5.4 push: a reserved data key ("from") is caught before Google refuses the whole push', async () => {
  for (const k of ['from', 'notification', 'message_type', 'google.x', 'gcm.n.e']) assert.ok(reservedKey(k), k);
  for (const k of ['fromName', 'fromId', 'kind', 'code', 'mode']) assert.ok(!reservedKey(k), k);
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048, privateKeyEncoding: { type: 'pkcs8', format: 'pem' }, publicKeyEncoding: { type: 'spki', format: 'pem' } });
  const sa = JSON.stringify({ project_id: 'kw-test', client_email: 'x@kw-test.iam.gserviceaccount.com', private_key: privateKey });
  let calls = 0;
  const push = new Push(sa, (async () => { calls++; return { ok: true, status: 200, json: async () => ({ access_token: 'AT' }), text: async () => '{}' }; }) as never);
  const r = await push.send(['tok'], { kind: 'invite', from: 'Ann' });
  assert.deepEqual([r.sent, calls], [0, 0], 'nothing sent');
  assert.match(r.errors[0], /reserved data key "from"/);
  // the invite as the server sends it now
  assert.equal((await push.send(['tok'], { kind: 'invite', fromId: 'u1', fromName: 'Ann', code: 'ABCD', mode: 'Rapid' })).sent, 1);
});

test('0.9.9.9.5.4 kana practice counts for the day even when no star was gained (activity, friends)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const { user } = await auth.register('kanaday', 'secret12');
  await study.setKana((await store.findById(user.id))!, { 'あ': { s: 0 }, 'い': { s: 0 } }, '2026-03-03'); // (two wrong answers)
  const day = (await store.activity(user.id, '2026-03-01')).find((a) => a.day === '2026-03-03');
  assert.ok(day, 'the day shows in the activity');
  assert.equal(day!.reviews, 2);
  assert.equal(SCREEN_ACTIVITY.kana, 'Studying kana');
  assert.equal(SCREEN_ACTIVITY.kanaplay, 'Studying kana', 'friends see it (it said "In the menus")');
});
