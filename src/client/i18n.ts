// Language: English (default) or Russian (Settings → Language). Dates always follow the chosen
// language — never the browser's — so a Russian Chrome no longer shows Russian dates in English UI.
//
// Russian works as a translation layer over the English UI: every text node (and placeholder / title /
// aria-label) that matches a known English string — exactly, or by a pattern for texts with numbers
// and names in them — is swapped for its Russian version, also as the page changes. Japanese text
// (lang="ja") and the words' English meanings are left alone. Anything not in the dictionary stays
// English, so a missing line never breaks the page.

export type Lang = 'en' | 'ru';
const KEY = 'kb:lang';

export function lang(): Lang {
  try { return localStorage.getItem(KEY) === 'ru' ? 'ru' : 'en'; } catch { return 'en'; }
}
/** The locale for dates and times. */
export const locale = () => (lang() === 'ru' ? 'ru-RU' : 'en-US');
export function setLang(l: Lang) {
  try { localStorage.setItem(KEY, l); } catch { /* private mode */ }
  location.reload(); // simplest way to redraw every screen in the new language
}

// ── the Russian dictionary ──────────────────────────────────────────────────
const RU: Record<string, string> = {
  // top bar, profile, settings
  'admin': 'админ', 'crit today': 'крит сегодня', 'wins': 'победы', 'losses': 'поражения', 'win rate': 'доля побед',
  'spells learned': 'выучено заклинаний', 'learned today': 'выучено сегодня', 'login streak (days)': 'серия входов (дни)',
  'best streak (days)': 'лучшая серия (дни)', 'Change picture': 'Сменить фото', 'Remove picture': 'Удалить фото', '⎋ Log out': '⎋ Выйти',
  '♪ Music': '♪ Музыка', 'Effects': 'Эффекты', 'Voice (word on a correct cast)': 'Голос (слово при верном ответе)',
  '3D arena': '3D-арена', 'Full': 'Полная', 'Lite (phones, older PCs)': 'Лёгкая (телефоны, старые ПК)', 'Off (2D)': 'Выкл. (2D)',
  'UI size': 'Размер интерфейса', 'Language': 'Язык', 'Close': 'Закрыть', 'Audio': 'Звук', 'Music': 'Музыка', 'Sounds': 'Звуки', 'Volume': 'Громкость',
  'Your profile': 'Ваш профиль', 'XP to next level': 'Опыт до следующего уровня', 'PNG, JPEG or WebP': 'PNG, JPEG или WebP',
  'Profile picture updated': 'Фото профиля обновлено', 'Could not use that picture': 'Не удалось использовать это фото',
  'Please pick an image': 'Выберите изображение', 'Could not read that image': 'Не удалось прочитать изображение',
  'Your browser has no WebGL — the classic 2D view is used.': 'В браузере нет WebGL — используется классический 2D-вид.',
  'First-person duel arena (move the mouse to look around). Lite is lighter on phones and older computers.': 'Арена от первого лица (двигайте мышь, чтобы осмотреться). «Лёгкая» — для телефонов и старых компьютеров.',
  'Turn your phone sideways during a game for the 3D arena (upright shows the 2D view).': 'Поверните телефон горизонтально во время игры для 3D-арены (вертикально — 2D-вид).',
  '3D was slow — lowered its resolution. Settings → 3D arena → Off for the 2D view.': '3D тормозило — разрешение снижено. Настройки → 3D-арена → Выкл. для 2D-вида.',
  '3D was slow on this device — switched to Lite (Settings → 3D arena).': '3D тормозило на этом устройстве — включена лёгкая версия (Настройки → 3D-арена).',

  // auth
'Study ten spells. Then cast them from memory.': 'Выучи десять заклинаний. Потом произнеси их по памяти.',
  'Log in': 'Войти', 'Register': 'Регистрация', 'Login': 'Логин', 'Password': 'Пароль', 'Create account': 'Создать аккаунт',
  'Login: 3–16 letters, numbers or _. Password: at least 6 characters.': 'Логин: 3–16 букв, цифр или _. Пароль: не меньше 6 символов.',
  'Server unreachable — try again in a moment.': 'Сервер недоступен — попробуйте чуть позже.',
  'Wrong username or password': 'Неверный логин или пароль', 'That username is taken': 'Это имя уже занято',
  'Too many attempts — wait a minute': 'Слишком много попыток — подождите минуту', 'Please log in': 'Пожалуйста, войдите',
  'Please log in again': 'Пожалуйста, войдите снова', 'This account has been banned': 'Этот аккаунт заблокирован',
  'Password: at least 6 characters': 'Пароль: не меньше 6 символов', 'Server error': 'Ошибка сервера', 'Something went wrong': 'Что-то пошло не так',

  // menu
  '← Menu': '← Меню', 'Online queue': 'Онлайн-очередь',
  "Tick what you'd like to play. You'll be matched with the first player who wants the same, and the game starts straight away. Boss Elimination waits for a full party of 4.":
    'Отметьте, во что хотите играть. Вас сведут с первым игроком, который хочет того же, и игра начнётся сразу. Битва с боссом ждёт полный отряд из 4 игроков.',
  'Battle modes': 'Режимы', 'Your levels': 'Ваши уровни', 'Deck Duel': 'Дуэль колод',
  'Queued on its own. No levels to pick: the cards come from N5 to N1.': 'Отдельная очередь. Уровни не выбираются: карты от N5 до N1.',
  'Start queue': 'Начать поиск', 'Start queue — Deck Duel': 'Начать поиск — Дуэль колод', 'Searching for a player…': 'Поиск игрока…', 'Cancel': 'Отмена',
  'Study struggling spells': 'Повторить трудные заклинания', 'Private game': 'Своя игра',
  "Play with friends: create a room and share its code, or enter a friend's code.": 'Играйте с друзьями: создайте комнату и поделитесь кодом или введите код друга.',
  'Create room': 'Создать комнату', 'Join': 'Войти', 'Daily challenge': 'Ежедневное испытание', 'new': 'новое',
  'Study spells': 'Изучать заклинания', 'Customize': 'Настройка', 'Progress': 'Прогресс', 'Friends': 'Друзья',
  'Match history': 'История матчей', 'Users': 'Игроки', 'How to play?': 'Как играть?', 'How to play': 'Как играть',
  'Tick at least one mode': 'Отметьте хотя бы один режим', 'Tick at least one level': 'Отметьте хотя бы один уровень',
  'Room codes have 4 letters': 'Код комнаты — 4 буквы', 'What to queue for': 'Во что искать игру', 'CODE': 'КОД', 'Room code': 'Код комнаты',
  'Choose a game mode': 'Выберите режим',
  '1v1 Kanji Reading': '1 на 1: Чтение кандзи', '1v1 Kanji Writing': '1 на 1: Написание кандзи', 'Boss Elimination': 'Битва с боссом',
  '1v1 Rapid': '1 на 1: Блиц',
  'Study, then see the kanji and type its reading. Your own stream of spells.': 'Выучите слова, затем увидите кандзи и напишите чтение. У каждого свой поток заклинаний.',
  'No study. Same kanji for both — first to type the reading (かな or romaji) hits.': 'Без подготовки. Один кандзи на двоих — кто первым напишет чтение (かな или ромадзи), тот и бьёт.',
  'Look at the kanji, press CAST! — it vanishes, and you write it from memory, by hand on the pad or with a Japanese keyboard.': 'Посмотрите на кандзи, нажмите CAST! — он исчезнет, и вы напишете его по памяти: от руки на панели или японской клавиатурой.',
  'Up to 4 players vs the Black Dragon. Mistakes get you clawed; it breathes fire every 30 s.': 'До 4 игроков против Чёрного дракона. За ошибки он бьёт когтями, а каждые 30 с дышит огнём.',
  "Pick a hero, draft 10 face-down spell cards, then cast them turn by turn: read the meaning, look at the kanji, write it from memory. Mana, heals and your hero's Omnipotence.":
    'Выберите героя, наберите 10 закрытых карт заклинаний и разыгрывайте их по очереди: прочитайте значение, посмотрите на кандзи, напишите по памяти. Мана, лечение и Всемогущество героя.',
  'Unlocks at level 1': 'Откроется на уровне 1', 'Unlocks at level 2': 'Откроется на уровне 2',

  // progress / daily / friends / history
  'Activity': 'Активность', 'Spell mastery': 'Освоение заклинаний', 'every word of each level — hover a square to see it': 'каждое слово каждого уровня — наведите на клетку, чтобы увидеть его',
  "Today's leaderboard": 'Таблица лидеров за сегодня', '↻ Refresh': '↻ Обновить', 'Activity over the last 26 weeks': 'Активность за последние 26 недель',
  'This week': 'Эта неделя', 'days active': 'активных дней', 'cards passed': 'карточек пройдено', 'Not in your spells yet': 'Ещё нет в ваших заклинаниях',
  'Nobody has played today yet — be the first!': 'Сегодня ещё никто не играл — будьте первым!', 'Ten words, the same for everyone today': 'Десять слов, сегодня одни и те же для всех',
  'Start': 'Начать', 'Continue': 'Продолжить', 'Skip': 'Пропустить', 'reading (かな or romaji)': 'чтение (かな или ромадзи)',
  'Start the challenge first': 'Сначала начните испытание',
  'Add players by name. When you\'re in a room\'s lobby, you can invite online friends straight in — even to modes they haven\'t unlocked yet.':
    'Добавляйте игроков по имени. В лобби комнаты можно сразу пригласить друзей онлайн — даже в режимы, которые у них ещё не открыты.',
  'Add friend': 'Добавить в друзья', 'Player name': 'Имя игрока', 'wants to be friends': 'хочет дружить', 'request sent': 'запрос отправлен',
  'Sent requests': 'Отправленные запросы', 'No friends yet — add someone by their player name above.': 'Друзей пока нет — добавьте кого-нибудь по имени выше.',
  'Accept': 'Принять', 'Decline': 'Отклонить', 'Remove': 'Удалить', 'Online': 'В сети', 'Offline': 'Не в сети',
  'Invite friends': 'Пригласить друзей', 'Invite': 'Пригласить', 'Invite again': 'Пригласить снова', 'In a game': 'В игре',
  'They are playing — invite them when their game is over': 'Друг играет — пригласите его, когда игра закончится',
  'No player with that name': 'Нет игрока с таким именем', 'Type a player name': 'Введите имя игрока', 'Your friend is offline': 'Ваш друг не в сети',
  'Your friend is already in this room': 'Ваш друг уже в этой комнате', 'You can only invite friends': 'Приглашать можно только друзей',
  'Your last 15 games. Open one to see its results again; click a name to see that player\'s profile.': 'Ваши последние 15 игр. Откройте игру, чтобы снова увидеть результаты; нажмите на имя, чтобы открыть профиль игрока.',
  'No matches yet — your finished games will show up here.': 'Матчей пока нет — здесь появятся ваши сыгранные игры.',
  '← Back to match history': '← К истории матчей', 'View profile': 'Профиль', 'Player profile': 'Профиль игрока',

  // study
  'Spaced repetition like Anki. Your crit chance starts every day at': 'Интервальные повторения, как в Anki. Шанс крита каждый день начинается с',
  '; every spell you learn today adds': '; каждое выученное сегодня заклинание добавляет',
  '(×1.5 damage, max 50%). It resets at midnight.': '(урон ×1.5, максимум 50%). Сбрасывается в полночь.',
  'All spells': 'Все заклинания', 'Tick levels — 25 new random words are added every day.': 'Отметьте уровни — каждый день добавляется 25 новых случайных слов.',
  'Study': 'Учить', 'Struggling spells': 'Трудные заклинания', 'Struggling': 'Трудные', 'Words you missed in battles land here automatically.': 'Слова, на которых вы ошиблись в боях, попадают сюда автоматически.',
  '← Study': '← Заклинания', 'Stroke order': 'Порядок черт', 'Show answer': 'Показать ответ', 'Space': 'Пробел',
  'Again': 'Снова', 'Hard': 'Трудно', 'Okay': 'Нормально', 'Easy': 'Легко', 'All done for now': 'На сейчас всё',
  'Come back later — cards return when they are due.': 'Возвращайтесь позже — карточки вернутся, когда придёт их время.', 'Back to study': 'Назад к изучению',
  'new spells added': 'добавлено новых заклинаний', 'Learned spells / study set size': 'Выучено заклинаний / размер набора',
  'Tick one or more levels under “All spells” to get 25 new spells today (and every day).': 'Отметьте один или несколько уровней в «Все заклинания», чтобы получать 25 новых заклинаний сегодня (и каждый день).',

  // customize
  'Magic staff': 'Магический посох', 'Arena': 'Арена', 'Omnipotence': 'Всемогущество', 'Equip': 'Надеть', 'Unlocked': 'Открыто', '✓ Equipped': '✓ Надето',
  'What to customize': 'Что настроить', 'Staff preview': 'Просмотр посоха', 'Time of day': 'Время суток',
  'Day': 'День', 'Sunset': 'Закат', 'Night': 'Ночь', 'Cycle': 'Цикл',
  'Omnipotence: the flames of a 5× combo in battle, and of your Omnipotence (hero power) in Deck Duel. More colours unlock as you level up.':
    'Всемогущество: пламя комбо ×5 в бою и вашего Всемогущества (силы героя) в Дуэли колод. Новые цвета открываются с уровнем.',
  'Wraps you at 5 correct casts in a row (Reading, Writing, Rapid, Boss) and while your Omnipotence (hero power) is active in Deck Duel. Everyone sees your colour.':
    'Окутывает вас после 5 верных ответов подряд (Чтение, Написание, Блиц, Босс) и пока активно ваше Всемогущество в Дуэли колод. Ваш цвет видят все.',

  '2D arena': '2D-арена', 'No Japanese voice found on this device.': 'На этом устройстве нет японского голоса.', 'This browser has no speech voice.': 'В этом браузере нет синтеза речи.',
  'Carved from an ancient tree. It channels the natural energy of the earth and life.': 'Вырезан из древнего дерева. Проводит природную силу земли и жизни.',
  'Forged from volcanic rock and blessed by fire spirits.': 'Выкован из вулканического камня и благословлён духами огня.',
  'Crafted from crystal and oceanic runes. It flows with the tides.': 'Создан из кристалла и океанских рун. Движется вместе с приливами.',
  'A relic of the sky temples. It channels lightning.': 'Реликвия небесных храмов. Проводит молнии.',
  'An ancient, otherworldly artifact. It bends reality and commands the unknown.': 'Древний потусторонний артефакт. Искривляет реальность и повелевает неведомым.',
  'January reward. Rimed with ice that never melts.': 'Награда января. Покрыт вечным инеем.',
  'March reward. A branch that flowers whenever it casts.': 'Награда марта. Ветвь, что расцветает при каждом заклинании.',
  'May reward. Carved from one piece of temple jade.': 'Награда мая. Вырезан из цельного куска храмового нефрита.',
  'July reward. Pulled from the deepest trench of the sea.': 'Награда июля. Поднят со дна глубочайшей морской впадины.',
  'September reward. Silver light of the harvest moon.': 'Награда сентября. Серебряный свет осенней луны.',
  'November reward. Burning red like autumn leaves.': 'Награда ноября. Горит красным, как осенние листья.',

  // admin
  'Role': 'Роль', 'Level': 'Уровень', 'XP': 'Опыт', 'Spells': 'Заклинания', 'Crit': 'Крит', 'Registered': 'Регистрация', 'Status': 'Статус',
  'never logged in': 'ни разу не входил',
  'AI · beginner': 'ИИ · новичок', 'AI player · beginner': 'ИИ-игрок · новичок',

  // lobby
  '← Leave room': '← Покинуть комнату', 'Room code — share it with your friend': 'Код комнаты — отправьте его другу', 'Copy': 'Копировать',
  'Add an AI player': 'Добавить ИИ-игрока', 'Beginner — slow, makes mistakes': 'Новичок — медленный, ошибается', 'N3 — intermediate': 'N3 — средний',
  'N1 — expert': 'N1 — эксперт', '+ Add AI': '+ Добавить ИИ', 'Start battle': 'Начать бой', 'Ready': 'Готов', 'Not ready': 'Не готов',
  'How much the AI knows': 'Сколько знает ИИ', 'Remove this AI': 'Убрать этого ИИ', 'away — seat kept': 'отошёл — место сохранено',
  'Waiting for a teammate (optional)…': 'Ожидание союзника (необязательно)…', 'Waiting for opponent…': 'Ожидание соперника…',
  'Deck Duel draws cards from every level (N5–N1). Your level picks only change your character here.': 'В Дуэли колод карты берутся со всех уровней (N5–N1). Выбор уровней меняет здесь только вашего персонажа.',
  'Each player picks their own. You will write these words by hand. Harder levels hit harder — so your opponent gets more HP.': 'Каждый выбирает свои. Эти слова вы будете писать от руки. Сложные уровни бьют сильнее — поэтому у соперника больше HP.',
  'Each player picks their own. かな = hiragana, answered in romaji. Harder levels hit harder — so your opponent gets more HP.': 'Каждый выбирает свои. かな — хирагана, ответ ромадзи. Сложные уровни бьют сильнее — поэтому у соперника больше HP.',
  'Share the code, or add an AI opponent — then press Ready. The duel starts when both are ready.': 'Отправьте код или добавьте ИИ-соперника — затем нажмите «Готов». Дуэль начнётся, когда оба будут готовы.',
  'Waiting for your opponent to be ready…': 'Ждём, когда соперник будет готов…', 'Press Ready — the duel starts when both players are ready.': 'Нажмите «Готов» — дуэль начнётся, когда оба будут готовы.',
  'Start solo': 'Начать в одиночку', 'Waiting for the host to start…': 'Ждём, пока хозяин начнёт…', 'Opponent left': 'Соперник вышел',
  'Room not found': 'Комната не найдена', 'Room is full': 'Комната заполнена', 'That battle has already started': 'Этот бой уже начался',

  // prep / battle
  '← Back to lobby': '← Назад в лобби', 'Back to lobby': 'Назад в лобби', 'Preparation': 'Подготовка',
  'Memorise the readings. They vanish when the battle starts.': 'Запомните чтения. Они исчезнут, когда начнётся бой.', "I'm ready": 'Я готов',
  'Forfeit': 'Сдаться', 'Tap again to forfeit': 'Нажмите ещё раз, чтобы сдаться', 'Chat': 'Чат', 'Send': 'Отправить', 'Say something…': 'Напишите что-нибудь…',
  '↶ Undo': '↶ Отменить', '⌫ Eraser': '⌫ Ластик', '✕ Clear': '✕ Очистить', 'Cast ✦': 'Колдовать ✦', 'Handwriting pad': 'Панель для письма',
  'Eraser: rub over a stroke to remove it (E)': 'Ластик: проведите по черте, чтобы стереть её (E)', '…or type the kanji (Japanese keyboard), Enter': '…или введите кандзи (японская клавиатура), Enter',
  'How to write it (S)': 'Как это пишется (S)', 'Hide the kanji and write it (Enter)': 'Скрыть кандзи и написать (Enter)',
  'かな or romaji, then Enter': 'かな или ромадзи, затем Enter', 'romaji, then Enter': 'ромадзи, затем Enter', 'Counts as a miss and shows the answer': 'Засчитывается как промах и показывает ответ',
  'Hiragana spell — answer in romaji': 'Заклинание хираганой — ответ ромадзи', 'Write the character': 'Напишите знак', '✗ Not quite — try again!': '✗ Не совсем — попробуйте ещё!',
  'Opponent was faster!': 'Соперник был быстрее!', '✗ Too slow!': '✗ Слишком медленно!', 'How to write it': 'Как это пишется', 'Time up': 'Время вышло',
  'Pasting is off — write it yourself!': 'Вставка отключена — напишите сами!', 'Use romaji for hiragana spells (switch your IME off)': 'Для заклинаний хираганой используйте ромадзи (выключите IME)',
  'You are on fire — immune to dragon breath!': 'Вы в огне — дыхание дракона вам не страшно!', 'Character power': 'Сила персонажа',

  // results
  'VICTORY': 'ПОБЕДА', 'DEFEAT': 'ПОРАЖЕНИЕ', 'DRAW': 'НИЧЬЯ', 'Review — you struggled with': 'Повторите — вам было трудно с',
  '(added to Struggling spells · click a word for its stroke order)': '(добавлено в «Трудные заклинания» · нажмите на слово, чтобы увидеть порядок черт)',
  'Vocabulary performance': 'Результаты по словам', 'Word': 'Слово', 'Reading': 'Чтение', 'Meaning': 'Значение', 'Result': 'Результат', 'Avg time': 'Ср. время',
  'Rematch': 'Реванш', 'Leave': 'Выйти', 'Rematch requested!': 'Реванш запрошен!', 'Waiting for the others to accept…': 'Ждём, пока другие согласятся…',
  'A player left the battle': 'Игрок покинул бой', 'The Black Dragon has fallen': 'Чёрный дракон повержен', 'The party was burned to ash': 'Отряд сожжён дотла',
  'Time up — the dragon survived': 'Время вышло — дракон выжил', 'Time up — most HP left wins': 'Время вышло — побеждает тот, у кого больше HP',
  'Damage to dragon': 'Урон дракону', 'Damage dealt': 'Нанесено урона', 'Avg response': 'Ср. ответ', 'Best combo': 'Лучшее комбо', 'not seen': 'не встречалось',
  'No XP — the match was forfeited': 'Без опыта — матч был сдан', 'Got it': 'Понятно', 'Tip': 'Совет',

  // queue / match found
  'Match found!': 'Игра найдена!', 'Match found': 'Игра найдена', 'Waiting for your opponent…': 'Ждём соперника…', 'Your opponent accepted!': 'Соперник принял!',
  "Your opponent didn't accept — you're back in the queue.": 'Соперник не принял — вы снова в очереди.', "You didn't accept in time — the queue stopped.": 'Вы не приняли вовремя — поиск остановлен.',
  'In the online queue': 'В онлайн-очереди', 'In the menus': 'В меню',
  'Music on': 'Музыка вкл.', 'Music off': 'Музыка выкл.', 'Sounds on': 'Звуки вкл.', 'Sounds off': 'Звуки выкл.',
  'games': 'игры', 'Play on 12 different days': 'Играть в 12 разных дней', 'Win 10 games': 'Выиграть 10 игр', 'Pass 150 flashcards in Study spells': 'Пройти 150 карточек в «Изучать заклинания»',
  'Light blue flames': 'Голубое пламя', 'Purple flames': 'Фиолетовое пламя',
  'Your turn': 'Ваш ход', 'Your turn!': 'Ваш ход!',

  // deck duel
  'How Deck Duel works': 'Как устроена Дуэль колод', 'Deck Duel — choose a card': 'Дуэль колод — выберите карту', 'Your spell — read it': 'Ваше заклинание — прочитайте его',
  'Your spell — memorise the kanji': 'Ваше заклинание — запомните кандзи', 'Write the kanji!': 'Напишите кандзи!', 'Your kanji': 'Ваш кандзи', 'Your opponent': 'Ваш соперник',
  'Reading the spell…': 'Читает заклинание…', 'Studying the kanji…': 'Изучает кандзи…', 'Choose your hero': 'Выберите героя', 'Memorise it — it disappears when you cast': 'Запомните — он исчезнет, когда вы начнёте колдовать',
  'You won the coin flip — you pick first': 'Вы выиграли жребий — выбираете первым', 'Your opponent won the coin flip': 'Соперник выиграл жребий',
  'You only see the colour — the kanji stays hidden until the card is played.': 'Виден только цвет — кандзи скрыт, пока карту не разыграют.',
  'Overtime — the cards are gone: type the readings!': 'Овертайм — карт больше нет: пишите чтения!', 'First to type its reading hits · wrong? try again': 'Кто первым напишет чтение, тот бьёт · ошиблись? пробуйте ещё',
  'Type it in romaji…': 'Введите ромадзи…', 'Reading (kana or romaji)…': 'Чтение (кана или ромадзи)…', 'The correct kanji': 'Правильный кандзи',
  '✗ Nobody got it': '✗ Никто не угадал', '✗ The spell fizzles': '✗ Заклинание рассеялось', 'Rapid hit': 'Удар в блице', 'passive · tap for info': 'пассивно · нажмите для информации',
  'cards used': 'карт сыграно', '+2 cards ready': '+2 карты готовы', 'mana used': 'маны потрачено', '+30 mana ready': '+30 маны готово',
  'Out of cards → Round 2 draft. HP, mana and powers stay.': 'Карты кончились → набор раунда 2. HP, мана и силы сохраняются.',

  // tutorial
  'Welcome': 'Добро пожаловать', 'Welcome, apprentice': 'Добро пожаловать, ученик',
  'In Kanji Wizards every spell is a Japanese word. Learn a word — and you can cast it at your opponent.': 'В Kanji Wizards каждое заклинание — японское слово. Выучите слово — и сможете метнуть его в соперника.',
  'Cast by reading': 'Колдуйте чтением',
  'A kanji appears; type how it is read — in hiragana, or in romaji with a normal keyboard — and press Enter. Fast and right in a row hits harder.':
    'Появляется кандзи; напишите, как он читается — хираганой или ромадзи на обычной клавиатуре — и нажмите Enter. Быстрые верные ответы подряд бьют сильнее.',
  'Study makes you stronger': 'Учёба делает сильнее',
  'Study spells is a flashcard deck. Every spell you learn today raises your critical-hit chance, and words you miss in battle come back there to review.':
    '«Изучать заклинания» — это колода карточек. Каждое выученное сегодня заклинание повышает шанс крита, а слова, на которых вы ошиблись в бою, возвращаются туда на повторение.',
  'More to unlock': 'Что откроется дальше',
  'You start with Kanji Reading and Rapid. Kanji Writing and the Boss fight unlock at level 1, Deck Duel at level 2. There is also a Daily challenge, Progress, Friends — and monthly goals with rewards.':
    'Сначала доступны Чтение кандзи и Блиц. Написание кандзи и Битва с боссом открываются на уровне 1, Дуэль колод — на уровне 2. Ещё есть Ежедневное испытание, Прогресс, Друзья и месячные цели с наградами.',
  'Your first battle': 'Ваш первый бой', "Ready? You'll study 10 easy words for a minute, then duel a beginner AI with them.": 'Готовы? Минуту вы учите 10 простых слов, потом сражаетесь ими с ИИ-новичком.',
  'type its reading: yama': 'напишите чтение: yama', 'Mountain — try it!': 'Гора — попробуйте!', "Not quite — it's やま (yama)": 'Не совсем — это やま (yama)', '✓ やま — a spell!': '✓ やま — заклинание!',
  'Fight a beginner AI': 'Сразиться с ИИ-новичком', 'Maybe later': 'Может, позже', 'Skip tutorial': 'Пропустить обучение', 'Next': 'Далее',
  "Read the 10 words — reading and meaning. When the battle starts, they come back as kanji only. Press Ready when you're done.": 'Прочитайте 10 слов — чтение и значение. В бою они вернутся только кандзи. Нажмите «Готов», когда закончите.',
  "Type the reading of the kanji (hiragana or romaji) and press Enter. Don't know it? Esc skips. Keep your HP above the AI's!": 'Напишите чтение кандзи (хираганой или ромадзи) и нажмите Enter. Не знаете? Esc — пропуск. Держите HP выше, чем у ИИ!',
  'Well cast! Words you missed are now in Study spells → Struggling. Level up to unlock Writing, Boss and Deck Duel.': 'Отличное колдовство! Слова с ошибками теперь в «Изучать заклинания → Трудные». Повышайте уровень, чтобы открыть Написание, Босса и Дуэль колод.',

  // how to play (guide)
  'Create a room': 'Создайте комнату', ', pick a mode, and send the 4-letter code to a friend. On a phone you can switch apps to send it — your seat is kept for 5 minutes.': ', выберите режим и отправьте другу 4-буквенный код. На телефоне можно переключиться в другое приложение — место сохраняется 5 минут.',
  'Pick your levels.': 'Выберите уровни.', 'Modes': 'Режимы', 'Rapid': 'Блиц', 'Writing': 'Написание', 'Boss': 'Босс',
  '— study 10 words, then type each reading (かな or romaji).': '— выучите 10 слов, затем напишите чтение каждого (かな или ромадзи).',
  '— no study; both get the same kanji, first correct reading hits.': '— без подготовки; у обоих один кандзи, бьёт первое верное чтение.',
  '— look at the kanji, press CAST! (up to 3.5 s), then write it from memory on the pad or type it with a Japanese keyboard. Messy is fine.': '— посмотрите на кандзи, нажмите CAST! (до 3,5 с), затем напишите по памяти на панели или японской клавиатурой. Неровно — не страшно.',
  '— 1 to 4 players team up against the Black Dragon (it gets tougher with every player). Mistakes get you clawed; fire breath every 30 s.': '— от 1 до 4 игроков против Чёрного дракона (он сильнее с каждым игроком). За ошибки — удар когтями; огненное дыхание каждые 30 с.',
  'Fast + correct = more damage.': 'Быстро + верно = больше урона.', '(Esc) shows the answer.': '(Esc) показывает ответ.',
  '— Anki-style flashcards. Missed words go to': '— карточки в стиле Anki. Ошибочные слова попадают в',
  'Login streak': 'Серия входов', '— open the game on days in a row. Your best streak unlocks magic staffs in': '— заходите в игру несколько дней подряд. Лучшая серия открывает магические посохи в',
  ': Ember at 5 days, Tide at 10, Storm at 15, Void at 20.': ': Ember за 5 дней, Tide за 10, Storm за 15, Void за 20.',
  'How Kanji Reading works': 'Как устроено Чтение кандзи', 'How Kanji Writing works': 'Как устроено Написание кандзи', 'How Boss Elimination works': 'Как устроена Битва с боссом', 'How 1v1 Rapid works': 'Как устроен Блиц 1 на 1',
  '60 s to study your 10 words (reading + meaning). Then they disappear.': '60 с, чтобы выучить 10 слов (чтение + значение). Потом они исчезнут.',
  'Wrong or Skip (Esc) = a miss; the answer is shown and the word comes back later.': 'Ошибка или пропуск (Esc) = промах; ответ показывается, а слово вернётся позже.',
  'Look at the kanji (up to 3.5 s), then press CAST! (or Enter): it vanishes and the pad and keyboard appear. Pasting is off.': 'Посмотрите на кандзи (до 3,5 с), затем нажмите CAST! (или Enter): он исчезнет, появятся панель и клавиатура. Вставка отключена.',
  'Write the whole word on the pad, left to right (one cell per character) — or type it with a Japanese keyboard.': 'Напишите всё слово на панели слева направо (одна клетка на знак) — или введите японской клавиатурой.',
  'Only kanji count (kana only at the かな level). Messy is fine — it’s judged by shape.': 'Считаются только кандзи (кана — только на уровне かな). Неровно — не страшно, оценивается форма.',
  'Up to 4 players (friends or AI) against the Black Dragon; the online queue always makes a full party of 4. Its HP grows with the party.': 'До 4 игроков (друзья или ИИ) против Чёрного дракона; онлайн-очередь всегда собирает отряд из 4. HP дракона растёт с размером отряда.',
  'A mistake gets you clawed (−45).': 'Ошибка — удар когтями (−45).', 'Every 30 s it breathes fire on everyone (−110) — unless you are on fire yourself (5 in a row): then you are immune.': 'Каждые 30 с он дышит огнём на всех (−110) — если только вы сами не в огне (5 подряд): тогда вы неуязвимы.',
  'Both players get the same kanji — no study phase.': 'Оба игрока получают один и тот же кандзи — без подготовки.', 'Wrong? Try again until the 12 s round ends.': 'Ошиблись? Пробуйте снова, пока не кончится 12-секундный раунд.',
  'Crit: 1% + 1% per spell learned today (max 50%). Playing with AI gives half XP; a forfeit gives none.': 'Крит: 1% + 1% за каждое выученное сегодня заклинание (макс. 50%). Игра с ИИ даёт половину опыта; сдача — ничего.',
  'Crit chance today: 1% + 1% for every spell you learn today (max 50%). Resets at midnight.': 'Шанс крита сегодня: 1% + 1% за каждое выученное сегодня заклинание (макс. 50%). Сбрасывается в полночь.',
};

// names of the monthly seasons and the staffs (staff names in the genitive: «Посох Бури»)
const SEASON_RU: Record<string, string> = { Frost: 'Иней', Sakura: 'Сакура', Blossom: 'Цветение', Rain: 'Дождь', Jade: 'Нефрит', Sun: 'Солнце', Abyss: 'Бездна', Thunder: 'Гром', Moon: 'Луна', Harvest: 'Урожай', Maple: 'Клён', Starlight: 'Звёздный свет' };
const STAFF_RU: Record<string, string> = { Verdant: 'Листвы', Ember: 'Углей', Tide: 'Прилива', Storm: 'Бури', Void: 'Пустоты', Frost: 'Инея', Blossom: 'Цветения', Jade: 'Нефрита', Abyss: 'Бездны', Moon: 'Луны', Maple: 'Клёна' };
const MASTERY_RU: Record<string, string> = { 'Not in your spells yet': 'Ещё нет в заклинаниях', New: 'Новые', Learning: 'Изучаются', Learned: 'Выучены', 'Mastered (3+ weeks)': 'Освоены (3+ недели)' };
type Rep = string | ((...m: string[]) => string);
const MODE_RU: Record<string, string> = { '1v1 Kanji Reading': '1 на 1: Чтение кандзи', '1v1 Kanji Writing': '1 на 1: Написание кандзи', 'Boss Elimination': 'Битва с боссом', '1v1 Rapid': '1 на 1: Блиц', 'Deck Duel': 'Дуэль колод', 'Kanji Reading': 'Чтение кандзи', 'Kanji Writing': 'Написание кандзи' };
const mode = (m: string) => MODE_RU[m] ?? m;
const plural = (n: number, one: string, few: string, many: string) => {
  const a = Math.abs(n) % 100, b = a % 10;
  return a > 10 && a < 20 ? many : b === 1 ? one : b >= 2 && b <= 4 ? few : many;
};
/** Texts with numbers / names in them. */
const PATTERNS: Array<[RegExp, Rep]> = [
  [/^Lv (\d+)$/, 'Ур. $1'],
  [/^The staff in your hand \(other players see it too\)\. Classic staffs unlock with your login streak — your best: (.+)\. Seasonal staffs are monthly rewards \(see Progress\)\.$/, (_, d) => `Посох в вашей руке (его видят и другие игроки). Классические посохи открываются серией входов — ваш рекорд: ${d.replace(/(\d+) days?/, (_m: string, n: string) => `${n} ${plural(+n, 'день', 'дня', 'дней')}`)}. Сезонные посохи — награды месяца (см. «Прогресс»).`],
  [/^(\w+) reward: complete that month's goals \(Progress page\)\. Wraps you at 5 in a row and during your Omnipotence\.$/, 'Награда месяца ($1): выполните цели этого месяца (страница «Прогресс»). Окутывает вас при 5 подряд и во время Всемогущества.'],
  [/^Unlocks at a (\d+)-day streak$/, (_, n) => `Откроется при серии ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^(\w+) Staff$/, (_, x) => (STAFF_RU[x] ? `Посох ${STAFF_RU[x]}` : `Посох ${x}`)],
  [/^(\w+) flames$/, (_, x) => `Пламя «${SEASON_RU[x] ?? x}»`],
  [/^(.+) · (\d+)$/, (_, x, n) => (MASTERY_RU[x] ? `${MASTERY_RU[x]} · ${n}` : `${x} · ${n}`)],
  [/^Locked · (.+)$/, (_, x) => `Закрыто · ${tr(x)}`],
  [/^Unlocks with the (\S+) goals$/, 'Откроется за цели месяца: $1'],
  [/^(\S+) goals$/, 'Цели месяца: $1'],
  [/^(\d+)-day streak$/, (_, n) => `серия ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^AI · knows (N\d)$/, 'ИИ · знает $1'],
  [/^AI player · knows (N\d)$/, 'ИИ-игрок · знает $1'],
  [/^(.+) \(AI Beginner\)$/, '$1 (ИИ-новичок)'],
  [/^(.+) \(AI (N\d)\)$/, '$1 (ИИ $2)'],
  [/^Level (\d+)$/, 'Уровень $1'],
  [/^Unlocks at level (\d+)$/, 'Откроется на уровне $1'],
  [/^Level (\d+)! Check Customize for new unlocks\.$/, 'Уровень $1! Загляните в «Настройку» — там новое.'],
  [/^(.+) unlocks at level (\d+) — win a few games first\. \(A friend can still invite you\.\)$/, (_, m, l) => `${mode(m)} откроется на уровне ${l} — сначала выиграйте несколько игр. (Друг всё равно может вас пригласить.)`],
  [/^Invited · (\d+)s$/, 'Приглашён · $1 с'],
  [/^Wait (\d+) s before inviting them again$/, 'Подождите $1 с перед повторным приглашением'],
  [/^Your friend is in a game right now — invite them when it.s over$/, 'Ваш друг сейчас в игре — пригласите его, когда игра закончится'],
  [/^(.+) invites you$/, '$1 приглашает вас'],
  [/^to (.+) — room ([A-Z]{4})$/, (_, m, c) => `в «${mode(m)}» — комната ${c}`],
  [/^Join their (.+) room$/, (_, m) => `Войти в комнату «${mode(m)}»`],
  [/^(.+) wants to be your friend — see Friends$/, '$1 хочет дружить — см. «Друзья»'],
  [/^(.+) accepted your friend request$/, '$1 принял(а) ваш запрос в друзья'],
  [/^You and (.+) are now friends!$/, 'Вы с $1 теперь друзья!'],
  [/^You already asked (.+)\.$/, 'Вы уже отправили запрос $1.'],
  [/^Request sent to (.+)\.$/, 'Запрос отправлен: $1.'],
  [/^Requests \((\d+)\)$/, 'Запросы ($1)'],
  [/^Friends \((\d+)\) · (\d+) online$/, 'Друзья ($1) · $2 в сети'],
  [/^Playing (.+)$/, (_, m) => `Играет: ${mode(m)}`],
  [/^Lobby · (.+)$/, (_, m) => `Лобби · ${mode(m)}`],
  [/^Results · (.+)$/, (_, m) => `Итоги · ${mode(m)}`],
  [/^In (.+) lobby$/, (_, m) => `В лобби: ${mode(m)}`],
  [/^Player found — (.+)!$/, (_, m) => `Игрок найден — ${mode(m)}!`],
  [/^(.+) — press Accept$/, (_, m) => `${mode(m)} — нажмите «Принять»`],
  [/^(\d+) \/ (\d+) accepted( — waiting for the others…)?$/, (_, a, n, w) => `${a} / ${n} приняли${w ? ' — ждём остальных…' : ''}`],
  [/^(\d+)\/(\d+) ready( — waiting for the others…)?$/, (_, a, n, w) => `${a}/${n} готовы${w ? ' — ждём остальных…' : ''}`],
  [/^Start — party of (\d+)$/, 'Начать — отряд из $1'],
  [/^Start now, or wait for more teammates \(up to (\d+)\)\.$/, 'Начните сейчас или подождите союзников (до $1).'],
  [/^Waiting for (.+)…$/, 'Ждём: $1…'],
  [/^(.+) is choosing a card$/, '$1 выбирает карту'],
  [/^The dragon inhales… (\d+)$/, 'Дракон набирает воздух… $1'],
  [/^Fire breath! Everyone takes (\d+)$/, 'Огненное дыхание! Все получают $1'],
  [/^The dragon claws (.+) for (\d+)$/, 'Дракон бьёт когтями $1 на $2'],
  [/^write the kanji: (\d+) characters?$/, (_, n) => `напишите кандзи: ${n} ${plural(+n, 'знак', 'знака', 'знаков')}`],
  [/^Write all (\d+) characters, left to right$/, 'Напишите все $1 знака(ов) слева направо'],
  [/^The pad read: (.+)$/, 'Панель распознала: $1'],
  [/^Monthly goals complete! (.+) unlocked — equip it in Customize\.$/, 'Месячные цели выполнены! Открыто: $1 — наденьте в «Настройке».'],
  [/^(\d+) struggling spells are waiting\. Study them down to (\d+) to unlock the game modes\.$/, 'Ждут трудные заклинания: $1. Повторите их, пока не останется $2, чтобы открыть режимы.'],
  [/^(\d+) left · (All spells|Struggling)$/, (_, n, d) => `осталось ${n} · ${d === 'All spells' ? 'Все заклинания' : 'Трудные'}`],
  [/^(\d+)-day streak$/, (_, n) => `серия ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^Unlocks at (?:a )?(\d+)-day streak$/, (_, n) => `Откроется при серии ${n} ${plural(+n, 'день', 'дня', 'дней')}`],
  [/^Unlocks at level (\d+)$/, 'Откроется на уровне $1'],
  [/^Unlocks at (?:a )?(\S+) goals$/, 'Откроется за цели месяца: $1'],
  [/^Log in (\d+) days in a row to unlock the (.+) \(your best: (\d+)\)$/, 'Заходите $1 дней подряд, чтобы открыть $2 (ваш рекорд: $3)'],
  [/^Reach level (\d+) to unlock (.+)$/, 'Достигните уровня $1, чтобы открыть: $2'],
  [/^(.+): (\w+) season$/, (_, m, x) => `${m}: сезон «${SEASON_RU[x] ?? x}»`],
  [/^Unlocked: (.+) — equip it in Customize$/, (_, x) => `Открыто: ${tr(x)} — наденьте в «Настройке»`],
  [/^Reward: (.+) \(only this month\)$/, (_, x) => `Награда: ${tr(x)} (только в этом месяце)`],
  [/^(\d+) active days in the last 6 months$/, (_, n) => `${n} ${plural(+n, 'активный день', 'активных дня', 'активных дней')} за последние 6 месяцев`],
  [/^([+−-]?[\d,]+) vs last week$/, '$1 к прошлой неделе'],
  [/^Every correct word gives 30 XP \(\+100 for a perfect 10\)\. New words at (.+) your time\.$/, 'Каждое верное слово — 30 опыта (+100 за все 10). Новые слова в $1 по вашему времени.'],
  [/^Challenge of (.+)$/, 'Испытание: $1'],
  [/^Two words each from N5 to N1, easiest first\. Type the reading \(kana or romaji\) and press Enter — (\d+) s per word\. One try a day: most correct wins, then fastest\.$/, 'По два слова с N5 до N1, от простых к сложным. Напишите чтение (кана или ромадзи) и нажмите Enter — $1 с на слово. Одна попытка в день: побеждает больше верных, затем быстрее.'],
  [/^10 new words at (.+) your time\.$/, '10 новых слов в $1 по вашему времени.'],
  [/^Word (\d+) of (\d+) · (.+)$/, 'Слово $1 из $2 · $3'],
  [/^Daily challenge: (\d+)\/10 · rank (\d+) of (\d+)(?: · \+(\d+) XP)?$/, (_, c, r, p, x) => `Ежедневное испытание: ${c}/10 · место ${r} из ${p}${x ? ` · +${x} опыта` : ''}`],
  [/^([\d.]+) s · rank (\d+) today$/, '$1 с · место $2 сегодня'],
  [/^Read the meaning — the kanji shows in (\d+) s$/, 'Прочитайте значение — кандзи появится через $1 с'],
  [/^Round (\d+) — new cards! HP, mana and powers stay as they are\.$/, 'Раунд $1 — новые карты! HP, мана и силы сохраняются.'],
  [/^ready in (\d+) turns?$/, (_, n) => `готово через ${n} ${plural(+n, 'ход', 'хода', 'ходов')}`],
  [/^Your turn — choose a card( \(Frenzy: 2 cards\))?$/, (_, f) => `Ваш ход — выберите карту${f ? ' (Неистовство: 2 карты)' : ''}`],
  [/^Playing since (.+)$/, 'Играет с $1'],
  [/^(\d+) online now · (\d+) accounts · (\d+) banned$/, 'Сейчас в сети: $1 · аккаунтов: $2 · заблокировано: $3'],
  [/^last day: (.+)$/, 'последний день: $1'],
  [/^(\d+(?:\.\d+)?)% crit today$/, '$1% крит сегодня'],
];

export function tr(s: string): string {
  if (lang() !== 'ru') return s;
  const exact = RU[s];
  if (exact) return exact;
  for (const [re, rep] of PATTERNS) {
    if (!re.test(s)) continue;
    const out = typeof rep === 'string' ? s.replace(re, rep) : s.replace(re, (...m) => rep(...(m.slice(0, -2) as string[])));
    if (out !== s) return out; // a pattern that changes nothing lets the next one try
  }
  return s;
}

// ── applying it to the page ─────────────────────────────────────────────────
const SKIP = 'script, style, svg, textarea, [lang="ja"], [data-no-i18n], .k, .kanji, .meaning-prompt, .chat-log';
const ATTRS = ['placeholder', 'title', 'aria-label'] as const;

function translateText(node: Text) {
  const raw = node.data;
  const s = raw.trim();
  if (!s || !/[A-Za-z]/.test(s)) return;
  const parent = node.parentElement;
  if (!parent || parent.closest(SKIP)) return;
  const t = tr(s);
  if (t !== s) node.data = raw.replace(s, t);
}
function translateAttrs(el: Element) {
  if (el.closest(SKIP)) return;
  for (const a of ATTRS) {
    const v = el.getAttribute(a);
    if (v && /[A-Za-z]/.test(v)) { const t = tr(v.trim()); if (t !== v.trim()) el.setAttribute(a, t); }
  }
}
function walk(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) return translateText(root as Text);
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const el = root as Element;
  if (el.matches(SKIP)) return;
  translateAttrs(el);
  const it = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  for (let n = it.nextNode(); n; n = it.nextNode()) {
    if (n.nodeType === Node.TEXT_NODE) translateText(n as Text);
    else translateAttrs(n as Element);
  }
}

/** Start translating the page (Russian only). */
export function initI18n() {
  document.documentElement.lang = lang();
  if (lang() !== 'ru') return;
  walk(document.body);
  new MutationObserver((list) => {
    for (const m of list) {
      if (m.type === 'characterData') translateText(m.target as Text);
      else if (m.type === 'attributes') translateAttrs(m.target as Element);
      else m.addedNodes.forEach(walk);
    }
  }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...ATTRS] });
}
