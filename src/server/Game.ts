import { isCorrectReading, isRomajiInput } from '../shared/kana';
import { CRIT_MULTIPLIER } from '../shared/progress';
import type { DeckEvent, DeckView } from '../shared/deck';
import type {
  BattleEvent, BossView, DrawnChar, GameMode, GameOverReason, PlayerId, PlayerStats, StudyItem, VocabEntry, WordStat,
} from '../shared/protocol';
import { displayReading } from '../shared/vocab';
import { ChallengeDeck, type Rng } from './VocabPool';

export interface GameConfig {
  prepMs: number; // study phase
  countdownMs: number; // "3, 2, 1" between study and first challenge
  battleMs: number; // hard cap
  challengeMs: number; // per-challenge answer window; running out counts as a miss
  nextDelayMs: number; // pause after a hit before the next challenge
  missPenaltyMs: number; // pause after a miss — doubles as time to read the correct answer
  damagePerDifficulty: number; // base damage = difficulty × this
  speed: { fastMs: number; slowMs: number; fastMult: number; slowMult: number };
  comboMultipliers: number[]; // index = streak − 1, last value repeats
  missRequeueGap: number; // a missed word returns after this many other words
  writingFlashMs: number; // writing mode: how long the kanji is shown before only the meaning remains
  boss: { breathEveryMs: number; breathWarnMs: number; breathDamage: number; clawDamage: number };
}

export const DEFAULT_CONFIG: GameConfig = {
  prepMs: 60_000,
  countdownMs: 3_000,
  battleMs: 5 * 60_000,
  challengeMs: 10_000,
  nextDelayMs: 2_500, // same pause as a miss, so guessing fast and wrong is never quicker than being right
  missPenaltyMs: 2_500,
  damagePerDifficulty: 2 / 3, // N5≈10 … N2≈40 … N1≈50+
  speed: { fastMs: 1_000, slowMs: 8_000, fastMult: 1.1, slowMult: 0.8 },
  comboMultipliers: [1.0, 1.1, 1.2, 1.3, 1.5],
  missRequeueGap: 2,
  writingFlashMs: 3_500,
  boss: { breathEveryMs: 30_000, breathWarnMs: 3_000, breathDamage: 110, clawDamage: 45 },
};

/** Handwriting is slower than typing: longer window and a gentler speed curve. */
export const WRITING_CONFIG: GameConfig = {
  ...DEFAULT_CONFIG,
  challengeMs: 40_000,
  speed: { fastMs: 6_000, slowMs: 28_000, fastMult: 1.1, slowMult: 0.8 }, // the kanji is shown for the first 3.5 s
};

/** At this combo a fighter is wreathed in flames (and immune to the dragon's fire breath). */
export const FIRE_COMBO = 5;

/** damage = base × speed × combo (spec §13). Accuracy is binary here, so it is omitted. */
export function computeDamage(difficulty: number, responseMs: number, combo: number, cfg: GameConfig = DEFAULT_CONFIG): number {
  const base = difficulty * cfg.damagePerDifficulty;
  const { fastMs, slowMs, fastMult, slowMult } = cfg.speed;
  const t = Math.min(1, Math.max(0, (responseMs - fastMs) / (slowMs - fastMs)));
  const speed = fastMult + (slowMult - fastMult) * t;
  const comboMult = cfg.comboMultipliers[Math.min(Math.max(combo, 1), cfg.comboMultipliers.length) - 1];
  return Math.max(1, Math.floor(base * speed * comboMult));
}

/** Judges a handwritten answer: true if every drawn character matches. `recognized` is shown to the player. */
export type WritingJudge = (entry: VocabEntry, chars: DrawnChar[]) => { correct: boolean; recognized: string };

export interface ChallengeInfo { id: number; kanji: string; answerMode: 'reading' | 'romaji' | 'writing'; timeLimitMs: number; meaning?: string; reading?: string; charCount?: number; flashMs?: number }

export type GameEvent =
  | { type: 'prep'; playerId: PlayerId; pool: StudyItem[]; durationMs: number }
  | { type: 'prep_ready'; readyIds: PlayerId[] }
  | { type: 'battle_start'; durationMs: number; countdownMs: number }
  | ({ type: 'challenge'; playerId: PlayerId } & ChallengeInfo)
  | {
      type: 'answer_result'; playerId: PlayerId; challengeId: number; correct: boolean; timedOut: boolean; skipped: boolean;
      entry: VocabEntry; damage: number; combo: number; responseMs: number | null; nextInMs: number; recognized?: string; crit?: boolean;
      retry?: boolean; beaten?: boolean;
    }
  | { type: 'battle_update'; event: BattleEvent }
  | { type: 'deck_state'; playerId: PlayerId; view: DeckView }
  | { type: 'deck_event'; event: DeckEvent }
  | { type: 'game_over'; winnerId: PlayerId | null; teamWon: boolean | null; reason: GameOverReason; stats: Record<PlayerId, PlayerStats>; missed: Record<PlayerId, string[]> };

type Phase = 'idle' | 'prep' | 'countdown' | 'battle' | 'over';

interface Challenge { id: number; entry: VocabEntry; issuedAt: number; limitMs: number }
interface WordTally { entry: VocabEntry; attempts: number; correct: number; totalMs: number }

class PlayerState {
  hp: number;
  combo = 0;
  bestCombo = 0;
  damageDealt = 0;
  current: Challenge | null = null;
  timer?: ReturnType<typeof setTimeout>;
  readonly words = new Map<string, WordTally>();
  readonly deck: ChallengeDeck;
  constructor(readonly id: PlayerId, readonly pool: readonly VocabEntry[], readonly maxHp: number, rng: Rng, readonly crit = 0) {
    this.hp = maxHp;
    this.deck = new ChallengeDeck(pool, rng);
  }
  get alive() { return this.hp > 0; }
}

/** What a Room needs from any match engine (Game, RapidGame, …). */
export interface Match {
  readonly mode: GameMode;
  readonly isOver: boolean;
  start(): void;
  markReady(id: PlayerId): void;
  submit(id: PlayerId, challengeId: number, text: string): void;
  submitWriting(id: PlayerId, challengeId: number, chars: DrawnChar[]): void;
  skip(id: PlayerId, challengeId: number): void;
  forfeit(id: PlayerId): void;
  snapshot(id: PlayerId): GameSnapshot;
  dispose(): void;
  getHp(id: PlayerId): number;
  getMaxHp(id: PlayerId): number;
  getCombo(id: PlayerId): number;
  bossView(): BossView | null;
  /** For AI players: the challenge (or card) this player is answering right now. */
  peek(id: PlayerId): { challengeId: number; entry: VocabEntry } | null;
}

/** Each player brings their own word pool (their chosen levels) and their own max HP (see Balance.ts). */
export interface PlayerSetup { id: PlayerId; pool: readonly VocabEntry[]; maxHp: number; crit?: number }

export interface GameOptions {
  mode: GameMode;
  boss?: { name: string; maxHp: number }; // required for mode 'boss'
  judgeWriting?: WritingJudge; // required for mode 'writing'
}

/** What a reconnecting player needs to pick up where they left off. */
export interface GameSnapshot {
  phase: Phase;
  prep?: { pool: StudyItem[]; leftMs: number; readyIds: PlayerId[] };
  battle?: { leftMs: number; countdownLeftMs: number };
  challenge?: ChallengeInfo;
}

/**
 * Pure game rules: study phase → battle → result. Knows nothing about sockets or rooms; it just emits
 * events. Each player answers their own stream of challenges drawn from their own pool.
 * Modes: 'reading' / 'writing' are duels (players hit each other); 'boss' is co-op against a dragon
 * that claws whoever misses and breathes fire on everyone every 30 seconds.
 */
export class Game implements Match {
  private phase: Phase = 'idle';
  private readonly players = new Map<PlayerId, PlayerState>();
  private readonly ready = new Set<PlayerId>();
  private phaseTimer?: ReturnType<typeof setTimeout>;
  private breathTimers: Array<ReturnType<typeof setTimeout>> = [];
  private phaseEndsAt = 0;
  private battleEndsAt = 0;
  private nextChallengeId = 1;
  private readonly boss: { name: string; hp: number; maxHp: number } | null;

  constructor(
    setups: readonly PlayerSetup[],
    private readonly emit: (e: GameEvent) => void,
    private readonly cfg: GameConfig = DEFAULT_CONFIG,
    private readonly rng: Rng = Math.random,
    private readonly now: () => number = Date.now,
    private readonly opts: GameOptions = { mode: 'reading' },
  ) {
    const minPlayers = opts.mode === 'boss' ? 1 : 2;
    if (setups.length < minPlayers) throw new Error(`Game needs at least ${minPlayers} player(s)`);
    if (opts.mode === 'boss' && !opts.boss) throw new Error('Boss mode needs a boss');
    if (opts.mode === 'writing' && !opts.judgeWriting) throw new Error('Writing mode needs a judge');
    for (const s of setups) {
      if (s.pool.length === 0) throw new Error('Every player needs a non-empty pool');
      this.players.set(s.id, new PlayerState(s.id, s.pool, s.maxHp, rng, s.crit ?? 0));
    }
    this.boss = opts.boss ? { name: opts.boss.name, hp: opts.boss.maxHp, maxHp: opts.boss.maxHp } : null;
  }

  get mode() { return this.opts.mode; }
  peek(id: PlayerId) {
    const p = this.players.get(id);
    return this.phase === 'battle' && p?.alive && p.current ? { challengeId: p.current.id, entry: p.current.entry } : null;
  }
  get isOver() { return this.phase === 'over'; }
  getHp(id: PlayerId) { return this.players.get(id)?.hp ?? 0; }
  getMaxHp(id: PlayerId) { return this.players.get(id)?.maxHp ?? 0; }
  getCombo(id: PlayerId) { return this.players.get(id)?.combo ?? 0; }
  bossView(): BossView | null { return this.boss ? { ...this.boss } : null; }

  start() {
    this.phase = 'prep';
    this.phaseEndsAt = this.now() + this.cfg.prepMs;
    for (const p of this.players.values()) {
      this.emit({ type: 'prep', playerId: p.id, pool: this.studyList(p), durationMs: this.cfg.prepMs });
    }
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
    const p = this.active(id, challengeId);
    if (!p) return;
    const responseMs = this.now() - p.current!.issuedAt;
    const { entry } = p.current!;
    if (this.opts.mode === 'writing') {
      // typed with a Japanese IME: must be the kanji itself (kana/romaji only for hiragana practice)
      const typed = text.normalize('NFKC').replace(/\s+/g, '');
      const ok = typed === entry.kanji || (!!entry.romaji && isCorrectReading(text, [entry.reading]));
      return ok ? this.hit(p, responseMs, typed) : this.miss(p, 'wrong', responseMs, typed);
    }
    const formatOk = !entry.romaji || isRomajiInput(text);
    if (formatOk && isCorrectReading(text, [entry.reading, ...(entry.altReadings ?? [])])) this.hit(p, responseMs);
    else this.miss(p, 'wrong', responseMs);
  }

  /** Writing mode: handwritten characters, judged on the server. */
  submitWriting(id: PlayerId, challengeId: number, chars: DrawnChar[]) {
    const p = this.active(id, challengeId);
    if (!p || this.opts.mode !== 'writing') return;
    const responseMs = this.now() - p.current!.issuedAt;
    const { correct, recognized } = this.opts.judgeWriting!(p.current!.entry, chars);
    if (correct) this.hit(p, responseMs, recognized);
    else this.miss(p, 'wrong', responseMs, recognized);
  }

  /** "I don't know" — counts as a miss: no damage, combo reset, answer shown. */
  skip(id: PlayerId, challengeId: number) {
    const p = this.active(id, challengeId);
    if (p) this.miss(p, 'skipped', this.now() - p.current!.issuedAt);
  }

  /** Player left mid-game (or their reconnect grace ran out). */
  forfeit(id: PlayerId) {
    const p = this.players.get(id);
    if (!p || this.isOver) return;
    p.hp = 0;
    this.stopPlayer(p);
    this.checkEnd('forfeit');
  }

  snapshot(id: PlayerId): GameSnapshot {
    const p = this.players.get(id);
    const now = this.now();
    const snap: GameSnapshot = { phase: this.phase };
    if (!p) return snap;
    if (this.phase === 'prep') snap.prep = { pool: this.studyList(p), leftMs: Math.max(0, this.phaseEndsAt - now), readyIds: [...this.ready] };
    if (this.phase === 'countdown') snap.battle = { leftMs: this.cfg.battleMs, countdownLeftMs: Math.max(0, this.phaseEndsAt - now) };
    if (this.phase === 'battle') snap.battle = { leftMs: Math.max(0, this.battleEndsAt - now), countdownLeftMs: 0 };
    if (this.phase === 'battle' && p.current) {
      snap.challenge = this.challengeInfo(p.current, Math.max(500, p.current.issuedAt + p.current.limitMs - now));
    }
    return snap;
  }

  dispose() {
    clearTimeout(this.phaseTimer);
    for (const t of this.breathTimers) clearTimeout(t);
    this.breathTimers = [];
    for (const p of this.players.values()) this.stopPlayer(p);
  }

  // ── phases ────────────────────────────────────────────────────────────────

  private beginBattle() {
    if (this.phase !== 'prep') return;
    clearTimeout(this.phaseTimer);
    this.phase = 'countdown';
    this.phaseEndsAt = this.now() + this.cfg.countdownMs;
    this.emit({ type: 'battle_start', durationMs: this.cfg.battleMs, countdownMs: this.cfg.countdownMs });
    this.phaseTimer = setTimeout(() => {
      this.phase = 'battle';
      this.battleEndsAt = this.now() + this.cfg.battleMs;
      for (const p of this.players.values()) this.issueChallenge(p);
      this.phaseTimer = setTimeout(() => this.timeUp(), this.cfg.battleMs);
      if (this.boss) this.scheduleBreath();
    }, this.cfg.countdownMs);
  }

  private scheduleBreath() {
    const { breathEveryMs, breathWarnMs, breathDamage } = this.cfg.boss;
    this.breathTimers.push(setTimeout(() => {
      if (this.phase === 'battle') this.emit({ type: 'battle_update', event: { kind: 'breath_warning', inMs: breathWarnMs } });
    }, breathEveryMs - breathWarnMs));
    this.breathTimers.push(setTimeout(() => {
      if (this.phase !== 'battle') return;
      this.breathTimers = [];
      // a player on fire (5+ combo) is immune to dragon fire
      const immune = [...this.players.values()].filter((p) => p.alive && p.combo >= FIRE_COMBO).map((p) => p.id);
      for (const p of this.players.values()) if (p.alive && !immune.includes(p.id)) p.hp = Math.max(0, p.hp - breathDamage);
      this.emit({ type: 'battle_update', event: { kind: 'breath', damage: breathDamage, immune } });
      for (const p of this.players.values()) if (!p.alive) this.stopPlayer(p);
      if (!this.checkEnd('party_wiped')) this.scheduleBreath();
    }, breathEveryMs));
  }

  private timeUp() {
    if (this.phase !== 'battle') return;
    if (this.boss) return this.finish(null, 'time', false); // the dragon survived
    const ranked = [...this.players.values()].sort((a, b) => b.hp - a.hp);
    const tie = ranked.length > 1 && ranked[0].hp === ranked[1].hp;
    this.finish(tie ? null : ranked[0].id, 'time', null);
  }

  /** Ends the game if someone (or the boss) has won. Returns true if it ended. */
  private checkEnd(reason: GameOverReason): boolean {
    if (this.isOver) return true;
    const alive = this.alivePlayers();
    if (this.boss) {
      if (this.boss.hp <= 0) { this.finish(null, 'boss_slain', true); return true; }
      if (alive.length === 0) { this.finish(null, reason === 'forfeit' ? 'forfeit' : 'party_wiped', false); return true; }
      return false;
    }
    if (alive.length <= 1) { this.finish(alive[0]?.id ?? null, reason, null); return true; }
    return false;
  }

  private finish(winnerId: PlayerId | null, reason: GameOverReason, teamWon: boolean | null) {
    if (this.isOver) return;
    this.phase = 'over';
    this.dispose();
    const stats: Record<PlayerId, PlayerStats> = {};
    const missed: Record<PlayerId, string[]> = {};
    for (const p of this.players.values()) {
      stats[p.id] = this.statsFor(p);
      missed[p.id] = [...p.words.values()].filter((t) => t.correct < t.attempts).map((t) => t.entry.id);
    }
    this.emit({ type: 'game_over', winnerId, teamWon, reason, stats, missed });
  }

  // ── challenges ────────────────────────────────────────────────────────────

  private challengeInfo(c: Challenge, limitMs: number): ChallengeInfo {
    const { entry } = c;
    if (this.opts.mode === 'writing') {
      return {
        id: c.id, kanji: entry.kanji, answerMode: 'writing', timeLimitMs: limitMs,
        meaning: entry.meaning, reading: displayReading(entry), charCount: [...entry.kanji].length, flashMs: this.cfg.writingFlashMs,
      };
    }
    return { id: c.id, kanji: entry.kanji, answerMode: entry.romaji ? 'romaji' : 'reading', timeLimitMs: limitMs };
  }

  private issueChallenge(p: PlayerState) {
    if (this.phase !== 'battle' || !p.alive) return;
    const entry = p.deck.draw();
    p.current = { id: this.nextChallengeId++, entry, issuedAt: this.now(), limitMs: this.cfg.challengeMs };
    this.emit({ type: 'challenge', playerId: p.id, ...this.challengeInfo(p.current, this.cfg.challengeMs) });
    const cid = p.current.id;
    this.schedule(p, () => {
      if (p.current?.id === cid) this.miss(p, 'timeout', null);
    }, this.cfg.challengeMs);
  }

  private active(id: PlayerId, challengeId: number): PlayerState | null {
    const p = this.players.get(id);
    if (this.phase !== 'battle' || !p?.alive || !p.current || p.current.id !== challengeId) return null;
    return p;
  }

  private hit(p: PlayerState, responseMs: number, recognized?: string) {
    const { entry, id: challengeId } = p.current!;
    p.current = null;
    p.combo += 1;
    p.bestCombo = Math.max(p.bestCombo, p.combo);
    const crit = p.crit > 0 && this.rng() < p.crit;
    const damage = Math.round(computeDamage(entry.difficulty, responseMs, p.combo, this.cfg) * (crit ? CRIT_MULTIPLIER : 1));
    p.damageDealt += damage;
    this.tally(p, entry, true, responseMs);

    let targetId: PlayerId | 'boss';
    let target: PlayerState | undefined;
    if (this.boss) {
      this.boss.hp = Math.max(0, this.boss.hp - damage);
      targetId = 'boss';
    } else {
      target = this.targetOf(p);
      if (target) target.hp = Math.max(0, target.hp - damage);
      targetId = target?.id ?? p.id;
    }

    this.emit({
      type: 'answer_result', playerId: p.id, challengeId, correct: true, timedOut: false, skipped: false,
      entry, damage, combo: p.combo, responseMs, nextInMs: this.cfg.nextDelayMs, recognized, crit,
    });
    this.emit({ type: 'battle_update', event: { kind: 'hit', playerId: p.id, targetId, kanji: entry.kanji, damage, combo: p.combo, crit } });

    if (target && !target.alive) this.stopPlayer(target);
    if (this.checkEnd('ko')) return;
    this.schedule(p, () => this.issueChallenge(p), this.cfg.nextDelayMs);
  }

  private miss(p: PlayerState, why: 'wrong' | 'timeout' | 'skipped', responseMs: number | null, recognized?: string) {
    const { entry, id: challengeId } = p.current!;
    p.current = null;
    p.combo = 0;
    p.deck.requeue(entry, this.cfg.missRequeueGap);
    this.tally(p, entry, false, 0);

    this.emit({
      type: 'answer_result', playerId: p.id, challengeId, correct: false,
      timedOut: why === 'timeout', skipped: why === 'skipped',
      entry, damage: 0, combo: 0, responseMs, nextInMs: this.cfg.missPenaltyMs, recognized,
    });
    this.emit({ type: 'battle_update', event: { kind: 'miss', playerId: p.id, kanji: entry.kanji } });

    if (this.boss) {
      // the dragon punishes mistakes with a claw swipe
      const damage = this.cfg.boss.clawDamage;
      p.hp = Math.max(0, p.hp - damage);
      this.emit({ type: 'battle_update', event: { kind: 'claw', playerId: p.id, damage } });
      if (!p.alive) { this.stopPlayer(p); this.checkEnd('party_wiped'); return; } // knocked out: no more challenges
    }
    this.schedule(p, () => this.issueChallenge(p), this.cfg.missPenaltyMs);
  }

  // ── helpers ───────────────────────────────────────────────────────────────

  private studyList(p: PlayerState): StudyItem[] {
    return p.pool.map((v) => ({ kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level }));
  }

  /** Duel / free-for-all: the first living opponent. Teams would plug in here. */
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
    const words: WordStat[] = p.pool.map((entry) => {
      const t = p.words.get(entry.id);
      return {
        kanji: entry.kanji, reading: displayReading(entry), meaning: entry.meaning,
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
