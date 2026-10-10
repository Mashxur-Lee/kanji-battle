import { levelOf as levelOfXp } from '../src/shared/progress';
import assert from 'node:assert/strict';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { DEFAULT_CONFIG, Game, type GameConfig, type GameEvent } from '../src/server/Game';
import { Room, DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import type { ServerMessage, VocabEntry } from '../src/shared/protocol';
import { VOCAB } from '../src/server/vocab';

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

test('writing: kanji flashes, reading + meaning stay; typed kanji (IME) or handwriting count, kana does not', () => {
  const events: GameEvent[] = [];
  const seen: string[] = [];
  const game = new Game([{ id: 'A', pool: POOL, maxHp: 500 }, { id: 'B', pool: POOL, maxHp: 500 }], (e) => events.push(e), CFG, Math.random, () => clock, {
    mode: 'writing',
    judgeWriting: (entry, chars) => { seen.push(entry.kanji); return { correct: chars.length === 2, recognized: chars.length === 2 ? entry.kanji : '?' }; },
  });
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  const last = () => events.filter((e) => e.type === 'challenge' && e.playerId === 'A').at(-1) as any;
  let c = last();
  assert.deepEqual([c.answerMode, c.flashMs, c.charCount], ['writing', 3500, 2]);
  assert.ok(c.meaning && c.reading, 'reading and meaning are shown');
  const entry = () => POOL.find((v) => v.kanji === last().kanji)!;
  game.submit('A', c.id, entry().reading); // typing the kana is not writing the kanji
  assert.equal(game.getHp('B'), 500);
  tick(50); c = last();
  game.submit('A', c.id, ` ${entry().kanji} `); // IME-typed kanji
  const hp1 = game.getHp('B');
  assert.ok(hp1 < 500);
  tick(10); c = last();
  const stroke = [[[0, 0], [10, 10]]] as any;
  game.submitWriting('A', c.id, [stroke, stroke]);
  assert.ok(game.getHp('B') < hp1);
  assert.deepEqual(seen, [c.kanji]);
  assert.equal((events.filter((e) => e.type === 'answer_result').at(-1) as any).recognized, c.kanji);
});

test('crit: a player with 100% crit hits ×1.5', () => {
  const ev: GameEvent[] = [];
  const g = new Game([{ id: 'A', pool: [word('懸念')], maxHp: 1000, crit: 1 }, { id: 'B', pool: [word('懸念')], maxHp: 1000 }], (e) => ev.push(e), CFG, () => 0, () => clock);
  g.start(); g.markReady('A'); g.markReady('B'); tick(100); clock += 1100;
  const c = ev.filter((e) => e.type === 'challenge' && e.playerId === 'A').at(-1) as any;
  g.submit('A', c.id, 'けねん');
  const r = ev.filter((e) => e.type === 'answer_result').at(-1) as any;
  assert.deepEqual([r.crit, r.damage], [true, Math.round(43 * 1.5)]);
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

// ── Rapid, forfeit, back-to-lobby, XP ───────────────────────────────────────
test('rapid: same kanji for both, first correct wins the round; wrong guesses can retry', () => {
  const room = new Room('RAPD', 'rapid', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a, ['N5']); room.join('b', 'B', b, ['N5']);
  room.start('a');
  assert.ok(a.last('battle_start') && !a.last('prep'), 'no study phase');
  tick(3000);
  const ca = a.last('challenge')!, cb = b.last('challenge')!;
  assert.equal(ca.id, cb.id);
  assert.equal(ca.kanji, cb.kanji);
  const hp0 = b.last('battle_start')!.players.find((p) => p.id === 'b')!.hp;
  room.answer('b', cb.id, 'zzz');
  assert.equal(b.last('answer_result')!.retry, true);
  const reading = VOCAB.find((v) => v.kanji === ca.kanji && v.level === 'N5')!.reading;
  room.answer('a', ca.id, reading);
  assert.equal(a.last('answer_result')!.correct, true);
  assert.equal(b.last('answer_result')!.beaten, true);
  assert.ok(b.last('battle_update')!.players.find((p) => p.id === 'b')!.hp < hp0);
  room.answer('b', cb.id, reading); // too late
  assert.equal(b.last('answer_result')!.beaten, true);
});

test('forfeit: both players land on the results screen and can rematch', () => {
  const room = new Room('FFFF', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  room.start('a'); room.ready('a'); room.ready('b'); tick(100);
  room.forfeit('a');
  assert.deepEqual([a.last('game_over')!.winnerId, a.last('game_over')!.reason], ['b', 'forfeit']);
  assert.ok(b.last('game_over'));
  room.rematch('a'); room.rematch('b');
  assert.ok(a.msgs.filter((m) => m.type === 'prep').length === 2, 'rematch started');
});

test('back during preparation returns everyone to the lobby', () => {
  const room = new Room('BACK', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  room.start('a');
  room.backToLobby('b');
  assert.equal(a.msgs.at(-1)!.type, 'notice');
  assert.ok(a.last('lobby') && b.last('lobby'));
  room.start('a');
  assert.equal(a.msgs.filter((m) => m.type === 'prep').length, 2, 'can start again');
});

test('match end awards XP to everyone and reports level-ups', async () => {
  const calls: any[] = [];
  const room = new Room('XPXP', 'reading', {
    onEmpty: () => {},
    onMatchEnd: async (mode, results) => { calls.push({ mode, results }); return Object.fromEntries(results.map((r) => [r.id, { gained: r.outcome === 'win' ? 350 : 60, xp: r.outcome === 'win' ? 1100 : 60, crit: 0.01 }])); },
  }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a, undefined, { crit: 0, xp: 900 }); room.join('b', 'B', b);
  room.start('a'); room.ready('a'); room.ready('b'); tick(100);
  room.forfeit('b');
  await new Promise((r) => setImmediate(r));
  assert.deepEqual(calls[0].results.map((r: any) => [r.id, r.outcome, r.forfeited]), [['a', 'win', true], ['b', 'loss', true]]);
  const pa = a.last('progress')!;
  assert.deepEqual([pa.gained, pa.level, pa.levelUp], [350, 1, true]);
  assert.equal(b.last('progress')!.levelUp, false);
  // each player gets a match-history record with their own side of the result screen
  const ra = calls[0].results[0].record, rb = calls[0].results[1].record;
  assert.deepEqual([ra.mode, ra.outcome, ra.you, ra.opponents.map((o: any) => o.name), rb.outcome, rb.you], ['reading', 'win', 'a', ['B'], 'loss', 'b']);
  assert.ok(ra.stats.a && ra.stats.b && ra.players.length === 2 && ra.character);
});

test('match history and public profiles via the study service', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const store = new MemoryStore();
  const u = await store.create({ username: 'hana', passwordHash: 'x', role: 'user' } as any);
  const study = new StudyService(store);
  const record = { mode: 'deck' as const, outcome: 'win' as const, character: 'witch', at: 5, opponents: [], you: u.id, players: [], winnerId: u.id, teamWon: null, reason: 'ko' as const, stats: {} };
  await study.recordMatch(u.id, 'win', 1, 'deck', [], false, false, record);
  const [m] = await study.matches(u.id);
  assert.deepEqual([m.mode, m.character, m.outcome], ['deck', 'witch', 'win']);
  assert.equal((await study.match(u.id, m.id))!.reason, 'ko');
  const p = (await study.publicProfile(u.id))!;
  assert.deepEqual([p.name, p.wins, p.losses, p.level], ['hana', 1, 0, levelOfXp(4000)]);
  assert.equal((p as any).passwordHash, undefined, 'nothing private');
  await store.update(u.id, { banned: true });
  assert.equal(await study.publicProfile(u.id), null);
});

test('forfeited matches give nobody XP (no farming), normal ones do', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const store = new MemoryStore();
  const u = await store.create({ username: 'farmer', passwordHash: 'x', role: 'user' } as any);
  const study = new StudyService(store);
  assert.deepEqual(await study.recordMatch(u.id, 'win', 1, 'deck', [], true), { gained: 0, xp: 0 });
  assert.deepEqual(await study.recordMatch(u.id, 'win', 1, 'deck', [], false), { gained: 4000, xp: 4000 });
});

test('deck lobby: no Start button — the duel begins when both players are ready', () => {
  const room = new Room('DECK', 'deck', { onEmpty: () => {}, judgeWriting: () => ({ correct: true, recognized: '' }) }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  room.start('a');
  assert.equal(a.last('deck_state'), undefined, 'host Start does nothing in Deck Duel');
  room.setLobbyReady('a', true);
  assert.deepEqual(b.last('lobby')!.players.map((p) => p.ready), [true, false]);
  room.setLobbyReady('a', false);
  assert.deepEqual(b.last('lobby')!.players.map((p) => p.ready), [false, false]);
  room.setLobbyReady('a', true); room.setLobbyReady('b', true);
  assert.equal(a.last('deck_state')!.view.phase, 'characters');
  room.forfeit('a');
});

test('deck room: back to the lobby from the hero pick', () => {
  const room = new Room('DKBK', 'deck', { onEmpty: () => {}, judgeWriting: () => ({ correct: true, recognized: '' }) }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  room.setLobbyReady('a', true); room.setLobbyReady('b', true);
  assert.equal(b.last('deck_state')!.view.phase, 'characters');
  const lobbies = b.msgs.filter((m) => m.type === 'lobby').length;
  room.backToLobby('b');
  assert.equal(b.msgs.filter((m) => m.type === 'lobby').length, lobbies + 1);
  assert.deepEqual(b.last('lobby')!.players.map((p) => p.ready), [false, false], 'everyone presses Ready again');
});

test('room chat: plain text, trimmed, rate-limited, history for late joiners', () => {
  const room = new Room('CHAT', 'deck', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'Aki', a);
  room.chat('a', '  hello\n<b>there</b>  ', 1000);
  room.chat('a', 'spam', 1200); // too soon
  room.chat('a', '   ', 5000); // empty
  room.chat('a', 'x'.repeat(500), 6000);
  room.join('b', 'Ben', b);
  const history = b.last('chat')!.messages;
  assert.deepEqual(history.map((m) => m.text), ['hello <b>there</b>', 'x'.repeat(140)]);
  assert.equal(history[0].name, 'Aki');
  room.chat('b', 'hi!', 7000);
  assert.equal(a.last('chat')!.messages[0].text, 'hi!');
});

test('connection quality is shared with the room', () => {
  const room = new Room('PING', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a); room.join('b', 'B', b);
  room.setRtt('a', 80.4); room.setRtt('b', 520);
  assert.deepEqual(a.last('net')!.rtt, { a: 80, b: 520 });
  room.disconnect('b', b);
  assert.deepEqual(a.last('net')!.rtt, { a: 80, b: null }, 'offline shows as no signal');
});

test('boss mode: a party of 4 vs the dragon (a 5th is turned away, duels stay 1v1)', () => {
  const room = new Room('BOSS', 'boss', { onEmpty: () => {} }, OPTS);
  const cs = ['a', 'b', 'c', 'd'].map(() => client());
  ['a', 'b', 'c', 'd'].forEach((id, i) => assert.deepEqual(room.join(id, id.toUpperCase(), cs[i]), { ok: true }));
  assert.equal(room.join('e', 'E', client()).ok, false, 'room is full at 4');
  assert.equal(cs[0].last('lobby')!.maxPlayers, 4);
  const hpParty = cs[0].last('lobby')!.players.length;
  room.start('a');
  for (const id of ['a', 'b', 'c', 'd']) room.ready(id);
  tick(100);
  const upd = cs[3].msgs.filter((m) => m.type === 'battle_start' || m.type === 'challenge');
  assert.ok(upd.length > 0, 'the 4th player gets challenges too');
  assert.equal(hpParty, 4);
  const duel = new Room('DUEL', 'reading', { onEmpty: () => {} }, OPTS);
  duel.join('a', 'A', client()); duel.join('b', 'B', client());
  assert.equal(duel.join('c', 'C', client()).ok, false);
  room.forfeit('a'); room.forfeit('b'); room.forfeit('c'); room.forfeit('d');
});

test('boss HP grows with the party size', async () => {
  const { bossHp } = await import('../src/server/Balance');
  const one = bossHp([['N3']]), four = bossHp([['N3'], ['N3'], ['N3'], ['N3']]);
  assert.ok(four > one * 3.5 && four < one * 4.5, `${one} → ${four}`);
});

test('boss: a player on fire (5+ combo) is immune to the fire breath', () => {
  const ev: GameEvent[] = [];
  const g = new Game([{ id: 'A', pool: [word('懸念')], maxHp: 1000 }, { id: 'B', pool: [word('懸念')], maxHp: 1000 }], (e) => ev.push(e),
    { ...CFG, boss: { breathEveryMs: 60_000, breathWarnMs: 3_000, breathDamage: 110, clawDamage: 45 } }, () => 0.99, () => clock, { mode: 'boss', boss: { name: 'D', maxHp: 99_999 } });
  g.start(); g.markReady('A'); g.markReady('B'); tick(100);
  for (let i = 0; i < 5; i++) {
    const c = ev.filter((e) => e.type === 'challenge' && e.playerId === 'A').at(-1) as any;
    g.submit('A', c.id, 'けねん');
    tick(CFG.nextDelayMs);
  }
  assert.equal(g.getCombo('A'), 5);
  tick(60_000);
  const breath = ev.filter((e) => e.type === 'battle_update' && (e as any).event.kind === 'breath').at(-1) as any;
  assert.deepEqual(breath.event.immune, ['A']);
  assert.equal(g.getHp('A'), 1000);
  assert.equal(g.getHp('B') < 1000, true);
  g.forfeit('A'); g.forfeit('B');
});

// ── AI players ───────────────────────────────────────────────────────────────
test('AI accuracy table (N5 AI … N1 AI) and kana counts as N5', async () => {
  const { botChance } = await import('../src/server/Bot');
  assert.deepEqual(['N5', 'N4', 'N3', 'N2', 'N1'].map((w) => botChance('N5', w as any)), [0.9, 0.5, 0.2, 0.1, 0.05]);
  assert.deepEqual(['N5', 'N4', 'N3', 'N2', 'N1'].map((w) => botChance('N3', w as any)), [0.95, 0.85, 0.7, 0.3, 0.18]);
  assert.deepEqual(['N5', 'N4', 'N3', 'N2', 'N1'].map((w) => botChance('N1', w as any)), [1, 0.95, 0.87, 0.7, 0.6]);
  assert.equal(botChance('N4', 'KANA'), 0.92);
});

test('AI opponent in a reading duel: readies, answers, and the host can remove it in the lobby', () => {
  const room = new Room('AIAI', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client();
  room.join('a', 'A', a);
  room.addBot('a', 'N1');
  const bot = a.last('lobby')!.players.find((p) => p.bot)!;
  assert.equal(bot.bot, 'N1');
  assert.match(bot.name, /AI N1/);
  room.removeBot('a', bot.id);
  assert.equal(a.last('lobby')!.players.length, 1);
  room.addBot('a', 'N1');
  const botId = a.last('lobby')!.players.find((p) => p.bot)!.id;
  room.start('a');
  room.ready('a');
  tick(7_000); // the AI presses ready within 2–6 s
  tick(200);
  for (let i = 0; i < 30; i++) tick(1_000);
  const acts = a.msgs.filter((m) => m.type === 'battle_update' && ((m as any).event.playerId === botId)).map((m: any) => m.event.kind);
  assert.ok(acts.includes('hit') || acts.includes('miss'), `the AI played: ${acts.join(',')}`);
  room.forfeit('a');
});

test('AI teammates in boss mode; a room with only AI left closes', () => {
  let empty = false;
  const room = new Room('AIBS', 'boss', { onEmpty: () => { empty = true; } }, OPTS);
  const a = client();
  room.join('a', 'A', a);
  room.addBot('a', 'N3'); room.addBot('a', 'N5'); room.addBot('a', 'N2');
  room.addBot('a', 'N1'); // full at 4
  assert.equal(a.last('lobby')!.players.length, 4);
  room.start('a'); room.ready('a');
  tick(7_000); tick(200);
  for (let i = 0; i < 20; i++) tick(1_000);
  const ids = a.last('lobby')!.players.filter((p) => p.bot).map((p) => p.id);
  const hits = a.msgs.filter((m) => m.type === 'battle_update' && (m as any).event.kind === 'hit' && ids.includes((m as any).event.playerId));
  assert.ok(hits.length > 0, 'the AI party hits the dragon');
  room.leave('a');
  assert.equal(empty, true);
});

test('Deck Duel against the AI: it picks a hero, drafts and plays its turns', () => {
  const room = new Room('AIDK', 'deck', { onEmpty: () => {}, judgeWriting: () => ({ correct: true, recognized: '' }) }, OPTS);
  const a = client();
  room.join('a', 'A', a);
  room.addBot('a', 'N2');
  room.setLobbyReady('a', true);
  assert.equal(a.last('deck_state')!.view.phase, 'characters', 'AI is always ready');
  room.deckCharacter('a', 'knight');
  tick(3_000);
  for (let i = 0; i < 60 && a.last('deck_state')!.view.phase === 'draft'; i++) {
    const v = a.last('deck_state')!.view;
    if (v.draft!.picker === 'a') room.deckPick('a', v.draft!.pool.find((c) => !c.takenBy)!.cardId);
    else tick(2_000);
  }
  assert.equal(a.last('deck_state')!.view.phase, 'battle');
  // let a few turns pass: when it's ours we just let the clock run out
  for (let i = 0; i < 90; i++) tick(1_000);
  const casts = a.msgs.filter((m) => m.type === 'deck_event' && (m as any).event.kind === 'cast' && (m as any).event.playerId !== 'a');
  const resolves = a.msgs.filter((m) => m.type === 'deck_event' && (m as any).event.kind === 'resolve' && (m as any).event.playerId !== 'a');
  assert.ok(casts.length >= 1, 'the AI cast cards');
  assert.ok(resolves.length >= 1, 'and wrote them');
  room.forfeit('a');
});

test('matches with an AI give half XP', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const store = new MemoryStore();
  const u = await store.create({ username: 'vsai', passwordHash: 'h', role: 'user' } as any);
  const study = new StudyService(store);
  assert.equal((await study.recordMatch(u.id, 'win', 1, 'reading', [], false, true)).gained, 200);
  assert.equal((await study.recordMatch(u.id, 'win', 1, 'deck', [], false, true)).gained, 2000);
});

test('boss with AI teammates: when the only human forfeits, the match ends', () => {
  const room = new Room('AIFF', 'boss', { onEmpty: () => {} }, OPTS);
  const a = client();
  room.join('a', 'A', a); room.addBot('a', 'N1'); room.addBot('a', 'N2');
  room.start('a'); room.ready('a'); tick(7_000); tick(200);
  room.forfeit('a');
  assert.ok(a.last('game_over'), 'results screen');
  assert.equal(a.last('game_over')!.reason, 'forfeit');
});

test('rapid room: the levels are shared — a change by either player changes them for everyone', () => {
  const room = new Room('RPDL', 'rapid', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a, ['N5']);
  room.join('b', 'B', b, ['N1']);
  assert.deepEqual(b.last('lobby')!.players.map((p) => p.levels), [['N5'], ['N5']], 'the joiner takes the room\'s levels');
  room.setLevels('b', ['N3', 'N2']);
  assert.deepEqual(a.last('lobby')!.players.map((p) => p.levels), [['N3', 'N2'], ['N3', 'N2']]);
  // other modes: everyone keeps their own
  const r2 = new Room('RDNG', 'reading', { onEmpty: () => {} }, OPTS);
  const c = client(), d = client();
  r2.join('c', 'C', c, ['N5']); r2.join('d', 'D', d, ['N1']);
  r2.setLevels('d', ['N2']);
  assert.deepEqual(c.last('lobby')!.players.map((p) => p.levels), [['N5'], ['N2']]);
});

test('combo flame colour: light blue by default, purple from level 5 (admins: all); shown to others', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const store = new MemoryStore();
  const u = await store.create({ username: 'flamey', passwordHash: 'x', role: 'user' } as any);
  const study = new StudyService(store);
  assert.equal((await study.profile(u)).flame, 'blue');
  await assert.rejects(study.setFlame(u, 'purple'), /level 5/);
  await assert.rejects(study.setFlame(u, 'green'), /Unknown/);
  await store.addXp(u.id, 20_000); // well past level 5
  await study.setFlame((await store.findById(u.id))!, 'purple');
  assert.equal((await study.profile((await store.findById(u.id))!)).flame, 'purple');
  const admin = await store.create({ username: 'boss', passwordHash: 'x', role: 'admin' } as any);
  await study.setFlame(admin, 'purple');
  // in a room, everyone sees your colour
  const room = new Room('FLAM', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a, undefined, { crit: 0, xp: 0, flame: 'purple' }); room.join('b', 'B', b);
  assert.deepEqual(b.last('lobby')!.players.map((p) => p.flame), ['purple', 'blue']);
});

test('more than 100 struggling spells waiting locks the game modes (admins never)', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const { VOCAB } = await import('../src/server/vocab');
  const { STUDY_LOCK } = await import('../src/shared/progress');
  const store = new MemoryStore();
  const u = await store.create({ username: 'crammer', passwordHash: 'x', role: 'user' } as any);
  const study = new StudyService(store);
  await store.markStruggling(u.id, VOCAB.slice(0, STUDY_LOCK).map((v) => v.id), Date.now());
  assert.equal(await study.playLock(u), null, 'exactly 100 is still fine');
  assert.equal((await study.profile(u)).strugglingDue, STUDY_LOCK);
  await store.markStruggling(u.id, [VOCAB[STUDY_LOCK].id], Date.now());
  assert.match((await study.playLock(u))!, /101 struggling spells/);
  assert.equal(await study.playLock({ id: u.id, role: 'admin' }), null);
});

test('daily login streak: +1 the next day, same day no change, a gap starts over; shown on public profiles', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const store = new MemoryStore();
  const study = new StudyService(store);
  let u = await store.create({ username: 'daily', passwordHash: 'x', role: 'user' } as any);
  u = await study.touchLogin(u, '2026-10-01');
  u = await study.touchLogin(u, '2026-10-01');
  assert.deepEqual([u.streak, u.bestStreak], [1, 1]);
  u = await study.touchLogin(u, '2026-10-02');
  u = await study.touchLogin(u, '2026-10-03');
  assert.deepEqual([u.streak, u.bestStreak], [3, 3]);
  u = await study.touchLogin(u, '2026-10-07'); // missed days
  assert.deepEqual([u.streak, u.bestStreak], [1, 3]);
  const p = (await study.publicProfile(u.id))!;
  assert.equal(p.bestStreak, 3);
});

test('after a Deck Duel every kanji of the duel joins All spells (cards you have are left alone)', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const { VOCAB } = await import('../src/server/vocab');
  const store = new MemoryStore();
  const u = await store.create({ username: 'decker', passwordHash: 'x', role: 'user' } as any);
  const study = new StudyService(store);
  const [a, b, c] = VOCAB.slice(0, 3).map((v) => v.id);
  await store.markStruggling(u.id, [a], Date.now());
  await study.recordMatch(u.id, 'win', 1, 'deck', [b], false, false, undefined, [a, b, c, 'not-a-word']);
  const cards = await store.cards(u.id);
  assert.deepEqual(cards.map((x) => x.vocabId).sort(), [a, b, c].sort());
  assert.equal(cards.find((x) => x.vocabId === c)!.struggling, false, 'new, not struggling');
  assert.equal(cards.find((x) => x.vocabId === b)!.struggling, true, 'missed words still go to Struggling');
  assert.equal((await store.findById(u.id))!.newNotice, 1, 'the study screen tells you about the new spell');
});

test('magic staffs unlock by best login streak (5/10/15/20 days; admins: all); others see your staff', async () => {
  const { StudyService } = await import('../src/server/study/StudyService');
  const { MemoryStore } = await import('../src/server/db/Store');
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'staffy', passwordHash: 'x', role: 'user' } as any);
  assert.equal((await study.profile(u)).staff, 'verdant');
  await assert.rejects(study.setStaff(u, 'ember'), /5-day/);
  await assert.rejects(study.setStaff(u, 'banana'), /Unknown/);
  await store.update(u.id, { bestStreak: 12, streak: 0 }); // a broken streak keeps what you unlocked
  await study.setStaff((await store.findById(u.id))!, 'tide');
  await assert.rejects(study.setStaff((await store.findById(u.id))!, 'storm'), /15-day/);
  assert.equal((await study.profile((await store.findById(u.id))!)).staff, 'tide');
  const admin = await store.create({ username: 'boss2', passwordHash: 'x', role: 'admin' } as any);
  await study.setStaff(admin, 'void');
  const room = new Room('STAF', 'reading', { onEmpty: () => {} }, OPTS);
  const a = client(), b = client();
  room.join('a', 'A', a, undefined, { crit: 0, xp: 0, staff: 'void' }); room.join('b', 'B', b);
  assert.deepEqual(b.last('lobby')!.players.map((p) => p.staff), ['void', 'verdant']);
});
