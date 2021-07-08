import { NavLink } from 'react-router-dom';
import profileImage from '../../images/Header/Header__profile.svg';
function AccountTab({ hadleCloseMenu, loggedIn }) {
  if (loggedIn) {
    return (
      <nav className='header__menu-container header__menu-container_account'>
        <NavLink
          to='/profile'
          className='header__menu-link header__menu-link_profile hover'
          onClick={hadleCloseMenu}
        >
          Аккаунт
        </NavLink>
        <NavLink
          to='/profile'
          className='header__menu-link header__menu-link_image hover'
          onClick={hadleCloseMenu}
        >
          <img
            className='header__menu-profile-image'
            src={profileImage}
            alt='профиль'
          />
        </NavLink>
      </nav>
    );
  } else return <></>;
}

export default AccountTab;
