// The dictionary (0.9.9.7), Takoboto-style: one box — kanji, kana, romaji or English — and a list of matches
// with their readings, level and meanings. Open one for everything about it: every meaning by part of speech,
// the forms of a verb or adjective, an example sentence, each kanji (meaning, readings, parts, memory picture,
// stroke order) and other words written with it — and add it to any of your decks.
import { api, type DictEntry } from './api';
import { conjugate } from './conjugate';
import { DECK_LABEL } from './decks';
import { exampleFor } from './examples';
import { useGameKb } from './gamekb';
import { lang, tr } from './i18n';
import { loadKanji, showKanji } from './kanjihelp';
import { LEVEL_LABEL } from '../shared/protocol';
import type { DeckId } from '../shared/srs';
import * as ui from './ui';
import { speak, voiceAvailable } from './voice';

const $ = ui.$;
const HAN = /\p{Script=Han}/u;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};

let tags: Record<string, string> = {};
let lastQ = '', lastHits: DictEntry[] = [];
let busy = 0;

/** the word with its reading over it */
function headword(w: DictEntry, cls = 'dw-head') {
  const box = h('div', cls, undefined, { lang: 'ja' });
  const main = w.kanji[0];
  if (main) { const r = h('ruby'); r.append(main, h('rt', '', w.kana[0] ?? '')); box.append(r); }
  else box.append(w.kana[0] ?? '');
  return box;
}
function badges(w: DictEntry) {
  const row = h('div', 'dw-tags');
  if (w.level) row.append(h('span', `dw-tag lv lv-${w.level}`, LEVEL_LABEL[w.level], { 'data-no-i18n': '' }));
  if (w.common) row.append(h('span', 'dw-tag common', tr('common')));
  if (w.vocabId) row.append(h('span', 'dw-tag game', tr('game word')));
  return row;
}
const posText = (pos: string[]) => pos.map((p) => tags[p] ?? p).join(', ');
const ruOf = (w: DictEntry) => (lang() === 'ru' && w.ru.length ? w.ru : null);

async function search(q: string) {
  q = q.trim();
  const body = $('dictBody');
  if (!q) { drawHome(); return; }
  const n = ++busy;
  body.replaceChildren(h('p', 'hint center', tr('Searching…')));
  try {
    const r = await api.dict(q, !Object.keys(tags).length);
    if (n !== busy) return;
    if (r.tags) tags = r.tags;
    lastQ = q; lastHits = r.words;
    drawList();
  } catch (e) {
    if (n === busy) body.replaceChildren(h('p', 'hint center', (e as Error).message));
  }
}

function drawHome() {
  $('dictBody').replaceChildren(h('div', 'dict-home', undefined),);
  const home = $('dictBody').firstElementChild!;
  home.append(h('p', 'hint', tr('Type a word in kanji, kana, romaji or English. Open a word for all its meanings, its kanji with memory pictures, example sentences — and add it to your decks.')));
  const tries = h('div', 'dict-tries');
  for (const t of ['信用', 'たべる', 'kirei', 'magic', 'ドキドキ']) {
    const b = h('button', 'pill', t, { type: 'button', lang: 'ja', 'data-no-i18n': '' });
    b.onclick = () => { $<HTMLInputElement>('dictQ').value = t; void search(t); };
    tries.append(b);
  }
  home.append(tries);
}

function drawList() {
  const body = $('dictBody');
  if (!lastHits.length) { body.replaceChildren(h('p', 'hint center', `${tr('Nothing found for')} “${lastQ}”`)); return; }
  const list = h('div', 'dict-list');
  for (const w of lastHits) {
    const card = h('button', 'dict-hit', undefined, { type: 'button' });
    const top = h('div', 'dh-top');
    top.append(headword(w, 'dh-word'), badges(w));
    const ru = ruOf(w);
    const means = h('ol', 'dh-means');
    (ru ?? w.senses.map((s) => s[1])).slice(0, 3).forEach((m) => means.append(h('li', '', m, { 'data-no-i18n': '' })));
    card.append(top, means);
    card.onclick = () => void openWord(w.i);
    list.append(card);
  }
  body.replaceChildren(h('p', 'hint dict-count', `${lastHits.length} ${tr(lastHits.length === 1 ? 'match' : 'matches')}`), list);
  body.scrollTop = 0;
}

async function openWord(i: number) {
  const body = $('dictBody');
  body.replaceChildren(h('p', 'hint center', tr('Loading…')));
  let r: Awaited<ReturnType<typeof api.dictWord>>;
  try { r = await api.dictWord(i); } catch (e) { body.replaceChildren(h('p', 'hint center', (e as Error).message)); return; }
  const w = r.word;
  const page = h('article', 'dict-word');
  const back = h('button', 'pill dict-back', `← ${tr('Results')}`, { type: 'button' });
  back.onclick = () => (lastHits.length ? drawList() : drawHome());

  // the word: big, with its reading, romaji, tags; say it; add it to a deck
  const head = h('div', 'dw-top');
  const left = h('div', 'dw-left');
  left.append(headword(w), h('div', 'dw-romaji', w.romaji, { 'data-no-i18n': '' }));
  if (w.kana.length > 1 || w.kanji.length > 1) left.append(h('div', 'dw-alt', [...w.kanji.slice(1), ...w.kana.slice(1)].join('・'), { lang: 'ja' }));
  left.append(badges(w));
  const acts = h('div', 'dw-acts');
  if (voiceAvailable()) { const s = h('button', 'pill', `🔊 ${tr('Listen')}`, { type: 'button' }); s.onclick = () => void speak(w.kana[0] ?? ''); acts.append(s); }
  acts.append(addTo(w));
  if (w.kanji[0] && HAN.test(w.kanji[0])) {
    const so = h('button', 'pill', `✍ ${tr('Stroke order')}`, { type: 'button' });
    so.onclick = () => ui.openStrokeDialog(w.kanji[0], w.kana[0] ?? '', w.senses[0]?.[1] ?? '');
    acts.append(so);
  }
  head.append(left, acts);
  page.append(back, head);

  // meanings, by part of speech
  const sec = (title: string) => { const s = h('section', 'dw-sec'); s.append(h('h4', '', tr(title))); page.append(s); return s; };
  const mean = sec('Meanings');
  let lastPos = '';
  const ol = h('ol', 'dw-senses');
  w.senses.forEach(([pos, gl, misc, info]) => {
    const p = posText(pos);
    if (p && p !== lastPos) { ol.append(h('li', 'dw-pos', p, { 'data-no-i18n': '' })); lastPos = p; }
    const li = h('li', 'dw-sense');
    li.append(h('span', '', gl, { 'data-no-i18n': '' }));
    for (const m of misc) li.append(h('span', 'dw-misc', tags[m] ?? m, { 'data-no-i18n': '' }));
    if (info) li.append(h('span', 'dw-info', info, { 'data-no-i18n': '' }));
    ol.append(li);
  });
  mean.append(ol);
  if (w.ru.length) {
    const ru = h('ol', 'dw-senses ru');
    w.ru.forEach((m) => ru.append(h('li', 'dw-sense', m, { 'data-no-i18n': '' })));
    const s = sec('In Russian');
    s.append(ru);
    if (lang() === 'ru') mean.before(s);
  }

  // an example sentence (the game's words)
  if (w.vocabId) {
    const ex = await exampleFor(w.vocabId).catch(() => null);
    if (ex) sec('Example').append(ex);
  }

  // forms of a verb / adjective
  const forms = conjugate(w.kanji[0] ?? w.kana[0] ?? '', w.senses[0]?.[0] ?? []);
  if (forms.length) {
    const d = h('details', 'dw-forms');
    d.append(h('summary', '', tr('Forms')));
    const t = h('table', 'dw-table');
    for (const [label, f] of forms) { const tr0 = h('tr'); tr0.append(h('th', '', tr(label)), h('td', '', f, { lang: 'ja' })); t.append(tr0); }
    d.append(t);
    page.append(d);
  }

  // each kanji: meaning, readings, parts — tap for its memory picture
  const chars = [...new Set([...(w.kanji[0] ?? '')].filter((c) => HAN.test(c)))];
  if (chars.length) {
    const ks = sec('Kanji');
    const info = await loadKanji();
    const ru = lang() === 'ru';
    for (const c of chars) {
      const k = info[c];
      const card = h('div', 'dw-kanji');
      const big = h('button', 'dw-kchar', c, { type: 'button', lang: 'ja', title: tr('Memory picture') });
      big.onclick = () => void showKanji(c, big);
      const meta = h('div', 'dw-kmeta');
      if (k) {
        meta.append(h('b', '', ru && k[1] ? k[1] : k[0], { 'data-no-i18n': '' }));
        const rd = h('div', 'dw-kreads', undefined, { lang: 'ja' });
        if (k[2]) rd.append(h('span', '', `${ru ? 'он' : 'on'}: ${k[2]}`, { 'data-no-i18n': '' }));
        if (k[3]) rd.append(h('span', '', `${ru ? 'кун' : 'kun'}: ${k[3]}`, { 'data-no-i18n': '' }));
        meta.append(rd);
        if (k[4].length) meta.append(h('div', 'dw-kparts', k[4].map(([pc, pen, pru]) => `${pc ? pc + ' ' : ''}${ru && pru ? pru : pen}`).join(' + '), { 'data-no-i18n': '' }));
      }
      const pic = h('button', 'pill dw-kpic', `🖼 ${tr('Memory picture')}`, { type: 'button' });
      pic.onclick = () => void showKanji(c, big);
      meta.append(pic);
      card.append(big, meta);
      const more = r.withKanji[c] ?? [];
      if (more.length) {
        const row = h('div', 'dw-with');
        row.append(h('span', 'hint', `${tr('Words with')} ${c}:`));
        for (const m of more) {
          const b = h('button', 'dw-chip', undefined, { type: 'button', lang: 'ja' });
          b.append(h('b', '', m.kanji[0] ?? m.kana[0]), h('small', '', m.kana[0] ?? ''));
          b.title = ruOf(m)?.[0] ?? m.senses[0]?.[1] ?? '';
          b.onclick = () => void openWord(m.i);
          row.append(b);
        }
        card.append(row);
      }
      ks.append(card);
    }
  }
  page.append(h('p', 'hint dw-src', 'JMdict © EDRDG (CC BY-SA 4.0)', { 'data-no-i18n': '' }));
  body.replaceChildren(page);
  window.scrollTo({ top: 0 });
}

/** "+ Add to…": any deck — a word that isn't one of the game's goes in as your own word first */
function addTo(w: DictEntry) {
  const sel = h('select', 'pill dw-add', undefined, { 'aria-label': tr('Add to a deck') }) as HTMLSelectElement;
  sel.append(Object.assign(h('option', '', `+ ${tr('Add to…')}`), { value: '' }));
  for (const d of ['all', 'struggling', 'custom'] as DeckId[]) sel.append(Object.assign(h('option', '', tr(DECK_LABEL[d])), { value: d }));
  sel.onchange = async () => {
    const deck = sel.value as DeckId;
    if (!deck) return;
    sel.disabled = true;
    const word = w.kanji[0] ?? w.kana[0] ?? '';
    try {
      let id = w.vocabId;
      if (!id || deck === 'custom') {
        const meaning = (lang() === 'ru' && w.ru[0]) || w.senses.slice(0, 2).map((s) => s[1]).join('; ');
        const r = await api.addCustom(id ? { vocabId: id } : { kanji: word, reading: w.kana[0] ?? word, meaning: meaning.slice(0, 120) });
        id = r.word.id;
        if (deck === 'custom') { ui.toast(r.added ? `${word} → ${tr(DECK_LABEL.custom)}` : `${word}: ${tr('already in')} ${tr(DECK_LABEL.custom)}`); return; }
      }
      const r = await api.deckAdd(deck, [id]);
      ui.toast(r.added.length ? `${word} → ${tr(DECK_LABEL[deck])}` : `${word}: ${tr('already in')} ${tr(DECK_LABEL[deck])}`);
    } catch (e) { ui.toast((e as Error).message); }
    finally { sel.value = ''; sel.disabled = false; }
  };
  return sel;
}

export function openDict() {
  ui.show('dict');
  const q = $<HTMLInputElement>('dictQ');
  if (!lastHits.length) drawHome();
  useGameKb(q, { raw: true });
  setTimeout(() => q.focus(), 50);
}

$('dictForm').onsubmit = (e) => { e.preventDefault(); void search($<HTMLInputElement>('dictQ').value); };
{
  let t = 0;
  $('dictQ').addEventListener('input', () => { clearTimeout(t); t = window.setTimeout(() => void search($<HTMLInputElement>('dictQ').value), 350); });
  $('dictQ').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); clearTimeout(t); void search($<HTMLInputElement>('dictQ').value); } });
}
$('dictBack').onclick = () => ui.show('menu');
