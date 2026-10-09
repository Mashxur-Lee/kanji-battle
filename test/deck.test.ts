import assert from 'node:assert/strict';
import { afterEach, beforeEach, mock, test } from 'node:test';
import { buildDraftPool, DeckGame } from '../src/server/DeckGame';
import type { GameEvent } from '../src/server/Game';
import { CARD_SPECS, DECK_RULES, OVERTIME_DAMAGE, type CardColor, type DeckView } from '../src/shared/deck';
import { VOCAB } from '../src/server/vocab';

let clock = 0;
beforeEach(() => { clock = 0; mock.timers.enable({ apis: ['setTimeout'] }); });
afterEach(() => mock.timers.reset());
const tick = (ms: number) => { for (let l = ms; l > 0; l -= 1000) { const d = Math.min(1000, l); clock += d; mock.timers.tick(d); } };

const RULES = { ...DECK_RULES, revealMs: 0 }; // most tests skip the 2 s answer reveal (tested on its own below)
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
  if (!c.overtime) {
    if (s.view(id).casting!.stage === 'read') s.g.castReady(id, c.castId);
    if (s.view(id).casting!.stage === 'look') s.g.castGo(id, c.castId);
  }
  s.g.submit(id, c.castId, s.g.peek(id)!.entry.kanji);
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
  assert.deepEqual([cast.stage, cast.card.meaning.length > 0], ['read', true], 'opponent sees the card being cast');
  s.g.submit(b, cast.castId, s.g.peek(a)!.entry.kanji); // the opponent can't write it
  writeRight(s, a);
  const spec = CARD_SPECS[attack.color];
  const pa = s.view(a).players.find((p) => p.id === a)!, pb = s.view(a).players.find((p) => p.id === b)!;
  assert.equal(pb.hp, RULES.hp - spec.amount);
  assert.equal(pa.mana, RULES.maxMana - spec.cost + Math.floor(spec.cost / 2), 'paid on play, half back on success');
  assert.equal(s.devents().filter((e) => e.kind === 'resolve').at(-1).refund, Math.floor(spec.cost / 2));
  assert.equal(s.view(a).turn!.active, b, 'turn passes');
  assert.equal(s.view(b).players.find((p) => p.id === b)!.mana, RULES.maxMana, 'mana is capped at the max');
  // b writes wrong → card rips, nothing happens
  const bc = s.view(b).hand.find((c) => CARD_SPECS[c.color].cost > 0)!;
  const manaBefore = s.view(b).players.find((p) => p.id === b)!.mana;
  s.g.play(b, bc.cardId);
  assert.equal(s.view(b).players.find((p) => p.id === b)!.mana, manaBefore - CARD_SPECS[bc.color].cost, 'mana is paid when the card is played');
  { const id = s.view(b).casting!.castId; s.g.castReady(b, id); s.g.castGo(b, id); s.g.submit(b, id, 'ちがう'); }
  const last = s.devents().at(-1);
  assert.deepEqual([last.kind, last.ok], ['resolve', false]);
  assert.equal(s.view(b).hand.length, 9);
  assert.equal(s.view(a).players.find((p) => p.id === b)!.mana, manaBefore - CARD_SPECS[bc.color].cost, 'a ripped card still cost its mana');
  assert.equal(s.view(b).players.find((p) => p.id === a)!.hp, RULES.hp);
});

test('knight bulwark (less damage) and goblin frenzy (2 cards in a row, the second costs 1.5× mana)', () => {
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
  assert.equal(s.view('A').turn!.costFactor, RULES.goblinSecondCost);
  const manaBefore = s.view('A').players.find((p) => p.id === 'A')!.mana;
  s.g.play('A', attacks[1].cardId);
  assert.equal(manaBefore - s.view('A').players.find((p) => p.id === 'A')!.mana, Math.ceil(CARD_SPECS[attacks[1].color].cost * RULES.goblinSecondCost), 'second card costs more');
  writeRight(s, 'A');
  const expected = attacks.reduce((sum, c) => sum + Math.round(CARD_SPECS[c.color].amount * RULES.knightDamageTaken), 0);
  assert.equal(hp0 - s.view('A').players.find((p) => p.id === 'B')!.hp, expected);
  assert.equal(s.view('A').turn!.active, 'B');
  assert.equal(s.view('A').players.find((p) => p.id === 'A')!.abilityCooldown, RULES.goblinCooldown, 'Frenzy rests longer');
});

test('witch sight reveals your hand and makes attacks hit harder, but not the kanji being written', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'witch'); s.g.chooseCharacter('B', 'witch'); draftAll(s);
  const a = s.view('A').turn!.active;
  s.g.ability(a);
  assert.ok(s.view(a).hand.every((c) => c.kanji && c.reading));
  s.g.play(a, s.view(a).hand[0].cardId);
  const id = s.view(a).casting!.castId;
  s.g.castReady(a, id); s.g.castGo(a, id);
  assert.equal(s.view(a).casting!.card.kanji, undefined, 'Sight shows her hand, not the card she is writing');
  // an attack while Sight is on
  const s2 = setup();
  s2.g.start(); s2.g.chooseCharacter('A', 'witch'); s2.g.chooseCharacter('B', 'witch'); draftAll(s2);
  const w = s2.view('A').turn!.active, foe = w === 'A' ? 'B' : 'A';
  s2.g.ability(w);
  const atk = s2.view(w).hand.find((c) => CARD_SPECS[c.color].kind === 'attack' && CARD_SPECS[c.color].cost <= 100)!;
  s2.g.play(w, atk.cardId); writeRight(s2, w);
  assert.equal(RULES.hp - s2.view(w).players.find((p) => p.id === foe)!.hp, Math.round(CARD_SPECS[atk.color].amount * RULES.witchSightDamage));
});

test('cards you cannot pay for: the turn is skipped (−100 HP), not lost; mana keeps coming back', () => {
  const s = setup(() => 0.1, { ...RULES, maxMana: 20, manaPerTurn: 0 });
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  // with 20 max mana, blue/green/red are unaffordable; the cheap cards get used up quickly
  for (let i = 0; i < 60 && !s.g.isOver && !s.devents().some((e) => e.kind === 'stuck'); i++) {
    const t = s.view('A').turn;
    if (!t) break;
    const me = s.view(t.active);
    const playable = me.hand.find((c) => CARD_SPECS[c.color].cost <= me.players.find((p) => p.id === t.active)!.mana);
    if (!playable) break;
    s.g.play(t.active, playable.cardId); writeRight(s, t.active);
  }
  const ev = s.devents();
  const stuck = ev.findIndex((e) => e.kind === 'stuck');
  assert.ok(stuck >= 0, 'someone got stuck');
  assert.deepEqual(ev[stuck + 1], { kind: 'skip', playerId: ev[stuck].playerId, damage: RULES.skipPenaltyHp });
  assert.ok(s.view('A').players.find((p) => p.id === ev[stuck].playerId)!.hp < RULES.hp, 'it cost HP');
  // stuck forever (no mana regen): skipped turns keep costing HP until someone falls
  for (let i = 0; i < 200 && !s.g.isOver; i++) tick(RULES.chooseMs + RULES.revealMs);
  assert.ok(s.g.isOver);
});

test('overtime turns into a 1v1 Rapid duel: cards gone, random kanji, first reading hits (harder words hit harder)', () => {
  const s = setup(() => 0.1, { ...RULES, matchMs: 5000 });
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  tick(5000);
  const v = s.view('A');
  assert.equal(v.phase, 'overtime');
  assert.deepEqual([v.hand.length, v.players.map((p) => p.handSize)], [0, [0, 0]], 'the cards are gone');
  assert.equal(v.overtimeLeft, RULES.overtimeMaxMs);
  const c = v.casting!;
  assert.equal(c.overtime, true);
  assert.equal(s.view('B').casting!.castId, c.castId, 'both see the same kanji');
  assert.ok(c.card.kanji, 'the kanji shows');
  assert.deepEqual([c.card.reading, c.card.meaning], [undefined, undefined], 'but not its reading or meaning');
  const entry = s.g.peek('A')!.entry;
  assert.deepEqual(c.rapid, { level: entry.level, damage: OVERTIME_DAMAGE[entry.level as 'N5'] });
  s.g.submitWriting('A', c.castId, [[[[0, 0], [1, 1]]]]); // no handwriting in overtime
  assert.equal(s.view('A').casting!.castId, c.castId);
  s.g.submit('B', c.castId, 'ちがう'); // B misses…
  assert.equal(s.devents().at(-1).kind, 'ot_miss');
  s.g.submit('A', c.castId, entry.kanji); // the kanji itself doesn't count: it's the reading
  s.g.submit('B', c.castId, entry.romaji ?? entry.reading); // …and B may try again
  const r = s.devents().filter((e) => e.kind === 'resolve').at(-1);
  assert.deepEqual([r.ok, r.playerId, r.targetId, r.reading.length > 0], [true, 'B', 'A', true]);
  assert.equal(s.view('A').players.find((p) => p.id === 'A')!.hp, RULES.hp - r.amount);
  assert.ok(r.amount === OVERTIME_DAMAGE[entry.level as 'N5'] || r.amount > OVERTIME_DAMAGE[entry.level as 'N5'], 'damage by level (or a crit)');
  assert.equal(s.view('A').casting, null, 'the answer stays up for a moment');
  tick(RULES.overtimeGapMs);
  assert.notEqual(s.view('A').casting!.castId, c.castId, 'next kanji');
  // nobody answers: nothing happens, the answer is shown
  tick(RULES.overtimeCardMs);
  const t = s.devents().filter((e) => e.kind === 'resolve').at(-1);
  assert.deepEqual([t.ok, t.playerId, t.amount], [false, '', 0]);
  // after the overtime clock the higher HP wins
  tick(RULES.overtimeMaxMs);
  assert.ok(s.g.isOver);
  const over = s.events.find((e) => e.type === 'game_over') as any;
  assert.deepEqual([over.reason, over.winnerId], ['time', 'B']);
});

test('overtime ends early with a KO', () => {
  const s = setup(() => 0.1, { ...RULES, matchMs: 5000, hp: 100 });
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  tick(5000);
  const c = s.view('A').casting!;
  const e = s.g.peek('A')!.entry;
  s.g.submit('A', c.castId, e.romaji ?? e.reading);
  if (!s.g.isOver) { tick(RULES.overtimeGapMs); const c2 = s.view('A').casting!; const e2 = s.g.peek('A')!.entry; s.g.submit('A', c2.castId, e2.romaji ?? e2.reading); }
  assert.ok(s.g.isOver);
  assert.equal((s.events.find((x) => x.type === 'game_over') as any).winnerId, 'A');
});

test('skipping a turn (choose clock runs out) costs 100 HP; a played card does not', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const a = s.view('A').turn!.active, b = a === 'A' ? 'B' : 'A';
  tick(RULES.chooseMs);
  assert.equal(s.view(a).players.find((p) => p.id === a)!.hp, RULES.hp - RULES.skipPenaltyHp);
  assert.deepEqual(s.devents().at(-1), { kind: 'skip', playerId: a, damage: RULES.skipPenaltyHp });
  assert.equal(s.view(a).turn!.active, b);
  s.g.play(b, s.view(b).hand.find((c) => CARD_SPECS[c.color].cost <= RULES.maxMana)!.cardId);
  tick(RULES.castMs); // too slow: the card rips, but no skip penalty
  assert.equal(s.view(b).players.find((p) => p.id === b)!.hp, RULES.hp);
});

test('separate clocks: 15 s to choose a card, then one minute to cast it', () => {
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

test('casting steps: read (15 s, kanji hidden) → Ready → look (kanji shown) → CAST! → write (kanji hidden); one minute in all', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const a = s.view('A').turn!.active, b = a === 'A' ? 'B' : 'A';
  const card = s.view(a).hand.find((c) => CARD_SPECS[c.color].cost <= RULES.maxMana)!;
  s.g.play(a, card.cardId);
  let c = s.view(a).casting!;
  assert.deepEqual([c.stage, c.card.kanji, c.readLeftMs, c.deadlineMs], ['read', undefined, RULES.castReadMs, RULES.castMs]);
  const kanji = s.g.peek(a)!.entry.kanji;
  s.g.submit(a, c.castId, kanji); // can't write before seeing it
  assert.equal(s.view(a).casting?.castId, c.castId, 'nothing happens while reading');
  s.g.castGo(a, c.castId); // CAST! is not available yet
  assert.equal(s.view(a).casting!.stage, 'read');
  s.g.castReady(b, c.castId); // only the caster presses Ready
  assert.equal(s.view(a).casting!.stage, 'read');
  tick(RULES.castReadMs); // the kanji shows on its own after 15 s
  c = s.view(a).casting!;
  assert.deepEqual([c.stage, c.card.kanji], ['look', kanji]);
  assert.equal(s.view(b).casting!.card.kanji, kanji, 'the opponent sees it too');
  tick(5000);
  s.g.castGo(a, c.castId);
  c = s.view(a).casting!;
  assert.deepEqual([c.stage, c.card.kanji], ['write', undefined], 'the kanji disappears when you cast');
  assert.equal(c.deadlineMs, RULES.castMs - RULES.castReadMs - 5000, 'one clock for the whole spell');
  tick(c.deadlineMs);
  const r = s.devents().filter((e) => e.kind === 'resolve').at(-1);
  assert.equal(r.ok, false, 'too slow → the card rips');
  assert.equal(s.view(a).turn!.active, b);
});

test('Ready before the 15 s are up shows the kanji at once', () => {
  const s = setup();
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const a = s.view('A').turn!.active;
  s.g.play(a, s.view(a).hand.find((c) => CARD_SPECS[c.color].cost <= RULES.maxMana)!.cardId);
  const id = s.view(a).casting!.castId;
  tick(2000);
  s.g.castReady(a, id);
  assert.equal(s.view(a).casting!.stage, 'look');
  tick(RULES.castReadMs); // the old read timer must not fire again
  assert.equal(s.view(a).casting!.stage, 'look');
});

test('after a cast the correct kanji is shown for 2 s: nothing can be played meanwhile, and the next choose clock waits', () => {
  const rules = { ...DECK_RULES };
  const s = setup(() => 0.1, rules);
  s.g.start(); s.g.chooseCharacter('A', 'knight'); s.g.chooseCharacter('B', 'knight'); draftAll(s);
  const a = s.view('A').turn!.active, b = a === 'A' ? 'B' : 'A';
  s.g.play(a, s.view(a).hand.find((c) => CARD_SPECS[c.color].cost <= rules.maxMana)!.cardId);
  const id = s.view(a).casting!.castId;
  s.g.castReady(a, id); s.g.castGo(a, id);
  s.g.submit(a, id, 'ちがう');
  const r = s.devents().filter((e) => e.kind === 'resolve').at(-1);
  assert.equal(r.kanji.length > 0 && r.reading.length > 0, true, 'the event carries the correct kanji');
  assert.deepEqual([s.view(b).turn!.active, s.view(b).turn!.deadlineMs], [b, rules.chooseMs + rules.revealMs]);
  const card = s.view(b).hand.find((c) => CARD_SPECS[c.color].cost <= rules.maxMana)!;
  s.g.play(b, card.cardId);
  assert.equal(s.view(b).casting, null, 'too early: the answer is still showing');
  tick(rules.revealMs);
  s.g.play(b, card.cardId);
  assert.equal(s.view(b).casting!.ownerId, b);
});
