function App() {
  return (
    <div className="main">
      <div className="main__menu menu">
        <div className="menu__wrapper">
          <p className="menu__title">Вася Пупкин</p>
          <p className="menu__desc">
            Дата регистрации: 12 августа 2019 в 08:06
          </p>
          <ul className="menu__list">
            <li className="menu__item menu__item--active">Главная</li>
            <li className="menu__item">Мой профиль</li>
            <li className="menu__item">Создать запись</li>
            <li className="menu__item">Выйти</li>
          </ul>
        </div>
        <div className="menu__btn">
          <span className="menu__btn-text">Меню</span>
        </div>
      </div>
      <div className="main__left">
        <div className="about">
          <div className="about__header">
            <h1 className="about__name">
              Vasya Pupkin
              <span className="about__desc">Блог фронтенд-разработчика</span>
            </h1>
            <img
              className="about__img"
              src="./img/vasya-pupkin.jpg"
              width="584px"
              height="422px"
              alt="Vasya Pupkin"
            />
          </div>
          <h2 className="about__title">Обо мне</h2>
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
          </p>
        </div>
      </div>
      <div className="main__right">
        <div className="main__header header">
          <div className="header__title">VASYA BLOG</div>
          <ul className="header__menu header-menu">
            <li className="header-menu__item header-menu__item--search">
              Поиск
            </li>
            <li className="header-menu__item header-menu__item--create">
              Написать
            </li>
            <li className="header-menu__item header-menu__item--log-in">
              Войти
            </li>
            <li className="header-menu__item header-menu__item--log-out">
              Выйти
            </li>
          </ul>
        </div>
        <div className="blog">
          <ul className="blog__list">
            <li className="blog__item">
              <div className="blog__wrapper">
                <h3 className="blog__title">
                  JavaScript: Как с помощью Dadata определить город по IP?
                </h3>
                <p className="blog__text">
                  На работе потребовалось запилить задачу для автоматического
                  определения города при совершении заказа. Было решено сделать
                  это на фронте, ибо бек был занят.
                </p>
                <div className="blog__data">
                  <p className="blog__date">12 августа 2019 в 08:06</p>
                  <p className="blog__views">301</p>
                </div>
              </div>
            </li>

            <li className="blog__item">
              <div className="blog__wrapper">
                <h3 className="blog__title">
                  Какой-то очень интересный заголовок
                </h3>
                <p className="blog__text">
                  На работе потребовалось запилить задачу для автоматического
                  определения города при совершении заказа.
                </p>

                <div className="blog__data">
                  <p className="blog__date">12 августа 2019 в 08:06</p>
                  <p className="blog__views">55</p>
                </div>
              </div>
              <img
                className="blog__img"
                src="./img/blog2.jpg"
                width="165px"
                height="165px"
                alt=""
              />
            </li>

            <li className="blog__item">
              <div className="blog__wrapper">
                <h3 className="blog__title">
                  Ставим обработчик фокуса для кастомоного React-компонента
                </h3>
                <p className="blog__text">
                  Что делать, если разработчик компонента для форматирования
                  номера телефона или других данных в текстовом поле, не добавил
                  обработчики на установку и снятие фокуса?
                </p>
                <div className="blog__data">
                  <p className="blog__date">12 августа 2019 в 08:06</p>
                  <p className="blog__views">16</p>
                </div>
              </div>
            </li>

            <li className="blog__item">
              <div className="blog__wrapper">
                <h3 className="blog__title">
                  Amet molestie tincidunt id nascetur sit purus turpis
                </h3>
                <p className="blog__text">
                  Vel vulputate mauris enim habitant ornare. Ut in sit purus
                  turpis ultrices suspendisse scelerisque quam lorem. Amet
                  molestie nascetur...
                </p>

                <div className="blog__data">
                  <p className="blog__date">12 августа 2019 в 08:06</p>
                  <p className="blog__views">301</p>
                </div>
              </div>
              <img
                className="blog__img"
                src="./img/blog4.jpg"
                width="165px"
                height="165px"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
