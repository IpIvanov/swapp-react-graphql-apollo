/* eslint global-require: 0 */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { CharacterDetails } from '../../screens';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    characterId: 'person.1',
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
      person: {
        height: 172,
        homeworld: { name: 'Tatooine' },
        image: 'test-image.jpg',
        name: 'Luke Skywalker',
        species: { name: 'Human' },
        starships: {
          edges: [{
            node: {
              id: 'starships.12',
              image: 'starship-image.jpg',
              name: 'X-wing',
            },
          }],
        },
      },
    },
  }),
}));

describe('Screens | CharacterDetails', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing not loading state', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <MockedProvider mocks={[]} addTypename={false} resolvers={{}}>
          <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
            <CharacterDetails />
          </ThemeContext.Provider>
        </MockedProvider>
      </ThemeProvider>,
    );

    expect(wrapper.first().html().includes('MuiCircularProgress-circle')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
