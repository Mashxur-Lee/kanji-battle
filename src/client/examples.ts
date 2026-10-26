// Example sentences on the study cards (0.9.9.4.2): a short sentence with the word marked, and its translation,
// shown with the answer. data/examples/*.tsv → public/examples.json (kept for offline use by the service worker).
import { lang } from './i18n';

type Example = [ja: string, en: string, ru: string];
let loading: Promise<Map<string, Example>> | null = null;
export function loadExamples(): Promise<Map<string, Example>> {
  loading ??= fetch('/examples.json').then((r) => (r.ok ? r.json() : {})).then((o: Record<string, Example>) => new Map(Object.entries(o)))
    .catch(() => { loading = null; return new Map<string, Example>(); });
  return loading;
}

/** The example for a word as elements (null if there is none): the sentence with 【the word】 highlighted, and its translation. */
export async function exampleFor(vocabId: string): Promise<HTMLElement | null> {
  const ex = (await loadExamples()).get(vocabId);
  if (!ex) return null;
  const box = document.createElement('div');
  box.className = 'fc-example';
  const ja = document.createElement('p');
  ja.className = 'fc-ex-ja';
  ja.lang = 'ja';
  for (const part of ex[0].split(/(【[^】]+】)/)) {
    if (!part) continue;
    if (part.startsWith('【')) { const m = document.createElement('mark'); m.textContent = part.slice(1, -1); ja.append(m); }
    else ja.append(part);
  }
  const tr = document.createElement('p');
  tr.className = 'fc-ex-tr';
  tr.setAttribute('data-no-i18n', '');
  tr.textContent = lang() === 'ru' && ex[2] ? ex[2] : ex[1];
  box.append(ja, tr);
  return box;
}
