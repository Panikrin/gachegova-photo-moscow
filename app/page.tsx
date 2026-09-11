const catalog = [
  { category: 'Семья', title: 'Семейная история', description: 'Тёплая съёмка о ваших отношениях — дома, в студии или на прогулке.', image: '/portfolio/mother-daughter.jpg' },
  { category: 'Материнство', title: 'Мама и малыш', description: 'Нежные кадры первых объятий, прикосновений и важных маленьких деталей.', image: '/portfolio/mother-baby.jpg' },
  { category: 'Ожидание', title: 'Беременность', description: 'Спокойная история о времени, которое хочется сохранить навсегда.', image: '/portfolio/maternity.jpg' },
  { category: 'Для себя', title: 'Женский портрет', description: 'Съёмка про характер, свободу и возможность увидеть себя по-новому.', image: '/portfolio/portrait.jpg' },
  { category: 'Прогулка', title: 'Городская история', description: 'Живой маршрут по Москве, любимая музыка и фотографии без постановки.', image: '/portfolio/moscow-summer.jpg' },
  { category: 'Событие', title: 'Ваш особенный день', description: 'День рождения, встреча с друзьями или семейный праздник — всё самое настоящее.', image: '/portfolio/friends.jpg' },
];

const packages = [
  {
    tag: 'Легко и по-настоящему',
    title: 'Ваша история',
    price: 'стоимость уточняется',
    image: '/portfolio/maternity.jpg',
    features: ['съёмка в стиле life-style', 'помощь с идеей и подбором образов', 'подбор локации или студии', 'подсказки в процессе съёмки', 'авторская обработка фотографий'],
  },
  {
    tag: 'Забота о каждой детали',
    title: 'Всё включено',
    price: 'стоимость уточняется',
    image: '/portfolio/mother-baby.jpg',
    features: ['всё из пакета «Ваша история»', 'расширенная подготовка к съёмке', 'помощь с командой специалистов', 'сопровождение на всех этапах', 'индивидуальные детали съёмки'],
  },
];

const steps = [
  ['01', 'Заявка', 'Вы пишете мне в WhatsApp и рассказываете, какую историю хотите сохранить.'],
  ['02', 'Подготовка', 'Мы выбираем дату, локацию, одежду и собираем настроение будущей съёмки.'],
  ['03', 'Съёмка', 'Я мягко направляю вас, помогаю расслабиться и беру процесс на себя.'],
  ['04', 'Фотографии', 'Готовую серию вы получаете в удобной персональной онлайн-галерее.'],
];

const extras = ['Аренда фотостудии', 'Услуги визажиста', 'Помощь стилиста', 'Срочная готовность', 'Дополнительная ретушь', 'Дополнительный час', 'Видеоролик', 'Фотокнига', 'Выезд за город', 'Конфиденциальная съёмка'];

const faq = [
  ['Как происходит бронирование?', 'Напишите мне в WhatsApp. Мы обсудим формат, ваши пожелания и свободные даты. После согласования деталей предоплата закрепит выбранный день за вами.'],
  ['Какую фотостудию выбрать?', 'Я предложу подходящие варианты с учётом состава семьи, стилистики и бюджета. Самостоятельно искать студию не придётся.'],
  ['Я совершенно не умею позировать…', 'Это нормально — большинство людей перед съёмкой говорят то же самое. Я буду подсказывать, куда посмотреть, как встать и что делать, чтобы кадры оставались живыми.'],
  ['Как быстро будут готовы фотографии?', 'Точный срок зависит от формата и загрузки и фиксируется при бронировании. Если фотографии нужны к определённой дате, скажите об этом заранее.'],
  ['Сколько кадров я получу?', 'Количество зависит от длительности, числа участников и динамики съёмки. Вы получите цельную отобранную серию в авторской обработке без технического брака.'],
  ['Кто помогает подобрать одежду?', 'После бронирования вы можете прислать фотографии вещей из гардероба. Я помогу собрать гармоничные образы и дам рекомендации под выбранную локацию.'],
  ['Когда лучше записываться?', 'Чем раньше, тем больше выбор дат и студий. Особенно это важно в выходные и в осенне-зимний сезон.'],
  ['Можно ли перенести съёмку?', 'Да, условия переноса и отмены мы заранее закрепим при бронировании, чтобы всё было понятно обеим сторонам.'],
  ['Можно ли прийти с питомцем?', 'Конечно. Предупредите меня заранее — я подберу локацию, где разрешена съёмка с животными.'],
];

const whatsapp = 'https://wa.me/79292835080';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gachegova — на главную"><span>GACHEGOVA</span><small>photography</small></a>
        <nav aria-label="Основная навигация"><a href="#portfolio">Портфолио</a><a href="#services">Услуги</a><a href="#about">Обо мне</a><a href="#faq">FAQ</a></nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Записаться</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Семейный фотограф в Москве</p>
          <h1>Истории,<br />где живёт <em>любовь</em></h1>
          <p className="hero-lead">Это не просто снимки — это история вашей семьи, ваших чувств и важных маленьких моментов.</p>
          <div className="hero-actions"><a className="button button-bronze" href="#services">Посмотреть стоимость ↓</a><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Написать Полине ↗</a></div>
          <div className="hero-stat"><strong>100+</strong><span>довольных клиентов<br />и историй в кадре</span></div>
        </div>
        <figure className="hero-photo"><img src="/portfolio/mother-daughter.jpg" alt="Семейная съёмка мамы с дочкой" /><figcaption><span>Полина Гачегова</span><span>Москва</span></figcaption></figure>
        <p className="vertical-note">Живые чувства — моя любимая история</p>
      </section>

      <section className="gallery-ribbon" aria-label="Избранные фотографии">
        {catalog.map((item) => <img key={item.title} src={item.image} alt={item.title} />)}
      </section>

      <section className="manifesto" id="about">
        <div><p className="eyebrow">Ваш фотограф</p><h2>Полина<br /><em>Гачегова</em></h2></div>
        <div className="manifesto-copy"><h3>Что для меня важно в семейных съёмках?</h3><p>Любовь — в первую очередь. Не постановочная идеальная картинка, а вы настоящие: ваши объятия, смех, движения и привычные взгляды друг на друга.</p><p>На съёмке я всегда рядом: помогу с идеей, образом, локацией и позированием.</p><a className="text-link" href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">Больше обо мне в Instagram ↗</a></div>
      </section>

      <section className="catalog-section" id="portfolio">
        <div className="catalog-heading"><div><p className="eyebrow">Портфолио</p><h2>Ваши чувства<br /><em>в кадре</em></h2></div><div className="catalog-intro"><p>Семья, ожидание малыша, прогулка по городу или портрет только для себя — у каждой истории свой ритм.</p></div></div>
        <div className="catalog-grid">
          {catalog.map((item, index) => <article className="catalog-card" key={item.title}><a className="catalog-image" href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Обсудить съёмку «${item.title}»`}><img src={item.image} alt={item.title} /><span className="catalog-number">0{index + 1}</span><span className="catalog-arrow" aria-hidden="true">↗</span></a><div className="catalog-copy"><p>{item.category}</p><h3>{item.title}</h3><span>{item.description}</span><a href={whatsapp} target="_blank" rel="noreferrer">Обсудить съёмку ↗</a></div></article>)}
        </div>
      </section>

      <section className="support-section">
        <img src="/portfolio/moscow-summer.jpg" alt="Летняя съёмка в Москве" />
        <div><p className="eyebrow">Я буду с вами на связи</p><h2>От первой идеи<br />до готовых фотографий</h2><p>Помогу выбрать студию или маршрут, подобрать одежду и цветовую гамму. Во время съёмки буду направлять вас и ваших близких, чтобы всё прошло легко.</p><a className="button button-bronze" href={whatsapp} target="_blank" rel="noreferrer">Связаться ↗</a></div>
      </section>

      <section className="services-section" id="services">
        <div className="services-heading"><p className="eyebrow">Прайс на съёмку</p><h2>Выберите свою<br /><em>историю</em></h2><p>Стоимость зависит от формата и подготовки. Напишите мне — я уточню детали и предложу подходящий пакет.</p></div>
        <div className="package-list">
          {packages.map((item, index) => <article className={`package-card package-${index + 1}`} key={item.title}><div className="package-photo"><img src={item.image} alt={item.title} /></div><div className="package-body"><p className="package-tag">{item.tag}</p><h3>{item.title}</h3><ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="package-price" href={whatsapp} target="_blank" rel="noreferrer">{item.price} <span>↗</span></a></div></article>)}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading compact"><div><p className="eyebrow">От заявки до результата</p><h2>Как проходит бронирование</h2></div></div>
        <div className="steps steps-four">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="extras-section">
        <div className="extras-title"><p className="eyebrow">Можно добавить к съёмке</p><h2>Дополнительные<br /><em>возможности</em></h2></div>
        <div className="extras-list">{extras.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p><b>+</b></div>)}</div>
      </section>

      <section className="reviews-section">
        <div><p className="eyebrow">Тёплые слова</p><h2>Отзывы героев<br />моих историй</h2><p>Реальные впечатления клиентов собраны в актуальном профиля.</p><a className="button button-light" href="https://www.instagram.com/stories/highlights/17882895497809817/" target="_blank" rel="noreferrer">Смотреть отзывы ↗</a></div>
        <img src="/portfolio/friends.jpg" alt="Дружеская съёмка" />
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-title"><p className="eyebrow">F A Q</p><h2>Отвечаю на<br /><em>ваши вопросы</em></h2></div>
        <div className="faq-list">{faq.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span><h3>{question}</h3><b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="contact-section" id="contact"><p className="eyebrow">Пора сохранить эту главу</p><h2>Давайте создадим<br /><em>вашу историю</em></h2><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Написать в WhatsApp ↗</a></section>

      <footer><a className="brand footer-brand" href="#top"><span>GACHEGOVA</span><small>photography</small></a><p>Фотограф в Москве · Полина Гачегова</p><div className="footer-links"><a href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></footer>
    </main>
  );
}
