import React, { FC, memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const MathsReport: FC = () => {
    return (
        <Grid item xs={6}>
            <Typography variant="h4">Maths Report</Typography>
        </Grid>
    )
}

export default memo(MathsReport)
