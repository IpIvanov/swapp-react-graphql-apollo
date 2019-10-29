/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, publicRoute, isAuthorized, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isAuthorized ? (<Component {...props} />)
        : (<Redirect to={{ pathname: publicRoute }} />)
    )}
  />
);

export default PrivateRoute;
