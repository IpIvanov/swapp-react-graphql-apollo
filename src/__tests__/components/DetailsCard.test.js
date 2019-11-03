/* eslint global-require: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { DetailsCard } from '../../components';

describe('Components | DetailsCard', () => {
  let theme;

  beforeEach(() => {
    theme = require('../../theme');
  });

  it('renders without crashing', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
          <DetailsCard
            title="Test title"
            image="test-image.jpeg"
            details={
              [{
                key: 'test-key',
                value: 'test-value',
              }]
            }
          />
        </ThemeContext.Provider>
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
