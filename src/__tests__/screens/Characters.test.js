/* eslint global-require: 0 */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { Characters } from '../../screens';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('@apollo/react-hooks', () => ({
  useApolloClient: () => ({
    writeData: jest.fn(),
  }),
  useQuery: () => ({
    loading: false,
    data: {
      allPeople: {
        pageInfo: {
          hasNextPage: false,
        },
        edges: [{
          node: {
            id: 'test-id',
            name: 'test-name',
            image: 'test-image.jpg',
          },
        }],
      },
    },
  }),
}));

describe('Screens | Characters', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing not loading state', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <MockedProvider addTypename={false} resolvers={{}}>
          <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
            <Characters />
          </ThemeContext.Provider>
        </MockedProvider>
      </ThemeProvider>,
    );

    expect(wrapper.first().html().includes('MuiCircularProgress-circle')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
