import logo from '../../images/Promo/Promo__logo.svg';
import NavTab from '../NavTab/NavTab';

function Header() {
  return (
    <section className='Header'>
      <div className='header__container'>
        <a href='#' className='header__logo-box' target='_blank'>
          <img className='header__logo' src={logo} alt='лого' />
        </a>
        <NavTab></NavTab>
      </div>
    </section>
  );
}

export default Header;
