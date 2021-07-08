import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
function NotFound() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className='NotFound'>
      <div className='notFound__container'>
        <h2 className='notFound__title'>404</h2>
        <p className='notFound__text'>Страница не найдена</p>
        <Link onClick={goBack} className='notFound__link hover'>
          Назад
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
