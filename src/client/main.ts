import { LEVELS, type Level, type PlayerId, type PlayerView, type ServerMessage } from '../shared/protocol';
import * as audio from './audio';
import { GameSocket } from './net';
import * as ui from './ui';

let you: PlayerId = '';
let code = '';
let players: PlayerView[] = [];
let challengeId = 0;
let readyIds: PlayerId[] = [];

// ── remembered per-browser preferences ──────────────────────────────────────
const store = {
  get(key: string) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key: string, v: string) { try { localStorage.setItem(key, v); } catch { /* ignore */ } },
};
const savedLevels = (): Level[] => {
  try {
    const raw = JSON.parse(store.get('kb:levels') ?? '[]');
    const lv = LEVELS.filter((l) => Array.isArray(raw) && raw.includes(l));
    return lv.length ? lv : ['N3', 'N2'];
  } catch { return ['N3', 'N2']; }
};

const socket = new GameSocket(onMessage, () => {
  ui.setError('Disconnected from server — refresh to play again.');
  ui.show('menu');
});

function backToMenu() {
  you = '';
  code = '';
  players = [];
  ui.stopCountdown();
  ui.show('menu');
}

function onMessage(msg: ServerMessage) {
  switch (msg.type) {
    case 'joined':
      you = msg.you;
      code = msg.code;
      ui.setError('');
      break;
    case 'left':
      backToMenu();
      break;
    case 'lobby':
      players = msg.players;
      ui.showLobby(code, msg.players, you, msg.hostId, msg.maxPlayers);
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
      ui.showBattle(players, you, msg.countdownMs, msg.durationMs, (n) => (n > 0 ? audio.sfx.tick() : audio.sfx.go()));
      break;
    case 'challenge':
      challengeId = msg.id;
      ui.showChallenge(msg.kanji, msg.answer, msg.timeLimitMs);
      break;
    case 'answer_result':
      if (msg.challengeId !== challengeId) break;
      ui.lockInput();
      ui.setFeedback(msg);
      if (msg.correct) audio.sfx.correct(msg.combo);
      else audio.sfx.wrong();
      break;
    case 'battle_update': {
      players = msg.players;
      const e = msg.event;
      const mine = e.playerId === you;
      if (e.kind === 'hit') {
        // HP bars update when the spell lands, not before.
        void ui.castSpell(mine, e.kanji, e.damage).then(() => {
          ui.renderFighters(players, you);
          if (mine) audio.sfx.impact();
          else audio.sfx.hurt();
        });
      } else {
        ui.fizzle(mine);
        ui.renderFighters(players, you);
      }
      if (!mine) {
        const name = players.find((p) => p.id === e.playerId)?.name ?? 'Opponent';
        if (e.kind === 'hit') ui.logOpponent(`${name} cast for ${e.damage}${e.combo >= 2 ? ` (×${e.combo})` : ''}:`, e.kanji);
        else ui.logOpponent(`${name} fumbled:`, e.kanji);
      }
      break;
    }
    case 'game_over': {
      players = msg.players;
      ui.lockInput();
      const delay = msg.reason === 'forfeit' ? 300 : 1800;
      setTimeout(() => {
        ui.renderFighters(players, you);
        if (msg.reason === 'ko') for (const p of players) if (p.hp <= 0) ui.knockOut(p.id === you);
      }, 450);
      setTimeout(() => {
        if (msg.winnerId === you) audio.sfx.win();
        else if (msg.winnerId) audio.sfx.lose();
        ui.showResults(msg.players, you, msg.winnerId, msg.reason, msg.stats);
      }, delay);
      break;
    }
    case 'rematch_status':
      ui.setRematchStatus(msg.votes, you, players.length);
      break;
    case 'error':
      if (you) ui.$('lobbyStatus').textContent = msg.message;
      else ui.setError(msg.message);
      break;
  }
}

// ── menu ────────────────────────────────────────────────────────────────────
const nameValue = () => ui.$<HTMLInputElement>('name').value.trim() || 'Player';
ui.$<HTMLInputElement>('name').value = store.get('kb:name') ?? '';
const rememberName = () => store.set('kb:name', nameValue());

ui.$('create').onclick = () => { rememberName(); socket.send({ type: 'create', name: nameValue(), levels: savedLevels() }); };
const join = () => {
  rememberName();
  socket.send({ type: 'join', code: ui.$<HTMLInputElement>('joinCode').value, name: nameValue(), levels: savedLevels() });
};
ui.$('join').onclick = join;
ui.$<HTMLInputElement>('joinCode').addEventListener('keydown', (e) => { if (e.key === 'Enter') join(); });

// ── lobby ───────────────────────────────────────────────────────────────────
ui.$('levelChips').addEventListener('change', (e) => {
  const levels = ui.selectedLevels();
  if (levels.length === 0) { (e.target as HTMLInputElement).checked = true; return; } // keep at least one
  store.set('kb:levels', JSON.stringify(levels));
  socket.send({ type: 'levels', levels });
});
ui.$('leaveLobby').onclick = () => socket.send({ type: 'leave' });
ui.$('start').onclick = () => socket.send({ type: 'start' });

// ── prep / battle ───────────────────────────────────────────────────────────
ui.$('ready').onclick = () => socket.send({ type: 'ready' });

const skip = () => {
  const input = ui.$<HTMLInputElement>('answer');
  if (input.disabled) return;
  socket.send({ type: 'skip', challengeId });
  ui.lockInput();
};
ui.$('skip').onclick = skip;

ui.$<HTMLInputElement>('answer').addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !e.isComposing) { e.preventDefault(); return skip(); }
  // With a Japanese IME, the first Enter confirms the conversion — don't submit on that one.
  if (e.key !== 'Enter' || e.isComposing || e.keyCode === 229) return;
  const input = e.currentTarget as HTMLInputElement;
  const text = input.value.trim();
  if (!text || input.disabled) return;
  if (ui.currentAnswerMode() === 'romaji' && !/^[a-z' -]+$/i.test(text.normalize('NFKC'))) {
    ui.setInputHint('Use romaji for hiragana spells (switch your IME off)', true);
    return; // don't burn the attempt on a format slip
  }
  socket.send({ type: 'answer', challengeId, text: input.value });
  ui.lockInput(); // one attempt per challenge
});

// ── results ─────────────────────────────────────────────────────────────────
ui.$('rematch').onclick = () => socket.send({ type: 'rematch' });
ui.$('leave').onclick = () => socket.send({ type: 'leave' });

// ── audio ───────────────────────────────────────────────────────────────────
ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn());
ui.$('radioBtn').onclick = () => { audio.setRadio(!audio.isRadioOn()); ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn()); };
ui.$('sfxBtn').onclick = () => { audio.setSfx(!audio.isSfxOn()); ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn()); };
// Browsers only allow sound after a user gesture.
const firstGesture = () => audio.unlock();
addEventListener('pointerdown', firstGesture, { once: true });
addEventListener('keydown', firstGesture, { once: true });
