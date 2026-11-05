// The main menu's veil (0.9.9.8.2): the painting stays as a frame around the edges, and behind the cards it fades
// into a frosted violet night — a slow aurora, a faint rune circle turning, and a few kanji drifting up like sparks —
// so the cards read cleanly without a plain purple wall. Shown only on the menu (style.css: body[data-screen="menu"]).

const GLYPHS = '火水木金土日月山川雨風雪花空星光夢力心魔術剣竜森海雷氷炎';
const RUNES = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';

export function initMenuVeil() {
  const veil = document.getElementById('menuVeil');
  if (!veil || veil.childElementCount) return;
  // the rune circle: two rings of runes and a star between them
  const ring = (r: number, n: number, size: number) => Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    const x = 200 + Math.cos(a) * r, y = 200 + Math.sin(a) * r;
    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-size="${size}" text-anchor="middle" dominant-baseline="central" transform="rotate(${((a * 180) / Math.PI + 90).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})">${RUNES[i % RUNES.length]}</text>`;
  }).join('');
  const star = Array.from({ length: 7 }, (_, i) => { const a = (i * 3 / 7) * Math.PI * 2 - Math.PI / 2; return `${(200 + Math.cos(a) * 128).toFixed(1)},${(200 + Math.sin(a) * 128).toFixed(1)}`; }).join(' ');
  veil.innerHTML = `
    <div class="mv-tint"></div>
    <div class="mv-aurora a"></div><div class="mv-aurora b"></div>
    <svg class="mv-circle" viewBox="0 0 400 400" aria-hidden="true" fill="none" stroke="currentColor">
      <circle cx="200" cy="200" r="190" stroke-width="1.2"/><circle cx="200" cy="200" r="168" stroke-width=".8"/>
      <circle cx="200" cy="200" r="132" stroke-width="1"/><polygon points="${star}" stroke-width=".9"/>
      <g fill="currentColor" stroke="none" font-family="serif">${ring(179, 36, 13)}</g>
      <g class="mv-inner" fill="currentColor" stroke="none" font-family="serif">${ring(118, 18, 11)}</g>
    </svg>
    <div class="mv-glyphs">${Array.from({ length: innerWidth > 900 ? 22 : 14 }, (_, i) => {
      const g = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      // 0.9.9.9.1: also with "reduce motion" on (Windows turns it on with its animation effects off) — then they
      // stand still instead of disappearing (style.css)
      // 0.9.9.9: most of them drift up the sides, where the cards don't cover them (on a computer they were lost behind the cards)
      const side = i % 3 !== 0, left = side ? (i % 2 ? 2 + Math.random() * 22 : 76 + Math.random() * 22) : 4 + Math.random() * 92;
      const dur = 16 + Math.random() * 16, delay = -Math.random() * dur, size = (1.3 + Math.random() * 2.2) * (innerWidth > 900 ? 1.6 : 1); // (bigger on a computer, where the page is drawn smaller)
      return `<span lang="ja" style="left:${left.toFixed(1)}%;font-size:${size.toFixed(2)}rem;animation-duration:${dur.toFixed(1)}s;animation-delay:${delay.toFixed(1)}s;--o:${(0.22 + (i % 4) * 0.07).toFixed(2)};--y:${(8 + Math.random() * 80).toFixed(0)}%">${g}</span>`;
    }).join('')}</div>`;
}
