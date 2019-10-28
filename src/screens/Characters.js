import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
  },
  cover: {
    width: 100,
    height: 120,
  },
  name: {
    color: '#4BD5EE',
    fontFamily: 'SfDistantGalaxyOutline',
    textTransform: 'none',
    fontSize: 22,
  },
}));

const GET_CHARACTERS = gql`
  query getCharacters($first: Int!) {
    allPeople(first: $first) {
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

const Characters = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { first: 12 },
  });

  if (loading) {
    return (<CircularProgress />);
  }
  const allCharacters = data.allPeople.edges.map(({ node: { id, name, image } }) => ({
    id,
    name,
    image,
  }));

  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Grid container display="flex" direction="row">
          <Grid container spacing={2}>
            {allCharacters.map((character) => (
              <Grid item xs={12} md={4} key={character.name}>
                <Link to={`/characters/${character.id}`} style={{ textDecoration: 'none' }}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image={character.image}
                      title={character.name}
                    />
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5" className={classes.name}>
                        {character.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="center" alignItems="center" flex="1">
            <Button
              color="primary"
              variant="outlined"
              size="small"
              style={{
                textTransform: 'none',
                background: '#000',
                color: '#FFE300',
                fontSize: 20,
                fontWeight: 900,
              }}
            >
              Load More
            </Button>
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default Characters;
