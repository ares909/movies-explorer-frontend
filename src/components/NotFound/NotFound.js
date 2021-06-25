import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <section className='NotFound'>
      <div className='notFound__container'>
        <h2 className='notFound__title'>404</h2>
        <p className='notFound__text'>Страница не найдена</p>
        <Link to='/' className='notFound__link hover'>
          Назад
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
