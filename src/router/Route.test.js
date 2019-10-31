import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { ThemeProvider } from '@material-ui/core/styles';
import AppRouter from './index';
import theme from '../theme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mocks = [
    {
      request: {
        query: gql`
        query AuthQuery {
          authenticated @client
        }
      `,
        variables: {},
      },
      result: {
        data: {
          authenticated: true,
        },
      },
    },
  ];

  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <MockedProvider mocks={mocks} addTypename={false} resolvers={{}}>
        <AppRouter />
      </MockedProvider>
    </ThemeProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
