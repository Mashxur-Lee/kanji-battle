import { randomUUID } from 'node:crypto';
import type { PlayerId, PlayerView, ServerMessage } from '../shared/protocol';
import { DEFAULT_CONFIG, Game, type GameEvent } from './Game';
import { DeckQuestionProvider } from './QuestionProvider';

/** Transport-agnostic: Room only needs something it can send messages to. */
export interface Client { send(msg: ServerMessage): void }

export class Room {
  private roster: Array<{ id: PlayerId; name: string }> = [];
  private clients = new Map<PlayerId, Client>();
  private game?: Game;

  constructor(readonly code: string, private readonly onEmpty: () => void) {}

  join(name: string, client: Client): PlayerId | null {
    if (this.roster.length >= 2) return null;
    const id = randomUUID();
    this.roster.push({ id, name: name.trim().slice(0, 16) || 'Player' });
    this.clients.set(id, client);
    client.send({ type: 'joined', code: this.code, you: id, players: this.view() });

    if (this.roster.length === 2) {
      this.broadcast({ type: 'lobby', players: this.view() });
      this.startGame();
    }
    return id;
  }

  answer(id: PlayerId, text: string) {
    this.game?.submit(id, text.slice(0, 40));
  }

  leave(id: PlayerId) {
    this.clients.delete(id);
    if (this.game && !this.game.isOver) this.game.forfeit(id); // opponent wins
    if (this.clients.size === 0) {
      this.game?.dispose();
      this.onEmpty();
    }
  }

  private startGame() {
    const [a, b] = this.roster.map((p) => p.id);
    this.game = new Game([a, b], new DeckQuestionProvider(), (e) => this.onGameEvent(e));
    this.game.start();
  }

  private onGameEvent(e: GameEvent) {
    switch (e.type) {
      case 'round_started':
        return this.broadcast({ type: 'round', number: e.number, kanji: e.kanji, durationMs: e.durationMs, players: this.view() });
      case 'wrong_answer':
        return this.clients.get(e.playerId)?.send({ type: 'wrong' });
      case 'round_ended':
        return this.broadcast({ type: 'round_end', winnerId: e.winnerId, entry: e.entry, players: this.view() });
      case 'game_over':
        return this.broadcast({ type: 'game_over', winnerId: e.winnerId, players: this.view(), history: e.history });
    }
  }

  private view(): PlayerView[] {
    return this.roster.map((p) => ({ id: p.id, name: p.name, hp: this.game?.getHp(p.id) ?? DEFAULT_CONFIG.maxHp }));
  }

  private broadcast(msg: ServerMessage) {
    for (const c of this.clients.values()) c.send(msg);
  }
}
