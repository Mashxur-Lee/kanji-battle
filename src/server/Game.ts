import type { KanjiEntry, PlayerId, RoundOutcome, RoundRecord } from '../shared/protocol';
import { isCorrect } from '../shared/romaji';
import type { QuestionProvider } from './QuestionProvider';

export interface GameConfig { maxHp: number; damage: number; roundMs: number; breakMs: number }
export const DEFAULT_CONFIG: GameConfig = { maxHp: 100, damage: 20, roundMs: 12000, breakMs: 2500 };

export type GameEvent =
  | { type: 'round_started'; number: number; kanji: string; durationMs: number }
  | { type: 'wrong_answer'; playerId: PlayerId }
  | { type: 'round_ended'; winnerId: PlayerId | null; entry: KanjiEntry }
  | { type: 'game_over'; winnerId: PlayerId | null; history: RoundRecord[] };

/** Pure game rules. Knows nothing about sockets — it just emits events (observer pattern). */
export class Game {
  private hp = new Map<PlayerId, number>();
  private history: RoundRecord[] = [];
  private current: KanjiEntry | null = null;
  private timer?: ReturnType<typeof setTimeout>;
  private over = false;

  constructor(
    private readonly ids: readonly [PlayerId, PlayerId],
    private readonly questions: QuestionProvider,
    private readonly emit: (e: GameEvent) => void,
    private readonly cfg: GameConfig = DEFAULT_CONFIG,
  ) {
    for (const id of ids) this.hp.set(id, cfg.maxHp);
  }

  get isOver() { return this.over; }
  getHp(id: PlayerId) { return this.hp.get(id) ?? 0; }

  start() { this.later(() => this.nextRound(), this.cfg.breakMs); }

  submit(playerId: PlayerId, text: string) {
    if (this.over || !this.current) return;
    if (isCorrect(text, this.current.romaji)) this.endRound(playerId); // first correct answer wins
    else this.emit({ type: 'wrong_answer', playerId });
  }

  forfeit(loserId: PlayerId) {
    if (!this.over) this.finish(this.opponentOf(loserId));
  }

  dispose() { clearTimeout(this.timer); }

  private nextRound() {
    this.current = this.questions.next();
    this.emit({ type: 'round_started', number: this.history.length + 1, kanji: this.current.kanji, durationMs: this.cfg.roundMs });
    this.later(() => this.endRound(null), this.cfg.roundMs);
  }

  private endRound(winnerId: PlayerId | null) {
    const entry = this.current;
    if (!entry) return;
    this.current = null;

    if (winnerId) {
      const loser = this.opponentOf(winnerId);
      this.hp.set(loser, Math.max(0, this.getHp(loser) - this.cfg.damage));
    }
    const outcomes = {} as Record<PlayerId, RoundOutcome>;
    for (const id of this.ids) outcomes[id] = id === winnerId ? 'correct' : 'wrong';
    this.history.push({ entry, winnerId, outcomes });
    this.emit({ type: 'round_ended', winnerId, entry });

    const dead = this.ids.find((id) => this.getHp(id) <= 0);
    if (dead) this.finish(this.opponentOf(dead));
    else this.later(() => this.nextRound(), this.cfg.breakMs);
  }

  private finish(winnerId: PlayerId) {
    this.over = true;
    this.current = null;
    clearTimeout(this.timer);
    this.emit({ type: 'game_over', winnerId, history: this.history });
  }

  private later(fn: () => void, ms: number) {
    clearTimeout(this.timer);
    this.timer = setTimeout(fn, ms);
  }

  private opponentOf(id: PlayerId): PlayerId {
    return this.ids[0] === id ? this.ids[1] : this.ids[0];
  }
}
