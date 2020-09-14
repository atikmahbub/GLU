import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    mainGrid: {
        lineHeight: 1,
        backgroundColor: '#F7F7F7',
        padding: '3.0625rem',
        height: '30rem',
    },
    leftGrid: {
        fontSize: '2.625rem',
    },
    rightGrid: {
        fontSize: '5rem',
    },
});
const StudentHomeworkHeader = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.mainGrid} spacing={6}>
                <Grid item xs={12} md={6} className={classes.leftGrid}>
                    Joshua Lee
                </Grid>
                <Grid item xs={12} md={6} className={classes.rightGrid}>
                    Maths. <br />
                    Getting started with
                </Grid>
            </Grid>
        </div>
    );
};

export default StudentHomeworkHeader;
