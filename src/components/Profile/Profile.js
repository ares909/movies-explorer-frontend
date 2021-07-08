import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import Error from '../Error/Error';
import ServerError from '../ServerError/ServerError';
function Profile({ isOpened, onLogout, onChange, errors, serverError, isValid, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <section className='Profile'>
      <form className='profile__form' onSubmit={onSubmit} noValidate>
        <fieldset className='profile__form-fieldset'>
          <h2 className='profile__form-title'>Привет, Дмитрий!</h2>
          <div className='profile__form-input-container'>
            <label>Имя</label>
            <input
              required
              type='text'
              className='profile__form-input'
              id='name'
              name='name'
              placeholder={currentUser.name || ''}
              onChange={onChange}
            ></input>
            <Error message={errors.name} isValid={isValid}></Error>
          </div>
          <div className='profile__form-input-container'>
            <label>E-mail</label>
            <input
              required
              type='email'
              className='profile__form-input'
              id='email'
              name='email'
              placeholder={currentUser.email || ''}
              onChange={onChange}
            ></input>
            <Error message={errors.email} isValid={isValid}></Error>
          </div>
        </fieldset>
        <button className={`profile__form-button ${!isValid ? 'profile__form-button_red' : ''} hover`}>Редактировать</button>
        <ServerError message={serverError}></ServerError>
        <button
          className='profile__form-button profile__form-button_red hover'
          onClick={onLogout}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
}

export default Profile;
