import { useState } from "react";

import "./menu.scss";

const Menu = (posts) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenu = (e) => {
    e.preventDefault();

    console.log(e.target);
  }

  return (
    <div className={`main__menu menu${menuOpen ? ' menu--open' : ''}`}>
      <div className="menu__wrapper">
        <p className="menu__title">Вася Пупкин</p>
        <p className="menu__desc">Дата регистрации: 12 августа 2019 в 08:06</p>
        <nav className="menu__navigation">
          <ul className="menu__list">
            <li className="menu__item menu__item--active">Главная</li>
            <li className="menu__item">Мой профиль</li>
            <li className="menu__item">Создать запись</li>
            <li className="menu__item">Выйти</li>
          </ul>
        </nav>
      </div>
      <button
        className="menu__btn"
        onClick={handleMenu}
      >
        <span className="menu__btn-text">Меню</span>
      </button>
    </div>
  );
};

export default Menu;
