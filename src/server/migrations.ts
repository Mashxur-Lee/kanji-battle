// 0.9.9.9.6.3: one-off changes to the data, each done once (a mark in the account's unlocks says it's done).
import type { Store, UserRecord } from './db/Store';
import { playerDay } from './study/ProgressService';

/** the game's owner (the admin account, "FrenZyy"): whose test data the one-off fixes are for */
export const isOwner = (u: UserRecord) => u.role === 'admin' && (u.username.toLowerCase() === 'admin' || [u.username, u.nickname ?? ''].some((n) => n.trim().toLowerCase() === 'frenzyy'));

const OWNER_TEST_0963 = 'mig:0.9.9.9.6.3-owner';

/**
 * 0.9.9.9.6.3, asked by the owner: a 20-day streak to see the new weekly flames in the game, and the win/loss record
 * wiped (about 120 forfeits during test sessions). Once — the next restart leaves it alone.
 */
export async function runMigrations(store: Store, now = Date.now()) {
  for (const u of await store.list()) {
    if (!isOwner(u) || (u.unlocks ?? []).includes(OWNER_TEST_0963)) continue;
    const today = playerDay(u, now);
    await store.update(u.id, {
      streak: 20, streakDay: today, bestStreak: Math.max(u.bestStreak ?? 0, 20),
      wins: 0, losses: 0,
      unlocks: [...(u.unlocks ?? []), OWNER_TEST_0963],
    });
    console.log(`[migrations] ${u.username}: a 20-day streak, wins and losses reset (0.9.9.9.6.3)`);
  }
}
