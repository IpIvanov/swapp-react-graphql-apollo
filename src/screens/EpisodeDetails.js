import React from 'react';
import { useParams } from 'react-router-dom';
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
    flex: 1,
  },
  description: {
    textAlign: 'left',
    marginBottom: 10,
  },
  cover: {
    width: 100,
    height: 120,
  },
  movieCover: {
    width: 300,
    height: 300,
  },
  name: {
    color: '#4BD5EE',
    fontFamily: 'SfDistantGalaxyOutline',
    textTransform: 'none',
    fontSize: 22,
  },
}));

const GET_EPISODE_DETAILS = gql`
  query getEpisodeDetails($id: ID!, $first: Int!) {
    episode(id: $id){
      title
      image
      openingCrawl
      director
      releaseDate
      people(first: $first) {
        edges {
          node {
            image
            name
          }
        }
      }
    }
  }
`;

const Characters = () => {
  const classes = useStyles();
  const { episodeId } = useParams();

  const { loading, data } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: episodeId, first: 5 },
  });

  if (loading) {
    return (<CircularProgress />);
  }

  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.movieCover}
            image={data.episode.image}
            title={data.episode.title}
          />
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" className={classes.name}>
              {data.episode.title}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="p" variant="body1" className={classes.description}>
              {data.episode.openingCrawl}
            </Typography>
            <Typography component="p" variant="body1" align="left">
              Director:
              {' '}
              <span style={{ color: '#4BD5EE' }}>{data.episode.director}</span>
            </Typography>
            <Typography component="p" variant="body1" align="left">
              Release data:
              {' '}
              <span style={{ color: '#4BD5EE' }}>{data.episode.releaseDate}</span>
            </Typography>
          </CardContent>
        </Card>
        <Grid container display="flex" direction="row">
          <Grid container spacing={2}>
            {data.episode.people.edges.map((char) => (
              <Grid item xs={12} md={4} key={char.node.name}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cover}
                    image={char.node.image}
                    title={char.node.name}
                  />
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5" className={classes.name}>
                      {char.node.name}
                    </Typography>
                  </CardContent>
                </Card>
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
