import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LineChart from '../../../../components/Charts/LineChart';
import PercentCard from './PercentCard';

const useStyles = makeStyles({
    title: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem'
    },
    titleBig: {
        fontSize: '5rem',
        lineHeight: '5rem'
    }
})

const ChartInfo: FC = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h4" className={classes.title}>Maths Report</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h2" className={classes.titleBig}>Overall Average</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <PercentCard />
                </Grid>
                <Grid item xs={6}>
                    <LineChart />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(ChartInfo);
