// Demo accounts for filming the trailer (after 0.9.9.9.6.8): a hero with months of real-looking study behind them, friends, and battle actors with
// every look unlocked. Written straight into the local file store (the server must be stopped).
import { FileStore } from '../../../src/server/db/Store';
import { hashPassword } from '../../../src/server/auth/passwords';
import { VOCAB } from '../../../src/server/vocab';
import { xpForLevel, FLAMES, STAFFS } from '../../../src/shared/progress';
import { ACHIEVEMENTS } from '../../../src/shared/achievements';
import { kanaCells } from '../../../src/shared/kanachart';
import { rmSync } from 'node:fs';

// its own file (never the developer's own accounts): start the server with USERS_FILE pointing at the same path
const FILE = process.env.USERS_FILE ?? '/tmp/kw-promo-users.json';
rmSync(FILE, { force: true });
const store = new FileStore(FILE) as any;
const realPersist = store.persist.bind(store);
store.persist = () => {};
let s = 20261116;
const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
const ri = (a: number, b: number) => Math.floor(a + rnd() * (b - a + 1));
const DAY = 86_400_000, NOW = Date.now();
const day = (n: number) => new Date(NOW + n * DAY).toISOString().slice(0, 10);
const ALL_LOOKS = [...FLAMES.filter((f) => f.season).map((f) => `flame:${f.id}`), ...STAFFS.filter((x) => x.season).map((x) => `staff:${x.id}`)];

async function user(name: string, o: any = {}) {
  const u = await store.create({ username: name, passwordHash: await hashPassword('secret12'), role: 'user', email: `${name.toLowerCase()}@kanji.test`, emailKey: `${name.toLowerCase()}@kanji.test` });
  const unlocks = ['border:beta', ...(o.unlocks ?? [])];
  await store.update(u.id, { tutorialDone: true, nickname: o.nick ?? name, loginDay: day(0), ...o.patch, unlocks });
  // update() may not take every field: set the rest on the record itself
  const rec = store.users.get(u.id);
  Object.assign(rec, { xp: xpForLevel(o.level ?? 1) + ri(100, 800), wins: o.wins ?? 0, losses: o.losses ?? 0, streak: o.streak ?? 0, streakDay: o.streak ? day(-1) : null, bestStreak: o.best ?? o.streak ?? 0, tutorialDone: true, nickname: o.nick ?? name, unlocks, ...(o.patch ?? {}) });
  return rec;
}

/** study cards: how much of each level is known */
function cards(u: any, share: Record<string, [number, number, number]>) { // level -> [mastered, learned, learning] shares
  const out: any[] = [];
  for (const v of VOCAB as any[]) {
    const lv = v.jlpt ?? v.level;
    const sh = share[lv]; if (!sh) continue;
    const x = rnd();
    let c: any = null;
    const base = { vocabId: v.id, deck: 'all', step: 0, lapses: rnd() < 0.15 ? 1 : 0, struggling: false };
    if (x < sh[0]) { const iv = ri(21, 120); c = { ...base, state: 'review', ease: ri(2300, 2900), intervalDays: iv, due: NOW + ri(1, iv) * DAY + ri(0, DAY), reps: ri(7, 14), addedAt: NOW - ri(60, 170) * DAY }; }
    else if (x < sh[0] + sh[1]) { const iv = ri(1, 20); c = { ...base, state: 'review', ease: ri(2000, 2700), intervalDays: iv, due: NOW + ri(0, iv) * DAY - ri(0, DAY / 2), reps: ri(3, 8), addedAt: NOW - ri(10, 80) * DAY }; }
    else if (x < sh[0] + sh[1] + sh[2]) c = { ...base, state: 'learning', step: ri(0, 1), ease: 2500, intervalDays: 0, due: NOW + ri(-2, 6) * 600_000, reps: ri(1, 3), addedAt: NOW - ri(0, 6) * DAY };
    if (c) out.push(c);
  }
  return store.addCards(u.id, out).then(() => out.length);
}
function activity(u: any, weeks: number, streak: number, intensity = 1) {
  for (let d = -weeks * 7; d <= 0; d++) {
    const recent = d >= -streak;
    if (!recent && rnd() < 0.22 + 0.25 * (-d / (weeks * 7))) continue; // gaps, more of them long ago
    const ramp = 0.45 + 0.55 * (1 + d / (weeks * 7));
    const reviews = Math.round(ri(18, 95) * ramp * intensity), games = ri(0, 6), wins = Math.min(games, ri(0, games + 1));
    const today = d === 0;
    store.addActivity(u.id, day(d), { login: true, reviews: today ? 6 : reviews, games: today ? 1 : games, wins: today ? 1 : wins, quizzes: today ? 0 : recent || rnd() < 0.6 ? 1 : 0, challenges: today ? 0 : recent || rnd() < 0.7 ? 1 : 0, passages: rnd() < 0.2 ? 1 : 0, xp: today ? 240 : reviews * 10 + wins * 120 + games * 40 + (recent ? 500 : 0), studyXp: reviews * 10 });
  }
}
const kanaAll = (hiraShare: number, kataShare: number) => {
  const k: any = {};
  for (const [script, share] of [['hira', hiraShare], ['kata', kataShare]] as const) for (const c of kanaCells(script as any)) { const x = rnd(); if (x < share) k[c.ch] = { s: 10, m: true, d: day(-ri(3, 60)), g: 1 }; else if (x < share + 0.14) k[c.ch] = { s: ri(3, 8), d: day(-ri(0, 3)), g: ri(1, 3) }; }
  return k;
};

(async () => {
  // the hero: half a year in, the N2 league
  const hero = await user('Hikari', { level: 21, wins: 164, losses: 71, streak: 23, best: 41,
    unlocks: ['dleague:N2', 'char:witch', 'pose:twohand', ...ALL_LOOKS.filter((x) => !/starlight|frost|blossom/.test(x)),
      ...ACHIEVEMENTS.filter((a) => /first-win|veteran|champion|combo-5|combo-10|combo-20|flawless|untouchable|last-stand|machine-breaker|quickdraw|calligrapher|dragon-slayer|card-sage|all-schools|scholar|word-hoard|archmage|well-versed|deep-roots|diligent|marathon|graduate|hiragana-hero|quiz-whiz|ace|bookworm|every-word|perfect-day|daily-devotee/.test(a.id)).map((a) => `ach:${a.id}`)],
    patch: { background: 'worldtree', flame: 'sakura', staff: 'storm', border: 'lg-n3', badges: ['all-schools', 'deep-roots', 'dragon-slayer'], dailyNew: 20, studyLevels: ['N3', 'N2'], kana: kanaAll(1, 0.8) } });
  console.log('hero cards', await cards(hero, { N5: [0.93, 0.07, 0], N4: [0.72, 0.24, 0.02], N3: [0.34, 0.33, 0.04], N2: [0.07, 0.17, 0.04], N1: [0.004, 0.02, 0.006], ONO: [0.1, 0.25, 0.05] }));
  activity(hero, 26, 23);
  // friends (leaderboards, messages) — lighter histories
  const friends: any[] = [];
  const F: Array<[string, number, string, string, string, string, string]> = [['Sakura', 26, 'N2', 'wizard', 'moon', 'starlight', 'lg-n3'], ['Kenji', 17, 'N2', 'knight', 'ember', 'purple', 'lg-n4'], ['Mika', 19, 'N2', 'witch', 'abyss', 'rain', 'lg-n3'], ['Ren', 12, 'N3', 'knight', 'tide', 'blue', 'lg-n5'], ['Yuto', 23, 'N2', 'witch', 'void', 'thunder', 'lg-n3'], ['Aoi', 9, 'N4', 'goblin', 'verdant', 'blue', 'lg-kana']];
  for (const [n, level, lg, ch, staff, flame, border] of F) {
    const f = await user(n, { level, wins: ri(20, 200), losses: ri(15, 120), streak: ri(2, 30), best: 35, unlocks: [`dleague:${lg}`, `char:${ch}`, ...ALL_LOOKS], patch: { staff, flame, border, background: 'forest' } });
    await cards(f, { N5: [0.6, 0.3, 0], N4: [0.3, 0.3, 0.02] });
    activity(f, 6, 4, 0.6);
    friends.push(f);
    store.setLink(hero.id, f.id, 'accepted'); store.setLink(f.id, hero.id, 'accepted');
  }
  // today's N2 league board (the hero hasn't played yet)
  const board: Array<[number, number, number]> = [[0, 10, 41200], [4, 9, 48800], [2, 9, 55100], [1, 8, 61900]];
  for (const [i, correct, ms] of board) await store.saveDaily(`${day(0)}:N2`, friends[i].id, correct, ms, '1'.repeat(correct) + '0'.repeat(10 - correct));
  // battle actors: every look open, each already dressed for their scene
  const ACT: Array<[string, any]> = [
    ['Akira', { character: 'wizard', staff: 'storm', flame: 'thunder', background: 'worldtree', pose: 'float' }],
    ['Sora', { character: 'witch', staff: 'void', flame: 'starlight', background: 'castle', pose: 'twohand' }],
    ['Kaito', { character: 'knight', staff: 'moon', flame: 'sun', background: 'plains', pose: 'aim' }],
    ['Rin', { character: 'witch', staff: 'abyss', flame: 'sakura', background: 'forest', pose: 'none' }],
    ['Yui', { character: 'wizard', staff: 'blossom', flame: 'sakura', background: 'forest', pose: 'none' }],
    ['Haru', { character: 'knight', staff: 'maple', flame: 'harvest', background: 'swamp', pose: 'none' }],
    ['Nagi', { character: 'witch', staff: 'frost', flame: 'rain', background: 'castle', pose: 'none' }],
    ['Tomo', { character: 'wizard', staff: 'jade', flame: 'purple', background: 'worldtree', pose: 'none' }],
  ];
  for (const [n, l] of ACT) {
    const a = await user(n, { level: 30, wins: ri(80, 300), losses: ri(40, 120), streak: 12, best: 30, unlocks: ['dleague:N1', 'dpassed:N1', `char:${l.character}`, ...(l.pose !== 'none' ? [`pose:${l.pose}`] : []), ...ALL_LOOKS], patch: { staff: l.staff, flame: l.flame, background: l.background, border: 'lg-n2' } });
    await cards(a, { N5: [0.5, 0.4, 0] });
    activity(a, 3, 2, 0.5);
  }
  realPersist();
  console.log('seeded', store.users.size, 'users');
})();
