/* eslint global-require: 0 */
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from 'enzyme';
import gql from 'graphql-tag';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { CharacterDetails } from '../../screens';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    characterId: 'person.1',
  }),
}));

describe('Screens | CharacterDetails', () => {
  let theme;
  let mocks;

  beforeEach(() => {
    mocks = [
      {
        request: {
          query: gql`
          query getCharacterDetails($id: ID!) {
            person(id: $id) {
              name
              height
              image
              homeworld {
                name
              }
              species {
                name
              }
              starships {
                edges {
                  node {
                    id
                    name
                    image
                  }
                }
              }
            }
          }
          `,
          variables: { id: 'person.1' },
        },
        result: {
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
        },
      },
    ];

    theme = require('../../theme');
  });

  it('renders without crashing', () => {
    const wrapper = render(
      <ThemeProvider theme={theme.default}>
        <MockedProvider mocks={mocks} addTypename={false} resolvers={{}}>
          <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
            <CharacterDetails />
          </ThemeContext.Provider>
        </MockedProvider>
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
