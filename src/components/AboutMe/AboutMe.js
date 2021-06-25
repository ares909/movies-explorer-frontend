import avatar from '../../images/AboutMe/AboutMe__avatar.jpg';
import arrow from '../../images/AboutMe/AboutMe__arrow.svg';
function AboutMe() {
  return (
    <section className='AboutMe'>
      <div className='aboutme__header'>
        <h2 className='aboutme__header-text'>Студент</h2>
      </div>
      <div className='aboutme__body'>
        <div className='aboutme__body-container'>
          <div className='aboutme__body-text-container'>
            <h3 className='aboutme__body-text-header'>Дмитрий</h3>
            <p className='aboutme__body-text aboutme__body-text_occupation'>
              Фронтенд-разработчик, 28 лет
            </p>
            <p className='aboutme__body-text'>
              я живу в Ростое-на-Дону, закончил экономфак ЮФУ. 6 лет проработал
              в финансах. После того, как отучился на курсе по веб-разработке,
              сменил сферу и устроился в компанию Accenture. Есть жена и сын.
              Люблю проводить время с семьей и играть в игры.
            </p>
            <div className='aboutme__links-container'>
              <a
                href='https://vk.com/areszor'
                className='aboutme__body-text aboutme__body-text_link hover'
                target='_blank'
                rel='noreferrer'
              >
                VKontakte
              </a>
              <a
                href='https://github.com/ares909'
                className='aboutme__body-text aboutme__body-text_link hover'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
          </div>
          <div className='aboutme__body-image-container'>
            <img className='aboutme__body-image' src={avatar} alt='аватар' />
          </div>
        </div>
        {/* <div className='aboutme__body-portfolio'> */}
        <ul className='aboutme__body-portfolio-box'>
          <p className='aboutme__body-portfolio-header'>Портфолио</p>
          <li className='aboutme__body-portfolio-item'>
            <a
              className='aboutme__body-portfolio-link hover'
              href='https://github.com/ares909/how-to-learn'
              target='_blank'
              rel='noreferrer'
            >
              Статичный сайт
            </a>
            <a
              className='aboutme__body-portfolio-link hover'
              href='https://github.com/ares909/how-to-learn'
              target='_blank'
              rel='noreferrer'
            >
              <img src={arrow} alt='стрелка' />
            </a>
          </li>
          <li className='aboutme__body-portfolio-item'>
            <a
              className='aboutme__body-portfolio-link hover'
              href='https://github.com/ares909/russian-travel'
              target='_blank'
              rel='noreferrer'
            >
              Адаптивный сайт
            </a>
            <a
              className='aboutme__body-portfolio-link hover'
              href='https://github.com/ares909/russian-travel'
              target='_blank'
              rel='noreferrer'
            >
              <img src={arrow} alt='стрелка' />
            </a>
          </li>
          <li className='aboutme__body-portfolio-item'>
            <a
              className='aboutme__body-portfolio-link hover'
              href='https://github.com/ares909/react-mesto-auth'
              target='_blank'
              rel='noreferrer'
            >
              Одностраничное приложение
            </a>
            <a
              className='aboutme__body-portfolio-link hover'
              href='https://github.com/ares909/react-mesto-auth'
              target='_blank'
              rel='noreferrer'
            >
              <img src={arrow} alt='стрелка' />
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
}

export default AboutMe;
