import assert from 'node:assert/strict';
import { test } from 'node:test';
import { MemoryStore, SUPPORT_ID } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { createApiRouter } from '../src/server/router';
import { MessageService } from '../src/server/study/MessageService';
import { APP_NEEDS, VERSION } from '../src/shared/version';
import { LEAGUE_FRAMES } from '../src/client/borders';

const ask = (route: ReturnType<typeof createApiRouter>, token: string, method: string, url: string, body: unknown = {}, query = '') =>
  route({ method, url, query: new URLSearchParams(query), token, ip: '1.2.3.4', json: async () => body });

async function world() {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const pushed: string[] = [];
  const reads: Array<[string, string]> = [];
  const messages = new MessageService(store, { deliver: () => {}, push: (to) => pushed.push(to), online: () => false, read: (w, r) => reads.push([w, r]) });
  const route = createApiRouter(auth, new StudyService(store), { messages });
  const a = await auth.register('ann61', 'secret12'), b = await auth.register('bob61', 'secret12');
  await store.requestFriend(a.user.id, b.user.id); await store.acceptFriend(b.user.id, a.user.id);
  return { store, route, pushed, reads, a, b };
}

test('0.9.9.9.6.1 messenger: reading a chat tells the writer (✓ → ✓✓), once', async () => {
  const w = await world();
  await ask(w.route, w.a.token, 'POST', `/api/messages/${w.b.user.id}`, { text: 'hi' });
  await ask(w.route, w.b.token, 'GET', `/api/messages/${w.a.user.id}`);
  assert.deepEqual(w.reads, [[w.a.user.id, w.b.user.id]], 'Ann is told Bob read it');
  await ask(w.route, w.b.token, 'GET', `/api/messages/${w.a.user.id}`);
  assert.equal(w.reads.length, 1, 'nothing new read: no second notice');
  // the team reading a player's message: the player is told (reader: the team)
  const adm = await (async () => { const r = await new AuthService(w.store, new TokenSigner('t')).register('adm61', 'secret12'); await w.store.update(r.user.id, { role: 'admin' }); return r; })();
  await ask(w.route, w.a.token, 'POST', `/api/messages/${SUPPORT_ID}`, { text: 'help' });
  await ask(w.route, adm.token, 'GET', `/api/messages/${w.a.user.id}`, {}, 'as=support');
  assert.deepEqual(w.reads.at(-1), [w.a.user.id, SUPPORT_ID]);
});

test('0.9.9.9.6.1 messenger: mute one chat or all of them — no pushes; the list says so', async () => {
  const w = await world();
  await ask(w.route, w.a.token, 'POST', `/api/messages/${w.b.user.id}`, { text: 'one' });
  assert.equal(w.pushed.length, 1);
  assert.equal((await ask(w.route, w.b.token, 'PUT', '/api/messages/mute', { who: w.a.user.id, on: true }))?.status, 200);
  await ask(w.route, w.a.token, 'POST', `/api/messages/${w.b.user.id}`, { text: 'two' });
  assert.equal(w.pushed.length, 1, 'Ann muted: no push');
  const list = (await ask(w.route, w.b.token, 'GET', '/api/messages'))!.body as { conversations: Array<{ id: string; muted?: boolean; unread: number }>; mutedAll: boolean };
  assert.equal(list.conversations.find((c) => c.id === w.a.user.id)?.muted, true);
  assert.equal(list.conversations.find((c) => c.id === w.a.user.id)?.unread, 2, 'still counted');
  assert.equal(list.mutedAll, false);
  await ask(w.route, w.b.token, 'PUT', '/api/messages/mute', { who: w.a.user.id, on: false });
  await ask(w.route, w.b.token, 'PUT', '/api/messages/mute', { who: 'all', on: true });
  await ask(w.route, w.a.token, 'POST', `/api/messages/${w.b.user.id}`, { text: 'three' });
  assert.equal(w.pushed.length, 1, 'all muted: no push');
  assert.equal(((await ask(w.route, w.b.token, 'GET', '/api/messages'))!.body as { mutedAll: boolean }).mutedAll, true);
  await ask(w.route, w.b.token, 'PUT', '/api/messages/mute', { who: 'all', on: false });
  await ask(w.route, w.a.token, 'POST', `/api/messages/${w.b.user.id}`, { text: 'four' });
  assert.equal(w.pushed.length, 2, 'unmuted: pushed again');
  assert.equal((await ask(w.route, w.b.token, 'PUT', '/api/messages/mute', { who: '../x', on: true }))?.status, 400);
});

test('0.9.9.9.6.1 "Update the app" only when the app is missing something (not after every patch)', () => {
  const v = (s: string) => s.split('.').map(Number);
  const cmp = (a: string, b: string) => { const x = v(a), y = v(b); for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] ?? 0) - (y[i] ?? 0); if (d) return Math.sign(d); } return 0; };
  assert.ok(cmp(APP_NEEDS, VERSION) <= 0, 'the app needed is never newer than the game');
  assert.match(APP_NEEDS, /^\d+(\.\d+)+$/);
});

test('0.9.9.9.6.1 league borders are drawn — no emoji in them; each has its league on a plaque', () => {
  const plaque: Record<string, string> = { 'lg-kana': 'かな', 'lg-n5': 'N5', 'lg-n4': 'N4', 'lg-n3': 'N3', 'lg-n2': 'N2', 'lg-n1': 'N1' };
  for (const [id, svg] of Object.entries(LEAGUE_FRAMES)) {
    assert.ok(!/\p{Extended_Pictographic}/u.test(svg), `${id}: no emoji`);
    assert.ok(svg.startsWith('<svg') && svg.endsWith('</svg>'), id);
    assert.ok(svg.includes(`>${plaque[id]}</text>`), `${id}: its plaque`);
    assert.ok(!/NaN|undefined/.test(svg), `${id}: well formed`);
  }
});
