import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ImageCard from '../components/Cards/ImageCard';
import { colors } from '../Styles/colors';

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
    data: object[];
}

const BottomRecommendedContainer: FC<BottomRecommendedContainerProps> = ({ title, data }) => {
    const classes = useStyles()
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <Typography className={classes.title}>{title}</Typography>
                <Typography className={classes.seeAll}>See all</Typography>
            </Grid>
            <Grid container>
                {data.map(({ img, title, subTitle }: any, index) => {
                    return (
                        <ImageCard
                            key={index}
                            img={img}
                            title={title}
                            subTitle={subTitle}
                            rootClassName={classes.imageContainerRoot}
                        />
                    )
                })}
            </Grid>
        </Grid>
    )
}

BottomRecommendedContainer.defaultProps = {
    data: []
}

export default memo(BottomRecommendedContainer)
