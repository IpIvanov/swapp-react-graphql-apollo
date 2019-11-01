/* eslint global-require: 0 */
import React from 'react';
import { mount } from 'enzyme';
import ThemeContext from '../../contexts/ThemeContext';
import { DetailsCard } from '../../components';

describe('Components | DetailsCard', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
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
      </ThemeContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
