// 0.9.9.9.5.1: on a computer the main menu's mode cards are a carousel, in the spirit of racing-game menus (Blur):
// the card in the middle is big and lit, the others turn away to the sides, smaller and dimmer, and the deck goes
// round. ← → / the wheel / dragging / a click on a side card turns it; a click (or Enter) on the middle card opens it.
// Phones and narrow windows keep the grid of cards.

const WIDE = '(min-width: 1101px) and (min-height: 560px)';
const TOUCH = '(pointer: coarse)'; // (phones and tablets keep the grid)
const KEY = 'kb:menuCard';
/**
 * where each place from the middle sits — sideways (× the card width), turned, pushed back, scaled, shown.
 * 0.9.9.9.5.3 (the player's concept picture): a flat row — the middle card and its two neighbours the same size,
 * side by side, the middle one lit; a smaller, dimmer card at each end; the rest out of sight.
 */
const GAP = 0.08; // (between cards, × the card width)
const PLACE = [
  { x: 0, ry: 0, z: 0, s: 1, o: 1 },
  { x: 1 + GAP, ry: 0, z: 0, s: 1, o: 1 },
  { x: 2 + GAP * 2 - 0.08, ry: 0, z: -40, s: 0.84, o: 0.82 },
  { x: 2.7, ry: 0, z: -80, s: 0.6, o: 0 },
];
/** half the row's width (× the card width): the arrows sit just outside it */
const HALF = PLACE[2].x + PLACE[2].s / 2;
const EDGE = PLACE.length - 1;

let box: HTMLElement;
let items: HTMLElement[] = [];
let active = 0;
let on = false;
let prev: HTMLButtonElement, next: HTMLButtonElement, dots: HTMLElement;
/** each card's place before the last turn (a card going round the back jumps instead of flying across) */
const was = new Map<HTMLElement, number>();

const cardOf = (it: HTMLElement) => (it.matches('.mc-card') ? it : it.querySelector<HTMLElement>('.mc-card')!);
/** the shortest way round from the middle card: -3 … +3 for seven cards */
function offset(i: number) {
  const n = items.length;
  let d = (((i - active) % n) + n) % n;
  if (d > n / 2) d -= n;
  return d;
}
function place(d: number, w: number) {
  const a = Math.min(Math.abs(d), EDGE);
  const p = PLACE[a], sign = Math.sign(d);
  return { a, o: p.o, t: `translateX(calc(-50% + ${(sign * p.x * w).toFixed(1)}px)) translateZ(${p.z}px) rotateY(${-sign * p.ry}deg) scale(${p.s})` };
}
/** the card width: the row of five and the arrows beside it fit across the window, never wider than 270 px */
function size() {
  const zoom = box.getBoundingClientRect().width / (box.offsetWidth || 1) || 1;
  const across = innerWidth / zoom - 120 - 2 * 70; // (the rails on both sides, the arrows)
  const w = Math.round(Math.min(270, Math.max(190, across / (HALF * 2))));
  box.style.setProperty('--cw', `${w}px`);
  box.parentElement!.style.setProperty('--cw', `${w}px`); // (the arrows beside the row use it too)
  box.parentElement!.style.setProperty('--edge', `${Math.round(HALF * w + 18)}px`);
}

function layout() {
  const w = items[0]?.offsetWidth || 300;
  items.forEach((it, i) => {
    const d = offset(i);
    const { a, o, t } = place(d, w);
    const before = was.get(it);
    if (before !== undefined && Math.abs(d - before) > 1) {
      // it went round the back: put it out of sight on the side it comes in from, then let it slide in
      it.style.transition = 'none';
      it.style.transform = place(Math.sign(d) * EDGE, w).t;
      it.style.opacity = '0';
      void it.offsetWidth;
      it.style.transition = '';
    }
    was.set(it, d);
    it.style.transform = t;
    it.style.opacity = String(o);
    it.style.zIndex = String(10 - a);
    it.classList.toggle('mcc-active', d === 0);
    it.classList.toggle('mcc-side', d !== 0);
    it.classList.toggle('mcc-far', a >= 2);
    it.setAttribute('aria-hidden', String(o === 0));
    cardOf(it).tabIndex = d === 0 ? 0 : -1;
  });
  dots.querySelectorAll('i').forEach((d, i) => d.classList.toggle('on', i === active));
  try { sessionStorage.setItem(KEY, String(active)); } catch { /* fine */ }
}
export function turn(by: number) {
  if (!on || !items.length) return;
  active = (((active + by) % items.length) + items.length) % items.length;
  layout();
}
function focusOn(i: number) { active = i; layout(); }

/** coming to the menu: the cards are dealt out from the middle, the nearest first */
function dealIn() {
  if (!on) return;
  size(); layout(); // (sized now: while the menu was hidden its size was unknown)
  const w = items[0]?.offsetWidth || 300;
  const from = place(0, w).t;
  items.forEach((it, i) => {
    const d = offset(i);
    const { a, o, t } = place(d, w);
    if (!o) return;
    it.getAnimations().forEach((x) => { if (x instanceof CSSTransition) return; x.cancel(); });
    it.animate(
      [{ transform: `${from} translateY(60px) scale(.82)`, opacity: 0 }, { transform: t, opacity: o }],
      { duration: 640, delay: 60 + a * 95, easing: 'cubic-bezier(.2, .8, .2, 1)', fill: 'backwards' },
    );
  });
}

function enable() {
  if (on) return;
  on = true;
  items = [...box.children].filter((c): c is HTMLElement => c instanceof HTMLElement && !c.hidden);
  box.classList.add('carousel');
  box.parentElement!.classList.add('has-carousel');
  prev.hidden = next.hidden = dots.hidden = false;
  dots.replaceChildren(...items.map((it, i) => {
    const d = document.createElement('i');
    d.title = cardOf(it).querySelector('.mc-name')?.textContent?.trim() ?? '';
    d.onclick = () => focusOn(i);
    return d;
  }));
  let saved = 0;
  try { saved = Number(sessionStorage.getItem(KEY) ?? 0) || 0; } catch { /* fine */ }
  active = Math.min(Math.max(0, saved), items.length - 1);
  was.clear();
  size();
  layout();
}
function disable() {
  if (!on) return;
  on = false;
  box.classList.remove('carousel');
  box.parentElement!.classList.remove('has-carousel');
  prev.hidden = next.hidden = dots.hidden = true;
  box.style.removeProperty('--cw');
  for (const it of items) {
    it.style.transform = it.style.opacity = it.style.zIndex = '';
    it.classList.remove('mcc-active', 'mcc-side', 'mcc-far');
    it.removeAttribute('aria-hidden');
    cardOf(it).tabIndex = 0;
  }
}

export function initMenuCarousel() {
  box = document.querySelector<HTMLElement>('#menu .mc-cards')!;
  if (!box) return;
  const wrap = document.createElement('div');
  wrap.className = 'mc-deck';
  box.before(wrap);
  wrap.append(box);
  const arrow = (cls: string, label: string, by: number) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = `mcc-arrow ${cls}`; b.hidden = true;
    b.setAttribute('aria-label', label);
    b.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="${by < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    b.onclick = () => turn(by);
    return b;
  };
  // under the deck: ‹ · · · · · › 
  const nav = document.createElement('div');
  nav.className = 'mcc-nav';
  prev = arrow('mcc-prev', 'Previous', -1);
  next = arrow('mcc-next', 'Next', 1);
  dots = document.createElement('div');
  dots.className = 'mcc-dots'; dots.hidden = true;
  nav.append(dots);
  // 0.9.9.9.5.3: the arrows at the sides of the row (they were under it, around the dots)
  wrap.append(prev, next, nav);

  // a click on a side card turns it to the middle instead of opening it
  box.addEventListener('click', (e) => {
    // (only a real click: the game opening a card itself — a daily task's button — still opens it)
    if (!on || !e.isTrusted) return;
    const it = items.find((x) => x.contains(e.target as Node));
    if (!it || it.classList.contains('mcc-active')) return;
    e.preventDefault(); e.stopImmediatePropagation();
    focusOn(items.indexOf(it));
  }, true);
  // the wheel turns it (one step at a time)
  let wheelAt = 0;
  wrap.addEventListener('wheel', (e) => {
    if (!on) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(d) < 8) return;
    e.preventDefault();
    if (performance.now() - wheelAt < 260) return;
    wheelAt = performance.now();
    turn(d > 0 ? 1 : -1);
  }, { passive: false });
  // dragging sideways turns it
  let downX: number | null = null, dragged = false;
  box.addEventListener('pointerdown', (e) => { if (on && e.pointerType === 'mouse' && e.button === 0) { downX = e.clientX; dragged = false; } });
  addEventListener('pointermove', (e) => {
    if (downX === null) return;
    const dx = e.clientX - downX;
    if (Math.abs(dx) > 70) { turn(dx < 0 ? 1 : -1); downX = e.clientX; dragged = true; }
  });
  addEventListener('pointerup', () => { downX = null; });
  box.addEventListener('click', (e) => { if (dragged && e.isTrusted) { e.preventDefault(); e.stopImmediatePropagation(); dragged = false; } }, true);
  // keys on the menu: ← → turn, Enter opens the middle card
  addEventListener('keydown', (e) => {
    if (!on || document.getElementById('menu')!.hidden || e.altKey || e.ctrlKey || e.metaKey) return;
    if (document.querySelector('dialog[open]') || (e.target as Element | null)?.closest?.('input, textarea, select, [contenteditable]')) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); turn(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); turn(1); }
    else if (e.key === 'Enter' && !(e.target as Element | null)?.closest?.('button, a')) { e.preventDefault(); cardOf(items[active]).click(); }
  });
  const mq = matchMedia(WIDE), touch = matchMedia(TOUCH);
  const apply = () => (mq.matches && !touch.matches ? enable() : disable());
  mq.addEventListener('change', apply);
  touch.addEventListener('change', apply);
  addEventListener('resize', () => { if (on) { size(); layout(); } });
  // motion.ts tells when a screen comes in
  addEventListener('kw:screenin', (e) => { if ((e as CustomEvent<string>).detail === 'menu') dealIn(); });
  apply();
}
