import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem'
    },
    subTitle: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem'
    },
    percentSmall: {
        position: 'relative',
        top: '-0.7em'
    }
})

const PercentCard: FC = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container>
                <Typography className={classes.title}>
                    54%
                    <sup className={classNames(classes.subTitle, classes.percentSmall)}>+3%</sup>
                </Typography>
            </Grid>
            <Typography className={classes.subTitle}>Your average</Typography>
        </Grid>
    )
}

export default memo(PercentCard)
