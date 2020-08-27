import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from './Card';
import LineChart from '../LineChart';

const useStyles = makeStyles({
    container: {
        marginBottom: '3.125rem',
    },
});

const School: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid container className={classes.container}>
                <Card
                    size={6}
                    title={'Class Reports\nMar-Aug'}
                    titleRightLink="See reports"
                    titleRightLinkTo="/students/"
                    content={<LineChart />}
                />
                <Card size={3} title="School Timetable" description="Classes" value="5" />
                <Card size={3} title="School Info" description="Secondary" value="Dubai, UAE" />
            </Grid>
            <Grid container className={classes.container}>
                <Card size={3} title="Homework" description="Assignment" value="34" />
                <Card size={3} title="Recommended" description="Total" value="12" />
                <Card
                    size={6}
                    bigTitle
                    title={'Thursday 30th\nJuly\n2020'}
                    titleRightLink="See calendar"
                    titleRightLinkTo="/students/"
                />
            </Grid>
        </Grid>
    );
};

export default School;
