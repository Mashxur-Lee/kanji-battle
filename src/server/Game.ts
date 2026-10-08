import { isCorrectReading } from '../shared/kana';
import type {
  BattleEvent, GameOverReason, PlayerId, PlayerStats, StudyItem, VocabEntry, WordStat,
} from '../shared/protocol';
import { ChallengeDeck, type Rng } from './VocabPool';

export interface GameConfig {
  maxHp: number;
  prepMs: number; // study phase
  countdownMs: number; // "3, 2, 1" between study and first challenge
  battleMs: number; // hard cap; highest HP wins when it runs out
  challengeMs: number; // per-challenge answer window; running out counts as a miss
  nextDelayMs: number; // pause after a hit before the next challenge
  missPenaltyMs: number; // pause after a miss — doubles as time to read the correct answer
  damagePerDifficulty: number; // base damage = difficulty × this
  speed: { fastMs: number; slowMs: number; fastMult: number; slowMult: number };
  comboMultipliers: number[]; // index = streak − 1, last value repeats
  missRequeueGap: number; // a missed word returns after this many other words
}

export const DEFAULT_CONFIG: GameConfig = {
  maxHp: 1000,
  prepMs: 60_000,
  countdownMs: 3_000,
  battleMs: 5 * 60_000,
  challengeMs: 10_000,
  nextDelayMs: 700,
  missPenaltyMs: 2_500,
  damagePerDifficulty: 2 / 3, // N5≈10 … N2≈40 … N1≈50+
  speed: { fastMs: 1_000, slowMs: 8_000, fastMult: 1.1, slowMult: 0.8 },
  comboMultipliers: [1.0, 1.1, 1.2, 1.3, 1.5],
  missRequeueGap: 2,
};

/** damage = base × speed × combo (spec §13). Accuracy is binary for typed readings, so it is omitted. */
export function computeDamage(difficulty: number, responseMs: number, combo: number, cfg: GameConfig = DEFAULT_CONFIG): number {
  const base = difficulty * cfg.damagePerDifficulty;
  const { fastMs, slowMs, fastMult, slowMult } = cfg.speed;
  const t = Math.min(1, Math.max(0, (responseMs - fastMs) / (slowMs - fastMs)));
  const speed = fastMult + (slowMult - fastMult) * t;
  const comboMult = cfg.comboMultipliers[Math.min(Math.max(combo, 1), cfg.comboMultipliers.length) - 1];
  return Math.max(1, Math.floor(base * speed * comboMult));
}

export type GameEvent =
  | { type: 'prep'; pool: StudyItem[]; durationMs: number }
  | { type: 'prep_ready'; readyIds: PlayerId[] }
  | { type: 'battle_start'; durationMs: number; countdownMs: number }
  | { type: 'challenge'; playerId: PlayerId; id: number; kanji: string; timeLimitMs: number }
  | {
      type: 'answer_result'; playerId: PlayerId; challengeId: number; correct: boolean; timedOut: boolean;
      entry: VocabEntry; damage: number; combo: number; responseMs: number | null; nextInMs: number;
    }
  | { type: 'battle_update'; event: BattleEvent }
  | { type: 'game_over'; winnerId: PlayerId | null; reason: GameOverReason; stats: Record<PlayerId, PlayerStats> };

type Phase = 'idle' | 'prep' | 'countdown' | 'battle' | 'over';

interface Challenge { id: number; entry: VocabEntry; issuedAt: number }
interface WordTally { entry: VocabEntry; attempts: number; correct: number; totalMs: number }

class PlayerState {
  hp: number;
  combo = 0;
  bestCombo = 0;
  damageDealt = 0;
  current: Challenge | null = null;
  timer?: ReturnType<typeof setTimeout>;
  readonly words = new Map<string, WordTally>();
  constructor(readonly id: PlayerId, readonly deck: ChallengeDeck, maxHp: number) { this.hp = maxHp; }
  get alive() { return this.hp > 0; }
}

/**
 * Pure game rules: study phase → battle → result. Knows nothing about sockets or rooms; it just emits
 * events. Each player answers their own stream of challenges drawn from the shared pool.
 * Written for N players so 2v2 / free-for-all can be added by changing targeting, not the engine.
 */
export class Game {
  private phase: Phase = 'idle';
  private readonly players = new Map<PlayerId, PlayerState>();
  private readonly ready = new Set<PlayerId>();
  private phaseTimer?: ReturnType<typeof setTimeout>;
  private nextChallengeId = 1;

  constructor(
    ids: readonly PlayerId[],
    private readonly pool: readonly VocabEntry[],
    private readonly emit: (e: GameEvent) => void,
    private readonly cfg: GameConfig = DEFAULT_CONFIG,
    rng: Rng = Math.random,
    private readonly now: () => number = Date.now,
  ) {
    if (ids.length < 2) throw new Error('Game needs at least 2 players');
    if (pool.length === 0) throw new Error('Game needs a non-empty pool');
    for (const id of ids) this.players.set(id, new PlayerState(id, new ChallengeDeck(pool, rng), cfg.maxHp));
  }

  get isOver() { return this.phase === 'over'; }
  get maxHp() { return this.cfg.maxHp; }
  getHp(id: PlayerId) { return this.players.get(id)?.hp ?? 0; }
  getCombo(id: PlayerId) { return this.players.get(id)?.combo ?? 0; }

  start() {
    this.phase = 'prep';
    this.emit({
      type: 'prep',
      pool: this.pool.map(({ kanji, reading, meaning, jlpt }) => ({ kanji, reading, meaning, jlpt })),
      durationMs: this.cfg.prepMs,
    });
    this.phaseTimer = setTimeout(() => this.beginBattle(), this.cfg.prepMs);
  }

  /** A player is done studying. When everyone is, the battle starts early. */
  markReady(id: PlayerId) {
    if (this.phase !== 'prep' || !this.players.has(id) || this.ready.has(id)) return;
    this.ready.add(id);
    this.emit({ type: 'prep_ready', readyIds: [...this.ready] });
    if (this.ready.size === this.players.size) this.beginBattle();
  }

  submit(id: PlayerId, challengeId: number, text: string) {
    const p = this.players.get(id);
    if (this.phase !== 'battle' || !p?.alive || !p.current || p.current.id !== challengeId) return;
    const responseMs = this.now() - p.current.issuedAt;
    if (isCorrectReading(text, [p.current.entry.reading, ...(p.current.entry.altReadings ?? [])])) this.hit(p, responseMs);
    else this.miss(p, false, responseMs);
  }

  /** Player left mid-game. */
  forfeit(id: PlayerId) {
    const p = this.players.get(id);
    if (!p || this.isOver) return;
    p.hp = 0;
    this.stopPlayer(p);
    const alive = this.alivePlayers();
    if (alive.length <= 1) this.finish(alive[0]?.id ?? null, 'forfeit');
  }

  dispose() {
    clearTimeout(this.phaseTimer);
    for (const p of this.players.values()) this.stopPlayer(p);
  }

  // ── phases ────────────────────────────────────────────────────────────────

  private beginBattle() {
    if (this.phase !== 'prep') return;
    clearTimeout(this.phaseTimer);
    this.phase = 'countdown';
    this.emit({ type: 'battle_start', durationMs: this.cfg.battleMs, countdownMs: this.cfg.countdownMs });
    this.phaseTimer = setTimeout(() => {
      this.phase = 'battle';
      for (const p of this.players.values()) this.issueChallenge(p);
      this.phaseTimer = setTimeout(() => this.timeUp(), this.cfg.battleMs);
    }, this.cfg.countdownMs);
  }

  private timeUp() {
    if (this.phase !== 'battle') return;
    const ranked = [...this.players.values()].sort((a, b) => b.hp - a.hp);
    const tie = ranked.length > 1 && ranked[0].hp === ranked[1].hp;
    this.finish(tie ? null : ranked[0].id, 'time');
  }

  private finish(winnerId: PlayerId | null, reason: GameOverReason) {
    if (this.isOver) return;
    this.phase = 'over';
    this.dispose();
    const stats: Record<PlayerId, PlayerStats> = {};
    for (const p of this.players.values()) stats[p.id] = this.statsFor(p);
    this.emit({ type: 'game_over', winnerId, reason, stats });
  }

  // ── challenges ────────────────────────────────────────────────────────────

  private issueChallenge(p: PlayerState) {
    if (this.phase !== 'battle' || !p.alive) return;
    const entry = p.deck.draw();
    p.current = { id: this.nextChallengeId++, entry, issuedAt: this.now() };
    this.emit({ type: 'challenge', playerId: p.id, id: p.current.id, kanji: entry.kanji, timeLimitMs: this.cfg.challengeMs });
    const cid = p.current.id;
    this.schedule(p, () => {
      if (p.current?.id === cid) this.miss(p, true, null);
    }, this.cfg.challengeMs);
  }

  private hit(p: PlayerState, responseMs: number) {
    const entry = p.current!.entry;
    const challengeId = p.current!.id;
    p.current = null;
    p.combo += 1;
    p.bestCombo = Math.max(p.bestCombo, p.combo);
    const damage = computeDamage(entry.difficulty, responseMs, p.combo, this.cfg);
    const target = this.targetOf(p);
    if (target) target.hp = Math.max(0, target.hp - damage);
    p.damageDealt += damage;
    this.tally(p, entry, true, responseMs);

    this.emit({
      type: 'answer_result', playerId: p.id, challengeId, correct: true, timedOut: false,
      entry, damage, combo: p.combo, responseMs, nextInMs: this.cfg.nextDelayMs,
    });
    this.emit({ type: 'battle_update', event: { kind: 'hit', playerId: p.id, targetId: target?.id ?? p.id, kanji: entry.kanji, damage, combo: p.combo } });

    if (target && !target.alive) {
      this.stopPlayer(target);
      const alive = this.alivePlayers();
      if (alive.length <= 1) return this.finish(alive[0]?.id ?? null, 'ko');
    }
    this.schedule(p, () => this.issueChallenge(p), this.cfg.nextDelayMs);
  }

  private miss(p: PlayerState, timedOut: boolean, responseMs: number | null) {
    const entry = p.current!.entry;
    const challengeId = p.current!.id;
    p.current = null;
    p.combo = 0;
    p.deck.requeue(entry, this.cfg.missRequeueGap);
    this.tally(p, entry, false, 0);

    this.emit({
      type: 'answer_result', playerId: p.id, challengeId, correct: false, timedOut,
      entry, damage: 0, combo: 0, responseMs, nextInMs: this.cfg.missPenaltyMs,
    });
    this.emit({ type: 'battle_update', event: { kind: 'miss', playerId: p.id, kanji: entry.kanji } });
    this.schedule(p, () => this.issueChallenge(p), this.cfg.missPenaltyMs);
  }

  // ── helpers ───────────────────────────────────────────────────────────────

  /** 1v1 / free-for-all: the first living opponent. Teams would plug in here. */
  private targetOf(p: PlayerState): PlayerState | undefined {
    return [...this.players.values()].find((o) => o !== p && o.alive);
  }

  private alivePlayers() {
    return [...this.players.values()].filter((p) => p.alive);
  }

  private schedule(p: PlayerState, fn: () => void, ms: number) {
    clearTimeout(p.timer);
    p.timer = setTimeout(fn, ms);
  }

  private stopPlayer(p: PlayerState) {
    clearTimeout(p.timer);
    p.current = null;
  }

  private tally(p: PlayerState, entry: VocabEntry, correct: boolean, ms: number) {
    const t = p.words.get(entry.id) ?? { entry, attempts: 0, correct: 0, totalMs: 0 };
    t.attempts += 1;
    if (correct) { t.correct += 1; t.totalMs += ms; }
    p.words.set(entry.id, t);
  }

  private statsFor(p: PlayerState): PlayerStats {
    const tallies = [...p.words.values()];
    const attempts = tallies.reduce((s, t) => s + t.attempts, 0);
    const correct = tallies.reduce((s, t) => s + t.correct, 0);
    const totalMs = tallies.reduce((s, t) => s + t.totalMs, 0);
    const words: WordStat[] = this.pool.map((entry) => {
      const t = p.words.get(entry.id);
      return {
        kanji: entry.kanji, reading: entry.reading, meaning: entry.meaning,
        attempts: t?.attempts ?? 0, correct: t?.correct ?? 0,
        avgMs: t && t.correct > 0 ? Math.round(t.totalMs / t.correct) : null,
      };
    });
    const struggled = tallies
      .filter((t) => t.correct < t.attempts)
      .sort((a, b) => (b.attempts - b.correct) - (a.attempts - a.correct) || a.correct / a.attempts - b.correct / b.attempts)
      .map((t) => t.entry.kanji);
    return {
      damageDealt: p.damageDealt, attempts, correct,
      accuracy: attempts ? correct / attempts : 0,
      avgResponseMs: correct ? Math.round(totalMs / correct) : null,
      bestCombo: p.bestCombo, words, struggled,
    };
  }
}
