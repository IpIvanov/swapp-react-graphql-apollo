import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles, Link, Typography, Card, Grid, Box, Button, CardMedia, CardContent } from '@material-ui/core';
import styles from './styles';
import ThemeContext from '../../contexts/ThemeContext';

const ListItems = ({ listItems, loadMoreIsVisible, loadMoreHandler, linkToUrl, mdColumns }) => {
  const {
    theme,
  } = useContext(ThemeContext);
  const useStyles = makeStyles(styles);
  const classes = useStyles({ theme });
  const history = useHistory();
  const linkTo = (e, route) => {
    e.preventDefault();
    history.push(route);
  };

  return (
    <Grid container display="flex" direction="row">
      <Grid container spacing={2}>
        {listItems.map(({ name, id, image }, i) => (
          <Grid item xs={12} md={mdColumns} key={i.toString()}>
            <Link
              href="/"
              onClick={(e) => {
                linkTo(e, `/${linkToUrl}/${id}`);
              }}
              className={classes.linkTo}
              underline="none"
            >
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

ListItems.propTypes = {
  listItems: PropTypes.array,
  loadMoreIsVisible: PropTypes.bool,
  loadMoreHandler: PropTypes.func,
  linkToUrl: PropTypes.string,
  mdColumns: PropTypes.number,
};

ListItems.defaultProps = {
  listItems: [],
  loadMoreIsVisible: false,
  loadMoreHandler: () => { },
  linkToUrl: '/test',
  mdColumns: 4,
};

export default ListItems;
