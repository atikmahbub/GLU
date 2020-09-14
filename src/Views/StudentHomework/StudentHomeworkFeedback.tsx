import React from 'react';
import { makeStyles, Grid, Typography, useMediaQuery, Button } from '@material-ui/core';
import TextAreaReusable from '../../components/ReusableTextArea';

const useStyles = makeStyles({
    mainGrid: {
        paddingTop: '2rem',
    },
    commonText: {
        fontSize: '1.5625rem',
    },
    bigText: {
        fontSize: '2.625rem',
        lineHeight: 1,
    },
    commonTextSub: {
        fontSize: '1.5625rem',
        lineHeight: 1,
        marginTop: '1.6rem',
        width: '80%',
    },
    smallText: {
        fontSize: '1.25rem',
        marginTop: '1.8rem',
        color: '#5F5F5F',
    },
    smallText2: {
        fontSize: '1.25rem',
        color: '#5F5F5F',
    },
    leftGrid: {
        width: '47.1%',
        borderRight: '1px solid lightgrey',
        marginRight: '4%',
    },
    rightGrid: {
        width: '48%',
    },
    confirm: {
        marginTop: '5rem',
    },
    submit: {
        padding: '0.2rem 0rem',
        fontSize: '1.25rem',
        width: '9.375rem',
        border: '1.2px solid #A8A8A8',
        marginRight: '0.5rem',
        textTransform: 'capitalize',
    },
});

const StudentHomeworkFeedback = () => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            {isSmallScreen ? (
                <Grid container className={classes.mainGrid} spacing={6}>
                    <Grid xs={12} item>
                        <Typography className={classes.bigText}>Feedback</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography className={classes.commonText}>Comment</Typography>
                        <TextAreaReusable noOfRows={4} />
                        <Typography className={classes.confirm}>
                            <Button className={classes.submit}>Complete</Button>
                            <Button className={classes.submit}>Incomplete</Button>
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Grid container className={classes.mainGrid}>
                    <Grid item className={classes.leftGrid}>
                        <Typography className={classes.bigText}>Feedback</Typography>
                    </Grid>
                    <Grid item className={classes.rightGrid}>
                        <Typography className={classes.commonText}>Comment</Typography>
                        <TextAreaReusable noOfRows={5} />
                        <Typography className={classes.confirm}>
                            <Button className={classes.submit}>Complete</Button>
                            <Button className={classes.submit}>Incomplete</Button>
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default StudentHomeworkFeedback;
