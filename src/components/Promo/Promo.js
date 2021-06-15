import bodyLogo from '../../images/Promo/Promo__bodyLogo.svg';

function Promo() {
  return (
    <section className='Promo'>
      <div className='promo__body'>
        <h1 className='promo__body-text'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className='promo__body-logo-box'>
          <img className='promo__body-logo' src={bodyLogo} alt='лого_проект' />
        </div>
        {/* <img className='body__logo' src={bodyLogo} alt='лого_проект'/> */}
      </div>
    </section>
  );
}

export default Promo;
