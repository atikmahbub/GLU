import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: '2.25rem 3.125rem',
    },
    text: {
        cursor: 'pointer',
        fontSize: '1rem',
        marginRight: '3.125rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    textGrey: {
        color: '#5F5F5F',
    },
});

const PageFooter: FC = () => {
    const classes = useStyles();
    return (
        <Grid container justify="space-between" className={classes.root}>
            <Grid item container xs={6}>
                <Typography className={classes.text}>
                    Made by <span className={classes.textGrey}>Six</span>
                </Typography>
                <Typography className={classes.text}>
                    Build by <span className={classes.textGrey}>Someone</span>
                </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={6}>
                <Typography className={classes.text}>Help</Typography>
                <Typography className={classes.text}>Glu 2020</Typography>
            </Grid>
        </Grid>
    );
};

export default memo(PageFooter);
