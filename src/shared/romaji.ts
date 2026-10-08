// Accepts both Hepburn (shi, chi, tsu) and Kunrei-style (si, ti, tu) typing.
const RULES: Array<[RegExp, string]> = [
  [/[\s'-]/g, ''],
  [/sy([auo])/g, 'sh$1'],
  [/ty([auo])/g, 'ch$1'],
  [/(?:zy|jy)([auo])/g, 'j$1'],
  [/si/g, 'shi'],
  [/ti/g, 'chi'],
  [/tu/g, 'tsu'],
  [/hu/g, 'fu'],
  [/zi/g, 'ji'],
];

export function normalizeRomaji(input: string): string {
  return RULES.reduce((s, [re, to]) => s.replace(re, to), input.trim().toLowerCase());
}

export const isCorrect = (input: string, expected: string): boolean =>
  normalizeRomaji(input) === normalizeRomaji(expected);
