// 0.9.9.9.6.3: one-off changes to the data, each done once (a mark in the account's unlocks says it's done).
import type { Store, UserPatch, UserRecord } from './db/Store';
import { playerDay } from './study/ProgressService';
import { BORDERS, borderUnlocked, CHARACTER_DEFS, characterOf, characterUnlocked, leaguePassed, levelOf } from '../shared/progress';

/** the game's owner (the admin account, "FrenZyy"): whose test data the one-off fixes are for */
export const isOwner = (u: UserRecord) => u.role === 'admin' && (u.username.toLowerCase() === 'admin' || [u.username, u.nickname ?? ''].some((n) => n.trim().toLowerCase() === 'frenzyy'));

const OWNER_TEST_0963 = 'mig:0.9.9.9.6.3-owner';
const REWARDS_09995 = 'mig:0.9.9.9.9.5-rewards';

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
  // 0.9.9.9.9.5: characters come with levels now and the swords with the leagues — what anyone already earned stays
  // theirs: a character whose league they passed ("own:char:<id>"), a sword whose old level they reached ("staff:<id>")
  const OLD_CHAR_LEAGUE: Record<string, string> = { knight: 'N5', witch: 'N3', wizard: 'N2' };
  const OLD_SWORD_LEVEL: Record<string, number> = { iron: 3, longsword: 6, saber: 10, katana: 15, dragonfang: 20 };
  for (const u of await store.list()) {
    const un = u.unlocks ?? [];
    if (un.includes(REWARDS_09995)) continue;
    const add = [
      ...Object.entries(OLD_CHAR_LEAGUE).filter(([, l]) => leaguePassed(l, un)).map(([c]) => `own:char:${c}`),
      ...Object.entries(OLD_SWORD_LEVEL).filter(([, lv]) => levelOf(u.xp) >= lv).map(([s]) => `staff:${s}`),
    ].filter((x) => !un.includes(x));
    await store.update(u.id, { unlocks: [...un, ...add, REWARDS_09995] });
    if (add.length) console.log(`[migrations] ${u.username}: kept ${add.join(', ')} (0.9.9.9.9.5)`);
  }
  // 0.9.9.9.6.4: a league's rewards now come when you pass it, not when you arrive in it — a league border or character
  // worn without having passed that league goes back to none / the Goblin (admins keep theirs: they can wear anything)
  for (const u of await store.list()) {
    if (u.role === 'admin') continue;
    const patch: UserPatch = {};
    const b = BORDERS.find((x) => x.id === u.border);
    if (b?.league && !borderUnlocked(b.id, levelOf(u.xp), u.unlocks ?? [])) patch.border = 'none';
    const c = characterOf(u.unlocks);
    if (CHARACTER_DEFS.some((d) => d.id === c && d.level > 0) && !characterUnlocked(c, (await store.findById(u.id))?.unlocks ?? u.unlocks, u.xp)) patch.unlocks = (u.unlocks ?? []).filter((x) => x !== `char:${c}`);
    if (Object.keys(patch).length) { await store.update(u.id, patch); console.log(`[migrations] ${u.username}: a league reward not yet earned taken off (0.9.9.9.6.4)`); }
  }
}
