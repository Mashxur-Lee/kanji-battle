import { isCorrectReading, isRomajiInput } from '../shared/kana';
import { CRIT_MULTIPLIER } from '../shared/progress';
import type { BossView, DrawnChar, PlayerId, PlayerStats, VocabEntry, WordStat } from '../shared/protocol';
import { displayReading } from '../shared/vocab';
import { computeDamage, DEFAULT_CONFIG, type GameConfig, type GameEvent, type GameSnapshot, type Match } from './Game';
import { ChallengeDeck, type Rng } from './VocabPool';

export const RAPID = { roundMs: 12_000, revealMs: 2_200 };

interface RPlayer {
  id: PlayerId; hp: number; maxHp: number; crit: number; combo: number; bestCombo: number; damageDealt: number;
  gaveUp: boolean; attempts: number; correct: number; totalMs: number;
  words: Map<string, { entry: VocabEntry; attempts: number; correct: number; totalMs: number }>;
}

/**
 * "1v1 Rapid": the original race. Everyone sees the same kanji; the first correct reading wins the
 * round and hits everyone else. Wrong guesses can retry until someone gets it or time runs out.
 */
export class RapidGame implements Match {
  readonly mode = 'rapid' as const;
  private phase: 'idle' | 'countdown' | 'battle' | 'over' = 'idle';
  private readonly players = new Map<PlayerId, RPlayer>();
  private readonly deck: ChallengeDeck;
  private current: { id: number; entry: VocabEntry; issuedAt: number } | null = null;
  private nextId = 1;
  private timer?: ReturnType<typeof setTimeout>;
  private roundTimer?: ReturnType<typeof setTimeout>;
  private capTimer?: ReturnType<typeof setTimeout>;
  private battleEndsAt = 0;
  private phaseEndsAt = 0;

  constructor(
    setups: ReadonlyArray<{ id: PlayerId; maxHp: number; crit?: number }>,
    pool: readonly VocabEntry[],
    private readonly emit: (e: GameEvent) => void,
    private readonly cfg: GameConfig = DEFAULT_CONFIG,
    private readonly rng: Rng = Math.random,
    private readonly now: () => number = Date.now,
  ) {
    if (setups.length < 2) throw new Error('Rapid needs 2 players');
    if (pool.length === 0) throw new Error('Rapid needs words');
    this.deck = new ChallengeDeck(pool, rng);
    for (const s of setups) {
      this.players.set(s.id, { id: s.id, hp: s.maxHp, maxHp: s.maxHp, crit: s.crit ?? 0, combo: 0, bestCombo: 0, damageDealt: 0, gaveUp: false, attempts: 0, correct: 0, totalMs: 0, words: new Map() });
    }
  }

  get isOver() { return this.phase === 'over'; }
  getHp(id: PlayerId) { return this.players.get(id)?.hp ?? 0; }
  getMaxHp(id: PlayerId) { return this.players.get(id)?.maxHp ?? 0; }
  getCombo(id: PlayerId) { return this.players.get(id)?.combo ?? 0; }
  bossView(): BossView | null { return null; }
  markReady() {}
  submitWriting(_id: PlayerId, _c: number, _chars: DrawnChar[]) {}

  /** No study phase: straight to the countdown. */
  start() {
    this.phase = 'countdown';
    this.phaseEndsAt = this.now() + this.cfg.countdownMs;
    this.emit({ type: 'battle_start', durationMs: this.cfg.battleMs, countdownMs: this.cfg.countdownMs });
    this.timer = setTimeout(() => {
      this.phase = 'battle';
      this.battleEndsAt = this.now() + this.cfg.battleMs;
      this.nextRound();
      this.capTimer = setTimeout(() => this.timeUp(), this.cfg.battleMs);
    }, this.cfg.countdownMs);
  }

  submit(id: PlayerId, challengeId: number, text: string) {
    const p = this.players.get(id);
    const c = this.current;
    if (this.phase !== 'battle' || !p || !c || c.id !== challengeId || p.gaveUp) return;
    const ms = this.now() - c.issuedAt;
    const ok = (!c.entry.romaji || isRomajiInput(text)) && isCorrectReading(text, [c.entry.reading, ...(c.entry.altReadings ?? [])]);
    p.attempts++;
    const w = this.word(p, c.entry);
    w.attempts++;
    if (!ok) {
      p.combo = 0;
      this.emit({ type: 'answer_result', playerId: id, challengeId, correct: false, timedOut: false, skipped: false, entry: c.entry, damage: 0, combo: 0, responseMs: ms, nextInMs: 0, retry: true });
      return;
    }
    // first correct answer wins the round
    p.correct++; p.totalMs += ms; w.correct++; w.totalMs += ms;
    p.combo++; p.bestCombo = Math.max(p.bestCombo, p.combo);
    const crit = p.crit > 0 && this.rng() < p.crit;
    const damage = Math.round(computeDamage(c.entry.difficulty, ms, p.combo, this.cfg) * (crit ? CRIT_MULTIPLIER : 1));
    p.damageDealt += damage;
    this.current = null;
    clearTimeout(this.roundTimer);
    for (const o of this.players.values()) {
      if (o === p) continue;
      o.hp = Math.max(0, o.hp - damage);
      o.combo = 0;
      this.emit({ type: 'answer_result', playerId: o.id, challengeId, correct: false, timedOut: false, skipped: false, entry: c.entry, damage: 0, combo: 0, responseMs: null, nextInMs: RAPID.revealMs, beaten: true });
      this.emit({ type: 'battle_update', event: { kind: 'hit', playerId: p.id, targetId: o.id, kanji: c.entry.kanji, damage, combo: p.combo, crit } });
    }
    this.emit({ type: 'answer_result', playerId: id, challengeId, correct: true, timedOut: false, skipped: false, entry: c.entry, damage, combo: p.combo, responseMs: ms, nextInMs: RAPID.revealMs, crit });
    if (!this.checkEnd()) this.timer = setTimeout(() => this.nextRound(), RAPID.revealMs);
  }

  /** Give up on this round. When everyone has, the answer is revealed. */
  skip(id: PlayerId, challengeId: number) {
    const p = this.players.get(id);
    if (!p || !this.current || this.current.id !== challengeId || p.gaveUp) return;
    p.gaveUp = true;
    p.combo = 0;
    const w = this.word(p, this.current.entry);
    w.attempts++;
    this.emit({ type: 'answer_result', playerId: id, challengeId, correct: false, timedOut: false, skipped: true, entry: this.current.entry, damage: 0, combo: 0, responseMs: null, nextInMs: 0 });
    if ([...this.players.values()].every((x) => x.gaveUp)) this.endRoundNoWinner(false);
  }

  peek(id: PlayerId) {
    const p = this.players.get(id);
    return this.current && p && !p.gaveUp ? { challengeId: this.current.id, entry: this.current.entry } : null;
  }

  forfeit(id: PlayerId) {
    const p = this.players.get(id);
    if (!p || this.isOver) return;
    p.hp = 0;
    this.finish('forfeit');
  }

  snapshot(id: PlayerId): GameSnapshot {
    const snap: GameSnapshot = { phase: this.phase === 'countdown' ? 'countdown' : this.phase === 'battle' ? 'battle' : this.phase === 'over' ? 'over' : 'idle' };
    const now = this.now();
    if (this.phase === 'countdown') snap.battle = { leftMs: this.cfg.battleMs, countdownLeftMs: Math.max(0, this.phaseEndsAt - now) };
    if (this.phase === 'battle') snap.battle = { leftMs: Math.max(0, this.battleEndsAt - now), countdownLeftMs: 0 };
    if (this.phase === 'battle' && this.current && !this.players.get(id)?.gaveUp) {
      const c = this.current;
      snap.challenge = { id: c.id, kanji: c.entry.kanji, answerMode: c.entry.romaji ? 'romaji' : 'reading', timeLimitMs: Math.max(500, c.issuedAt + RAPID.roundMs - now) };
    }
    return snap;
  }

  dispose() { clearTimeout(this.timer); clearTimeout(this.roundTimer); clearTimeout(this.capTimer); }

  // ── internals ─────────────────────────────────────────────────────────────

  private nextRound() {
    if (this.phase !== 'battle') return;
    const entry = this.deck.draw();
    this.current = { id: this.nextId++, entry, issuedAt: this.now() };
    for (const p of this.players.values()) {
      p.gaveUp = false;
      this.emit({ type: 'challenge', playerId: p.id, id: this.current.id, kanji: entry.kanji, answerMode: entry.romaji ? 'romaji' : 'reading', timeLimitMs: RAPID.roundMs });
    }
    const cid = this.current.id;
    this.roundTimer = setTimeout(() => { if (this.current?.id === cid) this.endRoundNoWinner(true); }, RAPID.roundMs);
  }

  private endRoundNoWinner(timedOut: boolean) {
    const c = this.current;
    if (!c) return;
    this.current = null;
    clearTimeout(this.roundTimer);
    for (const p of this.players.values()) {
      if (timedOut) { p.combo = 0; if (!p.gaveUp) this.word(p, c.entry).attempts++; }
      if (timedOut || !p.gaveUp) this.emit({ type: 'answer_result', playerId: p.id, challengeId: c.id, correct: false, timedOut, skipped: !timedOut, entry: c.entry, damage: 0, combo: 0, responseMs: null, nextInMs: RAPID.revealMs });
    }
    this.deck.requeue(c.entry, 3);
    this.timer = setTimeout(() => this.nextRound(), RAPID.revealMs);
  }

  private timeUp() {
    if (this.phase !== 'battle') return;
    this.finish('time');
  }

  private checkEnd(): boolean {
    if ([...this.players.values()].some((p) => p.hp <= 0)) { this.finish('ko'); return true; }
    return false;
  }

  private finish(reason: 'ko' | 'time' | 'forfeit') {
    if (this.isOver) return;
    this.phase = 'over';
    this.dispose();
    const ranked = [...this.players.values()].sort((a, b) => b.hp - a.hp);
    const tie = ranked.length > 1 && ranked[0].hp === ranked[1].hp;
    const stats: Record<PlayerId, PlayerStats> = {};
    const missed: Record<PlayerId, string[]> = {};
    for (const p of this.players.values()) {
      const words: WordStat[] = [...p.words.values()].map((w) => ({
        kanji: w.entry.kanji, reading: displayReading(w.entry), meaning: w.entry.meaning, attempts: w.attempts, correct: w.correct,
        avgMs: w.correct ? Math.round(w.totalMs / w.correct) : null,
      }));
      const struggled = [...p.words.values()].filter((w) => w.correct === 0).map((w) => w.entry);
      stats[p.id] = {
        damageDealt: p.damageDealt, attempts: p.attempts, correct: p.correct, accuracy: p.attempts ? p.correct / p.attempts : 0,
        avgResponseMs: p.correct ? Math.round(p.totalMs / p.correct) : null, bestCombo: p.bestCombo, words, struggled: struggled.map((e) => e.kanji),
      };
      missed[p.id] = struggled.map((e) => e.id);
    }
    this.emit({ type: 'game_over', winnerId: tie ? null : ranked[0].id, teamWon: null, reason, stats, missed });
  }

  private word(p: RPlayer, entry: VocabEntry) {
    let w = p.words.get(entry.id);
    if (!w) { w = { entry, attempts: 0, correct: 0, totalMs: 0 }; p.words.set(entry.id, w); }
    return w;
  }
}
