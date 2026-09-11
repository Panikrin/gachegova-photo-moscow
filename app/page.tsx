const catalog = [
  { category: 'Семья', title: 'Семейная история', description: 'Тёплая съёмка о ваших отношениях — дома, в студии или на прогулке.', image: '/portfolio/mother-daughter.jpg' },
  { category: 'Материнство', title: 'Мама и малыш', description: 'Нежные кадры первых объятий, прикосновений и важных маленьких деталей.', image: '/portfolio/mother-baby.jpg' },
  { category: 'Ожидание', title: 'Беременность', description: 'Спокойная история о времени, которое хочется сохранить навсегда.', image: '/portfolio/maternity.jpg' },
  { category: 'Для себя', title: 'Женский портрет', description: 'Съёмка про характер, свободу и возможность увидеть себя по-новому.', image: '/portfolio/portrait.jpg' },
  { category: 'Прогулка', title: 'Городская история', description: 'Живой маршрут по Москве, любимая музыка и фотографии без постановки.', image: '/portfolio/moscow-summer.jpg' },
  { category: 'Событие', title: 'Ваш особенный день', description: 'День рождения, встреча с друзьями или семейный праздник — всё самое настоящее.', image: '/portfolio/friends.jpg' },
];

const steps = [
  ['01', 'Выбираем формат', 'Вы рассказываете о себе, а я помогаю найти подходящий вид съёмки.'],
  ['02', 'Готовимся', 'Продумываем идею, образ, локацию и детали без лишней суеты.'],
  ['03', 'Снимаем', 'Я мягко направляю, помогаю расслабиться и беру процесс на себя.'],
];

const whatsapp = 'https://wa.me/79292835080';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gachegova — на главную">
          <span>GACHEGOVA</span><small>photography</small>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#catalog">Каталог</a><a href="#about">Обо мне</a><a href="#process">Как всё проходит</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Записаться</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Фотограф в Москве</p>
          <h1>Ваша история<br />в <em>тёплом свете</em></h1>
          <p className="hero-lead">Семья, материнство, портреты и важные дни. Выберите формат — я помогу со всем остальным.</p>
          <div className="hero-actions">
            <a className="button button-bronze" href="#catalog">Выбрать съёмку <span aria-hidden="true">↓</span></a>
            <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Обсудить идею ↗</a>
          </div>
          <div className="hero-stat"><strong>100+</strong><span>довольных клиентов<br />и историй в кадре</span></div>
        </div>
        <figure className="hero-photo">
          <img src="/portfolio/mother-daughter.jpg" alt="Мама с дочкой на светлой студийной съёмке" />
          <figcaption><span>Полина Гачегова</span><span>Москва · 2026</span></figcaption>
        </figure>
        <p className="vertical-note">Ваши чувства — моя любимая история</p>
      </section>

      <section className="catalog-section" id="catalog">
        <div className="catalog-heading">
          <div><p className="eyebrow">Каталог съёмок</p><h2>Найдите свою<br /><em>историю</em></h2></div>
          <div className="catalog-intro">
            <p>Каждую съёмку собираю индивидуально — под ваш характер, повод и настроение.</p>
            <p className="price-note">Стоимость зависит от выбранного формата. Напишите мне — предложу подходящий вариант.</p>
          </div>
        </div>
        <div className="catalog-grid">
          {catalog.map((item, index) => (
            <article className="catalog-card" key={item.title}>
              <a className="catalog-image" href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Узнать о съёмке «${item.title}»`}>
                <img src={item.image} alt={item.title} /><span className="catalog-number">0{index + 1}</span><span className="catalog-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="catalog-copy">
                <p>{item.category}</p><h3>{item.title}</h3><span>{item.description}</span>
                <a href={whatsapp} target="_blank" rel="noreferrer">Узнать детали ↗</a>
              </div>
            </article>
          ))}
        </div>
        <div className="catalog-footer">
          <p>Не нашли свой вариант? Расскажите, какую съёмку задумали.</p>
          <a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer">Подобрать формат <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-photo"><img src="/portfolio/friends.jpg" alt="Большая дружеская компания на летней съёмке" /></div>
        <div className="about-copy">
          <p className="eyebrow">Давайте знакомиться</p>
          <h2>Я Полина.<br />Фотограф и человек,<br />который всегда <em>за вас</em></h2>
          <p>Мне важно не собрать идеальную картинку, а увидеть вашу живую красоту. На съёмке можно смеяться, двигаться, обнимать близких и просто быть собой.</p>
          <blockquote>«Вам не нужно уметь позировать. Это моя работа — помочь вам расслабиться и увидеть себя по-новому».</blockquote>
          <a className="text-link" href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">@gachegova_ph ↗</a>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading compact"><div><p className="eyebrow">Всё просто</p><h2>Как проходит съёмка</h2></div></div>
        <div className="steps">
          {steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">Пора сохранить эту главу</p><h2>Давайте создадим<br /><em>вашу историю</em></h2>
        <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Написать в WhatsApp <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span>GACHEGOVA</span><small>photography</small></a>
        <p>Фотограф в Москве</p><a href="https://www.instagram.com/gachegova_ph/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </main>
  );
}
