import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DateTimeCard from './DateTimeCard';
import TitlePrimary from '../Typographies/TitlePrimary';
import { DateSubjectCardElement } from './types';

const useStyles = makeStyles({
    textContainer: {
        marginBottom: '0.625rem',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
})

interface IDateSubjectCard extends DateSubjectCardElement {}

const DateSubjectCard: FC<IDateSubjectCard> = ({ date, subject, startTime, endTime, description, subTitle, name }) => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container className={classes.textContainer}>
                <Grid container direction="column" item xs={6}>
                    <DateTimeCard date={date} startTime={startTime} endTime={endTime} />
                </Grid>
                <Grid container direction="column" item xs={6}>
                    <TitlePrimary>{subject}</TitlePrimary>
                    <TitlePrimary>{description}</TitlePrimary>
                </Grid>
            </Grid>
            <Grid container>
                <Grid container item xs={6}>
                    <Typography className={classes.text}>{subTitle}</Typography>
                </Grid>
                <Grid container item xs={6}>
                    <Typography className={classes.text}>{name}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default memo(DateSubjectCard)
