import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import isAuthenticated from '../lib/isAuthenticated';

const UnauthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default UnauthRoute;
