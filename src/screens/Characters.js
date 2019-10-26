import React from 'react';
import { Header } from '../components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
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

const Characters = (props) => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Grid container display="flex" direction="row">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image="https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg"
                  title="Luke Skywalker image"
                />
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" className={classes.name}>
                    Luke Skywalker
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image="https://fsmedia.imgix.net/eb/d1/19/f1/9a64/4b2d/8471/d02314b53684/obi-wan-kenobi-in-the-original-star-wars.jpeg"
                  title="Luke Skywalker image"
                />
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" className={classes.name}>
                    Luke Skywalker
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" alignItems="center" flex="1">
            <Button color="primary" variant="outlined" size="small"
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
