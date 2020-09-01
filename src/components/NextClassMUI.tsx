// import React from 'react';
import { Typography } from '@material-ui/core';
import ImageThumbnail from './ImageThumbnail';
import commonImg from '../Assets/images';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, {FC, ReactNode, memo } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const useStyles = makeStyles({
    nextClassContainer:{
        paddingTop: '6.125rem',
        paddingBottom: '6.187rem',
        paddingLeft: '3.125rem',
        paddingRight: '10.437rem',
    },
    headingAndImageContainer:{
        height: '30px',
    },

    title:{
        fontSize: '2.625rem',
        lineHeight: '2.812rem'
    },
    subTitle:{
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        paddingTop: '1.062rem',
    },
    nextClassimage:{
        '& img':{
            height: '20rem',
        }
    },
    dateAndSubjectTutorContainer:{
        height: '30px',
    },
    dateTime:{
        width: '10.875rem',
        paddingLeft: '10.375rem'
    },
    subjectTutor:{
        paddingLeft: '7.062rem'
    },
    dropdown:{
        alignItems: 'center',
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontFamily: 'CircularXXWeb-Book',
        letterSpacing: '0px',
        color: '#5f5f5f',
    },
});

// type NextClassProps = {
//     position?: 'left' | 'right' | 'top' | 'bottom';
//     open: boolean;
//     onClose: () => void;
//     width?: number;
//     children: ReactNode;
// };

const NextClass:  FC = () => {
    const classes = useStyles();
    return (
        <Grid container xs={12} direction="row" className={classes.nextClassContainer}>
                <Grid container item xs={3} direction="column"> 
                    <Typography className={classes.title}>
                        Next Class
                    </Typography>
                    <Grid container className={classes.dropdown}>
                        <Typography variant="h5">
                            Child 1 
                        </Typography>
                        <Typography variant="h5">
                            <ExpandMoreIcon 
                                style={{fontSize:"3rem"}} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3} className={classes.nextClassimage}>
                    <img 
                        src={commonImg.running} /> 
                </Grid> 
                <Grid container item xs={3} direction="column" className={classes.dateTime}>
                    <Typography className={classes.title}>
                        19/07/20 <br /> 9am- 10.15am
                    </Typography>
                    <Typography className={classes.subTitle}>75mins</Typography>
                </Grid>
                <Grid container item xs={3} direction="column"  className={classes.subjectTutor}>
                    <Typography className={classes.title}>
                        PE. <br /> Creating a running <br /> plan for a 5K race
                    </Typography>
                    <Typography className={classes.subTitle}>Harriet Earl</Typography>
                </Grid>
        </Grid>
    );
};

export default NextClass;
