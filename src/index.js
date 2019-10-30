import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import './fonts/fonts.css';
import AppRouter from './router/Route';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
