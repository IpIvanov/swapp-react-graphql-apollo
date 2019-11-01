/* eslint global-require: 0 */
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeContext from '../../contexts/ThemeContext';
import { Header } from '../../components';

// const mountWithTheme = (children) => mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
// const renderWithTheme = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
// const shallowWithTheme = (children) => shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('@apollo/react-hooks', () => ({
  useApolloClient: () => () => ({
    writeData: jest.fn(),
  }),
}));

describe('Components | Header', () => {
  let theme;

  beforeEach(() => {
    jest.spyOn({ preventDefault: () => { } }, 'preventDefault');
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;

    theme = require('../../theme');
  });

  it('renders without crashing', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme.default}>
        <ThemeContext.Provider value={{ theme: 'dark', setTheme: () => { } }}>
          <Header />
        </ThemeContext.Provider>
      </ThemeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
