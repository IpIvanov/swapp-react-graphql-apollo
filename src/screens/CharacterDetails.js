import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container, Grid, Typography, Divider, CircularProgress,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Header, ListItems, DetailsCard } from '../components';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 50,
  },
  name: {
    color: '#4BD5EE',
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 36,
  },
  starshipsTitle: {
    fontFamily: 'SfDistantGalaxyOutline',
    fontSize: 36,
    color: '#4E5B6E',
  },
}));

const GET_CHARACTER_DETAILS = gql`
  query getCharacterDetails($id: ID!) {
    person(id: $id) {
      name
      height
      image
      homeworld {
        name
      }
      species {
        name
      }
      starships {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

const CharacterDetails = () => {
  const classes = useStyles();
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
    <div>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h5" variant="h5" className={classes.name}>
          {data.person.name}
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
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
            <Divider style={{ marginBottom: 20 }} />
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
