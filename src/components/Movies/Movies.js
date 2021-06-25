import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className='Movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  );
}

export default Movies;
