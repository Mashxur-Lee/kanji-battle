// 0.9.9.9.9.2: less text on screen. An explanation that sat under a heading all the time (Customize's line under each
// slot, the results' note on the words you missed, the hints in Settings) folds behind a small (i): tap it to read.
import { tr } from './i18n';

const INFO = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 10.5v6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="7.3" r="1.4" fill="currentColor"/></svg>';
/** what folds away */
const FOLDED = ['#custSub', '#struggledBox h3 small', '#volPanel .set-sec > p.hint:not([id])',
  // 0.9.9.9.9.3: each page's opening paragraph (the title says what the page is; the (i) says how it works)
  '#queue > p.sub', '#private h2 + p.sub', '#friends > p.sub', '#history > p.sub', '#study > p.sub', '#quizzes .qz-titles > p.sub', '#daily > p.sub', '#progress > p.sub', '#kana > p.sub'];

export function tipify(el: HTMLElement) {
  if (el.dataset.tipped) return;
  el.dataset.tipped = '1';
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'tip-btn';
  b.setAttribute('aria-label', tr('More')); b.setAttribute('aria-expanded', 'false'); b.title = tr('More');
  b.innerHTML = INFO;
  el.classList.add('tip-text');
  el.before(b);
  b.onclick = (e) => { e.stopPropagation(); const on = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', String(on)); el.classList.toggle('open', on); };
}
export function initTips() { for (const sel of FOLDED) for (const el of document.querySelectorAll<HTMLElement>(sel)) tipify(el); }
