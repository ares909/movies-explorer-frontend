import { useLocation } from 'react-router-dom';
function Footer() {
  const location = useLocation()
  const className = (location.pathname === '/profile' || location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/404') ? 'Footer Footer_disabled' : 'Footer'
  return (
    <section className={className}>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__bar'>
        <p className='footer__bar-text'>© 2021</p>
        <div className='footer__nav-container footer__bar-text'>
          <a
            className='footer__nav-link hover'
            href='https://praktikum.yandex.ru/'
            target='_blank'
            rel='noreferrer'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__nav-link hover'
            href='https://github.com/ares909'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
          <a
            className='footer__nav-link hover'
            href='https://vk.com/areszor'
            target='_blank'
            rel='noreferrer'
          >
            VKontakte
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
