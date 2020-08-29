import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ScheduleCard from './ScheduleCard';

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        paddingTop: '2.0625rem',
    },
    section: {
        padding: '0 1.5625rem',
        borderRight: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderRight: 'none',
        },
    },
    text: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
    },
});

type ScheduleProps = {
    title: string;
    time: string;
}

const Schedule: FC<ScheduleProps> = ({ title, time }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={6} justify="space-between" className={classes.section}>
                <Typography className={classes.text}>{title}</Typography>
                <Typography className={classes.text}>{time}</Typography>
            </Grid>
            <Grid container item xs={6} className={classes.section}>
                <ScheduleCard
                    title="English"
                    description="How to structure"
                    date="29/07/20"
                    timeStart="9am"
                    timeEnd="10.15am"
                    duration="45min"
                    author="Ray Smith"
                />
                <ScheduleCard
                    title="Biology"
                    description="Natural selection and"
                    date="29/07/20"
                    timeStart="11am"
                    timeEnd="12.30am"
                    duration="45min"
                    author="Steve Max"
                />
                <ScheduleCard
                    title="English."
                    date="29/07/20"
                    timeStart="3pm"
                    timeEnd="4pm"
                    duration="45min"
                    author="Frank Hisbury"
                />
            </Grid>
        </Grid>
    );
};

export default memo(Schedule);
