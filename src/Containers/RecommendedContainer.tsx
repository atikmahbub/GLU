import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ImageCard, { IImageCard } from '../components/Cards/ImageCard';
import { colors } from '../Styles/colors';
import CardsGrid from './CardsGrid';

const useStyles = makeStyles({
    root: {
        marginBottom: '8.125rem'
    },
    titleContainer: {
        marginBottom: '1.875rem'
    },
    title: {
        fontSize: '2.625rem',
        lineHeight: '1.875rem'
    },
    seeAll: {
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        color: colors.primary,
        cursor: 'pointer'
    },
    imageContainerRoot: {
        marginRight: '3.125rem',
        '&:last-child': {
            marginRight: 0
        }
    }
})

type BottomRecommendedContainerProps = {
    title: string;
    data: IImageCard[];
}

const RecommendedContainer: FC<BottomRecommendedContainerProps> = ({ title, data }) => {
    const classes = useStyles()
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.seeAll}>See all</Typography>
            </Grid>
            <CardsGrid>
                {data.map((card, index) => {
                    return (
                        <ImageCard
                            {...card}
                            key={index}
                            rootClassName={classes.imageContainerRoot}
                        />
                    )
                })}
            </CardsGrid>
        </Grid>
    )
}

RecommendedContainer.defaultProps = {
    data: []
}

export default memo(RecommendedContainer)
