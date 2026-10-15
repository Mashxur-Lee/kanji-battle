// Study decks you can open and edit (All / Struggling / Custom), adding your own words, the JLPT-style
// quiz, the reading passage, and — on the results screen — choosing where the words you missed go.
import { LEVEL_LABEL, type MissedWord } from '../shared/protocol';
import type { DeckId } from '../shared/srs';
import { api, type DeckRow, type QuizQuestion, type WordHit } from './api';
import { lang, locale, meaningIn, tr } from './i18n';
import { openStrokeDialog } from './ui';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
export const DECK_LABEL: Record<DeckId, string> = { all: 'All spells', struggling: 'Struggling spells', custom: 'Custom spells' };
const STATE_LABEL: Record<string, string> = { new: 'new', learning: 'learning', relearning: 'learning', review: 'learned' };

/** Called after a deck changed, so the study screen's counts are fresh. */
let onChanged: () => void = () => {};
let backToStudy: () => void = () => {};
/** study.ts: refresh the counts after a change; how to get back to the study screen. */
export const initDecks = (o: { changed: () => void; back: () => void }) => { onChanged = o.changed; backToStudy = o.back; };

// ── a deck's word list ──────────────────────────────────────────────────────
let open: DeckId = 'all';
let rows: DeckRow[] = [];
const selected = new Set<string>();

export async function openDeck(deck: DeckId, withAdd = false) {
  open = deck;
  selected.clear();
  $('deckTitle').textContent = DECK_LABEL[deck];
  $('customPanel').hidden = !(deck === 'custom' && withAdd);
  $<HTMLInputElement>('deckFilter').value = '';
  $('customMsg').textContent = '';
  $('customHits').replaceChildren();
  $<HTMLDialogElement>('deckDialog').showModal();
  if (!$('customPanel').hidden) $<HTMLInputElement>('customSearch').focus();
  await reload();
}

async function reload() {
  try { rows = (await api.deckWords(open)).words; } catch (e) { ui.toast((e as Error).message); rows = []; }
  for (const id of [...selected]) if (!rows.some((r) => r.vocabId === id)) selected.delete(id);
  render();
}

const dateOf = (t: number | null) => (t ? new Date(t).toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' }) : '—');

function render() {
  const f = $<HTMLInputElement>('deckFilter').value.trim().toLowerCase();
  const shown = rows.filter((r) => !f || r.kanji.includes(f) || r.reading.includes(f) || r.meaning.toLowerCase().includes(f) || meaningIn(r.meaning).toLowerCase().includes(f));
  $('deckCount').textContent = `${rows.length} ${rows.length === 1 ? 'spell' : 'spells'}`;
  $('deckRows').replaceChildren(...shown.slice(0, 400).map((r) => {
    const box = el('input', '', undefined, { type: 'checkbox', 'aria-label': `Select ${r.kanji}` }) as HTMLInputElement;
    box.checked = selected.has(r.vocabId);
    box.onchange = () => { box.checked ? selected.add(r.vocabId) : selected.delete(r.vocabId); tools(); };
    const k = el('td', 'k clickable', r.kanji, { lang: 'ja', title: 'Stroke order' });
    k.onclick = () => openStrokeDialog(r.kanji, r.reading, r.meaning);
    const del = el('button', 'pill danger small', '✕', { title: 'Remove from this deck', 'aria-label': `Remove ${r.kanji}` });
    del.onclick = () => void remove([r.vocabId]);
    const tr_ = el('tr');
    const td = (n: Node) => { const c = el('td'); c.append(n); return c; };
    tr_.append(td(box), k, el('td', 'rd', r.reading, { lang: 'ja' }), el('td', 'm', r.meaning), el('td', 'dlv', r.custom ? 'Custom' : LEVEL_LABEL[r.level]),
      el('td', 'dt', dateOf(r.addedAt)), el('td', `st st-${r.state}`, STATE_LABEL[r.state] ?? r.state), td(del));
    return tr_;
  }));
  if (!rows.length) $('deckRows').replaceChildren(el('tr', 'empty', undefined));
  if (!rows.length) $('deckRows').firstElementChild!.append(Object.assign(el('td', 'hint', open === 'custom' ? 'No custom spells yet — search the dictionary above or type your own word.' : 'No spells in this deck yet.'), { colSpan: 8 }));
  tools();
}
function tools() {
  $<HTMLButtonElement>('deckRemove').disabled = selected.size === 0;
  $('deckRemove').textContent = selected.size ? `Remove selected (${selected.size})` : 'Remove selected';
  $<HTMLInputElement>('deckAllBox').checked = rows.length > 0 && selected.size === rows.length;
}

async function remove(ids: string[]) {
  if (!ids.length) return;
  if (ids.length > 1 && !confirm(`Remove ${ids.length} spells from ${DECK_LABEL[open]}? Their study progress in this deck is lost.`)) return;
  try {
    await api.deckRemove(open, ids);
    ids.forEach((i) => selected.delete(i));
    await reload();
    onChanged();
  } catch (e) { ui.toast((e as Error).message); }
}

$('deckFilter').addEventListener('input', render);
$('deckAllBox').addEventListener('change', () => {
  if ($<HTMLInputElement>('deckAllBox').checked) rows.forEach((r) => selected.add(r.vocabId)); else selected.clear();
  render();
});
$('deckRemove').onclick = () => void remove([...selected]);
$('deckClose').onclick = () => $<HTMLDialogElement>('deckDialog').close();
for (const b of document.querySelectorAll<HTMLElement>('.deck-open')) b.onclick = () => void openDeck(b.dataset.deck as DeckId);
$('customAdd').onclick = () => void openDeck('custom', true);

// ── adding custom spells: search the dictionary, or type your own ────────────
let searchSeq = 0;
let searchTimer = 0;
$('customSearch').addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = window.setTimeout(async () => {
    const q = $<HTMLInputElement>('customSearch').value.trim();
    const seq = ++searchSeq;
    if (!q) { $('customHits').replaceChildren(); return; }
    try {
      const { words } = await api.searchWords(q);
      if (seq !== searchSeq) return;
      const have = new Set(rows.map((r) => r.vocabId));
      $('customHits').replaceChildren(...(words.length ? words.map((w) => hit(w, have.has(w.id))) : [el('p', 'hint', 'Not in the dictionary — add it as your own word below.')]));
      if (!words.length) { $<HTMLInputElement>('cwKanji').value = /[一-鿿ぁ-ゟァ-ヿ]/.test(q) ? q : ''; }
    } catch (e) { ui.toast((e as Error).message); }
  }, 220);
});
function hit(w: WordHit, have: boolean) {
  const b = el('button', 'hit' + (have ? ' have' : ''), undefined, { type: 'button' }) as HTMLButtonElement;
  b.append(el('b', '', w.kanji, { lang: 'ja' }), el('span', 'rd', w.reading, { lang: 'ja' }), el('span', 'm', w.meaning), el('span', 'lv', LEVEL_LABEL[w.level]), el('span', 'add', have ? '✓ added' : '+ Add'));
  b.disabled = have;
  b.onclick = async () => {
    try {
      const r = await api.addCustom({ vocabId: w.id });
      b.classList.add('have'); b.disabled = true; b.querySelector('.add')!.textContent = '✓ added';
      $('customMsg').textContent = r.added ? `${w.kanji} added to Custom spells.` : `${w.kanji} is already in Custom spells.`;
      await reload(); onChanged();
    } catch (e) { $('customMsg').textContent = (e as Error).message; }
  };
  return b;
}
$('customForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const kanji = $<HTMLInputElement>('cwKanji').value, reading = $<HTMLInputElement>('cwReading').value, meaning = $<HTMLInputElement>('cwMeaning').value;
  try {
    const r = await api.addCustom({ kanji, reading, meaning });
    $('customMsg').textContent = r.added ? `${r.word.kanji} (${r.word.reading}) added to Custom spells.` : `${r.word.kanji} is already in Custom spells.`;
    for (const id of ['cwKanji', 'cwReading', 'cwMeaning']) $<HTMLInputElement>(id).value = '';
    await reload(); onChanged();
  } catch (err) { $('customMsg').textContent = (err as Error).message; }
});

// ── results: where do the words you missed go? ──────────────────────────────
/**
 * The server already put the missed words in Struggling spells (pre-ticked). Untick a word to take it
 * out again, or pick another deck to move them there. Words that were in the deck before stay put.
 */
export function showMissedSave(missed: MissedWord[]) {
  const box = $('missedSave');
  if (!missed.length) { box.hidden = true; return; }
  let deck: DeckId = 'struggling';
  const ticked = new Set(missed.map((m) => m.id));
  let ours = new Set(missed.filter((m) => m.added).map((m) => m.id)); // put in `deck` by this game (safe to take out again)
  const status = el('span', 'ms-status hint');
  const say = (t: string) => { status.textContent = t; };
  const sync = async (id: string, on: boolean) => {
    try {
      if (on) { const r = await api.deckAdd(deck, [id]); r.added.forEach((x) => ours.add(x)); }
      else if (ours.has(id)) { await api.deckRemove(deck, [id]); ours.delete(id); }
      say(`${ticked.size} of ${missed.length} in ${tr(DECK_LABEL[deck])}`);
    } catch (e) { say((e as Error).message); }
  };
  const chips = missed.map((m) => {
    const l = el('label', 'ms-word on');
    const c = el('input', '', undefined, { type: 'checkbox' }) as HTMLInputElement;
    c.checked = true;
    c.onchange = () => { c.checked ? ticked.add(m.id) : ticked.delete(m.id); l.classList.toggle('on', c.checked); void sync(m.id, c.checked); };
    l.append(c, el('b', '', m.kanji, { lang: 'ja' }), el('small', '', m.reading, { lang: 'ja' }));
    l.title = m.meaning;
    return l;
  });
  const sel = el('select', 'ms-deck', undefined, { 'aria-label': 'Save to' }) as HTMLSelectElement;
  for (const d of ['struggling', 'all', 'custom'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  sel.value = deck;
  sel.onchange = async () => {
    const to = sel.value as DeckId;
    sel.disabled = true;
    try {
      if (ours.size) await api.deckRemove(deck, [...ours]);
      deck = to;
      ours = new Set((await api.deckAdd(deck, [...ticked])).added);
      say(`${ticked.size} of ${missed.length} in ${tr(DECK_LABEL[deck])}`);
    } catch (e) { say((e as Error).message); }
    sel.disabled = false;
  };
  const story = el('button', 'pill', 'Read them in a story');
  story.onclick = () => openPassage(missed.map((m) => ({ kanji: m.kanji, reading: m.reading, meaning: m.meaning })));
  const head = el('div', 'ms-head');
  head.append(el('span', '', 'Save these words to'), sel, status, story);
  box.replaceChildren(head, Object.assign(el('div', 'ms-words'), {}));
  box.lastElementChild!.append(...chips);
  say(`${ticked.size} of ${missed.length} in ${tr(DECK_LABEL[deck])}`);
  box.hidden = false;
}

// ── JLPT-style quiz ─────────────────────────────────────────────────────────
const ASK: Record<QuizQuestion['kind'], [string, string]> = {
  reading: ['＿＿のことばの読み方として最もよいものを選びなさい。', 'Choose the best reading for the word.'],
  meaning: ['このことばの意味として最もよいものを選びなさい。', 'Choose the best meaning for the word.'],
  kanji: ['＿＿のことばを漢字で書くとき、最もよいものを選びなさい。', 'Choose the right kanji for the word.'],
};
let quiz: QuizQuestion[] = [];
let qi = 0;
let score = 0;
let answered = false;
const wrong: QuizQuestion[] = [];

export async function startQuiz() {
  ui.show('quiz');
  $('quizDone').hidden = true;
  $('quizCard').hidden = false;
  $('quizPrompt').textContent = '…';
  try { quiz = (await api.quiz(10)).questions; } catch (e) { ui.toast((e as Error).message); quiz = []; }
  if (quiz.length < 1) {
    $('quizCard').hidden = true; $('quizDone').hidden = false;
    $('quizResult').textContent = 'Study some spells first — the quiz uses the words you have studied.';
    $('quizMissed').replaceChildren();
    return;
  }
  qi = 0; score = 0; wrong.length = 0;
  question();
}

function question() {
  const q = quiz[qi];
  answered = false;
  $('quizProgress').textContent = `Question ${qi + 1} of ${quiz.length}`;
  $('quizScore').textContent = `${score} correct`;
  const [ja, en] = ASK[q.kind];
  $('quizAsk').replaceChildren(el('span', 'ja', ja, { lang: 'ja' }), el('small', '', en));
  $('quizPrompt').textContent = q.prompt;
  $('quizPrompt').classList.toggle('underline', q.kind !== 'meaning');
  $('quizSub').textContent = q.sub ? meaningIn(q.sub) : '';
  $('quizFeedback').textContent = '';
  $('quizFeedback').className = 'quiz-feedback';
  $('quizNext').hidden = true;
  $('quizChoices').replaceChildren(...q.choices.map((c, i) => {
    const b = el('button', 'quiz-choice', undefined, { type: 'button' }) as HTMLButtonElement;
    b.append(el('span', 'n', String(i + 1)), el('span', 't', q.kind === 'meaning' ? meaningIn(c) : c, q.kind === 'meaning' ? {} : { lang: 'ja' }));
    b.onclick = () => choose(i);
    return b;
  }));
}

function choose(i: number) {
  if (answered) return;
  answered = true;
  const q = quiz[qi];
  const ok = i === q.answer;
  if (ok) score++; else wrong.push(q);
  const btns = [...document.querySelectorAll<HTMLButtonElement>('#quizChoices .quiz-choice')];
  btns.forEach((b, j) => { b.disabled = true; b.classList.toggle('right', j === q.answer); b.classList.toggle('wrong', j === i && !ok); });
  $('quizFeedback').textContent = ok ? '✓ Correct!' : `✗ The answer is ${q.kind === 'meaning' ? meaningIn(q.choices[q.answer]) : q.choices[q.answer]}`;
  $('quizFeedback').className = `quiz-feedback ${ok ? 'ok' : 'no'}`;
  $('quizScore').textContent = `${score} correct`;
  $('quizNext').hidden = false;
  $('quizNext').focus();
}

function nextQuestion() {
  if (!answered) return;
  qi++;
  if (qi < quiz.length) return question();
  $('quizCard').hidden = true;
  $('quizDone').hidden = false;
  $('quizResult').textContent = `${score} / ${quiz.length} correct${score === quiz.length ? ' — perfect!' : ''}`;
  const box = $('quizMissed');
  if (!wrong.length) { box.replaceChildren(); return; }
  const sel = el('select', 'ms-deck') as HTMLSelectElement;
  for (const d of ['struggling', 'all', 'custom'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  const save = el('button', 'pill', 'Add the ones I missed') as HTMLButtonElement;
  const msg = el('span', 'hint');
  save.onclick = async () => {
    try { const r = await api.deckAdd(sel.value as DeckId, wrong.map((q) => q.vocabId)); msg.textContent = `${r.added.length} added to ${tr(DECK_LABEL[sel.value as DeckId])}.`; save.disabled = true; onChanged(); }
    catch (e) { msg.textContent = (e as Error).message; }
  };
  const head = el('div', 'ms-head');
  head.append(el('span', '', `You missed ${wrong.length}:`), sel, save, msg);
  const list = el('div', 'ms-words');
  list.append(...wrong.map((q) => el('span', 'ms-word on', q.kind === 'kanji' ? q.choices[q.answer] : q.prompt, { lang: 'ja' })));
  box.replaceChildren(head, list);
}

$('quizNext').onclick = nextQuestion;
$('quizAgain').onclick = () => void startQuiz();
$('quizBack').onclick = () => backToStudy();
$('quizDoneBack').onclick = () => backToStudy();
$('quizBtn').onclick = () => void startQuiz();
addEventListener('keydown', (e) => {
  if ($('quiz').hidden || e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  const n = ['1', '2', '3', '4'].indexOf(e.key);
  if (n >= 0 && !answered) { e.preventDefault(); choose(n); }
  else if ((e.key === 'Enter' || e.key === ' ') && answered) { e.preventDefault(); nextQuestion(); }
});

// ── reading passage ─────────────────────────────────────────────────────────
// A little story about Haru, an apprentice wizard. Every sentence quotes one of your words (「…」), so it
// stays good Japanese whatever the word is. [漢字|かな] = furigana for the story's own kanji.
interface Line { ja: string; en: string; ru: string }
const OPEN: Line = { ja: '[魔法|まほう][学校|がっこう]の[一日|いちにち]。', en: 'A day at the school of magic.', ru: 'Один день в школе магии.' };
const LINES: Line[] = [
  { ja: '[見習|みなら]い[魔法使|まほうつか]いのハルは、[朝|あさ]から「{w}」という[呪文|じゅもん]を[練習|れんしゅう]していた。', en: 'Haru, an apprentice wizard, had been practising the spell “{w}” since morning.', ru: 'Ученица-волшебница Хару с самого утра тренировала заклинание «{w}».' },
  { ja: '[師匠|ししょう]は「{w}」と[書|か]かれた[古|ふる]い[巻物|まきもの]を[机|つくえ]に[置|お]いた。', en: 'The master put an old scroll with “{w}” written on it on the desk.', ru: 'Учитель положил на стол старый свиток с надписью «{w}».' },
  { ja: 'ハルは「{w}」の[読|よ]み[方|かた]を[三回|さんかい][声|こえ]に[出|だ]して[言|い]った。', en: 'Haru said the reading of “{w}” out loud three times.', ru: 'Хару трижды произнесла вслух чтение слова «{w}».' },
  { ja: '[友達|ともだち]のケンは「{w}」という[言葉|ことば]をまだ[覚|おぼ]えていなかった。', en: 'Her friend Ken still hadn’t learned the word “{w}”.', ru: 'Её друг Кен ещё не выучил слово «{w}».' },
  { ja: '[図書館|としょかん]の[本|ほん]には「{w}」についての[話|はなし]がたくさんあった。', en: 'The library books had many stories about “{w}”.', ru: 'В библиотечных книгах было много историй о «{w}».' },
  { ja: '「{w}」の[意味|いみ]を[思|おも]い[出|だ]すと、[杖|つえ]の[宝石|ほうせき]が[明|あか]るく[光|ひか]った。', en: 'When she remembered the meaning of “{w}”, the gem on her staff shone brightly.', ru: 'Когда она вспомнила значение «{w}», камень на посохе ярко засиял.' },
  { ja: '[戦|たたか]いの[中|なか]で、ドラゴンは「{w}」の[呪文|じゅもん]に[驚|おどろ]いて[後|うし]ろへ[下|さ]がった。', en: 'In the battle, the dragon was startled by the spell “{w}” and stepped back.', ru: 'В бою дракон испугался заклинания «{w}» и отступил.' },
  { ja: '「{w}」を[間違|まちが]えないように、ハルはゆっくり[答|こた]えた。', en: 'So as not to get “{w}” wrong, Haru answered slowly.', ru: 'Чтобы не ошибиться в «{w}», Хару отвечала медленно.' },
  { ja: '[夜|よる]になっても、ハルはノートに「{w}」を[何度|なんど]も[書|か]いた。', en: 'Even at night, Haru wrote “{w}” in her notebook again and again.', ru: 'Даже ночью Хару снова и снова писала «{w}» в тетради.' },
  { ja: '[師匠|ししょう]は[笑|わら]って、「{w}」はもう[大丈夫|だいじょうぶ]だねと[言|い]った。', en: 'The master smiled and said that “{w}” was fine now.', ru: 'Учитель улыбнулся и сказал, что с «{w}» теперь всё в порядке.' },
  { ja: '[次|つぎ]の[日|ひ]、ハルは「{w}」を[使|つか]って、[闇|やみ]の[魔物|まもの]を[倒|たお]した。', en: 'The next day, Haru used “{w}” to defeat a shadow monster.', ru: 'На следующий день Хару с помощью «{w}» победила тёмное чудовище.' },
  { ja: 'みんなの[前|まえ]で「{w}」と[唱|とな]えると、[空|そら]に[虹|にじ]が[出|で]た。', en: 'When she chanted “{w}” in front of everyone, a rainbow appeared in the sky.', ru: 'Когда она произнесла «{w}» перед всеми, в небе появилась радуга.' },
];
const CLOSE: Line = { ja: 'こうして、ハルの[魔法|まほう]はまた[少|すこ]し[強|つよ]くなった。', en: 'And so Haru’s magic grew a little stronger again.', ru: 'Так магия Хару стала ещё немного сильнее.' };

type PWord = { kanji: string; reading: string; meaning: string };
let passageWords: PWord[] = [];

/** Japanese line with furigana (ruby) and the word slot as a tappable highlight. */
function jaLine(line: Line, w: PWord | null, i: number) {
  const p = el('span', 'p-line');
  const parts = line.ja.split(/(\[[^\]|]+\|[^\]]+\]|\{w\})/);
  for (const part of parts) {
    if (!part) continue;
    const ruby = /^\[([^\]|]+)\|([^\]]+)\]$/.exec(part);
    if (ruby) { const r = el('ruby'); r.append(ruby[1], el('rt', '', ruby[2])); p.append(r); continue; }
    if (part === '{w}' && w) {
      const b = el('button', 'p-word', undefined, { type: 'button', 'data-i': String(i) });
      const r = el('ruby'); r.append(w.kanji, el('rt', '', w.kanji === w.reading ? '' : w.reading));
      b.append(r);
      b.onclick = () => gloss(w, b);
      p.append(b);
      continue;
    }
    p.append(part);
  }
  return p;
}
function gloss(w: PWord, at: HTMLElement) {
  document.querySelectorAll('.p-word.on').forEach((x) => x.classList.remove('on'));
  at.classList.add('on');
  const g = $('passageGloss');
  g.replaceChildren(el('b', '', w.kanji, { lang: 'ja' }), el('span', 'rd', w.reading, { lang: 'ja' }), el('span', 'm', meaningIn(w.meaning)));
  g.hidden = false;
}

export function openPassage(words: PWord[]) {
  passageWords = words.filter((w) => w.kanji).slice(0, 40);
  $<HTMLDialogElement>('passageDialog').showModal();
  buildPassage();
}
function buildPassage() {
  const pick = [...passageWords].sort(() => Math.random() - 0.5).slice(0, Math.min(8, LINES.length));
  // keep the story in order: the chosen sentences in their LINES order
  const lines = [...LINES.keys()].sort(() => Math.random() - 0.5).slice(0, pick.length).sort((a, b) => a - b).map((i) => LINES[i]);
  const text = $('passageText');
  text.replaceChildren(jaLine(OPEN, null, -1), ...lines.map((l, i) => jaLine(l, pick[i], i)), jaLine(CLOSE, null, -1));
  const ru = lang() === 'ru';
  const fill = (l: Line, w: PWord | null) => (ru ? l.ru : l.en).replace('{w}', w ? `${w.kanji} — ${meaningIn(w.meaning)}` : '');
  $('passageTr').replaceChildren(...[fill(OPEN, null), ...lines.map((l, i) => fill(l, pick[i])), fill(CLOSE, null)].map((t) => el('p', '', t, { 'data-no-i18n': '' })));
  $('passageWords').replaceChildren(el('h4', '', 'Words in this story'), ...pick.map((w) => {
    const row = el('div', 'pw');
    row.append(el('b', '', w.kanji, { lang: 'ja' }), el('span', 'rd', w.reading, { lang: 'ja' }), el('span', 'm', meaningIn(w.meaning)));
    return row;
  }));
  $('passageGloss').hidden = true;
  if (!pick.length) text.replaceChildren(el('p', 'hint', 'No words yet — the story uses your struggling spells (or the words you missed in a game).'));
}
$('passageNew').onclick = buildPassage;
$('passageClose').onclick = () => $<HTMLDialogElement>('passageDialog').close();
$('passageBtn').onclick = async () => {
  try {
    let words = (await api.deckWords('struggling')).words;
    if (words.length < 3) words = [...words, ...(await api.deckWords('all')).words.filter((w) => w.state !== 'new')];
    openPassage(words.slice(0, 40).map((w) => ({ kanji: w.kanji, reading: w.reading, meaning: w.meaning })));
  } catch (e) { ui.toast((e as Error).message); }
};
