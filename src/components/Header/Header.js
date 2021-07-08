import logo from '../../images/Promo/Promo__logo.svg';
import burger from '../../images/Header/Header__burger.svg';
import NavTab from '../NavTab/NavTab';
import AccountTab from '../AccountTab/AccountTab';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Header({hadleOpenMenu, loggedIn}) {


  const location = useLocation();
  if (
    location.pathname === '/signin' ||
    location.pathname === '/signup' ||
    location.pathname === '/404'
  ) {
    return <></>;
  } else {
    return (
      <section
        className={`Header ${location.pathname === '/' ? '' : 'Header_white'}`}
      >
        <div className='header__container'>
          <HashLink to='/#about' className='header__logo-box hover'>
            <img className='header__logo' src={logo} alt='лого' />
          </HashLink>
          <div className='header__tabs-container'>
            <NavTab loggedIn={loggedIn}></NavTab>
            <AccountTab loggedIn={loggedIn}></AccountTab>
          </div>
          <button className='header__burger hover' onClick={hadleOpenMenu}>
            <img className='header__burger-image' src={burger} alt='бургер' />
          </button>
        </div>
      </section>
    );
  }
}

export default Header;
