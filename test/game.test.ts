import assert from 'node:assert/strict';
import { beforeEach, afterEach, mock, test } from 'node:test';
import { computeDamage, DEFAULT_CONFIG, Game, type GameConfig, type GameEvent } from '../src/server/Game';
import { ChallengeDeck, pickPool } from '../src/server/VocabPool';
import type { VocabEntry } from '../src/shared/protocol';
import { VOCAB } from '../src/server/vocab';

const CFG: GameConfig = { ...DEFAULT_CONFIG, prepMs: 1000, countdownMs: 100, battleMs: 60_000, challengeMs: 5000, nextDelayMs: 10, missPenaltyMs: 50 };
const byKanji = (k: string) => VOCAB.find((v) => v.kanji === k)!;

let clock = 0;
beforeEach(() => { clock = 0; mock.timers.enable({ apis: ['setTimeout'] }); });
afterEach(() => mock.timers.reset());
const tick = (ms: number) => { clock += ms; mock.timers.tick(ms); };

function setup(pool: VocabEntry[] = [byKanji('懸念'), byKanji('曖昧'), byKanji('慎重')], cfg = CFG, maxHp = 1000) {
  const events: GameEvent[] = [];
  const game = new Game([{ id: 'A', pool, maxHp }, { id: 'B', pool, maxHp }], (e) => events.push(e), cfg, Math.random, () => clock);
  const challengeFor = (id: string) =>
    [...events].reverse().find((e): e is Extract<GameEvent, { type: 'challenge' }> => e.type === 'challenge' && e.playerId === id)!;
  const answerCorrectly = (id: string) => {
    const c = challengeFor(id);
    const entry = pool.find((v) => v.kanji === c.kanji)!;
    game.submit(id, c.id, entry.romaji ?? entry.reading);
  };
  return { game, events, challengeFor, answerCorrectly, of: <T extends GameEvent['type']>(t: T) => events.filter((e) => e.type === t) as Extract<GameEvent, { type: T }>[] };
}

test('damage formula matches the spec example (N2 base 40, 1.1s, first hit → 43)', () => {
  assert.equal(computeDamage(60, 1100, 1), 43);
  assert.ok(computeDamage(60, 500, 5) > computeDamage(60, 500, 1), 'combo boosts damage');
  assert.ok(computeDamage(60, 9000, 1) < computeDamage(60, 1000, 1), 'slow answers hit softer');
  assert.ok(computeDamage(15, 1000, 1) < computeDamage(75, 1000, 1), 'harder words hit harder');
});

test('study phase shows the pool, then hides it; battle starts when both are ready', () => {
  const { game, of } = setup();
  game.start();
  assert.equal(of('prep').length, 2, 'each player gets their own study list');
  assert.equal(of('prep')[0].pool.length, 3);
  assert.equal(of('challenge').length, 0);
  game.markReady('A');
  assert.equal(of('battle_start').length, 0);
  game.markReady('B');
  assert.equal(of('battle_start').length, 1);
  tick(100);
  assert.equal(of('challenge').length, 2, 'each player gets their own challenge');
  // challenges only carry the kanji — never the reading or meaning
  assert.deepEqual(Object.keys(of('challenge')[0]).sort(), ['answerMode', 'id', 'kanji', 'playerId', 'timeLimitMs', 'type']);
});

test('study phase ends on its own timer', () => {
  const { game, of } = setup();
  game.start();
  tick(1000);
  assert.equal(of('battle_start').length, 1);
});

test('correct answer damages the opponent and builds combo; wrong answer resets combo and reveals', () => {
  const { game, of, answerCorrectly, challengeFor } = setup([byKanji('懸念')]);
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);

  tick(1100);
  answerCorrectly('A');
  assert.equal(game.getHp('B'), 1000 - 59); // 懸念: 28 strokes → N1 since 0.9.8
  assert.equal(game.getHp('A'), 1000);
  assert.equal(game.getCombo('A'), 1);

  tick(10); answerCorrectly('A');
  assert.equal(game.getCombo('A'), 2);

  tick(10);
  const c = challengeFor('A');
  game.submit('A', c.id, 'zzz');
  const res = of('answer_result').at(-1)!;
  assert.equal(res.correct, false);
  assert.equal(res.entry.kanji, c.kanji, 'the correct answer is shown after a miss');
  assert.equal(game.getCombo('A'), 0);

  // stale / duplicate submissions are ignored
  const hpBefore = game.getHp('B');
  game.submit('A', c.id, res.entry.reading);
  assert.equal(game.getHp('B'), hpBefore);
});

test('running out the challenge clock counts as a miss', () => {
  const { game, of } = setup();
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  tick(5000);
  const timeouts = of('answer_result').filter((r) => r.timedOut);
  assert.equal(timeouts.length, 2);
});

test('reaching 0 HP ends the game with stats for both players', () => {
  const { game, of, answerCorrectly } = setup(undefined, CFG, 100);
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  for (let i = 0; i < 10 && !game.isOver; i++) { answerCorrectly('A'); tick(10); }
  const over = of('game_over')[0];
  assert.ok(over, 'game ended');
  assert.equal(over.winnerId, 'A');
  assert.equal(over.reason, 'ko');
  assert.equal(over.stats.A.accuracy, 1);
  assert.ok(over.stats.A.damageDealt >= 100);
  assert.equal(over.stats.A.words.length, 3);
  // nothing fires after the game is over
  const n = of('challenge').length;
  tick(60_000);
  assert.equal(of('challenge').length, n);
});

test('time limit: higher HP wins, equal HP is a draw', () => {
  const a = setup(undefined, { ...CFG, battleMs: 1000, challengeMs: 100_000 });
  a.game.start(); a.game.markReady('A'); a.game.markReady('B'); tick(100);
  a.answerCorrectly('B');
  tick(1000);
  assert.deepEqual([a.of('game_over')[0].winnerId, a.of('game_over')[0].reason], ['B', 'time']);

  const b = setup(undefined, { ...CFG, battleMs: 1000, challengeMs: 100_000 });
  b.game.start(); b.game.markReady('A'); b.game.markReady('B'); tick(100); tick(1000);
  assert.equal(b.of('game_over')[0].winnerId, null);
});

test('leaving forfeits, even during the study phase', () => {
  const { game, of } = setup();
  game.start();
  game.forfeit('A');
  assert.deepEqual([of('game_over')[0].winnerId, of('game_over')[0].reason], ['B', 'forfeit']);
});

test('struggled list surfaces missed words', () => {
  const { game, of, challengeFor, answerCorrectly } = setup(undefined, CFG, 10_000);
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  const missed = challengeFor('A').kanji;
  game.submit('A', challengeFor('A').id, 'wrong');
  tick(50); answerCorrectly('A');
  game.forfeit('B');
  const stats = of('game_over')[0].stats.A;
  assert.deepEqual(stats.struggled, [missed]);
  assert.equal(stats.accuracy, 0.5);
});

test('deck: no immediate repeats, missed words come back after the gap', () => {
  const pool = pickPool(['N3'], 10);
  assert.equal(pool.length, 10);
  assert.ok(pool.every((v) => v.level === 'N3'));
  const deck = new ChallengeDeck(pool);
  let prev = deck.draw();
  for (let i = 0; i < 200; i++) {
    const cur = deck.draw();
    assert.notEqual(cur, prev);
    prev = cur;
  }
  const missed = deck.draw();
  deck.requeue(missed, 2);
  deck.draw(); deck.draw();
  assert.equal(deck.draw(), missed);
});

test('skip counts as a miss: no damage, combo reset, answer revealed', () => {
  const { game, of, answerCorrectly, challengeFor } = setup();
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  answerCorrectly('A'); tick(10);
  game.skip('A', challengeFor('A').id);
  const res = of('answer_result').at(-1)!;
  assert.deepEqual([res.correct, res.skipped, res.timedOut, res.damage], [false, true, false, 0]);
  assert.equal(game.getCombo('A'), 0);
  tick(50);
  assert.ok(challengeFor('A').id > res.challengeId, 'next challenge follows the penalty');
});

test('players can have different pools and different max HP', () => {
  const events: GameEvent[] = [];
  const hard = [byKanji('憂鬱')], easy = [byKanji('山')];
  const game = new Game([{ id: 'A', pool: hard, maxHp: 290 }, { id: 'B', pool: easy, maxHp: 1060 }], (e) => events.push(e), CFG, Math.random, () => clock);
  game.start();
  const preps = events.filter((e) => e.type === 'prep') as Extract<GameEvent, { type: 'prep' }>[];
  assert.equal(preps.find((p) => p.playerId === 'A')!.pool[0].kanji, '憂鬱');
  assert.equal(preps.find((p) => p.playerId === 'B')!.pool[0].kanji, '山');
  assert.deepEqual([game.getMaxHp('A'), game.getMaxHp('B')], [290, 1060]);
});

test('hiragana practice: shown as kana, answered in romaji only', () => {
  const ka = VOCAB.find((v) => v.level === 'KANA' && v.kanji === 'か')!;
  const { game, of, challengeFor } = setup([ka]);
  game.start(); game.markReady('A'); game.markReady('B'); tick(100);
  assert.equal(challengeFor('A').answerMode, 'romaji');
  game.submit('A', challengeFor('A').id, 'か'); // typing the kana back is not allowed
  assert.equal(of('answer_result').at(-1)!.correct, false);
  assert.equal(of('answer_result').at(-1)!.entry.romaji, 'ka');
  tick(50);
  game.submit('A', challengeFor('A').id, 'KA');
  assert.equal(of('answer_result').at(-1)!.correct, true);
});
