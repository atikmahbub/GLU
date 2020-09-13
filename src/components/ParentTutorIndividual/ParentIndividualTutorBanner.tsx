import React, { FC, useState, ReactNode, memo } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';
// import './style.scss';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    brownContainer: {
        width: "100vw",
        // height: "100vh",
        backgroundColor: "#5E5558",
        fontFamily: 'CircularXXWeb-Book',
        margin: '0rem',
        paddingLeft: '3.125rem',
    },
    elementsContainer: {
        height: "90vh",
        marginTop: "9.25rem",
    },
    titleContainer: {
        marginTop: "1rem",
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
        color: "white",
        paddingBottom: '20px',
        border: '2px solid'
    },
    nameRatingContainer: {
        justifyContent: 'flex-start',
    },
    bigNameCountry: {
        fontSize: '7.5rem',
        lineHeight: '7.5rem',
        fontWeight: 400,
        color: 'white',
        marginTop: '-8.937rem',
        border: "2px solid red",
    },
    ratingFavoriteContainer: {
        marginTop: '-0.438rem',
        border: "2px solid green",
    },
    ratingContainer: {
        width: "103px",
    },
    favoriteContainer: {
        width: "137px",
        border: "2px solid blue",
    },
    rating: {
        color: 'white',
        fontSize: '1.25rem',
    },
    favorite: {
        color: 'white',
        fontSize: '1.25rem',
    },
    icon: {
        color: "white",
        marginRight: '1.2rem'
    },
    bottomText: {
        color: 'white',
        fontSize: '1.562rem',
        marginBottom: '2.125rem',
        marginTop: '10.5rem',
    },
    image: {
        height: "34.062rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        border: "2px solid green",
        '& img': {
            height: "34.062rem",
            width: "33.437rem",
            objectFit: "cover",
        },

    },
    smallScreenBottomText:{
        border: "2px solid",
        display: "flex",
        alignItems: "center",
        marginTop: "-54px",
    }
});

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    return (
        // <MuiThemeProvider theme={theme}>
        <Grid container className={classes.brownContainer} spacing={0}>
            <Grid container className={classes.elementsContainer}>
                <Grid item lg={6} className={classes.titleContainer}>
                    <Typography variant="h1" className={classes.title}>Tutor</Typography>
                </Grid>
                <Grid className={classes.image} lg={6} >
                    <LazyLoadImage
                        alt=""
                        effect="blur"
                        src={commonImg.twogirl} />
                </Grid>
                <Grid item lg={12} className="big__text">
                    <Typography variant="h1" className={classes.bigNameCountry}>Moly Pearce <br />Dubai, UAE</Typography>
                </Grid>
                    <Grid container item className={classes.ratingFavoriteContainer} lg={12}>
                        <Grid container className={classes.ratingContainer}>
                            <StarBorder className={classes.icon} />
                            <Typography variant="h3" className={classes.rating}>5/5</Typography>
                        </Grid>
                        <Grid container className={classes.favoriteContainer} >
                            <FavoriteBorder className={classes.icon} />
                            <Typography variant="h3" className={classes.favorite}>Favorite</Typography>
                        </Grid>
                        <Grid item className={classes.favoriteContainer}sm={3}/>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography variant="h3" className={classes.bottomText}>Primary, Secondary</Typography>
                    </Grid>
            </Grid>
        </Grid>
        // </MuiThemeProvider>
    );
};

export default ParentIndividualTutorBanner;

