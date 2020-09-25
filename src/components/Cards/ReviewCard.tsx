import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextPrimary from '../Typographies/TextPrimary';
import RatingCard from './RatingCard';

const useStyles = makeStyles({
    title: {
        marginBottom: '1.5625rem',
    },
    text: {
        color: '#5F5F5F',
    },
});

const ReviewCard: FC = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <TextPrimary className={classes.title}>
                Jonathan Holmes
                <br />
                <RatingCard rating="2/5" />
            </TextPrimary>
            <TextPrimary className={classes.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </TextPrimary>
        </Grid>
    );
};

export default memo(ReviewCard);
