// The dictionary (0.9.9.7), Takoboto-style: one box — kanji, kana, romaji or English — and a list of matches
// with their readings, level and meanings. Open one for everything about it: every meaning by part of speech,
// the forms of a verb or adjective, an example sentence, each kanji (meaning, readings, parts, memory picture,
// stroke order) and other words written with it — and add it to any of your decks.
import { api } from './api';
import { Dictionary, exactMatch, type DictData, type DictEntry } from '../shared/dict';
import type { VocabEntry } from '../shared/protocol';
import * as idb from './offline/idb';
import { conjugate } from './conjugate';
import { DECK_LABEL } from './decks';
import { exampleFor } from './examples';
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
let lastQ = '', lastHits: DictEntry[] = [], shown = 30;
let busy = 0;
// 0.9.9.7.1: the dictionary comes with the app (cached for offline use) and is searched right here
let dictP: Promise<Dictionary> | null = null;
// 0.9.9.7.3: the whole dictionary can be kept on the device (IndexedDB) — asked once; after that it needs no internet
// at all, even in the apps (they show the website, whose cache can be emptied). DICT_V changes with the data.
const DICT_V = 'jmdict-2026-10-26+phrases';
const OFFLINE_PREF = 'kb:dictOffline'; // 'yes' | 'no' (asked when unset)
const offlinePref = () => { try { return localStorage.getItem(OFFLINE_PREF); } catch { return null; } };
const setOfflinePref = (v: 'yes' | 'no') => { try { localStorage.setItem(OFFLINE_PREF, v); } catch { /* private mode */ } };
type Stored = { v: string; dict: DictData; vocab: VocabEntry[] };
async function storedDict(): Promise<Stored | null> {
  const s = await idb.get<Stored>('dict:all').catch(() => undefined);
  return s && s.dict?.words?.length ? s : null;
}
/** download the dictionary (and the game's word list) with progress, and keep it on the device */
async function downloadDict(onProgress: (done: number, total: number) => void): Promise<Stored> {
  const r = await fetch(`/dict.json?v=${encodeURIComponent(DICT_V)}`, { cache: 'no-store' });
  if (!r.ok || !r.body) throw new Error(`dict ${r.status}`);
  const total = Number(r.headers.get('content-length')) || 2_500_000;
  const reader = r.body.getReader();
  const chunks: Uint8Array[] = [];
  let done = 0;
  for (;;) {
    const { value, done: end } = await reader.read();
    if (end) break;
    chunks.push(value); done += value.length; onProgress(done, Math.max(total, done));
  }
  const text = new TextDecoder().decode(await new Blob(chunks as BlobPart[]).arrayBuffer());
  const dict = JSON.parse(text) as DictData;
  const m = await import('./offline/vocab');
  await m.loadVocab().catch(() => { /* the game's words are optional */ });
  const stored: Stored = { v: DICT_V, dict, vocab: [...m.VOCAB] };
  await idb.set('dict:all', stored);
  return stored;
}
export function dictionary(): Promise<Dictionary> {
  dictP ??= (async () => {
    const kept = await storedDict();
    if (kept) {
      if (kept.v !== DICT_V && navigator.onLine) void downloadDict(() => {}).then((s) => { dictP = Promise.resolve(build(s.dict, s.vocab)); }).catch(() => {}); // a newer one, quietly
      return build(kept.dict, kept.vocab);
    }
    const [data, vocab] = await Promise.all([fetch('/dict.json').then((r) => { if (!r.ok) throw new Error(`dict ${r.status}`); return r.json(); }), import('./offline/vocab').then(async (m) => { await m.loadVocab(); return m.VOCAB; })]);
    return build(data, vocab);
  })().catch((e) => { dictP = null; throw e; });
  return dictP;
}
function build(data: DictData, vocab: readonly VocabEntry[]) { const d = new Dictionary(data, vocab); tags = d.tags; return d; }

/** the first visit: keep the dictionary on this device? */
/** "Use the dictionary offline?" — asked once (0.9.9.9: in the side panel the first time it opens) */
export async function askOffline(into: HTMLElement = $('dictBody')): Promise<void> {
  if (offlinePref() || await storedDict()) return;
  const card = h('div', 'dict-home dict-offline');
  card.append(h('h4', '', tr('Use the dictionary offline?')), h('p', 'hint', tr('Download every word and phrase (about 2.5 MB) to this device — then the dictionary works without internet, anywhere.')));
  const bar = h('div', 'dl-bar'); const fill = h('i'); bar.append(fill); bar.hidden = true;
  const yes = h('button', 'pill primary', tr('Download'), { type: 'button' }) as HTMLButtonElement;
  const no = h('button', 'pill', tr('Not now'), { type: 'button' });
  const row = h('div', 'dict-tries'); row.append(yes, no);
  card.append(row, bar);
  into.replaceChildren(card);
  await new Promise<void>((done) => {
    no.onclick = () => { setOfflinePref('no'); done(); };
    yes.onclick = async () => {
      yes.disabled = true; bar.hidden = false;
      try {
        const s = await downloadDict((d, t) => { fill.style.width = `${Math.round((d / t) * 100)}%`; yes.textContent = `${Math.round((d / t) * 100)}%`; });
        setOfflinePref('yes');
        dictP = Promise.resolve(build(s.dict, s.vocab));
        ui.toast(tr('The dictionary is on this device now — it works offline.'), 4000);
        done();
      } catch {
        yes.disabled = false; yes.textContent = tr('Download'); bar.hidden = true;
        ui.toast(tr('The download failed — check your internet and try again.'), 4000);
      }
    };
  });
}

/** the word with its reading over it */
export function headword(w: DictEntry, cls = 'dw-head') {
  const box = h('div', cls, undefined, { lang: 'ja' });
  const main = w.kanji[0];
  if (main) { const r = h('ruby'); r.append(main, h('rt', '', w.kana[0] ?? '')); box.append(r); }
  else box.append(w.kana[0] ?? '');
  return box;
}
/** a near miss (you typed koshujin): the word with its reading, the sounds you got wrong in red — 0.9.9.7.2 */
function nearWord(w: DictEntry) {
  const box = h('div', 'dh-word dh-near', undefined, { lang: 'ja' });
  const marks = new Set(w.typo ?? []);
  const reading = h('span', 'dh-near-r');
  [...(w.kana[0] ?? '')].forEach((c, i) => reading.append(marks.has(i) ? h('b', 'dh-miss', c) : c));
  if (w.kanji[0]) box.append(w.kanji[0], h('span', 'dh-sep', ' · '), reading); else box.append(reading);
  return box;
}
export function badges(w: DictEntry) {
  const row = h('div', 'dw-tags');
  if (w.level) row.append(h('span', `dw-tag lv lv-${w.level}`, LEVEL_LABEL[w.level], { 'data-no-i18n': '' }));
  if (w.phrase) row.append(h('span', 'dw-tag phrase', tr('phrase')));
  if (w.vocabId) row.append(h('span', 'dw-tag game', tr('game word')));
  return row;
}
const posText = (pos: string[]) => pos.map((p) => tags[p] ?? p).join(', ');
export const ruOf = (w: DictEntry) => (lang() === 'ru' && w.ru.length ? w.ru : null);

async function search(q: string) {
  q = q.trim();
  const body = $('dictBody');
  if (!q) { drawHome(); return; }
  const n = ++busy;
  // 0.9.9.8: while you type, the last results stay up until the new ones are ready (no flicker after every letter)
  if (!lastHits.length) body.replaceChildren(h('p', 'hint center', tr('Searching…')));
  try {
    const d = await dictionary();
    if (n !== busy) return;
    lastQ = q; lastHits = d.search(q, 120); shown = 30;
    drawList();
  } catch {
    if (n === busy) body.replaceChildren(h('p', 'hint center', tr('The dictionary couldn’t load — open it once with internet, then it works offline too.')));
  }
}

function drawHome() {
  const home = h('div', 'dict-home');
  home.append(h('p', 'hint', tr('Type a word in kanji, kana, romaji, English or Russian. Open a word for all its meanings, its kanji with memory pictures, example sentences — and add it to your decks.')));
  // 0.9.9.7.3: offline or not — and a way to change your mind
  const status = h('p', 'hint dict-store');
  void storedDict().then((kept) => {
    if (kept) { status.textContent = `✓ ${tr('Saved on this device — works offline.')}`; return; }
    const b = h('button', 'pill', tr('Save it on this device for offline use'), { type: 'button' });
    b.onclick = () => { try { localStorage.removeItem(OFFLINE_PREF); } catch { /* private mode */ } void askOffline().then(drawHome); };
    status.append(b);
  });
  home.append(status);
  $('dictBody').replaceChildren(home);
}

function drawList() {
  const body = $('dictBody');
  if (!lastHits.length) { body.replaceChildren(h('p', 'hint center', `${tr('Nothing found for')} “${lastQ}”`)); return; }
  const list = h('div', 'dict-list');
  for (const w of lastHits.slice(0, shown)) {
    const card = h('button', exactMatch(w, lastQ, ruOf(w)) ? 'dict-hit exact' : 'dict-hit', undefined, { type: 'button' });
    const top = h('div', 'dh-top');
    top.append(w.typo ? nearWord(w) : headword(w, 'dh-word'), badges(w));
    if (w.form) top.append(h('span', 'dh-form', `← ${w.form.split(' · ').map((x) => tr(x)).join(' · ')}`));
    const ru = ruOf(w);
    const means = h('ol', 'dh-means');
    (ru ?? w.senses.map((s) => s[1])).slice(0, 3).forEach((m) => means.append(h('li', '', m, { 'data-no-i18n': '' })));
    card.append(top, means);
    card.onclick = () => void openWord(w.i);
    list.append(card);
  }
  const kids: Node[] = [h('p', 'hint dict-count', `${lastHits.length}${lastHits.length >= 120 ? '+' : ''} ${tr(lastHits.length === 1 ? 'match' : 'matches')}`), list];
  if (lastHits.length > shown) {
    const more = h('button', 'pill dict-more', tr('Show more'), { type: 'button' });
    more.onclick = () => { shown += 30; drawList(); };
    kids.push(more);
  }
  body.replaceChildren(...kids);
  body.scrollTop = 0;
}

async function openWord(i: number) {
  const body = $('dictBody');
  body.replaceChildren(h('p', 'hint center', tr('Loading…')));
  const d = await dictionary().catch(() => null);
  const w = d?.get(i);
  if (!d || !w) { body.replaceChildren(h('p', 'hint center', tr('No such word'))); return; }
  const chars0 = [...new Set([...(w.kanji[0] ?? '')].filter((c) => HAN.test(c)))];
  const r = { withKanji: Object.fromEntries(chars0.map((c) => [c, d.withKanji(c, 8).filter((x) => x.i !== w.i)])) as Record<string, DictEntry[]> };
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

  // forms of a verb / adjective — 0.9.9.7.2: always shown, each with its reading
  const pos = w.senses[0]?.[0] ?? [];
  const forms = conjugate(w.kanji[0] ?? w.kana[0] ?? '', pos);
  if (forms.length) {
    const readings = w.kanji[0] ? conjugate(w.kana[0] ?? '', pos) : [];
    const t = h('table', 'dw-table');
    forms.forEach(([label, f], n) => {
      const row = h('tr');
      const cell = h('td', '', undefined, { lang: 'ja' });
      cell.append(h('span', 'dw-f', f));
      const kana = readings[n]?.[1];
      if (kana && kana !== f) cell.append(h('span', 'dw-fk', kana));
      row.append(h('th', '', tr(label)), cell);
      t.append(row);
    });
    sec('Forms').append(t);
  }

  // phrases with the word in them (名前を呼ぶ …)
  const phrases = d.phrasesWith(w, 10);
  if (phrases.length) {
    const box = h('div', 'dw-phrases');
    for (const p of phrases) {
      const b = h('button', 'dw-phrase', undefined, { type: 'button' });
      const jp = h('span', 'dwp-jp', undefined, { lang: 'ja' });
      jp.append(p.kanji[0] ?? p.kana[0] ?? '');
      if (p.kanji[0]) jp.append(h('small', '', p.kana[0] ?? ''));
      b.append(jp, h('span', 'dwp-m', ruOf(p)?.[0] ?? p.senses[0]?.[1] ?? '', { 'data-no-i18n': '' }));
      b.onclick = () => void openWord(p.i);
      box.append(b);
    }
    sec('Phrases').append(box);
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
export function addTo(w: DictEntry) {
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

/** 0.9.9.8: the full page for one word (from the dictionary side panel) */
export function openDictWord(i: number) {
  ui.show('dict');
  void openWord(i);
}


$('dictForm').onsubmit = (e) => { e.preventDefault(); void search($<HTMLInputElement>('dictQ').value); };
{
  let t = 0;
  $('dictQ').addEventListener('input', () => { clearTimeout(t); t = window.setTimeout(() => void search($<HTMLInputElement>('dictQ').value), 90); }); // (after every letter)
  $('dictQ').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); clearTimeout(t); void search($<HTMLInputElement>('dictQ').value); } });
}
$('dictBack').onclick = () => ui.show('menu');
