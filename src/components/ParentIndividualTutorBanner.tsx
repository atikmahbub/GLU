import React, {FC, useState, ReactNode, memo } from 'react';
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
    container:{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#5E5558",
        fontFamily: 'CircularXXWeb-Book',
        justifyContent: "flex-start",
        paddingLeft: '3.125rem',
        position: 'relative',
    },
    title:{
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
        marginTop: "9.25rem",
        color: "white",
    },
    nameRatingContainer:{
        justifyContent: 'flex-start',
    },
    bigNameCountry:{
        fontSize: '7.5rem',
        lineHeight: '7.5rem',
        color: 'white',
    },
    left:{
        justifyContent: 'space-between',
    },
    ratingFavoriteContainer:{
        marginTop: "1.25rem",
        width: "12.5rem",
        justifyContent: 'space-between',
    },
    ratingContainer:{
        width: "3.887rem",
        justifyContent: "space-between",
    },
    favoriteContainer:{
        width: "6.937rem",
        justifyContent: "space-between",
    },
    rating:{
        color: 'white',
        fontSize: '1.25rem',
    },
    favorite:{
        color: 'white',
        fontSize: '1.25rem',
    },
    icon:{
        color: "white",
    },
    bottomText:{
        color: 'white',
        fontSize: '1.562rem',
        marginBottom: '2.125rem',
        marginTop: '8.5rem',
    },
    image:{
        position: 'relative',
        '& img':{
            position: 'absolute',
            marginTop: "9.375rem",
            marginBottom: "5rem",
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
    subTitle:{
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        paddingTop: '0.362rem',
    },
    nextClassimage:{
        marginTop: '1.625rem',
        '& img':{
            height: '20rem', 
        }
    },

}); 

const ParentIndividualTutorBanner:  FC = () => {
    const classes = useStyles();
    return (
        <Grid container lg={12} direction="row" className={classes.container}>
            <Grid container item lg={6} md={6} sm={12} direction="column" className={classes.left}>
                <Typography className={classes.title}>Tutor</Typography>
                <Grid container direction="column">
                    <Grid container item direction="column" className={classes.nameRatingContainer}> 
                        <Typography className={classes.bigNameCountry}>Moly Pearce <br/>Dubai, UAE</Typography>
                        <Grid container item className={classes.ratingFavoriteContainer}>
                            <Grid container className={classes.ratingContainer}>
                                <StarBorder className={classes.icon}/>
                                <Typography className={classes.rating}>5/5</Typography>
                            </Grid>
                            <Grid container className={classes.favoriteContainer}>
                                <FavoriteBorder className={classes.icon}/>
                                <Typography className={classes.favorite}>Favorite</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography className={classes.bottomText}>Primary, Secondary</Typography>
                </Grid>
            </Grid>
            <Grid className={classes.image} lg={6} md={6} sm={12}>
                <LazyLoadImage 
                    alt=""
                    effect="blur"
                    src={commonImg.twogirl} /> 
            </Grid>
        </Grid>
    );
};

export default ParentIndividualTutorBanner;
