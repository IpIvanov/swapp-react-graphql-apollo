import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import './index.css';
import App from './Route';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
