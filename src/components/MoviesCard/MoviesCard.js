import image from '../../images/MoviesCard/Movies__card-image.png';
function MoviesCard() {
  return (
    <div className='MoviesCard'>
      <img className='moviesCard__image' src={image} alt='постер' />
      <div className='moviesCard__container'>
        <p className='moviesCard__movie-title'>33 слова о дизайне</p>
        <div className='moviesCard__like-container'>
          <button className='moviesCard__like moviesCard__like_active hover'></button>
        </div>
      </div>
      <p className='moviesCard__duration'>1ч42м</p>
    </div>
  );
}

export default MoviesCard;
