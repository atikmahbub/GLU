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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// const theme = createMuiTheme({
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm:600,
//         md: 1450,
//         lg: 1920,
//         xl: 2250,
//       },
//     },
//   })


const useStyles = makeStyles((theme) => ({
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
        border: '2px solid',
        [theme.breakpoints.down('lg')]: {
            fontSize: '4.625rem',
            lineHeight: '4.875rem',
        }

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
        [theme.breakpoints.down('lg')]: {
            lineHeight: '8.5rem',
            marginTop: '-4.937rem',
        },
    },
    ratingFavoriteContainer: {
        marginTop: '-0.438rem',
        border: "2px solid green",
        [theme.breakpoints.down('lg')]:{
            marginTop: '-2.438rem',
        }
    },
    ratingContainer: {
        width: "103px",
        [theme.breakpoints.down('lg')]:{
            width: '158px',
        }
    },
    favoriteContainer: {
        width: "137px",
        border: "2px solid blue",
        [theme.breakpoints.down('lg')]:{
            width: "232px",
        }
    },
    rating: {
        color: 'white',
        fontSize: '1.25rem',
        [theme.breakpoints.down('lg')]:{
            fontSize: '3.25rem',
        }
    },
    favorite: {
        color: 'white',
        fontSize: '1.25rem',
        [theme.breakpoints.down('lg')]:{
            fontSize: '3.25rem',
        }
    },
    icon: {
        color: "white",
        marginRight: '1.2rem',
        [theme.breakpoints.down('lg')]:{
            width: '4rem',
            height: '5rem',
            marginRight: '2.2rem',
        }

    },
    bottomText: {
        color: 'white',
        fontSize: '1.562rem',
        // marginBottom: '2.125rem',
        marginTop: '10.5rem',
        [theme.breakpoints.down('lg')]:{
            marginTop: '24.5rem'
        }
    },
    imageTutor: {
        height: "34.062rem",
        marginTop: "1rem",
        marginBottom: "1rem",
        border: "2px solid green",
        [theme.breakpoints.down('sm')]: {
            marginTop: '11rem',
            width: '43.437rem',
            height: '46.062rem',

        },
        '& img': {
            height: "34.062rem",
            width: "33.437rem",
            objectFit: "cover",
            [theme.breakpoints.down(1450)]: {
                width: '51.437rem',
                height: '48.062rem',
                border: "2px solid red",
            },
            [theme.breakpoints.down('lg')]:{
                width: '44.437rem',
                height: '54.062rem',
            },
            [theme.breakpoints.down('sm')]:{
                width: '43.437rem',
                height: '46.062rem',
            }
        },
    },
    smallScreenBottomText:{
        border: "2px solid",
        display: "flex",
        alignItems: "center",
        marginTop: "-54px",
    }
}));

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    return (
        // <MuiThemeProvider theme={theme}>
        <Grid container className={classes.brownContainer}>
            <Grid container className={classes.elementsContainer}>
                <Grid item lg={6} md={6} sm={4}className={classes.titleContainer}>
                    <Typography className={classes.title}>Tutor</Typography>
                </Grid>
                <Grid item className={classes.imageTutor} lg={6} md={6} sm={8}>
                    <LazyLoadImage
                        alt=""
                        effect="blur"
                        src={commonImg.twogirl} />
                </Grid>
                <Grid item lg={12} sm={12}>
                    <Typography className={classes.bigNameCountry}>Moly Pearce <br />Dubai, UAE</Typography>
                </Grid>
                    <Grid container item className={classes.ratingFavoriteContainer} lg={12}>
                        <Grid container className={classes.ratingContainer}>
                            <StarBorder className={classes.icon} />
                            <Typography  className={classes.rating}>5/5</Typography>
                        </Grid>
                        <Grid container className={classes.favoriteContainer} >
                            <FavoriteBorder className={classes.icon} />
                            <Typography  className={classes.favorite}>Favorite</Typography>
                        </Grid>
                        {/* <Grid item className={classes.favoriteContainer}/> */}
                    </Grid>
                    <Grid item lg={12}>
                        <Typography  className={classes.bottomText}>Primary, Secondary</Typography>
                    </Grid>
            </Grid>
        </Grid>
        // </MuiThemeProvider>
    );
};

export default ParentIndividualTutorBanner;

