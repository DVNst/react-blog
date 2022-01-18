import './menu.scss';

const Menu = (posts) => {
  return (
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
  );
};

export default Menu;
