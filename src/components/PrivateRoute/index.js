/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  publicRoute: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default PrivateRoute;
