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

import { Header, ListItems } from '../components';

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
    fontSize: 36,
    color: '#4E5B6E',
  },
  title: {
    color: '#4BD5EE',
    fontWeight: 700,
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
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Typography component="h5" variant="h5" className={classes.name}>
          {data.person.name}
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card style={{ padding: 20 }}>
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {data.person.name}
              </Typography>
              <CardMedia
                className={classes.cover}
                image={data.person.image}
                title={data.person.name}
              />
              <CardContent style={{ padding: 0, paddingTop: 10 }}>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Height:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{data.person.height}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Weight:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{data.person.weight ? data.person.weight : 'N/A'}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Species:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{data.person.species.name}</span>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                  Home World:
                  {' '}
                  <span style={{ color: '#4BD5EE' }}>{data.person.homeworld.name}</span>
                </Typography>
              </CardContent>
            </Card>
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
