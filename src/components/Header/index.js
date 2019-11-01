import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Input } from '@material-ui/icons';
import { makeStyles, Typography, Link } from '@material-ui/core';
import styles from './styles';
import ThemeContext from '../../contexts/ThemeContext';

const Header = () => {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);
  const useStyles = makeStyles(styles);
  const classes = useStyles({ theme });
  const history = useHistory();
  const client = useApolloClient();

  const linkTo = (e, route) => {
    e.preventDefault();
    history.push(route);
  };

  const logOut = () => {
    client.writeData({ data: { authenticated: false } });
    history.push('/');
  };

  const toggleTheme = () => {
    const themeStorage = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    setTheme(themeStorage);
    localStorage.setItem('theme', themeStorage);
  };

  return (
    <div className={`${classes.container}`}>
      <Typography
        className={classes.linkHome}
        onClick={toggleTheme}
      >
        SWAPP
      </Typography>
      <div className={classes.rightHeader}>
        <Link
          href="/"
          className={classes.link}
          underline="none"
          onClick={(e) => {
            linkTo(e, '/episodes');
          }}
        >
          Episodes
        </Link>
        <Link
          href="/"
          className={classes.link}
          underline="none"
          onClick={(e) => {
            linkTo(e, '/characters');
          }}
        >
          Characters
        </Link>
        <div className={classes.exit}>
          <Input
            onClick={logOut}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
