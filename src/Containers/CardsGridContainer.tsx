import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem',
    },
});

const CardsGridContainer: FC = ({ children }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            {children}
        </Grid>
    );
};

export default CardsGridContainer;
