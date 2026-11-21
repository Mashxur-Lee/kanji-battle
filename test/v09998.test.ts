// 0.9.9.9.8: staff sounds, the opponent's words on the results screen, a notifications switch (no test buttons),
// letters for players without a picture, quiz records that update at once, safer accounts and apps, and the copy.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { AuthService } from '../src/server/auth/AuthService';
import { hashPassword } from '../src/server/auth/passwords';
import { passwordProblem } from '../src/server/auth/strength';
import { TokenSigner } from '../src/server/auth/tokens';
import { botName } from '../src/server/Bot';
import { MemoryStore } from '../src/server/db/Store';
import { createApiRouter } from '../src/server/router';
import { originAllowed, securityHeaders } from '../src/server/security';
import { StudyService } from '../src/server/study/StudyService';
import { STAFFS } from '../src/shared/progress';
import { VERSION } from '../src/shared/version';
import { spellsOf, staffCast } from '../src/client/staffsfx';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
const mail = () => `t${Math.random().toString(36).slice(2)}@test.dev`;
const ask = (route: ReturnType<typeof createApiRouter>, token: string, method: string, url: string, body: unknown = {}) =>
  route({ method, url, query: new URLSearchParams(), token, ip: '1.2.3.4', json: async () => body });

test('0.9.9.9.8 version, patch notes, Russian for the new words', () => {
  assert.ok(VERSION >= '0.9.9.9.8');
  assert.match(src('src/client/whatsnew.ts'), /v: '0\.9\.9\.9\.8'/);
  const ru = src('src/client/i18n.ts');
  for (const k of ["'Invites and messages':", "'Sign out on all other devices':", "'No words in this match':", "'Password: at least 8 characters':", "'That password is too easy to guess. Pick another one.':", "'Bot · beginner':", "Tap a staff to hear its spell"]) assert.ok(ru.includes(k), k);
});

// ── staff sounds ─────────────────────────────────────────────────────────────────────────────────────────────────
/** a stand-in audio context: counts what a sound builds, and fails on anything a real one would refuse */
function fakeContext() {
  let nodes = 0;
  const param = () => ({ value: 0, setValueAtTime() { return this; }, exponentialRampToValueAtTime(v: number) { assert.ok(v > 0, 'an exponential ramp needs a value above 0'); return this; }, setTargetAtTime() { return this; }, linearRampToValueAtTime() { return this; } });
  const node = (extra: object = {}) => { nodes++; return { connect(n: unknown) { return n; }, ...extra }; };
  const c = {
    sampleRate: 8000, currentTime: 0,
    createGain: () => node({ gain: param() }),
    createOscillator: () => node({ type: 'sine', frequency: param(), detune: param(), start() {}, stop() {} }),
    createBiquadFilter: () => node({ type: 'lowpass', frequency: param(), Q: param() }),
    createBuffer: (_ch: number, n: number) => { assert.ok(n > 0 && Number.isInteger(n), 'a buffer of whole samples'); const d = new Float32Array(n); return { getChannelData: () => d }; },
    createBufferSource: () => node({ buffer: null, start() {} }),
  };
  return { c, count: () => nodes };
}

test('0.9.9.9.8 every staff has a cast sound of its own (a seasonal one at least its classic staff\'s), bigger with the combo', () => {
  // (0.9.9.9.9.1: a seasonal staff sounds like its classic staff — the same staff in another colour — and every staff has spells that take turns)
  for (const s of STAFFS) assert.ok(spellsOf(s.sword ? 'sword' : s.base ?? s.id) >= 2, `${s.id} has its staff's sounds`); // (0.9.9.9.9.5: the swords share theirs)
  for (const s of STAFFS) {
    const sizes = [1, 5].map((combo) => { const f = fakeContext(); const out = f.c.createGain(); staffCast({ c: f.c as never, dry: out as never, wet: out as never }, s.id, combo, 0, s.base, 0); return f.count(); }); // (0.9.9.9.9.1: the same spell both times — they take turns at random)
    assert.ok(sizes[1] >= sizes[0], `${s.id}: a 5× combo is at least as big as a single cast`);
  }
  // an unknown staff (an old save) still sounds
  const f = fakeContext(); const out = f.c.createGain();
  staffCast({ c: f.c as never, dry: out as never, wet: out as never }, 'nonsense', 1, 0);
  assert.ok(f.count() > 5);
  // played on a right answer in a battle, with your staff — and in Customize when you tap one
  // (0.9.9.9.9: the staff of the player whose side you see — yours, or the player you watch)
  assert.match(src('src/client/main.ts'), /audio\.sfx\.cast\(players\.find\(\(p\) => p\.id === you\)\?\.staff \?\? profile\?\.staff, msg\.combo\)/);
  assert.match(src('src/client/study.ts'), /if \(custTab === 'staff'\) audio\.sfx\.cast\(shownColour\(it\.id, profile\)\.id, 1\);/); // (0.9.9.9.9.1: the colour on show)
});

// ── results, lobby, quizzes ──────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.8 the results: a tab for each player\'s words; the lobby: a letter for a player without a picture', () => {
  const ui = src('src/client/ui.ts');
  assert.match(ui, /tabs\.replaceChildren\(\.\.\.who\.map\(/);
  assert.match(ui, /function fillWords\(s: PlayerStats\)/);
  assert.match(src('public/index.html'), /<div id="wordTabs" class="word-tabs" role="tablist"/);
  assert.match(ui, /p\.bot \? picEl\(p\.pic, 'pic', p\.border\) : picOrLetter\(p\.pic, p\.name, 'pic', p\.border\)/);
});

test('0.9.9.9.8 quizzes: a slower answer with older records can\'t take the screen back to them', () => {
  const q = src('src/client/quizzesui.ts');
  assert.match(q, /function keep\(s: QuizStats\) \{ server = newer\(server, s\);/);
  assert.match(q, /y\.plays > x\.plays \|\| \(y\.plays === x\.plays && y\.at >= x\.at\)/);
});

// ── notifications ────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.8 notifications: an on/off switch for invites and messages, and no test buttons (nor the server\'s test)', async () => {
  const html = src('public/index.html');
  assert.match(html, /<button id="alertsBtn"/);
  for (const gone of ['remindTest', 'pushTest', 'remindLast']) assert.ok(!html.includes(`id="${gone}`), gone);
  const push = src('src/client/push.ts');
  assert.match(push, /if \(!b \|\| !alertsOn\(\)\) return;/, 'switched off: the phone doesn\'t register');
  assert.match(push, /if \(token\) await api\.pushUnregister\(token\)/, 'and hands its token back');
  assert.match(src('src/client/notify.ts'), /if \(!alertsOn\(\) \|\| !\('Notification' in window\)/);
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  const { token } = await auth.register('quietone', 'secret12', mail());
  assert.equal((await ask(createApiRouter(auth, new StudyService(store), {}), token, 'POST', '/api/push/test'))?.status, 404);
});

// ── accounts ─────────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.8 a new password: 8 characters, not a common one, not the login — older passwords still sign in', async () => {
  assert.match(passwordProblem('short1') ?? '', /at least 8/);
  for (const p of ['password', '12345678', 'qwerty123', 'aaaaaaaa', 'kanjiwizards', 'PASSWORD1']) assert.match(passwordProblem(p) ?? '', /too easy/, p);
  assert.match(passwordProblem('kenji_99!', 'kenji_99') ?? '', /login/);
  assert.equal(passwordProblem('tea-kettle-42', 'kenji'), null);
  const store = new MemoryStore();
  const auth = new AuthService(store, new TokenSigner('t'));
  await assert.rejects(auth.register('newbie', '1234567', mail()), /at least 8/);
  await assert.rejects(auth.register('newbie', 'password1', mail()), /too easy/);
  const u = await auth.register('newbie', 'tea-kettle-42', mail());
  await assert.rejects(auth.changePassword((await store.findById(u.user.id))!, 'tea-kettle-42', 'iloveyou'), /too easy/);
  // made before: a 6-character password still works
  await store.create({ username: 'veteran', passwordHash: await hashPassword('secret'), role: 'user' });
  assert.ok((await auth.login('veteran', 'secret')).token);
});

test('0.9.9.9.8 "Sign out on all other devices": the other devices\' sign-ins stop working, this one keeps going', async () => {
  const store = new MemoryStore();
  const tokens = new TokenSigner('t');
  const auth = new AuthService(store, tokens);
  const { user } = await auth.register('traveller', 'tea-kettle-42', mail());
  const lost = tokens.sign(user.id, Date.now() - 5000); // (the lost phone signed in earlier)
  assert.ok(await auth.authenticate(lost));
  const route = createApiRouter(auth, new StudyService(store), {});
  const r = await ask(route, tokens.sign(user.id, Date.now() - 2000), 'POST', '/api/me/signout-others');
  assert.equal(r?.status, 200);
  const fresh = (r?.body as { token: string }).token;
  await assert.rejects(auth.authenticate(lost), /signed out on this device/);
  assert.ok(await auth.authenticate(fresh));
});

test('0.9.9.9.8 the live connection only from the game\'s own pages; other sites can\'t load its files', () => {
  assert.equal(originAllowed(undefined, 'game.example'), true, 'not a browser (no Origin): a token is needed anyway');
  assert.equal(originAllowed('https://game.example', 'game.example'), true);
  assert.equal(originAllowed('https://evil.example', 'game.example'), false);
  assert.equal(originAllowed('https://game.example.evil.example', 'game.example'), false);
  assert.equal(originAllowed('null', 'game.example'), false);
  assert.equal(originAllowed('https://test.example', 'game.example', 'https://test.example'), true, 'KW_ORIGINS');
  assert.match(src('src/server/index.ts'), /if \(req && !originAllowed\(req\.headers\.origin, req\.headers\.host\)\) \{ ws\.close\(1008/);
  const h = securityHeaders([], true);
  assert.equal(h['Cross-Origin-Resource-Policy'], 'same-origin');
  assert.equal(h['Strict-Transport-Security'], 'max-age=31536000; includeSubDomains');
  assert.match(h['Content-Security-Policy'], /upgrade-insecure-requests/);
  assert.match(src('src/server/http.ts'), /'Cross-Origin-Resource-Policy': 'same-origin', \.\.\.out\.raw\.headers/);
});

test('0.9.9.9.8 the apps open only the game\'s exact address (a look-alike address got in before)', () => {
  const desk = src('desktop/main.js');
  assert.match(desk, /const ours = \(url\) => \{ try \{ return new URL\(url\)\.origin === ORIGIN; \}/);
  assert.ok(!/startsWith\(ORIGIN\)/.test(desk), 'no check of how the address starts');
  assert.match(desk, /if \(ours\(url\) \|\| offlinePage\(url\)\) return;/, 'of the files on the computer, only the offline page');
  assert.match(desk, /cb\(ours\(wc\.getURL\(\)\) &&/, 'the microphone and notifications only for the game');
  const android = src('mobile/android/app/src/main/java/com/kanjiwizards/app/MainActivity.java');
  assert.match(android, /home\.getHost\(\)\.equals\(u\.getHost\(\)\) && home\.getScheme\(\) != null && home\.getScheme\(\)\.equals\(u\.getScheme\(\)\)/);
  assert.match(android, /"file:\/\/\/android_asset\/offline\.html"\.equals\(/);
});

// ── the copy ─────────────────────────────────────────────────────────────────────────────────────────────────────
test('0.9.9.9.8 the copy: computer players are bots; plain dashes in the English; the page and stylesheet sent without notes', () => {
  assert.equal(botName(0, 'N1'), 'Kitsune (Bot N1)');
  assert.equal(botName(1, 'BEGINNER'), 'Tanuki (Bot Beginner)');
  const page = src('public/index.html').replace(/<!--[\s\S]*?-->/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
  const text = page.replace(/<[^>]+>/g, ' ');
  assert.equal((text.match(/\s—\s/g) ?? []).length, 0, 'no spaced em dashes in the page\'s English');
  assert.ok(!/\bAI (player|opponent|teammates|wizards)\b|\+ Add AI/.test(text), 'the computer players are bots');
  assert.match(text, /generated with AI tools/, 'the art credit stays as it is');
  // older match history: "(AI N1)" still reads as a bot
  assert.match(src('src/client/i18n.ts'), /\[\/\^\(\.\+\) \\\(\(\?:AI\|Bot\) \(N\\d\)\\\)\$\/, '\$1 \(бот \$2\)'\]/);
  const build = src('scripts/build-client.mjs');
  assert.match(build, /writeFileSync\(r\('dist\/public\/style\.css'\), \(await transform\(/);
  assert.match(build, /writeFileSync\(r\('dist\/public\/index\.html'\), readFileSync\(r\('public\/index\.html'\), 'utf8'\)\.replace\(/);
  assert.match(src('src/server/index.ts'), /const data = \(await sentCopy\(url, file\)\) \?\? await readFile\(file\);/);
});
