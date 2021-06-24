import image from '../../images/SearchForm/SearchForm__search-image.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm() {
  return (
    <section className='SearchForm'>
      <div className='searchForm__box'>
        <div className='searchForm__container'>
          <input
            className='searchForm__input'
            type='text'
            placeholder='Фильм'
          ></input>
          <button className='searchForm__search-button hover'>
            <img className='searchForm__search-image' src={image} alt='поиск' />
          </button>
        </div>
        <div className='searchForm__checkbox-container'>
        <FilterCheckbox></FilterCheckbox>
        <p className='searchForm__checkbox-text'>Короткометражки</p>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
