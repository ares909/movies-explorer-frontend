import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import movieApi from '../Api/MovieApi';

import api from '../Api/MainApi';

// import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [errorVisible, setErrorVisible] = useState(false);
  const [serverError, setServerError] = useState('');
  const [localData, setLocalData] = useState([]);
  // const [localFiltered, setLocalFiltered] = useState([])
  const [data, setData] = useState([]); //данные фильмов, которые будем отрисовывать
  const [savedMovies, setSavedMovies] = useState([]); //данные сохраненных фильмов
  const [movies, setMovies] = useState([]); //данные сохраненных фильмов, которые будем отрисовывать
  const [moviesNumber, setMoviesNumber] = useState(0); // данные для отображения количества карточке на странице
  const [listLength, setListLength] = useState(0);
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const [filtered, setFiltered] = useState(false)
 
  // Проверяем наличие токен, получаем данные юзера и записываем в контекст
  useEffect(() => {
    handleTokenCheck();
  }, []);

  //Загружаем фильмы и сохраняем на локале
  useEffect(() => {
    movieApi
      .getFilms()
      .then((res) => {
        localStorage.setItem('data', JSON.stringify(res));
        const allMovies = JSON.parse(localStorage.getItem('data'));
        setLocalData(allMovies);
      })
      .catch((err) => console.log(err));
  }, []);

  //Отрисуем историю фильтрованных данных
  useEffect(() => {
    const filteredMovies = JSON.parse(localStorage.getItem('filtered'));
    if (filteredMovies) {
      setData(filteredMovies);
    } else {
      setData([]);
    }
  }, []);

  //получим массив сохраненных фильмов

  useEffect(() => {
    getMovies();
  }, []);

  //вешаем слушатель изменения размеров окна

  useEffect(() => {
    defineListLength();
    window.addEventListener('resize', defineListLength);
    window.addEventListener('hashchange', resetForm);
    return () => {
      window.removeEventListener('resize', defineListLength);
      window.removeEventListener('hashchange', resetForm);
    };
  }, [moviesNumber]);

  //По кнопке поиск фильтруем фильмы из локала и отрисовываем

  function handleSearch(e) {
    if (isValid === true) {
      setLoader(true);
      e.preventDefault();
      setTimeout(() => {
        defineListLength();
        const filteredSearch = localData.filter((item) => {
          // console.log(item.nameEN)
          const search = values.search.toLowerCase();
          const nameEN = item.nameEN;
          const nameRU = item.nameRU.toLowerCase();
          return (nameEN &&
            nameEN !== null &&
            nameEN.toLowerCase().includes(search)) ||
            (nameRU && nameRU !== null && nameRU.toLowerCase().includes(search))
            ? item
            : console.log('ничего не найдено');
          // return (item.nameEN.toLowerCase().includes(value.search.toLowerCase()) && item.nameEN != null)
        });

        //сохраняем результат на локал, чтобы в дальнейшем его отрисовывать, если пользователь вышел со страницы
        localStorage.setItem('filtered', JSON.stringify(filteredSearch));

        //Отрисовываем данные текущего поиска
        setData(filteredSearch);
        setLoader(false);
      }, 1000);
    } else {
      setErrors({ search: 'Введите ключевое слово' });
    }
  }

  function handleSavedSearch(e) {
    if (isValid === true) {
      setLoader(true);
      setFiltered(true)
      e.preventDefault();
      setTimeout(() => {
        defineListLength();
        const filteredSearch = savedMovies && savedMovies.filter((item) => {
          // console.log(item.nameEN)
          const search = values.search.toLowerCase();
          const nameEN = item.nameEN;
          const nameRU = item.nameRU.toLowerCase();
          return (nameEN &&
            nameEN !== null &&
            nameEN.toLowerCase().includes(search)) ||
            (nameRU && nameRU !== null && nameRU.toLowerCase().includes(search))
            ? item
            : console.log('No data');
          // return (item.nameEN.toLowerCase().includes(value.search.toLowerCase()) && item.nameEN != null)
        });

        //сохраняем результат на локал, чтобы в дальнейшем его отрисовывать, если пользователь вышел со страницы
        localStorage.setItem('savedFilter', JSON.stringify(filteredSearch));

        //Отрисовываем данные текущего поиска
        setMovies(filteredSearch);
        setLoader(false);
      }, 1000);
    } else {
      setErrors({ search: 'Введите ключевое слово' });
    }
  }

  //переключатель на короткометражки

  const durationFilter = () => {
    if (!checked) {
      const shorts = data.filter((item) => item.duration <= 40);
      setChecked(true);
      setData(shorts);
    } else {
      setChecked(false);
      //отрисовываем обратно то, что записали в локал при фильтре
      const prevState = JSON.parse(localStorage.getItem('filtered'));
      setData(prevState);
    }
  };

  const savedDurationFilter = () => {
    if (!checked) {
      const shorts = filtered ? movies.filter((item) => item.duration <= 40) : savedMovies.filter((item) => item.duration <= 40);
      setChecked(true);
      setMovies(shorts);
      
    } else {
      setChecked(false);
      //отрисовываем обратно то, что записали в локал при фильтре
      const filtered = JSON.parse(localStorage.getItem('savedFilter'));
      setMovies(filtered);
      // getMovies();
    }
  };



  // ставим лайк фильму и сохраняем его
  const handleLike = (movie) => {
    const like = savedMovies.some((i) =>
      i.movieId === movie.id ? true : false
    );
    // if (like) {
    if (!like) {
      api
        .createMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailer: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
          movieId: movie.id,
        })
        .then(() => {
          getMovies();
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      savedMovies.some((i) =>
        i.movieId === movie.id
          ? api
              .deleteMovie(i._id)
              .then(() => {
                getMovies();
              })
              .catch((err) => {
                console.log(err);
              })
          : ''
      );
    }
  };

  const handleTokenCheck = () => {
    if (loggedIn) {
      history.push(location);
    } else {
      api
        .getUser()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push(location);
          }
        })
        .catch((err) => {
          console.log(err);
          history.push('/signin');
        });
    }
  };

  const logout = () => {
    api
      .logout()
      .then(() => {
        setLoggedIn(false);
        handleTokenCheck();
        localStorage.clear('filtered');
        localStorage.clear('data');
        // history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hadleOpenMenu = () => {
    setIsOpened(true);
  };
  const hadleCloseMenu = () => {
    setIsOpened(false);
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleError = (message) => {
    setErrorVisible(true);
    setServerError(message);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const handleLogin = (e) => {
    e.preventDefault();
    if (isValid === true) {
      api
        .login(values.email, values.password)
        .then((res) => {
          if (res.email) {
            setLoggedIn(true);
            history.push('/movies');
          } else {
            handleError(res.message);
          }
        })
        .catch((err) => handleError(err));
    } else {
      setIsValid(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isValid === true) {
      api
        .register(values.name, values.email, values.password)
        .then((res) => {
          if (res.email) {
            setLoggedIn(true);
            history.push('/movies');
          } else {
            handleError(res.message);
          }
        })
        .catch((err) => handleError(err));
    } else {
      setIsValid(false);
    }
  };

  const handleChangeUser = (e) => {
    e.preventDefault();
    if (isValid === true) {
      api.updateUser(values.name, values.email).then((res) => {
        if (!res.message) {
          setValues({ name: res.name, email: res.email });
        } else {
          handleError(res.message);
        }
      });
    } else {
      setIsValid(false);
    }
  };

  const getMovies = () => {
    api
      .getMovies()
      .then((res) => {
        localStorage.setItem('saved', JSON.stringify(res));
        const savedMovies = JSON.parse(localStorage.getItem('saved'));
        setSavedMovies(savedMovies);
      })

      .catch((err) => console.log(err));
  };

  //определим сколько карточек долнжо отрисовываться за раз

  const defineListLength = () => {
    const screenWith = window.screen.availWidth;
    if (screenWith >= 1280) {
      setMoviesNumber(4);
      setListLength(12);
    } else if (screenWith >= 768 && screenWith <= 1279) {
      setMoviesNumber(2);
      setListLength(8);
    } else if (screenWith <= 320 && screenWith <= 480) {
      setMoviesNumber(2);
      setListLength(5);
    }
  };

  //кнопка "Еще"
  const addMovies = () => {
    setListLength(listLength + moviesNumber);
    console.log(listLength + moviesNumber);
  };



  const hadleDelete = (card) => {
    api
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((c) => (c._id === card._id ? '' : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <HeaderMenu
          isOpened={isOpened}
          hadleCloseMenu={hadleCloseMenu}
          loggedIn={loggedIn}
        ></HeaderMenu>
        <Header hadleOpenMenu={hadleOpenMenu} loggedIn={loggedIn}></Header>
        <Switch>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <ProtectedRoute loggedIn={loggedIn} exact path='/movies'>
            <Movies
              onSubmit={handleSearch}
              isValid={isValid}
              data={data}
              onChange={handleChange}
              errors={errors}
              handleLike={handleLike}
              savedMovies={savedMovies}
              addMovies={addMovies}
              defineListLength={defineListLength}
              listLength={listLength}
              durationFilter={durationFilter}
              checked={checked}
              loader={loader}
            ></Movies>
          </ProtectedRoute>
          <ProtectedRoute loggedIn={loggedIn} exact path='/saved-movies'>
            <SavedMovies
              onSubmit={handleSavedSearch}
              isValid={isValid}
              movies={movies}
              onChange={handleChange}
              errors={errors}
              savedMovies={savedMovies}
              addMovies={addMovies}
              hadleDelete={hadleDelete}
              defineListLength={defineListLength}
              listLength={listLength}
              durationFilter={savedDurationFilter}
              checked={checked}
              loader={loader}
              filtered={filtered}
            ></SavedMovies>
          </ProtectedRoute>
          <ProtectedRoute loggedIn={loggedIn} exact path='/profile'>
            <Profile
              onChange={handleChange}
              onSubmit={handleChangeUser}
              onLogout={logout}
              errors={errors}
              serverError={serverError}
              isValid={isValid}
            ></Profile>
          </ProtectedRoute>
          <Route exact path='/signup'>
            <Register
              handleChange={handleChange}
              handleSubmit={handleRegister}
              errors={errors}
              isValid={isValid}
              serverError={serverError}
              errorVisible={errorVisible}
            ></Register>
          </Route>
          <Route exact path='/signin'>
            <Login
              handleChange={handleChange}
              handleSubmit={handleLogin}
              errors={errors}
              isValid={isValid}
              serverError={serverError}
              errorVisible={errorVisible}
            ></Login>
          </Route>
          <Route exact path='/404'>
            <NotFound></NotFound>
          </Route>
          <Route path='*'>
            <Redirect to='/404' />
          </Route>
        </Switch>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
