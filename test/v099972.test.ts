// 0.9.9.9.7.2 — round 2 of the pre-1.0 review: each test plays what froze, filled or fooled the server, and checks
// it no longer does (and that the game still works the same).
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { brotliDecompressSync, gunzipSync } from 'node:zlib';
import { WebSocket, WebSocketServer } from 'ws';
import { apkSource } from '../src/server/apk';
import { AuthService } from '../src/server/auth/AuthService';
import { TokenSigner } from '../src/server/auth/tokens';
import { Compressed } from '../src/server/compressed';
import { MemoryStore } from '../src/server/db/Store';
import { Game, WRITING_CONFIG, type JudgeResult } from '../src/server/Game';
import { createWritingJudge } from '../src/server/handwriting/judge';
import { createJudgePool } from '../src/server/handwriting/pool';
import { Recognizer } from '../src/server/handwriting/recognizer';
import { heartbeat } from '../src/server/heartbeat';
import { OP_MAX_BYTES, OP_MAX_BYTES_EACH, opMemory, recalledOp, rememberOp } from '../src/server/http';
import { RoomManager } from '../src/server/RoomManager';
import { Session, SessionHub } from '../src/server/Session';
import { StudyService } from '../src/server/study/StudyService';
import type { ServerMessage, VocabEntry } from '../src/shared/protocol';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8');
const sleep = (ms: number) => new Promise((ok) => setTimeout(ok, ms));
/** the longest the event loop was held up while `work` ran (a battle's timers and messages wait that long) */
async function longestStall(work: () => Promise<unknown>) {
  let worst = 0, last = performance.now();
  const t = setInterval(() => { const now = performance.now(); worst = Math.max(worst, now - last - 5); last = now; }, 5);
  try { await work(); } finally { clearInterval(t); }
  return worst;
}

test('0.9.9.9.7.2 version, patch notes, Russian for the new message, the build compresses', () => {
  assert.ok(VERSION >= '0.9.9.9.7.2');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.7\.2'/);
  assert.ok(src('src/client/i18n.ts').includes("'Too many wrong room codes - wait a minute':"));
  assert.match(JSON.parse(src('package.json')).scripts.build, /build:compress/);
  assert.doesNotMatch(src('src/server/index.ts'), /CompressSync|gzipSync/, 'nothing compressed on the main thread');
});

// ── #4: compression froze the server after a deploy ──────────────────────────────────────────────────────────────
test('0.9.9.9.7.2 #4 the build compresses the files; the server sends those copies as they are', async () => {
  const dir = mkdtempSync(path.join(tmpdir(), 'kw-pub-'));
  const out = path.join(dir, '..', `${path.basename(dir)}-out`);
  const big = Buffer.from('const spell = "火の玉";\n'.repeat(20_000));
  mkdirSync(path.join(dir, 'models'));
  writeFileSync(path.join(dir, 'app.js'), big);
  writeFileSync(path.join(dir, 'models', 'witch.glb'), big);
  writeFileSync(path.join(dir, 'tiny.css'), 'a{}'); // (too small to bother)
  writeFileSync(path.join(dir, 'photo.png'), big); // (pictures are compressed already)
  execFileSync(process.execPath, ['scripts/precompress.mjs'], { env: { ...process.env, KW_PUBLIC_DIR: dir, KW_PRECOMPRESSED_DIR: out } });
  assert.deepEqual(Object.keys(JSON.parse(readFileSync(path.join(out, 'manifest.json'), 'utf8'))).sort(), ['app.js', 'models/witch.glb']);
  const c = new Compressed(out);
  assert.deepEqual(brotliDecompressSync(await c.get('app.js', big, 'br')), big);
  assert.deepEqual(gunzipSync(await c.get('models/witch.glb', big, 'gzip')), big);
  assert.equal(c.madeHere, 0, 'nothing compressed by the server: the build did it');
  // a server started with a file changed since the build (same size, other bytes) doesn't send the old copy
  const changed = Buffer.from(big); changed[0] = 'C'.charCodeAt(0);
  const fresh = new Compressed(out);
  assert.deepEqual(brotliDecompressSync(await fresh.get('app.js', changed, 'br')), changed);
  assert.equal(fresh.madeHere, 1);
});

test('0.9.9.9.7.2 #4 a file the build didn\'t compress is compressed without stopping the server, once', async () => {
  const c = new Compressed(path.join(tmpdir(), 'kw-nothing-here'));
  const data = readFileSync('public/dict.json'); // (8 MB: 1.3 s of a frozen server before, measured)
  let got: Buffer[] = [];
  const stall = await longestStall(async () => { got = await Promise.all(Array.from({ length: 20 }, () => c.get('dict.json', data, 'br'))); });
  assert.ok(stall < 150, `the server was held up ${stall.toFixed(0)} ms`);
  assert.equal(c.madeHere, 1, '20 players at once: compressed once');
  assert.deepEqual(brotliDecompressSync(got[0]), data);
});

// ── #5: a big drawing froze the server ───────────────────────────────────────────────────────────────────────────
const rec = Recognizer.fromFile();
const local = { normal: createWritingJudge(rec), lenient: createWritingJudge(rec, { lenient: true }) };
const entry = (kanji: string): VocabEntry => ({ id: kanji, kanji, reading: 'x', meaning: 'x', level: 'N3', difficulty: 40 } as VocabEntry);
const scribble = (n: number) => Array.from({ length: n }, () => Array.from({ length: 64 }, () => [Math.random() * 600, Math.random() * 600] as [number, number]));

test('0.9.9.9.7.2 #5 drawings are judged on their own thread: the same answers, and the server keeps running', async () => {
  const pool = createJudgePool({ fallback: local });
  try {
    pool.warm();
    for (const ch of ['魔', '法', '火', 'あ']) {
      const drawn = [rec.strokes(ch) as never];
      assert.deepEqual(await pool.normal(entry(ch), drawn), local.normal(entry(ch), drawn), ch);
      assert.deepEqual(await pool.lenient(entry(ch), drawn), local.lenient(entry(ch), drawn), ch);
    }
    // the worst the review found: a whole word as one group of 120 zig-zag strokes (most of a second, all frozen)
    let r: JudgeResult = { correct: true, recognized: '' };
    const stall = await longestStall(async () => { r = await pool.normal(entry('魔法使い'), [scribble(120)]); });
    assert.equal(r.correct, false);
    assert.ok(stall < 100, `the server was held up ${stall.toFixed(0)} ms`);
  } finally { await pool.close(); }
});

test('0.9.9.9.7.2 #5 if the thread fails, the drawing is judged the old way; a flood of drawings is turned away', async () => {
  const broken = createJudgePool({ fallback: local, file: path.join(tmpdir(), 'no-such-worker.js'), onError: () => {} });
  const drawn = [rec.strokes('火') as never];
  assert.deepEqual(await broken.normal(entry('火'), drawn), { correct: true, recognized: '火' }, 'a right answer is never lost to it');
  await broken.close();
  const pool = createJudgePool({ fallback: local, maxWaiting: 2 });
  try {
    const answers = [pool.normal(entry('魔法使い'), [scribble(60)]), pool.normal(entry('魔法使い'), [scribble(60)]), pool.normal(entry('火'), drawn)];
    assert.deepEqual(await answers[2], { correct: false, recognized: '?' }, 'the third waiting at once is not judged');
    await Promise.all(answers);
  } finally { await pool.close(); }
});

test('0.9.9.9.7.2 #5 a writing duel with an answer that comes later: counted once, and not after the word timed out', async () => {
  // the game's clock 100× fast: a 40 s word lasts 0.4 s here
  const handles = new Map<number, ReturnType<typeof setTimeout>>();
  let seq = 0;
  const timers = { setTimeout: (fn: () => void, ms: number) => { const id = ++seq; handles.set(id, setTimeout(fn, ms / 100)); return id; }, clearTimeout: (h?: number) => { if (h) clearTimeout(handles.get(h)); } };
  const events: any[] = [];
  const judged: string[] = [];
  let delay = 30;
  const slow = (e: VocabEntry) => { judged.push(e.id); const ms = delay; return new Promise<JudgeResult>((ok) => setTimeout(() => ok({ correct: true, recognized: e.kanji }), ms)); };
  const words = ['火', '水', '木'].map((k, i) => ({ ...entry(k), id: `w${i}` }));
  const game = new Game([{ id: 'a', pool: words, maxHp: 10_000 }, { id: 'b', pool: words, maxHp: 10_000 }], (e) => events.push(e),
    { ...WRITING_CONFIG, prepMs: 1000, countdownMs: 1000 }, Math.random, () => Date.now(), { mode: 'writing', judgeWriting: slow }, timers);
  const current = () => events.filter((e) => e.type === 'challenge' && e.playerId === 'a').at(-1).id as number;
  const resultsFor = (id: number) => events.filter((e) => e.type === 'answer_result' && e.challengeId === id);
  game.start(); game.markReady('a'); game.markReady('b');
  await sleep(40);
  const first = current();
  game.submitWriting('a', first, [[[[0, 0], [1, 1]]]]);
  game.submitWriting('a', first, [[[[0, 0], [1, 1]]]]); // pressed twice
  await sleep(60);
  assert.equal(judged.length, 1, 'one drawing at a time');
  assert.equal(resultsFor(first).length, 1);
  assert.equal(resultsFor(first)[0].correct, true, 'the answer that came a moment later counts');
  await sleep(40); // (the next word)
  const second = current();
  assert.notEqual(second, first);
  delay = 700; // the judge answers after the word's 0.4 s are up
  game.submitWriting('a', second, [[[[0, 0], [1, 1]]]]);
  await sleep(800);
  assert.equal(resultsFor(second).length, 1, 'one result for the word');
  assert.equal(resultsFor(second)[0].timedOut, true, 'it timed out; the late answer is not counted on top');
  game.dispose();
});

// ── #6: the "do this once" answers could fill the memory ─────────────────────────────────────────────────────────
test('0.9.9.9.7.2 #6 a script sending a new change id with every call can\'t fill the memory, or push out others', () => {
  rememberOp('playertok:legit-op-1', { status: 200, body: { card: 1 } });
  const blob = 'x'.repeat(10_000);
  for (let i = 0; i < 5_000; i++) rememberOp(`attacker:op-${i}-abcdef`, { status: 200, body: { blob } }); // 50 MB worth before
  assert.ok(opMemory().bytes <= OP_MAX_BYTES_EACH + 2_000, `one sign-in keeps ${opMemory().bytes} bytes`);
  assert.deepEqual(recalledOp('playertok:legit-op-1'), { status: 200, body: { card: 1 } }, 'someone else\'s answer is still there');
  assert.ok(recalledOp('attacker:op-4999-abcdef'), 'the newest of the flood is kept (it is a real answer)');
  for (let w = 0; w < 40; w++) for (let i = 0; i < 120; i++) rememberOp(`who${w}:op-${i}-abcdef`, { status: 200, body: { blob } }); // 40 sign-ins
  assert.ok(opMemory().bytes <= OP_MAX_BYTES, `all together ${opMemory().bytes} bytes (≤ ${OP_MAX_BYTES})`);
  rememberOp('huge:op-1-abcdef', { status: 200, body: { blob: 'y'.repeat(OP_MAX_BYTES_EACH + 1) } });
  assert.equal(recalledOp('huge:op-1-abcdef'), null, 'one answer bigger than a sign-in\'s share isn\'t kept');
});

// ── #8: a connection that went quiet ─────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.2 #8 a connection that stops answering is closed within two pings; a live one stays', async () => {
  const server = createServer();
  const wss = new WebSocketServer({ server });
  const closed: string[] = [];
  wss.on('connection', (ws, req) => { const who = new URL(req.url ?? '/', 'http://x').searchParams.get('who')!; heartbeat(ws, 100); ws.on('close', () => closed.push(who)); });
  await new Promise<void>((ok) => server.listen(0, ok));
  const url = (who: string) => `ws://127.0.0.1:${(server.address() as AddressInfo).port}/?who=${who}`;
  const live = new WebSocket(url('live')), dead = new WebSocket(url('dead'));
  await Promise.all([live, dead].map((s) => new Promise((ok) => s.once('open', ok))));
  (dead as any)._socket.pause(); // a phone that lost its signal: nothing comes back, nothing is closed
  await sleep(450);
  assert.deepEqual(closed, ['dead'], 'the quiet one is gone; its seat\'s grace for coming back begins');
  live.close(); dead.terminate(); wss.close(); server.close();
});

// ── #9: app downloads at once ────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.7.2 #9 fifty downloads of the app at once fetch it from GitHub once', async () => {
  let fetched = 0, clock = 0;
  const latest = apkSource('https://example.invalid/app.apk', async () => { fetched++; await sleep(30); return { ok: true, status: 200, arrayBuffer: async () => new Uint8Array(1024).buffer }; }, () => clock);
  const all = await Promise.all(Array.from({ length: 50 }, (_, i) => latest(`v${i}`))); // (each with its own ?v=, as the review tried)
  assert.equal(fetched, 1);
  assert.ok(all.every((b) => b === all[0]), 'one copy in memory, shared');
  clock += 30_000;
  await latest('another');
  assert.equal(fetched, 1, 'within a minute: the same copy');
});

// ── #10 and #11: the live connection ─────────────────────────────────────────────────────────────────────────────
async function world() {
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('s'));
  const hub = new SessionHub();
  const rooms = new RoomManager();
  const study = new StudyService(store);
  const signUp = async (name: string) => (await auth.register(name, 'secret12', `${name}@gmail.com`)).token;
  const connect = (ip = '10.0.0.1') => {
    const got: ServerMessage[] = [];
    const s = new Session(rooms, auth, hub, study, (json) => got.push(JSON.parse(json)), () => {});
    s.ip = ip;
    return { s, got, say: (m: object) => s.onRaw(JSON.stringify(m)) };
  };
  return { store, auth, hub, rooms, signUp, connect };
}
const idOf = (token: string) => token.split('.')[0];

test('0.9.9.9.7.2 #10 a second "hello" on one connection is ignored: no ghost left "online"', async () => {
  const w = await world();
  const ann = await w.signUp('ann'), bob = await w.signUp('bob');
  const c = w.connect();
  await c.say({ type: 'hello', token: ann });
  await c.say({ type: 'hello', token: bob }); // the review's case: signing in as someone else on the same connection
  assert.equal(w.hub.online(idOf(ann)), true);
  assert.equal(w.hub.online(idOf(bob)), false, 'bob never connected');
  c.s.onClose();
  assert.equal(w.hub.online(idOf(ann)), false, 'ann leaves when the connection closes (she stayed "online" until a restart)');
  assert.equal(w.hub.onlineCount, 0);
});

test('0.9.9.9.7.2 #11 wrong room codes are limited — 10 a minute per account, 20 per address', async () => {
  const w = await world();
  const host = w.connect('10.9.9.9');
  await host.say({ type: 'hello', token: await w.signUp('host') });
  await host.say({ type: 'create', mode: 'reading' });
  const code = (host.got.find((m) => m.type === 'joined') as Extract<ServerMessage, { type: 'joined' }>).code;
  const guesser = w.connect();
  await guesser.say({ type: 'hello', token: await w.signUp('guesser') });
  const wrong = code === 'AAAA' ? 'BBBB' : 'AAAA';
  for (let i = 0; i < 10; i++) await guesser.say({ type: 'join', code: wrong });
  assert.equal(guesser.got.filter((m) => m.type === 'error' && m.message === 'Room not found').length, 10);
  await guesser.say({ type: 'join', code });
  assert.ok(guesser.got.some((m) => m.type === 'error' && m.message === 'Too many wrong room codes - wait a minute'), 'even the right code waits: a script learns nothing');
  assert.ok(!guesser.got.some((m) => m.type === 'joined'));
  // more accounts from the same address: 20 wrong a minute in all
  for (const name of ['second', 'third']) {
    const c = w.connect();
    await c.say({ type: 'hello', token: await w.signUp(name) });
    for (let i = 0; i < 10; i++) await c.say({ type: 'join', code: wrong });
    if (name === 'third') assert.ok(c.got.some((m) => m.type === 'error' && m.message === 'Too many wrong room codes - wait a minute'), 'the address has had its 20');
  }
  // a friend with the right code, from elsewhere, gets in
  const friend = w.connect('10.5.5.5');
  await friend.say({ type: 'hello', token: await w.signUp('friend') });
  await friend.say({ type: 'join', code });
  assert.ok(friend.got.some((m) => m.type === 'joined'));
});
