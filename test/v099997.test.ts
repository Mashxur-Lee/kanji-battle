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
  // (round 3: the Dictionary is a search bar now)
  // (round 3: a search bar; round 4, the owner: the side panel's dictionary, as on the other pages)
  assert.ok(!src('public/index.html').includes('id="grammarDictForm"') && src('src/client/dictrail.ts').includes("'kana', 'grammar']"));
  const css = src('public/style.css');
  assert.ok(css.includes('#chessOpp .cp-pic svg { scale: 1.28;') && css.includes('#chessOpp .cp-pic[data-bot="dragon"] svg { scale: 1;'));
  assert.ok(css.includes('.gc-av { overflow: visible; }'), 'the flames are no longer cut to a square');
});

test('0.9.9.9.9.7 round 3: Song lyrics — the owner\'s five songs, easy to hard, each with what to study first; a song plays once timed; romaji typed any common way', async () => {
  const { SONGS, songTimeline, playable, sameWord, startsWord, lineWords } = await import('../src/shared/songs');
  const { GRAMMAR } = await import('../src/shared/grammar');
  assert.deepEqual(SONGS.map((s) => s.id), ['shiroi-tegami', 'koi-no-mahou', 'hakoniwa-no-honoo', 'unmei-wo-tatakiokose', 'aragae']);
  assert.deepEqual(SONGS.map((s) => s.difficulty), [1, 2, 3, 4, 5], 'easy to hard');
  for (const s of SONGS) {
    for (const ext of ['mp3', 'webp']) assert.ok(existsSync(join('public', 'songs', `${s.id}.${ext}`)), `${s.id}.${ext}`);
    assert.ok(s.words.length >= 5 && s.about.en && s.about.ru, `${s.id}: what to study, what it is`);
    for (const g of s.grammar) if (g.lesson) assert.ok(GRAMMAR.some((x) => x.id === g.lesson), `${s.id}: ${g.lesson} is a lesson`);
    for (const l of s.lines) {
      assert.ok(l.en && l.ru && lineWords(l).length >= 1, `${s.id}: ${l.romaji}`);
      assert.ok(/^[a-z ]+$/.test(l.romaji), `${s.id}: typeable romaji "${l.romaji}"`);
      assert.equal((l.jp.match(/\{/g) ?? []).length, (l.jp.match(/\}/g) ?? []).length, `${s.id}: furigana closed in ${l.jp}`);
    }
    if (s.times) assert.equal(s.times.length, s.lines.length, `${s.id}: a time for every line`);
  }
  for (const old of ['haru-no-ogawa', 'akatonbo', 'yuki']) assert.ok(!existsSync(join('public', 'songs', `${old}.mp3`)), `${old} is gone`);
  // untimed: not offered; timed: each line until the next, lines the cut skips left out
  const s = { ...SONGS[0] };
  assert.equal(playable(s), !!s.times);
  const times = s.lines.map((_, i) => (i < 3 ? 10 + i * 4 : i === 3 ? null : i < 6 ? 30 + i : null));
  const tl = songTimeline({ ...s, times });
  assert.deepEqual(tl.map((l) => [l.i, l.start, l.end]), [[0, 10, 14], [1, 14, 18], [2, 18, 34], [4, 34, 35], [5, 35, s.length]]);
  assert.equal(songTimeline({ ...SONGS[3], times: [] }).length, 0, 'no lyrics yet: nothing to play');
  for (const [a, b] of [['daijobu', 'daijoubu'], ['hontoo', 'hontou'], ['tumetai', 'tsumetai'], ['o', 'wo'], ['ha', 'wa'], ['he', 'e'], ['kiree', 'kirei'], ['daijōbu', 'daijoubu']]) assert.ok(sameWord(a, b), `${a} = ${b}`);
  assert.ok(startsWord('ts', 'tsumetai') && startsWord('o', 'wo') && !sameWord('suke', 'sake'));
  assert.ok(src('src/client/songs.ts').includes('player.pause();') && src('public/index.html').includes('data-go="songsOpen"'), 'the song waits at a line\'s end; the Games tile opens it');
  assert.ok(src('src/client/songs.ts').includes('function startTiming(s: Song)') && src('public/index.html').includes('id="songTime"'), 'admins time a song in the game');
  assert.ok(!src('public/index.html').includes('VOICEVOX:冥鳴ひまり') && !existsSync(join('scripts', 'songs.mts')), 'the sung public-domain songs are gone');
});

// ── 0.9.9.9.9.7 round 3 ──
const fakeClock = () => {
  const c = { t: 1_000_000, due: [] as Array<{ at: number; fn: () => void; id: number }>, seq: 0 };
  const timers = {
    setTimeout: (fn: () => void, ms: number) => { c.due.push({ at: c.t + ms, fn, id: ++c.seq }); return c.seq; },
    clearTimeout: (h: number | undefined) => { const i = c.due.findIndex((d) => d.id === h); if (i >= 0) c.due.splice(i, 1); },
  };
  const advance = (ms: number) => { const end = c.t + ms; for (;;) { c.due.sort((a, b) => a.at - b.at); const d = c.due[0]; if (!d || d.at > end) break; c.due.shift(); c.t = d.at; d.fn(); } c.t = end; };
  return { c, timers, advance };
};

test('0.9.9.9.9.7 round 3: a friend\'s Kanji chess and Grammar Clash can be watched; the watcher is told first, then sees each move, never acts', async () => {
  const { ChessHub } = await import('../src/server/ChessHub');
  type CV = { id: string; you: string | null; moves: string[] };
  const sent: Array<[string, { type: string; room?: CV }]> = [];
  const chess = new ChessHub((id, m) => sent.push([id, m as never]), () => 5_000, () => 0.1);
  assert.equal(chess.watch('w', 'a'), 'Your friend isn’t in a game right now');
  const gameId = chess.startMatch({ id: 'a', name: 'Ann' }, { id: 'b', name: 'Bob' }, 0, 0, false, () => {});
  const order: string[] = [];
  assert.equal(chess.watch('w', 'a', () => order.push('told')), null);
  order.push(sent.at(-1)![1].type);
  assert.deepEqual(order, ['told', 'chess'], 'told they are watching before the board comes');
  assert.equal(sent.at(-1)![1].room!.you, null, 'a watcher has no side');
  assert.equal(chess.watch('a', 'b'), 'You’re playing in this game');
  const white = sent.find(([, m]) => m.type === 'chess' && m.room!.you === 'w')![0];
  const black = white === 'a' ? 'b' : 'a';
  const seen = () => sent.filter(([to]) => to === 'w');
  await chess.handle({ id: white, name: '' }, { type: 'chess_move', id: gameId, uci: 'e2e4' });
  assert.deepEqual(seen().at(-1)![1].room!.moves, ['e2e4'], 'the watcher sees the move');
  await chess.handle({ id: 'w', name: '' }, { type: 'chess_move', id: gameId, uci: 'e7e5' });
  assert.deepEqual(seen().filter(([, m]) => m.type === 'chess').at(-1)![1].room!.moves, ['e2e4'], 'and can\'t play');
  chess.unwatch('w');
  const n = seen().length;
  await chess.handle({ id: black, name: '' }, { type: 'chess_move', id: gameId, uci: 'e7e5' });
  assert.equal(seen().length, n, 'nothing after they stop');

  const { GrammarHub } = await import('../src/server/GrammarHub');
  const { c, timers, advance } = fakeClock();
  const got: Array<[string, { type: string; room?: { status: string } }]> = [];
  const clash = new GrammarHub((id, m) => got.push([id, m as never]), () => c.t, () => 0.42, timers as never);
  const P = (id: string, bot?: string) => ({ id, name: id, avatar: 'witch', staff: 'verdant', ...(bot ? { bot: bot as never } : {}) });
  clash.startMatch([P('a'), P('x', 'N5')], 'N5', 5, false, () => {});
  assert.equal(clash.watch('w', 'a'), null);
  advance(5_000);
  assert.ok(got.some(([to, m]) => to === 'w' && m.room?.status === 'question'), 'the watcher sees the questions');
  assert.equal(clash.watch('w2', 'nobody'), 'Your friend isn’t in a game right now');
  // the Session: chess and Clash go to their hubs; a friend in one is "Playing …" whatever the room says; Watch for both
  const session = src('src/server/Session.ts');
  assert.ok(session.includes('if (this.user && this.hub.grammar?.playing(this.user.id)) return `Playing ${MODE_LABEL.clash}`;'));
  assert.ok(session.includes('this.hub.chess?.watch(user.id, friendId, started)'));
  assert.ok(src('src/client/main.ts').includes("!/Deck Duel/.test(link.activity ?? '')"), 'Watch offered for chess and Clash');
});

test('0.9.9.9.9.7 round 3: a Grammar Clash from a private lobby stays "Playing" when the others leave', async () => {
  const { Room } = await import('../src/server/Room');
  const client = () => ({ send: () => {} });
  let ended = () => {};
  const room = new Room('WXYZ', 'clash', { onEmpty: () => {}, external: (_m, _p, _o, onEnd) => { ended = onEnd; }, externalLeave: () => {} });
  room.join('a', 'Ann', client() as never); room.join('b', 'Bob', client() as never); room.join('c', 'Cy', client() as never);
  room.setLobbyReady('a', true); room.setLobbyReady('b', true); room.setLobbyReady('c', true);
  assert.equal(room.stage, 'game');
  room.leave('b'); room.leave('c');
  assert.equal(room.stage, 'game', 'Ann still plays');
  ended();
  assert.equal(room.stage, 'lobby');
});

test('0.9.9.9.9.7 round 3: Games cards bigger, every kanji in the display font, the white knight for Kanji chess; Ranked one mode at a time', () => {
  const css = src('public/style.css'), html = src('public/index.html');
  for (const f of ['dela-gothic-one-97-400-normal.woff2', 'dela-gothic-one-107-400-normal.woff2']) assert.ok(existsSync(join('public', 'fonts', f)) && css.includes(`/fonts/${f}`), f);
  assert.ok(/dela-gothic-one-107[^}]*U\+6b4c/.test(css) && /dela-gothic-one-97[^}]*U\+5c06/.test(css), '歌 and 将 in the display font');
  assert.ok(css.includes('.games-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));'));
  assert.ok(html.includes('<span class="gt-glyph gt-knight" aria-hidden="true"><img class="knight-ic" src="chess/wn.webp"'), 'the Games card');
  assert.ok(!/>将</.test(html.replace('<span class="chess-seal" lang="ja" aria-hidden="true">将</span>', '')), 'no 将 icon left but the chess page\'s seal');
  assert.ok(src('src/client/ui.ts').includes("if (mode === 'chess') b.append(knightImg());"), 'the queue tiles, history, results');
  const q = src('src/client/queue.ts');
  assert.ok(q.includes('const order: GameMode[] = rankedSide ? [...RANKED_MODES]') && q.includes('if (box.checked && rankedSide)'));
  assert.ok(css.includes('#queue.q-ranked .rank-box.rank-modes, #queue.q-ranked .q-tiles { grid-template-columns: repeat(4, minmax(0, 1fr));'), 'each rank above its mode, in the middle');
});

test('0.9.9.9.9.7 round 3: Song lyrics replays a line, no chime for a right word (a quiet zap for a wrong letter); Grammar: the dictionary bar, the question read after Fumi; one pointer listener for the guides', () => {
  const songs = src('src/client/songs.ts');
  assert.ok(!songs.includes('audio.sfx.correct') && songs.includes('audio.sfx.zap()') && songs.includes('function replayLine()'));
  assert.ok(src('public/index.html').includes('id="songReplay"') && src('src/client/audio.ts').includes('  zap() {'));
  // (round 4, the owner: the sentence first, then Master Fumi's verdict)
  assert.ok(src('src/client/grammarui.ts').includes("void readOut(spoken).then(() => { if (box.contains(opts)) void fumiSays(ok ? 'right' : 'wrong'); });"));
  assert.ok(src('src/client/voice.ts').includes('export function playClip(url: string, fallback: () => void): Promise<void> {'), 'a clip says when it is over');
  const g = src('src/client/tutorguide.ts');
  assert.ok(g.includes("addEventListener('pointermove', onMove, { passive: true })") && g.includes("if (box.closest('[hidden]')) continue;"), 'hidden guides cost nothing');
});

// ── 0.9.9.9.9.7 round 4 ──
test('0.9.9.9.9.7 round 4: Grammar Clash from several levels at once (the private lobby, the queue)', async () => {
  const { clashLevels, cleanClashLevel, clashLevelText } = await import('../src/shared/clashlevels');
  assert.deepEqual(clashLevels('N4,N5'), ['N5', 'N4']);
  assert.deepEqual(clashLevels('mix'), ['N5', 'N4', 'N3', 'N2', 'N1']);
  assert.equal(cleanClashLevel('N3,x,N3'), 'N3');
  assert.equal(cleanClashLevel('N1,N2,N3,N4,N5'), 'mix');
  assert.equal(cleanClashLevel('nonsense'), 'N5');
  assert.equal(clashLevelText('N5,N3'), 'N5 · N3');
  const { Room } = await import('../src/server/Room');
  const sent: Array<{ type: string; settings?: { level: string } }> = [];
  const room = new Room('LVLS', 'clash', { onEmpty: () => {} });
  room.join('a', 'Ann', { send: (m: never) => sent.push(m) } as never);
  room.setSettings('a', { level: 'N5,N3' });
  assert.equal(sent.filter((m) => m.type === 'lobby').at(-1)!.settings!.level, 'N5,N3', 'the host picks two levels');
  const { GrammarHub } = await import('../src/server/GrammarHub');
  const hub = new GrammarHub(() => {}, Date.now, () => 0.3);
  const qs = hub.pickQuestions('N5,N3', 20);
  assert.ok(qs.every((q) => q.g.level === 'N5' || q.g.level === 'N3') && new Set(qs.map((q) => q.g.level)).size === 2, 'questions from both');
  assert.ok(src('src/client/ui.ts').includes('const next = has ? (on.length > 1 ? on.filter((x) => x !== l) : on) : [...on, l];'), 'each level a toggle, one always on');
  assert.ok(src('src/server/Matchmaker.ts').includes("level: any && both.length ? both.join(',') : 'mix'"), 'the queue: every level the players share');
});

test('0.9.9.9.9.7 round 4: watching a friend\'s game against a chess wizard (it is played on their device, its moves told to the server)', async () => {
  const { ChessHub } = await import('../src/server/ChessHub');
  const sent: Array<[string, { type: string; room?: { moves: string[]; status: string; white: { id: string }; black: { id: string } }; error?: string }]> = [];
  const hub = new ChessHub((id, m) => sent.push([id, m as never]), () => 1000, () => 0.5);
  const ann = { id: 'ann', name: 'Ann' };
  assert.equal(hub.playingLocal('ann'), false);
  await hub.handle(ann, { type: 'chess_local', bot: 'witch', botName: 'Witch', color: 'b', moves: ['e2e4'], base: 0, inc: 0 });
  assert.ok(hub.playingLocal('ann') && hub.playing('ann'), '"Playing Kanji chess", watchable');
  let told = false;
  assert.equal(hub.watch('bob', 'ann', () => { told = true; }), null);
  const first = sent.filter(([to]) => to === 'bob').at(-1)![1];
  assert.ok(told && first.room!.black.id === 'ann' && first.room!.white.id === 'bot:witch' && first.room!.moves.join() === 'e2e4');
  await hub.handle(ann, { type: 'chess_local', bot: 'witch', color: 'b', moves: ['e2e4', 'e7e5', 'bogus!'] });
  assert.deepEqual(sent.filter(([to]) => to === 'bob').at(-1)![1].room!.moves, ['e2e4', 'e7e5'], 'each move reaches the watcher (nonsense dropped)');
  await hub.handle(ann, { type: 'chess_local', bot: 'witch', color: 'b', moves: ['e2e4', 'e7e5'], result: { winner: 'b', reason: 'resigned' } });
  assert.equal(sent.filter(([to]) => to === 'bob').at(-1)![1].room!.status, 'over');
  await hub.handle(ann, { type: 'chess_local', end: true });
  assert.equal(sent.filter(([to]) => to === 'bob').at(-1)![1].type, 'chess_error', 'the watcher is told the game is over');
  assert.equal(hub.playingLocal('ann'), false);
  assert.ok(src('src/server/Session.ts').includes('this.hub.chess?.playingLocal(friendId)'), 'the Session lets friends watch it');
  const c = src('src/client/chess.ts');
  assert.ok(c.includes("reportLocal(); // (round 4: each move, for friends watching)") && c.includes("if (spectating) { chessSpectate('', ''); return; }"), 'every move told; a watcher whose game ended stops asking');
});

test('0.9.9.9.9.7 round 4: Grammar — furigana over every kanji of a pattern; the sentence first, then Fumi; the side panel\'s dictionary', async () => {
  const { GRAMMAR, patternFurigana } = await import('../src/shared/grammar');
  for (const g of GRAMMAR) {
    const f = patternFurigana(g.pattern);
    assert.ok(!/[一-鿿]/.test(f.replace(/\{[^}]*\}/g, '')), `${g.pattern}: every kanji with its reading`);
  }
  assert.equal(patternFurigana('〜を余儀なくされる'), '〜を{余儀|よぎ}なくされる');
  assert.equal(patternFurigana('〜一方(で)'), '〜{一方|いっぽう}(で)');
  assert.ok(src('src/client/grammarui.ts').includes("patternEl('b', 'gr-pat', g.pattern)") && src('src/client/clash.ts').includes("patternEl('span', 'gc-why-pat', q.why.pattern)"));
});

test('0.9.9.9.9.7 round 4: your character says the words you cast — its recordings from their own site, kept once heard', async () => {
  const { spokenWord, wordClipUrl, WORD_VOICE_ORIGIN } = await import('../src/shared/wordvoice');
  const { lineHash } = await import('../src/shared/chesslines');
  assert.equal(spokenWord('会う', 'あう'), 'あう');
  assert.equal(spokenWord('あ', 'a'), 'あ', 'the kana levels say the kana');
  assert.equal(wordClipUrl('witch', 'あう'), `https://mashxur-lee.github.io/kanji-wizards-voices/words/witch/${lineHash('あう')}.mp3`);
  const { securityHeaders } = await import('../src/server/security');
  const csp = securityHeaders([], true)['Content-Security-Policy'];
  assert.ok(csp.includes(`media-src 'self' data: blob: ${WORD_VOICE_ORIGIN}`) && csp.includes(`connect-src 'self' https://api.github.com ${WORD_VOICE_ORIGIN}`), 'the page may load them');
  const main = src('src/client/main.ts');
  assert.ok(main.includes('void voice.speakWord(kana)') && main.includes('prefetchWords(msg.pool)') && main.includes('setWordCharacter(characterOf(p.unlocks))'));
  assert.ok(src('src/client/voice.ts').includes('if (await playWord(kana, prefs.vol)) return;\n  return speak(kana);'), 'the device\'s voice when the clip isn\'t there');
  assert.ok(existsSync(join('scripts', 'wordvoices.mts')));
});

test('0.9.9.9.9.7 round 4: Song lyrics — the words as the recordings sing them, timed; letters marked as they are typed; a wave line between lines', async () => {
  const { SONGS, playable, songTimeline } = await import('../src/shared/songs');
  const ready = SONGS.filter(playable);
  assert.ok(ready.length >= 4, 'four songs play');
  for (const s of ready) {
    const tl = songTimeline(s);
    for (let i = 0; i < tl.length; i++) {
      assert.ok(tl[i].end > tl[i].start, `${s.id}: line ${tl[i].i} takes time`);
      if (i) assert.ok(tl[i].start > tl[i - 1].start, `${s.id}: lines in order`);
    }
    assert.ok(tl[tl.length - 1].end <= s.length);
  }
  const koi = SONGS.find((s) => s.id === 'koi-no-mahou')!;
  assert.ok(koi.lines[1].jp.includes('{届|とど}けたい') && koi.lines.some((l) => l.unsure), 'the words as sung; the unclear lines shown, not typed');
  // a line's own end: the gap after it, until the next line (the wave line shows there)
  const s = SONGS.find((x) => x.id === 'shiroi-tegami')!;
  const last = songTimeline(s).at(-1)!;
  assert.equal(last.end, 84.2);
  const c = src('src/client/songs.ts');
  assert.ok(c.includes("el.append(h('i', `sl ${good ? 'good' : 'bad'}`, ch));"), 'each letter green or red, in its slot');
  assert.ok(!c.includes('value.slice(0, -1)'), 'a wrong letter isn\'t refused');
  assert.ok(c.includes("$('songLine').classList.toggle('gap', gap);") && c.includes('createMediaElementSource'), 'the wave line from the music');
  const html = src('public/index.html');
  for (const id of ['songPrev', 'songToggle', 'songReplay', 'songNext', 'songHint', 'songWave', 'songClock', 'songCount']) assert.ok(html.includes(`id="${id}"`), id);
});

test('0.9.9.9.9.7 round 4: phones get their animations back — only a phone that can\'t keep up (body.lowfx) has them stopped; tours follow their part', () => {
  const css = src('public/style.css');
  assert.ok(css.includes('body.lowfx .menu-veil, body.lowfx .menu-veil * { animation: none !important; }'));
  assert.ok(css.includes('body.lowfx .fx-mist, body.lowfx .fx-rays, body.lowfx .fx-ring { animation: none !important; }'));
  assert.ok(!/@media \(pointer: coarse\) \{\n  \.menu-veil, \.menu-veil \* \{ animation: none/.test(css), 'not for every phone any more');
  const perf = src('src/client/perf.ts');
  assert.ok(perf.includes("types.includes('long-animation-frame')") && perf.includes('const KEEP_MS = 3 * 86_400_000;'), 'measured again, and watched while playing');
  assert.ok(src('src/client/tutorial.ts').includes("addEventListener('scroll', follow, true);"), 'the tour\'s light follows its part');
  assert.ok(!/@media[^{]*prefers-reduced-motion/.test(css), "animations run even with the OS animations off");
});
