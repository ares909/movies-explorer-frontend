import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTab({ hadleCloseMenu, loggedIn }) {
  if (!loggedIn) {
    return (
      <nav className='header__menu-container'>
        <NavLink
          to='/signup'
          className='header__menu-link hover'
          onClick={hadleCloseMenu}
        >
          Регистрация
        </NavLink>
        <NavLink to='/signin' className='header__menu-link hover'>
          <button onClick={hadleCloseMenu} className='header__menu-button'>
            Войти
          </button>
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className='header__menu-container header__menu-profile'>
        <NavLink
          to='/'
          className='header__menu-container header__menu-link header__menu-link_disabled hover hover_border'
          onClick={hadleCloseMenu}
        >
          Главная
        </NavLink>
        <NavLink
          to='/movies'
          className='header__menu-link header__menu-link_profile hover hover_border'
          onClick={hadleCloseMenu}
        >
          Фильмы
        </NavLink>
        <NavLink
          to='/saved-movies'
          className='header__menu-link hover hover_border'
          onClick={hadleCloseMenu}
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
    );
  }
}

export default NavTab;
