import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { IncomingMessage } from 'node:http';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { verifyPassword } from '../src/server/auth/passwords';
import { MemoryStore } from '../src/server/db/Store';
import { isTransientDbError } from '../src/server/db/transient';
import { createApiRouter } from '../src/server/router';
import { StudyService } from '../src/server/study/StudyService';
import { InsightsService } from '../src/server/study/InsightsService';
import { Bucket, clientIp, inlineScriptHashes, securityHeaders } from '../src/server/security';

test('0.9.9.9.5: which database errors are a connection that failed while opening', () => {
  const coded = (code: string, message = 'x') => Object.assign(new Error(message), { code });
  assert.equal(isTransientDbError(coded('CONNECT_TIMEOUT', 'write CONNECT_TIMEOUT undefined:undefined')), true);
  assert.equal(isTransientDbError(new Error('Authentication timed out')), true);
  assert.equal(isTransientDbError(new Error('Client network socket disconnected before secure TLS connection was established')), true);
  assert.equal(isTransientDbError(coded('57P01', 'terminating connection due to administrator command')), true);
  assert.equal(isTransientDbError(coded('23505', 'duplicate key value violates unique constraint')), false, 'a real error is not retried');
  assert.equal(isTransientDbError(new TypeError("Cannot read properties of undefined (reading 'x')")), false);
  assert.equal(isTransientDbError(null), false);
});

/** a store whose next `n` reads fail like a sleeping database */
function flaky(n: number) {
  const store = new MemoryStore();
  let fail = 0;
  const findById = store.findById.bind(store);
  store.findById = async (id: string) => {
    if (fail > 0) { fail--; throw Object.assign(new Error('write CONNECT_TIMEOUT undefined:undefined'), { code: 'CONNECT_TIMEOUT' }); }
    return findById(id);
  };
  return { store, arm: () => { fail = n; } };
}

test('0.9.9.9.5: a GET whose database is waking up is tried again — no "Server error", no Inbox row', async () => {
  const { store, arm } = flaky(2);
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const errors: string[] = [];
  const route = createApiRouter(auth, study, { onError: (where) => errors.push(where) });
  const { token } = await auth.register('sleepy1', 'secret12');
  const ask = (method: string, url: string) => route({ method, url, query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => ({}) });
  arm();
  const r = await ask('GET', '/api/me');
  assert.equal(r?.status, 200, 'the third try worked');
  assert.deepEqual(errors, []);
});

test('0.9.9.9.5: still unreachable → 503 and one "database unreachable" report (POSTs are not repeated)', async () => {
  const { store, arm } = flaky(1);
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const errors: string[] = [];
  const route = createApiRouter(auth, study, { onError: (where) => errors.push(where) });
  const { token } = await auth.register('sleepy2', 'secret12');
  arm();
  const r = await route({ method: 'POST', url: '/api/feedback', query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => ({ kind: 'bug', text: 'hello there' }) });
  assert.equal(r?.status, 503);
  assert.deepEqual(errors, ['database unreachable']);
});

test('0.9.9.9.5: the README passwords never work on a public server', async () => {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  // a public server without the environment passwords: the built-in accounts are not made
  await auth.seed([{ username: 'user', password: 'user123', role: 'user', fromEnv: false }, { username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], true);
  assert.equal(await store.findByUsername('admin'), null);
  assert.equal(await store.findByUsername('user'), null);
  // an older server made them with the README password → locked on the next start
  const local = new AuthService(store, new TokenSigner('t'));
  await local.seed([{ username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], false);
  const before = (await store.findByUsername('admin'))!;
  assert.equal(await verifyPassword('adminn123', before.passwordHash), true);
  await auth.seed([{ username: 'admin', password: 'adminn123', role: 'admin', fromEnv: false }], true);
  const after = (await store.findByUsername('admin'))!;
  assert.equal(await verifyPassword('adminn123', after.passwordHash), false, 'locked');
  // the environment password works (and replaces whatever was there)
  await auth.seed([{ username: 'admin', password: 'from-env-9x', role: 'admin', fromEnv: true }], true);
  assert.equal(await verifyPassword('from-env-9x', (await store.findByUsername('admin'))!.passwordHash), true);
  await assert.rejects(auth.login('admin', 'adminn123'));
});

test('0.9.9.9.5: the caller\'s address is the one the proxy added (the last), not one they wrote', () => {
  const req = (xff?: string, remote = '10.0.0.1') => ({ headers: xff ? { 'x-forwarded-for': xff } : {}, socket: { remoteAddress: remote } }) as unknown as IncomingMessage;
  assert.equal(clientIp(req('6.6.6.6, 203.0.113.9')), '203.0.113.9');
  assert.equal(clientIp(req('203.0.113.9')), '203.0.113.9');
  assert.equal(clientIp(req()), '10.0.0.1');
});

test('0.9.9.9.5: the flood limit — a burst, then a steady rate', () => {
  let now = 0;
  const b = new Bucket(5, 1, () => now);
  for (let i = 0; i < 5; i++) assert.equal(b.take(), true);
  assert.equal(b.take(), false, 'the burst is used up');
  now += 2_000;
  assert.equal(b.take(), true);
  assert.equal(b.take(), true);
  assert.equal(b.take(), false);
});

test('0.9.9.9.5: security headers — scripts only from the site and the page\'s own inline script', () => {
  const page = '<html><head><script>try { a(); } catch (e) {}</script><script src="/app.js"></script></head></html>';
  const hashes = inlineScriptHashes(page);
  assert.equal(hashes.length, 1, 'only the inline one');
  assert.match(hashes[0], /^'sha256-[A-Za-z0-9+/]+=*'$/);
  const h = securityHeaders(hashes, true);
  assert.match(h['Content-Security-Policy'], /script-src 'self' 'sha256-/);
  assert.match(h['Content-Security-Policy'], /frame-ancestors 'none'/);
  assert.match(h['Content-Security-Policy'], /object-src 'none'/);
  assert.doesNotMatch(h['Content-Security-Policy'], /unsafe-eval/);
  assert.equal(h['X-Content-Type-Options'], 'nosniff');
  assert.ok(h['Strict-Transport-Security']);
  assert.equal(securityHeaders(hashes, false)['Strict-Transport-Security'], undefined);
});

test('0.9.9.9.5: the same open error is one Inbox row with a count', async () => {
  const store = new MemoryStore();
  let now = 1_000_000;
  const ins = new InsightsService(store, () => now);
  for (let i = 0; i < 4; i++) { await ins.error('[server] database unreachable: timeout', 'x', null); now += 70_000; }
  await ins.error('[browser] something else', 'y', null);
  const rows = (await store.reports(10)).filter((r) => r.kind === 'error');
  assert.equal(rows.length, 2);
  assert.equal(rows.find((r) => r.text.includes('database'))!.count, 4);
});

test('0.9.9.9.5: the daily challenge changes at the player\'s own midnight (with the tasks and the streak)', async () => {
  const { DailyService, DAILY_WORDS } = await import('../src/server/study/DailyService');
  const { ProgressService } = await import('../src/server/study/ProgressService');
  const store = new MemoryStore();
  // 20:00 UTC on the 11th = 05:00 on the 12th in Tokyo
  let now = Date.parse('2026-10-11T20:00:00Z');
  const daily = new DailyService(store, new ProgressService(store), () => now);
  const u = await store.create({ username: 'tokyo1', passwordHash: 'x', role: 'user' } as never);
  assert.equal((await daily.overview(u, '2026-10-12')).day, '2026-10-12', 'Tokyo already has the 12th');
  assert.equal((await daily.overview(u, '2026-10-11')).day, '2026-10-11', 'New York still the 11th');
  assert.equal((await daily.overview(u, '2026-10-20')).day, '2026-10-11', 'a far-off date is not accepted');
  // a run started just before midnight finishes after it, on its own day
  now = Date.parse('2026-10-11T14:59:00Z'); // 23:59 in Tokyo
  await daily.start(u, '2026-10-11');
  now += 2 * 60_000; // 00:01 on the 12th
  let r;
  for (let i = 0; i < DAILY_WORDS; i++) { r = await daily.answer(u, 'x'); now += 1000; }
  assert.ok(r!.done, 'finished');
  assert.equal((await daily.overview((await store.findById(u.id))!, '2026-10-11')).mine !== null, true, 'saved on the 11th');
  assert.equal((await daily.overview((await store.findById(u.id))!, '2026-10-12')).mine, null, 'the 12th is a new challenge');
});

test('0.9.9.9.5 Kana: the chart — 104 hiragana and 104 katakana, with the word list\'s romaji', async () => {
  const { kanaCells, KANA_BY_CHAR } = await import('../src/shared/kanachart');
  const { VOCAB } = await import('../src/server/vocab');
  for (const [script, level] of [['hira', 'KANA'], ['kata', 'KATA']] as const) {
    const cells = kanaCells(script);
    assert.deepEqual(['basic', 'voiced', 'combo'].map((s) => kanaCells(script, s as never).length), [46, 25, 33]);
    for (const v of VOCAB.filter((x) => x.level === level)) assert.equal(KANA_BY_CHAR.get(v.kanji)?.romaji, (v as { romaji?: string }).romaji, v.kanji);
    assert.equal(cells.length, VOCAB.filter((x) => x.level === level).length);
  }
});

test('0.9.9.9.5 Kana: practice — new kana met first, look-alike wrong answers, stars to the target', async () => {
  const { kanaCells, KanaPractice, lookalikes } = await import('../src/shared/kanachart');
  assert.ok(lookalikes('ぬ').includes('め'));
  assert.ok(lookalikes('きゃ').includes('ちゃ'), 'combinations among combinations');
  assert.ok(!lookalikes('きゃ').some((x) => x.length === 1));
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const cells = kanaCells('hira', 'basic').slice(0, 10);
  const p = new KanaPractice(cells, 3, 'read', {}, rnd);
  const first = p.next()!;
  assert.equal(first.intro, true, 'a new kana is met first');
  assert.deepEqual(first.options, [first.cell.romaji]);
  p.answer(first, first.answer);
  let n = 0, q;
  while ((q = p.next()) && n < 500) {
    if (!q.intro) {
      assert.equal(q.options.length, 4);
      assert.equal(new Set(q.options).size, 4, 'no answer twice');
      assert.ok(q.options.includes(q.answer));
    }
    // a wrong answer now and then: a star is lost
    p.answer(q, !q.intro && n % 7 === 3 ? q.options.find((o) => o !== q!.answer)! : q.answer);
    n++;
  }
  assert.equal(p.finished, true);
  assert.equal(Object.keys(p.changes).length, 10);
  assert.ok(Object.values(p.changes).every((c) => c.m), 'all mastered');
  // already mastered kana need one right answer each
  const again = new KanaPractice(cells, 3, 'read', p.changes, rnd);
  let m = 0;
  while ((q = again.next()) && m < 100) { assert.equal(q.intro, false); again.answer(q, q.answer); m++; }
  assert.equal(m, 10);
});

test('0.9.9.9.5 Kana: kana cards leave All spells and become Kana progress; saving gives XP once', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'kanamig', passwordHash: 'x', role: 'user' } as never);
  const { newCard } = await import('../src/shared/srs');
  const now = Date.now();
  const learned = { ...newCard('kana:あ', now, 'all'), state: 'review' as const, intervalDays: 12, reps: 4 };
  const learning = { ...newCard('kana:い', now, 'all'), state: 'learning' as const, intervalDays: 0, reps: 1 };
  await store.addCards(u.id, [learned, learning, newCard('kata:ア', now, 'struggling'), newCard('会う:あう', now, 'all')]);
  await store.update(u.id, { studyLevels: ['KANA', 'N5'], dailyPlan: { per: { KANA: 10, N5: 10 }, day: '2026-01-01', done: {} } });
  const p = await study.profile((await store.findById(u.id))!);
  assert.deepEqual(p.kana['あ'], { s: 3, m: true });
  assert.deepEqual(p.kana['い'], { s: 1 });
  const left = (await store.cards(u.id)).map((c) => c.vocabId);
  assert.deepEqual(left, ['会う:あう'], 'only the word stays');
  const rec = (await store.findById(u.id))!;
  assert.deepEqual(rec.studyLevels, ['N5']);
  assert.deepEqual(rec.dailyPlan?.per, { N5: 10 });
  // once only
  await store.addCards(u.id, [newCard('kana:う', now, 'all')]);
  await study.profile((await store.findById(u.id))!);
  assert.ok((await store.cards(u.id)).some((c) => c.vocabId === 'kana:う'), 'not run again');
  // saving: a newly mastered kana gives 5 XP; unknown kana are ignored; mastered stays mastered
  const xp0 = (await store.findById(u.id))!.xp;
  const r1 = await study.setKana((await store.findById(u.id))!, { 'う': { s: 3, m: true }, 'zz': { s: 9 }, 'あ': { s: 1 } }, '2026-01-02');
  assert.equal(r1.xp, 5);
  assert.deepEqual(r1.kana['あ'], { s: 1, m: true });
  assert.equal(r1.kana['zz'], undefined);
  const r2 = await study.setKana((await store.findById(u.id))!, { 'う': { s: 4, m: true } }, '2026-01-02');
  assert.equal(r2.xp, 0, 'no XP twice');
  assert.equal((await store.findById(u.id))!.xp, xp0 + 5);
});

test('0.9.9.9.5 Kana: a かな beginner graduates when the 46 basic hiragana are mastered', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const { kanaCells } = await import('../src/shared/kanachart');
  const { KANA_BEGINNER } = await import('../src/shared/progress');
  const u = await store.create({ username: 'kanabeg', passwordHash: 'x', role: 'user' } as never);
  await store.update(u.id, { unlocks: [KANA_BEGINNER] });
  const all = Object.fromEntries(kanaCells('hira', 'basic').map((c) => [c.ch, { s: 3, m: true }]));
  const { [Object.keys(all)[0]]: _skip, ...allButOne } = all;
  await study.setKana((await store.findById(u.id))!, allButOne, '2026-01-02');
  assert.ok((await store.findById(u.id))!.unlocks.includes(KANA_BEGINNER), 'not yet');
  await study.setKana((await store.findById(u.id))!, all, '2026-01-02');
  assert.ok(!(await store.findById(u.id))!.unlocks.includes(KANA_BEGINNER), 'graduated');
});

test('0.9.9.9.5 JLPT quiz: made-up near misses like the real test — never a right answer', async () => {
  const { align, fakeReadings, fakeSpellings } = await import('../src/shared/fakes');
  const { VOCAB, kanjiFacts } = await import('../src/server/vocab');
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const word = (k: string) => VOCAB.find((v) => v.kanji === k)!;
  assert.deepEqual(align(word('学校'), kanjiFacts)?.map((p) => p.ch + p.r), ['学がっ', '校こう'], 'sound changes: がく → がっ');
  assert.deepEqual(align(word('会う'), kanjiFacts)?.map((p) => p.ch + p.r), ['会あ', 'うう']);
  // 先生: swapped kanji, same-sounding kanji; a reading of the same kind (せい → しょう) or a slip
  const sp = new Set<string>(), rd = new Set<string>();
  for (let i = 0; i < 12; i++) { for (const x of fakeSpellings(word('先生'), VOCAB, kanjiFacts, rnd)) sp.add(x); for (const x of fakeReadings(word('先生'), VOCAB, kanjiFacts, rnd)) rd.add(x); }
  assert.ok(sp.has('生先'), [...sp].join(' '));
  assert.ok(!sp.has('先生'));
  assert.ok([...sp].every((x) => [...x].length === 2));
  assert.ok(rd.has('せんしょう') || rd.has('ぜんせい'), [...rd].join(' '));
  assert.ok(!rd.has('せんせい'));
  // over the whole list: never the word itself or another real way to read / write it
  let made = 0;
  for (const w of VOCAB.filter((v) => /[一-龯]/.test(v.kanji) && v.level !== 'ONO').slice(0, 1500)) {
    const reals = new Set(VOCAB.filter((v) => v.kanji === w.kanji).map((v) => v.reading));
    for (const r of fakeReadings(w, VOCAB, kanjiFacts, rnd)) { made++; assert.ok(!reals.has(r), `${w.kanji}: ${r} is a real reading`); assert.ok(!/^[っゃゅょん]/.test(r), r); }
    for (const s of fakeSpellings(w, VOCAB, kanjiFacts, rnd)) { made++; assert.ok(!VOCAB.some((v) => v.kanji === s && v.reading === w.reading), `${w.kanji}: ${s} is right too`); }
  }
  assert.ok(made > 3000, `made ${made}`);
});

test('0.9.9.9.5 JLPT quiz: four different choices, one right; words from the deck and levels you pick', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const { VOCAB } = await import('../src/server/vocab');
  const { newCard } = await import('../src/shared/srs');
  const u = await store.create({ username: 'quizset', passwordHash: 'x', role: 'user' } as never);
  const now = Date.now();
  const { studyLevelOf } = await import('../src/shared/protocol');
  const n5 = VOCAB.filter((v) => studyLevelOf(v) === 'N5' && /[一-龯]/.test(v.kanji)).slice(0, 12);
  const n1 = VOCAB.filter((v) => studyLevelOf(v) === 'N1' && /[一-龯]/.test(v.kanji)).slice(0, 12);
  await store.addCards(u.id, n5.map((v) => ({ ...newCard(v.id, now, 'all'), reps: 1, state: 'review' as const, intervalDays: 2 })));
  await store.addCards(u.id, n1.map((v) => ({ ...newCard(v.id, now, 'struggling'), reps: 1, state: 'review' as const, intervalDays: 2 })));
  const me = (await store.findById(u.id))!;
  const qs = await study.quiz(me, 10);
  assert.equal(qs.length, 10);
  for (const q of qs) {
    assert.equal(q.choices.length, 4, `${q.prompt}: ${q.choices.join(' ')}`);
    assert.equal(new Set(q.choices).size, 4);
    assert.ok(q.answer >= 0 && q.answer < 4);
  }
  const lvl = (id: string) => studyLevelOf(VOCAB.find((v) => v.id === id)!);
  const only = async (opts: { deck?: string; levels?: string[] }, level: string) => {
    const got = await study.quiz(me, 10, opts);
    assert.equal(got.length, 10, JSON.stringify(opts));
    assert.ok(got.every((q) => lvl(q.vocabId) === level), JSON.stringify(opts));
  };
  await only({ deck: 'all' }, 'N5');
  await only({ deck: 'struggling' }, 'N1');
  await only({ levels: ['N1'] }, 'N1');
  await only({ levels: ['N5', 'N2'] }, 'N5');
  assert.equal((await study.quiz(me, 10, { deck: 'all', levels: ['N1'] })).length, 0, 'nothing fits');
  // the route: ?deck=…&levels=…
  const auth = new AuthService(store, new TokenSigner('t'));
  const route = createApiRouter(auth, study);
  const { token, user } = await auth.register('quizroute', 'secret12');
  await store.addCards(user.id, n1.map((v) => ({ ...newCard(v.id, now, 'struggling'), reps: 1, state: 'review' as const, intervalDays: 2 })));
  const ask = (q: string) => route({ method: 'GET', url: '/api/study/quiz', query: new URLSearchParams(q), token, ip: '1.2.3.4', json: async () => ({}) });
  const r = await ask('n=10&deck=struggling&levels=N1,N2');
  assert.equal(r?.status, 200);
  assert.equal((r!.body as { questions: unknown[] }).questions.length, 10);
  assert.equal(((await ask('n=10&deck=all'))!.body as { questions: unknown[] }).questions.length, 0);
});
