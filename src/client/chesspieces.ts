// 0.9.9.9.9.6 (round 4): Kanji chess pieces shaped like chess pieces ("make the pieces look like real chess pieces"):
// a broad bell of a body that carries the kanji large (still the thing you learn), and on top of it what makes the
// piece itself — the king's cross and crown, the queen's pointed crown, the rook's battlements, the bishop's mitre, the
// knight's horse head, the pawn's dome — on a flared plinth with a gold gem. Ivory with black ink for White, lacquer
// with gold for Black, both trimmed in gold (the fills are gradients defined once in index.html: #pcIvory, #pcLacquer,
// #pcGold).
import { PIECE_KANJI, type Color, type Kind } from '../shared/chess';

// in a 100 × 100 box: the body (shared), the top (each piece's own), the plinth and its gem (shared)
const BODY = 'M22 80C22 62 26 49 33 40h34c7 9 11 22 11 40z';
const TOP: Record<Kind, string> = {
  p: '<path d="M36 41c1-13 9-21 14-29 5 8 13 16 14 29z"/>',
  r: '<path d="M30 41V21h8v6h8v-6h8v6h8v-6h8v20z"/>',
  b: '<path d="M34 41c0-13 10-23 16-33 6 10 16 20 16 33z"/><circle cx="50" cy="7" r="3.5"/>',
  n: '<path d="M34 42c-9-2-16-6-14-12 2-6 10-10 16-14 4-6 9-10 14-10l2-5 5 7c11 4 15 18 11 34z"/>',
  q: '<path d="M31 41l-5-21 12 10 6-16 6 12 6-12 6 16 12-10-5 21z"/><circle cx="26" cy="18" r="3.5"/><circle cx="44" cy="12" r="3.5"/><circle cx="56" cy="12" r="3.5"/><circle cx="74" cy="18" r="3.5"/>',
  k: '<path d="M33 41l-2-15 10 6 9-10 9 10 10-6-2 15z"/><path d="M47 2h6v6h6v6h-6v8h-6v-8h-6V8h6z"/>',
};
const PLINTH = '<path d="M15 79h70l-4 11H19z"/>';
const GEM = '<path class="pc-gem" d="M50 81l4.5 5-4.5 5-4.5-5z"/>';

/** one piece, as an svg (its kanji is its text, so a screen reader and a test still read 馬 for the knight) */
export function pieceSvg(color: Color, kind: Kind): string {
  return `<svg class="pc-svg pc-${color}" viewBox="0 0 100 100" aria-hidden="true"><g class="pc-body">${TOP[kind]}<path d="${BODY}"/>${PLINTH}</g>${GEM}`
    + `<text class="pc-k" x="50" y="61" font-size="38" text-anchor="middle" dominant-baseline="central" lang="ja">${PIECE_KANJI[kind]}</text></svg>`;
}
/** a small one, for the captured-pieces row */
export function miniPiece(color: Color, kind: Kind): string {
  return `<span class="pc-mini ${color}">${pieceSvg(color, kind)}</span>`;
}
