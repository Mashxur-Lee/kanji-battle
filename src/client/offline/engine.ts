// The offline engine (0.9.9.4): the server's own study code running in the browser on one player's data.
// It answers the same /api/* calls the server does — study, decks, quiz, reading-passage tasks, daily
// challenge, customize, progress, match history — from a snapshot of the account (GET /api/sync/snapshot).
// Whatever changes is saved locally and, through the outbox (offline/index.ts), replayed on the server later.
import { AuthError, type AuthService } from '../../server/auth/AuthService';
import { MemoryStore, SNAPSHOT_V, type Snapshot, type UserRecord } from '../../server/db/Store';
import { createApiRouter, type ApiResponse } from '../../server/router';
import { DailyService } from '../../server/study/DailyService';
import { StudyService } from '../../server/study/StudyService';
import { deckOf } from '../../shared/srs';
import { loadVocab } from './vocab';

/** One player's data, kept in memory (and saved by the caller whenever it changes). */
export class LocalStore extends MemoryStore {
  readonly name: string = 'offline';
  onChange?: () => void;
  constructor(private readonly uid: string) { super(); }

  load(s: Snapshot) {
    const id = this.uid;
    this.users.set(id, { ...s.user });
    this.srs.set(id, new Map(s.cards.map((c) => [`${deckOf(c)}|${c.vocabId}`, { ...c, deck: deckOf(c) }])));
    this.custom.set(id, s.custom.map((w) => ({ ...w })));
    this.history.set(id, s.matches);
    this.activityLog.set(id, new Map(s.activity.map((a) => [a.day, { ...a }])));
    this.dailyResults.clear();
    if (s.daily?.result) this.dailyResults.set(s.daily.day, new Map([[id, s.daily.result]]));
  }

  dump(): Snapshot {
    const id = this.uid;
    const user = this.users.get(id)!;
    const days = [...this.dailyResults.entries()].filter(([, m]) => m.has(id)).sort(([a], [b]) => b.localeCompare(a));
    return {
      v: SNAPSHOT_V, at: Date.now(), user: { ...user },
      cards: [...(this.srs.get(id)?.values() ?? [])].map((c) => ({ ...c })),
      custom: (this.custom.get(id) ?? []).map((w) => ({ ...w })),
      matches: this.history.get(id) ?? [],
      activity: [...(this.activityLog.get(id)?.values() ?? [])].map((a) => ({ ...a })),
      daily: days.length ? { day: days[0][0], result: days[0][1].get(id)! } : null,
    };
  }

  protected persist() { this.onChange?.(); }
}

const NEEDS_NET = 'You\'re offline — this needs an internet connection.';

export interface Engine {
  readonly userId: string;
  request(method: string, url: string, body?: unknown): Promise<ApiResponse>;
  dump(): Snapshot;
  user(): Promise<UserRecord | null>;
}

/** Builds the engine on a snapshot. `onChange` fires after anything is saved (to store it). */
export async function createEngine(s: Snapshot, onChange: () => void): Promise<Engine> {
  await loadVocab();
  const store = new LocalStore(s.user.id);
  store.load(s);
  store.onChange = onChange;
  const study = new StudyService(store);
  const daily = new DailyService(store, study.progress);
  daily.onPerfect = (id) => study.grantAchievements(id, undefined, ['perfect-day']);
  // just enough of AuthService: you are signed in as the snapshot's player; anything else needs the server
  const auth = {
    store,
    authenticate: async () => {
      const u = await store.findById(s.user.id);
      if (!u) throw new AuthError('Please sign in again', 401);
      return u;
    },
    requireAdmin: async () => { throw new AuthError(NEEDS_NET, 503); },
    login: async () => { throw new AuthError(NEEDS_NET, 503); },
    register: async () => { throw new AuthError(NEEDS_NET, 503); },
  } as unknown as AuthService;
  const route = createApiRouter(auth, study, { daily, onError: (where, e) => console.error('[offline]', where, e) });
  return {
    userId: s.user.id,
    async request(method, url, body) {
      const [path, qs] = url.split('?');
      const out = await route({ method, url: path, query: new URLSearchParams(qs ?? ''), token: 'offline', ip: '', json: async () => (body ?? {}) as Record<string, any> });
      return out ?? { status: 404, body: { error: 'Not found' } };
    },
    dump: () => store.dump(),
    user: () => store.findById(s.user.id),
  };
}
