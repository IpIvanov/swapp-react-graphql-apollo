import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Grid, Typography, Divider, CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { Header, ListItems, DetailsCard } from '../../components';
import { GET_CHARACTER_DETAILS } from '../../client/queries';
import styles from './styles';

const CharacterDetails = () => {
  const classes = makeStyles(styles)();
  const { characterId } = useParams();

  const { loading, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id: characterId },
  });

  if (loading) {
    return (<CircularProgress />);
  }

  const allStarships = data.person.starships.edges.map(({ node: { id, name, image } }) => ({
    id,
    name,
    image,
  }));

  return (
    <div className={classes.wrapper}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h5" variant="h5" className={classes.name}>
          {data.person.name}
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DetailsCard
              title={data.person.name}
              image={data.person.image}
              details={[
                {
                  key: 'Height',
                  value: data.person.height,
                },
                {
                  key: 'Weight',
                  value: data.person.weight,
                },
                {
                  key: 'Species',
                  value: data.person.species.name,
                },
                {
                  key: 'Home World',
                  value: data.person.homeworld.name,
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography component="h5" variant="h5" className={classes.starshipsTitle}>
              Piloted Starships
            </Typography>
            <Divider className={classes.divider} />
            <ListItems
              listItems={allStarships}
              loadMoreIsVisible={false}
              linkTo="starships"
              mdColumns={12}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CharacterDetails;
