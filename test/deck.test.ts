import assert from 'node:assert/strict';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { buildDraftPool, DeckGame } from '../src/server/DeckGame';
import type { GameEvent } from '../src/server/Game';
import { CARD_SPECS, DECK_RULES, type CardColor, type DeckView } from '../src/shared/deck';
import { VOCAB } from '../src/server/vocab';

let clock = 0;
beforeEach(() => { clock = 0; mock.timers.enable({ apis: ['setTimeout'] }); });
afterEach(() => mock.timers.reset());
const tick = (ms: number) => { for (let l = ms; l > 0; l -= 1000) { const d = Math.min(1000, l); clock += d; mock.timers.tick(d); } };

const RULES = { ...DECK_RULES };
function setup(rng = () => 0.1, rules = RULES) {
  const events: GameEvent[] = [];
  const pool = buildDraftPool(VOCAB, () => true, () => 0.42);
  const g = new DeckGame([{ id: 'A', name: 'Aki' }, { id: 'B', name: 'Ben' }], pool, (e) => events.push(e), (entry, chars) => ({ correct: chars.length === [...entry.kanji].length, recognized: '' }), rng, () => clock, rules);
  const view = (id: string) => (events.filter((e) => e.type === 'deck_state' && e.playerId === id).at(-1) as any).view as DeckView;
  const devents = () => events.filter((e) => e.type === 'deck_event').map((e: any) => e.event);
  return { g, events, view, devents, pool };
}
/** Draft until both hands are full: always take the first free card. */
function draftAll(s: ReturnType<typeof setup>) {
  for (let i = 0; i < 40 && s.view('A').phase === 'draft'; i++) {
    const v = s.view('A');
    s.g.pick(v.draft!.picker!, v.draft!.pool.find((c) => !c.takenBy)!.cardId);
  }
}
const writeRight = (s: ReturnType<typeof setup>, id: string) => {
  const c = s.view(id).casting!;
  s.g.submit(id, c.castId, c.card.kanji);
};

test('draft pool: 20 cards, 4 per level, coloured by difficulty rank', () => {
  const pool = buildDraftPool(VOCAB, () => true, Math.random);
  assert.equal(pool.length, 20);
  for (const lv of ['N5', 'N4', 'N3', 'N2', 'N1']) assert.equal(pool.filter((c) => c.entry.level === lv).length, 4);
  for (const col of ['lightblue', 'blue', 'yellow', 'green', 'red'] as CardColor[]) assert.equal(pool.filter((c) => c.color === col).length, 4);
  const avg = (col: CardColor) => pool.filter((c) => c.color === col).reduce((s, c) => s + c.entry.difficulty, 0) / 4;
  assert.ok(avg('lightblue') < avg('blue') && avg('blue') < avg('yellow') && avg('green') < avg('red'));
});

test('characters → coin flip → picks of 2 → 10 cards each; cards stay face-down', () => {
  const s = setup();
  s.g.start();
  assert.equal(s.view('A').phase, 'characters');
  s.g.chooseCharacter('A', 'goblin');
  s.g.chooseCharacter('B', 'nonsense');
  assert.equal(s.view('A').phase, 'characters');
  s.g.chooseCharacter('B', 'knight');
  const d = s.view('A').draft!;
  assert.equal(s.devents()[0].kind, 'coin');
  assert.equal(d.picker, d.coinWinner);
  assert.equal(d.picksLeft, 2);
  const first = d.picker!;
  s.g.pick(first, d.pool[0].cardId); s.g.pick(first, d.pool[1].cardId);
  assert.notEqual(s.view('A').draft!.picker, first, 'turn passes after 2 picks');
  draftAll(s);
  const v = s.view('A');
  assert.equal(v.phase, 'battle');
  assert.equal(v.hand.length, 10);
  assert.ok(v.hand.every((c) => !c.kanji), 'you only see colours, not kanji');
  assert.equal(v.players.find((p) => p.id === 'B')!.handSize, 10);
  assert.notEqual(v.turn!.active, first, 'the coin loser opens the battle');
});

test('casting: mana cost, damage, heal, mana card; wrong writing rips the card', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'wizard'); s.g.chooseCharacter('B', 'wizard'); draftAll(s);
  const a = s.view('A').turn!.active, b = a === 'A' ? 'B' : 'A';
  const attack = s.view(a).hand.find((c) => CARD_SPECS[c.color].kind === 'attack')!;
  s.g.play(a, attack.cardId);
  const cast = s.view(b).casting!;
  assert.equal(cast.card.kanji.length > 0 && cast.flashMs === 3500, true, 'opponent sees the card being cast');
  s.g.submit(b, cast.castId, cast.card.kanji); // the opponent can't write it
  writeRight(s, a);
  const spec = CARD_SPECS[attack.color];
  const pa = s.view(a).players.find((p) => p.id === a)!, pb = s.view(a).players.find((p) => p.id === b)!;
  assert.equal(pb.hp, 1000 - spec.amount);
  assert.equal(pa.mana, RULES.maxMana - spec.cost);
  assert.equal(s.view(a).turn!.active, b, 'turn passes');
  assert.equal(s.view(b).players.find((p) => p.id === b)!.mana, RULES.maxMana, 'mana is capped at the max');
  // b writes wrong → card rips, nothing happens
  const bc = s.view(b).hand.find((c) => CARD_SPECS[c.color].cost > 0)!;
  const manaBefore = s.view(b).players.find((p) => p.id === b)!.mana;
  s.g.play(b, bc.cardId);
  assert.equal(s.view(b).players.find((p) => p.id === b)!.mana, manaBefore - CARD_SPECS[bc.color].cost, 'mana is paid when the card is played');
  s.g.submit(b, s.view(b).casting!.castId, 'ちがう');
  const last = s.devents().at(-1);
  assert.deepEqual([last.kind, last.ok], ['resolve', false]);
  assert.equal(s.view(b).hand.length, 9);
  assert.equal(s.view(a).players.find((p) => p.id === b)!.mana, manaBefore - CARD_SPECS[bc.color].cost, 'a ripped card still cost its mana');
  assert.equal(s.view(b).players.find((p) => p.id === a)!.hp, 1000);
});

test('knight bulwark (−30% damage) and goblin frenzy (2 cards in a row)', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'goblin'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  // make sure A acts when B's bulwark is up: play until it's B's turn
  if (s.view('A').turn!.active === 'A') { s.g.play('A', s.view('A').hand.find((c) => c.color === 'yellow')?.cardId ?? s.view('A').hand[0].cardId); writeRight(s, 'A'); }
  s.g.ability('B');
  assert.equal(s.view('A').players.find((p) => p.id === 'B')!.abilityActive, 2);
  const y = s.view('B').hand.find((c) => c.color === 'yellow') ?? s.view('B').hand[0];
  s.g.play('B', y.cardId); writeRight(s, 'B');
  // A: frenzy, two attacks into a bulwark
  const hp0 = s.view('A').players.find((p) => p.id === 'B')!.hp;
  s.g.ability('A');
  const attacks = s.view('A').hand.filter((c) => CARD_SPECS[c.color].kind === 'attack' && CARD_SPECS[c.color].cost <= 70).slice(0, 2);
  s.g.play('A', attacks[0].cardId); writeRight(s, 'A');
  assert.equal(s.view('A').turn!.active, 'A', 'goblin keeps the turn');
  s.g.play('A', attacks[1].cardId); writeRight(s, 'A');
  const expected = attacks.reduce((sum, c) => sum + Math.round(CARD_SPECS[c.color].amount * 0.7), 0);
  assert.equal(hp0 - s.view('A').players.find((p) => p.id === 'B')!.hp, expected);
  assert.equal(s.view('A').turn!.active, 'B');
});

test('witch sight reveals your cards and the kanji stays visible', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'witch'); s.g.chooseCharacter('B', 'witch'); draftAll(s);
  const a = s.view('A').turn!.active;
  s.g.ability(a);
  assert.ok(s.view(a).hand.every((c) => c.kanji && c.reading));
  s.g.play(a, s.view(a).hand[0].cardId);
  assert.equal(s.view(a).casting!.flashMs, null);
});

test('cards you cannot pay for = instant loss (wizard is saved once by +30 mana)', () => {
  const s = setup(() => 0.1, { ...RULES, maxMana: 20, manaPerTurn: 0 });
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'wizard'); draftAll(s);
  // with 20 max mana, blue/green/red are unaffordable; cards get used up quickly
  for (let i = 0; i < 60 && !s.g.isOver; i++) {
    const t = s.view('A').turn;
    if (!t) break;
    const me = s.view(t.active);
    const playable = me.hand.find((c) => CARD_SPECS[c.color].cost <= me.players.find((p) => p.id === t.active)!.mana);
    if (!playable) break;
    s.g.play(t.active, playable.cardId); writeRight(s, t.active);
  }
  assert.ok(s.g.isOver);
  assert.ok(s.devents().some((e) => e.kind === 'stuck'));
});

test('overtime: remaining cards shown one by one, first correct writer uses it', () => {
  const s = setup(() => 0.1, { ...RULES, matchMs: 5000 });
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  tick(5000);
  assert.equal(s.view('A').phase, 'overtime');
  const c = s.view('A').casting!;
  assert.equal(c.overtime, true);
  assert.equal(s.view('B').casting!.castId, c.castId, 'both see the same card');
  s.g.submit('B', c.castId, 'ちがう'); // B misses; A can still take it
  s.g.submit('A', c.castId, c.card.kanji);
  const r = s.devents().filter((e) => e.kind === 'resolve').at(-1);
  assert.deepEqual([r.ok, r.playerId], [true, 'A']);
  assert.notEqual(s.view('A').casting!.castId, c.castId, 'next card');
  // run the pile out
  for (let i = 0; i < 25 && !s.g.isOver; i++) tick(RULES.overtimeCardMs);
  assert.ok(s.g.isOver);
  const over = s.events.find((e) => e.type === 'game_over') as any;
  assert.ok(over.stats.A && over.stats.B);
});

test('separate clocks: 15 s to choose a card, then 20 s to write it', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const first = s.view('A').turn!;
  assert.deepEqual([first.stage, first.deadlineMs], ['choose', RULES.chooseMs]);
  tick(5000);
  const card = s.view(first.active).hand.find((c) => CARD_SPECS[c.color].cost <= RULES.maxMana)!;
  s.g.play(first.active, card.cardId);
  const t = s.view('A').turn!;
  assert.deepEqual([t.stage, t.deadlineMs, s.view('A').casting!.deadlineMs], ['cast', RULES.castMs, RULES.castMs], 'writing gets a fresh clock');
  tick(RULES.castMs);
  assert.notEqual(s.view('A').turn!.active, first.active, 'too slow → card rips, turn passes');
  // not choosing at all also passes the turn
  const second = s.view('A').turn!.active;
  tick(RULES.chooseMs);
  assert.notEqual(s.view('A').turn!.active, second);
});

test('out of cards → round 2 draft; HP, mana, powers and the other hand stay; same turn resumes', () => {
  const s = setup(() => 0.1, { ...RULES, handSize: 2 });
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'goblin'); draftAll(s);
  // B opens. B casts both cards; A just lets the choose clock run out each time.
  for (let i = 0; i < 2; i++) {
    const b = s.view('B');
    assert.equal(b.turn!.active, 'B');
    s.g.play('B', b.hand.find((c) => CARD_SPECS[c.color].cost <= b.players[1].mana)!.cardId); writeRight(s, 'B');
    tick(RULES.chooseMs); // A's turn passes
  }
  const v = s.view('A');
  assert.equal(v.phase, 'draft');
  assert.equal(v.round, 2);
  assert.ok(s.devents().some((e) => e.kind === 'redraft' && e.playerId === 'B' && e.round === 2));
  assert.ok(!s.devents().some((e) => e.kind === 'stuck'), 'running out of cards is no longer a loss');
  const [hpA, manaB, kept] = [v.players[0].hp, v.players[1].mana, v.hand.length];
  assert.equal(kept, 2, "A's unplayed cards are kept");
  const clockLeft = v.matchLeftMs;
  tick(3000);
  assert.equal(s.view('A').matchLeftMs, clockLeft, 'match clock pauses during the draft');
  draftAll(s);
  const after = s.view('A');
  assert.equal(after.phase, 'battle');
  assert.equal(after.turn!.active, 'B', "B's interrupted turn resumes");
  assert.deepEqual([after.players[0].hp, after.players[1].mana], [hpA, manaB], 'no extra mana, HP untouched');
  assert.deepEqual([after.hand.length, s.view('B').hand.length], [4, 2]);
  assert.equal(after.players[1].character, 'goblin');
});

test('off-turn kanji list: only while the opponent plays, sorted, no colours', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const active = s.view('A').turn!.active, waiting = active === 'A' ? 'B' : 'A';
  assert.equal(s.view(active).deckList, null, 'hidden on your own turn');
  const list = s.view(waiting).deckList!;
  assert.equal(list.length, 10);
  assert.deepEqual(list.map((k) => k.kanji), [...list.map((k) => k.kanji)].sort((a, b) => a.localeCompare(b, 'ja')));
  assert.ok(list.every((k) => !('color' in k)), 'no colour → no telling which card is which');
  assert.ok(s.view(waiting).hand.every((c) => c.kanji === undefined), 'hand cards stay face-down');
});

test('hero pick and first draft can go back to the lobby; a started battle cannot', () => {
  const s = setup();
  s.g.start();
  assert.equal(s.g.canReturnToLobby(), true);
  s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight');
  assert.equal(s.g.canReturnToLobby(), true, 'draft round 1');
  draftAll(s);
  assert.equal(s.g.canReturnToLobby(), false);
});

test('one 20 s clock covers both draft picks; running out picks both', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight');
  const d = s.view('A').draft!;
  const picker = d.picker!;
  tick(15_000);
  s.g.pick(picker, s.view('A').draft!.pool.find((c) => !c.takenBy)!.cardId);
  assert.equal(s.view('A').draft!.picker, picker, 'still their turn for the 2nd card');
  assert.ok(s.view('A').draft!.deadlineMs <= 5_000, 'the clock did not restart');
  tick(5_000);
  const after = s.view('A').draft!;
  assert.notEqual(after.picker, picker, 'time up: the 2nd card was picked for them');
  assert.equal(after.pool.filter((c) => c.takenBy === picker).length, 2);
  // and a full timeout picks both
  const next = after.picker!;
  tick(20_000);
  assert.equal(s.view('A').draft!.pool.filter((c) => c.takenBy === next).length, 2);
});

test('hero power: 100 mana, then 4 turns cooldown; mana starts at 200', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const p = s.view('A').turn!.active;
  const me = () => s.view(p).players.find((x) => x.id === p)!;
  assert.equal(me().mana, 200);
  s.g.ability(p);
  assert.deepEqual([me().mana, me().abilityCooldown, me().abilityActive], [100, 4, 2]);
  s.g.ability(p); // on cooldown: nothing happens
  assert.equal(me().mana, 100);
  // let turns pass (both players just let the choose clock run out)
  const cds: number[] = [];
  for (let i = 0; i < 8; i++) { tick(RULES.chooseMs); if (s.view('A').turn!.active === p) cds.push(me().abilityCooldown); }
  assert.deepEqual(cds, [3, 2, 1, 0], 'ready again on the 4th turn after');
  s.g.ability(p);
  assert.equal(me().abilityCooldown, 4, 'can use it again');
});
