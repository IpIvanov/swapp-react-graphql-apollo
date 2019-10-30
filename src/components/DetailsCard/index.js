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
    <Card style={{ padding: 20 }}>
      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
        {title}
      </Typography>
      <CardMedia
        className={classes.cover}
        image={image}
        title={title}
      />
      <CardContent style={{ padding: 0, paddingTop: 10 }}>
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
            <span style={{ color: '#4BD5EE' }}>{detail.value}</span>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
