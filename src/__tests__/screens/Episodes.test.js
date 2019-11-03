/* eslint global-require: 0 */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { Episodes } from '../../screens';

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
      allEpisodes: {
        edges: [{
          node: {
            id: 'test-id',
            openingCrawl: 'test-openingCrawl',
            image: 'test-image.jpg',
            title: 'test-title',
          },
        }],
      },
    },
  }),
}));

describe('Screens | Episodes', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing not loading state', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <MockedProvider addTypename={false} resolvers={{}}>
          <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
            <Episodes />
          </ThemeContext.Provider>
        </MockedProvider>
      </ThemeProvider>,
    );

    expect(wrapper.first().html().includes('MuiCircularProgress-circle')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
