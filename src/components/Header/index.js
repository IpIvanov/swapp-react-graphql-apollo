import React, { useContext } from 'react';
import { useHistory, withRouter, NavLink } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Input } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
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


  return (
    <div className={`${classes.container}`}>
      <Typography
        className={classes.linkHome}
        onClick={() => {
          const themeStorage = localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
          setTheme(themeStorage);
          localStorage.setItem('theme', themeStorage);
        }}
      >
        SWAPP
      </Typography>
      <div className={classes.rightHeader}>
        <NavLink
          to="/episodes"
          className={classes.link}
          underline="none"
        >
          Episodes
        </NavLink>
        <NavLink
          to="/characters"
          className={classes.link}
          underline="none"
        >
          Characters
        </NavLink>
        <div className={classes.exit}>
          <Input
            onClick={() => {
              client.writeData({ data: { authenticated: false } });
              history.push('/');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
