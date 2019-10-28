import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import ReactDOM from 'react-dom';
import App from './Route';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider>
      <App />
    </MockedProvider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
