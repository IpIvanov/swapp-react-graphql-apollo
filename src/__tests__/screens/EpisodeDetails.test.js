/* eslint global-require: 0 */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { EpisodeDetails } from '../../screens';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    characterId: 'episode.1',
  }),
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
      episode: {
        title: 'Test title',
        image: 'test.jpg',
        openingCrawl: 'Opening crawl...',
        director: 'Test Director',
        releaseDate: '1983-05-25',
        people: {
          pageInfo:
          {
            hasNextPage: false,
          },
          edges: [
            {
              cursor: 'Y3Vyc29yLnBlb3BsZS4x',
              node: {
                id: 'people.1',
                name: 'Luke Skywalker',
                image: 'test-image.jpg',
              },
            }],
        },
      },
    },
  }),
}));

describe('Screens | Episode', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing not loading state', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <MockedProvider addTypename={false} resolvers={{}}>
          <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
            <EpisodeDetails />
          </ThemeContext.Provider>
        </MockedProvider>
      </ThemeProvider>,
    );

    expect(wrapper.first().html().includes('MuiCircularProgress-circle')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
