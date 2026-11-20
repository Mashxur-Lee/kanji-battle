// 0.9.9.9.8: a new password (signing up, saving a guest, a reset, a change) is at least 8 characters and not one of the
// passwords people guess first. Accounts made before keep signing in with theirs; the rule is for new ones.
// (Six characters was the old minimum: a list of common passwords gets through those quickly, even with the limits on
// wrong tries, when it is spread over many accounts.)

export const PASSWORD_MIN = 8;
export const PASSWORD_MAX = 72; // (scrypt takes more, but nobody types more)

/** the most used passwords of 8+ characters (from public leak lists), and the ones this game would invite */
const COMMON = new Set([
  'password', 'password1', 'password12', 'password123', 'passw0rd', 'p@ssw0rd', 'p@ssword', '12345678', '123456789', '1234567890',
  '0123456789', '87654321', '98765432', '11111111', '00000000', '12341234', '11223344', '12121212', '123123123', '123321123',
  '1q2w3e4r', '1q2w3e4r5t', 'q1w2e3r4', 'q1w2e3r4t5', '1qaz2wsx', 'zaq12wsx', 'qwertyui', 'qwertyuiop', 'qwerty12', 'qwerty123',
  'qwer1234', '1234qwer', 'asdfghjk', 'asdf1234', 'zxcvbnm1', 'abc12345', 'abcd1234', 'abcdefgh', 'aaaaaaaa', 'iloveyou',
  'iloveyou1', 'sunshine', 'princess', 'football', 'baseball', 'superman', 'batman123', 'trustno1', 'welcome1', 'welcome123',
  'letmein1', 'dragon12', 'monkey12', 'master12', 'shadow12', 'michael1', 'whatever', 'computer', 'internet', 'starwars',
  'pokemon1', 'minecraft', 'naruto123', 'sasuke123', 'onepiece', 'doraemon', 'kanjiwizards', 'kanjiwizard', 'kanji123', 'kanjikanji',
  'japanese', 'nihongo1', 'wizard12', 'wizard123', 'konnichiwa', 'arigatou', 'sayonara', 'sakura12', 'qwertyqwerty', 'parol123',
  'йцукенгш', 'пароль123', 'qazwsxedc', 'changeme', 'administrator', 'admin123', 'admin1234', 'user1234', 'test1234', 'secret123',
]);

/** why `p` can't be a new password for `login` (null: it can) */
export function passwordProblem(p: string, login = ''): string | null {
  if (p.length < PASSWORD_MIN || p.length > PASSWORD_MAX) return 'Password: at least 8 characters';
  const low = p.toLowerCase(), name = login.trim().toLowerCase();
  if (COMMON.has(low) || /^(.)\1+$/.test(p) || '01234567890'.includes(p) || '98765432109'.includes(p)) return 'That password is too easy to guess. Pick another one.';
  if (name.length >= 3 && low.includes(name)) return 'Your password can’t have your login in it.';
  return null;
}
