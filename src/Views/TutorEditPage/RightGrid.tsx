import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
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
    rightGrid: {
        // float: 'left',
        left: '61.5625rem',
        top: '8.4375',
        position: 'absolute',
        width: '935px',
        paddingRight: '3.0625rem',
    },
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
        width: '19.9379rem',
        height: '33px',
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
    },
    smallText: {
        display: 'inline-block',
        marginLeft: '1.875rem',
        transform: 'translateY(-0.1rem)',
    },
    bio: {
        marginTop: '5.726875rem',
        width: '55.375rem',
        marginBottom: '5.3125rem',
    },
    bioText: {
        marginBottom: '1rem',
    },
    pad: {
        paddingRight: '3.1875rem',
    },
});

const LeftGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.rightGrid}>
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
                    <ReusableTextArea noOfRows={6} />
                </div>
                <Details />
                <Experience />
                <Education />
                <Skills />
            </div>
        </div>
    );
};

export default LeftGrid;