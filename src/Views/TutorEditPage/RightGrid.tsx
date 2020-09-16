import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import Img from '../../Assets/images';
import ReusableTextArea from '../../components/ReusableTextArea';
import Details from './Details';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
    },
    rightGrid: {},
    image: {
        width: '11.5rem',
        height: '11.47rem',
        marginTop: '2.49rem',
    },
    addPhotoBox: {
        marginLeft: '3.125rem',

        display: 'inline-block',
        transform: 'translateY(0.4rem)',
    },
    addPhotoText: {
        fontSize: '1.5625rem',
        width: '100%',
        height: '33px',
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    smallText: {
        display: 'inline-block',
        marginLeft: '1.875rem',
        transform: 'translateY(-0.1rem)',
        fontFamily: 'CircularXXWeb-Book',
    },
    bio: {
        marginTop: '5.726875rem',
        width: '55.375rem',
        marginBottom: '5.3125rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    bioText: {
        fontSize: '1.5625rem',
        lineHeight: '1.8125rem',
        fontFamily: 'CircularXXWeb-Book',
        marginBottom: '1rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    pad: {},
});

const LeftGrid = () => {
    const classes = useStyles();

    return (
        <Grid md={6} item className={classes.rightGrid}>
            <Typography className={classes.headerText}>Profile Image</Typography>
            <div className={classes.pad}>
                <img src={Img.scaffgirl} alt="tutor" className={classes.image} />
                <div className={classes.addPhotoBox}>
                    <Typography className={classes.addPhotoText}>Add a photo to your account</Typography>
                    <div className={classes.upload}>Upload</div>
                    <div className={classes.smallText}>Max size 50MB</div>
                </div>
                <div className={classes.bio}>
                    <div className={classes.bioText}>Bio</div>
                    <ReusableTextArea noOfRows={5} />
                </div>
                <Details />
                <Experience />
                <Education />
                <Skills />
            </div>
        </Grid>
    );
};

export default LeftGrid;
