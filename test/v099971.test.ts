// 0.9.9.9.7.1 — round 1 of the pre-1.0 review: each test plays the cheat or the abuse the review found, and checks
// that it no longer works (and that real players aren't caught by the fix).
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { AuthService, LOGIN_FAILS, RESET_PER_DAY, RESET_WRONG_PER_DAY, type ResetMail } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { hashPassword } from '../src/server/auth/passwords';
import { PgStore } from '../src/server/db/PgStore';
import { FileStore, MemoryStore, type Store } from '../src/server/db/Store';
import { createApiHandler } from '../src/server/http';
import { createApiRouter } from '../src/server/router';
import { DAILY_WORDS, DailyService, dailyKey, dailyWords, secretSeed } from '../src/server/study/DailyService';
import { ProgressService, resolveToday, shiftDay } from '../src/server/study/ProgressService';
import { StudyService } from '../src/server/study/StudyService';
import { toRomaji } from '../src/shared/kana';
import { handles } from '../src/shared/offline';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8');
const at = (iso: string) => Date.parse(iso);
const answer = (w: { reading: string }) => toRomaji(w.reading);
const localDay = (t: number, offMin: number) => new Date(t + offMin * 60_000).toISOString().slice(0, 10);

/** a real server (the HTTP layer included) with a guest signed in */
async function serve() {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const daily = new DailyService(store, study.progress); // (the real clock, as on the server)
  const api = createApiHandler(auth, study, { daily });
  const server: Server = createServer((req, res) => void api(req, res).then((ok) => { if (!ok) res.writeHead(404).end(); }));
  await new Promise<void>((r) => server.listen(0, r));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  const { token } = (await (await fetch(`${base}/api/guest`, { method: 'POST' })).json()) as { token: string };
  const call = async (method: string, url: string, body?: unknown, headers: Record<string, string> = {}) => {
    const r = await fetch(base + url, { method, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...headers }, body: body === undefined ? undefined : JSON.stringify(body) });
    return { status: r.status, body: (await r.json()) as any };
  };
  return { server, call };
}

/** a Daily challenge service on a clock the test moves, and one player */
async function dailyWorld(start: string, opts: ConstructorParameters<typeof DailyService>[3] = {}, store: Store = new MemoryStore()) {
  const clock = { now: at(start) };
  const daily = new DailyService(store, new ProgressService(store), () => clock.now, opts);
  const u = await store.create({ username: `p${Math.random().toString(36).slice(2, 8)}`, passwordHash: 'x', role: 'user' } as never);
  const me = async () => (await store.findById(u.id))!;
  return { store, clock, daily, me, id: u.id };
}

test('0.9.9.9.7.1 version, patch notes, Russian for the new messages, DAILY_SECRET in the setup notes', () => {
  assert.ok(VERSION >= '0.9.9.9.7.1');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.7\.1'/);
  const ru = src('src/client/i18n.ts');
  for (const s of ['That day isn\\\'t over everywhere yet', 'Too many wrong codes — try again tomorrow', 'Too many wrong passwords for this account']) assert.ok(ru.includes(s), s);
  assert.match(src('docs/SETUP.md'), /`DAILY_SECRET`/);
  assert.doesNotMatch(src('src/client/appshell.ts'), /reading passages, the daily challenge/, 'the offline toast no longer promises the daily challenge');
});

// ── #1: the Daily challenge's timer ─────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.1 #1 the review\'s script — start "an hour ago", answer "200 ms apart" — gets nothing; the real clock counts', async () => {
  const { server, call } = await serve();
  try {
    const day = new Date().toISOString().slice(0, 10);
    const words = dailyWords(day, 'KANA');
    const t0 = Date.now() - 3_600_000;
    assert.equal((await call('POST', '/api/daily/start', { today: day }, { 'X-KW-At': String(t0) })).status, 409, 'a stamped (replayed) start is refused');
    for (let i = 0; i < DAILY_WORDS; i++) {
      assert.equal((await call('POST', '/api/daily/answer', { text: answer(words[i]) }, { 'X-KW-At': String(t0 + (i + 1) * 200) })).status, 409);
    }
    assert.equal((await call('GET', `/api/daily?today=${day}`)).body.mine, null, 'nothing was recorded');
    // played for real: the time is the time it really took
    assert.equal((await call('POST', '/api/daily/start', { today: day })).status, 200);
    await new Promise((ok) => setTimeout(ok, 400)); // "thinking"
    assert.equal((await call('POST', '/api/daily/answer', { text: answer(words[0]) }, { 'X-KW-At': String(Date.now() - 3_000_000) })).status, 409, 'not mid-run either');
    const first = await call('POST', '/api/daily/answer', { text: answer(words[0]) });
    assert.ok(first.body.correct && first.body.ms >= 400, `the 400 ms really taken count (${first.body.ms} ms)`);
  } finally { server.close(); }
});

test('0.9.9.9.7.1 #1 X-KW-At no longer winds the server\'s clock back outside offline study', async () => {
  const { server, call } = await serve();
  try {
    const today = new Date().toISOString().slice(0, 10);
    const weekAgo = Date.now() - 5 * 86_400_000;
    const d = await call('GET', `/api/daily?today=${new Date(weekAgo).toISOString().slice(0, 10)}`, undefined, { 'X-KW-At': String(weekAgo) });
    assert.equal(d.body.day, today, 'the Daily page is about today, whatever the header says (it showed the day of the header)');
    // the calls the app really makes offline are the only ones the header is for — and the Daily isn't among them
    assert.ok(handles('POST', '/api/study/review') && handles('PUT', '/api/kana'));
    assert.ok(!handles('POST', '/api/daily/start') && !handles('POST', '/api/daily/answer') && !handles('GET', '/api/daily') && !handles('POST', '/api/login'));
  } finally { server.close(); }
});

// ── #2: the words ahead of time ─────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.1 #2 "it\'s already tomorrow here" no longer shows today\'s words; a day shows once you can\'t play it', async () => {
  // 12:30 UTC on the 20th: UTC+14 is on the 21st, so "tomorrow" is a date the server accepts
  const { daily, me } = await dailyWorld('2026-11-20T12:30:00Z');
  await assert.rejects(daily.past(await me(), '2026-11-20', '2026-11-21'), /isn't over everywhere yet/, 'the review\'s trick: today\'s ten, answers and all');
  // played it: now it's yours to look at
  await daily.start(await me(), '2026-11-20');
  await daily.finishStale(await me());
  assert.equal((await daily.past(await me(), '2026-11-20', '2026-11-21')).leagues.KANA.words.length, DAILY_WORDS);
  // someone who never played sees the 20th once it is over everywhere (12:00 UTC on the 21st: UTC−12's midnight)
  const other = await dailyWorld('2026-11-21T11:59:00Z');
  await assert.rejects(other.daily.past(await other.me(), '2026-11-20', '2026-11-21'), /isn't over everywhere yet/);
  other.clock.now = at('2026-11-21T12:00:00Z');
  assert.equal((await other.daily.past(await other.me(), '2026-11-20', '2026-11-21')).leagues.N5.words.length, DAILY_WORDS);
});

test('0.9.9.9.7.1 #2 with DAILY_SECRET nobody can work the words out from the code — from the first day no one has reached', async () => {
  const seed = secretSeed('a long random secret, just for this test')!;
  assert.equal(secretSeed('too-short'), undefined, 'a secret of fewer than 16 characters is no secret');
  assert.equal(secretSeed(undefined), undefined);
  const store = new MemoryStore();
  const w = await dailyWorld('2026-11-20T12:30:00Z', { seed }, store);
  // the day the secret arrives: today's words (and the 21st's, begun in UTC+14) stay — nobody's today changes halfway
  const t1 = await w.daily.start(await w.me(), '2026-11-20');
  assert.equal(t1.kanji, dailyWords('2026-11-20', 'KANA')[0].kanji);
  await w.daily.finishStale(await w.me());
  // the 22nd: no longer the ten anyone can compute from the public code
  w.clock.now = at('2026-11-22T12:00:00Z');
  await w.daily.start(await w.me(), '2026-11-22');
  await w.daily.finishStale(await w.me());
  const mine = (await w.daily.overview(await w.me(), '2026-11-22')).words!.map((x) => x.id);
  assert.notDeepEqual(mine, dailyWords('2026-11-22', 'KANA').map((x) => x.id), 'not the public words');
  assert.deepEqual(mine, dailyWords('2026-11-22', 'KANA', seed.of('2026-11-22', 'KANA')).map((x) => x.id), 'the secret ones');
  // a restart (a deploy) remembers from which day the secret counts
  const again = new DailyService(store, new ProgressService(store), () => w.clock.now, { seed });
  assert.deepEqual((await again.overview(await w.me(), '2026-11-22')).words!.map((x) => x.id), mine);
  assert.deepEqual((await again.past(await w.me(), '2026-11-20', '2026-11-22')).leagues.KANA.words.map((x) => x.id), dailyWords('2026-11-20', 'KANA').map((x) => x.id), 'the 20th keeps its words');
});

// ── #3: several Daily challenges a day ──────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.1 #3 the app\'s date counts only if a real time zone (UTC−12 … UTC+14) is on it at that moment', () => {
  assert.equal(resolveToday('2026-11-21', at('2026-11-20T08:00:00Z')), '2026-11-20', 'at 08:00 UTC nobody is on the 21st (UTC+14 is at 22:00) — it was accepted');
  assert.equal(resolveToday('2026-11-21', at('2026-11-20T10:00:00Z')), '2026-11-21', 'from 10:00 UTC Kiribati is');
  assert.equal(resolveToday('2026-11-19', at('2026-11-20T11:59:00Z')), '2026-11-19', 'UTC−12 is still on the 19th…');
  assert.equal(resolveToday('2026-11-19', at('2026-11-20T12:00:00Z')), '2026-11-20', '…until 12:00 UTC');
  assert.equal(resolveToday('nonsense', at('2026-11-20T12:00:00Z')), '2026-11-20');
});

test('0.9.9.9.7.1 #3 after today\'s challenge, yesterday\'s is refused (the review played both, then tomorrow\'s)', async () => {
  // 11:00 UTC on the 20th: UTC−12 is still on the 19th, so the 19th is a real date — but not one to go back to
  const { daily, me, store, id } = await dailyWorld('2026-11-20T11:00:00Z');
  await daily.start(await me(), '2026-11-20');
  await daily.finishStale(await me());
  await assert.rejects(daily.start(await me(), '2026-11-19'), /already played/);
  assert.equal(await store.daily(dailyKey('2026-11-19', 'KANA'), id), null);
});

test('0.9.9.9.7.1 #3 a script trying yesterday, today and tomorrow every 10 minutes for 60 days gets about one a day', async () => {
  const { daily, me, clock } = await dailyWorld('2026-11-20T00:05:00Z');
  const times: number[] = [];
  for (let step = 0; step < 60 * 144; step++, clock.now += 10 * 60_000) {
    const utc = new Date(clock.now).toISOString().slice(0, 10);
    for (const day of [shiftDay(utc, -1), utc, shiftDay(utc, 1)]) {
      try { await daily.start(await me(), day); } catch { continue; }
      await daily.finishStale(await me());
      times.push(clock.now);
    }
  }
  // Before: three a day (yesterday's, today's and tomorrow's) — about 180. Now: a player who plays at 23:59 may play
  // again at 00:01, so the script can do that once; after that the next one comes at most an hour early (summer
  // time), and only until it is as far east as time zones go (UTC+14) — then exactly one a day.
  assert.ok(times.length <= 62, `${times.length} challenges in 60 days`);
  assert.ok(times.length >= 59, `${times.length}: it still gets its one a day`);
  const gaps = times.slice(2).map((t, i) => (t - times[i + 1]) / 3_600_000);
  assert.ok(gaps.every((h) => h >= 22), `after the first two, a day apart (give or take the hour): ${Math.min(...gaps)} h`);
  assert.ok(gaps.slice(-30).every((h) => h >= 24), 'and in the end a full day apart');
});

test('0.9.9.9.7.1 #3 real players are never turned away — any time zone, at 23:59 and again at 00:01, summer time', async () => {
  for (const tz of [-720, -300, 0, 180, 330, 540, 840]) {
    const { daily, me, clock } = await dailyWorld('2026-11-20T00:00:00Z');
    const hours = [23.9, 0.1, 12, 23.95, 0.05, 7, 18, 23.99, 0.01, 15, 9, 22];
    let off = tz;
    for (let i = 0; i < hours.length; i++) {
      if (i === 6) off = tz + 60 <= 840 ? tz + 60 : tz - 60; // the clocks change by an hour
      const day = shiftDay('2026-11-20', i);
      clock.now = at(`${day}T00:00:00Z`) + hours[i] * 3_600_000 - off * 60_000;
      assert.equal(localDay(clock.now, off), day);
      await daily.start(await me(), day).catch((e) => assert.fail(`UTC${tz >= 0 ? '+' : ''}${tz / 60}, ${day} at ${hours[i]} h: ${e.message}`));
      await daily.finishStale(await me());
      assert.notEqual((await daily.overview(await me(), day)).mine, null);
    }
  }
});

// ── #16: a restart in the middle ────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.1 #16 a half-played Daily survives a restart: it carries on from the same word, it doesn\'t start over', async () => {
  const { daily, me, store, clock, id } = await dailyWorld('2026-11-20T09:00:00Z');
  const words = dailyWords('2026-11-20', 'KANA');
  await daily.start(await me(), '2026-11-20');
  for (let i = 0; i < 3; i++) { clock.now += 2000; await daily.answer(await me(), answer(words[i])); }
  // a deploy: a new server process, the same database
  const restarted = new DailyService(store, new ProgressService(store), () => clock.now);
  const w = await restarted.start(await me(), '2026-11-20');
  assert.equal(w.index, 3, 'word 4, not word 1 again');
  assert.equal(w.kanji, words[3].kanji);
  let r;
  for (let i = 3; i < DAILY_WORDS; i++) { clock.now += 2000; r = await restarted.answer(await me(), answer(words[i])); }
  assert.equal(r!.done!.correct, DAILY_WORDS);
  assert.equal((await store.daily(dailyKey('2026-11-20', 'KANA'), id))!.marks, '1111111111');
  // a run left open on one day counts as played when the next day's starts (it was dropped — the day could be redone)
  const b = await dailyWorld('2026-11-20T09:00:00Z', {}, store);
  await b.daily.start(await b.me(), '2026-11-20');
  b.clock.now += 2000; await b.daily.answer(await b.me(), answer(words[0]));
  b.clock.now = at('2026-11-21T09:00:00Z');
  await b.daily.start(await b.me(), '2026-11-21');
  assert.equal((await store.daily(dailyKey('2026-11-20', 'KANA'), b.id))!.correct, 1);
});

test('0.9.9.9.7.1 #16 a password-reset code and an email code still work after a restart', async () => {
  const store = new MemoryStore();
  const signer = new TokenSigner('same-secret');
  const sent: ResetMail[] = [];
  const mail = async (m: ResetMail) => { sent.push(m); };
  const first = new AuthService(store, signer);
  const reg = await first.register('restart', 'secret12', 'restart@gmail.com', mail);
  const afterDeploy = new AuthService(store, signer);
  await afterDeploy.confirmEmail(await afterDeploy.authenticate(reg.token), sent[0].code);
  await afterDeploy.forgot('restart', mail);
  const again = new AuthService(store, signer);
  assert.ok((await again.resetPassword('restart', sent.at(-1)!.code, 'newpass1')).token);
  assert.ok(!JSON.stringify(await store.getValue(`reset:${reg.user.id}`)).includes(sent.at(-1)!.code), 'the code isn\'t kept as it is');
});

// ── #7: "Forgot password" ───────────────────────────────────────────────────────────────────────────────────────
async function target() {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const u = await store.create({ username: 'target', passwordHash: await hashPassword('secret12'), role: 'user' });
  await store.update(u.id, { email: 'target@gmail.com', emailKey: 'target@gmail.com', unlocks: ['emailok'] });
  const sent: ResetMail[] = [];
  return { store, auth, sent, mail: async (m: ResetMail) => { sent.push(m); } };
}

test('0.9.9.9.7.1 #7 "Forgot password" once a minute for an hour sends 5 emails, not 60 (1,440 a day before)', async () => {
  const { auth, sent, mail } = await target();
  let t = at('2026-11-20T00:00:00Z');
  for (let i = 0; i < 60; i++, t += 61_000) await auth.forgot('target', mail, t);
  assert.equal(sent.length, RESET_PER_DAY);
  t += 86_400_000;
  await auth.forgot('target', mail, t);
  assert.equal(sent.length, RESET_PER_DAY + 1, 'the next day there is a code again');
});

test('0.9.9.9.7.1 #7 after 20 wrong codes in a day the guessing stops — no new codes, and even the right code waits', async () => {
  const { auth, sent, mail } = await target();
  let t = at('2026-11-20T00:00:00Z');
  const wrongFor = (code: string) => (code === '000000' ? '111111' : '000000');
  let wrong = 0;
  while (wrong < RESET_WRONG_PER_DAY) {
    await auth.forgot('target', mail, t);
    const code = sent.at(-1)!.code;
    for (let i = 0; i < 5 && wrong < RESET_WRONG_PER_DAY; i++, wrong++) await assert.rejects(auth.resetPassword('target', wrongFor(code), 'hacked12', t), /wrong or has expired/);
    t += 61_000;
  }
  const codes = sent.length;
  await auth.forgot('target', mail, t);
  assert.equal(sent.length, codes, 'no more codes today');
  await assert.rejects(auth.resetPassword('target', sent.at(-1)!.code, 'hacked12', t), /Too many wrong codes — try again tomorrow/);
  t += 86_400_000;
  await auth.forgot('target', mail, t);
  assert.ok((await auth.resetPassword('target', sent.at(-1)!.code, 'mine1234', t)).token, 'the real owner gets in the next day');
});

// ── #14: wrong passwords ────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.1 #14 10 wrong passwords lock that account for 15 minutes — even the right one; others are fine', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  for (const name of ['victim', 'bystander']) await store.create({ username: name, passwordHash: await hashPassword('secret12'), role: 'user' });
  let t = at('2026-11-20T00:00:00Z');
  for (let i = 0; i < LOGIN_FAILS; i++) await assert.rejects(auth.login('victim', `guess${i}`, t), /Wrong username or password/);
  await assert.rejects(auth.login('victim', 'secret12', t), /Too many wrong passwords for this account — try again in 15 min/);
  await assert.rejects(auth.login(' VICTIM ', 'secret12', t), /Too many wrong passwords/, 'written another way: the same account');
  assert.ok((await auth.login('bystander', 'secret12', t)).token);
  t += 15 * 60_000;
  assert.ok((await auth.login('victim', 'secret12', t)).token, 'after 15 minutes the owner gets in');
  // a login that doesn't exist behaves the same (it tells nothing about which logins are real)
  for (let i = 0; i < LOGIN_FAILS; i++) await assert.rejects(auth.login('nobody-here', 'x', t), /Wrong username or password/);
  await assert.rejects(auth.login('nobody-here', 'x', t), /Too many wrong passwords for this account/);
});

test('0.9.9.9.7.1 #14 one address: right passwords don\'t count against it (a school\'s network), wrong ones do', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  await store.create({ username: 'pupil', passwordHash: await hashPassword('secret12'), role: 'user' });
  const route = createApiRouter(auth, new StudyService(store));
  const login = (username: string, password: string, ip = '10.0.0.1') => route({ method: 'POST', url: '/api/login', query: new URLSearchParams(), token: '', ip, json: async () => ({ username, password }) });
  for (let i = 0; i < 30; i++) assert.equal((await login('pupil', 'secret12'))!.status, 200, `login ${i + 1} (the 21st in a minute was refused)`);
  for (let i = 0; i < 20; i++) assert.equal((await login(`account${i}`, 'guess'))!.status, 401);
  assert.equal((await login('pupil', 'secret12'))!.status, 429, 'a script trying many accounts from one address is stopped');
  assert.equal((await login('pupil', 'secret12', '10.0.0.2'))!.status, 200, 'another address is not');
});

// ── the store: what must survive a restart ──────────────────────────────────────────────────────────────────────
const stores: Array<[string, () => Store]> = [['memory', () => new MemoryStore()]];
const file = path.join(mkdtempSync(path.join(tmpdir(), 'kw-')), 'db.json');
stores.push(['file', () => new FileStore(file)]);
if (process.env.TEST_DATABASE_URL) stores.push(['postgres', () => new PgStore(process.env.TEST_DATABASE_URL! + (process.env.TEST_DATABASE_URL!.includes('?') ? '&' : '?') + 'channel_binding=require')]);
for (const [name, make] of stores) {
  test(`0.9.9.9.7.1 store values: ${name}`, async () => {
    const s = make();
    await s.init();
    assert.equal(await s.getValue('test:a'), null);
    await s.setValue('test:a', '{"x":1}');
    await s.setValue('test:a', '{"x":2}');
    assert.equal(await s.getValue('test:a'), '{"x":2}');
    if (name === 'file') assert.equal(await new FileStore(file).getValue('test:a'), '{"x":2}', 'kept across a restart');
    await s.setValue('test:a', null);
    assert.equal(await s.getValue('test:a'), null);
    await s.close?.();
  });
}
