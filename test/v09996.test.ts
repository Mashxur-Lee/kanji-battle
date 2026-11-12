import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore, SUPPORT_ID } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { createApiRouter } from '../src/server/router';
import { MessageService, type MessageView } from '../src/server/study/MessageService';
import { DailyService } from '../src/server/study/DailyService';
import { Room, DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import { RoomManager } from '../src/server/RoomManager';
import { Bot, type BotHost } from '../src/server/Bot';
import { BORDERS, borderUnlocked } from '../src/shared/progress';
import { kanjiNumber } from '../src/shared/kanjinum';
import type { ServerMessage, VocabEntry } from '../src/shared/protocol';

const ask = (route: ReturnType<typeof createApiRouter>, token: string, method: string, url: string, body: unknown = {}, query = '') =>
  route({ method, url, query: new URLSearchParams(query), token, ip: '1.2.3.4', json: async () => body });

async function world() {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const live: Array<{ to: string[] | 'admins'; msg: MessageView }> = [];
  const pushed: string[] = [];
  const online = new Set<string>();
  const messages = new MessageService(store, { deliver: (to, msg) => live.push({ to, msg }), push: (to) => pushed.push(to), online: (id) => online.has(id) });
  const route = createApiRouter(auth, study, { messages, insights: { feedback: async () => {} } as never });
  return { store, study, auth, messages, route, live, pushed, online };
}

test('0.9.9.9.6 messenger: friends write to each other; strangers can\'t; unread counts and reading', async () => {
  const w = await world();
  const a = await w.auth.register('anna', 'secret12'), b = await w.auth.register('boris', 'secret12'), c = await w.auth.register('cyril', 'secret12');
  // not friends: refused
  assert.equal((await ask(w.route, a.token, 'POST', `/api/messages/${b.user.id}`, { text: 'hi' }))?.status, 403);
  await w.store.requestFriend(a.user.id, b.user.id); await w.store.acceptFriend(b.user.id, a.user.id);
  w.online.add(b.user.id);
  const sent = await ask(w.route, a.token, 'POST', `/api/messages/${b.user.id}`, { text: '  hello there  ' });
  assert.equal(sent?.status, 200);
  assert.equal((sent!.body as { message: MessageView }).message.text, 'hello there');
  assert.deepEqual(w.live.at(-1)!.to, [b.user.id], 'delivered live');
  assert.equal(w.pushed.length, 0, 'online: no push');
  w.online.delete(b.user.id);
  await ask(w.route, a.token, 'POST', `/api/messages/${b.user.id}`, { text: 'are you there?' });
  assert.deepEqual(w.pushed, [b.user.id], 'offline: a push');
  // Boris: 2 unread, Anna's conversation on top (and the team's below it)
  assert.equal(((await ask(w.route, b.token, 'GET', '/api/messages/unread'))!.body as { unread: number }).unread, 2);
  const list = (await ask(w.route, b.token, 'GET', '/api/messages'))!.body as { conversations: Array<{ id: string; unread: number; support: boolean; name: string }> };
  assert.equal(list.conversations[0].id, a.user.id);
  assert.equal(list.conversations[0].unread, 2);
  assert.ok(list.conversations.some((x) => x.support), 'the team is always there to write to');
  // he opens it: read
  const thread = (await ask(w.route, b.token, 'GET', `/api/messages/${a.user.id}`))!.body as { messages: MessageView[] };
  assert.deepEqual(thread.messages.map((m) => m.text), ['hello there', 'are you there?']);
  assert.equal(((await ask(w.route, b.token, 'GET', '/api/messages/unread'))!.body as { unread: number }).unread, 0);
  // Anna sees "read" on hers now
  const mine = (await ask(w.route, a.token, 'GET', `/api/messages/${b.user.id}`))!.body as { messages: MessageView[] };
  assert.ok(mine.messages.every((m) => m.read));
  // Cyril (a stranger) can't; empty messages and other nonsense are refused
  assert.equal((await ask(w.route, c.token, 'POST', `/api/messages/${a.user.id}`, { text: 'yo' }))?.status, 403);
  assert.equal((await ask(w.route, a.token, 'POST', `/api/messages/${b.user.id}`, { text: '   ' }))?.status, 400);
  assert.equal((await ask(w.route, a.token, 'POST', `/api/messages/${a.user.id}`, { text: 'me?' }))?.status, 403);
});

test('0.9.9.9.6 messenger: Feedback lands in the conversation with the team; an admin answers as the team', async () => {
  const w = await world();
  const p = await w.auth.register('player', 'secret12'), adm = await w.auth.register('admin1', 'secret12');
  await w.store.update(adm.user.id, { role: 'admin' });
  assert.equal((await ask(w.route, p.token, 'POST', '/api/feedback', { kind: 'bug', text: 'The dragon is stuck', meta: '' }))?.status, 200);
  assert.equal(w.live.at(-1)!.to, 'admins', 'every admin sees it at once');
  // the team's side: only admins
  assert.equal((await ask(w.route, p.token, 'GET', '/api/messages', {}, 'as=support'))?.status, 403);
  const team = (await ask(w.route, adm.token, 'GET', '/api/messages', {}, 'as=support'))!.body as { conversations: Array<{ id: string; unread: number; last: MessageView }> };
  assert.equal(team.conversations[0].id, p.user.id);
  assert.equal(team.conversations[0].last.kind, 'bug');
  assert.equal(((await ask(w.route, adm.token, 'GET', '/api/messages/unread'))!.body as { support: number }).support, 1);
  // the answer, as the team (remembering which admin wrote it)
  const r = await ask(w.route, adm.token, 'POST', `/api/messages/${p.user.id}`, { text: 'Fixed — thanks!' }, 'as=support');
  const ans = (r!.body as { message: MessageView }).message;
  assert.deepEqual([ans.from, ans.to, ans.by], [SUPPORT_ID, p.user.id, adm.user.id]);
  // the player reads it in their conversation with the team
  const t = (await ask(w.route, p.token, 'GET', `/api/messages/${SUPPORT_ID}`))!.body as { messages: MessageView[] };
  assert.deepEqual(t.messages.map((m) => m.from), [p.user.id, SUPPORT_ID]);
  assert.match(t.messages[0].text, /^🐞 Bug report\nThe dragon is stuck$/);
  // and can write to the team any time
  assert.equal((await ask(w.route, p.token, 'POST', `/api/messages/${SUPPORT_ID}`, { text: 'Thank you!' }))?.status, 200);
});

test('0.9.9.9.6 messenger: no more than 20 messages a minute', async () => {
  const w = await world();
  const a = await w.auth.register('fast1', 'secret12');
  for (let i = 0; i < 20; i++) assert.equal((await ask(w.route, a.token, 'POST', `/api/messages/${SUPPORT_ID}`, { text: `m${i}` }))?.status, 200);
  assert.equal((await ask(w.route, a.token, 'POST', `/api/messages/${SUPPORT_ID}`, { text: 'one more' }))?.status, 429);
});

test('0.9.9.9.6 daily challenge: an earlier day — every league\'s words, its board, and yours', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  let now = Date.parse('2026-05-10T12:00:00Z');
  const daily = new DailyService(store, study.progress, () => now);
  const { user } = await auth.register('dpast', 'secret12');
  const u = () => store.findById(user.id).then((x) => x!);
  // yesterday: played the Kana league, 8/10
  now = Date.parse('2026-05-09T12:00:00Z');
  await daily.start(await u(), '2026-05-09');
  for (let i = 0; i < 10; i++) await daily.answer(await u(), i < 8 ? 'x' : '');
  now = Date.parse('2026-05-10T12:00:00Z');
  const past = await daily.past(await u(), undefined, '2026-05-10');
  assert.equal(past.day, '2026-05-09');
  assert.equal(Object.keys(past.leagues).length, 6);
  for (const lg of Object.values(past.leagues)) assert.equal(lg.words.length, 10);
  assert.ok(past.leagues.N1.words.every((w) => w.reading && w.meaning), 'readings and meanings shown');
  assert.equal(past.played, 'KANA');
  assert.equal(past.leagues.KANA.board.length, 1);
  assert.ok(past.leagues.KANA.words.every((w) => w.ok !== null), 'your own answers marked');
  assert.ok(past.leagues.N5.words.every((w) => w.ok === null));
  await assert.rejects(() => daily.past(user as never, '2026-05-10', '2026-05-10'), /last 7 days/, 'not today');
  await assert.rejects(() => daily.past(user as never, '2026-04-01', '2026-05-10'), /last 7 days/);
});

test('0.9.9.9.6 league borders: one per league reached (the Kana one after a first Daily challenge)', () => {
  const lg = BORDERS.filter((b) => b.league).map((b) => b.id);
  assert.deepEqual(lg, ['lg-kana', 'lg-n5', 'lg-n4', 'lg-n3', 'lg-n2', 'lg-n1']);
  assert.ok(!borderUnlocked('lg-kana', 99, []), 'not before playing');
  assert.ok(borderUnlocked('lg-kana', 0, ['dplayed:2026-05-09:KANA']));
  const n3 = ['dleague:N3'];
  for (const id of ['lg-kana', 'lg-n5', 'lg-n4', 'lg-n3']) assert.ok(borderUnlocked(id, 0, n3), id);
  for (const id of ['lg-n2', 'lg-n1']) assert.ok(!borderUnlocked(id, 99, n3), id);
});

test('0.9.9.9.6 tutorial battle: the answer comes with each word; the AI casts once for every two of yours', () => {
  const rooms = new RoomManager();
  const room = rooms.create('reading', true);
  const msgs: ServerMessage[] = [];
  room.join('me', 'Me', { send: (m) => msgs.push(m) }, ['KANA']);
  // (the hint itself: private, so through the room's own helper)
  const hintFor = (room as unknown as { hintFor: (id: string) => object }).hintFor.bind(room);
  assert.deepEqual(hintFor('me'), {}, 'no word yet');
  const plain = new Room('PLN1', 'reading', { onEmpty: () => {} }, DEFAULT_ROOM_OPTIONS);
  assert.deepEqual((plain as unknown as { hintFor: (id: string) => object }).hintFor('me'), {}, 'never outside the tutorial');
  // the AI: answers right only when two spells of yours have come since its last
  let hits = 0;
  const answers: string[] = [];
  const entry = { id: 'v1', kanji: '山', reading: 'やま', meaning: 'mountain', level: 'N5', difficulty: 1 } as VocabEntry;
  const timers: Array<() => void> = [];
  const host = {
    mode: () => 'reading', peek: () => ({ challengeId: 1, entry }), deckView: () => null, ready: () => {},
    answer: (_id: string, _c: number, text: string) => answers.push(text), skip: () => {},
    deckCharacter: () => {}, deckPick: () => {}, deckPlay: () => {}, deckAbility: () => {}, deckCastReady: () => {}, deckCastGo: () => {},
    timers: () => ({ setTimeout: (fn: () => void) => { timers.push(fn); return 0 as never; }, clearTimeout: () => {} }),
    tutorialHits: () => hits,
  } as unknown as BotHost;
  const bot = new Bot('ai', 'BEGINNER', host);
  const turn = () => { bot.onEvent({ type: 'challenge', playerId: 'ai', id: 1 } as never); timers.shift()!(); };
  turn(); // you: 0 spells → it misses
  hits = 1; turn(); // 1 → misses
  hits = 2; turn(); // 2 → it casts
  turn(); // still 2 → misses
  hits = 3; turn();
  hits = 4; turn(); // 2 more → casts
  assert.deepEqual(answers.map((a) => (a === 'yama' || a === 'やま' ? 'hit' : 'miss')), ['miss', 'miss', 'hit', 'miss', 'miss', 'hit']);
});

test('0.9.9.9.6 streak emblem: the day count in kanji', () => {
  const cases: Array<[number, string]> = [[0, '〇'], [1, '一'], [2, '二'], [10, '十'], [12, '十二'], [20, '二十'], [35, '三十五'], [100, '百'], [101, '百一'], [365, '三百六十五'], [1000, '千'], [2026, '二千二十六']];
  for (const [n, k] of cases) assert.equal(kanjiNumber(n), k, String(n));
});
