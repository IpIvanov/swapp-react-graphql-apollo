import React from 'react';
import { useHistory, withRouter, NavLink } from 'react-router-dom';
import { Input } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import styles from './styles';

const Header = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={`${classes.container}`}>
      <Typography
        className={classes.linkHome}
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
            onClick={() => { history.push('/'); }}
          />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
