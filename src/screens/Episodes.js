import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Header } from '../components';

const useStyles = makeStyles({
  container: {
    marginTop: 50,
  },
  title: {
    textAlign: 'left',
    color: '#4BD5EE',
    fontFamily: 'SfDistantGalaxyOutline',
    textTransform: 'none',
    fontSize: 22,
  },
  description: {
    overFlow: 'hidden',
    textAlign: 'left',
  },
  card: {
    maxHeight: 400,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
});

const GET_EPISODES = gql`
  query getEpisodes($first: Int!) {
    allEpisodes(first: $first) {
      edges{
        node{
          id
          image
          title
          openingCrawl
        }
      }
    }
  }
`;

const Episodes = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_EPISODES, {
    variables: { first: 10 },
  });

  if (loading) {
    return (<CircularProgress />);
  }

  const episodes = data.allEpisodes.edges.map(({ node: { title, openingCrawl, image, id } }) => ({
    id,
    title,
    openingCrawl,
    image,
  }));

  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Grid container display="flex" direction="column">
          <Grid container spacing={10}>
            {episodes.map((episode) => (
              <Grid item xs={12} sm={6} md={4} key={episode.id}>
                <Link to={`/episodes/${episode.id}`} style={{ textDecoration: 'none' }}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={episode.image}
                      title={episode.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {episode.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {episode.openingCrawl}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Episodes;
