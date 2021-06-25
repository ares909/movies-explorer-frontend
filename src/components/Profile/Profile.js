function Profile() {
  return (
    <section className='Profile'>
      <form className='profile__form'>
        <fieldset className='profile__form-fieldset'>
          <h2 className='profile__form-title'>Привет, Дмитрий!</h2>
          <div className='profile__form-input-container'>
            <label>Имя</label>
            <input
              type='text'
              className='profile__form-input'
              id='name'
              required
              value={'Дмитрий'}
            ></input>
          </div>
          <div className='profile__form-input-container'>
            <label >E-mail</label>
            <input
              type='email'
              className='profile__form-input'
              id='email'
              required
              value={'pochta@yandex.ru'}
            ></input>
          </div>
        </fieldset>
        <button className='profile__form-button hover'>Редактировать</button>
        <button className='profile__form-button profile__form-button_red hover'>Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
