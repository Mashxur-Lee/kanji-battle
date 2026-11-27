// 0.9.9.9.9.6: decks of your own (and Anki / Quizlet imports), the dictionary's synonyms / antonyms / drawing / decks,
// where a written kanji went wrong, GIFs, AI memory pictures, the HP drain, one-step Back, two daily tasks, ranked
// Rapid and Deck Duel only, and the round of fixes.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { deflateRawSync } from 'node:zlib';
import { MemoryStore } from '../src/server/db/Store';
import { StudyService } from '../src/server/study/StudyService';
import { parseList, rowOf, USER_DECKS_MAX } from '../src/server/study/UserDecks';
import { readApkg, unzip } from '../src/server/study/apkg';
import { compareStrokes } from '../src/client/strokes';
import { antonymsOf, Dictionary } from '../src/shared/dict';
import { DAILY_TASKS } from '../src/shared/progress';
import { Gifs, GIF_URL } from '../src/server/gifs';
import { MnemonicPictures, mnemonicPrompt, PER_PLAYER_DAY } from '../src/server/mnemonics';
import { VERSION } from '../src/shared/version';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.6 version and patch notes', () => {
  assert.equal(VERSION, '0.9.9.9.9.6');
  const wn = src('src/client/whatsnew.ts');
  assert.ok(wn.indexOf("v: '0.9.9.9.9.6'") < wn.indexOf("v: '0.9.9.9.9.5'"), 'the newest first');
});

// ── decks of your own ──
test('0.9.9.9.9.6 reading an import: a pasted list, Quizlet / Anki text, Anki furigana', () => {
  assert.deepEqual(rowOf(['先生', 'せんせい', 'teacher']), { kanji: '先生', reading: 'せんせい', meaning: 'teacher' });
  assert.deepEqual(rowOf(['teacher', '先生[せんせい]']), { kanji: '先生', reading: 'せんせい', meaning: 'teacher' }, 'Anki furigana, the meaning first');
  assert.deepEqual(rowOf(['<b>猫</b>', 'ねこ', 'cat<br>a pet']), { kanji: '猫', reading: 'ねこ', meaning: 'cat a pet' }, 'HTML taken out');
  assert.equal(rowOf(['hello', 'world']), null, 'no Japanese: nothing');
  const rows = parseList('#separator:tab\n先生\tせんせい\tteacher\n勉強; べんきょう; study\n猫, ねこ, cat\n水 みず water\n\nnot japanese');
  assert.deepEqual(rows.map((r) => [r.kanji, r.reading, r.meaning]), [['先生', 'せんせい', 'teacher'], ['勉強', 'べんきょう', 'study'], ['猫', 'ねこ', 'cat'], ['水', 'みず', 'water']]);
});

test('0.9.9.9.9.6 your own decks: make, fill, study only its cards, rename, remove; a word the dictionary knows needs no reading', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'decky', passwordHash: 'x', role: 'user' });
  const d = await study.decks.create(u.id, '  Genki   3 ');
  assert.equal(d.name, 'Genki 3');
  await assert.rejects(study.decks.create(u.id, '   '), /name/);
  const r = await study.decks.addWords(u, d.id, [{ kanji: '先生', reading: '', meaning: '' }, { kanji: '魔法陣', reading: 'まほうじん', meaning: 'magic circle' }, { kanji: '謎語', reading: '', meaning: 'x' }]);
  assert.equal(r.added, 2);
  assert.equal(r.skipped.length, 1, 'a word not in the dictionary and without a reading is skipped, and said why');
  const again = await study.decks.addWords(u, d.id, [{ kanji: '先生', reading: '', meaning: '' }]);
  assert.equal(again.added, 0, 'no doubles');
  // studying it: only its cards (they are in My words)
  const other = await study.addCustom(u, { kanji: '本', reading: 'ほん', meaning: 'book' });
  const all = await study.queue(u, 'custom');
  const mine = await study.queue(u, 'custom', undefined, undefined, undefined, d.id);
  assert.ok(all.some((c) => c.vocabId === other.word.id));
  assert.equal(mine.length, 2);
  assert.ok(!mine.some((c) => c.vocabId === other.word.id));
  assert.equal((await study.decks.rename(u.id, d.id, 'Genki ch. 3')).name, 'Genki ch. 3');
  const w0 = (await study.decks.get(u.id, d.id))!.words[0];
  assert.equal((await study.decks.removeWords(u, d.id, [w0])).words.length, 1);
  assert.equal(await study.decks.remove(u, d.id), true);
  assert.equal((await study.decks.list(u.id)).length, 0);
  assert.equal(USER_DECKS_MAX, 3, 'three decks of your own (round 7)');
  // the account goes: its decks go too
  await study.decks.create(u.id, 'x');
  await store.deleteUser(u.id);
  assert.equal(await store.getValue(`udecks:${u.id}`), null);
});

/** a minimal zip (stored entries) of the given files */
function zip(files: Record<string, Buffer>, deflate = false): Buffer {
  const parts: Buffer[] = [], central: Buffer[] = [];
  let off = 0;
  for (const [name, raw] of Object.entries(files)) {
    const data = deflate ? deflateRawSync(raw) : raw;
    const n = Buffer.from(name);
    const local = Buffer.alloc(30); local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(deflate ? 8 : 0, 8); local.writeUInt32LE(data.length, 18); local.writeUInt32LE(raw.length, 22); local.writeUInt16LE(n.length, 26);
    const c = Buffer.alloc(46); c.writeUInt32LE(0x02014b50, 0); c.writeUInt16LE(deflate ? 8 : 0, 10); c.writeUInt32LE(data.length, 20); c.writeUInt32LE(raw.length, 24); c.writeUInt16LE(n.length, 28); c.writeUInt32LE(off, 42);
    parts.push(local, n, data); central.push(c, n);
    off += 30 + n.length + data.length;
  }
  const cd = Buffer.concat(central);
  const end = Buffer.alloc(22); end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(Object.keys(files).length, 8); end.writeUInt16LE(Object.keys(files).length, 10); end.writeUInt32LE(cd.length, 12); end.writeUInt32LE(off, 16);
  return Buffer.concat([...parts, cd, end]);
}

test('0.9.9.9.9.6 an Anki deck file (.apkg): its notes read as words', async () => {
  const { DatabaseSync } = await import('node:sqlite');
  const dir = mkdtempSync(join(tmpdir(), 'kw-apkg-test-'));
  try {
    const file = join(dir, 'c.db');
    const db = new DatabaseSync(file);
    db.exec('create table notes (id integer primary key, flds text)');
    const ins = db.prepare('insert into notes (id, flds) values (?, ?)');
    ins.run(1, ['先生[せんせい]', 'teacher'].join('\u001f'));
    ins.run(2, ['<div>水</div>', 'みず', 'water'].join('\u001f'));
    ins.run(3, ['no japanese here', 'x'].join('\u001f'));
    db.close();
    const bytes = readFileSync(file);
    for (const deflate of [false, true]) {
      const rows = await readApkg(zip({ 'collection.anki2': bytes, media: Buffer.from('{}') }, deflate));
      assert.deepEqual(rows.map((r) => [r.kanji, r.reading, r.meaning]), [['先生', 'せんせい', 'teacher'], ['水', 'みず', 'water']]);
    }
    assert.equal(unzip(zip({ a: Buffer.from('x') }), () => true).get('a')?.toString(), 'x');
    await assert.rejects(readApkg(Buffer.from('not a zip at all, just some text that is long enough')), /zip/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('0.9.9.9.9.6 deck routes and the Study page: Dictionary, New deck, Import; the .apkg reader kept out of the offline app', () => {
  const r = src('src/server/router.ts');
  for (const x of ["url === '/api/decks'", '\\/(words|import|remove)$/', "query.get('set')"]) assert.ok(r.includes(x), x);
  assert.ok(!r.includes("from './study/apkg'"), 'router.ts is in the offline bundle: node:sqlite comes in from index.ts');
  assert.ok(src('src/server/index.ts').includes("readApkg: (b64) => readApkg(Buffer.from(b64, 'base64'))"));
  const html = src('public/index.html');
  for (const id of ['studyDict', 'studyNewDeck', 'userDecks']) assert.ok(html.includes(`id="${id}"`), id);
  assert.ok(!html.includes('id="studyImport"'), 'round 2: one + New deck; each deck imports for itself');
});

// ── the dictionary ──
test('0.9.9.9.9.6 the dictionary: synonyms, antonyms (JMdict and the common ones), related words, by spelling', () => {
  const d = new Dictionary(JSON.parse(readFileSync('public/dict.json', 'utf8')), JSON.parse(readFileSync('data/vocab.json', 'utf8')));
  const atsui = d.byText('暑い')!;
  assert.ok(atsui);
  assert.ok(antonymsOf(atsui).includes('寒い'));
  const ookii = d.byText('大きい')!;
  assert.ok(antonymsOf(ookii).includes('小さい'), 'a common opposite JMdict has no link for');
  assert.ok(antonymsOf(d.byText('小さい')!).includes('大きい'), 'both ways');
  const syn = d.synonymsOf(d.byText('始める')!, 8).map((e) => e.kanji[0] ?? e.kana[0]);
  assert.ok(syn.length >= 3 && !syn.includes('始める'));
  const data = JSON.parse(readFileSync('public/dict.json', 'utf8')) as { words: Array<{ a?: string[]; y?: string[] }> };
  assert.ok(data.words.filter((w) => w.a).length > 300 && data.words.filter((w) => w.y).length > 3000, 'the build keeps JMdict\'s links');
  assert.ok(src('scripts/build-dict.mjs').includes('for (const x of s.antonym ?? [])'));
});

test('0.9.9.9.9.6 the dictionary: in your deck (green), full screen with Exit back, drawing a kanji to look it up', () => {
  const ui = src('src/client/dictui.ts');
  assert.ok(ui.includes("row.append(h('span', 'dw-tag in-deck', d, { title: tr('In your deck') }))"));
  assert.ok(ui.includes("if (syn.length) sec('Synonyms')") && ui.includes("if (ant.length) sec('Antonyms')"));
  assert.ok(ui.includes('export function openDictionary(q = \'\')') && ui.includes("$('dictBack').onclick = () => { const to = returnTo;"));
  assert.ok(ui.includes('const r = await api.recognize(strokes);'));
  const rail = src('src/client/dictrail.ts');
  assert.ok(rail.includes("$('dictRailFull').onclick") && rail.includes("$('dictRailDraw').onclick"));
  const r = src('src/server/router.ts');
  assert.ok(r.includes("recognize && r.method === 'POST' && url === '/api/recognize'"));
  assert.ok(r.includes('raw.strokes.length <= 40'), 'a drawing is checked before it is read');
  assert.ok(src('public/style.css').includes('.dw-tag.in-deck { background: rgba(53, 214, 138, .16); color: #4ee6a6;'));
});

// ── where a written kanji went wrong ──
test('0.9.9.9.9.6 a written kanji: each stroke compared with the right one, by order', () => {
  // 十: a horizontal stroke, then a vertical one
  const ref = [[[10, 50], [90, 50]], [[50, 10], [50, 90]]];
  assert.deepEqual(compareStrokes(ref, ref), ['ok', 'ok']);
  assert.deepEqual(compareStrokes(ref, [[[12, 52], [88, 49]], [[51, 12], [49, 88]]]), ['ok', 'ok'], 'a shaky copy is fine');
  assert.deepEqual(compareStrokes(ref, [[[90, 50], [10, 50]], [[50, 10], [50, 90]]]), ['backwards', 'ok'], 'drawn the wrong way');
  assert.deepEqual(compareStrokes(ref, [[[50, 10], [50, 90]], [[10, 50], [90, 50]]]), ['off', 'off'], 'the wrong order');
  assert.deepEqual(compareStrokes(ref, [[[10, 50], [90, 50]]]), ['ok', 'missing']);
  assert.deepEqual(compareStrokes(ref, [...ref, [[10, 10], [20, 20]]]), ['ok', 'ok', 'extra']);
  const ui = src('src/client/ui.ts');
  assert.ok(ui.includes('void showStrokeCompare(cmp, word, ink)'));
  assert.ok(src('src/client/main.ts').includes('ui.noteInk(written[0]);'), 'the strokes sent (Kanji Writing and Deck Duel use the same pad)');
});

// ── GIFs ──
test('0.9.9.9.9.6 GIFs: searched through the server (GIPHY), only GIPHY pictures sent, the CSP lets them show', async () => {
  assert.ok(GIF_URL.test('https://media2.giphy.com/media/abc123/200.webp'));
  assert.ok(!GIF_URL.test('https://evil.example/media/abc.gif'));
  assert.ok(!GIF_URL.test('https://media.giphy.com/media/abc/200.gif?x=1'), 'no query');
  let asked = '';
  const fake = (async (u: URL) => { asked = String(u); return new Response(JSON.stringify({ data: [{ id: 'g1', images: { fixed_height: { webp: 'https://media1.giphy.com/media/g1/200.webp?cid=1', width: '300', height: '200' }, fixed_height_small: { webp: 'https://media1.giphy.com/media/g1/100.webp' } } }, { id: 'bad', images: { fixed_height: { url: 'https://evil.example/x.gif' } } }] }), { status: 200 }); }) as unknown as typeof fetch;
  const g = new Gifs('KEY', fake);
  const items = await g.search('cat', 0, 'en');
  assert.deepEqual(items.map((x) => [x.id, x.url, x.w]), [['g1', 'https://media1.giphy.com/media/g1/200.webp', 300]]);
  assert.ok(asked.includes('api_key=KEY') && asked.includes('q=cat') && asked.includes('rating=pg-13'));
  asked = '';
  await g.search('cat', 0, 'en');
  assert.equal(asked, '', 'cached');
  const ms = src('src/server/study/MessageService.ts');
  assert.ok(ms.includes("const gif = typeof extra.gif === 'string' && GIF_URL.test(extra.gif) ? extra.gif : null;"));
  assert.ok(src('src/server/security.ts').includes('https://media.giphy.com'));
  assert.ok(src('src/server/index.ts').includes('process.env.GIPHY_API_KEY ? { gifs: new Gifs('), 'off without a key');
  assert.ok(src('public/privacy.html').includes('<b>GIPHY</b>'));
});

// ── AI memory pictures ──
test('0.9.9.9.9.6 AI memory pictures: painted once per kanji, kept, a daily cap; the prompt has no kanji in it', async () => {
  const p = mnemonicPrompt('Country', 'A jewel 玉 kept safe inside a border 囗 — a country guards its treasure.');
  assert.ok(!/[\p{Script=Han}]/u.test(p) && /no text/i.test(p));
  const store = new MemoryStore();
  let calls = 0;
  const fake = (async () => { calls++; return new Response(JSON.stringify({ data: [{ b64_json: Buffer.alloc(5000, 7).toString('base64') }] }), { status: 200 }); }) as unknown as typeof fetch;
  const pics = new MnemonicPictures(store, { key: 'k', story: (ch) => (ch === '国' || ch === '日' ? { en: 'a story', meaning: 'x' } : null), fetcher: fake, dailyCap: 100, today: () => '2026-11-26' });
  const [a, b] = await Promise.all([pics.paint('国', 'u1'), pics.paint('国', 'u2')]);
  assert.ok(a.ok && b.ok);
  assert.equal(calls, 1, 'two asking at once: painted once');
  assert.equal((await pics.picture('国'))?.mime, 'image/webp');
  await pics.paint('国', 'u1');
  assert.equal(calls, 1, 'kept: never painted again');
  assert.deepEqual(await pics.paint('木', 'u1'), { ok: false, why: 'none' }, 'no story: no picture');
  // a player's day
  const many = new MnemonicPictures(new MemoryStore(), { key: 'k', story: () => ({ en: 's', meaning: 'm' }), fetcher: fake, today: () => '2026-11-26' });
  const kanji = '一二三四五六七八九十百千'.slice(0, PER_PLAYER_DAY + 1);
  const res = [];
  for (const ch of kanji) res.push(await many.paint(ch, 'same'));
  assert.deepEqual(res.at(-1), { ok: false, why: 'limit' });
  assert.ok(src('src/server/index.ts').includes('process.env.MNEMONIC_IMAGE_KEY ? { mnemonics: new MnemonicPictures('), 'off without its own key');
  assert.ok(src('src/client/kanjihelp.ts').includes('void aiPicture(ch, pic);'));
  assert.ok(src('docs/SETUP.md').includes('`MNEMONIC_IMAGE_KEY`'));
});

// ── the rest ──
test('0.9.9.9.9.6 the daily streak: two tasks (a quiz, the daily challenge) — no study count, no battle step; kept: a moment with the flame', () => {
  assert.deepEqual(DAILY_TASKS.map((t) => t.id), ['practice', 'daily']);
  const dt = src('src/client/dailytasks.ts');
  assert.ok(dt.includes("const TODAY_ORDER = ['practice', 'daily'] as const;"));
  assert.ok(dt.includes('celebrateMoment((box) => {') && dt.includes("fl.classList.add('burst', 'sk-flame');"));
});

test('0.9.9.9.9.6 ranked: Rapid and Deck Duel only; the queue\'s mode rules open from the (!) only', () => {
  assert.ok(src('src/server/Matchmaker.ts').includes('room.ranked = ranked;'), 'round 6: the Ranked side decides');
  const q = src('src/client/queue.ts');
  assert.ok(q.includes("info.addEventListener('click', toggle);"));
  assert.ok(!q.includes("el.addEventListener('focusin', open);"), 'picking a mode no longer opens it');
});

test('0.9.9.9.9.6 HP drain, one-step Back, the profile\'s friend buttons, the sword\'s left hand, no mouse look in replays', () => {
  const ui = src('src/client/ui.ts');
  assert.ok(ui.includes('export function drainGhost(bar: HTMLElement, pct: number, key: string) {'));
  assert.ok(ui.includes("thickBar(boss.hp, boss.maxHp, 'enemy', `${boss.hp} / ${boss.maxHp}`, 'boss')"));
  assert.ok(src('src/client/deckui.ts').includes('ui.drainGhost(b, pct, key);'));
  const nav = src('src/client/nav.ts');
  assert.ok(nav.includes("else if ((on || s === 'menu' || s === 'results') && trail[trail.length - 1] !== s)"));
  assert.ok(src('src/client/appshell.ts').includes("const navBack = document.querySelector<HTMLElement>('body.has-nav .app-nav:not([hidden]) .an-back');"));
  assert.ok(src('src/client/main.ts').includes('await api.addFriend(p.login ?? p.name)'), 'by login, not the nickname');
  assert.ok(ui.includes("if (!(await confirmBox('Remove friend?',"));
  const pv = src('src/client/playerview.ts');
  assert.ok(pv.includes("await ui.confirmBox('Block this player?'") && !pv.includes('!confirm('));
  const a3 = src('src/client/arena3d.ts');
  assert.ok(a3.includes('fpLeft.position.y = swordMe ? -0.115 : 0.26;') && a3.includes('if (swordMe && now - thrustAt < SWING_MS) fpLeft.visible = false;'));
  assert.ok(a3.includes('if (document.body.dataset.watch) { mouse.set(0, 0); return; }'));
});

test('0.9.9.9.9.6 the round of fixes: light theme text, Progress filter, the menu\'s own scroll on phones, arena picture, replay bar, invite rows, the dictionary on study cards', () => {
  const css = src('public/style.css');
  assert.ok(css.includes(':root[data-theme="light"] body.has-nav .screen, :root[data-theme="light"] .mc-nav-btn {'));
  assert.ok(css.includes('#progress .mg-filters .mg-f.on, .mg-filters .mg-f.on { background: var(--accent) !important;'));
  assert.ok(css.includes('body[data-screen="menu"] #menu { height: calc(100 * var(--dvh)); min-height: 0; overflow-y: auto;'));
  assert.ok(css.includes(':is(.lk-slot, .look-slot) .lk-pic > .bg-thumb { position: absolute !important; inset: 0;'));
  assert.ok(css.includes('.wb-time .wb-track { order: 9; flex: 1 1 100%;'));
  assert.ok(css.includes('.li-row { display: grid; grid-template-columns: 10px minmax(0, 1fr) auto;'));
  assert.ok(css.includes('body[data-screen="review"] #dictFab:not([hidden]) { display: grid !important;'));
  assert.ok(src('src/client/friendsui.ts').includes("const who = el('div', 'li-who');"));
});

test('0.9.9.9.9.6 GIF pictures come through our server (GIPHY is blocked in some countries) — only GIPHY media', async () => {
  const asked: string[] = [];
  const fake = (async (u: string) => { asked.push(String(u)); return new Response(new Uint8Array(2000), { status: 200, headers: { 'content-type': 'image/webp' } }); }) as unknown as typeof fetch;
  const g = new Gifs('KEY', fake);
  assert.equal((await g.media('media2', 'media/abc123/200.webp'))?.mime, 'image/webp');
  assert.deepEqual(asked, ['https://media2.giphy.com/media/abc123/200.webp']);
  assert.equal(await g.media('evil', 'media/abc123/200.webp'), null, 'only GIPHY hosts');
  assert.equal(await g.media('media', '../../etc/passwd'), null);
  assert.equal(asked.length, 1);
  assert.ok(src('src/client/inbox.ts').includes('img.src = gifSrc(m.text);') && src('src/client/gifpicker.ts').includes('img.src = gifSrc(g.preview || g.url);'));
  assert.ok(src('src/server/router.ts').includes("url.startsWith('/api/gif-media/')"));
});

// ── round 2 ──
test('0.9.9.9.9.6 round 2 decks: four at most, Custom spells becomes "My words" once, a kana is a card of its own, words no deck holds lose their card', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'deck2', passwordHash: 'x', role: 'user' });
  const old = await study.addCustom(u, { kanji: '本', reading: 'ほん', meaning: 'book' });
  await study.decks.migrate(u.id, [old.word.id]);
  const first = await study.decks.list(u.id);
  assert.deepEqual(first.map((d) => [d.name, d.words]), [['My words', [old.word.id]]]);
  await study.decks.remove(u, first[0].id);
  await study.decks.migrate(u.id, [old.word.id]);
  assert.equal((await study.decks.list(u.id)).length, 0, 'once: a deck you deleted doesn\'t come back');
  assert.ok(!(await study.queue(u, 'custom')).some((c) => c.vocabId === old.word.id), 'its card went with it');
  const d = await study.decks.create(u.id, 'Kana');
  const r = await study.decks.addWords(u, d.id, parseList('あ\tA'));
  assert.equal(r.added, 1);
  assert.equal((await study.queue(u, 'custom', undefined, undefined, undefined, d.id)).length, 1, 'あ can be studied (it said 1 word with nothing to study)');
  for (let i = 0; i < 2; i++) await study.decks.create(u.id, `d${i}`); // (round 7: three at most)
  await assert.rejects(study.decks.create(u.id, 'fourth'), /3 decks/);
});

test('0.9.9.9.9.6 round 2: the Games page, CAST! no longer swings a sword, the phone\'s back in a chat, GIF replies, the dark drawing pad', () => {
  const html = src('public/index.html');
  assert.ok(html.includes('id="gamesBtn"') && html.includes('<section id="games" class="screen" hidden>'));
  assert.ok(src('src/client/nav.ts').includes("btn: 'gamesBtn', screens: ['games', 'queue', 'private', 'modes']"));
  assert.ok(src('src/client/main.ts').includes('if (!isSwordId(myStaff())) arena()?.thrust();'));
  assert.ok(src('src/client/appshell.ts').includes("const chatBack = document.querySelector<HTMLElement>('#inbox.thread-open .msg-back');"));
  const inbox = src('src/client/inbox.ts');
  assert.ok(inbox.includes("(m.kind === 'gif' ? 'GIF' : m.media ? tr('Photo') : '')"));
  assert.ok(inbox.includes("const what = m.kind === 'gif' ? 'GIF' :"), 'the notification says GIF, not its address');
  assert.ok(src('src/server/study/MessageService.ts').includes("...(m.kind === 'gif' ? { gif: m.text } : {})"), 'forwarded as a GIF');
  assert.ok(src('src/client/dictui.ts').includes("drawPad.inkColour = '#f1effb';"));
  assert.ok(src('public/style.css').includes('.dd-cands { height: 102px; min-height: 102px;'), 'the pad keeps still when the matches come');
  assert.ok(src('src/client/dictui.ts').includes("tr(prevWord !== undefined ? 'Back' : 'Results')"), 'back to the word you came from');
});

test('0.9.9.9.9.6 round 2: offline start keeps a copy of the game; slow internet isn\'t called a sleeping server', () => {
  const sw = src('src/client/sw.js');
  assert.ok(sw.includes("const p = await (await caches.open(k)).match('/index.html'); if (p) return p;"));
  assert.ok(!src('src/client/appshell.ts').includes("if (k.startsWith('kw-shell-')) await caches.delete(k);"), 'an update no longer drops the copy first');
  assert.ok(src('src/client/main.ts').includes("tr(slow ? 'Slow internet - connecting…' : 'Connecting to the server…')"));
});

// ── round 3: Kanji chess ──
import { botMove, findMove, judgeMove, legalMoves, makeMove, outcome, parseFen, START_FEN, BOTS, PIECE_KANJI, type Position } from '../src/shared/chess';
import { LINES, parseLine } from '../src/shared/chesslines';
import { ChessHub, cleanTime } from '../src/server/ChessHub';

test('0.9.9.9.9.6 chess rules: the standard move counts (castling, en passant, promotion), mate, stalemate, too little to mate', () => {
  const perft = (p: Position, d: number): number => (d === 0 ? 1 : legalMoves(p).reduce((n, m) => n + perft(makeMove(p, m), d - 1), 0));
  assert.equal(perft(parseFen(START_FEN), 3), 8902);
  assert.equal(perft(parseFen('r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 0 1'), 2), 2039, 'Kiwipete');
  assert.equal(perft(parseFen('8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1'), 3), 2812);
  let p = parseFen(START_FEN);
  for (const u of ['f2f3', 'e7e5', 'g2g4', 'd8h4']) p = makeMove(p, findMove(p, u)!);
  assert.deepEqual(outcome(p), { over: true, winner: 'b', reason: 'checkmate' });
  assert.deepEqual(outcome(parseFen('7k/5Q2/6K1/8/8/8/8/8 b - - 0 1')), { over: true, winner: null, reason: 'stalemate' });
  assert.deepEqual(outcome(parseFen('8/8/4k3/8/8/3NK3/8/8 w - - 0 1')), { over: true, winner: null, reason: 'material' });
  assert.equal(findMove(parseFen(START_FEN), 'e2e5'), null, 'not a legal move');
  assert.deepEqual(Object.values(PIECE_KANJI), ['王', '后', '城', '僧', '馬', '兵']);
});

test('0.9.9.9.9.6 chess bots: four of them (200 to 1600), always a legal move; a blunder is called one', () => {
  assert.deepEqual(BOTS.map((b) => [b.id, b.elo]), [['goblin', 200], ['knight', 400], ['witch', 800], ['wizard', 1600], ['dragon', 2400]]);
  const p = parseFen(START_FEN);
  for (const b of BOTS) { const m = botMove(p, b.id)!; assert.ok(legalMoves(p).some((x) => x.from === m.from && x.to === m.to), b.id); }
  // a mate in one: the Wizard takes it
  const mateIn1 = parseFen('6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1');
  const wm = botMove(mateIn1, 'wizard', () => 0.5)!;
  assert.deepEqual(outcome(makeMove(mateIn1, wm)), { over: true, winner: 'w', reason: 'checkmate' });
  // the queen given away for a pawn is a blunder; a sound developing move is not
  const q = parseFen('rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2');
  assert.notEqual(judgeMove(q, findMove(q, 'g1f3')!).quality, 'blunder');
  const hang = parseFen('rnbqkbnr/ppp2ppp/8/3pp3/4P3/5Q2/PPPP1PPP/RNB1KBNR w KQkq - 0 3');
  assert.equal(judgeMove(hang, findMove(hang, 'f3f7')!).quality, 'blunder', 'Qxf7+ loses the queen');
});

test('0.9.9.9.9.6 chess lines: every bot has its say, each line in Japanese with readings, English and Russian', () => {
  for (const [bot, moments] of Object.entries(LINES)) {
    for (const m of ['hello', 'best', 'blunder', 'botWins', 'botLoses', 'draw', 'check']) assert.ok(moments[m as keyof typeof moments]?.length, `${bot} ${m}`);
    for (const list of Object.values(moments)) for (const l of list ?? []) {
      assert.ok(l.en && l.ru, l.jp);
      assert.ok(!/[{}|]/.test(parseLine(l.jp).map((x) => x.text + (x.reading ?? '')).join('')), `markup closed: ${l.jp}`);
      assert.ok(parseLine(l.jp).every((x) => !x.reading || /^[\p{Script=Hiragana}ー]+$/u.test(x.reading)), `readings in hiragana: ${l.jp}`);
    }
  }
  assert.deepEqual(parseLine('{王手|おうて}だ'), [{ text: '王手', reading: 'おうて' }, { text: 'だ' }]);
});

test('0.9.9.9.9.6 chess with a friend: a room by code, moves checked, the clock kept by the server, resign / draw / time', () => {
  let t = 1_000_000;
  type Sent = { type: string; room?: { status: string; you: string | null; moves: string[]; result?: { winner: string | null; reason: string }; code: string; id: string; drawOffer: string | null }; error?: string };
  const sent: Array<[string, Sent]> = [];
  const hub = new ChessHub((id, m) => sent.push([id, m as unknown as Sent]), () => t, () => 0.1);
  const last = (id: string) => [...sent].reverse().find(([to, m]) => to === id && m.type === 'chess')![1].room!;
  const readyBoth = (x: string, y: string) => { for (const who of [x, y]) hub.handle({ id: who, name: who }, { type: 'chess_ready', id: last(x).id, on: true }); };
  hub.handle({ id: 'a', name: 'Ann' }, { type: 'chess_new', base: 60_000, inc: 0 });
  const code = last('a').code;
  assert.equal(last('a').status, 'waiting');
  hub.handle({ id: 'b', name: 'Bob' }, { type: 'chess_join', code: code.toLowerCase() });
  assert.equal(last('b').status, 'lobby', 'round 4: a lobby first');
  readyBoth('a', 'b');
  const room = last('b');
  assert.equal(room.status, 'playing');
  const white = last('a').you === 'w' ? 'a' : 'b', black = white === 'a' ? 'b' : 'a';
  const mv = (who: string, uci: string) => hub.handle({ id: who, name: who }, { type: 'chess_move', id: room.id, uci });
  mv(black, 'e7e5');
  assert.equal(sent.at(-1)![1].error, 'Not your turn');
  mv(white, 'e2e5');
  assert.equal(sent.at(-1)![1].error, 'That move isn’t allowed'.replace('’', "'"));
  for (const [who, u] of [[white, 'f2f3'], [black, 'e7e5'], [white, 'g2g4'], [black, 'd8h4']] as const) { t += 1000; mv(who, u); }
  assert.deepEqual(last(white).result, { winner: 'b', reason: 'checkmate' });
  // a clock running out
  hub.handle({ id: 'c', name: 'C' }, { type: 'chess_new', base: 60_000, inc: 0 });
  hub.handle({ id: 'd', name: 'D' }, { type: 'chess_join', code: last('c').code });
  readyBoth('c', 'd');
  const r2 = last('c');
  const w2 = r2.you === 'w' ? 'c' : 'd';
  t += 61_000;
  hub.handle({ id: w2, name: '' }, { type: 'chess_move', id: r2.id, uci: 'e2e4' });
  assert.deepEqual(last('c').result, { winner: 'b', reason: 'time' });
  // a draw agreed
  hub.handle({ id: 'e', name: 'E' }, { type: 'chess_new', base: 0, inc: 0 });
  hub.handle({ id: 'f', name: 'F' }, { type: 'chess_join', code: last('e').code });
  readyBoth('e', 'f');
  const r3 = last('e');
  hub.handle({ id: 'e', name: 'E' }, { type: 'chess_draw', id: r3.id, offer: true });
  assert.equal(last('f').drawOffer, last('e').you);
  hub.handle({ id: 'f', name: 'F' }, { type: 'chess_draw', id: r3.id, offer: true });
  assert.deepEqual(last('e').result, { winner: null, reason: 'agreed' });
  assert.deepEqual(cleanTime(10, 99_999), { base: 0, inc: 0 }, 'too short: no clock');
  assert.deepEqual(cleanTime(300_000, 2000), { base: 300_000, inc: 2000 });
  assert.ok(src('src/server/Session.ts').includes("if (msg.type.startsWith('chess_')) { void this.hub.chess?.handle("));
});

test('0.9.9.9.9.6 round 3: Kanji chess on the Games page, one logo per page, richer buttons', () => {
  const html = src('public/index.html');
  assert.ok(html.includes('data-go="chessOpen"') && html.includes('<section id="chess" class="screen chess-screen" hidden>'));
  const css = src('public/style.css');
  assert.ok(css.includes('#quizzes .qz-emblem, #private .pv-head > .pv-emblem'));
  assert.ok(css.includes('box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 2px 0 rgba(0, 0, 0, .35), 0 6px 14px rgba(0, 0, 0, .16);'), 'the buttons have depth');
  assert.ok(css.includes('.chess-board { grid-template-rows: repeat(8, 1fr); }'), 'every square square');
});

// ── round 4: Kanji chess — the lobby, chat, challenges, history, the pieces' shapes, sounds and voices ──
test('0.9.9.9.9.6 round 4 chess lobby: Ready on both sides starts it, the host sets the clock, a chat, again → the lobby, games kept for both', async () => {
  let t = 5_000_000;
  type Room = { id: string; code: string; status: string; you: string | null; ready: string[]; base: number; inc: number; chat: Array<{ from: string; name: string; text: string }>; times: number[]; result?: { winner: string | null; reason: string } };
  const sent: Array<[string, { type: string; room?: Room; error?: string; code?: string; from?: { id: string } }]> = [];
  const kept: Array<[string, { result: string; vs: string; moves: string[]; times: number[] }]> = [];
  const invites: string[] = [];
  const hub = new ChessHub((id, m) => sent.push([id, m as never]), () => t, () => 0.3, {
    invite: (to, _from, code) => { invites.push(`${to}:${code}`); return true; },
    mayInvite: async (a, b) => a === 'h' && b === 'g',
    record: (id, g) => kept.push([id, g as never]),
  });
  const last = (id: string) => [...sent].reverse().find(([to, m]) => to === id && m.type === 'chess')![1].room!;
  const err = () => sent.at(-1)![1].error;
  await hub.handle({ id: 'h', name: 'Hana' }, { type: 'chess_new', base: 0, inc: 0, invite: 'g' });
  const code = last('h').code;
  assert.deepEqual(invites, [`g:${code}`], 'the friend is asked');
  await hub.handle({ id: 'x', name: 'X' }, { type: 'chess_new', base: 0, inc: 0, invite: 'g' });
  assert.equal(err(), 'You can challenge your friends');
  await hub.handle({ id: 'g', name: 'Goro' }, { type: 'chess_join', code });
  const id = last('g').id;
  assert.equal(last('h').status, 'lobby');
  assert.deepEqual(last('h').chat.at(-1), { from: '', name: 'Goro', text: 'joined', at: t }, 'a line from the room, its words translatable');
  await hub.handle({ id: 'g', name: 'Goro' }, { type: 'chess_time', id, base: 300_000, inc: 0 });
  assert.equal(last('g').base, 0, 'only the host sets the clock');
  await hub.handle({ id: 'h', name: 'Hana' }, { type: 'chess_time', id, base: 300_000, inc: 0 });
  assert.equal(last('g').base, 300_000);
  await hub.handle({ id: 'g', name: 'Goro' }, { type: 'chess_chat', id, text: '  よろしく  ' });
  assert.equal(last('h').chat.at(-1)!.text, 'よろしく');
  await hub.handle({ id: 'g', name: 'Goro' }, { type: 'chess_chat', id, text: 'spam' });
  assert.notEqual(last('h').chat.at(-1)!.text, 'spam', 'not too fast');
  await hub.handle({ id: 'h', name: 'Hana' }, { type: 'chess_ready', id, on: true });
  assert.equal(last('h').status, 'lobby', 'one ready is not enough');
  await hub.handle({ id: 'g', name: 'Goro' }, { type: 'chess_ready', id, on: true });
  assert.equal(last('h').status, 'playing');
  const white = last('h').you === 'w' ? 'h' : 'g', black = white === 'h' ? 'g' : 'h';
  for (const [who, u] of [[white, 'f2f3'], [black, 'e7e5'], [white, 'g2g4'], [black, 'd8h4']] as const) { t += 1500; await hub.handle({ id: who, name: who }, { type: 'chess_move', id, uci: u }); }
  assert.deepEqual(last('h').result, { winner: 'b', reason: 'checkmate' });
  assert.deepEqual(last('h').times, [1500, 1500, 1500, 1500], 'how long each move took');
  assert.deepEqual(kept.map(([who, g]) => [who, g.result]).sort(), [[black, 'win'], [white, 'loss']].sort(), 'kept for both players');
  await hub.handle({ id: 'h', name: 'Hana' }, { type: 'chess_again', id });
  assert.equal(last('g').status, 'lobby', 'again: back to the lobby');
  assert.deepEqual(last('g').ready, []);
  // the host leaving closes it: the guest is told, the host isn't
  const before = sent.length;
  await hub.handle({ id: 'h', name: 'Hana' }, { type: 'chess_leave', id });
  assert.deepEqual(sent.slice(before).map(([to, m]) => [to, m.error]), [['g', 'The host left the room']]);
});

test('0.9.9.9.9.6 round 4 chess: games kept (the last 40), a bot game checked from its moves; the client parts are there', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  for (let i = 0; i < 45; i++) await study.addChessGame('u1', { at: i, vs: 'goblin', vsBot: 'goblin', color: 'w', result: 'win', reason: 'checkmate', moves: ['e2e4'], times: [1], base: 0, inc: 0 });
  const g = await study.chessGames('u1');
  assert.equal(g.length, 40);
  assert.equal(g[0].at, 44, 'newest first');
  const router = src('src/server/router.ts');
  assert.ok(router.includes("url === '/api/chess/games'") && router.includes('const g = replay(moves);'), 'a bot game is replayed, its result read from the board');
  const client = src('src/client/chess.ts');
  // (round 5: the lobby is the private game's; a friend is challenged to a room of it)
  for (const s of ["send({ type: 'chess_chat'", "send({ type: 'chess_again'", 'export function openChessReplay', 'export function material', 'speakAs(', 'setMood(']) assert.ok(client.includes(s), s);
  const html = src('public/index.html');
  for (const id of ['chessChat', 'chessReplay', 'chessOppMat', 'chessMood', 'chessHistList', 'pcGold']) assert.ok(html.includes(`id="${id}"`), id);
  assert.ok(src('src/client/audio.ts').includes('chessCapture()') && src('src/client/audio.ts').includes('chessMate()'));
  assert.ok(src('src/client/main.ts').includes("case 'chess_invite':"));
});

test('0.9.9.9.9.6 chess pieces (round 5: the owner\'s design): a picture for each of the twelve, its kanji as text, kept offline', async () => {
  const { pieceSvg } = await import('../src/client/chesspieces');
  const { existsSync } = await import('node:fs');
  for (const c of ['w', 'b'] as const) for (const k of ['k', 'q', 'r', 'b', 'n', 'p'] as const) assert.ok(existsSync(`public/chess/${c}${k}.webp`), `${c}${k}`);
  assert.ok(pieceSvg('b', 'n').includes('src="chess/bn.webp"') && pieceSvg('b', 'n').includes('>馬</span>'));
  assert.ok(src('scripts/build-client.mjs').includes("readdirSync(r('public/chess'))"), 'in the offline cache');
});

// ── round 4: importing words the Quizlet way ──
test('0.9.9.9.9.6 round 4 import: Quizlet-style separators, the reading in the term or the definition, cards turned over', async () => {
  const { parseCards, splitCards, guessTermSep } = await import('../src/shared/importlist');
  assert.deepEqual(parseCards('先生\tせんせい - teacher\n猫[ねこ]\tcat\ncat\t犬\n# a comment\n\n本（ほん）\tbook', 'tab', 'newline'), [
    { kanji: '先生', reading: 'せんせい', meaning: 'teacher' },
    { kanji: '猫', reading: 'ねこ', meaning: 'cat' },
    { kanji: '犬', reading: '', meaning: 'cat' },
    { kanji: '本', reading: 'ほん', meaning: 'book' },
  ]);
  assert.deepEqual(parseCards('水,water;火,fire', 'comma', 'semicolon').map((c) => c.kanji), ['水', '火']);
  assert.deepEqual(splitCards('山 :: mountain\n川 :: river', { custom: ' :: ' }, 'newline'), [['山', 'mountain'], ['川', 'river']]);
  assert.deepEqual(parseCards('学校 - (がっこう) school', 'dash', 'newline'), [{ kanji: '学校', reading: 'がっこう', meaning: 'school' }]);
  assert.equal(guessTermSep('a\tb\nc\td'), 'tab');
  assert.equal(guessTermSep('猫 - cat\n犬 - dog'), 'dash');
});

test('0.9.9.9.9.6 round 4 import preview: the game\'s words, then the dictionary\'s, then a guessed reading — nothing dropped', async () => {
  const { fillCards, guessReading } = await import('../src/server/study/importfill');
  const dict = { lookup: (t: string) => (t === '薔薇' ? { i: 1, kanji: ['薔薇'], kana: ['ばら'], romaji: 'bara', senses: [[['n'], 'rose', [], '']], ru: ['роза'], common: true } : t === '学校' ? { i: 2, kanji: ['学校'], kana: ['がっこう'], romaji: 'gakkou', senses: [], ru: [], common: true } : null) as never, kanjiReading: (c: string) => ({ 魔: 'ま', 法: 'ほう', 電: 'でん', 脳: 'のう' } as Record<string, string>)[c] ?? null };
  const out = fillCards([{ kanji: '先生', reading: '', meaning: '' }, { kanji: '薔薇', reading: '', meaning: '' }, { kanji: '魔法学校', reading: '', meaning: 'magic school' }, { kanji: '謎', reading: '', meaning: 'x' }], dict as never, 'ru');
  assert.equal(out[0].from, 'game'); assert.equal(out[0].reading, 'せんせい');
  assert.deepEqual([out[1].from, out[1].reading, out[1].meaning], ['dict', 'ばら', 'роза']);
  assert.deepEqual([out[2].from, out[2].reading], ['guess', 'まほうがっこう'], 'a reading from its pieces (the longest the dictionary has first, then each kanji), marked to check');
  assert.equal(guessReading('電脳', dict as never), 'でんのう');
  const router = src('src/server/router.ts');
  assert.ok(!src('src/server/study/importfill.ts').includes("from '../vocab'") || !src('src/server/study/importfill.ts').includes('kanjiOn'), 'kept out of the offline app (its vocab has no kanji readings)');
  assert.ok(router.includes("url === '/api/decks/preview'") && router.includes('body.preview === true ? IMPORT_ROWS_MAX : 50'));
  const ui = src('src/client/userdecks.ts');
  for (const s of ["'Between term and definition'", "'Between cards'", 'api.userDeckPreview(', "'Reading guessed - check it'"]) assert.ok(ui.includes(s), s);
});

// ── round 4: the tutorial's guide ──
test('0.9.9.9.9.6 round 4 tutorial: Master Fumi in 2.5D on every card and tip, a card on how a duel is won, the battle can be skipped', () => {
  const t = src('src/client/tutorial.ts');
  assert.ok(t.includes("const guide = guideEl('big');") && t.includes("const peek = guideEl('small');"), 'beside the cards, in the bubbles and the tips');
  assert.ok(t.includes("title: 'How a duel is won'"));
  assert.ok(t.includes("el('button', 'pill', 'Skip the battle')") && t.includes('export function skipTutorialBattle()'));
  assert.ok(src('src/client/main.ts').includes("skipBattle: () => { socket.send({ type: 'leave' }); }"));
  const g = src('src/client/tutorguide.ts');
  assert.ok(g.includes('export function typeText(') && g.includes("addEventListener('pointermove'"), 'types its words, turns to the pointer');
  const css = src('public/style.css');
  assert.ok(css.includes('.tg-stage { position: absolute; inset: 0; transform-style: preserve-3d;'), 'layers at their own depths');
  assert.ok(!/@media[^{]*prefers-reduced-motion\s*:\s*reduce/.test(css), 'animations run even with Windows animation effects off');
});

// ── round 4: Grammar ──
test('0.9.9.9.9.6 round 4 grammar: every lesson complete — meaning, rules and examples in both languages, questions with one gap and four different choices, readings in hiragana', async () => {
  const { GRAMMAR, grammarOf, shuffled, plainJp, passMark } = await import('../src/shared/grammar');
  const { parseLine } = await import('../src/shared/chesslines');
  assert.ok(grammarOf('N5').length >= 30, 'N5 in full');
  assert.ok(grammarOf('N4').length >= 20);
  assert.equal(new Set(GRAMMAR.map((g) => g.id)).size, GRAMMAR.length, 'ids unique');
  for (const g of GRAMMAR) {
    assert.ok(g.pattern && g.meaning.en && g.meaning.ru, g.id);
    assert.ok(g.rules.length && g.rules.every((r) => r.en && r.ru), `${g.id} rules`);
    assert.ok(g.examples.length && g.examples.every((e) => e.jp && e.en && e.ru), `${g.id} examples`);
    assert.ok(g.questions.length >= 3, `${g.id} questions`);
    for (const line of [...g.examples.map((e) => e.jp), ...g.questions.map((q) => q.jp)]) {
      assert.ok(parseLine(line).every((x) => !x.reading || /^[\p{Script=Hiragana}ー]+$/u.test(x.reading)), `readings in hiragana: ${line}`);
      assert.ok(!/[{}|]/.test(plainJp(line)), `markup closed: ${line}`);
    }
    for (const q of g.questions) {
      assert.equal(q.jp.split('＿＿').length, 2, `one gap: ${q.jp}`);
      assert.equal(new Set(q.options).size, 4, `four different choices: ${q.jp}`);
      assert.ok(q.en && q.ru, q.jp);
      const s = shuffled(q, () => 0.3);
      assert.equal(s.options[s.answer], q.options[0], 'the right one is found after the shuffle');
    }
  }
  assert.equal(passMark(GRAMMAR[0]), GRAMMAR[0].questions.length - 1, 'all but one');
});

test('0.9.9.9.9.6 round 4 grammar: a lesson is passed with all but one right, kept on the account; the menu card and the page', async () => {
  const store = new MemoryStore();
  const study = new StudyService(store);
  assert.deepEqual(await study.passGrammar('u1', 'n5-ka', 1), { passed: [], ok: false });
  assert.deepEqual(await study.passGrammar('u1', 'n5-ka', 2), { passed: ['n5-ka'], ok: true });
  assert.deepEqual(await study.grammarPassed('u1'), ['n5-ka']);
  await assert.rejects(study.passGrammar('u1', 'nope', 3), /No such lesson/);
  const html = src('public/index.html');
  assert.ok(html.includes('<button id="grammarBtn" class="mc-card mc-grammar" type="button">') && html.includes('<section id="grammar" class="screen grammar-screen" hidden>'));
  assert.ok(src('src/client/nav.ts').includes("{ id: 'grammar', label: 'Grammar', icon: 'grammar', btn: 'grammarBtn', screens: ['grammar'] }"));
  assert.ok(src('src/server/router.ts').includes("url === '/api/grammar/pass'"));
});

// ── round 4: Grammar Clash ──
const fakeTimers = () => {
  const c = { t: 1_000_000, due: [] as Array<{ at: number; fn: () => void; id: number }>, seq: 0 };
  const timers = {
    setTimeout: (fn: () => void, ms: number) => { c.due.push({ at: c.t + ms, fn, id: ++c.seq }); return c.seq; },
    clearTimeout: (h: number | undefined) => { const i = c.due.findIndex((d) => d.id === h); if (i >= 0) c.due.splice(i, 1); },
  };
  const advance = (ms: number) => {
    const end = c.t + ms;
    for (;;) { c.due.sort((a, b) => a.at - b.at); const d = c.due[0]; if (!d || d.at > end) break; c.due.shift(); c.t = d.at; d.fn(); }
    c.t = end;
  };
  return { c, timers, advance };
};

test('0.9.9.9.9.6 round 4 Grammar Clash: a room by code, Ready, the host starts; speed, combos and double questions score; the board after each; the order at the end', async () => {
  const { GrammarHub, CLASH, clashPoints, isDouble } = await import('../src/server/GrammarHub');
  const { c, timers, advance } = fakeTimers();
  type V = { status: string; code: string; n: number; total: number; players: Array<{ id: string; score: number }>; q?: { answer?: number }; order?: string[] };
  const sent: Array<[string, { type: string; room?: V; error?: string }]> = [];
  const hub = new GrammarHub((id, m) => sent.push([id, m as never]), () => c.t, () => 0.42, timers as never);
  const last = (id: string) => [...sent].reverse().find(([to, m]) => to === id && m.type === 'clash')![1].room!;
  const P = (id: string) => ({ id, name: id.toUpperCase(), avatar: 'witch', staff: 'verdant' });
  await hub.handle(P('a'), { type: 'clash_new', level: 'N5', count: 5 });
  const code = last('a').code;
  await hub.handle(P('b'), { type: 'clash_join', code });
  await hub.handle(P('c'), { type: 'clash_join', code });
  assert.equal(last('a').players.length, 3);
  await hub.handle(P('a'), { type: 'clash_start' });
  assert.equal(sent.at(-1)![1].error, 'Not everyone is ready');
  for (const id of ['b', 'c']) await hub.handle(P(id), { type: 'clash_ready', on: true });
  await hub.handle(P('a'), { type: 'clash_start' });
  assert.equal(last('a').status, 'starting');
  advance(CLASH.startMs);
  assert.equal(last('a').status, 'question');
  assert.equal(last('a').total, 5);
  assert.equal(last('a').q!.answer, undefined, 'the answer is not sent while the question is open');
  const inner = () => (hub as unknown as { rooms: Map<string, { qs: Array<{ answer: number }>; i: number }> }).rooms.values().next().value!;
  const right = () => inner().qs[inner().i].answer;
  // question 1: a right at once, b right after 10 s, c wrong
  await hub.handle(P('a'), { type: 'clash_answer', i: 0, k: right() });
  advance(10_000);
  await hub.handle(P('b'), { type: 'clash_answer', i: 0, k: right() });
  await hub.handle(P('c'), { type: 'clash_answer', i: 0, k: (right() + 1) % 4 });
  const v = last('a');
  assert.equal(v.status, 'reveal', 'everyone answered: revealed at once');
  const pts = (id: string) => v.players.find((p) => p.id === id)!.score;
  assert.equal(pts('a'), 1000, 'right at once: 1000');
  assert.equal(pts('b'), 750, 'right at half the time: 750');
  assert.equal(pts('c'), 0);
  advance(CLASH.revealMs);
  assert.equal(last('a').status, 'board', 'the leaderboard after each question');
  advance(CLASH.boardMs);
  // the rest: a right at once every time (a combo), b and c let the time run out
  for (let i = 1; i < 5; i++) {
    assert.equal(last('a').status, 'question');
    await hub.handle(P('a'), { type: 'clash_answer', i, k: right() });
    advance(CLASH.questionMs + CLASH.revealMs + CLASH.boardMs);
  }
  const end = last('a');
  assert.equal(end.status, 'over');
  assert.deepEqual(end.order, ['a', 'b', 'c']);
  const expectA = 1000 + clashPoints(0, 1, 2, false) + clashPoints(0, 1, 3, false) + clashPoints(0, 1, 4, false) + clashPoints(0, 1, 5, true);
  assert.equal(end.players.find((p) => p.id === 'a')!.score, expectA, 'combo bonus, and the 5th (last) question double');
  assert.deepEqual([isDouble(4, 10), isDouble(9, 10), isDouble(3, 10), isDouble(6, 7)], [true, true, false, true]);
  assert.equal(clashPoints(0, 20_000, 9, false), 1500, 'the combo bonus stops at +500');
});

test('0.9.9.9.9.6 round 4 Grammar Clash: the queue starts a game by itself with 2–8; ranked goes to the ladder; the field rating moves by place', async () => {
  const { GrammarHub, CLASH } = await import('../src/server/GrammarHub');
  const { c, timers, advance } = fakeTimers();
  const sent: Array<[string, { type: string; room?: { status: string; ranked: boolean; players: unknown[] }; error?: string }]> = [];
  let settled: string[] = [];
  const hub = new GrammarHub((id, m) => sent.push([id, m as never]), () => c.t, Math.random, timers as never, { settle: async (order) => { settled = order; return {}; } });
  const P = (id: string, guest = false) => ({ id, name: id, avatar: 'knight', staff: 'verdant', guest });
  await hub.handle(P('g', true), { type: 'clash_queue', on: true, ranked: true });
  assert.equal(sent.at(-1)![1].error, 'Save your account to play ranked');
  await hub.handle(P('x'), { type: 'clash_queue', on: true, ranked: true });
  await hub.handle(P('y'), { type: 'clash_queue', on: true, ranked: true });
  advance(CLASH.gatherMs);
  const room = [...sent].reverse().find(([to, m]) => to === 'x' && m.type === 'clash')![1].room!;
  assert.equal(room.status, 'starting');
  assert.equal(room.ranked, true);
  assert.equal(room.players.length, 2);
  advance(60 * 60_000); // nobody answers: the game runs to its end on the clock
  await Promise.resolve();
  assert.equal(settled.length, 2, 'ranked: the order goes to the ladder');
  const store = new MemoryStore();
  const { RankedService } = await import('../src/server/study/RankedService');
  const ids: string[] = [];
  for (const n of ['one', 'two', 'three']) ids.push((await store.create({ username: n, passwordHash: 'x', email: n + '@e.x' } as never)).id);
  const ch = await new RankedService(store).settleField(ids);
  assert.ok(ch[ids[0]].after > 1000 && ch[ids[2]].after < 1000, 'first up, last down');
  assert.equal(ch[ids[1]].after, 1000, 'the middle of three equals: no change');
});

// ── round 5: chess and Grammar Clash as modes of the private game and the online queue; the Dragon ──
test('0.9.9.9.9.6 round 5: a chess room hands its two players to the game and is back in its lobby at the end; Grammar Clash takes 2–8, no AI', async () => {
  const { Room } = await import('../src/server/Room');
  const sent: Record<string, Array<{ type: string; settings?: { base: number } }>> = {};
  const client = (id: string) => ({ send: (m: never) => { (sent[id] ??= []).push(m); } });
  const started: Array<{ mode: string; players: string[]; ranked: boolean; base: number }> = [];
  let end: () => void = () => {};
  const room = new Room('ABCD', 'chess', { onEmpty: () => {}, external: (mode, players, o, onEnd) => { started.push({ mode, players: players.map((p) => p.id), ranked: o.ranked, base: o.settings.base }); end = onEnd; } });
  room.join('a', 'Ann', client('a') as never);
  room.join('b', 'Bob', client('b') as never);
  assert.equal(room.maxPlayers, 2);
  room.addBot('a', 'N5');
  assert.equal(room.memberIds.length, 2, 'no AI in chess');
  room.setSettings('a', { base: 180_000, inc: 2000 });
  room.setSettings('b', { base: 600_000, inc: 0 });
  const lobby = sent.b.filter((m) => m.type === 'lobby').at(-1)!;
  assert.equal(lobby.settings!.base, 180_000, 'only the host sets the clock');
  room.setLobbyReady('a', true); room.setLobbyReady('b', true);
  assert.deepEqual(started, [{ mode: 'chess', players: ['a', 'b'], ranked: false, base: 180_000 }]);
  assert.equal(room.stage, 'game');
  end();
  assert.equal(room.stage, 'lobby', 'back in its lobby');
  const clash = new Room('EFGH', 'clash', { onEmpty: () => {} });
  assert.deepEqual([clash.maxPlayers, clash.minPlayers], [8, 2]);
  const html = src('public/index.html');
  // (round 7: chess is no longer offered among the private game's modes — the chess page's "Open a room" makes its room)
  assert.ok(html.includes('<button class="mode-card" data-mode="chess" hidden>') && html.includes('<button class="mode-card" data-mode="clash">'), 'Grammar Clash in the private game\'s modes');
  assert.ok(!html.includes('gt-clash') && !html.includes('id="clashSetup"') && !html.includes('id="chessLobby"'), 'no menus or lobbies of their own');
  assert.ok(src('src/client/queue.ts').includes("const QUEUE_MODES: GameMode[] = ['reading', 'writing', 'rapid', 'boss', 'chess', 'clash'];"), 'in the online queue');
});

test('0.9.9.9.9.6 round 5: the queue gathers Grammar Clash (8 at once, or fewer after a wait); chess needs no levels; both ranked', async () => {
  const { Matchmaker, CLASH_GATHER_MS } = await import('../src/server/Matchmaker');
  let t = 0;
  const made: string[] = [];
  const rooms = { create: (mode: string) => { made.push(mode); return { ranked: false, setSettings() {}, start() {}, setLobbyReady() {}, leave() {} }; } };
  const mm = new Matchmaker(rooms as never, () => 0, () => t);
  const found: Record<string, string[]> = {};
  const c = (id: string) => ({ inRoom: () => false, joinMatched: async () => true, send: (m: { type: string; state?: string; mode?: string; matchId?: number }) => { if (m.state === 'found') { (found[id] ??= []).push(m.mode!); void mm.accept?.(id, m.matchId!); } } });
  assert.equal(mm.enqueue('x', c('x') as never, ['chess'], []), null, 'chess: no levels needed');
  assert.equal(mm.enqueue('y', c('y') as never, ['clash'], []), null);
  assert.equal(mm.enqueue('z', c('z') as never, ['clash'], []), null);
  await new Promise((r) => setTimeout(r, 0));
  assert.equal(found.y, undefined, 'two for Grammar Clash: it waits for more first');
  t += CLASH_GATHER_MS;
  mm.tick();
  await new Promise((r) => setTimeout(r, 0));
  assert.ok(found.y?.includes('clash') && found.z?.includes('clash'), 'after the wait, the two play');
  assert.equal(mm.enqueue('w', c('w') as never, ['reading'], []), 'Pick at least one level', 'the word modes still need levels');
});

test('0.9.9.9.9.6 round 5: the Dragon (2400) — a deep search on a clock, always a legal move, beats the Wizard; the bots think in a worker', async () => {
  const { BOTS, dragonMove, legalMoves, parseFen, START_FEN, makeMove, outcome } = await import('../src/shared/chess');
  assert.deepEqual(BOTS.at(-1), { id: 'dragon', elo: 2400, name: 'Dragon', jp: '竜', reading: 'りゅう' });
  const p = parseFen(START_FEN);
  const m = dragonMove(p, 300)!;
  assert.ok(legalMoves(p).some((x) => x.from === m.from && x.to === m.to));
  // the back rank: it finds the mate
  const q = parseFen('6k1/5ppp/8/8/8/8/1Q6/1R4K1 w - - 0 1');
  const pos = makeMove(q, dragonMove(q, 1500)!);
  assert.deepEqual(outcome(pos), { over: true, winner: 'w', reason: 'checkmate' });
  assert.ok(src('scripts/build-client.mjs').includes("src/client/chessworker.ts"), 'built on its own');
  assert.ok(src('src/client/chess.ts').includes("new Worker('chessworker.js')"));
  assert.ok(src('src/client/chess.ts').includes("if (d.parentElement !== document.body) document.body.append(d);"), 'the replay window opens from the page itself (it froze the app)');
});

test('0.9.9.9.9.6 round 5: grammar N5 to N1 all there; Master Fumi\'s 2.5D portrait with a face that moves', async () => {
  const { grammarOf } = await import('../src/shared/grammar');
  for (const l of ['N3', 'N2', 'N1'] as const) assert.ok(grammarOf(l).length >= 15, `${l} lessons`);
  const { fumiBust } = await import('../src/client/fumibust');
  const svg = fumiBust();
  for (const part of ['fu-back', 'fu-mid', 'fu-front', 'fu-hat', 'fu-eyes-open', 'fu-eyes-happy', 'fu-m-talk', 'fu-m-grin', 'fu-m-o', 'fu-m-flat', 'fu-brow-l']) assert.ok(svg.includes(part), part);
  assert.ok(src('src/client/tutorguide.ts').includes('body.innerHTML = fumiBust();'), 'the guide is the portrait, not the arena sprite');
  const css = src('public/style.css');
  assert.ok(css.includes('.tg[data-mood="cheer"] .fumi .fu-eyes-happy { display: inline; }') && css.includes('@keyframes fuBlink'));
});

test('0.9.9.9.9.6 round 5: the small fixes — any quiz counts, errors in a window, the draw search, the example word, the deck window, the streak\'s glow', () => {
  assert.ok(src('src/shared/progress.ts').includes("{ id: 'practice', label: '7/10 in any quiz', target: 1 }"));
  const decks = src('src/client/decks.ts');
  assert.ok(!decks.includes("if (mode === 'jlpt') {\n    void api.task('quiz'"), 'the onomatopoeia quiz counts too');
  const ui = src('src/client/ui.ts');
  assert.ok(ui.includes("void alertBox('Something needs your attention', text)") && ui.includes('export function alertBox('));
  const css = src('public/style.css');
  assert.ok(css.includes('.dd-cands { display: grid; grid-template-columns: repeat(auto-fill, minmax(46px, 1fr));') && css.includes('.dd-row { flex-wrap: nowrap; }'));
  assert.ok(css.includes('.dict-word .fc-ex-ja mark, .dict-panel .fc-ex-ja mark, .dict-rail .fc-ex-ja mark { background: rgba(255, 212, 121, .18); color: #ffd479;'));
  assert.ok(css.includes('.ud-dialog { border-radius: 20px;'));
  assert.ok(css.includes('.ach-pop.streak-moment .ach-rays {') && css.includes('@keyframes skGlow'), 'no sun rays behind the streak');
  assert.ok(src('src/client/userdecks.ts').includes("left.append(step('1', tr('Paste your words')), intro, area, step('2', tr('How are they split?')), seps);"), 'the import window: our own layout');
});

test('0.9.9.9.9.6 round 5: the team writes to every player (admins only; not guests; once a minute)', async () => {
  const { MessageService } = await import('../src/server/study/MessageService');
  const store = new MemoryStore();
  const delivered: string[] = [];
  const svc = new MessageService(store, { deliver: (to: unknown) => { if (Array.isArray(to)) for (const x of to) delivered.push(x.id); } } as never);
  const admin = await store.create({ username: 'boss', passwordHash: 'x', email: 'b@e.x' } as never);
  await store.update(admin.id, { role: 'admin' });
  const p1 = await store.create({ username: 'one', passwordHash: 'x', email: 'o@e.x' } as never);
  const guest = await store.create({ username: 'guest1', passwordHash: 'x', email: null } as never);
  await store.update(guest.id, { unlocks: ['guest'] });
  await assert.rejects(svc.broadcast(p1, 'hi'), /Only the team/);
  const r = await svc.broadcast((await store.findById(admin.id))!, 'Hello everyone');
  assert.ok(r.sent >= 2 && delivered.includes(p1.id));
  await assert.rejects(svc.broadcast((await store.findById(admin.id))!, 'again'), /a minute/);
});

test('0.9.9.9.9.6 round 6: back in a chat goes to the list, not out of the app; a notification\'s link is used once', () => {
  const java = src('mobile/android/app/src/main/java/com/kanjiwizards/app/MainActivity.java');
  assert.ok(java.includes('kwBackNative') && java.includes('moveTaskToBack(true)'), 'the app asks the page first');
  assert.ok(java.includes('FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY') && java.includes('setIntent(intent)'), 'a link from Recents is not replayed');
  assert.ok(src('src/client/appshell.ts').includes('kwBackNative = () => goBack()'));
  const main = src('src/client/main.ts');
  assert.ok(main.includes('const startLink = (() => {') && main.includes('const ib = startLink.inbox;'), 'read as the page starts');
  assert.ok(!main.includes("new URLSearchParams(location.search).get('inbox')"), 'not read again on a reconnect');
});

test('0.9.9.9.9.6 round 6: an update that does not fit makes room, and the third failed start loads from the server', () => {
  const sw = src('src/client/sw.js');
  assert.ok(sw.includes('await caches.delete(RUNTIME);') && sw.includes('const again = bad.splice(0);'));
  const shell = src('src/client/appshell.ts');
  assert.ok(shell.includes("localStorage.getItem('kw:update-fails')") && shell.includes('r.unregister()'));
});

test('0.9.9.9.9.6 round 6: the team writes to one player; the pieces fit their squares; Fumi\'s hat stays on', () => {
  const inbox = src('src/client/inbox.ts');
  assert.ok(inbox.includes('box.append(open, playerPicker(), form);') && inbox.includes('void openInbox(u.id, true)'));
  const css = src('public/style.css');
  assert.ok(css.includes('.csq .piece .pc-img { bottom: 1%; height: 101%; }'));
  assert.ok(css.includes('.tg .fumi .fu-hat { transform: translate(calc(var(--tx) * 5.5px), calc(var(--ty) * 3px)) rotate(calc(var(--tx) * .6deg)); }'));
  assert.ok(css.includes('.tg-small { width: 66px; height: 66px; border-radius: 50%; overflow: hidden;'), 'the small Fumi: a round portrait');
});

test('0.9.9.9.9.6 round 6: Master Fumi shows each page round the first time; every step has Russian', async () => {
  const { PAGE_TOURS } = await import('../src/client/pagetours');
  const i18n = src('src/client/i18n.ts');
  const html = src('public/index.html');
  for (const page of ['games', 'study', 'customize', 'quizzes', 'kana', 'daily', 'progress', 'history', 'grammar', 'inbox', 'dict', 'private']) {
    assert.ok(PAGE_TOURS[page]?.length, page);
    assert.ok(html.includes(`<section id="${page}"`), `${page} is a page`);
    for (const s of PAGE_TOURS[page]) {
      const key = (t: string) => i18n.includes(`'${t.replace(/'/g, "\'")}':`) || i18n.includes(`${JSON.stringify(t)}:`);
      assert.ok(key(s.title) && key(s.text), `${page}: ${s.title}`);
    }
  }
  assert.ok(src('src/client/main.ts').includes('resetPageTours();'), 'How to play: the tours again');
});

test('0.9.9.9.9.6 round 6: every chess wizard line has its own recorded voice (VOICEVOX, credited)', async () => {
  const { existsSync } = await import('node:fs');
  const { LINES, BOT_VOICE, voiceClip } = await import('../src/shared/chesslines');
  let n = 0;
  for (const [bot, moments] of Object.entries(LINES)) for (const lines of Object.values(moments)) for (const l of lines ?? []) {
    assert.ok(existsSync(join('public', voiceClip(bot as never, l.jp))), `${bot}: ${l.jp}`); n++;
  }
  assert.ok(n >= 70);
  const credits = src('CREDITS.md'), about = src('public/index.html');
  for (const v of Object.values(BOT_VOICE)) assert.ok(credits.includes(`VOICEVOX:${v.name}`) && about.includes(`VOICEVOX:${v.name}`), v.name);
  assert.ok(src('src/client/chess.ts').includes('playClip(voiceClip(bot, line.jp), () => speakAs('), 'the device\'s voice if a recording can\'t play');
});

test('0.9.9.9.9.6 round 6: the queue\'s two sides — Ranked shows ranked modes only and meets only ranked players; Unranked rooms are not rated', async () => {
  const { Matchmaker } = await import('../src/server/Matchmaker');
  const rooms: Array<{ mode: string; ranked: boolean }> = [];
  const mk = { create: (mode: string) => { const r = { mode, ranked: false, setSettings() {}, start() {}, setLobbyReady() {}, leave() {} }; rooms.push(r); return r; } };
  const mm = new Matchmaker(mk as never, () => 0, () => 0);
  const found: Record<string, string[]> = {};
  const c = (id: string) => ({ inRoom: () => false, joinMatched: async () => true, send: (m: { state?: string; mode?: string; matchId?: number }) => { if (m.state === 'found') { (found[id] ??= []).push(m.mode!); mm.accept(id, m.matchId!); } } });
  const tick = () => new Promise((r) => setTimeout(r, 10));
  assert.equal(mm.enqueue('a', c('a') as never, ['reading'], ['N5'], true), 'Pick at least one mode', 'Reading is not on the Ranked side');
  mm.enqueue('a', c('a') as never, ['rapid'], ['N5'], true);
  mm.enqueue('b', c('b') as never, ['rapid'], ['N5'], false);
  await tick();
  assert.equal(found.a, undefined, 'a ranked and an unranked player do not meet');
  mm.enqueue('c', c('c') as never, ['rapid'], ['N5'], false);
  await tick();
  assert.deepEqual(rooms.map((r) => [r.mode, r.ranked]), [['rapid', false]], 'two unranked: an unranked room');
  mm.enqueue('d', c('d') as never, ['rapid'], ['N5'], true);
  await tick();
  assert.deepEqual(rooms.at(-1), { ...rooms.at(-1)!, mode: 'rapid', ranked: true }, 'two ranked: a ranked room');
});

test('0.9.9.9.9.6 round 6: every ranked mode has a rating (and a ladder) of its own; Match history says ranked or not', async () => {
  const store = new MemoryStore();
  const { RankedService } = await import('../src/server/study/RankedService');
  const ranked = new RankedService(store);
  const ann = await store.create({ username: 'ann', passwordHash: 'x', role: 'user' } as never), bob = await store.create({ username: 'bob', passwordHash: 'x', role: 'user' } as never);
  const res = (w: string, l: string) => [{ id: w, outcome: 'win', ranked: true }, { id: l, outcome: 'loss', ranked: true }] as never;
  await ranked.settle(res(ann.id, bob.id), 'rapid');
  await ranked.settle(res(bob.id, ann.id), 'chess');
  await ranked.settle(res(bob.id, ann.id), 'chess');
  const a = (await store.findById(ann.id))!;
  assert.equal(a.ratings?.rapid?.r, 1020); assert.equal(a.ratings?.chess?.r, 962); assert.equal(a.ratings?.chess?.g, 2);
  assert.equal(a.ratings?.deck, undefined, 'a mode not played: no rating yet');
  assert.deepEqual(await ranked.settle(res(ann.id, bob.id), 'reading'), {}, 'Reading is never rated');
  await ranked.settleField([ann.id, bob.id], 'clash');
  assert.equal((await store.findById(ann.id))!.ratings?.clash?.g, 1);
  const board = await ranked.ladder((await store.findById(bob.id))!, [ann.id], 50, 'chess');
  assert.equal(board.mode, 'chess'); assert.equal(board.me.rating, 1038); assert.equal(board.friends[0].rating, 962);
  assert.ok(board.modes.rapid && board.modes.deck && board.modes.clash);
  assert.ok(src('src/client/ui.ts').includes("m.ranked ? 'Ranked' : 'Unranked'") && src('src/client/chess.ts').includes("g.ranked ? 'Ranked' : 'Unranked'"));
  assert.ok(src('src/server/ChessHub.ts').includes('...(r.bound?.ranked ? { ranked: true } : {})'), 'chess games remember it');
});

// ── round 7 ──
test('0.9.9.9.9.6 round 7: a Grammar Clash game is kept for Match history — every round, who answered what, the standings', async () => {
  const { GrammarHub, CLASH } = await import('../src/server/GrammarHub');
  const { c, timers, advance } = fakeTimers();
  const kept: Array<[string, { place: number; ranked: boolean; rounds: Array<{ picks: Record<string, { right: boolean }>; standings: unknown[] }>; players: unknown[] }]> = [];
  const hub = new GrammarHub(() => {}, () => c.t, () => 0.42, timers as never, { record: (id, g) => kept.push([id, g as never]) });
  assert.ok(CLASH.revealMs >= 6000 && CLASH.boardMs >= 5000, 'a longer look at the answer and the board');
  const P = (id: string) => ({ id, name: id, avatar: 'witch', staff: 'verdant' });
  await hub.handle(P('a'), { type: 'clash_new', level: 'N5', count: 5 });
  const code = (hub as unknown as { rooms: Map<string, { code: string }> }).rooms.values().next().value!.code;
  await hub.handle(P('b'), { type: 'clash_join', code });
  await hub.handle(P('b'), { type: 'clash_ready', on: true });
  await hub.handle(P('a'), { type: 'clash_start' });
  advance(CLASH.startMs);
  const inner = () => (hub as unknown as { rooms: Map<string, { qs: Array<{ answer: number }>; i: number }> }).rooms.values().next().value!;
  await hub.handle(P('a'), { type: 'clash_answer', i: 0, k: inner().qs[0].answer });
  await hub.handle(P('b'), { type: 'clash_answer', i: 0, k: (inner().qs[0].answer + 1) % 4 });
  advance(60 * 60_000);
  assert.deepEqual(kept.map(([id]) => id).sort(), ['a', 'b'], 'both players keep it');
  const [, g] = kept.find(([id]) => id === 'a')!;
  assert.equal(g.rounds.length, 5);
  assert.equal(g.rounds[0].picks.a.right, true); assert.equal(g.rounds[0].picks.b.right, false);
  assert.equal(g.rounds[0].standings.length, 2);
  assert.equal(g.place, 1);
});

test('0.9.9.9.9.6 round 7: the queue matches Grammar Clash by grammar level, and its room plays the level they share', async () => {
  const { Matchmaker, CLASH_GATHER_MS } = await import('../src/server/Matchmaker');
  let now = 0;
  const settings: unknown[] = [];
  const mk = { create: (mode: string) => ({ mode, ranked: false, setSettings: (_: string, s: unknown) => settings.push(s), start() {}, setLobbyReady() {}, leave() {} }) };
  const mm = new Matchmaker(mk as never, () => 0, () => now);
  const c = (id: string) => ({ inRoom: () => false, joinMatched: async () => true, send: (m: { state?: string; matchId?: number }) => { if (m.state === 'found') setTimeout(() => mm.accept(id, m.matchId!), 0); } });
  const tick = () => new Promise((r) => setTimeout(r, 20));
  mm.enqueue('a', c('a') as never, ['clash'], ['N3'], false);
  mm.enqueue('b', c('b') as never, ['clash'], ['N5'], false);
  await tick();
  assert.equal(settings.length, 0, 'N3 and N5: no level in common, not yet');
  now += CLASH_GATHER_MS; mm.tick();
  await tick();
  assert.equal(settings.length, 0, 'after the gathering wait: still no level in common');
  mm.enqueue('d', c('d') as never, ['clash'], ['N3', 'N2'], false);
  now += CLASH_GATHER_MS; mm.tick();
  await tick(); await tick();
  assert.deepEqual(settings.at(-1), { level: 'N3', count: 10 }, 'the level they share');
});

test('0.9.9.9.9.6 round 7: the small fixes — 3 decks, the badges, the streak text, the chess tile, the draw search\'s ✕, the trail without loops', () => {
  const html = src('public/index.html');
  assert.ok(!html.includes('Counts for the streak'), 'the quizzes page no longer says it');
  assert.ok(html.includes('data-new="grammar"') && src('src/client/main.ts').includes("localStorage.setItem(`kw:seen:${k}`, '1')"), 'a "new" badge goes once opened');
  const dict = src('src/client/dictui.ts');
  assert.ok(dict.includes("$('drawClear').onclick = () => { drawPad!.clear(); hint(); };"), 'Clear wipes the drawing only');
  assert.ok(dict.includes("h('button', 'dd-chip-x', '✕'"), 'each picked character has its ✕');
  assert.ok(src('src/client/nav.ts').includes('if (at >= 0) trail.length = at + 1;'), 'a page you were on: the trail goes back to it (no Back loop)');
  const css = src('public/style.css');
  assert.ok(css.includes('#chessOpp .cp-pic svg { height: 100%; width: 100%; max-width: none; scale: 1.75;'), 'the chess wizard from the head to the stomach');
  assert.ok(css.includes('.chess-over .co-card {'), 'the result on a solid card');
  assert.ok(css.includes('.tg .fumi .fu-hat { transform: translate(calc(var(--tx) * 2px), calc(var(--ty) * 2px)); }'), 'the hat moves with his face');
  assert.ok(src('src/client/fumibust.ts').includes('fu-brim-back') && src('src/client/fumibust.ts').includes('fu-brim-front'), 'the brim behind and in front of his head');
});

test('0.9.9.9.9.6 round 7: chess — a line said once a game, whole words tappable, wooden sounds for every kind of move', () => {
  const chess = src('src/client/chess.ts');
  assert.ok(chess.includes('const fresh = (LINES[mode.bot][moment] ?? []).filter((l) => !saidThisGame.has(l.jp));') && chess.includes('saidThisGame.clear();'));
  assert.ok(chess.includes('wordsTappable(jp);'), 'the bubble\'s words open as words (勝負, not 勝 and 負)');
  const audio = src('src/client/audio.ts');
  for (const s of ['chessMove', 'chessCapture', 'chessCastle', 'chessCheck', 'chessPromote', 'chessMate']) assert.ok(audio.includes(`  ${s}()`), s);
  assert.ok(audio.includes('function knock(') && chess.includes('audio.sfx.chessCastle()') && chess.includes('audio.sfx.chessPromote()'));
});

test('0.9.9.9.9.6 round 7: Grammar has voices — Master Fumi\'s words, every example and every question, recorded', async () => {
  const { existsSync } = await import('node:fs');
  const { GRAMMAR, filledQuestion } = await import('../src/shared/grammar');
  const { FUMI_LINES, fumiClip, grammarClip, FUMI_VOICE, EXAMPLE_VOICE, BOT_VOICE } = await import('../src/shared/chesslines');
  for (const l of Object.values(FUMI_LINES)) assert.ok(existsSync(join('public', fumiClip(l))), l);
  for (const g of GRAMMAR) {
    for (const e of g.examples) assert.ok(existsSync(join('public', grammarClip(e.jp))), `${g.id}: ${e.jp}`);
    for (const q of g.questions) assert.ok(existsSync(join('public', grammarClip(filledQuestion(q)))), `${g.id}: ${q.jp}`);
  }
  const credits = src('CREDITS.md'), about = src('public/index.html');
  for (const v of [FUMI_VOICE, EXAMPLE_VOICE, ...Object.values(BOT_VOICE)]) assert.ok(credits.includes(`VOICEVOX:${v.name}`) && about.includes(`VOICEVOX:${v.name}`), v.name);
  assert.ok(BOT_VOICE.knight.fx?.includes('aecho') && BOT_VOICE.dragon.fx?.includes('asetrate'), 'the Knight\'s helmet, the Dragon lower');
});
