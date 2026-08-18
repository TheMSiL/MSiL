import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	ua: {
		translation: {
			style: 'Перемикач стилів',
			'style.color': 'Колір',
			'theme.dark': 'Увімкнути темну тему',
			'theme.light': 'Увімкнути світлу тему',
			'language.switch': 'Змінити мову',
			'nav.menu': 'Меню',
			'home.title-span': 'Я Максим Сілка.',
			'home.title': 'Фронтенд розробник',
			'home.description':
				'Я фронтенд React-розробник, знаходжусь в Києві, Україна. Маю сильну пристрасть до створення цікавих та інтерактивних користувацьких інтерфейсів, активно шукаю можливості застосувати свої навички та вивчити нові технології у високопрофесійній команді з цікавими задачами та амбітними проектами.',
			'home.badge': 'Відкритий до нових проектів',
			'home.cta-work': 'Подивитись роботи',
			'home.button': 'Більше про мене',
			'about.title-span': 'Мене',
			'about.title': 'Про',
			'personal.title': 'Персональна інформація',
			'personal.info-title__1': 'Ім’я : ',
			'personal.info-description__1': 'Максим',
			'personal.info-title__2': 'Прізвище : ',
			'personal.info-description__2': 'Сілка',
			'personal.info-title__3': 'Пошта : ',
			'personal.info-description__3': 'msil.developer@gmail.com',
			'personal.info-title__4': 'Telegram : ',
			'personal.info-description__4': '@TheMSiL',
			'personal.info-title__5': 'Локація : ',
			'personal.info-description__5': 'Київ, Україна',
			'personal.info-title__6': 'Професія : ',
			'personal.info-description__6': 'Фронтенд-розробник',
			'personal.info-title__7': 'Мови : ',
			'personal.info-description__7': 'Українська, Англійська',
			'personal.info-title__8': 'Статус : ',
			'personal.info-description__8': 'Відкритий до нових проектів',
			'personal.button': 'Завантажити резюме',
			'nav.home': 'Головна',
			'nav.about': 'Про мене',
			'nav.reviews': 'Відгуки',
			'nav.portfolio': 'Проекти',
			'nav.contact': 'Контакти',
			'hobbies.title': 'Захоплення',
			'skills.title': 'Мої Навички',
			'education.title': 'Досвід та Освіта',
			'education.prof': 'Фронтенд розробник',
			'education.desc':
				'Вивчав HTML, CSS, JavaScript та React. Майстерно оволодів Webpack, Git, Figma та Visual Studio Code.',
			'education.button': 'Завантажити сертифікат',
			'education.button1': 'Фріланс профіль',
			'education.button2': 'Сайт компанії',
			'portfolio.title': 'Мої',
			'portfolio.title-span': 'Проекти',
			'contact.title': 'Встановити',
			'contact.title-span': 'Зв’язок',
			'contact.subtitle': 'Очікую вашого повідомлення',
			'contact.desc':
				'Будь ласка, не соромтеся звертатися до мене в будь-який час. Я буду радий стати частиною вашої команди.',
			'contact.mail': 'Написати мені',
			'contact.telegram': 'Написати в Telegram',
			'contact.button': 'Відправити',
			'contact.success': 'Дякую! Повідомлення надіслано, я відповім найближчим часом.',
			'contact.error':
				'Не вдалося надіслати повідомлення. Напишіть, будь ласка, на msil.developer@gmail.com або в Telegram @TheMSiL.',
			'name.placeholder': 'Ваше ім’я',
			'email.placeholder': 'Ваша пошта',
			'textarea.placeholder': 'Ваше повідомлення',
			'portfolio.item1-title-1': 'Проект : ',
			'portfolio.item-title-2': 'Технології : ',
			'portfolio.item-title-3': 'Прев’ю : ',
			'portfolio.visit': 'Відкрити сайт',
			'portfolio.close': 'Закрити',
			'portfolio.prev-page': 'Попередня сторінка',
			'portfolio.next-page': 'Наступна сторінка',
			'project.swisspc':
				'Сайт IT-компанії: інфраструктура, мережі та підтримка бізнесу',
			'project.abramova':
				'Інтернет-магазин ручних соєвих свічок із доставкою по Чехії',
			'project.elixir': 'Лендінг студії дизайну з портфоліо та формою заявки',
			'project.miraton':
				'Лендінг сервісу хмарного майнінгу з особистим кабінетом',
			'project.kamba':
				'Сайт служби патронажного догляду з послугами та зонами обслуговування',
			'project.tex': 'Сайт токена, стейкінгу та гаманця в екосистемі TRON',
			'project.kantor': 'Сайт пункту обміну валют у Польщі',
			'project.amrit':
				'Сайт інституту біомедичних досліджень і регенеративної медицини',
			'project.handyman': 'Лендінг сервісу домашнього ремонту',
			'project.sheremet':
				'Сайт компанії вивезення сміття, транспорту та прибирання',
			'project.lst':
				'Сайт майстерні з ремонту компʼютерної та побутової техніки',
			'project.zone': 'Лендінг студії VR-рішень для бізнесу',
			'project.mntn': 'Лендінг про гірські подорожі з паралакс-ефектом',
			'project.freedom': 'Лендінг сервісу бізнес-кредитування під виручку',
			'project.infinity-bet':
				'Онлайн-казино з лотереєю, турнірами та живою стрічкою виграшів',
			'project.curiosity':
				'Освітня платформа для дітей з аналітикою прогресу для батьків',
			'project.numapay': 'Лендінг платіжного сервісу',
			'project.qubly': 'Лендінг SaaS-платформи аналітики в реальному часі',
			'project.kreative-korner':
				'Сайт креативної студії з послугами та портфоліо',
			'project.bean-scene': 'Лендінг кавʼярні з меню та історією закладу',
			'project.paynicle': 'Верстка лендінгу фінтех-сервісу',
			'project.nft-ring': 'Лендінг мінімалістичного NFT-маркетплейсу',
			'project.resilience': 'Лендінг онлайн-курсу зі стресостійкості',
			'project.spayke': 'Верстка сторінки очікування запуску з формою підписки',
			'project.wavschool': 'Сайт онлайн-школи дизайну',
			'project.delivery-import': 'Калькулятор вартості авто зі США',
			'project.abc': 'Сайт студії професійної фотозйомки та маркетингу',
			'project.tvs':
				'Сайт постачальника коробок передач і автозапчастин в Іспанії',
			'project.accelerage-landing':
				'Лендінг сервісу монетизації мобільних додатків',
			'project.casino-259': 'Онлайн-гра всередині Telegram із ботом',
			'project.ra-agency':
				'Тримовний сайт performance-агенції, побудований навколо доказів',
			'project.crashatlas':
				'База авіаційних аварій та інтерактивна карта століття польотів',
			'project.glidex':
				'Мультимодальна логістична платформа з побудовою маршрутів і трекінгом',
			'project.nova':
				'Дослідницький воркспейс, у якому кожна відповідь ШІ веде до сторінки джерела',
			'project.motion': 'Застосунок для поїздок, маршрутів і тижневих цілей',
			'project.noir':
				'Продуктовий сайт і конфігуратор преміального електровелосипеда',
			'project.flow':
				'Візуальний конструктор автоматизацій: тригери, дії, умови та інтеграції на одному полотні',
			'project.aera':
				'Продуктовий сайт та система інтерфейсів для платформи операційної аналітики',
			'project.oriel':
				'Платформа забудовника з живим каталогом квартир по чотирьох комплексах',
			'project.tvorivo':
				'Магазин цифрових продуктів із каталогом, кабінетом і миттєвою видачею',
			'project.axion':
				'Позиційний сайт практики впровадження AI та автоматизації процесів',
			'project.pelagion':
				'Бренд і продуктовий сайт для автономних морських систем і місійного ПЗ',
			'project.litha':
				'Портфоліо-платформа архітектурної студії, побудована навколо атмосфери',
			'project.aureon':
				'Платформа встановлювача сонячних станцій із персональним калькулятором економії',
			'project.elara':
				'Платформа стоматології, побудована навколо шляхів лікування та запису',
			'project.kovalov':
				'Платформа юридичного бюро, організована за ситуацією та швидкістю відповіді',
			'seo.home-title': 'Максим Сілка — фронтенд React-розробник',
			'seo.home-description':
				'Фронтенд-розробник із Києва. Створюю швидкі та адаптивні інтерфейси на React, Next.js, TypeScript і Tailwind CSS.',
			'seo.about-title': 'Про мене — Максим Сілка',
			'seo.about-description':
				'Досвід, навички та освіта фронтенд-розробника Максима Сілки: React, Next.js, TypeScript, Tailwind CSS.',
			'seo.portfolio-title': 'Проекти — Максим Сілка',
			'seo.portfolio-description':
				'Комерційні проекти: сайти, інтернет-магазини, логістичні та аналітичні платформи на React і Next.js.',
			'seo.reviews-title': 'Відгуки клієнтів — Максим Сілка',
			'seo.reviews-description':
				'Відгуки клієнтів про роботу фронтенд-розробника Максима Сілки.',
			'seo.contact-title': 'Контакти — Максим Сілка',
			'seo.contact-description':
				'Зв’яжіться зі мною щодо фронтенд-розробки: пошта, Telegram або форма на сайті.',
			'stat.item_5': 'Років Досвіду',
			'stat.item_6': 'Завершених Проектів',
			'stat.item_7': 'Задоволених Клієнтів',
			'stat.item_8': 'Технологій Освоєно',
			'freelance.desc':
				'Я розробляв лендінги, веб-сайти електронної комерції, маркетплейси, онлайн-казино та багато інших проектів.',
			'fundshop.desc':
				'Я працюю на новими веб-сайтами компанії, підтримую вже існуючі, а також розробляю адмін-панель та CRM-систему',
			'geekle.desc':
				'Я працюю на півставки, розробляю лендінги та функціонал для Geekle подій',
			'reviews.title': 'Відгуки',
			'reviews.role': 'Клієнт',
			'reviews.source': 'Відгуки зібрані з мого профілю на',
			'reviews.title-span': 'клієнтів',
			'review.name-1': 'Сергій Сиволап',
			'review.text-1':
				'Виявив високий рівень професіоналізму та розуміння моїх потреб. Уважно вислухав мої вимоги і запропонував низку покращень, які могли б покращити користувацький досвід і функціональність сайту. Було помітно, що він має глибокі знання та досвід у веброзробці.',
			'review.name-2': 'Нікифор Бобровніков',
			'review.text-2':
				'Максим — професіонал, з яким приємно вести діалог. У процесі роботи виникла пара технічних проблем, які завдяки його кмітливості ми змогли вирішити за короткий термін. Вдячний. Будемо продовжувати співпрацю )',
			'review.name-3': 'Дмитро Головня',
			'review.text-3': 'Зроблено все швидко та якісно!',
			'review.name-4': 'Сергій',
			'review.text-4':
				'Дуже задоволений, а саме: 1) Професіонал! 2) Конструктивна, комфортна та оперативна комунікація. 3) Людина сфокусована на гарному результаті, а не тільки на оплаті. Вважаю що мені пощастило знайти цього підрядника!',
			'review.name-5': 'Odd',
			'review.text-5':
				'Дуже задоволений співпрацею, швидко та якісно! Домовились на майбутню співпрацю. Рекомендую!',
			'review.name-6': 'Володимир',
			'review.text-6':
				'Дуже гарно дякуємо за чудову роботу! Сподобався підхід, якість та швидкість виконання! Безумовно рекомендуємо!)',
			'review.name-7': 'Oleg',
			'review.text-7':
				'Швидко відповів і почав працювати. Завдання складне та його вирішення викликає питання, але загалом співпрацею задоволений.',
			'review.name-8': 'Ігор',
			'review.text-8':
				'Все чудово, швидко та якісно. Виконавець чує та розуміє замовника, завжди консультує та радить в вирішенні різних питань',
			'review.name-9': 'Іваницький Ярослав',
			'review.text-9':
				'Хочу поділитися своїми враженнями про внесення оновлень до дизайну та функціоналу нашого сайту. Нові зміни дійсно вразили мене своєю якістю та користувальницькою дружністю. Максим підійшов до роботи скрупульозно та швидко реагував на мої правки. В цілому я дуже задоволений і рекомендую до співпраці.',
			'review.name-10': 'Artur',
			'review.text-10':
				'Робота виконана вчасно та якісно. Навіть було додано трішки більше ніж домовлялись на початку. Дякую.',
			'review.name-11': 'Ренат',
			'review.text-11':
				'Дуже задоволений співпрацею! Комунікація - 5/5; Відповідальність - 5/5; Терміни - 4/5',
			'review.name-12': 'Ігор',
			'review.text-12':
				'Швидко пояснив, у чому була проблема, і виправив. Я дуже задоволений результатом! Рекомендую!',
			'review.name-13': 'Vitalik Serov',
			'review.text-13':
				'Хочу висловити вдячність і захоплення професіоналізмом верстальника, який виконав замовлення для нашого проекту. Роботу було зроблено не лише в напрочуд стислі терміни, а й з видатною точністю та естетичною досконалістю. Крім того, він завжди був готовий до обговорення та внесення необхідних змін, що зробило взаємодію приємною та продуктивною.',
			'review.name-14': 'Сергій',
			'review.text-14': 'Все добре!',
			'review.name-15': 'Микола',
			'review.text-15': 'Робота виконано якісно та вчасно',
			'review.name-16': 'Микита',
			'review.text-16':
				'Замовлення виконано чітко і оперативно, виконавець зробив всі необхідні правки. Результатом задоволений!',
			'review.name-17': 'AppBoosty LLC',
			'review.text-17':
				'Замовлення виконано. Були своєчасвно внесені всі правки, також виконавець самостійно пропонував покращення.',
			'review.name-18': 'Serhii',
			'review.text-18':
				'Все супер! Надійний розробник. Все виконано чітко з ТЗ, та навіть більше. Рекомендую',
			'review.name-19': 'Yurij',
			'review.text-19': 'Раджу. Усе зробив ідеально',
			'review.name-20': 'Geekle.us',
			'review.text-20':
				'Задоволені роботою, швидка, проста та якісна співпраця, рекомендую',
			'review.name-21': 'Дмитро Купрієнко',
			'review.text-21':
				'Все виконано гарно. Прогер був завжди на звʼязку та допомагав. Єдине що, це просадка по термінах, а так все гууд.',
			'review.name-22': 'Andreii K.',
			'review.text-22': 'Молодець, так тримати, рекомендую',
			'review.name-23': 'Вадим Поліщук',
			'review.text-23': 'Все супер, швидко та якісно',
			'review.name-24': 'Богдан',
			'review.text-24':
				'До створення інтернет магазину віднісся дуже відповідально. Робота виконана на всі 100 відсотків, з пропозиціями та покращеннями у дуже стислі строки! Дякую!',
			'review.name-25': 'WAIB Agency',
			'review.text-25': 'Макс відповідальний та ефективний. Мої рекомендації.',
		},
	},
	en: {
		translation: {
			style: 'Style Switcher',
			'style.color': 'Colour',
			'theme.dark': 'Switch to dark theme',
			'theme.light': 'Switch to light theme',
			'language.switch': 'Change language',
			'nav.menu': 'Menu',
			'home.title-span': 'I’m Max Silka.',
			'home.title': 'Front-end Developer',
			'home.description':
				'I’m a front-end React developer based in Kyiv, Ukraine. With a strong passion for creating engaging and interactive user interfaces, I am actively looking for opportunities to apply my skills and learn new technologies in a dynamic and collaborative team.',
			'home.badge': 'Open to new projects',
			'home.cta-work': 'View my work',
			'home.button': 'More About Me',
			'about.title-span': 'Me',
			'about.title': 'About',
			'personal.title': 'Personal Infos',
			'personal.info-title__1': 'First Name : ',
			'personal.info-description__1': 'Max',
			'personal.info-title__2': 'Last Name : ',
			'personal.info-description__2': 'Silka',
			'personal.info-title__3': 'Email : ',
			'personal.info-description__3': 'msil.developer@gmail.com',
			'personal.info-title__4': 'Telegram : ',
			'personal.info-description__4': '@TheMSiL',
			'personal.info-title__5': 'Location : ',
			'personal.info-description__5': 'Kyiv, Ukraine',
			'personal.info-title__6': 'Profession : ',
			'personal.info-description__6': 'Front-end Developer',
			'personal.info-title__7': 'Languages : ',
			'personal.info-description__7': 'Ukrainian, English',
			'personal.info-title__8': 'Status : ',
			'personal.info-description__8': 'Open to new projects',
			'personal.button': 'Download CV',
			'nav.home': 'Home',
			'nav.about': 'About',
			'nav.reviews': 'Reviews',
			'nav.portfolio': 'Portfolio',
			'nav.contact': 'Contact',
			'hobbies.title': 'Hobbies',
			'skills.title': 'My Skills',
			'education.title': 'Experience & Education',
			'education.prof': 'Front-end developer',
			'education.desc':
				'Learned HTML, CSS, JavaScript and React. Mastered tools such as Webpack, Git, Figma and Visual Studio Code.',
			'education.button': 'Download certificate',
			'education.button1': 'Freelance profile',
			'education.button2': 'Company website',
			'portfolio.title': 'My',
			'portfolio.title-span': 'Portfolio',
			'contact.title': 'Get In',
			'contact.title-span': 'Touch',
			'contact.subtitle': 'Waiting for your message!',
			'contact.desc':
				'Please feel free to contact me at any time and I would be delighted to be part of your team.',
			'contact.mail': 'Mail me',
			'contact.telegram': 'Message me on Telegram',
			'contact.button': 'Send Message',
			'contact.success':
				'Thank you! Your message has been sent, I will get back to you shortly.',
			'contact.error':
				'The message could not be sent. Please email msil.developer@gmail.com or write to Telegram @TheMSiL.',
			'name.placeholder': 'Your Name',
			'email.placeholder': 'Your Email',
			'textarea.placeholder': 'Your Message',
			'portfolio.item1-title-1': 'Project : ',
			'portfolio.item-title-2': 'Technology : ',
			'portfolio.item-title-3': 'Preview : ',
			'portfolio.visit': 'Open site',
			'portfolio.close': 'Close',
			'portfolio.prev-page': 'Previous page',
			'portfolio.next-page': 'Next page',
			'project.swisspc':
				'IT company site covering infrastructure, networks and support',
			'project.abramova':
				'Online shop for hand-poured soy candles with delivery across Czechia',
			'project.elixir':
				'Design studio landing page with portfolio and enquiry form',
			'project.miraton':
				'Cloud mining service landing page with a personal dashboard',
			'project.kamba':
				'Home care service site with treatments and coverage areas',
			'project.tex': 'Site for a TRON token, staking and wallet',
			'project.kantor': 'Website for a currency exchange office in Poland',
			'project.amrit':
				'Site for a biomedical research and regenerative medicine institute',
			'project.handyman': 'Landing page for a home repair service',
			'project.sheremet':
				'Site for a waste removal, transport and cleaning company',
			'project.lst': 'Site for a computer and home appliance repair workshop',
			'project.zone': 'Landing page for a VR business solutions studio',
			'project.mntn': 'Mountain travel landing page with a parallax effect',
			'project.freedom':
				'Landing page for a revenue-based business lending service',
			'project.infinity-bet':
				'Online casino with a lottery, tournaments and a live wins feed',
			'project.curiosity':
				'Kids education platform with progress analytics for parents',
			'project.numapay': 'Landing page for a payment service',
			'project.qubly': 'Landing page for a real-time analytics SaaS',
			'project.kreative-korner':
				'Creative studio site with services and portfolio',
			'project.bean-scene': 'Coffee shop landing page with menu and story',
			'project.paynicle': 'Front-end build of a fintech service landing page',
			'project.nft-ring': 'Landing page for a minimalist NFT marketplace',
			'project.resilience':
				'Landing page for an online stress-resilience course',
			'project.spayke': 'Coming-soon page with a subscription form',
			'project.wavschool': 'Website for an online design school',
			'project.delivery-import':
				'Cost calculator for importing cars from the USA',
			'project.abc': 'Site for a professional photoshoot and marketing studio',
			'project.tvs': 'Site for a gearbox and car parts supplier in Spain',
			'project.accelerage-landing':
				'Landing page for a mobile app revenue service',
			'project.casino-259': 'Online game running inside Telegram with a bot',
			'project.ra-agency':
				'Trilingual site for a performance agency, built around proof',
			'project.crashatlas':
				'Aviation accident database with an interactive map covering a century of flight',
			'project.glidex':
				'Multimodal logistics platform with route building and tracking',
			'project.nova':
				'Research workspace where every AI answer leads to its source page',
			'project.motion': 'App for rides, routes and weekly goals',
			'project.noir': 'Product site and configurator for a premium e-bike',
			'project.flow':
				'Visual automation builder: triggers, actions, conditions and integrations on one canvas',
			'project.aera':
				'Product site and interface system for an operational analytics platform',
			'project.oriel':
				'Property developer platform with a live apartment catalogue across four complexes',
			'project.tvorivo':
				'Digital products store with a catalogue, user area and instant delivery',
			'project.axion':
				'Positioning site for an AI adoption and process automation practice',
			'project.pelagion':
				'Brand and product site for autonomous marine systems and mission software',
			'project.litha':
				'Portfolio platform for an architecture studio, built around atmosphere',
			'project.aureon':
				'Solar installer platform with a personal savings calculator',
			'project.elara':
				'Dental clinic platform built around treatment paths and booking',
			'project.kovalov':
				'Law firm platform organised by situation and response time',
			'seo.home-title': 'Max Silka — Front-end React Developer',
			'seo.home-description':
				'Front-end developer based in Kyiv. I build fast, responsive interfaces with React, Next.js, TypeScript and Tailwind CSS.',
			'seo.about-title': 'About — Max Silka',
			'seo.about-description':
				'Experience, skills and education of front-end developer Max Silka: React, Next.js, TypeScript, Tailwind CSS.',
			'seo.portfolio-title': 'Portfolio — Max Silka',
			'seo.portfolio-description':
				'Commercial projects: marketing sites, online shops, logistics and analytics platforms built with React and Next.js.',
			'seo.reviews-title': 'Client reviews — Max Silka',
			'seo.reviews-description':
				'What clients say about working with front-end developer Max Silka.',
			'seo.contact-title': 'Contact — Max Silka',
			'seo.contact-description':
				'Get in touch about front-end work by email, Telegram or the form on the site.',
			'stat.item_5': 'Years of Experience',
			'stat.item_6': 'Completed Projects',
			'stat.item_7': 'Happy Customers',
			'stat.item_8': 'Technologies Mastered',
			'freelance.desc':
				'I have developed landing pages, e-commerce websites, marketplaces, online casino, and many other projects.',
			'fundshop.desc':
				'I work on new company websites, support existing ones, and develop the admin panel and CRM system',
			'geekle.desc':
				'I work part-time, developing landing pages and functionality for Geekle events',
			'reviews.title': 'What clients',
			'reviews.role': 'Client',
			'reviews.source': 'Reviews collected from my profile on',
			'reviews.title-span': 'say',
			'review.name-1': 'Sergey Sivolap',
			'review.text-1':
				'Showed a high level of professionalism and understanding of my needs. He carefully listened to my requirements and suggested a number of improvements that could enhance the user experience and functionality of the site. It was evident that he has deep knowledge and experience in web development.',
			'review.name-2': 'Nikifor Bobrovnikov',
			'review.text-2':
				'Maksym is a professional who is pleasant to talk to. During the work, we encountered a couple of technical problems, which, thanks to his resourcefulness, we were able to solve quickly. Grateful. We will continue to cooperate :)',
			'review.name-3': 'Dmytro Holovnia',
			'review.text-3': 'Everything was done quickly and efficiently!',
			'review.name-4': 'Serhii',
			'review.text-4':
				'Very satisfied, namely: 1) Professional! 2) Constructive, comfortable, and prompt communication. 3) The person is focused on a good result, not just the payment. I consider myself lucky to have found this contractor!',
			'review.name-5': 'Odd',
			'review.text-5':
				'Very satisfied with the cooperation, quickly and efficiently! Agreed on future cooperation. I recommend!',
			'review.name-6': 'Volodymyr',
			'review.text-6':
				'Thank you very much for the excellent work! I liked the approach, quality, and speed of execution! Definitely recommend!)',
			'review.name-7': 'Oleg',
			'review.text-7':
				'Responded quickly and started working. The task is complex and its solution raises questions, but overall I am satisfied with the cooperation.',
			'review.name-8': 'Igor',
			'review.text-8':
				'Everything is great, quickly and efficiently. The contractor hears and understands the client, always consults and advises on various issues.',
			'review.name-9': 'Ivanitskyi Yaroslav',
			'review.text-9':
				'I want to share my impressions of the updates to the design and functionality of our site. The new changes really impressed me with their quality and user-friendliness. Maksym approached the work meticulously and responded quickly to my adjustments. Overall, I am very satisfied and recommend working with him.',
			'review.name-10': 'Artur',
			'review.text-10':
				'The work was done on time and with quality. Even a little more was added than we agreed upon at the beginning. Thank you.',
			'review.name-11': 'Renat',
			'review.text-11':
				'Very satisfied with the cooperation! Communication - 5/5; Responsibility - 5/5; Deadlines - 4/5',
			'review.name-12': 'Igor',
			'review.text-12':
				'Quickly explained what the problem was and fixed it, I am very satisfied with the result! Recommend!',
			'review.name-13': 'Vitalik Serov',
			'review.text-13':
				'I would like to express my gratitude and admiration for the professionalism of the developer who completed the order for our project. His work was not only completed in an amazingly short time but also with outstanding accuracy and aesthetic excellence. In addition, the developer was always ready for discussion and making necessary changes, making interaction with him pleasant and productive.',
			'review.name-14': 'Serhii',
			'review.text-14': 'Everything is good!',
			'review.name-15': 'Mykola',
			'review.text-15': 'The work was done efficiently and on time.',
			'review.name-16': 'Nikita',
			'review.text-16':
				'The order was completed precisely and promptly, the contractor made all the necessary adjustments. I am satisfied with the result!',
			'review.name-17': 'AppBoosty LLC',
			'review.text-17':
				'The order was completed. All corrections were made on time, and the contractor also independently suggested improvements.',
			'review.name-18': 'Serhii',
			'review.text-18':
				'Everything is super! Reliable developer. Everything was done according to the requirements, and even more. Recommend',
			'review.name-19': 'Yurii',
			'review.text-19': 'Recommend. Everything was done perfectly.',
			'review.name-20': 'Geekle.us',
			'review.text-20':
				'Satisfied with the work, quick, simple, and high-quality cooperation, recommend',
			'review.name-21': 'Dmytro Kupriienko',
			'review.text-21':
				'Everything was done well. The programmer was always in touch and helped. The only downside was the delay in deadlines, but overall everything is good.',
			'review.name-22': 'Andrii K.',
			'review.text-22': 'Well done, keep it up, recommend',
			'review.name-23': 'Vadym Polishchuk',
			'review.text-23': 'Everything is great, quickly and efficiently',
			'review.name-24': 'Bohdan',
			'review.text-24':
				'He approached the creation of the online store very responsibly. The work was done 100 percent, with suggestions and improvements in a very short time! Thank you!',
			'review.name-25': 'WAIB Agency',
			'review.text-25': 'Maks is responsible and effective. My recommendations.',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
