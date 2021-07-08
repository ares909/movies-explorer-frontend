function FilterCheckbox({ durationFilter, checked }) {
  return (
    <div className='FilterCheckbox'>
      <label className='filterCheckbox__switch'>
        <input type='checkbox' onChange={durationFilter} checked={checked}/>
        <span className='filterCheckbox__slider round'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
