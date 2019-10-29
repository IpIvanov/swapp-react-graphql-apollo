import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
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
  query getEpisodeDetails($id: ID!, $first: Int!, $after: String!) {
    episode(id: $id){
      title
      image
      openingCrawl
      director
      releaseDate
      people(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
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

const Characters = () => {
  const classes = useStyles();
  const { episodeId } = useParams();

  const { loading, data, fetchMore } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id: episodeId, first: 5, after: '' },
  });

  if (loading) {
    return (<CircularProgress />);
  }

  const loadMoreData = () => {
    const lastElmCursor = data.episode.people.edges[data.episode.people.edges.length - 1].cursor;

    fetchMore({
      variables: { first: 5, after: lastElmCursor },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => ({
        episode: {
          ...episode,
          people: {
            edges: [...prev.episode.people.edges, ...episode.people.edges],
            pageInfo: { ...episode.people.pageInfo },
          },
        },
      }),
    });
  };

  const allCharacters = data.episode.people.edges.map(({ node: { id, name, image } }) => ({
    id,
    name,
    image,
  }));
  const loadMoreIsVisible = data.episode.people.pageInfo.hasNextPage;

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
        <ListItems
          listItems={allCharacters}
          loadMoreIsVisible={loadMoreIsVisible}
          loadMoreHandler={loadMoreData}
          linkTo="characters"
        />
      </Container>
    </div>
  );
};

export default Characters;
