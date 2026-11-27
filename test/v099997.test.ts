// 0.9.9.9.9.7: 210 grammar lessons (and their search), every word in the game's lines tappable as a whole word, Grammar
// Clash's translation and flames, the chess sounds and history, the break after 500 cards, Back during the tutorial
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { VERSION } from '../src/shared/version';
import { lineHash } from '../src/shared/chesslines';

const src = (f: string) => readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

test('0.9.9.9.9.7 version and patch notes (and the older notes are whole again)', () => {
  assert.equal(VERSION, '0.9.9.9.9.7');
  const wn = src('src/client/whatsnew.ts');
  assert.ok(wn.indexOf("v: '0.9.9.9.9.7'") < wn.indexOf("v: '0.9.9.9.9.6'"), 'the newest first');
  // (round 5's edit script had cut the first letter off nearly a thousand older lines: "our own decks")
  assert.ok(!/^\s+['"][a-zа-яё]/m.test(wn), 'no patch line starts with a lower-case letter');
  assert.ok(wn.includes("'Your own decks in Study spells:"));
});

test('0.9.9.9.9.7 grammar: N5 to N1, 210 lessons, every one whole, read aloud — and searchable', async () => {
  const { GRAMMAR, grammarOf, filledQuestion } = await import('../src/shared/grammar');
  assert.ok(GRAMMAR.length >= 200);
  for (const l of ['N5', 'N4', 'N3', 'N2', 'N1'] as const) assert.ok(grammarOf(l).length >= 35, l);
  const ids = new Set<string>();
  for (const g of GRAMMAR) {
    assert.ok(!ids.has(g.id), `unique ${g.id}`); ids.add(g.id);
    assert.ok(!/[{}|]/.test(g.pattern) && g.rules.every((r) => !/[{}]/.test(r.en + r.ru)), `${g.id}: no furigana marks in plain text`);
    assert.ok(g.examples.length >= 1 && g.questions.length >= 3, g.id);
    for (const e of g.examples) assert.ok(existsSync(join('public', `voices/grammar/${lineHash(e.jp)}.mp3`)), `${g.id}: example read aloud`);
    for (const q of g.questions) {
      assert.ok(q.jp.includes('＿＿'), `${g.id}: a gap`);
      assert.equal(new Set(q.options).size, 4, `${g.id}: four different choices`);
      assert.ok(q.options.every((o) => o.length > 0), `${g.id}: no empty choice`);
      assert.ok(existsSync(join('public', `voices/grammar/${lineHash(filledQuestion(q))}.mp3`)), `${g.id}: question read aloud`);
    }
  }
  const ui = src('src/client/grammarui.ts');
  assert.ok(src('public/index.html').includes('id="grammarSearch"') && ui.includes('const list = searching ? GRAMMAR.filter((g) => haystack(g).includes(q)) : grammarOf(level);'));
});

test('0.9.9.9.9.7 a tapped word is found: conjugated verbs, stems before another verb, numbers, compounds, names', async () => {
  const { dictionaryEndings, findInVocab, numberWord, splitCompound, EXTRA_WORDS, PREFIXED } = await import('../src/shared/wordlookup');
  const vocab = JSON.parse(readFileSync('data/vocab.json', 'utf8'));
  const find = (base: string, reading: string, after: string) => findInVocab(vocab, base, reading, after)?.kanji;
  assert.equal(find('勝', 'か', 'った！'), '勝つ');
  assert.equal(find('食', 'た', 'べません'), '食べる');
  assert.equal(find('住', 'す', 'んでいた'), '住む');
  assert.equal(find('習', 'なら', 'い始めま'), '習う', 'a stem before another verb');
  assert.equal(find('来', 'き', 'ました'), '来る');
  assert.ok(dictionaryEndings('かなけれ').includes('く'), '行かなければ → 行く');
  assert.deepEqual(numberWord('六時'), { en: "6 o'clock", ru: '6 часов' });
  assert.equal(numberWord('六百年前')?.en, '600 years ago');
  assert.equal(numberWord('一億円')?.en, '100000000 yen');
  assert.deepEqual(splitCompound('参加費', (p) => (['参加', '費'].includes(p) ? p : null))?.parts, ['参加', '費']);
  assert.ok(EXTRA_WORDS['小鬼|こおに'] && EXTRA_WORDS['后|きさき'] && PREFIXED['飯|はん'] === 'ご飯');
  assert.ok(src('src/client/grammarui.ts').includes('wordsTappable(p);'), 'grammar and Grammar Clash sentences: whole words');
  assert.ok(src('scripts/check-words.ts').includes('not found'), 'scripts/check-words.ts lists any word a new line adds that is not found');
});

test('0.9.9.9.9.7 Grammar Clash: the translation while answering, the battle\'s own flames at x3, its chat tidy', () => {
  const hub = src('src/server/GrammarHub.ts');
  assert.ok(hub.includes('en: q.q.en, ru: q.q.ru /* (0.9.9.9.9.7: the translation while you answer too) */'));
  assert.ok(hub.includes("flame: s.flame ?? 'blue'") && src('src/server/Session.ts').includes("flame: look?.flame ?? 'blue'"));
  const clash = src('src/client/clash.ts');
  assert.ok(clash.includes("b.prepend(h('span', 'aura'));") && clash.includes('flameColor(p.flame)'));
  const css = src('public/style.css');
  assert.ok(css.includes('.gc-av.gc-omni > .aura::before') && !css.includes('.gc-av.gc-omni::before'), 'the flames, not the rainbow ring');
  assert.ok(css.includes('.gc-chatside .cc-list li { margin: 0; padding: 3px 0;'));
});

test('0.9.9.9.9.7 chess: wooden recordings (CC0, credited), the Dragon\'s games kept, history rows like matches', () => {
  for (const w of ['light', 'medium', 'heavy']) for (let i = 0; i < 5; i++) assert.ok(existsSync(`public/sounds/chess/${w}${i}.mp3`), `${w}${i}`);
  assert.ok(src('src/client/audio.ts').includes('function wood(') && src('CREDITS.md').includes('Kenney') && src('public/index.html').includes('Chess sounds:'));
  assert.ok(src('scripts/build-client.mjs').includes("readdirSync(r('public/sounds/chess'))"), 'they work offline');
  assert.ok(src('src/server/router.ts').includes('const bots: string[] = CHESS_BOTS.map((x) => x.id);'), 'every bot, the Dragon too');
  assert.ok(src('src/client/chess.ts').includes("const b = h('button', `hist-row ${g.result}`") && src('src/client/clash.ts').includes("const b = h('button', `hist-row ${res}`"));
});

test('0.9.9.9.9.7 the small things: the break at 500 cards, Back in the tutorial, closed windows, the email after the tutorial', () => {
  const study = src('src/client/study.ts');
  assert.ok(study.includes('const BREAK_AT = 500;') && study.includes("document.getElementById('gamesBtn')?.click();"));
  const shell = src('src/client/appshell.ts');
  assert.ok(shell.includes('if (tut && !tut.hidden) return true;') && shell.includes('tourSkip.click()'), 'Back: the tour skipped, the tutorial stays (found on the Android emulator)');
  assert.ok(src('public/style.css').includes('dialog:not([open]) { display: none !important; }'), 'a closed window is never drawn (the menu grew)');
  assert.ok(src('src/client/main.ts').includes("if (!document.getElementById('tutorial')?.hidden || document.querySelector('.tut-spot')"), 'the email window waits for the tutorial');
});
