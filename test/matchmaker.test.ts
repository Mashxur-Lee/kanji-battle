import assert from 'node:assert/strict';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { Matchmaker } from '../src/server/Matchmaker';
import { RoomManager } from '../src/server/RoomManager';
import type { Room } from '../src/server/Room';
import type { Level, ServerMessage } from '../src/shared/protocol';

beforeEach(() => mock.timers.enable({ apis: ['setTimeout', 'setInterval'] }));
afterEach(() => mock.timers.reset());

function player(id: string) {
  const msgs: ServerMessage[] = [];
  let room: Room | undefined;
  const client = {
    send: (m: ServerMessage) => msgs.push(m),
    inRoom: () => !!room,
    joinMatched: async (r: Room, levels: Level[]) => { const ok = r.join(id, id.toUpperCase(), client, levels).ok; if (ok) room = r; return ok; },
  };
  return { id, client, msgs, room: () => room, last: <T extends ServerMessage['type']>(t: T) => msgs.filter((m) => m.type === t).at(-1) as Extract<ServerMessage, { type: T }> | undefined };
}
const settle = () => new Promise((r) => setImmediate(r));

test('queue: two players with a common mode are put in a room and the game starts at once', async () => {
  const mm = new Matchmaker(new RoomManager(), () => 0);
  const a = player('a'), b = player('b');
  assert.equal(mm.enqueue('a', a.client, ['reading', 'boss'], ['N5', 'N4']), null);
  assert.equal(a.last('queue')!.state, 'searching');
  assert.equal(a.last('queue')!.searching, 1);
  mm.enqueue('b', b.client, ['boss', 'writing'], ['N3']);
  await settle();
  assert.equal(a.last('queue')!.state, 'matched');
  assert.equal(a.last('queue')!.mode, 'boss', 'the only mode they share');
  assert.ok(a.room() && a.room() === b.room(), 'same room');
  assert.ok(a.last('prep') && b.last('prep'), 'the game started (study phase), no lobby wait');
  assert.equal(mm.size, 0);
});

test('queue: no common mode → both keep searching; Deck Duel only matches Deck Duel', async () => {
  const mm = new Matchmaker(new RoomManager({ judgeWriting: () => ({ correct: true, recognized: '' }) }));
  const a = player('a'), b = player('b'), c = player('c'), d = player('d');
  mm.enqueue('a', a.client, ['reading'], ['N5']);
  mm.enqueue('b', b.client, ['rapid'], ['N5']);
  mm.enqueue('c', c.client, ['deck', 'reading'], []); // deck can't be mixed: this is a Deck Duel ticket
  await settle();
  assert.equal(mm.size, 3);
  assert.equal(a.last('queue')!.searching, 3);
  mm.enqueue('d', d.client, ['deck'], []);
  await settle();
  assert.equal(c.last('queue')!.mode, 'deck');
  assert.equal(c.last('deck_state')!.view.phase, 'characters', 'deck starts straight at the hero pick');
  assert.equal(mm.size, 2);
});

test('queue: cancel, bad requests, and players already in a room', async () => {
  const mm = new Matchmaker(new RoomManager());
  const a = player('a');
  assert.match(mm.enqueue('a', a.client, [], ['N5'])!, /mode/);
  assert.match(mm.enqueue('a', a.client, ['reading'], [])!, /level/);
  mm.enqueue('a', a.client, ['reading'], ['N5']);
  mm.cancel('a');
  assert.equal(a.last('queue')!.state, 'idle');
  assert.equal(mm.isQueued('a'), false);
  const busy = { ...player('z').client, inRoom: () => true };
  assert.match(mm.enqueue('z', busy, ['reading'], ['N5'])!, /room/);
});
