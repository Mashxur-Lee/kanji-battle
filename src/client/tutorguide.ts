// 0.9.9.9.9.6 (round 4): the tutorial's guide — Master Fumi (文, "writing"), a wizard drawn in 2.5D: layers at their
// own depths (a glow behind, the wizard, kana drifting in front and behind at different speeds, a shadow on the
// floor), the whole figure turning a little towards your pointer, breathing, hopping when you get something right.
// What it says types itself out in a speech bubble (a tap shows it all at once). It stands beside every tutorial card,
// and peeks out of the spotlight bubbles in the menu and battle tours.
import { heroSvg } from './wizard';

const el = (tag: string, cls = '', text?: string) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};
export const GUIDE_NAME = 'Master Fumi';
export const GUIDE_JP = '文先生';
export const GUIDE_READING = 'ふみせんせい';
export type GuideMood = 'idle' | 'talk' | 'cheer' | 'think' | 'point' | 'bow';

// the kana that drift around the guide: [glyph, x %, y %, depth (−1 behind … 1 in front), seconds a loop]
const MOTES: Array<[string, number, number, number, number]> = [
  ['あ', 8, 22, -0.6, 7], ['漢', 80, 14, 0.8, 9], ['字', 88, 62, -0.4, 8], ['ふ', 4, 70, 0.6, 10], ['み', 70, 82, -0.8, 6.5], ['魔', 18, 4, 0.3, 11],
];

/** the guide, ready to place: `size` big (beside a card) or small (in a bubble) */
export function guideEl(size: 'big' | 'small' = 'big'): HTMLElement {
  const box = el('div', `tg tg-${size}`);
  box.setAttribute('aria-hidden', 'true');
  box.dataset.mood = 'idle';
  const stage = el('div', 'tg-stage');
  const glow = el('div', 'tg-glow');
  const floor = el('div', 'tg-floor');
  const body = el('div', 'tg-body');
  body.innerHTML = heroSvg('wizard', 'me');
  stage.append(glow, floor);
  if (size === 'big') for (const [g, x, y, z, s] of MOTES) {
    const m = el('span', `tg-mote ${z < 0 ? 'back' : 'front'}`, g);
    m.style.cssText = `left:${x}%;top:${y}%;--z:${z};--s:${s}s;--d:${-(x % 7)}s`;
    m.lang = 'ja';
    stage.append(m);
  }
  stage.append(body);
  box.append(stage);
  if (size === 'big') follow(box);
  return box;
}

/** the figure turns a little towards the pointer (the 2.5D: layers move by their depth) */
function follow(box: HTMLElement) {
  let raf = 0;
  const onMove = (e: PointerEvent) => {
    if (!box.isConnected) { removeEventListener('pointermove', onMove); return; }
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = box.getBoundingClientRect();
      const dx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (innerWidth / 2)));
      const dy = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (innerHeight / 2)));
      box.style.setProperty('--tx', dx.toFixed(3));
      box.style.setProperty('--ty', dy.toFixed(3));
    });
  };
  addEventListener('pointermove', onMove, { passive: true });
}

/** how the guide stands: talking, cheering (a hop and a burst), thinking, pointing, a bow */
export function guideMood(box: HTMLElement | null, mood: GuideMood) {
  if (!box) return;
  box.dataset.mood = mood;
  box.classList.remove('tg-go'); void box.offsetWidth; box.classList.add('tg-go');
}

/** the words, typed out (a tap shows them all); the guide talks while it types */
export function typeText(p: HTMLElement, text: string, guide?: HTMLElement | null, done?: () => void) {
  p.setAttribute('aria-label', text);
  const chars = [...text];
  let i = 0, timer = 0;
  const finish = () => { clearInterval(timer); p.textContent = text; p.classList.remove('typing'); if (guide?.dataset.mood === 'talk') guideMood(guide, 'idle'); done?.(); p.onclick = null; };
  p.textContent = '';
  p.classList.add('typing');
  guideMood(guide ?? null, 'talk');
  timer = window.setInterval(() => {
    if (!p.isConnected) { clearInterval(timer); return; }
    i = Math.min(chars.length, i + 2);
    p.textContent = chars.slice(0, i).join('');
    if (i >= chars.length) finish();
  }, 22);
  p.onclick = finish;
}
