import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { Header, DetailsCard } from '../../components';
import { GET_STARSHIP_DETAILS } from '../../client/queries';
import styles from './styles';

const StarshipDetails = () => {
  const classes = makeStyles(styles)();
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
    <div className={classes.wrapper}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h5" variant="h5" className={classes.name}>
          {name}
        </Typography>
        <Divider className={classes.divider} />
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
            <Divider className={classes.divider} />
            <Typography>Graph here</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default StarshipDetails;
