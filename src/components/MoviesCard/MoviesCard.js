import { useLocation } from 'react-router';
function MoviesCard({ card, handleLike, savedCard, hadleDelete, like }) {
  const location = useLocation();
  const duration = `${Math.round(card.duration / 60)}ч ${card.duration % 60}м`;
  // const like = 'card.some((item) => item.id === card.id;'
  const likeClass = `moviesCard__like hover ${
    like ? 'moviesCard__like_active' : ''
  }`;
  function handleLikeClick() {
    console.log(handleLike(card));
    console.log(savedCard);
  }

  function hadleDeleteClick() {
    hadleDelete(card);
  }

  if (location.pathname === '/movies') {
    return (
      <div className='MoviesCard'>
        <a
          href={card.trailerLink}
          className='moviesCard__trailer'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='moviesCard__image'
            src={`https://api.nomoreparties.co${card.image.url}`}
            alt='постер'
          />
        </a>
        <div className='moviesCard__container'>
          <p className='moviesCard__movie-title'>{card.nameRU}</p>
          <div className='moviesCard__like-container'>
            <button className={likeClass} onClick={handleLikeClick}></button>
          </div>
        </div>
        <p className='moviesCard__duration'>{duration}</p>
      </div>
    );
  } else if (location.pathname === '/saved-movies') {
    return (
      <div className='MoviesCard'>
        <a
          href={card.trailer}
          className='moviesCard__trailer'
          target='_blank'
          rel='noreferrer'
        >
          <img className='moviesCard__image' src={card.image} alt='постер' />
        </a>
        <div className='moviesCard__container'>
          <p className='moviesCard__movie-title'>{card.nameRU}</p>
          <div className='moviesCard__like-container'>
            <button
              className='moviesCard__cross hover'
              onClick={hadleDeleteClick}
            ></button>
          </div>
        </div>
        <p className='moviesCard__duration'>{duration}</p>
      </div>
    );
  }
}

export default MoviesCard;
