import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore } from '../src/server/db/Store';
import { SocialService } from '../src/server/study/SocialService';
import { AWAY_KEEP_MS, deviceOf, SessionHub } from '../src/server/Session';

test('0.9.9.9.2: where friends play — the Android app, the PC app or the website', () => {
  assert.equal(deviceOf('Mozilla/5.0 (Linux; Android 15) … Chrome/140 Mobile Safari/537.36 KanjiWizardsAndroid/0.9.9.9.2'), 'phone');
  assert.equal(deviceOf('Mozilla/5.0 (Windows NT 10.0) … Electron/33 KanjiWizardsDesktop/0.9.9'), 'pc');
  assert.equal(deviceOf('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0) … Safari/604.1'), 'web');
  assert.equal(deviceOf(undefined), 'web');
});

test('0.9.9.9.2: in the background the app closes its connection — friends still see "away" (and the device) for a while', async () => {
  const store = new MemoryStore();
  const a = await store.create({ username: 'aki', passwordHash: 'x', role: 'player' });
  const b = await store.create({ username: 'bo', passwordHash: 'x', role: 'player' });
  await store.requestFriend(a.id, b.id);
  await store.acceptFriend(b.id, a.id);
  const hub = new SessionHub();
  const social = new SocialService(store, hub);
  const session = { away: false, device: 'phone', activity: () => undefined, kick() {}, send() {} };
  hub.claim(b.id, session as never);
  let bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
  assert.equal(bo.online, true); assert.equal(bo.device, 'phone');
  session.away = true;
  hub.release(b.id, session as never); // the "snapshot": connection closed while away
  bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
  assert.deepEqual([bo.online, bo.away, bo.device], [true, true, 'phone']);
  assert.equal(hub.onlineCount, 0, 'not counted as connected');
  // back: a new connection, not away any more
  const again = { away: false, device: 'phone', activity: () => undefined, kick() {}, send() {} };
  hub.claim(b.id, again as never);
  bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
  assert.deepEqual([bo.online, bo.away], [true, false]);
  // gone for good: after AWAY_KEEP_MS they're offline
  again.away = true;
  const now = Date.now;
  hub.release(b.id, again as never);
  try {
    Date.now = () => now() + AWAY_KEEP_MS + 1000;
    bo = (await social.list(a.id)).find((f) => f.id === b.id)!;
    assert.equal(bo.online, false);
  } finally { Date.now = now; }
});
