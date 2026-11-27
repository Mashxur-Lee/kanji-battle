// 0.9.9.9.9.6 (round 4): Kanji chess pieces shaped like chess pieces.
// Round 5: the owner's own design ("use my design for pieces") — ivory and gold for White, purple lacquer and gold for
// Black, the kanji on each (public/chess/<colour><kind>.webp, cut from the owner's sheet, 'Chess pieces.png', all on one
// canvas, bottom-centred). A pawn is about a square tall; the crowns rise above it: each stands on the square's bottom.
import { PIECE_KANJI, type Color, type Kind } from '../shared/chess';

/** one piece: its picture, with its kanji as text for screen readers (and the move list's tests) */
export function pieceSvg(color: Color, kind: Kind): string {
  return `<img class="pc-img" src="chess/${color}${kind}.webp" alt="" draggable="false" decoding="async"><span class="pc-k vh" lang="ja">${PIECE_KANJI[kind]}</span>`;
}
/** a small one, for the captured-pieces row */
export function miniPiece(color: Color, kind: Kind): string {
  return `<span class="pc-mini ${color}">${pieceSvg(color, kind)}</span>`;
}
/** every piece picture, fetched once (the board never waits for one) */
export function preloadPieces() {
  for (const c of ['w', 'b'] as const) for (const k of ['k', 'q', 'r', 'b', 'n', 'p'] as const) { const i = new Image(); i.src = `chess/${c}${k}.webp`; }
}
