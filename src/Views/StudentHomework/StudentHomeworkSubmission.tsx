import React from 'react';
import { makeStyles, Grid, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    rightGrid: {
        width: '23.5%',
    },
    leftGrid: {
        borderRight: '1px solid lightgrey',
        width: '47%',
        marginRight: '3%',
    },
    centerGrid: {
        borderRight: '1px solid lightgrey',
        width: '23.5%',
        marginRight: '3%',
    },
    mainGrid: {
        paddingTop: '2rem',
    },
    commonText: {
        fontSize: '1.5625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    bigText: {
        fontSize: '2.625rem',
        lineHeight: 1,
        fontFamily: 'CircularXXWeb-Book',
    },
    commonTextSub: {
        fontSize: '1.5625rem',
        lineHeight: 1,
        marginTop: '1.6rem',
        width: '80%',
        fontFamily: 'CircularXXWeb-Book',
    },
    smallText: {
        fontSize: '1.25rem',
        marginTop: '1.8rem',
        color: '#5F5F5F',
        fontFamily: 'CircularXXWeb-Book',
    },
    smallText2: {
        fontSize: '1.25rem',
        color: '#5F5F5F',
        fontFamily: 'CircularXXWeb-Book',
    },
});

const StudentHomeworkSubmission = () => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    return (
        <div>
            {isSmallScreen ? (
                <Grid container className={classes.mainGrid}>
                    <Grid xs={12} item>
                        <Typography className={classes.bigText} style={{ marginBottom: '3rem' }}>
                            Submitted
                            <br /> 11/08/20 <br /> 9.30am
                        </Typography>
                    </Grid>
                    <Grid item container spacing={4} style={{ marginBottom: '3rem' }}>
                        <Grid xs={6} item style={{ borderRight: '1px solid lightgrey' }}>
                            <Typography className={classes.commonText}>Comments</Typography>
                            <Typography className={classes.commonTextSub}>
                                I am not sure with the 2nd part of the homework, could you go throught with me
                            </Typography>
                            <Typography className={classes.smallText}>Reply</Typography>
                        </Grid>
                        <Grid xs={6} item>
                            <Typography className={classes.commonText}>Submitted Files</Typography>
                            <Typography className={classes.commonTextSub}>Maths Homework 01</Typography>
                            <Typography className={classes.smallText2}>Download</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                [
                    <Grid container className={classes.mainGrid}>
                        <Grid item className={classes.leftGrid}>
                            <Typography className={classes.bigText}>
                                Submitted
                                <br /> 11/08/20 <br /> 9.30am
                            </Typography>
                        </Grid>
                        <Grid item className={classes.centerGrid}>
                            <Typography className={classes.commonText}>Comments</Typography>
                            <Typography className={classes.commonTextSub}>
                                I am not sure with the 2nd part of the homework, could you go throught with me
                            </Typography>
                            <Typography className={classes.smallText}>Reply</Typography>
                        </Grid>
                        <Grid item className={classes.rightGrid}>
                            <Typography className={classes.commonText}>Submitted Files</Typography>
                            <Typography className={classes.commonTextSub}>Maths Homework 01</Typography>
                            <Typography className={classes.smallText2}>Download</Typography>
                        </Grid>
                    </Grid>,
                ]
            )}
        </div>
    );
};

export default StudentHomeworkSubmission;
