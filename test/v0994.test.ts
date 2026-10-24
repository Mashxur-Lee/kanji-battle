import assert from 'node:assert/strict';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { MemoryStore } from '../src/server/db/Store';
import { createApiHandler, REPLAY_WINDOW_MS, replayTime } from '../src/server/http';
import { createApiRouter } from '../src/server/router';
import { DailyService } from '../src/server/study/DailyService';
import { StudyService } from '../src/server/study/StudyService';
import { LocalStore } from '../src/client/offline/engine';
import { handles } from '../src/client/offline';

async function serve() {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const study = new StudyService(store);
  const daily = new DailyService(store, study.progress);
  const api = createApiHandler(auth, study, { daily });
  const server: Server = createServer((req, res) => void api(req, res).then((ok) => { if (!ok) res.writeHead(404).end(); }));
  await new Promise<void>((r) => server.listen(0, r));
  const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  const { token, user } = (await (await fetch(`${base}/api/register`, { method: 'POST', body: JSON.stringify({ username: `p${Date.now() % 100000}`, password: 'secret1' }) })).json()) as { token: string; user: { id: string } };
  const call = async (method: string, url: string, body?: unknown, at?: number) => {
    const r = await fetch(base + url, { method, headers: { Authorization: `Bearer ${token}`, ...(at ? { 'X-KW-At': String(at) } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
    return { status: r.status, body: (await r.json()) as any };
  };
  return { store, study, server, call, userId: user.id };
}

test('0.9.9.4: X-KW-At is clamped to the last week and never the future', () => {
  const now = 1_800_000_000_000;
  assert.equal(replayTime(String(now - 3_600_000), now), now - 3_600_000);
  assert.equal(replayTime(String(now + 60_000), now), now, 'no future');
  assert.equal(replayTime(String(now - 30 * 86_400_000), now), now - REPLAY_WINDOW_MS, 'at most a week back');
  assert.equal(replayTime('nonsense', now), null);
  assert.equal(replayTime(undefined, now), null);
});

test('a review replayed with X-KW-At is scheduled from when it really happened', async () => {
  const { server, call, store, userId } = await serve();
  try {
    const today = new Date().toISOString().slice(0, 10);
    await call('PUT', '/api/study/levels', { levels: ['N5'], today });
    const { body: q } = await call('GET', '/api/study/queue?deck=all');
    const id = q.cards[0].vocabId as string;
    const at = Date.now() - 2 * 3_600_000; // two hours ago, offline
    assert.equal((await call('POST', '/api/study/review', { vocabId: id, rating: 'easy', deck: 'all', today }, at)).status, 200);
    const card = (await store.card(userId, 'all', id))!;
    assert.ok(card.state === 'review');
    assert.ok(Math.abs(card.due - (at + card.intervalDays * 86_400_000)) < 60_000, 'due counts from the offline moment');
  } finally { server.close(); }
});

test('the daily challenge replays with its real timing', async () => {
  const { server, call } = await serve();
  try {
    const t0 = Date.now() - 60_000;
    assert.equal((await call('POST', '/api/daily/start', undefined, t0)).status, 200);
    for (let i = 0; i < 10; i++) await call('POST', '/api/daily/answer', { text: '' }, t0 + (i + 1) * 2000);
    const { body } = await call('GET', '/api/daily');
    assert.equal(body.mine.ms, 20_000, '2 s a word, as played — not the instant of the replay');
  } finally { server.close(); }
});

test('custom words keep the id the app gave them; a bad id is replaced', async () => {
  const { server, call } = await serve();
  try {
    const a = await call('POST', '/api/study/custom', { kanji: '呪文帳', reading: 'じゅもんちょう', meaning: 'spell book', id: 'u:abcdef12-3456' });
    assert.equal(a.body.word.id, 'u:abcdef12-3456');
    const b = await call('POST', '/api/study/custom', { kanji: '魔法石', reading: 'まほうせき', meaning: 'magic stone', id: 'evil' });
    assert.match(b.body.word.id, /^u:[0-9a-f-]{13}$/);
    assert.notEqual(b.body.word.id, 'evil');
  } finally { server.close(); }
});

test('the day\'s new cards are the same on the server and in the app (seeded by player + day)', async () => {
  const pick = async () => {
    const store = new MemoryStore();
    const study = new StudyService(store);
    const u = await store.create({ username: 'same', passwordHash: 'x', role: 'user' });
    (store as any).users.get(u.id).id = 'fixed-id';
    (store as any).users.set('fixed-id', (store as any).users.get(u.id));
    const me = (await store.findById('fixed-id'))!;
    await study.setStudyLevels(me, ['N5'], '2026-10-25');
    await study.summary((await store.findById('fixed-id'))!, '2026-10-25');
    return (await store.cards('fixed-id')).map((c) => c.vocabId).sort();
  };
  const a = await pick(), b = await pick();
  assert.ok(a.length >= 10);
  assert.deepEqual(a, b);
});

test('snapshot → the offline engine\'s store → the same answers', async () => {
  const { server, call, study, store, userId } = await serve();
  try {
    const today = new Date().toISOString().slice(0, 10);
    await call('PUT', '/api/study/levels', { levels: ['N5'], today });
    await call('POST', '/api/study/custom', { kanji: '呪文帳', reading: 'じゅもんちょう', meaning: 'spell book', id: 'u:abcdef12-3456' });
    const { body: snap } = await call('GET', '/api/sync/snapshot');
    assert.equal(snap.user.passwordHash, '', 'no password hash leaves the server');
    assert.ok(snap.cards.length >= 25 && snap.custom.length === 1);

    const local = new LocalStore(userId);
    local.load(snap);
    const roundTrip = local.dump();
    assert.equal(roundTrip.cards.length, snap.cards.length);
    const offlineStudy = new StudyService(local);
    const auth = { store: local, authenticate: async () => (await local.findById(userId))! } as unknown as AuthService;
    const route = createApiRouter(auth, offlineStudy, {});
    const ask = async (method: string, url: string, body?: unknown) => {
      const [path, qs] = url.split('?');
      return (await route({ method, url: path, query: new URLSearchParams(qs ?? ''), token: 'x', ip: '', json: async () => (body ?? {}) as Record<string, any> }))!;
    };
    const online = await study.summary((await store.findById(userId))!, today);
    const off = await ask('GET', `/api/study?today=${today}`);
    assert.equal(off.status, 200);
    assert.deepEqual((off.body as any).decks, online.decks);
    const q = await ask('GET', '/api/study/quiz?n=5');
    assert.equal((q.body as any).questions.length, 5);
    let saved = 0;
    local.onChange = () => saved++;
    const id = (await ask('GET', '/api/study/queue?deck=all')).body as any;
    assert.equal((await ask('POST', '/api/study/review', { vocabId: id.cards[0].vocabId, rating: 'good', deck: 'all', today })).status, 200);
    assert.ok(saved > 0, 'changes are saved locally');
  } finally { server.close(); }
});

test('what works offline: study, quiz, daily, customize — not games, friends or admin', () => {
  for (const [m, u] of [['GET', '/api/study?today=2026-10-25'], ['POST', '/api/study/review'], ['GET', '/api/study/quiz?n=10'], ['POST', '/api/daily/answer'], ['PUT', '/api/me/background'], ['GET', '/api/matches/abc']]) assert.ok(handles(m, u), `${m} ${u}`);
  for (const [m, u] of [['POST', '/api/login'], ['GET', '/api/friends'], ['GET', '/api/admin/users'], ['PUT', '/api/me/avatar'], ['GET', '/api/sync/snapshot']]) assert.ok(!handles(m, u), `${m} ${u}`);
});
