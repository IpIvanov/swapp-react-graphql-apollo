import React from 'react';
import { Header } from '../components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
        flex: 1,
    },
    description: {
        textAlign: 'left',
        marginBottom: 10,
        padding: 0,
    },
    cover: {
        width: '100%',
        height: 420,
    },
    starshipCover: {
        width: 120,
    },
    movieCover: {
        width: 300,
        height: 300,
    },
    name: {
        color: '#4BD5EE',
        fontFamily: 'SfDistantGalaxyOutline',
        fontSize: 36,
    },
    starshipName: {
        color: '#4BD5EE',
        fontFamily: 'SfDistantGalaxyOutline',
        fontSize: 24,
    },
    starshipsTitle: {
        fontFamily: 'SfDistantGalaxyOutline',
        fontSize: 36,
        color: '#4E5B6E',
    },
    title: {
        color: '#4BD5EE',
        fontWeight: 700,
    }
}));

const StarshipDetails = (props) => {
    const classes = useStyles();

    return (
        <div style={{ backgroundColor: '#E8EAED', minHeight: '100vh' }}>
            <Header />
            <Container maxWidth="md" className={classes.container}>
                <Typography component="h5" variant="h5" className={classes.name}>
                    Jedi starfighter
                 </Typography>
                <Divider style={{ marginBottom: 20 }} />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card style={{ padding: 20 }}>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                Jedi starfighter
                            </Typography>
                            <CardMedia
                                className={classes.cover}
                                image="https://cdn3.volusion.com/bmfcy.fjqhr/v/vspfiles/photos/BANSW219770-2.jpg?1533738074"
                                title="Contemplative Reptile"
                            />
                            <CardContent style={{ padding: 0, paddingTop: 10 }}>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                                    Class: <span style={{ color: '#4BD5EE' }}>asd</span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                                    Cost: <span style={{ color: '#4BD5EE' }}>asd</span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                                    Crew: <span style={{ color: '#4BD5EE' }}>asd</span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                                    Max Atmospheric Speed: <span style={{ color: '#4BD5EE' }}>asd</span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description} align="left">
                                    Hyperdrive Rating: <span style={{ color: '#4BD5EE' }}>asd</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component="h5" variant="h5" className={classes.starshipsTitle}>
                            Piloted Starships
                        </Typography>
                        <Divider style={{ marginBottom: 20 }} />
                        <Grid container display="flex" flexDirection="column">
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.starshipCover}
                                        image="https://cdn3.volusion.com/bmfcy.fjqhr/v/vspfiles/photos/BANSW219770-2.jpg?1533738074"
                                        title="Millennium Falcon image"
                                    />
                                    <CardContent className={classes.content}>
                                        <Typography component="h6" variant="h6" className={classes.starshipName}>
                                            Millennium Falcon
                    </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default StarshipDetails;
