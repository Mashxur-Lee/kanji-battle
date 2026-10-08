import type { KanjiEntry, PlayerId, PlayerView, RoundRecord } from '../shared/protocol';

export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

const SCREENS = ['menu', 'lobby', 'game', 'results'] as const;
export const show = (screen: (typeof SCREENS)[number]) => SCREENS.forEach((s) => ($(s).hidden = s !== screen));

export const setError = (text: string) => { $('error').textContent = text; };

export function showLobby(code: string) {
  $('code').textContent = code;
  show('lobby');
}

export function renderFighters(players: PlayerView[], you: PlayerId) {
  $('fighters').replaceChildren(
    ...players.map((p) => {
      const el = document.createElement('div');
      el.className = 'fighter' + (p.id === you ? ' me' : '');
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = p.id === you ? `${p.name} (you)` : p.name;
      const bar = document.createElement('div');
      bar.className = 'hp';
      const fill = document.createElement('div');
      fill.style.width = `${p.hp}%`; // maxHp is 100
      bar.append(fill);
      const num = document.createElement('div');
      num.className = 'hpnum';
      num.textContent = `${p.hp} HP`;
      el.append(name, bar, num);
      return el;
    }),
  );
}

export function setFeedback(text: string, kind: 'good' | 'bad' | '' = '') {
  const el = $('feedback');
  el.textContent = text;
  el.className = 'feedback ' + kind;
}

let raf = 0;
export const stopTimer = () => cancelAnimationFrame(raf);
function runTimer(durationMs: number) {
  stopTimer();
  const start = performance.now();
  const tick = () => {
    const left = Math.max(0, 1 - (performance.now() - start) / durationMs);
    $('timerBar').style.width = `${left * 100}%`;
    if (left > 0) raf = requestAnimationFrame(tick);
  };
  tick();
}

export function getReady() {
  show('game');
  $('roundInfo').textContent = 'Get ready…';
  $('kanji').textContent = '…';
  $<HTMLInputElement>('answer').disabled = true;
  setFeedback('');
}

export function startRound(number: number, kanji: string, durationMs: number) {
  show('game');
  $('roundInfo').textContent = `Round ${number}`;
  $('kanji').textContent = kanji;
  const input = $<HTMLInputElement>('answer');
  input.disabled = false;
  input.value = '';
  input.focus();
  setFeedback('');
  runTimer(durationMs);
}

export function endRound(entry: KanjiEntry, winnerId: PlayerId | null, you: PlayerId) {
  stopTimer();
  $<HTMLInputElement>('answer').disabled = true;
  const reveal = `${entry.kanji} = ${entry.romaji} (${entry.meaning})`;
  if (winnerId === you) setFeedback(`You hit! ${reveal}`, 'good');
  else if (winnerId) setFeedback(`Opponent was faster. ${reveal}`, 'bad');
  else setFeedback(`Time's up! ${reveal}`, 'bad');
}

export function showResults(players: PlayerView[], you: PlayerId, winnerId: PlayerId | null, history: RoundRecord[]) {
  const opp = players.find((p) => p.id !== you);
  $('resultTitle').textContent = winnerId === you ? '🏆 Victory!' : '💀 Defeat';
  $('thOpp').textContent = opp?.name ?? 'Opponent';
  $('resultRows').innerHTML = history
    .map((r, i) => {
      const mark = (id?: PlayerId) =>
        id && r.outcomes[id] === 'correct' ? '<span class="ok">✓ correct</span>' : '<span class="no">✗ wrong</span>';
      return `<tr><td>${i + 1}</td><td class="k">${r.entry.kanji}</td>
        <td>${r.entry.romaji}<small>${r.entry.kana}</small></td><td>${r.entry.meaning}</td>
        <td>${mark(you)}</td><td>${mark(opp?.id)}</td></tr>`;
    })
    .join('');
  show('results');
}
