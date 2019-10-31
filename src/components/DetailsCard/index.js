import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import styles from './styles';
import ThemeContext from '../../contexts/ThemeContext';

const DetailsCard = ({ title, image, details }) => {
  const {
    theme,
  } = useContext(ThemeContext);
  const useStyles = makeStyles(styles);
  const classes = useStyles({ theme });

  return (
    <Card className={classes.card}>
      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
        {title}
      </Typography>
      <CardMedia
        className={classes.cover}
        image={image}
        title={title}
      />
      <CardContent className={classes.content}>
        {details.map((detail) => (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
            align="left"
            key={detail.key}
          >
            {`${detail.key} `}
            <span className={classes.detailValue}>{detail.value}</span>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;