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

/** 0.9.9.9.6.2: the daily page — your league, big (crest, name), and the next one small under it with how to get
 * there and what it brings (the next league's big card made it look like the league you're in) */
export function leagueCard(current: string, next: string | undefined, promoteAt = 7, passed: readonly string[] = []): HTMLElement {
  const card = h('div', `lg-mine lg-${current.toLowerCase()}`);
  const head = h('div', 'lg-mine-head');
  const t = h('div', 'lg-mine-txt');
  t.append(h('small', 'lg-mine-k', tr('Your league')), h('b', 'lg-mine-n', `${LEAGUE_TITLE[current] ?? current} ${tr('league')}`));
  head.append(leagueCrest(current, 'mid'), t);
  card.append(head);
  // 0.9.9.9.6.4: what passing THIS league brings (its rewards come when you pass it, not when you arrive)
  const { border, character } = leagueRewards(current);
  if ((border || character) && !passed.includes(current)) {
    const pr = h('div', 'lg-pass');
    pr.append(h('span', 'lg-pass-how', tr(`Pass it — ${promoteAt}/10 or better — to get:`)));
    const rw = h('span', 'lg-nx-rw');
    if (border) { const d = h('span', `avatar lg-nx-av${ui.borderCls(border.id)}`, (ui.myName() || '✦').slice(0, 1).toUpperCase()); d.title = tr(`${border.name} border`); rw.append(d); }
    if (character) { const c = h('span', 'lg-nx-char'); c.innerHTML = avatarSvg(character.id, 'me', 'verdant'); c.title = tr(`The ${character.name}`); rw.append(c); }
    pr.append(rw);
    card.append(pr);
  }
  if (next) {
    const nx = h('div', 'lg-nx');
    const lbl = h('span', 'lg-nx-l');
    lbl.append(h('small', '', tr('Next')), leagueCrest(next, 'tiny'), h('b', '', LEAGUE_TITLE[next] ?? next));
    nx.append(lbl, h('span', 'lg-nx-how', tr(`Score ${promoteAt}/10 or better to move up`)));
    card.append(nx);
  } else card.append(h('p', 'lg-nx-top', tr('The highest league — stay on top!')));
  return card;
}

/**
 * 0.9.9.9.6.4: `league` is where you are now (null: you passed the top league), `passed` the league you just passed —
 * its rewards are the ones on this screen
 */
export async function showLeagueUp(uid: string, league: string | null, passed: string) {
  const { border, character } = leagueRewards(passed);
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
  head.append(h('small', 'lu-kicker', tr('Daily challenge')), h('h2', 'lu-title', tr(league ? 'League up!' : 'League passed!')));
  body.push(head, leagueCrest(league ?? passed, 'big'));
  body.push(h('p', 'lu-sub', league ? tr(`You passed the ${LEAGUE_TITLE[passed]} league! You're in the ${LEAGUE_TITLE[league]} league now — tomorrow's ten words come from it.`) : tr(`You passed the ${LEAGUE_TITLE[passed]} league — the highest there is.`)));
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
  if (localStorage.getItem('kb:debugui') === '1') (window as unknown as { __kwLeagueUp: (l: string) => void }).__kwLeagueUp = (l) => { const order = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1']; const i = order.indexOf(l); void showLeagueUp('debug', i > 0 ? l : null, i > 0 ? order[i - 1] : 'N1'); };
} catch { /* no storage */ }
