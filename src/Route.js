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

  return (
    <div className="App" classes={classes.container}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/episodes/:episodeId" component={EpisodeDetails} />
          <Route exact path="/characters" component={Characters} />
          <Route
            exact
            path="/characters/:characterId"
            component={CharacterDetails}
          />
          <Route exact path="/starships/:starshipId" component={StarshipDetails} />
          <Route exact render={() => <Redirect to="/login" />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
