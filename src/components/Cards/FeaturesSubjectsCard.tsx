import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SeeAll from '../Typographies/SeeAll';
import CardsGrid from '../../Containers/CardsGrid';
import ImageCard from './ImageCard';
import { FeaturedSubjectCardElement } from './types';

const useStyles = makeStyles({
    root: {
        padding: '8.4375rem 3.125rem',
        background: '#F7F7F7',
    },
    titleContainer: {
        marginBottom: '1.875rem',
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem',
    },
});

interface IFeaturedSubjectsCard extends FeaturedSubjectCardElement {}

const FeaturedSubjectsCard: FC<IFeaturedSubjectsCard> = ({ imgBig, imgBigTitle, imgSmall, imgSmallTitle }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>Featured Subjects</Typography>
                <SeeAll to="/" />
            </Grid>
            <CardsGrid rows={2}>
                <ImageCard
                    bigTitle
                    imgAspectRatio="112%"
                    title={imgBigTitle}
                    img={imgBig}
                />
                <ImageCard
                    bigTitle
                    imgAspectRatio="69%"
                    title={imgSmallTitle}
                    img={imgSmall}
                />
            </CardsGrid>
        </Grid>
    );
};

export default memo(FeaturedSubjectsCard);
