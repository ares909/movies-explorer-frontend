import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import { useLocation } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

function MoviesCardList({
  data,
  errors,
  listLength,
  handleLike,
  savedMovies,
  addMovies,
  loader,
  

}) {
  const location = useLocation();

  const buttonClass = `moviesCardList__button hover ${
    listLength >= data.length ? 'moviesCardList__button_disabled' : ''
  }`;

  const className = `moviesCardList__message ${data.length === 0 ? 'moviesCardList__message_active': ''}`

  if (location.pathname === '/movies') {
    return (
      <>
        <section className='MoviesCardList'>
          <Preloader loader={loader}></Preloader>
          {data
            .map((item) => (
              <MoviesCard
                key={item.id}
                card={item}
                like={savedMovies.some((i) =>
                  i.movieId === item.id ? true : false
                )}
                handleLike={handleLike}
              />
            ))
            .slice(0, listLength)}
            <p className={className}>Ничего не найдено</p>

        </section>
        <div className='moviesCardList__button-container'>
          <button className={buttonClass} onClick={addMovies}>
            Еще
          </button>
        </div>
        {/* onClick={addMovies}  */}
      </>
    );
  } else if (location.pathname === '/saved-movies') {
    return (
      <>
        <section className='MoviesCardList'>
          {/* {movies.map((item) => (
            <MoviesCard
              key={item.id}
              card={item}
              // like={like}
              // handleLike={handleLike}
            />
          ))} */}
        </section>
        <div className='moviesCardList__button-container'></div>
      </>
    );
  }
}

export default MoviesCardList;
