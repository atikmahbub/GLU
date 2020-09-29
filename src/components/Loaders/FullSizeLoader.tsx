import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1000,
        backdropFilter: 'blur(2px)',
        top: 0,
        left: 0
    },
});

const FullSizeLoader: FC = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <CircularProgress />
        </Grid>
    );
};

export default memo(FullSizeLoader);
