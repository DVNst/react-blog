import { useState, useRef } from "react";

import './header.scss';

const Header = (posts) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState('');
  const refSearchInput = useRef();

  const toogleSearchVisible = () => {
    setSearchVisible((prev) => !prev);
  }

  const handleSearchOpen = () => {
    toogleSearchVisible();
    refSearchInput.current.focus();
  };

  const handleKeyDown = (e) => {
    //ESC
    if (e.keyCode === 27) {
      toogleSearchVisible();
      refSearchInput.current.blur();
    }
    //ENTER
    if (e.keyCode === 13) {
      if (search) {
        console.log("SEARCH:", search);
      } else {
        console.log("SEARCH ENTER DOWN");
      }
    }
  }

  const handleSearchClose = () => toogleSearchVisible();

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <section className="main__header header">
      <h1 className="header__title"><a className="header__link" href='#'>Vasya blog</a></h1>
      <ul className="header__menu header-menu">
        <li
          onClick={handleSearchOpen}
          className="header-menu__item header-menu__item--search"
          data-tooltip="Поиск"
        >
          <span className='visually-hidden'>Поиск</span>
        </li>
        <li className="header-menu__item header-menu__item--create" data-tooltip="Написать">
          <span className='visually-hidden'>Написать</span>
        </li>
        <li className="header-menu__item header-menu__item--log-in" data-tooltip="Войти">
          <span className='visually-hidden'>Войти</span>
        </li>
        <li className="header-menu__item header-menu__item--log-out" data-tooltip="Выйти">
          <span className='visually-hidden'>Выйти</span>
        </li>
      </ul>

      <div className={`header__search search${searchVisible ? '' : ' visually-hidden'}`}>
        <input
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyDown}
          ref={refSearchInput}
          className="search__input"
          type="text"
          placeholder='Поиск статьи по заголовку или тексту...'
        />
        <button
          className="search__btn"
          onClick={handleSearchClose}
        >
          <span className="visually-hidden">Закрыть поиск</span>
        </button>
      </div>

    </section>
  );
};

export default Header;
