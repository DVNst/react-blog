import './header.scss';

const Header = (posts) => {
  return (
    <div className="main__header header">
      <div className="header__title">VASYA BLOG</div>
      <ul className="header__menu header-menu">
        <li className="header-menu__item header-menu__item--search" data-tooltip="Поиск">
          <span></span>
          <span className='visually-hidden'>Поиск</span>
        </li>
        <li className="header-menu__item header-menu__item--create" data-tooltip="Написать">
          <span></span>
          <span className='visually-hidden'>Написать</span>
        </li>
        <li className="header-menu__item header-menu__item--log-in" data-tooltip="Войти">
          <span></span>
          <span className='visually-hidden'>Войти</span>
        </li>
        <li className="header-menu__item header-menu__item--log-out" data-tooltip="Выйти">
          <span></span>
          <span className='visually-hidden'>Выйти</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
