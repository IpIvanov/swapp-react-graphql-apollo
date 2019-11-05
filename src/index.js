import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import './fonts/fonts.css';
import AppRouter from './router';
import theme from './theme';
import './index.scss';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
