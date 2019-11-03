import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card, Container, Grid, CardContent, Link,
  CardMedia, Typography, CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { Header } from '../../components';
import { GET_EPISODES } from '../../client/queries';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './styles';

const Episodes = () => {
  const {
    theme,
  } = useContext(ThemeContext);
  const classes = makeStyles(styles)({ theme });
  const history = useHistory();
  const linkTo = (e, route) => {
    e.preventDefault();
    history.push(route);
  };

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
    <div className={classes.wrapper}>
      <Header />
      <Container maxWidth="md" className={classes.innerContainer}>
        <Grid container display="flex" direction="column">
          <Grid container spacing={10}>
            {episodes.map((episode) => (
              <Grid item xs={12} sm={6} md={4} key={episode.id}>
                <Link
                  href="/"
                  onClick={(e) => {
                    linkTo(e, `/episodes/${episode.id}`);
                  }}
                  className={classes.linkTo}
                  underline="none"
                >
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
