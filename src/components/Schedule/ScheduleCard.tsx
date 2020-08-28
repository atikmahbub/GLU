import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        paddingBottom: '4.625rem',
        fontWeight: 400,
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        marginBottom: '2.5rem',
        '&:last-child': {
            borderBottom: 'none',
            marginBottom: 0,
        },
    },
    section: {
        padding: '0.625rem',
    },
    text: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
    },
    textSmall: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
});

type ScheduleCard = {
    date: string;
    timeStart: string;
    timeEnd: string;
    title: string;
    description?: string;
    duration: string;
    author: string;
};

const ScheduleCard: FC<ScheduleCard> = ({ date, timeStart, timeEnd, title, description, duration, author }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container>
                <Grid container direction="column" item xs={4}>
                    <Typography className={classes.text}>{date}</Typography>
                    <Typography className={classes.text}>{timeStart}-</Typography>
                    <Typography className={classes.text}>{timeEnd}</Typography>
                </Grid>
                <Grid container direction="column" item xs={8}>
                    <Typography className={classes.text}>{title}</Typography>
                    {description && <Typography className={classes.text}>{description}</Typography>}
                </Grid>
            </Grid>
            <Grid container>
                <Grid container item xs={4}>
                    <Typography className={classes.textSmall}>{duration}</Typography>
                </Grid>
                <Grid container item xs={4}>
                    <Typography className={classes.textSmall}>{author}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default memo(ScheduleCard);
