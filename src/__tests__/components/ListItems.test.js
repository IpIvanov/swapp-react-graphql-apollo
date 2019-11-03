/* eslint global-require: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { ListItems } from '../../components';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Components | ListItems', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing', () => {
    const listItemsMock = [{
      id: 'people.1',
      image: 'image-link.jpeg',
      name: 'Luke Skywalker',
    }, {
      id: 'people.1',
      image: 'image-link.jpeg',
      name: 'Luke Skywalker',
    }];

    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
          <ListItems
            listItems={listItemsMock}
            loadMoreIsVisible
            loadMoreHandler={() => { }}
            linkToUrl="/some-route"
            mdColumns={4}
          />
        </ThemeContext.Provider>
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
