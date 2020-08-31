import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import StudentsPageContainer from '../StudentsPageContainer';
import ChartInfo from './ChartInfo';

const Reports: FC = () => {
    return (
        <StudentsPageContainer>
            <Grid container direction="column">
                <ChartInfo />
            </Grid>
        </StudentsPageContainer>
    );
};

export default Reports;
