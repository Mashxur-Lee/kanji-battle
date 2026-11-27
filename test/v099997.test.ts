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

// ── round 2 ──
const fakeTimers = () => {
  const c = { t: 1_000_000, due: [] as Array<{ at: number; fn: () => void; id: number }>, seq: 0 };
  const timers = {
    setTimeout: (fn: () => void, ms: number) => { c.due.push({ at: c.t + ms, fn, id: ++c.seq }); return c.seq; },
    clearTimeout: (h: number | undefined) => { const i = c.due.findIndex((d) => d.id === h); if (i >= 0) c.due.splice(i, 1); },
  };
  const advance = (ms: number) => { const end = c.t + ms; for (;;) { c.due.sort((a, b) => a.at - b.at); const d = c.due[0]; if (!d || d.at > end) break; c.due.shift(); c.t = d.at; d.fn(); } c.t = end; };
  return { c, timers, advance };
};

test('0.9.9.9.9.7 round 2: Grammar Clash takes AI players — they answer by their level; a player\'s passed lessons are in the game', async () => {
  const { GrammarHub, CLASH } = await import('../src/server/GrammarHub');
  const { grammarOf } = await import('../src/shared/grammar');
  const { c, timers, advance } = fakeTimers();
  const sent: Array<[string, { type: string; room?: { status: string; players: Array<{ id: string; score: number }> } }]> = [];
  const mine = grammarOf('N5').slice(3, 5).map((g) => g.id);
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const hub = new GrammarHub((id, m) => sent.push([id, m as never]), () => c.t, rnd, timers as never, { passed: async (id) => (id === 'me' ? mine : []) });
  hub.startMatch([{ id: 'me', name: 'Me', avatar: 'witch', staff: 'verdant' }, { id: 'ai-1', name: 'Kitsune (Bot N1)', avatar: 'goblin', staff: 'verdant', bot: 'N1' }], 'N5', 10, false, () => {});
  await new Promise((r) => setTimeout(r, 0)); // (the passed lessons looked up during the countdown)
  const inner = () => (hub as unknown as { rooms: Map<string, { qs: Array<{ g: { id: string }; answer: number }>; i: number; picks: Map<string, { k: number }> }> }).rooms.values().next().value!;
  assert.ok(inner().qs.some((q) => mine.includes(q.g.id)), 'at least one question from a lesson I passed');
  advance(CLASH.startMs);
  advance(CLASH.questionMs - 1);
  assert.ok(inner().picks.has('ai-1') || sent.some(([, m]) => m.room?.status === 'reveal'), 'the AI answered within the time');
  assert.ok(sent.every(([to]) => to !== 'ai-1'), 'nothing is sent to an AI player');
  // the AI's right answers: an N1 AI on N5 grammar is right (nearly) every time
  advance(60 * 60_000);
  const last = [...sent].reverse().find(([, m]) => m.room?.status === 'over')![1].room!;
  assert.ok(last.players.find((p) => p.id === 'ai-1')!.score > 0);
  assert.ok(src('src/server/Room.ts').includes("if (this.mode === 'chess') return this.clients.get(by)?.send({ type: 'error', message: 'Play the wizards on the Kanji chess page' });"), 'the room lets AI players into Grammar Clash');
  assert.ok(src('src/client/ui.ts').includes("$('addBot').hidden = !isHost || players.length >= maxPlayers || mode === 'chess';"));
});

test('0.9.9.9.9.7 round 2: a grammar lesson is a daily streak task — done by passing one today, or by having passed them all', async () => {
  const { DAILY_TASKS } = await import('../src/shared/progress');
  assert.ok(DAILY_TASKS.some((t) => t.id === 'grammar'));
  const { MemoryStore } = await import('../src/server/db/Store');
  const { StudyService } = await import('../src/server/study/StudyService');
  const { GRAMMAR } = await import('../src/shared/grammar');
  const store = new MemoryStore();
  const study = new StudyService(store);
  const u = await store.create({ username: 'gt', passwordHash: 'x', role: 'user' } as never);
  const day = '2026-11-28';
  const grammarTask = async () => (await study.progress.tasks(u.id, day)).find((t) => t.id === 'grammar')!.value;
  assert.equal(await grammarTask(), 0);
  await study.passGrammar(u.id, GRAMMAR[0].id, 0, day);
  assert.equal(await grammarTask(), 0, 'not passed: not done');
  await study.passGrammar(u.id, GRAMMAR[0].id, GRAMMAR[0].questions.length, day);
  assert.equal(await grammarTask(), 1, 'a lesson passed today');
  const v = await store.create({ username: 'gt2', passwordHash: 'x', role: 'user' } as never);
  await store.setValue(`grammar:${v.id}`, JSON.stringify(GRAMMAR.map((g) => g.id)));
  assert.equal((await study.progress.tasks(v.id, day)).find((t) => t.id === 'grammar')!.value, 1, 'every lesson passed: done by itself');
  assert.ok(src('src/client/main.ts').includes("taskActions.grammar = () => ui.$('grammarBtn').click();"));
});

test('0.9.9.9.9.7 round 2: Fumi names each lesson in Japanese; the Dictionary on the Grammar page; the chess wizards from the waist; the flames unclipped', async () => {
  const { spokenPattern, fumiLessonLine, fumiClip } = await import('../src/shared/chesslines');
  const { GRAMMAR } = await import('../src/shared/grammar');
  assert.equal(spokenPattern('〜(よ)う・〜(よ)うと思う'), 'よう');
  assert.equal(spokenPattern('〜に (time, place of being)'), 'に');
  assert.equal(spokenPattern('AはBです'), 'エーはビーです');
  for (const g of GRAMMAR) for (const again of [false, true]) assert.ok(existsSync(join('public', fumiClip(fumiLessonLine(g.pattern, again)))), `${g.id}: Fumi's line recorded`);
  assert.ok(src('src/client/grammarui.ts').includes('fumiLessonLine(g.pattern, passed.has(g.id))'));
  assert.ok(src('public/index.html').includes('id="grammarDict"') && src('src/client/grammarui.ts').includes("$('grammarDict').onclick = () => openDictionary();"));
  const css = src('public/style.css');
  assert.ok(css.includes('#chessOpp .cp-pic svg { scale: 1.28;') && css.includes('#chessOpp .cp-pic[data-bot="dragon"] svg { scale: 1;'));
  assert.ok(css.includes('.gc-av { overflow: visible; }'), 'the flames are no longer cut to a square');
});

test('0.9.9.9.9.7 round 2: Song lyrics — public-domain songs, every note with its syllable, sung by the game; romaji typed any common way', async () => {
  const { SONGS, songTimeline, melodyNotes, sameWord, lineWords } = await import('../src/shared/songs');
  assert.ok(SONGS.length >= 5);
  for (const s of SONGS) {
    assert.ok(/public domain/.test(s.credit), `${s.id}: why it is free`);
    assert.ok(existsSync(join('public', 'songs', `${s.id}.mp3`)), `${s.id}: performed`);
    const sung = melodyNotes(s).filter((n) => n.midi !== null && !n.slur).length;
    const syllables = s.lines.reduce((n, l) => n + l.kana.split(/\s+/).length, 0);
    assert.equal(sung, syllables, `${s.id}: one syllable for every sung note`);
    for (const l of songTimeline(s)) {
      assert.ok(l.end > l.start, `${s.id}: a line takes time`);
      assert.ok(l.notes.filter((n) => n.syllable).every((n) => n.midi !== null));
      assert.ok(lineWords(l).length >= 3);
    }
  }
  // the melodies as written: 春の小川 starts ミソ ラ ソ (E4 G4 A4 G4), 赤とんぼ ドファファソ (C4 F4 F4 G4)
  assert.deepEqual(melodyNotes(SONGS.find((s) => s.id === 'haru-no-ogawa')!).slice(0, 4).map((n) => n.midi), [64, 67, 69, 67]);
  assert.deepEqual(melodyNotes(SONGS.find((s) => s.id === 'akatonbo')!).slice(0, 4).map((n) => n.midi), [60, 65, 65, 67]);
  assert.ok(!SONGS.find((s) => s.id === 'haru-no-ogawa')!.lines[0].romaji.includes('iku yo'), 'the 1912 words, not the 1942 revision (still protected)');
  for (const [a, b] of [['tumoru', 'tsumoru'], ['yuyake', 'yuuyake'], ['ha', 'wa'], ['sinobine', 'shinobine'], ['hutte', 'futte']]) assert.ok(sameWord(a, b), `${a} = ${b}`);
  assert.ok(!sameWord('suke', 'sake'));
  assert.ok(src('src/client/songs.ts').includes('player.pause();') && src('public/index.html').includes('data-go="songsOpen"'), 'the song waits at a line\'s end; the Games tile opens it');
  assert.ok(src('CREDITS.md').includes('VOICEVOX:冥鳴ひまり') && src('public/index.html').includes('VOICEVOX:冥鳴ひまり'));
});
