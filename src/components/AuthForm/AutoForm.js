import Error from '../Error/Error';
import logo from '../../images/Promo/Promo__logo.svg';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function AuthForm() {
  const location = useLocation();
  if (location.pathname === '/signup') {
    return (
      <form className='authForm__form' noValidate>
        <fieldset className='authForm__form-fieldset'>
          <HashLink
            to='/#about'
            className='header__logo-box hover authForm__logo'
          >
            <img className='header__logo' src={logo} alt='лого' />
          </HashLink>
          <h2 className='authForm__form-title'>Добро пожаловать!</h2>
          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>Имя</label>
            <input
              type='text'
              className='authForm__form-input'
              id='name'

              // value={'Дмитрий'}
            ></input>
            <Error></Error>
          </div>
          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>E-mail</label>
            <input
              type='email'
              className='authForm__form-input'
              id='email'

              // value={'pochta@yandex.ru'}
            ></input>
            <Error></Error>
          </div>

          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>Пароль</label>
            <input
              type='password'
              className='authForm__form-input'
              id='password'

              // value={'pochta@yandex.ru'}
            ></input>
            <Error></Error>
          </div>
        </fieldset>
        <button className='authForm__form-button hover'>
          Зарегистрироваться
        </button>
        <p className='authForm__form-text'>
          Уже зарегистрированы?{' '}
          <Link to='/signin' className='authForm__form-login-button hover'>
            Войти
          </Link>
        </p>
      </form>
    );
  } else if (location.pathname === '/signin') {
    return (
      <form className='authForm__form' noValidate>
        <fieldset className='authForm__form-fieldset authForm__form-fieldset_login'>
          <HashLink
            to='/#about'
            className='header__logo-box hover authForm__logo'
          >
            <img className='header__logo' src={logo} alt='лого' />
          </HashLink>
          <h2 className='authForm__form-title'>Рады видеть!</h2>

          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>E-mail</label>
            <input
              type='email'
              className='authForm__form-input'
              id='email'

              // value={'pochta@yandex.ru'}
            ></input>
            <Error></Error>
          </div>

          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>Пароль</label>
            <input
              type='password'
              className='authForm__form-input'
              id='password'

              // value={'pochta@yandex.ru'}
            ></input>
            <Error></Error>
          </div>
        </fieldset>
        <button className='authForm__form-button hover'>Войти</button>
        <p className='authForm__form-text'>
          Еще не зарегистрированы?{' '}
          <Link to='/signup' className='authForm__form-login-button hover'>
            Регистрация
          </Link>
        </p>
      </form>
    );
  }
}

export default AuthForm;
