// 0.9.9.9.9: the ranked ladder — your rating and tier on the Online queue screen, and the Ladder (the top 50, and
// your friends) in a window. Ranked: every 1v1 from the online queue (see shared/ranked.ts).
import { api, type LadderView } from './api';
import { tr } from './i18n';
import * as ui from './ui';
import { PLACEMENT, RANKED_MODES, TIERS, type RankedMode, type RankView } from '../shared/ranked';

const el = (tag: string, cls = '', text?: string | number) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = String(text); return e; };

const rankChip = ui.rankChip;

let last: LadderView | null = null;
// 0.9.9.9.9.6 (round 6): every ranked mode has its own rating — on the queue's Ranked side, a card for each
const RANKED_LABEL: Record<RankedMode, string> = { rapid: 'Rapid', deck: 'Deck Duel', chess: 'Kanji chess', clash: 'Grammar Clash' };
let rankedSide = false;
export function setRankSide(on: boolean) { rankedSide = on; }
function rankCard(me: RankView, mode: RankedMode | null) {
  const t = TIERS.find((x) => x.id === me.tier) ?? null;
  const card = el('button', `rank-card${t ? ` rk-${t.id}` : ' rk-unranked'}${mode ? ' rk-mode' : ''}`) as HTMLButtonElement;
  card.type = 'button';
  if (t) card.style.setProperty('--rk', t.color);
  const crest = el('span', 'rc-crest'); crest.setAttribute('aria-hidden', 'true');
  const txt = el('span', 'rc-txt');
  if (mode) txt.append(el('small', 'rc-mode', tr(RANKED_LABEL[mode])));
  txt.append(el('b', 'rc-name', t ? tr(t.name) : tr('Unranked')), el('small', 'rc-sub', t ? `${me.rating}${me.rank ? ` · #${me.rank}` : ''}` : `${tr('Placement')} ${me.placement ?? me.games ?? 0}/${PLACEMENT}`));
  card.append(crest, txt);
  card.title = tr('Tap to see the ladder');
  card.onclick = () => void openLadder('top', mode ?? 'rapid');
  return card;
}
/** the Online queue screen: your rank in each ranked mode (the Ranked side only) */
export async function renderRankBox() {
  const box = document.getElementById('rankBox');
  if (!box) return;
  if (!rankedSide) { box.hidden = true; return; }
  try { last = await api.ladder('rapid'); } catch { box.hidden = true; return; }
  if (!rankedSide) { box.hidden = true; return; }
  const modes = last.modes;
  box.replaceChildren(...(modes ? RANKED_MODES.map((m) => rankCard(modes[m], m)) : [rankCard(last.me, null)]));
  box.classList.add('rank-modes');
  box.hidden = false;
}

export async function openLadder(start: 'top' | 'friends' | 'ranks' = 'top', mode: RankedMode = 'rapid') {
  try { last = await api.ladder(mode); } catch (e) { ui.toast((e as Error).message); return; }
  const d = el('dialog', 'friend-dialog ladder-dialog') as HTMLDialogElement;
  const head = el('div', 'ld-head');
  const close = el('button', 'pill', tr('Close')) as HTMLButtonElement;
  close.type = 'button'; close.onclick = () => d.close();
  head.append(el('h3', '', tr('Ranked ladder')), close);
  // (round 6) whose ladder: one tab per ranked mode
  const modeTabs = el('div', 'word-tabs ld-modes');
  for (const m of RANKED_MODES) {
    const b = el('button', 'word-tab', tr(RANKED_LABEL[m])) as HTMLButtonElement;
    b.type = 'button'; b.setAttribute('aria-selected', String(m === mode));
    b.onclick = () => { if (m === mode) return; d.close(); void openLadder(start === 'ranks' ? 'top' : start, m); };
    modeTabs.append(b);
  }
  const tabs = el('div', 'word-tabs');
  const list = el('ol', 'ld-list');
  const show = (which: 'top' | 'friends' | 'ranks') => {
    for (const b of tabs.querySelectorAll('button')) b.setAttribute('aria-selected', String(b.dataset.t === which));
    if (which === 'ranks') { // (0.9.9.9.9.5: every rank, the rating it starts at, yours lit)
      list.replaceChildren(...[...TIERS].reverse().map((t) => {
        const li = el('li', 'ld-row ld-tier' + (t.id === last!.me.tier ? ' me' : ''));
        li.style.setProperty('--rk', t.color);
        li.append(el('span', 'rc-crest'), el('span', 'ld-name', tr(t.name)), el('b', 'ld-rating', `${t.min}+`));
        return li;
      }));
      return;
    }
    const rows = which === 'top' ? last!.top : last!.friends;
    list.replaceChildren(...(rows.length ? rows.map((r) => {
      const li = el('li', 'ld-row' + (r.id === last!.me.id ? ' me' : ''));
      const who = el('span', 'ld-who');
      who.append(ui.picOrLetter(r.pic, r.name, 'pic'), el('span', 'ld-name', r.name));
      ui.markProfile(who, { id: r.id, name: r.name, bot: null });
      li.append(el('b', 'ld-place', r.place ? `#${r.place}` : '–'), who, rankChip(r, false) ?? el('span'), el('b', 'ld-rating', r.rating));
      return li;
    }) : [el('li', 'ld-empty', tr(which === 'top' ? 'Nobody has finished their placement games yet - be the first!' : 'None of your friends has played ranked yet.'))]));
  };
  for (const [t, label] of [['top', 'Top players'], ['friends', 'Friends'], ['ranks', 'All ranks']] as const) {
    const b = el('button', 'word-tab', tr(label)) as HTMLButtonElement;
    b.type = 'button'; b.dataset.t = t; b.setAttribute('role', 'tab');
    b.onclick = () => show(t);
    tabs.append(b);
  }
  const me = last.me;
  const mine = el('p', 'hint ld-me');
  mine.append(el('span', '', `${tr('You')}: `), rankChip(me) ?? el('span', '', tr('Not ranked yet')), el('span', '', me.rank ? ` #${me.rank}` : ''));
  const how = el('p', 'hint', tr('The Ranked side of the online queue: Rapid, Deck Duel, Kanji chess and Grammar Clash, each with its own rating. Beat someone rated higher and you gain more; leaving a ranked game is a loss. Your tier in a mode shows after 5 games of it.'));
  d.append(head, modeTabs, mine, tabs, list, how);
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
  show(start);
}
