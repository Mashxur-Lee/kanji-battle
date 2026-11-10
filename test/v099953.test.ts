import assert from 'node:assert/strict';
import { test } from 'node:test';
import { generateKeyPairSync } from 'node:crypto';
import { SessionHub, type Session } from '../src/server/Session';
import { Push } from '../src/server/push';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { ACHIEVEMENTS } from '../src/shared/achievements';

test('0.9.9.9.5.3 friends see you come online / go offline at once (friend_presence)', () => {
  const hub = new SessionHub();
  const seen: Array<[string, boolean]> = [];
  hub.setPresenceHook((id, online) => seen.push([id, online]));
  const s = { activity: () => undefined, kick: () => {} } as unknown as Session;
  const s2 = { activity: () => undefined, kick: () => {} } as unknown as Session;
  hub.claim('u1', s);
  hub.claim('u1', s2); // (a second tab: still online — no new "came online")
  hub.release('u1', s); // (the old one leaving changes nothing)
  hub.release('u1', s2);
  assert.deepEqual(seen, [['u1', true], ['u1', false]]);
});

test('0.9.9.9.5.3 an invite push carries a notification the phone shows by itself (a data-only push needed the app awake)', async () => {
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048, privateKeyEncoding: { type: 'pkcs8', format: 'pem' }, publicKeyEncoding: { type: 'spki', format: 'pem' } });
  const sa = JSON.stringify({ project_id: 'kw-test', client_email: 'x@kw-test.iam.gserviceaccount.com', private_key: privateKey });
  const bodies: unknown[] = [];
  const ok = (j: unknown) => ({ ok: true, status: 200, json: async () => j, text: async () => JSON.stringify(j) });
  const push = new Push(sa, (async (url: string, init: { body: string }) => { if (!url.includes('oauth2')) bodies.push(JSON.parse(init.body)); return ok({ access_token: 'AT', name: 'm' }); }) as never);
  const r = await push.send(['tok'], { kind: 'invite', from: 'Ann', code: 'ABCD' }, 120, { title: '⚔ Ann invites you', body: 'Join their room · ABCD', tag: 'invite-a' });
  assert.equal(r.sent, 1);
  const m = (bodies[0] as { message: { data: Record<string, string>; android: { priority: string; notification: Record<string, unknown> } } }).message;
  assert.equal(m.data.kind, 'invite', 'the data is still there (an open app shows its own card)');
  assert.equal(m.android.priority, 'high');
  assert.equal(m.android.notification.title, '⚔ Ann invites you');
  assert.equal(m.android.notification.channel_id, 'invites');
  assert.equal(m.android.notification.tag, 'invite-a', 'a second invite from the same friend replaces the first');
  // without a note: data only, as before
  bodies.length = 0;
  await push.send(['tok'], { kind: 'x' });
  assert.equal((bodies[0] as { message: { android: Record<string, unknown> } }).message.android.notification, undefined);
});

test('0.9.9.9.5.3 the phone\'s game language is kept with its push token (the notification is written in it)', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const { user } = await auth.register('plang', 'secret12');
  const tok = 'f'.repeat(40);
  await study.addPushToken((await store.findById(user.id))!, tok, 'ru');
  let u = (await store.findById(user.id))!;
  assert.deepEqual(u.pushTokens, [tok]);
  assert.ok(u.unlocks?.includes('plang:ru'));
  await study.addPushToken(u, tok, 'en');
  u = (await store.findById(user.id))!;
  assert.deepEqual(u.unlocks?.filter((x) => x.startsWith('plang:')), ['plang:en'], 'one language, the latest');
  await study.addPushToken(u, tok, 'xx');
  assert.ok((await store.findById(user.id))!.unlocks?.includes('plang:en'), 'an unknown language changes nothing');
});

test('0.9.9.9.5.3 badges: bronze, silver, gold and ruby — ruby for the very hardest', () => {
  const ruby = ACHIEVEMENTS.filter((a) => a.tier === 4).map((a) => a.id);
  for (const id of ['kingslayer', 'combo-30', 'year-of-fire']) assert.ok(ruby.includes(id), id);
  assert.ok(ACHIEVEMENTS.every((a) => a.tier >= 1 && a.tier <= 4));
  for (const t of [1, 2, 3] as const) assert.ok(ACHIEVEMENTS.some((a) => a.tier === t), `tier ${t}`);
});
