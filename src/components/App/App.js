import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
