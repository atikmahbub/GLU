import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import MathsReport from './MathsReport';

const ChartInfo: FC = () => {
    return (
        <Grid container>
            <MathsReport />
            <Grid item xs={6}>
                2
            </Grid>
        </Grid>
    )
}

export default memo(ChartInfo)
