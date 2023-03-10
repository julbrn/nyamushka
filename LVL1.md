# Q1

## Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

### 😼пользователя:

- Скорость загрузки визуальных компонентов и FID (минимальная задержка при первом взаимодействии с интерактивностью сайта): код должен быть оптимизирован для быстрой загрузки (оптимизация размера шрифтов, изображений, lazy-loading, кеширование и т.д.)

- Отсутствие сдвига вёрстки (Layout shift): важна стабильность вёрстки, в том числе, чтобы избежать ошибочного взаимодействи с сайтом (например, не были заданы размеры изображения, вёрстка внезапно сдвинулась при прогрузке, и пользователь нажал не на ту кнопку)

- Доступность: при использовании скринридеров и медленной сетевом соединении (alt для контентных изображений, aria-атрибуты, семантичные тэги, возможность фокусировки)

- Валидность и соответствие стандартам W3C

- Кроссбраузерность: код должен корректно отображаться в разных браузерах и на разных устройствах.

### 😼 менеджера проекта:

- Соответствие ТЗ: вёрстка соответствует требованиям и ожиданиям заказчика

- Скорость внесения правок: правки в вёрстку вносятся оперативно

### 😼 дизайнера:

- Адаптивность/резиновость вёрстки: вёрстка смотрится хорошо не только на брейкпонтах, представленных в макете, но и между ними

- Точность вёрстки (вероятно, pixel perfect): соблюдение пропорций, отступов, цветовой гаммы, соответствие стилю и брендингу

- "Масштабируемость вёрстки": большинство блоков независимы, используются переменные, при внесении изменений не нужно менять половину вёрстки

### 😼 верстальщика:

- Пожалуй, для верстальщика важны большинство критериев, указанных выше (семантика, валидность, адаптивность, оптимизация, масштабируемость, отсутствие горизонтального скролла и т.д.)

- Код должен быть структурирован и читабелен: адекватное наименование классов (методика БЭМ или др.), инкапсуляция стилей, присутствует форматирование кода (например, prettier, eslint), понятная структура проекта

### 😼 клиентского программиста:

- Чистота и структура кода: код должен быть легко читаемым, иметь структуру. Соблюдение принципов DRY, KISS

- Адаптивность и лёгкость поддержки: вёрстка не ломается при динамическом удалении и добавлении новых блоков, отсутствует overflow при добавлении больших текстов

- Оптимизация загрузки: вёрстка оптимизирована для быстрой загрузки страницы

### 😼 серверного программиста:

- Семантичность вёрстки (для дефолтного поведения элементов)

- Проведена оптимизация для снижения скорости загрузки страницы, минимизация css

- Если не совсем по вёрстке (указание методов HTTP, уменьшение количества http-запросов, обработка ошибок, валидация данных, http-only куки и пр.)

# Q2

## Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

- Чтобы обеспечить масштабирование, максимальную "ре-используемость" и сопровождаемость кода, используют такие методологии именования классов стилей, как SMACSS, ITCSS, БЭМ (я использую БЭМ-методологию)

- Сборщики и менеджеры пакетов (я использую Webpack, npm)

- PostCSS для CSS, Babel для JS

- Принципы SOLID, DRY, KISS

- Gitflow

# Q3

## Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

- Использование адаптивной и резиновой верстки, относительных единиц измерений (где это уместно), fallbacks

- Использую постпроцессор, полифиллы, autoprefixer

- Проверяю поддерживаемость на сайте сanisuse.com

- Добавляю файл для сброса или нормализации css

Для проверки отображения страницы использую devtools и всю технику, которая есть дома 🤖. Также пробовала использовать Lambdatest.

# Q4

## Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Ускоряет работу знание emmet-shortcuts, разные плагины VScode: eCSStractor, Rainbow Brackets, Auto Rename Tag, Code Runner, Prettier, ESLint, W3C Web Validator, Markdown Previewer.

Также использую расширения в браузере: PerfectPixel, LightHouse, React Developer Tools и др.

Быстро подобрать приятные цветовые схемы для тренировочных проектов помогают сайты huemint и coolors.

Сжимаю изображения обычно при помощи TinyPNG.
Для тестирования запросов к API применяю Postman.
Очень понравился опыт использования IDE Webstorm.

# Q5

## Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

Посмотрю код в devtools и попытаюсь определить, что именно является причиной некорректного отображения. Попробую изменять стили прямо там, добавлять префиксы или прописывать код специально для этих браузеров.
Сталкивалась с проблемой некорректного отображения кастомных чекбоксов на iOS, но код был мой, так что править было проще :)

# Q6

## Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

Если нет возможности уточнить у дизайнера и руководствоваться используемой дизайн-системой, временно бы сделала базовый эффект (например, повышение насыщенности фона кнопки).

# Q7

## Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

Статьи по веб-разработке на [Medium](https://medium.com/), [CSS Tricks](https://css-tricks.com/archives/), [TProger](https://tproger.ru/), [Habr](https://habr.com/ru/all/)

Youtube каналы: Web Dev Simplified, Kevin Powell, freeCodeCamp, Web Conferences Amsterdam, JSConf

Иногда люблю посмотреть разные реализации на CodePen и решать задачки на CodeWars. Проходила несколько курсов на EdX.

Помимо JS, верстки и UX/UI, меня продолжают интересовать вопросы перевода и лингвистики.

# Q8

## Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Я начала изучать веб-разработку зимой прошлого года и сейчас нахожусь на этапе написания диплома в Яндекс.Практикуме.
По образованию я переводчик и преподаватель иностранных языков. Однако со временем я поняла, что веб-разработка меня увлекает сильнее, и это то, чем можно заниматься, буквально теряя счёт времени. Получать удовольствие от исправленного бага или хорошо реализованного решения - это нереально здорово!

В свободное время запастись энергией мне помогают занятия спортом (бег, йога, с недавних пор - большой теннис), а расслабиться - хорошая музыка и скетчи.

Некоторые примеры работ:

Яндекс.Практикум:
https://github.com/julbrn/react-mesto-api-full

https://github.com/julbrn/react-mesto-auth

Практика:
https://github.com/julbrn/currency-converter

https://github.com/julbrn/practice

https://github.com/julbrn/randomImage
