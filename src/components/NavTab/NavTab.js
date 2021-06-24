import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function NavTab() {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <nav className='header__menu-container'>
        <NavLink to='/signup' className='header__menu-link hover'>
          Регистрация
        </NavLink>
        <NavLink to='/signin' className='header__menu-link hover'>
          <button className='header__menu-button'>Войти</button>
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav className='header__menu-container header__menu-profile'>
        <NavLink
          to='/'
          className='header__menu-container header__menu-link header__menu-link_disabled hover hover_border'
        >
          Главная
        </NavLink>
        <NavLink
          to='/movies'
          className='header__menu-link header__menu-link_profile hover hover_border'
        >
          Фильмы
        </NavLink>
        <NavLink to='/saved-movies' className='header__menu-link hover hover_border'>
          Сохранённые фильмы
        </NavLink>
      </nav>
    );
  }
}

export default NavTab;
