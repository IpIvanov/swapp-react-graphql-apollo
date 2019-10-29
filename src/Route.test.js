import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import App from './Route';

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
    <MockedProvider mocks={mocks} addTypename={false} resolvers={{}}>
      <App />
    </MockedProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
