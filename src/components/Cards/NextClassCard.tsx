import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import { NextClassCardElement } from './types';
import DateSubjectCard from './DateSubjectCard';
import AspectRatioImgCard from './AspectRationImgCard';

const useStyles = makeStyles({
    root: {
        padding: '5.3125rem 3.125rem',
    },
    imgWrapper: {
        paddingRight: '9.375rem',
        paddingLeft: '3.125rem',
    },
});

interface INextClassCard extends NextClassCardElement {}

const NextClassCard: FC<INextClassCard> = ({ img, date, startTime, endTime, subject, description, subTitle, name }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={2}>
                <TitlePrimary>Next Class</TitlePrimary>
            </Grid>
            <Grid container item xs={4} className={classes.imgWrapper}>
                <AspectRatioImgCard
                    img={img}
                    ratio="77%"
                />
            </Grid>
            <Grid container direction="column" item xs={5}>
                <DateSubjectCard
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                    subject={subject}
                    description={description}
                    subTitle={subTitle}
                    name={name}
                />
            </Grid>
            <Grid container justify="flex-end" item xs={1}>
            </Grid>
        </Grid>
    );
};

export default memo(NextClassCard);
