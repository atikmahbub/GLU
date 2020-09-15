import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TitlePrimary from '../Typographies/TitlePrimary';
import TextBlue from '../Typographies/TextBlue';
import { NextClassCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: '5.3125rem 3.125rem',
    },
    imgWrapper: {
        paddingRight: '9.375rem',
        paddingLeft: '3.125rem'
    },
    imgContainer: {
        paddingTop: '77%',
        position: 'relative',
    },
    img: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    textContainer: {
        marginBottom: '0.625rem',
    },
    text: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
});

interface INextClassCard extends NextClassCardElement {}

const NextClassCard: FC<INextClassCard> = ({ img, date, startDate, endDate, subject, description, time, name }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={2}>
                <TitlePrimary>Next Class</TitlePrimary>
            </Grid>
            <Grid container item xs={4} className={classes.imgWrapper}>
                <Grid container item className={classes.imgContainer}>
                    <img
                        src={img}
                        alt="preview"
                        className={classes.img}
                    />
                </Grid>
            </Grid>
            <Grid container direction="column" item xs={5}>
                <Grid container className={classes.textContainer}>
                    <Grid container direction="column" item xs={6}>
                        <TitlePrimary>{date}</TitlePrimary>
                        <TitlePrimary>{startDate}-</TitlePrimary>
                        <TitlePrimary>{endDate}</TitlePrimary>
                    </Grid>
                    <Grid container direction="column" item xs={6}>
                        <TitlePrimary>{subject}</TitlePrimary>
                        <TitlePrimary>{description}</TitlePrimary>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container item xs={6}>
                        <Typography className={classes.text}>{time}</Typography>
                    </Grid>
                    <Grid container item xs={6}>
                        <Typography className={classes.text}>{name}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="flex-end" item xs={1}>
                <TextBlue>See</TextBlue>
            </Grid>
        </Grid>
    );
};

export default memo(NextClassCard);
