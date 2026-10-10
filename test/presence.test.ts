import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SessionHub, type Session } from '../src/server/Session';

test('admin presence: online with what they are doing; offline with when they were last seen', () => {
  const hub = new SessionHub();
  const s = { activity: () => 'Playing Deck Duel', kick: () => {} } as unknown as Session;
  assert.deepEqual(hub.presence('u1'), { online: false, lastSeen: undefined });
  hub.claim('u1', s);
  const p = hub.presence('u1');
  assert.equal(p.online, true);
  assert.equal(p.activity, 'Playing Deck Duel');
  assert.ok(p.since);
  assert.equal(hub.onlineCount, 1);
  hub.release('u1', s);
  const q = hub.presence('u1');
  assert.equal(q.online, false);
  assert.ok(q.lastSeen && q.lastSeen <= Date.now());
});
