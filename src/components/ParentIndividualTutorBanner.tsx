import React, { FC, useState, ReactNode, memo } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../Assets/images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import NavigationMenu from './NavigationMenu';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';


const useStyles = makeStyles({
    container: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#5E5558",
        fontFamily: 'CircularXXWeb-Book',
        // justifyContent: "flex-start",
        // alignSelf: 'flex-start | baseline',
        // flex-end',
        // | center | baseline | stretch',

        // paddingLeft: '3.125rem',
        // position: 'relative',
        // justifyContent: "space-between",
        // paddingRight: '18.125rem',
    },
    titleContainer:{
        marginTop: "9.25rem",
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
        color: "white",
        border: '2px solid red',
    },
    nameRatingContainer: {
        justifyContent: 'flex-start',
        border: '2px solid black',
    },
    bigNameCountry: {
        fontSize: '7.5rem',
        lineHeight: '7.5rem',
        color: 'white',
        border: '2px solid black',
        marginTop: '-10.875rem',
    },
    left: {
        justifyContent: 'space-between',
    },
    ratingFavoriteContainer: {
        marginTop: "-9.75rem",
        width: "12.5rem",
        // justifyContent: 'space-between',
        border: '2px solid black',
    },
    ratingContainer: {
        width: "3.887rem",
        // justifyContent: "space-between",
    },
    favoriteContainer: {
        width: "6.937rem",
        // justifyContent: "space-between",
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
    },
    bottomText: {
        color: 'white',
        fontSize: '1.562rem',
        marginBottom: '2.125rem',
        marginTop: '8.5rem',
        border: '2px solid green',
    },
    image: {
        // position: 'relative',
        border: '2px solid black',
        height: "34.062rem",
        marginTop: "9.25rem",
        // marginTop: "9.375rem",
        // alignSelf: 'flex-end',
        // marginTop: "9.25rem",
        // float: 'right',
        // paddingTop: "9.25rem",
        '& img': {
            // position: 'absolute',
            // marginTop: "9.375rem",
            // marginBottom: "5rem",
            // marginRight: "25rem",
            height: "34.062rem",
            width: "33.437rem",
            // width: "50%",
            objectFit: "cover",
            // display: 'block',
            // maxWidth: "33.437rem",
            // maxHeight: "34.062rem",
            // width: 'auto',
            // height: 'auto',
        }
    },
    subTitle: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        paddingTop: '0.362rem',
    },
    nextClassimage: {
        marginTop: '1.625rem',
        '& img': {
            height: '20rem',
        }
    },
    one:{
        height: '30px',
        backgroundColor: 'red',
    },
    two:{
        width: "33.437rem",
        height: "34.062rem",
        backgroundColor: "green",
        alignSelf: 'flex-end',
    },
    three:{
        height: '7.5rem',
        backgroundColor: "blue",
    }

});

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    return (
        <Grid container  className={classes.container}>
            {/* <Grid item className={classes.one} lg={6}/>
            <Grid item className={classes.two} lg={6}/>
            <Grid item className={classes.three} lg={6}/> */}
            <Grid item lg={6} className={classes.titleContainer}>
               <Typography className={classes.title}>Tutor</Typography>
            </Grid>
            <Grid className={classes.image} lg={6}>
                <LazyLoadImage
                    alt=""
                    effect="blur"
                    src={commonImg.twogirl} />
            </Grid>
            <Grid item lg={12}>
                <Typography className={classes.bigNameCountry}>Moly Pearce <br />Dubai, UAE</Typography>
            </Grid>
            
            <Grid container item className={classes.ratingFavoriteContainer} lg={3}>
                <Grid container className={classes.ratingContainer} >
                    <StarBorder className={classes.icon} />
                    <Typography className={classes.rating}>5/5</Typography>
                </Grid>
                <Grid container className={classes.favoriteContainer} >
                    <FavoriteBorder className={classes.icon} />
                    <Typography className={classes.favorite}>Favorite</Typography>
                </Grid>
            </Grid>
            {/* <Typography className={classes.bottomText}>Primary, Secondary</Typography>  */}

        </Grid>
    );
};

export default ParentIndividualTutorBanner;
