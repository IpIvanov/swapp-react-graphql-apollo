import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, Card, Grid, Box, Button, CardMedia, CardContent } from '@material-ui/core';
import styles from './styles';

const ListItems = ({ listItems, loadMoreIsVisible, loadMoreHandler, linkTo, mdColumns }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container display="flex" direction="row">
      <Grid container spacing={2}>
        {listItems.map(({ name, id, image }, i) => (
          <Grid item xs={12} md={mdColumns} key={i.toString()}>
            <Link to={`/${linkTo}/${id}`} className={classes.linkTo}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image={image}
                  title={name}
                  src={name}
                />
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5" className={classes.name}>
                    {name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      {loadMoreIsVisible && (
        <Box display="flex" justifyContent="center" alignItems="center" flex="1">
          <Button
            color="primary"
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={loadMoreHandler}
          >
            Load More
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default ListItems;
