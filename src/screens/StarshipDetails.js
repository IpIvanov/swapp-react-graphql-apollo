import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Header } from '../components';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 50,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  description: {
    textAlign: 'left',
    marginBottom: 10,
    padding: 0,
  },
  cover: {
    width: '100%',
    height: 420,
  },
  starshipCover: {
    width: 120,
  },
  movieCover: {
    width: 300,
    height: 300,
  },
  name: {
    color: '#4BD5EE',
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 36,
  },
  starshipName: {
    color: '#4BD5EE',
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 24,
  },
  starshipsTitle: {
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 24,
    color: '#4E5B6E',
  },
  title: {
    color: '#4BD5EE',
    fontWeight: 700,
  },
}));

const GET_STARSHIP_DETAILS = gql`
  query getStarshipDetails($id: ID!) {
    starship(id: $id) {
      name
      image
      starshipClass
      cost
      crew
      maxAtmosphericSpeed
      hyperdriveRating
    }
  }
`;

const StarshipDetails = () => {
  const classes = useStyles();
  const { starshipId } = useParams();

  const { loading, data } = useQuery(GET_STARSHIP_DETAILS, {
    variables: { id: starshipId },
  });

  if (loading) {
    return (<CircularProgress />);
  }

  const { starship: {
    name,
    image,
    starshipClass,
    cost,
    crew,
    maxAtmosphericSpeed,
    hyperdriveRating,
  } } = data;


  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h5" variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card style={{ padding: 20 }}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {name}
              </Typography>
              <CardMedia
                className={classes.cover}
                image={image}
                title={name}
              />
              <CardContent style={{ padding: 0, paddingTop: 10 }}>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Class:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{starshipClass}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Cost:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{cost}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Crew:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{crew}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Max Atmospheric Speed:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{maxAtmosphericSpeed}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Hyperdrive Rating:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{hyperdriveRating}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography component="h5" variant="h5" className={classes.starshipsTitle}>
              Compared to Starship Class Max
            </Typography>
            <Divider style={{ marginBottom: 20 }} />
            <Typography>Graph here</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default StarshipDetails;
