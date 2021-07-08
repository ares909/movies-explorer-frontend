import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function SavedMoviesCardList({
  savedMovies,
  hadleDelete,
  loader,
  movies,
  filtered,
}) {
  const className = `moviesCardList__message ${
    savedMovies.length === 0 ? 'moviesCardList__message_active' : ''
  }`;
  return (
    <>
      <section className='MoviesCardList'>
        <Preloader loader={loader}></Preloader>

        {filtered
          ? movies.map((item) => (
              <MoviesCard
                key={item._id}
                card={item}
                hadleDelete={hadleDelete}
              />
            ))
          : savedMovies.map((item) => (
              <MoviesCard
                key={item._id}
                card={item}
                hadleDelete={hadleDelete}
              />
            ))}
        <p className={className}>Ничего не найдено</p>
      </section>
      <div className='moviesCardList__button-container'></div>
    </>
  );
}

export default SavedMoviesCardList;
