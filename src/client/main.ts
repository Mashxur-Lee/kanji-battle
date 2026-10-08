import type { PlayerId, PlayerView, ServerMessage } from '../shared/protocol';
import { GameSocket } from './net';
import * as ui from './ui';

let you: PlayerId = '';
let code = '';
let players: PlayerView[] = [];
let challengeId = 0;
let readyIds: PlayerId[] = [];

const socket = new GameSocket(onMessage, () => {
  ui.setError('Disconnected from server — refresh to play again.');
  ui.show('menu');
});

function onMessage(msg: ServerMessage) {
  switch (msg.type) {
    case 'joined':
      you = msg.you;
      code = msg.code;
      ui.setError('');
      break;
    case 'lobby':
      players = msg.players;
      ui.showLobby(code, msg.players, you, msg.hostId, msg.settings, msg.maxPlayers);
      break;
    case 'prep':
      readyIds = [];
      ui.showPrep(msg.pool, msg.durationMs);
      ui.setReady(0, players.length, false);
      break;
    case 'prep_ready':
      readyIds = msg.readyIds;
      ui.setReady(readyIds.length, players.length, readyIds.includes(you));
      break;
    case 'battle_start':
      players = msg.players;
      ui.showBattle(players, you, msg.countdownMs, msg.durationMs);
      break;
    case 'challenge':
      challengeId = msg.id;
      ui.showChallenge(msg.kanji, msg.timeLimitMs);
      break;
    case 'answer_result':
      if (msg.challengeId !== challengeId) break;
      ui.lockInput();
      ui.setFeedback(msg);
      break;
    case 'battle_update': {
      players = msg.players;
      ui.renderFighters(players, you);
      const e = msg.event;
      if (e.kind === 'hit') ui.flashHit(e.targetId === you, e.damage);
      if (e.playerId !== you) {
        const name = players.find((p) => p.id === e.playerId)?.name ?? 'Opponent';
        if (e.kind === 'hit') ui.logOpponent(`${name} cast for ${e.damage}${e.combo >= 2 ? ` (×${e.combo})` : ''}:`, e.kanji);
        else ui.logOpponent(`${name} fumbled:`, e.kanji);
      }
      break;
    }
    case 'game_over':
      players = msg.players;
      ui.lockInput();
      ui.renderFighters(players, you);
      setTimeout(() => ui.showResults(msg.players, you, msg.winnerId, msg.reason, msg.stats), msg.reason === 'forfeit' ? 300 : 1500);
      break;
    case 'rematch_status':
      ui.setRematchStatus(msg.votes, you, players.length);
      break;
    case 'error':
      if (you) ui.$('lobbyStatus').textContent = msg.message;
      else ui.setError(msg.message);
      break;
  }
}

const nameValue = () => ui.$<HTMLInputElement>('name').value.trim() || 'Player';
try { ui.$<HTMLInputElement>('name').value = localStorage.getItem('kb:name') ?? ''; } catch { /* storage unavailable */ }
const rememberName = () => { try { localStorage.setItem('kb:name', nameValue()); } catch { /* ignore */ } };

ui.$('create').onclick = () => { rememberName(); socket.send({ type: 'create', name: nameValue() }); };
const join = () => { rememberName(); socket.send({ type: 'join', code: ui.$<HTMLInputElement>('joinCode').value, name: nameValue() }); };
ui.$('join').onclick = join;
ui.$<HTMLInputElement>('joinCode').addEventListener('keydown', (e) => { if (e.key === 'Enter') join(); });

ui.$('levelChips').addEventListener('change', (e) => {
  const levels = ui.selectedLevels();
  if (levels.length > 0) socket.send({ type: 'settings', levels });
  else (e.target as HTMLInputElement).checked = true; // at least one level must stay selected
});
ui.$('start').onclick = () => socket.send({ type: 'start' });
ui.$('ready').onclick = () => socket.send({ type: 'ready' });
ui.$('rematch').onclick = () => socket.send({ type: 'rematch' });
ui.$('leave').onclick = () => location.reload();

ui.$<HTMLInputElement>('answer').addEventListener('keydown', (e) => {
  // With a Japanese IME, the first Enter confirms the conversion — don't submit on that one.
  if (e.key !== 'Enter' || e.isComposing || e.keyCode === 229) return;
  const input = e.currentTarget as HTMLInputElement;
  if (!input.value.trim() || input.disabled) return;
  socket.send({ type: 'answer', challengeId, text: input.value });
  input.disabled = true; // one attempt per challenge; the server's answer_result re-enables the flow
});
