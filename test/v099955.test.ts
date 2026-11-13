import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Room, DEFAULT_ROOM_OPTIONS } from '../src/server/Room';
import type { ServerMessage } from '../src/shared/protocol';
import { SessionHub, type Session } from '../src/server/Session';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { createApiRouter } from '../src/server/router';
import { addPlay, cleanStats, mergeStats } from '../src/shared/quizstats';

function client() {
  const msgs: ServerMessage[] = [];
  return { msgs, send: (m: ServerMessage) => msgs.push(m), all: <T extends ServerMessage['type']>(t: T) => msgs.filter((m) => m.type === t) as Array<Extract<ServerMessage, { type: T }>> };
}
const ask = (route: ReturnType<typeof createApiRouter>, token: string, method: string, url: string, body: unknown = {}) =>
  route({ method, url, query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => body });

test('0.9.9.9.5.5 lobby chat: "Ann is typing…" goes to the others (not back to Ann), at most every 1.5 s', () => {
  const room = new Room('TYPE', 'reading', { onEmpty: () => {} }, DEFAULT_ROOM_OPTIONS);
  const a = client(), b = client();
  room.join('a', 'Ann', a); room.join('b', 'Bo', b);
  room.chatTyping('a', true, 1000);
  room.chatTyping('a', true, 1500); // (too soon: dropped)
  room.chatTyping('a', true, 2600);
  room.chatTyping('a', false, 2700);
  assert.deepEqual(b.all('chat_typing').map((m) => [m.name, m.on]), [['Ann', true], ['Ann', true], ['Ann', false]]);
  assert.equal(a.all('chat_typing').length, 0, 'not to themselves');
  room.chatTyping('nobody', true, 9000);
  assert.equal(b.all('chat_typing').length, 3, 'someone not in the room: nothing');
  room.leave('b'); room.leave('a');
});

test('0.9.9.9.5.5 lobby chat: "Bo joined the lobby" / "Bo left the lobby" lines from the game', () => {
  const room = new Room('SYSL', 'boss', { onEmpty: () => {} }, DEFAULT_ROOM_OPTIONS);
  const a = client(), b = client();
  room.join('a', 'Ann', a);
  room.join('b', 'Bo', b);
  const joined = a.all('chat').flatMap((m) => m.messages).filter((m) => m.sys);
  assert.deepEqual(joined.map((m) => [m.sys, m.name, m.from]), [['join', 'Bo', 'b']], 'Ann sees Bo come in');
  assert.ok(!b.all('chat').flatMap((m) => m.messages).some((m) => m.sys === 'join' && m.from === 'b'), 'Bo is not told he joined');
  room.leave('b');
  const left = a.all('chat').flatMap((m) => m.messages).filter((m) => m.sys === 'leave');
  assert.deepEqual(left.map((m) => m.name), ['Bo']);
  // a late joiner sees them in the history
  const c = client();
  room.join('c', 'Cy', c);
  assert.deepEqual(c.all('chat')[0].messages.map((m) => `${m.sys}:${m.name}`), ['join:Bo', 'leave:Bo']);
  room.leave('c'); room.leave('a');
});

test('0.9.9.9.5.5 open / closed lobby: only the host changes it; everyone sees it; friends get the code only when open', () => {
  const room = new Room('OPEN', 'boss', { onEmpty: () => {} }, DEFAULT_ROOM_OPTIONS);
  const a = client(), b = client();
  room.join('a', 'Ann', a); room.join('b', 'Bo', b);
  const lastLobby = () => b.all('lobby').at(-1)!;
  assert.equal(lastLobby().open, false, 'closed at first');
  room.setOpen('b', true);
  assert.equal(room.open, false, 'not the host: nothing');
  room.setOpen('a', true);
  assert.equal(lastLobby().open, true);
  assert.equal(room.size, 2);
  // what a friend sees beside Ann's name
  const hub = new SessionHub();
  const fake = (r: Room | undefined) => ({ activity: () => 'Lobby', kick: () => {}, device: 'web', away: false,
    party: () => (r ? { size: r.size, max: r.maxPlayers, mode: 'Boss Elimination', ...(r.open && r.stage === 'lobby' && r.size < r.maxPlayers ? { code: r.code } : {}) } : undefined) }) as unknown as Session;
  hub.claim('a', fake(room));
  assert.deepEqual(hub.presence('a').party, { size: 2, max: 4, mode: 'Boss Elimination', code: 'OPEN' });
  room.setOpen('a', false);
  assert.equal(hub.presence('a').party?.code, undefined, 'closed: no code');
  room.leave('b'); room.leave('a');
});

test('0.9.9.9.5.5 quiz records: kept with the account (the same on every device); a device\'s old ones added once', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const route = createApiRouter(auth, study, {});
  const { token } = await auth.register('quizzer', 'secret12');
  const r1 = await ask(route, token, 'POST', '/api/me/quiz', { kind: 'jlpt', score: 7, total: 10, ms: 60_000 });
  assert.equal(r1?.status, 200);
  const r2 = await ask(route, token, 'POST', '/api/me/quiz', { kind: 'jlpt', score: 9, total: 10, ms: 40_000 });
  const s = (r2!.body as { quizStats: ReturnType<typeof cleanStats> }).quizStats.jlpt!;
  assert.deepEqual([s.plays, s.best, s.last, s.bestMs, s.timed], [2, 9, 9, 40_000, 2]);
  assert.equal((await ask(route, token, 'POST', '/api/me/quiz', { kind: 'nope', score: 1, total: 2 }))?.status, 400);
  assert.equal((await ask(route, token, 'POST', '/api/me/quiz', { kind: 'ono', score: 11, total: 10 }))?.status, 400);
  // the profile has them (another device reads them from there)
  const me = await ask(route, token, 'GET', '/api/me');
  assert.equal((me!.body as { profile: { quizStats: { jlpt: { plays: number } } } }).profile.quizStats.jlpt.plays, 2);
  // a phone's records from before: merged in
  const phone = { jlpt: addPlay(undefined, 5, 10, 90_000, 1), passage: addPlay(undefined, 3, 6, 0, 2), junk: { plays: 'x' } };
  const r3 = await ask(route, token, 'PUT', '/api/me/quizstats', { stats: phone });
  const m = (r3!.body as { quizStats: ReturnType<typeof cleanStats> }).quizStats;
  assert.equal(m.jlpt!.plays, 3);
  assert.equal(m.jlpt!.best, 9, 'the best stays the best');
  assert.equal(m.jlpt!.last, 9, 'the last is the latest one');
  assert.equal(m.passage!.plays, 1);
  assert.equal(Object.keys(m).length, 2, 'nothing odd kept');
});

test('0.9.9.9.5.5 quiz records: merging and checking', () => {
  const a = addPlay(addPlay(undefined, 6, 10, 30_000, 10), 8, 10, 20_000, 20);
  const b = addPlay(undefined, 10, 10, 50_000, 30);
  const m = mergeStats({ jlpt: a }, { jlpt: b }).jlpt!;
  assert.deepEqual([m.plays, m.best, m.last, m.bestMs, m.timed, Math.round(m.sum10!)], [3, 10, 10, 20_000, 3, 24]);
  assert.deepEqual(cleanStats({ jlpt: { plays: 2, best: 99, bestOf: 10, last: 3, lastOf: 10 } }).jlpt!.best, 10, 'a best above the total is cut');
  assert.deepEqual(cleanStats('nonsense'), {});
});

test('0.9.9.9.5.5 "View profile": what they wear and their achievements', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const auth = new AuthService(store, new TokenSigner('t'));
  const { user } = await auth.register('looker', 'secret12');
  await store.update(user.id, { unlocks: ['char:knight', 'pose:aim', 'ach:first-win', 'flame:x'], staff: 'ember', border: 'lg-n3', flame: 'blue' });
  const p = (await study.publicProfile(user.id))!;
  assert.equal(p.look?.character, 'knight');
  assert.equal(p.look?.pose, 'aim');
  assert.equal(p.look?.staff, 'ember');
  assert.equal(p.look?.border, 'lg-n3');
  assert.deepEqual(p.achievements, ['first-win']);
});
