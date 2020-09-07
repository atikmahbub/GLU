import React from 'react';
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
    headingSecondary: {
        fontSize: '2.625rem',
    },
    headingPrimary: {
        fontSize: '5rem',
    },
});

const TutorReviewHeader = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Typography className={classes.headingSecondary}>Review Class</Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography className={classes.headingPrimary}>What did you think to</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default TutorReviewHeader;
