// const onError = (res) => {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject('Сервер не доступен');
// };

class Api {
  constructor(options) {
    this._options = options;
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }
  register = (name, email, password) => {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  };

  login = (email, password) => {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res) {
          console.log(res);
          localStorage.setItem('email', res);
          return res;
        }
      })
      .catch((err) => console.log(err));
  };

  logout = () => {
    return fetch(`${this._baseUrl}logout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem('email');
          console.log(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  getUser = () => {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })

      .catch((err) => console.log(err));
  };

  updateUser = (name, email) => {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      });
  };

  createMovie = ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  }) => {
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        nameRU,
        nameEN,
        movieId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };

  getMovies = () => {
    return fetch(`${this._baseUrl}movies`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };

  deleteMovie = (id) => {
    return fetch(`${this._baseUrl}movies/${id}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };
}

const api = new Api({
  baseUrl: 'https://api.domainname.khomyakov.nomoredomains.icu/',
  headers: {
    // authorization: "89fc14f5-c7ca-4e60-97f4-2de7395294ca",
    'Content-Type': 'application/json',
  },
});
export default api;
