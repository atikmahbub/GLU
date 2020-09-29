import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DateSubjectCard from './DateSubjectCard';
import AspectRatioImgCard from './AspectRationImgCard';
import { CarouselClassCardElement } from './types';

const useStyles = makeStyles({
    root: {
        paddingBottom: '5rem',
    },
    imgContainer: {
        marginBottom: '4.3125rem',
    },
});

interface IClassCard extends CarouselClassCardElement {}

const ClassCard: FC<IClassCard> = ({ img, ...dateSubjectCard }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="flex-end">
                <Grid item xs={6} className={classes.imgContainer}>
                    <AspectRatioImgCard
                        img={img}
                        ratio="77%"
                    />
                </Grid>
            </Grid>
            <DateSubjectCard {...dateSubjectCard} />
        </Grid>
    );
};

export default ClassCard;
