import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Header, DetailsCard } from '../components';

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
    <div>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h5" variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DetailsCard
              title={name}
              image={image}
              details={[
                {
                  key: 'Class',
                  value: starshipClass,
                },
                {
                  key: 'Cost',
                  value: cost,
                },
                {
                  key: 'Crew',
                  value: crew,
                },
                {
                  key: 'Max Atmospheric Speed',
                  value: maxAtmosphericSpeed,
                },
                {
                  key: 'Hyperdrive Rating',
                  value: hyperdriveRating,
                },
              ]}
            />
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
