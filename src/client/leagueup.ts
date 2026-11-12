// 0.9.9.9.6: moving up a Daily challenge league is a moment — a screen of its own: the new league's crest with
// rays behind it, and what it brings (that league's border on your picture, and a character at N4, N3 and N2),
// each with its own Equip button. The daily page also shows what the next league brings.
import { BORDERS, CHARACTER_DEFS, characterOf, type CharacterId } from '../shared/progress';
import { api, type Profile } from './api';
import { avatarSvg } from './wizard';
import { markRewardsSeen } from './rewards';
import { tr } from './i18n';
import * as audio from './audio';
import * as ui from './ui';

function h(tag: string, cls = '', text?: string): HTMLElement {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}
export const LEAGUE_LABEL: Record<string, string> = { KANA: 'かな', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1' };
const LEAGUE_TITLE: Record<string, string> = { KANA: 'Kana', N5: 'N5', N4: 'N4', N3: 'N3', N2: 'N2', N1: 'N1' };

/** what reaching this league brings */
export function leagueRewards(league: string) {
  const border = BORDERS.find((b) => b.league === league) ?? null;
  const character = CHARACTER_DEFS.find((c) => c.league === league) ?? null;
  return { border, character };
}

/** a league's crest: a round seal with its name (bigger and grander for the higher leagues) */
export function leagueCrest(league: string, cls = '') {
  const c = h('span', `lg-crest lg-${league.toLowerCase()} ${cls}`);
  const t = h('b', '', LEAGUE_LABEL[league] ?? league);
  t.lang = 'ja';
  c.append(h('i', 'lg-rays'), t);
  return c;
}

/** your picture in the league's border (or your initial) */
function borderPreview(p: Profile | null, border: string) {
  const d = h('div', `pp-pic big${p?.pic ? ' has-pic' : ''}${ui.borderCls(border)}`);
  if (p?.pic) { const img = ui.picEl(p.pic, 'pic fill'); if (img) d.append(img); } else d.textContent = (ui.myName() || '✦').slice(0, 1).toUpperCase();
  return d;
}

/** the little preview of the next league's rewards (the daily page) */
export function nextLeagueRow(next: string): HTMLElement | null {
  const { border, character } = leagueRewards(next);
  if (!border && !character) return null;
  const row = h('div', 'lg-next');
  row.append(h('span', 'lg-next-lbl', `${tr('Reach')} ${LEAGUE_TITLE[next]} ${tr('to unlock')}:`));
  if (border) { const b = h('span', 'lg-next-it'); const d = h('span', `avatar lg-mini${ui.borderCls(border.id)}`, (ui.myName() || '✦').slice(0, 1).toUpperCase()); b.append(d, h('small', '', tr(`${border.name} border`))); row.append(b); }
  if (character) { const c = h('span', 'lg-next-it'); const s = h('span', 'lg-mini-char'); s.innerHTML = avatarSvg(character.id, 'me', 'verdant'); c.append(s, h('small', '', tr(`The ${character.name}`))); row.append(c); }
  return row;
}

export async function showLeagueUp(uid: string, league: string) {
  const { border, character } = leagueRewards(league);
  let p: Profile | null = null;
  try { p = (await api.me()).profile; } catch { /* offline: the initial */ }
  let d = document.getElementById('leagueUpDialog') as HTMLDialogElement | null;
  if (!d) {
    d = document.createElement('dialog');
    d.id = 'leagueUpDialog';
    d.className = 'friend-dialog league-up';
    d.setAttribute('aria-label', 'League up');
    document.body.append(d);
  }
  const dlg = d;
  const body: HTMLElement[] = [];
  body.push(h('div', 'lu-burst'));
  const head = h('div', 'lu-head');
  head.append(h('small', 'lu-kicker', tr('Daily challenge')), h('h2', 'lu-title', tr('League up!')));
  body.push(head, leagueCrest(league, 'big'));
  body.push(h('p', 'lu-sub', tr(`You're in the ${LEAGUE_TITLE[league]} league now — tomorrow's ten words come from it.`)));
  const rewards = h('div', 'lu-rewards');
  const keys: string[] = [];
  const card = (title: string, pic: HTMLElement, equip: (() => Promise<{ profile: Profile }>) | null, isOn: boolean) => {
    const c = h('div', 'lu-card');
    c.append(h('span', 'lu-new', tr('New')), pic, h('b', '', title));
    if (equip) {
      const b = h('button', 'pill primary', isOn ? tr('Equipped ✓') : tr('Equip')) as HTMLButtonElement;
      b.type = 'button'; b.disabled = isOn;
      b.onclick = async () => {
        b.disabled = true;
        try { const r = await equip(); onEquipped(r.profile); b.textContent = tr('Equipped ✓'); } catch (e) { b.disabled = false; ui.toast((e as Error).message); }
      };
      c.append(b);
    }
    rewards.append(c);
  };
  if (border) {
    keys.push(`border:${border.id}`);
    card(tr(`${border.name} border`), borderPreview(p, border.id), () => api.setBorder(border.id), (p?.border ?? 'none') === border.id);
  }
  if (character) {
    keys.push(`char:${character.id}`);
    const pic = h('div', 'lu-char'); pic.innerHTML = avatarSvg(character.id as CharacterId, 'me', p?.staff ?? 'verdant');
    card(tr(`The ${character.name}`), pic, () => api.setCharacter(character.id), p ? characterOf(p.unlocks) === character.id : false);
  }
  if (rewards.childElementCount) body.push(h('h4', 'lu-rw-title', tr('Your rewards')), rewards);
  const ok = h('button', 'big', tr('Onward!')) as HTMLButtonElement;
  ok.type = 'button';
  ok.onclick = () => dlg.close();
  body.push(ok);
  dlg.replaceChildren(...body);
  markRewardsSeen(uid, keys);
  if (!dlg.open) dlg.showModal();
  dlg.classList.remove('pop'); void dlg.offsetWidth; dlg.classList.add('pop');
  audio.sfx.go();
}

let onEquipped: (p: Profile) => void = () => {};
/** main.ts: what to do with the profile after equipping (the menu, Customize…) */
export function onLeagueEquip(fn: (p: Profile) => void) { onEquipped = fn; }

// (screenshots in CI: kb:debugui=1 lets a scenario open the league-up screen)
try {
  if (localStorage.getItem('kb:debugui') === '1') (window as unknown as { __kwLeagueUp: (l: string) => void }).__kwLeagueUp = (l) => void showLeagueUp('debug', l);
} catch { /* no storage */ }
