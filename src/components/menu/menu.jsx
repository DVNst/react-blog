import { formatDate } from "../../utils";

import "./menu.scss";

const user = {
  _id: "61c773aa09ab4d6ab0083a8a",
  fullName: "Вася Пупкин",
  email: "test@test.ru",
  password: "$2a$10$UAPiq71TugHuDZ9AGZBfDOI.iatuVmArDpSqoE51RDQm2BhfYGt1m",
  createdAt: "2021-12-25T05:06:26.074Z",
};

const Menu = ({ isOpenMenu, onClickMenu }) => {
  const handleMenu = (e) => {
    e.preventDefault();
    console.log(e.target.id);
  }

  const handleMenuOpen = (e) => {
    e.preventDefault();
    onClickMenu();
  }

  return (
    <div className={`main__menu menu${isOpenMenu ? ' menu--open' : ''}`}>
      <div className="menu__wrap">
        <div className="menu__wrap-nav">
          <div className="menu__header">
            <p className="menu__title">{user.fullName}</p>
            <p className="menu__desc">Дата регистрации: {formatDate(user.createdAt)}</p>
          </div>
          <nav className="menu__navigation">
            <ul className="menu__list" onClick={handleMenu}>
              <li className="menu__item" id="main">Главная</li>
              <li className="menu__item" id="profile">Мой профиль</li>
              <li className="menu__item" id="addPost">Создать запись</li>
              <li className="menu__item" id="logout">Выйти</li>
            </ul>
          </nav>
        </div>
        <button
          className="menu__btn"
          onClick={handleMenuOpen}
        >
          <span className="menu__btn-text">Меню</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
