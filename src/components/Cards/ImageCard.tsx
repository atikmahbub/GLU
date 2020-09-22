import React, { FC, memo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import IconCircle from '../Icons/IconCircle';
import { ImageCardElement } from './types';
import RatingCard from './RatingCard';

const useStyles = makeStyles({
    imgContainer: {
        marginBottom: '1.3125rem',
    },
    title: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '0.5rem',
        whiteSpace: 'pre-wrap',
        width: 'fit-content',
        color: '#000',
        '&:hover': {
            color: '#000'
        }
    },
    titleBig: {
        fontSize: '2.625rem',
        lineHeight: '2.8125rem',
    },
    subTitle: {
        fontSize: '1.125rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F',
    },
    dateTime: {
        marginBottom: '1.5625rem',
        display: 'flex',
        alignItems: 'center',
    },
});

function getDateTime(date: string, time: string): string {
    return `${date} - ${time}`;
}

export interface IImageCard extends ImageCardElement {
    bigTitle?: boolean;
    imgAspectRatio?: string;
    rootClassName?: string;
    titleLinkTo?: string;
}

const ImageCard: FC<IImageCard> = ({
    img,
    imgAspectRatio = '77%',
    title,
    subTitle,
    date,
    time,
    bigTitle,
    rating,
    titleLinkTo,
    rootClassName,
}) => {
    const classes = useStyles({ imgAspectRatio });
    return (
        <Grid container direction="column" className={rootClassName}>
            <AspectRatioImgCard img={img} ratio={imgAspectRatio} rootClassName={classes.imgContainer} />
            {date && time && (
                <Typography className={classNames(classes.title, classes.dateTime)}>
                    <IconCircle small />
                    {getDateTime(date, time)}
                </Typography>
            )}
            <Typography
                className={classNames(classes.title, {
                    [classes.titleBig]: bigTitle,
                })}
                component={titleLinkTo ? Link : 'p'}
                to={titleLinkTo}
            >
                {title}
            </Typography>
            <Typography className={classes.subTitle}>
                {rating && <RatingCard rating={rating} />}
                {subTitle}
            </Typography>
        </Grid>
    );
};

export default memo(ImageCard);
