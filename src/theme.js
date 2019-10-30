
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    commonColors: {
      yellow: '#FFE300',
      lightBlue: '​#4BD5EE',
      black: '​#000',
      white: '#FFF',
    },
    light: {
      backgroundColor: '#E8EAED ',
      textColor: '#4E5B6E ',
      Cards: {
        borderColor: '#E5E9F2',
        backgroundColor: '#FFF',
      },
      SolidButtons: {
        backgroundColor: '#000',
        borderColor: '#E5E9F2',
        fontColor: '#FFE300',
      },
      OutlineButtons: {
        backgroundColor: '#EFF2F7',
        borderColor: '#E5E9F2',
        fontColor: 'inherit',
      },
      Inputs: {
        backgroundColor: '#EFF2F7',
        borderColor: '#E5E9F2',
        fontColor: '#3C4858',
      },
      AppBar: {
        backgroundColor: '#000',
        borderColor: '#333',
        fontColor: '#4BD5EE',
      },
      PrimaryHeading: {
        fontColor: '#4BD5EE',
      },
      Radar: {
        backgroundColor: '#000',
        fontColor: '#4BD5EE',
        grid: '#3C4858',
      },
    },
    dark: {
      backgroundColor: '#000',
      textColor: '#abb1ba',
      Cards: {
        borderColor: '#3C4858',
        backgroundColor: '#333',
      },
      SolidButtons: {
        backgroundColor: '#4BD5EE',
        borderColor: 'none',
        fontColor: '#FFE300',
      },
      OutlineButtons: {
        backgroundColor: '#333',
        borderColor: '#3C4858',
        fontColor: 'inherit',
      },
      Inputs: {
        backgroundColor: '#FFF',
        borderColor: '#3C4858',
        fontColor: '#273444',
      },
      AppBar: {
        backgroundColor: '#333',
        borderColor: '#3C4858',
        fontColor: '#4BD5EE',
      },
      PrimaryHeading: {
        fontColor: '#FFE300',
      },
      Radar: {
        backgroundColor: '#000',
        fontColor: '#FFE300',
        grid: '#333',
      },
    },
  },
});

export default theme;
