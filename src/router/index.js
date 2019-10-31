import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ThemeContext from '../contexts/ThemeContext';
import { Login, Characters, CharacterDetails, Episodes, EpisodeDetails, StarshipDetails } from '../screens';
import { PrivateRoute } from '../components';
import { useIsAuthorized } from '../utils/useIsAuthorized';
import styles from './styles';

const AppRouter = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const classes = makeStyles(styles)({ theme: theme === 'light' ? 'light' : 'dark' });
  const isAuthorized = useIsAuthorized();

  return (
    <div className={`${classes.container}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/episodes" component={Episodes} publicRoute="/login" isAuthorized={isAuthorized} />
            <PrivateRoute exact path="/episodes/:episodeId" component={EpisodeDetails} publicRoute="/login" isAuthorized={isAuthorized} />
            <PrivateRoute exact path="/characters" component={Characters} publicRoute="/login" isAuthorized={isAuthorized} />
            <PrivateRoute exact path="/characters/:characterId" component={CharacterDetails} publicRoute="/login" isAuthorized={isAuthorized} />
            <PrivateRoute exact path="/starships/:starshipId" component={StarshipDetails} publicRoute="/login" isAuthorized={isAuthorized} />
            <Route exact render={() => <Redirect to="/episodes" />} />
          </Switch>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
};

export default AppRouter;
