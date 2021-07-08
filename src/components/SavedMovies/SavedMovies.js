import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';

function SavedMovies({
  onSubmit,
  isValid,
  onChange,
  errors,
  savedMovies,
  addMovies,
  defineListLength,
  listLength,
  durationFilter,
  checked,
  hadleDelete,
  loader,
  movies,
  filtered
}) {
  return (
    <main className='Movies'>
      <SearchForm
        onSubmit={onSubmit}
        onChange={onChange}
        defineListLength={defineListLength}
        listLength={listLength}
        durationFilter={durationFilter}
        checked={checked}
        errors={errors}
        isValid={isValid}
      ></SearchForm>
      <SavedMoviesCardList
        hadleDelete={hadleDelete}
        savedMovies={savedMovies}
        movies={movies}
        addMovies={addMovies}
        listLength={listLength}
        durationFilter={durationFilter}
        checked={checked}
        loader={loader}
        filtered={filtered}
      ></SavedMoviesCardList>
    </main>
  );
}

export default SavedMovies;
