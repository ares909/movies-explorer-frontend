import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className='Movies'>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </main>
  );
}

export default SavedMovies;
