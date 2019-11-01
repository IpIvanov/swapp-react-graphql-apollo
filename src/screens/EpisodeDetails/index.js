import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, CardContent, CardMedia, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { Header, ListItems } from '../../components';
import { GET_EPISODE_DETAILS } from '../../client/queries';
import styles from './styles';

const Characters = () => {
  const classes = makeStyles(styles)();
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
    <div className={classes.wrapper}>
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
              <span className={classes.textColor}>{data.episode.director}</span>
            </Typography>
            <Typography component="p" variant="body1" align="left">
              Release data:
              {' '}
              <span className={classes.textColor}>{data.episode.releaseDate}</span>
            </Typography>
          </CardContent>
        </Card>
        <ListItems
          listItems={allCharacters}
          loadMoreIsVisible={loadMoreIsVisible}
          loadMoreHandler={loadMoreData}
          linkToUrl="characters"
          mdColumns={4}
        />
      </Container>
    </div>
  );
};

export default Characters;
