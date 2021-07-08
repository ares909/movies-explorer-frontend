class MovieApi {
  constructor(options) {
    this._options = options;
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  getFilms = () => {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      })

      .catch((err) => console.log(err));
  };
}

const movieApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/',
  headers: {
    // authorization: "89fc14f5-c7ca-4e60-97f4-2de7395294ca",
    'Content-Type': 'application/json',
  },
});
export default movieApi;
