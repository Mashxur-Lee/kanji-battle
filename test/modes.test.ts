import assert from 'node:assert/strict';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { DEFAULT_CONFIG, Game, type GameConfig, type GameEvent } from '../src/server/Game';
import { Room, DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import type { ServerMessage, VocabEntry } from '../src/shared/protocol';
import { VOCAB } from '../src/shared/vocab';

const CFG: GameConfig = {
  ...DEFAULT_CONFIG, prepMs: 1000, countdownMs: 100, battleMs: 300_000, challengeMs: 1_000_000, nextDelayMs: 10, missPenaltyMs: 50,
  boss: { breathEveryMs: 30_000, breathWarnMs: 3_000, breathDamage: 110, clawDamage: 45 },
};
const word = (k: string) => VOCAB.find((v) => v.kanji === k)!;
const POOL = [word('懸念'), word('曖昧')];

let clock = 0;
beforeEach(() => { clock = 0; mock.timers.enable({ apis: ['setTimeout', 'Date'], now: 0 }); });
afterEach(() => mock.timers.reset());
// step in small increments: mock timers don't fire timers scheduled during the same tick() call
const tick = (ms: number) => { for (let left = ms; left > 0; left -= 1000) { const d = Math.min(1000, left); clock += d; mock.timers.tick(d); } };

function boss(players = ['A', 'B'], bossHp = 1000, playerHp = 1000) {
  const events: GameEvent[] = [];
  const game = new Game(players.map((id) => ({ id, pool: POOL, maxHp: playerHp })), (e) => events.push(e), CFG, Math.random, () => clock,
    { mode: 'boss', boss: { name: 'Black Dragon', maxHp: bossHp } });
  const of = <T extends GameEvent['type']>(t: T) => events.filter((e) => e.type === t) as Extract<GameEvent, { type: T }>[];
  const ch = (id: string) => of('challenge').filter((c) => c.playerId === id).at(-1)!;
  const right = (id: string) => game.submit(id, ch(id).id, POOL.find((v) => v.kanji === ch(id).kanji)!.reading);
  const wrong = (id: string) => game.submit(id, ch(id).id, 'zzz');
  game.start(); for (const p of players) game.markReady(p); tick(100);
  const updates = () => of('battle_update').map((u) => u.event);
  return { game, of, ch, right, wrong, updates };
}

test('boss: correct answers damage the dragon, not the teammate', () => {
  const b = boss();
  b.right('A');
  assert.equal(b.game.getHp('B'), 1000);
  assert.ok(b.game.bossView()!.hp < 1000);
  assert.equal((b.updates().at(-1) as any).targetId, 'boss');
});

test('boss: a mistake gets you clawed (only you)', () => {
  const b = boss();
  b.wrong('A');
  assert.equal(b.game.getHp('A'), 1000 - 45);
  assert.equal(b.game.getHp('B'), 1000);
  assert.ok(b.updates().some((e) => e.kind === 'claw' && e.playerId === 'A'));
});

test('boss: fire breath every 30s hits everyone, with a warning first', () => {
  const b = boss();
  tick(27_000);
  assert.ok(b.updates().some((e) => e.kind === 'breath_warning'));
  assert.equal(b.game.getHp('A'), 1000);
  tick(3_000);
  assert.deepEqual([b.game.getHp('A'), b.game.getHp('B')], [890, 890]);
  tick(30_000);
  assert.deepEqual([b.game.getHp('A'), b.game.getHp('B')], [780, 780]);
});

test('boss: slaying the dragon is a team win', () => {
  const b = boss(['A', 'B'], 60);
  for (let i = 0; i < 5 && !b.game.isOver; i++) { b.right('A'); tick(10); }
  const over = b.of('game_over')[0];
  assert.deepEqual([over.teamWon, over.reason, over.winnerId], [true, 'boss_slain', null]);
});

test('boss: the party is wiped by breath; time running out is a loss too', () => {
  const b = boss(['A'], 1000, 300);
  tick(30_000 * 3);
  const over = b.of('game_over')[0];
  assert.deepEqual([over.teamWon, over.reason], [false, 'party_wiped']);

  const ev: GameEvent[] = [];
  const t = new Game([{ id: 'A', pool: POOL, maxHp: 99_999 }], (e) => ev.push(e), { ...CFG, battleMs: 5000 }, Math.random, () => clock, { mode: 'boss', boss: { name: 'D', maxHp: 1e6 } });
  t.start(); t.markReady('A'); tick(100); tick(5000);
  const o = ev.find((e) => e.type === 'game_over') as any;
  assert.deepEqual([o.teamWon, o.reason], [false, 'time']);
});

test('boss: a knocked-out player stops getting challenges; teammate fights on', () => {
  const b = boss();
  for (let i = 0; i < 25 && b.game.getHp('A') > 0; i++) { b.wrong('A'); tick(50); }
  assert.equal(b.game.getHp('A'), 0);
  assert.equal(b.game.isOver, false);
  const n = b.of('challenge').filter((c) => c.playerId === 'A').length;
  tick(1000);
  assert.equal(b.of('challenge').filter((c) => c.playerId === 'A').length, n);
});

test('writing: challenge flashes the kanji and keeps the meaning; judge decides; typing is ignored', () => {
  const events: GameEvent[] = [];
  const seen: string[] = [];
  const game = new Game([{ id: 'A', pool: POOL, maxHp: 500 }, { id: 'B', pool: POOL, maxHp: 500 }], (e) => events.push(e), CFG, Math.random, () => clock, {
    mode: 'writing',
    judgeWriting: (entry, chars) => { seen.push(entry.kanji); return { correct: chars.length === 2, recognized: chars.length === 2 ? entry.kanji : '?' }; },
  });
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  const c = events.filter((e) => e.type === 'challenge' && e.playerId === 'A').at(-1) as any;
  assert.equal(c.answerMode, 'writing');
  assert.equal(c.flashMs, 500);
  assert.equal(c.charCount, 2);
  assert.ok(c.meaning);
  game.submit('A', c.id, POOL.find((v) => v.kanji === c.kanji)!.reading); // typed answers don't count here
  assert.equal(game.getHp('B'), 500);
  const stroke = [[[0, 0], [10, 10]]] as any;
  game.submitWriting('A', c.id, [stroke, stroke]);
  assert.ok(game.getHp('B') < 500);
  assert.deepEqual(seen, [c.kanji]);
  const r = events.filter((e) => e.type === 'answer_result').at(-1) as any;
  assert.equal(r.recognized, c.kanji);
});

// ── Room: reconnects ─────────────────────────────────────────────────────────
function client() {
  const msgs: ServerMessage[] = [];
  return { msgs, send: (m: ServerMessage) => msgs.push(m), last: <T extends ServerMessage['type']>(t: T) => msgs.filter((m) => m.type === t).at(-1) as Extract<ServerMessage, { type: T }> | undefined };
}
const OPTS = { ...DEFAULT_ROOM_OPTIONS, game: CFG, graceLobbyMs: 60_000, graceGameMs: 20_000 };

test('room: host can drop out of the lobby and come back within the grace period', () => {
  let empty = false;
  const room = new Room('ABCD', 'reading', { onEmpty: () => { empty = true; } }, OPTS);
  const host = client();
  room.join('h', 'host', host);
  room.disconnect('h', host);
  assert.equal(empty, false);
  const guest = client();
  room.join('g', 'guest', guest);
  assert.equal(guest.last('lobby')!.players.find((p) => p.id === 'h')!.online, false, 'guest sees host offline');
  tick(30_000);
  const host2 = client();
  room.reconnect('h', host2);
  assert.equal(host2.last('lobby')!.hostId, 'h', 'still the host');
  assert.equal(guest.last('lobby')!.players.find((p) => p.id === 'h')!.online, true);
  room.start('h');
  assert.ok(host2.last('prep') && guest.last('prep'));
});

test('room: grace runs out → seat is released', () => {
  let empty = false;
  const room = new Room('ABCD', 'reading', { onEmpty: () => { empty = true; } }, OPTS);
  const host = client();
  room.join('h', 'host', host);
  room.disconnect('h', host);
  tick(60_000);
  assert.equal(empty, true);
});

test('room: reconnecting mid-battle resumes with the current challenge', () => {
  const room = new Room('ABCD', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a, ['N2']); room.join('b', 'B', b, ['N2']);
  room.start('a'); room.ready('a'); room.ready('b'); tick(100);
  const ch = a.last('challenge')!;
  room.disconnect('a', a);
  tick(5000);
  const a2 = client();
  room.reconnect('a', a2);
  assert.ok(a2.last('battle_start'));
  assert.equal(a2.last('challenge')!.id, ch.id);
  assert.equal(a2.last('challenge')!.timeLimitMs, 1_000_000 - 5000, 'remaining time, not a fresh clock');
});

test('room: missing the in-game grace period forfeits', () => {
  const room = new Room('ABCD', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  room.start('a'); room.ready('a'); room.ready('b'); tick(100);
  room.disconnect('a', a);
  tick(20_000);
  const over = b.last('game_over')!;
  assert.deepEqual([over.winnerId, over.reason], ['b', 'forfeit']);
});

test('room: boss mode can start solo; writing mode refuses levels with no writable words', () => {
  const room = new Room('ABCD', 'boss', { onEmpty: () => {} }, OPTS);
  const a = client();
  room.join('a', 'A', a);
  room.start('a');
  assert.ok(a.last('prep'));
  const w = new Room('WXYZ', 'writing', { onEmpty: () => {}, writableFilter: () => false, judgeWriting: () => ({ correct: false, recognized: '' }) }, OPTS);
  const x = client(), y = client();
  w.join('x', 'X', x); w.join('y', 'Y', y);
  w.start('x');
  assert.match(x.last('error')!.message, /no words/);
});
