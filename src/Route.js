import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Login, Characters, CharacterDetails, Episodes, EpisodeDetails, StarshipDetails } from './screens';
import { PrivateRoute } from './components';
import { useIsAuthorized } from './utils/useIsAuthorized';

const appStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
  },
  app: {
    backgroundColor: '#000',
  },
};

const App = () => {
  const useStyles = makeStyles(appStyles);
  const classes = useStyles();
  const isAuthorized = useIsAuthorized();

  return (
    <div className="App" classes={classes.container}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/episodes" />} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/episodes" component={Episodes} publicRoute="/login" isAuthorized={isAuthorized} />
          <PrivateRoute exact path="/episodes/:episodeId" component={EpisodeDetails} publicRoute="/login" isAuthorized={isAuthorized} />
          <PrivateRoute exact path="/characters" component={Characters} publicRoute="/login" isAuthorized={isAuthorized} />
          <PrivateRoute exact path="/characters/:characterId" component={CharacterDetails} publicRoute="/login" isAuthorized={isAuthorized} />
          <PrivateRoute exact path="/starships/:starshipId" component={StarshipDetails} publicRoute="/login" isAuthorized={isAuthorized} />
          <Route exact render={() => <Redirect to="/episodes" />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
