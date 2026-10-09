// Spaced repetition modelled on Anki's default scheduler (SM-2 family, as in Anki's open-source
// code): learning steps 1m → 10m, graduate at 1 day ("Easy" → 4 days), starting ease 250%,
// Hard ×1.2, Easy bonus ×1.3, lapses drop ease by 20% and go through a 10-minute relearning step.

export type CardState = 'new' | 'learning' | 'review' | 'relearning';
export type Rating = 'again' | 'hard' | 'good' | 'easy';
export const RATINGS: Rating[] = ['again', 'hard', 'good', 'easy'];

export interface SrsCard {
  vocabId: string;
  state: CardState;
  step: number; // index into the (re)learning steps
  ease: number; // permille, 2500 = 250%
  intervalDays: number;
  due: number; // epoch ms
  reps: number;
  lapses: number;
  struggling: boolean; // missed in a battle → shows up in "Struggling spells"
}

export const SRS = {
  learnSteps: [1, 10], // minutes
  relearnSteps: [10],
  graduatingDays: 1,
  easyDays: 4,
  startEase: 2500,
  minEase: 1300,
  hardFactor: 1.2,
  easyBonus: 1.3,
  lapseEaseDrop: 200,
  hardEaseDrop: 150,
  easyEaseGain: 150,
  maxDays: 36500,
};

const MIN = 60_000;
const DAY = 86_400_000;

export function newCard(vocabId: string, now: number, struggling = false): SrsCard {
  return { vocabId, state: 'new', step: 0, ease: SRS.startEase, intervalDays: 0, due: now, reps: 0, lapses: 0, struggling };
}

/** Learned = graduated to review at least once (counts toward crit). */
export const isLearned = (c: Pick<SrsCard, 'state'>) => c.state === 'review';
export const isDue = (c: SrsCard, now: number) => c.due <= now;

function stepMinutes(steps: number[], i: number) { return steps[Math.min(i, steps.length - 1)]; }

/** Returns the card after answering. Pure. */
export function answer(card: SrsCard, rating: Rating, now: number): SrsCard {
  const c: SrsCard = { ...card, reps: card.reps + 1 };
  const inLearning = c.state === 'new' || c.state === 'learning';
  const toReview = (days: number) => {
    c.state = 'review';
    c.step = 0;
    c.intervalDays = Math.min(SRS.maxDays, Math.max(1, Math.round(days)));
    c.due = now + c.intervalDays * DAY;
  };

  if (inLearning || c.state === 'relearning') {
    const steps = c.state === 'relearning' ? SRS.relearnSteps : SRS.learnSteps;
    if (c.state === 'new') c.state = 'learning';
    const graduateDays = card.state === 'relearning' ? Math.max(1, card.intervalDays) : SRS.graduatingDays;
    switch (rating) {
      case 'again':
        c.step = 0;
        c.due = now + steps[0] * MIN;
        break;
      case 'hard': {
        // Anki: on the first step, Hard waits halfway between step 1 and 2; otherwise repeats the step
        const m = c.step === 0 && steps.length > 1 ? (steps[0] + steps[1]) / 2 : stepMinutes(steps, c.step);
        c.due = now + m * MIN;
        break;
      }
      case 'good':
        if (c.step + 1 >= steps.length) toReview(graduateDays);
        else { c.step += 1; c.due = now + steps[c.step] * MIN; }
        break;
      case 'easy':
        toReview(card.state === 'relearning' ? graduateDays + 1 : SRS.easyDays);
        break;
    }
    return c;
  }

  // review card
  const late = Math.max(0, (now - card.due) / DAY);
  const ivl = card.intervalDays;
  switch (rating) {
    case 'again':
      c.lapses += 1;
      c.ease = Math.max(SRS.minEase, c.ease - SRS.lapseEaseDrop);
      c.state = 'relearning';
      c.step = 0;
      c.intervalDays = 1; // Anki default "new interval" after a lapse = 0% → 1 day minimum
      c.due = now + SRS.relearnSteps[0] * MIN;
      return c;
    case 'hard':
      c.ease = Math.max(SRS.minEase, c.ease - SRS.hardEaseDrop);
      toReview(Math.max(ivl + 1, ivl * SRS.hardFactor));
      return c;
    case 'good':
      toReview(Math.max(ivl + 1, (ivl + late / 2) * (card.ease / 1000)));
      return c;
    case 'easy':
      c.ease = card.ease + SRS.easyEaseGain;
      toReview(Math.max(ivl + 2, (ivl + late) * (card.ease / 1000) * SRS.easyBonus));
      return c;
  }
}

/** "1m", "10m", "1d", "3mo"… — the labels Anki shows above its buttons. */
export function formatInterval(ms: number): string {
  const m = ms / MIN;
  if (m < 60) return `${Math.max(1, Math.round(m))}m`;
  const h = m / 60;
  if (h < 24) return `${Math.round(h)}h`;
  const d = h / 24;
  if (d < 30) return `${Math.round(d)}d`;
  if (d < 365) return `${(d / 30).toFixed(d < 300 ? 1 : 0).replace(/\.0$/, '')}mo`;
  return `${(d / 365).toFixed(1).replace(/\.0$/, '')}y`;
}

export const previewIntervals = (card: SrsCard, now: number): Record<Rating, string> =>
  Object.fromEntries(RATINGS.map((r) => [r, formatInterval(answer(card, r, now).due - now)])) as Record<Rating, string>;
