import type { ClientMessage, ServerMessage } from '../shared/protocol';

/** Thin typed wrapper around the WebSocket. */
export class GameSocket {
  private ws: WebSocket;

  constructor(onMessage: (m: ServerMessage) => void, onClose: () => void) {
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    this.ws = new WebSocket(`${proto}://${location.host}`);
    this.ws.onmessage = (e) => onMessage(JSON.parse(e.data));
    this.ws.onclose = onClose;
  }

  send(msg: ClientMessage) {
    const data = JSON.stringify(msg);
    if (this.ws.readyState === WebSocket.OPEN) this.ws.send(data);
    else this.ws.addEventListener('open', () => this.ws.send(data), { once: true });
  }
}
