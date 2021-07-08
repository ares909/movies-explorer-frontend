import Error from '../Error/Error';
import ServerError from '../ServerError/ServerError';
import logo from '../../images/Promo/Promo__logo.svg';
import { useLocation, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function AuthForm({
  handleChange,
  handleSubmit,
  errors,
  isValid,
  serverError,
  errorVisible,
}) {
  const location = useLocation();
  const submitButtonClass = `authForm__form-button hover ${
    !isValid ? 'authForm__form-button_disabled' : ''
  }`;

  if (location.pathname === '/signup') {
    return (
      <form className='authForm__form' noValidate onSubmit={handleSubmit}>
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
              required
              name='name'
              type='text'
              className='authForm__form-input'
              id='name'
              onChange={handleChange}
              // value={'Дмитрий'}
            ></input>
            <Error message={errors.name} isValid={isValid}></Error>
          </div>
          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>E-mail</label>
            <input
              required
              name='email'
              type='email'
              className='authForm__form-input'
              id='email'
              onChange={handleChange}

              // value={'pochta@yandex.ru'}
            ></input>
            <Error message={errors.email} isValid={isValid}></Error>
          </div>

          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>Пароль</label>
            <input
              required
              name='password'
              type='password'
              className='authForm__form-input'
              id='password'
              onChange={handleChange}

              // value={'pochta@yandex.ru'}
            ></input>
            <Error message={errors.password} isValid={isValid}></Error>
          </div>
        </fieldset>
        <button className={submitButtonClass}>Зарегистрироваться</button>
        <ServerError error={errorVisible} message={serverError}></ServerError>
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
      <form className='authForm__form' onSubmit={handleSubmit} noValidate>
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
              required
              name='email'
              type='email'
              className='authForm__form-input'
              id='email'
              onChange={handleChange}

              // value={'pochta@yandex.ru'}
            ></input>
            <Error message={errors.email} isValid={isValid}></Error>
          </div>

          <div className='authForm__form-input-container'>
            <label className='authForm__form-label'>Пароль</label>
            <input
              required
              name='password'
              type='password'
              className='authForm__form-input'
              id='password'
              onChange={handleChange}
              // value={'pochta@yandex.ru'}
            ></input>
            <Error message={errors.password} isValid={isValid}></Error>
          </div>
        </fieldset>
        <button className={submitButtonClass}>Войти</button>
        <ServerError error={errorVisible} message={serverError}></ServerError>
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
