const portfolio = [
  {
    title: 'Мама и малыш',
    note: 'нежная история в светлой студии',
    image: '/portfolio/mother-baby.jpg',
    className: 'case case-tall',
  },
  {
    title: 'В Москве лето',
    note: 'яркая прогулка в центре города',
    image: '/portfolio/moscow-summer.jpg',
    className: 'case case-wide',
  },
  {
    title: 'В ожидании',
    note: 'домашняя съёмка без лишней постановки',
    image: '/portfolio/maternity.jpg',
    className: 'case',
  },
  {
    title: 'Женский портрет',
    note: 'про характер, свободу и уверенность',
    image: '/portfolio/portrait.jpg',
    className: 'case',
  },
];

const steps = [
  ['01', 'Знакомимся', 'Вы рассказываете, какой результат хочется получить.'],
  ['02', 'Готовимся', 'Я помогаю с идеей, образом, локацией и настроением.'],
  ['03', 'Снимаем', 'В процессе мягко направляю и подсказываю с позированием.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gachegova — на главную">
          <span>GACHEGOVA</span>
          <small>photography</small>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#portfolio">Портфолио</a>
          <a href="#about">Обо мне</a>
          <a href="#process">Как всё проходит</a>
        </nav>
        <a className="header-cta" href="https://wa.me/79292835080" target="_blank" rel="noreferrer">
          Записаться
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Фотограф в Москве</p>
          <h1>
            Покажу,
            <br />
            какие вы <em>красивые</em>
          </h1>
          <p className="hero-lead">
            Живые съёмки о вас — настоящих. Без сложных поз и волнения перед камерой.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="https://wa.me/79292835080" target="_blank" rel="noreferrer">
              Обсудить съёмку <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#portfolio">Смотреть работы ↓</a>
          </div>
          <div className="hero-stat">
            <strong>100+</strong>
            <span>довольных клиентов<br />и историй в кадре</span>
          </div>
        </div>

        <figure className="hero-photo">
          <img src="/portfolio/mother-daughter.jpg" alt="Мама с дочкой на светлой студийной съёмке" />
          <figcaption>
            <span>Полина Гачегова</span>
            <span>Москва · 2026</span>
          </figcaption>
        </figure>
        <p className="vertical-note">Ваши чувства — моя любимая история</p>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Избранные истории</p>
            <h2>О любви к себе<br />и друг к другу</h2>
          </div>
          <p className="section-intro">
            Семья, ожидание малыша, прогулка по любимому городу или портрет только для себя — у каждой истории свой ритм.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <article className={item.className} key={item.title}>
              <div className="case-image">
                <img src={item.image} alt={item.title} />
                <span className="case-number">0{index + 1}</span>
              </div>
              <div className="case-caption">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>

        <a className="button button-outline" href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">
          Больше историй в Instagram <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="about-section" id="about">
        <div className="about-photo">
          <img src="/portfolio/friends.jpg" alt="Большая дружеская компания на летней съёмке" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Давайте знакомиться</p>
          <h2>Я Полина.<br />Фотограф и человек,<br />который всегда <em>за вас</em></h2>
          <p>
            Мне важно не собрать идеальную картинку, а увидеть вашу живую красоту. На съёмке можно смеяться, двигаться, обнимать близких и просто быть собой.
          </p>
          <blockquote>«Вам не нужно уметь позировать. Это моя работа — помочь вам расслабиться и увидеть себя по-новому».</blockquote>
          <a className="text-link" href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">@gachegova_ph ↗</a>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Всё просто</p>
            <h2>Как проходит съёмка</h2>
          </div>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">Пора сохранить эту главу</p>
        <h2>Давайте создадим<br /><em>вашу историю</em></h2>
        <a className="button button-light" href="https://wa.me/79292835080" target="_blank" rel="noreferrer">
          Написать в WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>GACHEGOVA</span>
          <small>photography</small>
        </a>
        <p>Фотограф в Москве</p>
        <a href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </main>
  );
}
