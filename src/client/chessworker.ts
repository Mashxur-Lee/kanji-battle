// 0.9.9.9.9.6 (round 5): the bot wizards think here, off the page — the Dragon searches for seconds, and the page (and
// its clocks and animations) must not freeze while it does. Built on its own into public/chessworker.js.
import { botMove, moveUci, parseFen, type BotId } from '../shared/chess';

self.onmessage = (e: MessageEvent<{ id: number; fen: string; bot: BotId }>) => {
  const { id, fen, bot } = e.data;
  const m = botMove(parseFen(fen), bot);
  (self as unknown as { postMessage: (x: unknown) => void }).postMessage({ id, uci: m ? moveUci(m) : null });
};
