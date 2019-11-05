/* eslint global-require: 0 */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { StarshipDetails } from '../../screens';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    starshipId: 'starship.1',
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
      allStarships: {
        edges: [{
          node: {
            starshipClass: 'light freighter',
            maxAtmosphericSpeed: 1050,
            maxMLPerHour: 75,
            cost: 100000,
            crew: 4,
            hyperdriveRating: 0.5,
          },
        },
        {
          node: {
            starshipClass: 'assault starfighter',
            maxAtmosphericSpeed: 1000,
            maxMLPerHour: 80,
            cost: 134999,
            crew: 2,
            hyperdriveRating: 1,
          },
        }],
      },
      starship: {
        name: 'test-name',
        image: 'test-image.jpg',
        starshipClass: 'light freighter',
        cost: 10000,
        crew: 5,
        hyperdriveRating: 1,
        maxMLPerHour: 30,
        maxAtmosphericSpeed: 9999,
      },
    },
  }),
}));

describe('Screens | StarshipDetails', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing not loading state', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <MockedProvider addTypename={false} resolvers={{}}>
          <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
            <StarshipDetails />
          </ThemeContext.Provider>
        </MockedProvider>
      </ThemeProvider>,
    );

    expect(wrapper.first().html().includes('MuiCircularProgress-circle')).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });
});
