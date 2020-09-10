import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface props {
    image: string;
    title: string;
    msg: React.ReactNode;
    mobileImg?: string;
    desktopTitle?: string;
    leftTitle?: string;
}

const useStyles = makeStyles((theme) => ({
    sectionTwo:{
        position: 'relative',
        display: 'flex',
        maxHeight: '100vh',
        height: "100vh",
    },
    opacityBG:{
        width: '100%',
        // align-self: stretch,
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.23)",
    },
    bannerMobile:{
        display: "none",
        objectFit: "cover",
    },
    bannnerImage:{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "50% 15%",
    },
    leftTitle: {
        position: 'absolute',
        left: '3.062rem',
        bottom: '20.1rem',
        fontSize: '5rem',
        textShadow: '0 0 0.029rem white',
        color: 'transparent',
        // color: 'black',
        // textRendering: 'geometricPrecision',
        fontFamily: 'CircularXXWeb-Book',
        border: "2px solid red",
        minWidth: '100px',
        // wordBreak: "wra"
    },
    imgOverlayContainer:{
        position: 'absolute',
        bottom: '11.187rem',
        // right: 10.25rem,
        left: '51%',
        maxWidth: '49.062rem',
        border: "2px solid green",
    },
    title:{
        textShadow: '0 0 0.029rem white',
        color: 'transparent',
        // color: 'black',
        // textRendering: 'geometricPrecision', 
        fontSize: '1.562rem',
        lineHeight: '3.5rem',
        transition: 'all 0.5s',
        fontFamily: 'CircularXXWeb-Book',
    },
    maessage:{
        fontSize: '5rem',
        transition: 'all 0.5s',
        textShadow: '0 0 0.029rem white',
        color: 'transparent',
        // color: 'black',
        // textRendering: 'geometricPrecision',        
        fontFamily: 'CircularXXWeb-Book',
        lineHeight: '5rem',
    }
}));
const HomeBanner: React.FunctionComponent<props> = ({
    image,
    title,
    msg,
    mobileImg,
    desktopTitle,
    leftTitle,
}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.sectionTwo}>
            {/* <div className={classes.opacityBG}></div> */}
            <img className={classes.bannerMobile} src={mobileImg} alt="" />
            <img className={classes.bannnerImage} src={image} alt="" />
            <Grid container item xs={12} sm={12} md={6} lg={12}>
                   <Typography className={classes.leftTitle}>{leftTitle}</Typography>
            </Grid>
            <Grid container item className={classes.imgOverlayContainer} xs={12} sm={12} md={6} lg={12}>
                {/* <Typography className={classes.title}>{title}</Typography> */}
                <Typography className={classes.title}>{desktopTitle}</Typography>
                <Typography className={classes.maessage}>{msg}</Typography>
            </Grid>
        </Grid>
    );
};

export default HomeBanner;
