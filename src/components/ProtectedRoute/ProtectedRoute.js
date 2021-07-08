// import { Children } from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn }) {
  return (
    <Route
      loggedIn={loggedIn}
      render={() => {
        return loggedIn ? children : <Redirect to='/' />;
      }}
    />
  );
}

export default ProtectedRoute;
