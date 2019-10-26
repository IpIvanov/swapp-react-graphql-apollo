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

const Episodes = (props) => {
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
                    It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....
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
                    It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....
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
                    It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....
                </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end">
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
      </Container>
    </div>
  );
};

export default Episodes;
