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
import { Redirect, Route, Switch } from 'react-router-dom';

// import './App.css';

function App() {
  return (
    <div className='App'>
      <HeaderMenu></HeaderMenu>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route exact path='/movies'>
          <Movies></Movies>
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies></SavedMovies>
        </Route>
        <Route exact path='/profile'>
          <Profile></Profile>
        </Route>
        <Route exact path='/signup'>
          <Register></Register>
        </Route>
        <Route exact path='/signin'>
          <Login></Login>
        </Route>
        <Route exact path='/404'>
          <NotFound></NotFound>
        </Route>
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
