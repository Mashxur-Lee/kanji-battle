import { CARD_COLORS, CARD_SPECS, DECK_RULES, type CardColor, type DeckCardView, type DeckCharacter, type DeckEvent, type DeckPhase, type DeckPlayerView, type DeckView } from '../shared/deck';
import { DECK_CHARACTERS } from '../shared/deck';
import { isCorrectReading } from '../shared/kana';
import { CRIT_MULTIPLIER } from '../shared/progress';
import type { BossView, DrawnChar, PlayerId, PlayerStats, VocabEntry, WordStat } from '../shared/protocol';
import { displayReading } from '../shared/vocab';
import type { GameEvent, GameSnapshot, Match, WritingJudge } from './Game';
import { shuffle, type Rng } from './VocabPool';

type Rules = typeof DECK_RULES;
type DraftPool = Array<{ entry: VocabEntry; color: CardColor }>;

interface Card { cardId: string; color: CardColor; entry: VocabEntry; revealed: boolean }
interface DPlayer {
  id: PlayerId; name: string; hp: number; mana: number; crit: number; pic: string | null;
  character: DeckCharacter | null; cooldown: number; frenzy: boolean; abilityActive: number;
  hand: Card[]; wizardCardsUsed: boolean; wizardManaUsed: boolean;
  casts: number; hits: number; totalMs: number; damage: number; words: Map<string, { entry: VocabEntry; attempts: number; correct: number; totalMs: number }>;
}
interface Cast { castId: number; card: Card; ownerId: PlayerId | null; startedAt: number; flashMs: number | null; tried: Set<PlayerId> }

/** Picks the 20 draft cards: 4 writable words per JLPT level, coloured by difficulty rank. */
export function buildDraftPool(vocab: readonly VocabEntry[], writable: (v: VocabEntry) => boolean, rng: Rng, perLevel = DECK_RULES.cardsPerLevel): Array<{ entry: VocabEntry; color: CardColor }> {
  const picked: VocabEntry[] = [];
  for (const level of ['N5', 'N4', 'N3', 'N2', 'N1'] as const) {
    picked.push(...shuffle(vocab.filter((v) => v.level === level && writable(v)), rng).slice(0, perLevel));
  }
  // Level is the main signal but not the only one: difficulty already folds in stroke count and word length.
  const ranked = [...picked].sort((a, b) => a.difficulty - b.difficulty);
  const groupSize = Math.ceil(ranked.length / CARD_COLORS.length);
  return ranked.map((entry, i) => ({ entry, color: CARD_COLORS[Math.min(CARD_COLORS.length - 1, Math.floor(i / groupSize))] }));
}

/**
 * Deck Duel: pick a character, draft 10 face-down cards each, then take turns casting them by
 * writing their kanji. Mana, healing, character powers, and an overtime sudden-death race.
 */
export class DeckGame implements Match {
  readonly mode = 'deck' as const;
  private phase: DeckPhase = 'characters';
  private readonly players: DPlayer[];
  private draft: Array<{ card: Card; takenBy: PlayerId | null }> = [];
  private picker: PlayerId | null = null;
  private picksLeft = 0;
  private coinWinner: PlayerId | null = null;
  private active: PlayerId | null = null;
  private castsLeft = 0;
  private cast: Cast | null = null;
  private overtimeQueue: Card[] = [];
  private nextCast = 1;
  private deadline = 0;
  private matchEndsAt = 0;
  private timer?: ReturnType<typeof setTimeout>;
  private matchTimer?: ReturnType<typeof setTimeout>;
  private firstTurn = true;
  private round = 1;
  private roundPicks = new Map<PlayerId, number>();
  /** set while a new draft interrupts the battle: whose turn resumes, and the match time that was left */
  private resume: { playerId: PlayerId; matchLeftMs: number } | null = null;
  private readonly makePool: () => DraftPool;
  private pool: DraftPool;

  constructor(
    setups: ReadonlyArray<{ id: PlayerId; name: string; crit?: number; pic?: string | null }>,
    pool: DraftPool | (() => DraftPool),
    private readonly emit: (e: GameEvent) => void,
    private readonly judge: WritingJudge,
    private readonly rng: Rng = Math.random,
    private readonly now: () => number = Date.now,
    private readonly rules: Rules = DECK_RULES,
  ) {
    if (setups.length !== 2) throw new Error('Deck Duel needs exactly 2 players');
    const fixed = typeof pool === 'function' ? null : pool;
    this.makePool = typeof pool === 'function' ? pool : () => fixed!;
    this.pool = this.makePool();
    this.players = setups.map((s) => ({
      id: s.id, name: s.name, hp: rules.hp, mana: rules.maxMana, crit: s.crit ?? 0, pic: s.pic ?? null, character: null, cooldown: 0, frenzy: false, abilityActive: 0,
      hand: [], wizardCardsUsed: false, wizardManaUsed: false, casts: 0, hits: 0, totalMs: 0, damage: 0, words: new Map(),
    }));
  }

  // ── Match interface ───────────────────────────────────────────────────────
  get isOver() { return this.phase === 'over'; }
  getHp(id: PlayerId) { return this.p(id)?.hp ?? 0; }
  getMaxHp() { return this.rules.hp; }
  getCombo() { return 0; }
  bossView(): BossView | null { return null; }
  markReady() {}
  snapshot(): GameSnapshot { return { phase: 'battle' }; }

  start() {
    this.phase = 'characters';
    this.setTimer(this.rules.characterMs, () => {
      for (const p of this.players) if (!p.character) p.character = DECK_CHARACTERS[Math.floor(this.rng() * DECK_CHARACTERS.length)];
      this.beginDraft();
    });
    this.broadcastState();
  }

  chooseCharacter(id: PlayerId, ch: unknown) {
    const p = this.p(id);
    if (this.phase !== 'characters' || !p || p.character || !DECK_CHARACTERS.includes(ch as DeckCharacter)) return;
    p.character = ch as DeckCharacter;
    if (this.players.every((x) => x.character)) this.beginDraft();
    else this.broadcastState();
  }

  pick(id: PlayerId, cardId: unknown) {
    if (this.phase !== 'draft' || this.picker !== id) return;
    const slot = this.draft.find((d) => d.card.cardId === cardId && !d.takenBy);
    if (!slot) return;
    this.takeDraft(id, slot);
  }

  /** Hero power (Wizard is passive): costs 100 mana, then rests for 4 of your turns. On your turn, before casting. */
  ability(id: PlayerId) {
    const p = this.p(id);
    if (this.phase !== 'battle' || this.active !== id || !p || p.cooldown > 0 || this.cast || !p.character || p.character === 'wizard') return;
    if (p.mana < this.rules.abilityCost) return;
    p.mana -= this.rules.abilityCost;
    p.cooldown = this.rules.abilityCooldown;
    if (p.character === 'goblin') { this.castsLeft = 2; p.frenzy = true; }
    else p.abilityActive = this.rules.abilityTurns;
    if (p.character === 'witch') for (const c of p.hand) c.revealed = true;
    this.emitEvent({ kind: 'ability', playerId: id, character: p.character });
    this.broadcastState();
  }

  /** Choose a card from your hand to cast this turn. */
  play(id: PlayerId, cardId: unknown) {
    const p = this.p(id);
    if (this.phase !== 'battle' || this.active !== id || !p || this.cast) return;
    const card = p.hand.find((c) => c.cardId === cardId);
    if (!card || CARD_SPECS[card.color].cost > p.mana) return;
    p.hand = p.hand.filter((c) => c !== card);
    p.mana -= CARD_SPECS[card.color].cost; // paid up front: a ripped card still costs its mana
    card.revealed = true;
    const witchSight = p.character === 'witch' && p.abilityActive > 0;
    this.cast = { castId: this.nextCast++, card, ownerId: id, startedAt: this.now(), flashMs: witchSight ? null : this.rules.castFlashMs, tried: new Set() };
    this.setTimer(this.rules.castMs, () => this.turnTimeout()); // its own clock for writing
    this.emitEvent({ kind: 'cast', playerId: id, color: card.color, kanji: card.entry.kanji });
    this.broadcastState();
  }

  submit(id: PlayerId, castId: number, text: string) {
    const typed = text.normalize('NFKC').replace(/\s+/g, '');
    this.resolveAttempt(id, castId, (entry) => {
      const ok = typed === entry.kanji || (!!entry.romaji && isCorrectReading(text, [entry.reading]));
      return { correct: ok, recognized: typed };
    });
  }

  submitWriting(id: PlayerId, castId: number, chars: DrawnChar[]) {
    this.resolveAttempt(id, castId, (entry) => this.judge(entry, chars));
  }

  /** Give up on the current card (it rips). */
  skip(id: PlayerId, castId: number) {
    this.resolveAttempt(id, castId, () => ({ correct: false, recognized: '' }));
  }

  forfeit(id: PlayerId) {
    const p = this.p(id);
    if (!p || this.isOver) return;
    p.hp = 0;
    this.finish('forfeit');
  }

  peek(id: PlayerId) {
    const c = this.cast;
    if (!c || c.tried.has(id) || (this.phase === 'battle' && c.ownerId !== id)) return null;
    return { challengeId: c.castId, entry: c.card.entry };
  }

  /** Hero pick or the first draft: nothing has been played yet, so the room may go back to the lobby. */
  canReturnToLobby() { return this.phase === 'characters' || (this.phase === 'draft' && this.round === 1); }

  dispose() { clearTimeout(this.timer); clearTimeout(this.matchTimer); }

  /** Full state as one player sees it (sent after every change, and on reconnect). */
  viewFor(id: PlayerId): DeckView {
    const me = this.p(id);
    const now = this.now();
    const left = Math.max(0, this.deadline - now);
    return {
      phase: this.phase,
      you: id,
      players: this.players.map((p) => this.playerView(p)),
      hand: (me?.hand ?? []).map((c) => this.cardView(c, c.revealed)),
      draft: this.phase === 'draft'
        ? { pool: this.draft.map((d) => ({ cardId: d.card.cardId, color: d.card.color, takenBy: d.takenBy })), picker: this.picker, picksLeft: this.picksLeft, coinWinner: this.coinWinner, deadlineMs: left }
        : null,
      turn: this.phase === 'battle' && this.active ? { active: this.active, castsLeft: this.castsLeft, deadlineMs: left, stage: this.cast ? 'cast' : 'choose' } : null,
      round: this.round,
      deckList: this.phase === 'battle' && me && this.active !== id
        ? me.hand.map((c) => ({ kanji: c.entry.kanji, reading: displayReading(c.entry), meaning: c.entry.meaning })).sort((a, b) => a.kanji.localeCompare(b.kanji, 'ja'))
        : null,
      casting: this.cast ? {
        castId: this.cast.castId, ownerId: this.cast.ownerId ?? '',
        card: { ...this.cardView(this.cast.card, true), kanji: this.cast.card.entry.kanji, reading: displayReading(this.cast.card.entry), meaning: this.cast.card.entry.meaning },
        flashMs: this.cast.flashMs === null ? null : Math.max(0, this.cast.flashMs - (now - this.cast.startedAt)),
        deadlineMs: left,
        overtime: this.phase === 'overtime',
      } : null,
      matchLeftMs: this.phase === 'battle' ? Math.max(0, this.matchEndsAt - now) : this.resume ? this.resume.matchLeftMs : 0,
      overtimeLeft: this.overtimeQueue.length + (this.phase === 'overtime' && this.cast ? 1 : 0),
    };
  }

  // ── draft ─────────────────────────────────────────────────────────────────

  private beginDraft() {
    if (this.phase !== 'characters') return;
    this.startDraftRound();
  }

  /** A draft round: 20 fresh cards, coin flip, picks of 2 until both players took 10 more. */
  private startDraftRound() {
    this.phase = 'draft';
    if (this.round > 1) this.pool = this.makePool();
    const prefix = this.round === 1 ? 'c' : `r${this.round}c`;
    this.draft = this.pool.map((x, i) => ({ card: { cardId: `${prefix}${i + 1}`, color: x.color, entry: x.entry, revealed: false }, takenBy: null }));
    shuffle(this.draft, this.rng);
    this.roundPicks = new Map(this.players.map((p) => [p.id, 0]));
    this.coinWinner = this.players[this.rng() < 0.5 ? 0 : 1].id;
    this.emitEvent({ kind: 'coin', winner: this.coinWinner, round: this.round });
    this.nextPicker(this.coinWinner);
  }

  private picksDone(id: PlayerId) { return (this.roundPicks.get(id) ?? 0) >= this.rules.handSize; }

  private nextPicker(id: PlayerId) {
    this.picker = id;
    this.picksLeft = Math.min(this.rules.picksPerTurn, this.rules.handSize - (this.roundPicks.get(id) ?? 0));
    this.setTimer(this.rules.pickMs, () => this.autoPick());
    this.broadcastState();
  }

  /** Pick timer ran out: take random cards for every pick still left this turn. */
  private autoPick() {
    const id = this.picker;
    for (let n = this.picksLeft; n > 0 && this.phase === 'draft' && this.picker === id && id; n--) {
      const free = this.draft.filter((d) => !d.takenBy);
      if (!free.length) return;
      this.takeDraft(id, free[Math.floor(this.rng() * free.length)]);
    }
  }

  private takeDraft(id: PlayerId, slot: { card: Card; takenBy: PlayerId | null }) {
    const p = this.p(id)!;
    slot.takenBy = id;
    if (p.character === 'witch' && p.abilityActive > 0) slot.card.revealed = true; // Sight still running
    p.hand.push(slot.card);
    this.roundPicks.set(id, (this.roundPicks.get(id) ?? 0) + 1);
    this.picksLeft--;
    this.emitEvent({ kind: 'pick', playerId: id, color: slot.card.color });
    if (this.players.every((x) => this.picksDone(x.id)) || this.draft.every((d) => d.takenBy)) return this.endDraft();
    const other = this.other(id);
    if (this.picksLeft > 0 && !this.picksDone(id)) {
      // same player's second pick: the same 20 s clock keeps running (one timer for both cards)
      return this.broadcastState();
    }
    this.nextPicker(!this.picksDone(other.id) ? other.id : id);
  }

  private endDraft() {
    this.picker = null;
    if (!this.resume) return this.beginBattle();
    // back to the battle exactly where it stopped: same turn, same HP/mana/powers, match clock unpaused
    const { playerId, matchLeftMs } = this.resume;
    this.resume = null;
    this.phase = 'battle';
    this.matchEndsAt = this.now() + matchLeftMs;
    this.matchTimer = setTimeout(() => this.beginOvertime(), matchLeftMs);
    this.beginTurn(playerId, true);
  }

  // ── battle ────────────────────────────────────────────────────────────────

  private beginBattle() {
    this.phase = 'battle';
    this.picker = null;
    this.matchEndsAt = this.now() + this.rules.matchMs;
    this.matchTimer = setTimeout(() => this.beginOvertime(), this.rules.matchMs);
    // the coin-flip winner drafted first, so the other player opens the battle
    this.beginTurn(this.other(this.coinWinner!).id);
  }

  private beginTurn(id: PlayerId, resumed = false) {
    if (this.phase !== 'battle') return;
    const p = this.p(id)!;
    this.active = id;
    this.castsLeft = 1;
    this.cast = null;
    if (!resumed && p.cooldown > 0) p.cooldown--; // hero power recharges one step each of your turns
    if (!this.firstTurn && !resumed) p.mana = Math.min(this.rules.maxMana, p.mana + this.rules.manaPerTurn); // restores after the enemy's turn
    this.firstTurn = false;
    // can this player still act? (Wizard's passive saves them once each)
    if (p.hand.length === 0 && p.character === 'wizard' && !p.wizardCardsUsed) {
      p.wizardCardsUsed = true;
      for (const x of shuffle([...this.pool], this.rng).slice(0, this.rules.wizardBonusCards)) {
        p.hand.push({ cardId: `w${this.nextCast++}`, color: x.color, entry: x.entry, revealed: false });
      }
      this.emitEvent({ kind: 'wizard', playerId: id, what: 'cards' });
    }
    if (p.hand.length > 0 && !this.canAfford(p) && p.character === 'wizard' && !p.wizardManaUsed) {
      p.wizardManaUsed = true;
      p.mana = Math.min(this.rules.maxMana, p.mana + this.rules.wizardBonusMana);
      this.emitEvent({ kind: 'wizard', playerId: id, what: 'mana' });
    }
    if (p.hand.length === 0) return this.redraft(id); // out of cards → round 2 draft
    if (!this.canAfford(p)) {
      this.emitEvent({ kind: 'stuck', playerId: id, why: 'no_mana' });
      p.hp = 0; // has cards but can't pay for any → instant loss
      return this.finish('ko');
    }
    this.setTimer(this.rules.chooseMs, () => this.turnTimeout());
    this.broadcastState();
  }

  /** Someone ran out of cards: pause the match clock and draft again. Nothing else changes. */
  private redraft(playerId: PlayerId) {
    clearTimeout(this.matchTimer);
    this.resume = { playerId, matchLeftMs: Math.max(0, this.matchEndsAt - this.now()) };
    this.active = null;
    this.round++;
    this.emitEvent({ kind: 'redraft', playerId, round: this.round });
    this.startDraftRound();
  }

  private turnTimeout() {
    if (this.cast) this.resolve(this.cast, null, { correct: false, recognized: '' }, true);
    else this.endTurn();
  }

  private endTurn() {
    const p = this.p(this.active!)!;
    p.frenzy = false;
    if (p.abilityActive > 0 && p.character !== 'goblin') {
      p.abilityActive--;
      if (p.character === 'witch' && p.abilityActive === 0) for (const c of p.hand) c.revealed = false;
    }
    this.beginTurn(this.other(p.id).id);
  }

  private resolveAttempt(id: PlayerId, castId: number, judge: (e: VocabEntry) => { correct: boolean; recognized: string }) {
    const c = this.cast;
    if (!c || c.castId !== castId || c.tried.has(id)) return;
    if (this.phase === 'battle' && c.ownerId !== id) return; // only the caster writes on their turn
    if (this.phase !== 'battle' && this.phase !== 'overtime') return;
    const result = judge(c.card.entry);
    if (this.phase === 'overtime' && !result.correct) {
      // overtime race: one try each; the card is lost when both miss
      c.tried.add(id);
      this.tally(this.p(id)!, c.card.entry, false, 0);
      this.emitEvent({ kind: 'resolve', playerId: id, color: c.card.color, kanji: c.card.entry.kanji, reading: displayReading(c.card.entry), meaning: c.card.entry.meaning, ok: false, amount: 0, targetId: id, recognized: result.recognized, overtime: true });
      if (this.players.every((p) => c.tried.has(p.id))) this.nextOvertimeCard();
      else this.broadcastState();
      return;
    }
    this.resolve(c, id, result, false);
  }

  /** Apply (or rip) the card being cast. */
  private resolve(c: Cast, by: PlayerId | null, result: { correct: boolean; recognized: string }, timedOut: boolean) {
    const casterId = by ?? c.ownerId;
    const caster = casterId ? this.p(casterId)! : null;
    const spec = CARD_SPECS[c.card.color];
    const ms = this.now() - c.startedAt;
    let amount = 0;
    let refund = 0;
    let targetId = casterId ?? '';
    if (caster) this.tally(caster, c.card.entry, result.correct, ms);
    if (caster && result.correct) {
      // a successful spell gives back half its mana (paid when the card was played)
      if (this.phase === 'battle' && spec.cost > 0) {
        const before = caster.mana;
        caster.mana = Math.min(this.rules.maxMana, caster.mana + Math.floor(spec.cost * this.rules.manaRefund));
        refund = caster.mana - before;
      }
      const foe = this.other(caster.id);
      if (spec.kind === 'attack') {
        const crit = caster.crit > 0 && this.rng() < caster.crit;
        const bulwark = foe.character === 'knight' && foe.abilityActive > 0 ? this.rules.knightDamageTaken : 1;
        amount = Math.round(spec.amount * (crit ? CRIT_MULTIPLIER : 1) * bulwark);
        foe.hp = Math.max(0, foe.hp - amount);
        caster.damage += amount;
        targetId = foe.id;
      } else if (spec.kind === 'heal') {
        const bonus = caster.character === 'knight' && caster.abilityActive > 0 ? this.rules.knightHealBonus : 1;
        const before = caster.hp;
        caster.hp = Math.min(this.rules.hp, caster.hp + Math.round(spec.amount * bonus));
        amount = caster.hp - before;
      } else {
        const before = caster.mana;
        caster.mana = Math.min(this.rules.maxMana, caster.mana + spec.amount);
        amount = caster.mana - before;
      }
    }
    this.emitEvent({
      kind: 'resolve', playerId: casterId ?? '', color: c.card.color, kanji: c.card.entry.kanji, reading: displayReading(c.card.entry),
      meaning: c.card.entry.meaning, ok: result.correct, amount, targetId, refund, recognized: timedOut ? undefined : result.recognized, overtime: this.phase === 'overtime',
    });
    this.cast = null;
    if (this.players.some((p) => p.hp <= 0)) return this.finish('ko');
    if (this.phase === 'overtime') return this.nextOvertimeCard();
    this.castsLeft--;
    if (this.castsLeft > 0 && caster && caster.hand.length > 0 && this.canAfford(caster)) {
      this.setTimer(this.rules.chooseMs, () => this.turnTimeout()); // Goblin's second card
      return this.broadcastState();
    }
    this.endTurn();
  }

  // ── overtime ──────────────────────────────────────────────────────────────

  private beginOvertime() {
    if (this.phase !== 'battle') return;
    this.phase = 'overtime';
    this.active = null;
    // the card being cast goes back into the pile; everyone's remaining cards are collected
    const all = [...this.players.flatMap((p) => p.hand), ...(this.cast ? [this.cast.card] : [])];
    for (const p of this.players) p.hand = [];
    this.cast = null;
    this.overtimeQueue = shuffle(all, this.rng);
    this.emitEvent({ kind: 'overtime' });
    this.nextOvertimeCard();
  }

  /** Overtime: cards are shown one at a time; whoever writes it first uses it. */
  private nextOvertimeCard() {
    const card = this.overtimeQueue.shift();
    if (!card) return this.finish('time');
    card.revealed = true;
    this.cast = { castId: this.nextCast++, card, ownerId: null, startedAt: this.now(), flashMs: this.rules.castFlashMs, tried: new Set() };
    this.setTimer(this.rules.overtimeCardMs, () => this.nextOvertimeCard());
    this.broadcastState();
  }

  // ── end ───────────────────────────────────────────────────────────────────

  private finish(reason: 'ko' | 'time' | 'forfeit') {
    if (this.isOver) return;
    this.phase = 'over';
    this.cast = null;
    this.dispose();
    const [a, b] = this.players;
    const winnerId = a.hp === b.hp ? null : a.hp > b.hp ? a.id : b.id;
    const stats: Record<PlayerId, PlayerStats> = {};
    const missed: Record<PlayerId, string[]> = {};
    for (const p of this.players) {
      const words: WordStat[] = [...p.words.values()].map((w) => ({
        kanji: w.entry.kanji, reading: displayReading(w.entry), meaning: w.entry.meaning, attempts: w.attempts, correct: w.correct,
        avgMs: w.correct ? Math.round(w.totalMs / w.correct) : null,
      }));
      const struggled = [...p.words.values()].filter((w) => w.correct < w.attempts);
      stats[p.id] = {
        damageDealt: p.damage, attempts: p.casts, correct: p.hits, accuracy: p.casts ? p.hits / p.casts : 0,
        avgResponseMs: p.hits ? Math.round(p.totalMs / p.hits) : null, bestCombo: 0, words, struggled: struggled.map((w) => w.entry.kanji),
      };
      missed[p.id] = struggled.map((w) => w.entry.id);
    }
    this.broadcastState();
    this.emit({ type: 'game_over', winnerId, teamWon: null, reason, stats, missed });
  }

  // ── helpers ───────────────────────────────────────────────────────────────

  private p(id: PlayerId) { return this.players.find((x) => x.id === id); }
  private other(id: PlayerId) { return this.players.find((x) => x.id !== id)!; }
  private canAfford(p: DPlayer) { return p.hand.some((c) => CARD_SPECS[c.color].cost <= p.mana); }

  private setTimer(ms: number, fn: () => void) {
    clearTimeout(this.timer);
    this.deadline = this.now() + ms;
    this.timer = setTimeout(fn, ms);
  }

  private tally(p: DPlayer, entry: VocabEntry, correct: boolean, ms: number) {
    p.casts++;
    if (correct) { p.hits++; p.totalMs += ms; }
    const w = p.words.get(entry.id) ?? { entry, attempts: 0, correct: 0, totalMs: 0 };
    w.attempts++;
    if (correct) { w.correct++; w.totalMs += ms; }
    p.words.set(entry.id, w);
  }

  private cardView(c: Card, reveal: boolean): DeckCardView {
    return reveal
      ? { cardId: c.cardId, color: c.color, kanji: c.entry.kanji, reading: displayReading(c.entry), meaning: c.entry.meaning }
      : { cardId: c.cardId, color: c.color };
  }

  private playerView(p: DPlayer): DeckPlayerView {
    const handCounts = Object.fromEntries(CARD_COLORS.map((col) => [col, p.hand.filter((c) => c.color === col).length])) as Record<CardColor, number>;
    return {
      id: p.id, name: p.name, hp: p.hp, maxHp: this.rules.hp, mana: p.mana, maxMana: this.rules.maxMana,
      character: p.character,
      abilityCooldown: p.cooldown,
      abilityActive: p.character === 'goblin' ? (this.active === p.id && p.frenzy ? this.castsLeft : 0) : p.abilityActive,
      handCounts, handSize: p.hand.length, wizardCardsUsed: p.wizardCardsUsed, wizardManaUsed: p.wizardManaUsed, pic: p.pic,
    };
  }

  private broadcastState() {
    for (const p of this.players) this.emit({ type: 'deck_state', playerId: p.id, view: this.viewFor(p.id) });
  }

  private emitEvent(event: DeckEvent) {
    this.emit({ type: 'deck_event', event });
  }
}
