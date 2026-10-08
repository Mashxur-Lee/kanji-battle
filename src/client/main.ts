import type { PlayerView, ServerMessage } from '../shared/protocol';
import { GameSocket } from './net';
import * as ui from './ui';

let you = '';
let players: PlayerView[] = [];

const socket = new GameSocket(onMessage, () => ui.setError('Disconnected from server'));

function onMessage(msg: ServerMessage) {
  switch (msg.type) {
    case 'joined':
      you = msg.you;
      players = msg.players;
      ui.showLobby(msg.code);
      break;
    case 'lobby':
      players = msg.players;
      ui.renderFighters(players, you);
      ui.getReady();
      break;
    case 'round':
      ui.renderFighters(msg.players, you);
      ui.startRound(msg.number, msg.kanji, msg.durationMs);
      break;
    case 'wrong':
      ui.setFeedback('Not quite — try again!', 'bad');
      break;
    case 'round_end':
      ui.renderFighters(msg.players, you);
      ui.endRound(msg.entry, msg.winnerId, you);
      break;
    case 'game_over':
      ui.stopTimer();
      setTimeout(() => ui.showResults(msg.players, you, msg.winnerId, msg.history), 2000);
      break;
    case 'error':
      ui.setError(msg.message);
      break;
  }
}

const nameValue = () => ui.$<HTMLInputElement>('name').value.trim() || 'Player';

ui.$('create').onclick = () => socket.send({ type: 'create', name: nameValue() });
ui.$('join').onclick = () =>
  socket.send({ type: 'join', code: ui.$<HTMLInputElement>('joinCode').value, name: nameValue() });
ui.$('again').onclick = () => location.reload();

ui.$<HTMLInputElement>('answer').addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const input = e.currentTarget as HTMLInputElement;
  if (!input.value.trim()) return;
  socket.send({ type: 'answer', text: input.value });
  input.value = '';
});
