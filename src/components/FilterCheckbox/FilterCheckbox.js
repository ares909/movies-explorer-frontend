function FilterCheckbox() {
  return (
    <div className='FilterCheckbox'>
    <label className='filterCheckbox__switch'>
      <input type='checkbox' />
      <span className='filterCheckbox__slider round'></span>
    </label>
    </div>
  );
}

export default FilterCheckbox;
