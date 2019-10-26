import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Input } from '@material-ui/icons';
import styles from './styles';
import { makeStyles } from '@material-ui/core';

const Header = () => {
  const currentStyles = {
    ...styles,
  };
  const useStyles = makeStyles(currentStyles);
  const classes = useStyles();

  return (
    <div className={`${classes.container}`}>
      <NavLink
        to="/"
        className={classes.linkHome}
        underline="none"
      >
        SWAPP
      </NavLink>
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
            onClick={() => { }}
          />
        </div>
      </div>
    </div >
  );
};
export default withRouter(Header);
