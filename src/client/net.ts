import type { ClientMessage, ServerMessage } from '../shared/protocol';

export type NetState = 'connecting' | 'online' | 'reconnecting' | 'stopped';

/**
 * WebSocket that survives phones: mobile browsers kill sockets when you switch apps (e.g. to send
 * the room code). We reconnect automatically — immediately when the page becomes visible again —
 * and re-authenticate with `hello`; the server then hands back our seat in the room.
 */
export class GameSocket {
  private ws?: WebSocket;
  private queue: string[] = [];
  private retry = 0;
  private timer?: number;
  private stopped = true;
  private token = '';

  constructor(
    private readonly onMessage: (m: ServerMessage) => void,
    private readonly onState: (s: NetState) => void,
  ) {
    const wake = () => { if (!this.stopped && (!this.ws || this.ws.readyState > WebSocket.OPEN)) this.connect(true); };
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') wake(); });
    addEventListener('online', wake);
    addEventListener('pageshow', wake);
  }

  start(token: string) {
    this.token = token;
    this.stopped = false;
    this.connect(false);
  }

  /** Log out / kicked / banned: close and don't come back. */
  stop() {
    this.stopped = true;
    clearTimeout(this.timer);
    this.queue = [];
    const ws = this.ws;
    this.ws = undefined;
    ws?.close();
    this.onState('stopped');
  }

  send(msg: ClientMessage) {
    const data = JSON.stringify(msg);
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(data);
    else this.queue.push(data); // delivered right after reconnecting
  }

  private connect(isRetry: boolean) {
    clearTimeout(this.timer);
    if (this.ws && this.ws.readyState <= WebSocket.OPEN) return;
    this.onState(isRetry ? 'reconnecting' : 'connecting');
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(`${proto}://${location.host}`);
    this.ws = ws;
    ws.onopen = () => {
      this.retry = 0;
      ws.send(JSON.stringify({ type: 'hello', token: this.token } satisfies ClientMessage));
      for (const d of this.queue.splice(0)) ws.send(d);
      this.onState('online');
    };
    ws.onmessage = (e) => this.onMessage(JSON.parse(e.data));
    ws.onclose = () => {
      if (this.ws !== ws || this.stopped) return;
      this.onState('reconnecting');
      const delay = Math.min(8000, 500 * 2 ** this.retry++);
      this.timer = window.setTimeout(() => this.connect(true), document.visibilityState === 'visible' ? delay : 15_000);
    };
  }
}
