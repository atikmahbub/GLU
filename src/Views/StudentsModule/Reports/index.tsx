import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import ChartInfo from './ChartInfo';

const Reports: FC = () => {
    return (
        <Grid container direction="column">
            <ChartInfo />
        </Grid>
    )
}

export default Reports
