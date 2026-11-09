// 0.9.9.9.5: motion everywhere — screens fade in with their parts rising one after another, every button gives
// under your finger and springs back, list items slide in when they are new. Done with the Web Animations API,
// which (unlike CSS animations the page turns off itself) runs with Windows' "animation effects" off too — the
// player asked for it. Dialogs, overlays and pop-ups animate in style.css (@starting-style).
//
// Whole screens are only faded (never moved): many hold position: fixed parts (back buttons, the kana bar, the
// battle HUD), and a transform on the screen would carry them along. Their parts rise with `translate`, which
// doesn't clash with the transforms the page already uses.

const EASE_OUT = 'cubic-bezier(.2, .8, .2, 1)';
const SPRING = 'cubic-bezier(.3, 1.5, .55, 1)';
/** parts that are position: fixed (or hold such parts): never moved, only faded with their screen */
const FIXED = '.back, .kana-bar, #gameKb, .passage-gloss, .kanji-pop, .mode-title, #comboHud, .clock-col, .dk-overlay, .pause-overlay, .menu-veil, .arena3d-hit, .ult-fx, .coach-tip, .other-pop, .guide-pop, .rail-fab, .dict-fab, #dragon, .invite-box, .csel-menu.floating, dialog';
/** per screen, the cards and blocks that rise in one after another (besides the screen's own top-level parts) */
const PARTS: Record<string, string> = {
  menu: '.mc-title, .mc-nav-btn, .tasks-btn, .mc-card, .menu-foot > *',
  study: '#studyGrid > *, .practice-card',
  progress: '.prog-card, #progGrid > *',
  history: '#historyList > *',
  customize: '#custGrid > *',
  friends: '#friendList > *, #fdReqList > *',
  daily: '.daily-panel, .daily-main, #dailyBoard > *',
  kana: '.kana-top',
  private: '.mode-card, .modes-grid > *',
  modes: '.mode-card, .modes-grid > *',
  results: '.card, .compare, .missed-save',
  dict: '.dict-home > *',
};
/** no fade: the battle starts on the server's clock (its own animations show it) */
const STILL = new Set(['battle']);

/** 0.9.9.9.5.1: phones and tablets get a lighter version (no whole-screen fade, fewer parts moving) */
const touch = () => matchMedia('(pointer: coarse)').matches;
const alive = (el: Element) => (el as HTMLElement).offsetParent !== null || getComputedStyle(el).position === 'fixed';

/** parts rising into place one after another (at most ~10 steps, so long lists don't drag) */
export function rise(items: Element[], { step = 34, from = 14, start = 0, max = 10 } = {}) {
  let i = 0;
  for (const el of items) {
    if (!(el instanceof HTMLElement) || !alive(el)) continue;
    const delay = start + Math.min(i, max) * step;
    el.animate(
      [{ opacity: 0, translate: `0 ${from}px` }, { opacity: 1, translate: '0 0' }],
      { duration: touch() ? 320 : 420, delay, easing: EASE_OUT, fill: 'backwards' },
    );
    i++;
  }
}

let lastScreen = '';
/** ui.show() calls this after switching: the new screen fades in, its parts rise */
export function screenIn(id: string) {
  const prev = lastScreen;
  lastScreen = id;
  if (prev === id || STILL.has(id)) return;
  const screen = document.getElementById(id);
  if (!screen) return;
  const light = touch();
  // (fading a whole screen makes the phone redraw every panel on it each frame: on phones only the parts move)
  if (!light) screen.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
  const top = [...screen.children].filter((c) => !c.matches(FIXED) && !c.querySelector(FIXED) && !(c as HTMLElement).hidden);
  const deep = PARTS[id] ? [...screen.querySelectorAll(PARTS[id])].filter((c) => !c.closest('[hidden]') && !c.matches(FIXED) && !c.querySelector(FIXED)) : [];
  // a part already rising as one of the top-level blocks isn't moved twice
  const parts = [...top.filter((t) => !deep.some((d) => t.contains(d))), ...deep];
  const ordered = parts.sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
  if (light) rise(ordered.slice(0, 8), { start: 0, step: 28, from: 10, max: 6 });
  else rise(ordered, { start: 40 });
}

// ── pressing anything: it gives a little, then springs back ──────────────────
const PRESSABLE = 'button, .pill, [role="button"], [role="tab"], a.big, label.toggle-row, summary, .kc, select';
let pressed: { el: HTMLElement; anim: Animation } | null = null;
function release() {
  if (!pressed) return;
  const { el, anim } = pressed;
  pressed = null;
  const now = Number(getComputedStyle(el).scale) || 1;
  anim.cancel();
  el.animate([{ scale: String(now) }, { scale: '1' }], { duration: 380, easing: SPRING });
}
function press(e: PointerEvent) {
  if (e.button > 0) return;
  const el = (e.target as Element | null)?.closest<HTMLElement>(PRESSABLE);
  if (!el || (el as HTMLButtonElement).disabled || el.getAttribute('aria-disabled') === 'true' || el.closest('#battle .kb, #gameKb')) return;
  release();
  // big cards give less than small buttons
  const w = el.getBoundingClientRect().width;
  const to = w > 260 ? 0.98 : w > 120 ? 0.965 : 0.93;
  pressed = { el, anim: el.animate([{ scale: '1' }, { scale: String(to) }], { duration: 110, easing: 'ease-out', fill: 'forwards' }) };
}

// ── lists: new items slide in (re-drawing the same items doesn't flash them) ──
const LISTS = ['historyList', 'friendList', 'fdReqList', 'railList', 'inboxList', 'dailyBoard', 'quizChoices', 'customHits', 'lobbyChatLog', 'dkChatLog', 'dkFeed', 'tasksList', 'progGrid', 'studyGrid', 'custGrid', 'passageList', 'wordRows', 'deckRows', 'dictHits', 'dictResults'];
const keyOf = (n: HTMLElement) => n.dataset.key || n.id || (n.textContent ?? '').replace(/\d+/g, '#').slice(0, 40);
function watchList(box: HTMLElement) {
  let seen = new Set([...box.children].map((c) => keyOf(c as HTMLElement)));
  new MutationObserver((records) => {
    const added: HTMLElement[] = [];
    for (const r of records) for (const n of r.addedNodes) if (n instanceof HTMLElement && n.parentElement === box) added.push(n);
    const now = new Set([...box.children].map((c) => keyOf(c as HTMLElement)));
    const fresh = added.filter((n) => !seen.has(keyOf(n)));
    seen = now;
    if (!fresh.length || !alive(box)) return;
    // a chat or feed: only the newest lines; a whole new list: the first rows, one after another
    const rows = fresh.slice(0, touch() ? 10 : 24);
    if (box.tagName === 'TBODY') for (const [i, r] of rows.entries()) r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: Math.min(i, 10) * 22, easing: 'ease-out', fill: 'backwards' });
    else rise(rows, { step: 26, from: 10 });
  }).observe(box, { childList: true });
}

export function initMotion() {
  addEventListener('pointerdown', press, { capture: true, passive: true });
  for (const t of ['pointerup', 'pointercancel', 'dragstart'] as const) addEventListener(t, release, { capture: true, passive: true });
  addEventListener('blur', release);
  for (const id of LISTS) { const el = document.getElementById(id); if (el) watchList(el); }
}
