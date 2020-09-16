import React, { FC, useState, useEffect, ReactNode, memo } from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FavoriteBorder, StarBorder } from '@material-ui/icons';
// import './style.scss';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme)

// theme.typography.h4 = {
//     fontSize: '7.5rem',
//     lineHeight: '7.5rem',
//   '@media (max-width:750px)': {
//     fontSize: '1.5rem',
//   },

//   '@media (min-width:750px)': {
//     fontSize: '1rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },

//   [theme.breakpoints.up('sm')]: {
//     fontSize: '2rem',
//   },
// };


const useStyles = makeStyles({
    body: {
        position: 'relative',
        backgroundColor: '#5E5558',
        minWidth: '100%',
        // minHeight: '1000px',
        border: '2px solid black',
        fontFamily: 'CircularXXWeb-Book',
    },
    imageGridContainer: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
        },
    },
    imageContainer: {
        padding: 0,
        marginTop: '14vh',
        float: 'left',
        width: '33.437rem',
        height: '34.062rem',
        border: "2px solid red",
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
            width: '70vw'
        },
    },
    image: {
        width: '33.437rem',
        height: '34.062rem',
        objectFit: 'cover',
    },
    title: {
        marginLeft: '20px',
        marginTop: '14vh',
        color: 'white',
        fontSize: '3vh',
        minWidth: '100%'
    },
    titleColumn: {
        maxHeight: "200px",
    },
    secondHeader: {
        marginTop: '-18vh',
        marginLeft: '20px',
        lineHeight: '6vw',
        fontSize: '6vw',
        color: 'white',
        width: '100%',
        fontFamily: 'CircularXXWeb-Book',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
        },
    },
    gridContainer1: {
        width: '100%',
    },
    iconBox: {
        display: 'flex',
        fontSize: '1vh',
        marginTop: '20px',
        marginBottom: '136px',
    },
    starBox: {
        display: 'flex',
    },
    favoriteBox: {
        marginLeft: '20px',
        display: 'flex'
    },
    basicAdvance: {
        padding: 0,
        color: 'white',
        position: 'absolute',
        bottom: '5px',
        left: '20px',
    }
});

const ParentIndividualTutorBanner: FC = () => {
    const classes = useStyles();
    const [height, setHeight] = useState(1000);
    // const [width, setWidth] = useState('100%'); // Keeping for the future use.

    const updateWindowDimensions = () => {
        let height = window.innerHeight;
        /* Can be used later
    s    if(window.innerWidth < 600) {
          height = 1100;
        } */
        setHeight(height);
        //   setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <div className={classes.body}>
                    {/* <div style={{height}} className={classes.body}> */}
                    <Grid className={classes.gridContainer1} container spacing={3}>
                        <Grid className={classes.titleColumn} item xs={12} sm={12} md={6}>
                            <div className={classes.title}>Tutor</div>
                        </Grid>
                        <Grid item className={classes.imageGridContainer} xs={12} sm={12} md={6}>
                            <Container className={classes.imageContainer}>
                                {/* <img className={classes.image} alt="" src={ImageFile}/> */}
                                <LazyLoadImage
                                    alt=""
                                    effect="blur"
                                    src={commonImg.twogirl}
                                    className={classes.image} />
                            </Container>
                        </Grid>
                    </Grid>
                    <div className={classes.secondHeader} >
                        <div >
                            Moly Pearce
                    </div>
                        <div >
                            Dubai, UAE
                    </div>
                        <div className={classes.iconBox}>
                            <div className={classes.starBox}>
                                <StarBorder />
                                <Typography style={{ marginLeft: '7px' }} >5/5</Typography>
                            </div>
                            <div className={classes.favoriteBox}>
                                <FavoriteBorder />
                                <Typography style={{ marginLeft: '7px' }} >Favorite</Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.basicAdvance}>
                        Primary, Secondary
                </div>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    );
};

export default ParentIndividualTutorBanner;
