import image from '../../images/SearchForm/SearchForm__search-image.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Error from '../Error/Error'
function SearchForm({
  onSubmit,
  onChange,
  durationFilter,
  checked,
  errors,
  isValid,
}) {
  return (
    <section className='SearchForm'>
      <form className='searchForm__box' onSubmit={onSubmit} isValid={isValid} noValidate>
        <div className='searchForm__container'>
          <input
            required
            className='searchForm__input'
            type='text'
            placeholder='Фильм'
            name='search'
            onChange={onChange}
          ></input>
          
          {/* <p>{errors}</p> */}
          <button className='searchForm__search-button hover'>
            <img className='searchForm__search-image' src={image} alt='поиск' />
          </button>
          <Error message={errors.search} isValid={isValid}></Error>
        </div>
        <div className='searchForm__checkbox-container'>
          <FilterCheckbox
            durationFilter={durationFilter}
            checked={checked}
          ></FilterCheckbox>
          <p className='searchForm__checkbox-text'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
