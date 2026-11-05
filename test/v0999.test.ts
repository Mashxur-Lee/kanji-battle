import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { SocialService } from '../src/server/study/SocialService';
import { SessionHub } from '../src/server/Session';

test('0.9.9.9: friends see "away" while the app is in the background, and when someone was last online', async () => {
  const store = new MemoryStore();
  const a = await store.create({ username: 'aki', passwordHash: 'x', role: 'player' });
  const b = await store.create({ username: 'bo', passwordHash: 'x', role: 'player' });
  await store.requestFriend(a.id, b.id);
  await store.acceptFriend(b.id, a.id);
  const saved: Array<[string, number]> = [];
  const hub = new SessionHub((id, at) => { saved.push([id, at]); void store.update(id, { lastSeen: at }); });
  const session = { away: false, activity: () => 'Studying spells', kick() {}, send() {} };
  hub.claim(b.id, session as never);
  const social = new SocialService(store, hub);
  let bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
  assert.equal(bo.online, true); assert.equal(bo.away, false);
  session.away = true;
  bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
  assert.equal(bo.away, true, 'the app went to the background');
  // leaving (the app closed — not in the background): the time is kept (in the store too, so it survives a restart)
  session.away = false;
  hub.release(b.id, session as never);
  await new Promise((ok) => setTimeout(ok, 10));
  assert.equal(saved.length, 1);
  bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
  assert.equal(bo.online, false);
  assert.ok(bo.lastSeen && Math.abs(bo.lastSeen - Date.now()) < 5000);
  assert.equal((await store.findById(b.id))?.lastSeen, saved[0][1]);
});
