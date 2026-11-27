// 0.9.9.9.9.6 (round 4): Grammar — the JLPT grammar, lesson by lesson. Master Fumi explains each point (what it
// means, how it is formed and used, examples with furigana — each kanji tappable, each sentence spoken), then asks its
// questions; all but one right and the lesson is passed (kept on your account). Levels N5 → N1.
import { filledQuestion, GRAMMAR, GRAMMAR_LEVELS, grammarOf, passMark, plainJp, shuffled, type GrammarLevel, type GrammarPoint } from '../shared/grammar';
import { openDictionary } from './dictui';
import { toRomaji } from '../shared/kana';
import { FUMI_LINES, fumiClip, fumiLessonLine, grammarClip, parseLine } from '../shared/chesslines';
import { api } from './api';
import * as audio from './audio';
import { lang, tr } from './i18n';
import { wordsTappable } from './kanjihelp';
import { guideEl, guideMood, typeText } from './tutorguide';
import * as ui from './ui';
import { playClip, say as sayWord } from './voice';
// 0.9.9.9.9.6 (round 7): Master Fumi speaks (a few words in Japanese, an old sage's voice) and every example and
// question is read by a recorded voice (VOICEVOX); the device's voice if a recording can't play
const fumiSays = (k: keyof typeof FUMI_LINES) => playClip(fumiClip(FUMI_LINES[k]), () => sayWord(plainJp(FUMI_LINES[k], true)));
const readOut = (jp: string) => playClip(grammarClip(jp), () => sayWord(plainJp(jp, true)));

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
const KEY = 'kb:grammar';
const t = (x: { en: string; ru: string }) => (lang() === 'ru' ? x.ru : x.en);

let level: GrammarLevel = 'N5';
let passed = new Set<string>((() => { try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') as string[]; } catch { return []; } })());
const keep = () => { try { localStorage.setItem(KEY, JSON.stringify([...passed])); } catch { /* private mode */ } };

let searchWired = false;
export function openGrammar() {
  ui.show('grammar');
  if (!searchWired) { searchWired = true; $('grammarDict').onclick = () => openDictionary(); // (0.9.9.9.9.7 round 2)
    let t = 0; ($('grammarSearch') as HTMLInputElement).oninput = () => { clearTimeout(t); t = window.setTimeout(showList, 120); }; }
  showList();
  void api.grammarPassed().then((r) => { for (const id of r.passed) passed.add(id); keep(); if (!$('grammarList').hidden) showList(); }).catch(() => { /* offline: what this device knows */ });
}

/** a Japanese line with furigana, each kanji tappable */
export function jpLine(s: string, cls = 'gr-jp'): HTMLElement {
  // (0.9.9.9.9.7: a word with its reading over it, tapped, opens the whole word — it split 勉強 into 勉 and 強 — and its
  // kanji from there)
  const p = h('p', cls, undefined, { lang: 'ja' });
  for (const part of parseLine(s)) {
    if (!part.reading) { p.append(part.text); continue; }
    const r = h('ruby');
    r.append(part.text, h('rt', '', part.reading));
    p.append(r);
  }
  wordsTappable(p);
  return p;
}

function showList() {
  $('grammarList').hidden = false; $('grammarLesson').hidden = true;
  $('grammarLevels').replaceChildren(...GRAMMAR_LEVELS.map((l) => {
    const n = grammarOf(l).length;
    const b = h('button', `word-tab${l === level ? ' on' : ''}`, l, { type: 'button', role: 'tab', 'aria-selected': String(l === level) }) as HTMLButtonElement;
    if (!n) { b.disabled = true; b.title = tr('Coming soon'); b.append(h('small', 'gr-soon', tr('soon'))); }
    b.onclick = () => { level = l; showList(); };
    return b;
  }));
  // (0.9.9.9.9.7) a search: every level's lessons that match, each with its level; empty: this level's list
  const q = norm(($('grammarSearch') as HTMLInputElement).value);
  const searching = q.length > 0;
  $('grammarLevels').hidden = searching;
  const list = searching ? GRAMMAR.filter((g) => haystack(g).includes(q)) : grammarOf(level);
  const done = list.filter((g) => passed.has(g.id)).length;
  $('grammarProg').textContent = tr(`${done} of ${list.length} passed`);
  ($('grammarBar') as HTMLElement).style.width = `${list.length ? (done / list.length) * 100 : 0}%`;
  $('grammarItems').replaceChildren(...list.map((g, i) => {
    const b = h('button', `gr-item${passed.has(g.id) ? ' passed' : ''}`, undefined, { type: 'button' });
    b.append(h('span', 'gr-n', searching ? g.level : String(i + 1)), h('b', 'gr-pat', g.pattern), h('span', 'gr-mean', t(g.meaning)), h('span', 'gr-state', tr(passed.has(g.id) ? 'Passed' : 'Learn')));
    b.querySelector('.gr-pat')!.setAttribute('lang', 'ja');
    b.onclick = () => openLesson(g);
    return b;
  }));
}

/** what a search looks in: the pattern (and its kana without 〜), its meanings, its romaji */
const norm = (s: string) => s.trim().toLowerCase().replace(/[〜~・\s]/g, '');
const hay = new Map<string, string>();
function haystack(g: GrammarPoint): string {
  let x = hay.get(g.id);
  if (!x) { x = norm([g.pattern, g.meaning.en, g.meaning.ru, toRomaji(g.pattern.replace(/[^\u3040-\u30ff]/g, ''))].join('|')); hay.set(g.id, x); }
  return x;
}
function openLesson(g: GrammarPoint) {
  $('grammarList').hidden = true;
  const box = $('grammarLesson');
  box.hidden = false;
  const guide = guideEl('big');
  const said = h('p', 'tut-said gr-said');
  const head = h('div', 'gr-head');
  head.append(h('span', 'gr-lvl', g.level), h('div', 'gr-pattern', g.pattern), h('p', 'gr-meaning', t(g.meaning)));
  head.querySelector('.gr-pattern')!.setAttribute('lang', 'ja');
  const rules = h('ol', 'gr-rules');
  for (const r of g.rules) rules.append(h('li', '', t(r)));
  const ex = h('div', 'gr-examples');
  for (const e of g.examples) {
    const card = h('div', 'gr-ex');
    const play = h('button', 'gr-say', undefined, { type: 'button', 'aria-label': tr('Listen') });
    play.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" fill="currentColor"/></svg>';
    play.onclick = () => readOut(e.jp);
    card.append(play, jpLine(e.jp), h('p', 'gr-tr', t(e)));
    ex.append(card);
  }
  const back = h('button', 'pill', '← Lessons', { type: 'button' });
  back.onclick = () => showList();
  const ask = h('button', 'big gr-ask', `${tr('Questions')} (${g.questions.length})`, { type: 'button' });
  ask.onclick = () => quiz(g, guide, said);
  const main = h('div', 'gr-main');
  main.append(head, h('h4', 'gr-sub', tr('How it is used')), rules, h('h4', 'gr-sub', tr('Examples')), ex);
  const top = h('div', 'gr-top');
  const talk = h('div', 'gr-talk');
  talk.append(said);
  top.append(guide, talk);
  const foot = h('div', 'gr-foot');
  foot.append(back, ask);
  box.replaceChildren(top, main, foot);
  window.scrollTo({ top: 0 });
  // (0.9.9.9.9.7 round 2: the lesson's own name, in Japanese — it was the same words every time)
  { const line = fumiLessonLine(g.pattern, passed.has(g.id)); playClip(fumiClip(line), () => sayWord(plainJp(line, true))); }
  typeText(said, `${tr(passed.has(g.id) ? 'Again? Good - a lesson read twice stays.' : 'Today\'s lesson:')} ${g.pattern} - ${t(g.meaning)}. ${tr('Read how it works and the examples, then I will ask you a few questions.')}`, guide);
}

/** the lesson's questions, one at a time */
function quiz(g: GrammarPoint, guide: HTMLElement, said: HTMLElement) {
  const box = $('grammarLesson');
  const qs = [...g.questions].sort(() => Math.random() - 0.5);
  let i = 0, right = 0;
  const area = h('div', 'gr-quiz');
  const top = box.querySelector('.gr-top')!;
  box.replaceChildren(top, area);
  typeText(said, tr('Choose what goes in the gap.'), guide);
  fumiSays('quiz');
  const next = () => {
    if (i >= qs.length) return end();
    const q = qs[i];
    const { options, answer } = shuffled(q);
    const step = h('p', 'gr-step', `${i + 1} / ${qs.length}`);
    const sentence = jpLine(q.jp, 'gr-q');
    const trn = h('p', 'gr-tr', t(q));
    const opts = h('div', 'gr-opts');
    const go = h('button', 'big gr-next', tr(i === qs.length - 1 ? 'Finish' : 'Next'), { type: 'button' }) as HTMLButtonElement;
    go.hidden = true;
    go.onclick = () => { i++; next(); };
    options.forEach((o, k) => {
      const b = h('button', 'gr-opt', o, { type: 'button', lang: 'ja' }) as HTMLButtonElement;
      b.onclick = () => {
        for (const x of opts.querySelectorAll<HTMLButtonElement>('button')) x.disabled = true;
        const ok = k === answer;
        b.classList.add(ok ? 'right' : 'wrong');
        opts.children[answer].classList.add('right');
        // the gap filled in with the right answer
        const filled = jpLine(q.jp.replace('＿＿', `【${q.options[0]}】`), 'gr-q');
        sentence.replaceWith(filled);
        if (ok) { right++; audio.sfx.correct(1); guideMood(guide, 'cheer'); typeText(said, tr('Right!'), guide); }
        else { audio.sfx.wrong(); guideMood(guide, 'think'); typeText(said, `${tr('Not quite - it is')} ${q.options[0]}.`, guide); }
        // (round 7: "正解じゃ！" / "おしいのう。", then the whole sentence, read)
        fumiSays(ok ? 'right' : 'wrong');
        setTimeout(() => readOut(filledQuestion(q)), 1100);
        go.hidden = false; go.focus();
      };
      opts.append(b);
    });
    area.replaceChildren(step, sentence, trn, opts, go);
  };
  const end = async () => {
    const ok = right >= passMark(g);
    if (ok) { passed.add(g.id); keep(); audio.sfx.win(); guideMood(guide, 'cheer'); }
    else guideMood(guide, 'think');
    fumiSays(ok ? 'passed' : 'failed');
    typeText(said, ok ? `${tr('Lesson passed!')} ${right} / ${qs.length}.` : `${right} / ${qs.length}. ${tr(`You need ${passMark(g)} right - read the lesson once more and try again.`)}`, guide);
    try { const r = await api.passGrammar(g.id, right); for (const id of r.passed) passed.add(id); keep(); } catch { /* offline: kept on this device */ }
    const list = grammarOf(g.level);
    const after = list[list.indexOf(g) + 1];
    const again = h('button', 'pill', ok ? '← Lessons' : 'Read it again', { type: 'button' });
    again.onclick = () => (ok ? showList() : openLesson(g));
    const res = h('div', `gr-result ${ok ? 'pass' : 'fail'}`);
    res.append(h('b', '', tr(ok ? 'Passed' : 'Not yet')), h('span', '', `${right} / ${qs.length}`));
    const foot = h('div', 'gr-foot');
    foot.append(again);
    if (ok && after) { const nx = h('button', 'big', `${tr('Next lesson')}: ${after.pattern}`, { type: 'button' }); nx.onclick = () => openLesson(after); foot.append(nx); }
    else if (!ok) { const retry = h('button', 'big', 'Try again', { type: 'button' }); retry.onclick = () => quiz(g, guide, said); foot.append(retry); }
    area.replaceChildren(res, foot);
  };
  next();
}
