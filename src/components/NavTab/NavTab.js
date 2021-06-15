import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

function NavTab() {
  return (
    <nav className='header__menu-container'>
      <NavLink to='/signup' className='header__menu-link hover'>Регистрация</NavLink>
      <NavLink to='/signin' className='header__menu-link hover'><button className='header__menu-button'>Войти</button></NavLink>
    </nav>
  );
}

export default NavTab;
