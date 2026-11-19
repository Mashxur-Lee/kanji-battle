// 0.9.9.9.7.2: a connection that went quiet is noticed. A phone that loses its signal mid-battle doesn't close its
// connection — it just stops answering — and the server kept its seat "online" until the operating system gave up
// on it (minutes); only then did the 60-second grace for coming back begin, and the opponent waited all that time.
// Now the server pings every connection (a WebSocket ping, which the browser answers by itself — the app needs no
// change) and closes one that didn't answer the last ping: gone within 15 to 30 seconds.
export const HEARTBEAT_MS = 15_000;
export interface PingSocket {
  ping(): void;
  terminate(): void;
  on(event: 'pong' | 'close', fn: () => void): unknown;
}
export function heartbeat(ws: PingSocket, everyMs = HEARTBEAT_MS): void {
  let answered = true;
  ws.on('pong', () => { answered = true; });
  const timer = setInterval(() => {
    if (!answered) { clearInterval(timer); ws.terminate(); return; } // ('close' follows: the seat's grace begins)
    answered = false;
    try { ws.ping(); } catch { /* closing anyway */ }
  }, everyMs);
  timer.unref?.();
  ws.on('close', () => clearInterval(timer));
}
