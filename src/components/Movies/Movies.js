import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movieApi from '../Api/MovieApi';
import api from '../Api/MainApi';
import { useState, useEffect, useCallback } from 'react';

function Movies({ onSubmit, isValid, data, onChange, errors, handleLike, savedMovies, addMovies, defineListLength, listLength, durationFilter, checked, loader, notFound }) {


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
      <MoviesCardList
        data={data}
        addMovies={addMovies}
        listLength={listLength}
        handleLike={handleLike}
        savedMovies={savedMovies}
        durationFilter={durationFilter}
        checked={checked}
        loader={loader}
        
        // array={array}
      ></MoviesCardList>
    </main>
  );
}

export default Movies;
