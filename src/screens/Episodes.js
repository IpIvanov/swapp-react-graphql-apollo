import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
    maxWidth: 200,
    maxHeight: 400,
    marginBottom: 20,
  },
  media: {
    height: 180,
  },
});

const Episodes = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="md" className={classes.container}>
        <Grid container display="flex" direction="column">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    A New Hope
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    Long string
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    A New Hope
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    Long string
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    A New Hope
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    Long string
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
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
      </Container>
    </div>
  );
};

export default Episodes;
