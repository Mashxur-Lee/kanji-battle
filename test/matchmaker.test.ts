import assert from 'node:assert/strict';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { ACCEPT_MS, Matchmaker } from '../src/server/Matchmaker';
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
  assert.equal(mm.enqueue('a', a.client, ['reading', 'rapid'], ['N5', 'N4']), null);
  assert.equal(a.last('queue')!.state, 'searching');
  assert.equal(a.last('queue')!.searching, 1);
  mm.enqueue('b', b.client, ['boss', 'reading'], ['N3']);
  await settle();
  const found = a.last('queue')!;
  assert.deepEqual([found.state, found.mode, found.acceptMs], ['found', 'reading', ACCEPT_MS], 'Match found box');
  assert.equal(a.room(), undefined, 'nothing starts before both accept');
  mm.accept('a', found.matchId);
  assert.deepEqual(b.last('queue')!.accepted, ['a'], 'B sees that A accepted');
  mm.accept('b', found.matchId);
  await settle();
  assert.equal(a.last('queue')!.state, 'matched');
  assert.equal(a.last('queue')!.mode, 'reading', 'the only mode they share (Rapid needs a common level)');
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
  const id = c.last('queue')!.matchId;
  mm.accept('c', id); mm.accept('d', id);
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

test('queue: not accepting in 5 s stops your queue; the one who accepted keeps searching', async () => {
  const mm = new Matchmaker(new RoomManager());
  const a = player('a'), b = player('b'), c = player('c');
  mm.enqueue('a', a.client, ['reading'], ['N5']);
  mm.enqueue('b', b.client, ['reading'], ['N5']);
  await settle();
  const id = a.last('queue')!.matchId;
  mm.accept('a', id);
  mock.timers.tick(ACCEPT_MS);
  assert.equal(a.last('queue')!.state, 'searching', 'A is back in the queue');
  assert.ok(a.msgs.some((m) => m.type === 'queue' && m.requeued), 'and is told the opponent did not accept');
  assert.deepEqual([b.last('queue')!.state, b.last('queue')!.reason], ['idle', 'missed'], "B's queue stopped");
  assert.deepEqual([mm.isQueued('a'), mm.isQueued('b')], [true, false]);
  // a new player arrives: A is matched again
  mm.enqueue('c', c.client, ['reading'], ['N5']);
  await settle();
  assert.equal(c.last('queue')!.state, 'found');
  // declining (cancel) ends it at once: the other goes back to searching
  mm.cancel('c');
  assert.equal(c.last('queue')!.state, 'idle');
  assert.equal(a.last('queue')!.state, 'searching');
  assert.equal(a.room(), undefined);
});

test('queue: Rapid only matches players with a level in common, and plays just the shared levels', async () => {
  const mm = new Matchmaker(new RoomManager());
  const a = player('a'), b = player('b'), c = player('c');
  mm.enqueue('a', a.client, ['rapid'], ['N4']);
  mm.enqueue('b', b.client, ['rapid'], ['N3']);
  await settle();
  assert.equal(mm.size, 2, 'N4 and N3: no match');
  assert.equal(a.last('queue')!.state, 'searching');
  mm.enqueue('c', c.client, ['rapid'], ['N4', 'N5']);
  await settle();
  const id = a.last('queue')!.matchId;
  assert.equal(c.last('queue')!.matchId, id, 'a (N4) and c (N4, N5) are matched');
  mm.accept('a', id); mm.accept('c', id);
  await settle();
  const lobby = a.last('lobby') ?? c.last('lobby');
  assert.ok(lobby!.players.every((p) => p.levels.join() === 'N4'), 'both play only N4');
});

test('queue: Boss waits for a full party of 4 (no 1v1, 2v1 or 3v1), then all 4 accept and fight together', async () => {
  const mm = new Matchmaker(new RoomManager(), () => 0);
  const ps = ['a', 'b', 'c', 'd'].map(player);
  for (const p of ps.slice(0, 3)) mm.enqueue(p.id, p.client, ['boss'], ['N5']);
  await settle();
  assert.equal(mm.size, 3, 'three is not enough');
  assert.equal(ps[0].last('queue')!.state, 'searching');
  assert.equal(ps[0].last('queue')!.boss, 3);
  mm.enqueue('d', ps[3].client, ['boss'], ['N4']);
  await settle();
  const found = ps[0].last('queue')!;
  assert.deepEqual([found.state, found.mode, found.players], ['found', 'boss', 4]);
  for (const p of ps.slice(0, 3)) mm.accept(p.id, found.matchId);
  await settle();
  assert.equal(ps[0].room(), undefined, 'waits for the 4th accept');
  mm.accept('d', found.matchId);
  await settle();
  const room = ps[0].room();
  assert.ok(room && ps.every((p) => p.room() === room), 'one room, four players');
  assert.ok(ps.every((p) => p.last('prep')), 'the fight started');
});

test('queue: someone who queued Boss and Reading still gets a Reading duel right away', async () => {
  const mm = new Matchmaker(new RoomManager(), () => 0);
  const a = player('a'), b = player('b');
  mm.enqueue('a', a.client, ['boss', 'reading'], ['N5']);
  mm.enqueue('b', b.client, ['boss', 'reading'], ['N5']);
  await settle();
  assert.equal(a.last('queue')!.mode, 'reading');
});
