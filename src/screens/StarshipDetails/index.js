import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { Header, DetailsCard, StarshipRadarChart } from '../../components';
import { GET_STARSHIP_DETAILS, GET_ALL_STARSHIPS } from '../../client/queries';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const StarshipDetails = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  const classes = makeStyles(styles)({ theme });
  const { starshipId } = useParams();

  const { loading, data: starshipData } = useQuery(GET_STARSHIP_DETAILS, {
    variables: { id: starshipId },
  });

  const { loading: loadingAll, data: allStarships } = useQuery(GET_ALL_STARSHIPS, {
    variables: { first: 37 },
  });

  if (loading || loadingAll) {
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
  } } = starshipData;
  const { starship: starshipGraphData } = starshipData;
  const { allStarships: { edges: allStarshipsData } } = allStarships;

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
                  value: cost || 0,
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
            <StarshipRadarChart
              starshipData={starshipGraphData}
              allStarshipsData={allStarshipsData}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default StarshipDetails;
