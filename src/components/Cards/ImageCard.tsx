import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import IconCircle from '../Icons/IconCircle';
import { ImageCardElement } from './types';

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
    iconStar: {
        fontSize: '0.85rem',
    },
});

function getDateTime(date: string, time: string): string {
    return `${date} - ${time}`;
}

export interface IImageCard extends ImageCardElement {
    bigTitle?: boolean;
    imgAspectRatio?: string;
    rootClassName?: string;
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
            >
                {title}
            </Typography>
            <Typography className={classes.subTitle}>
                {rating && (
                    <span>
                        <i className={classNames('icon-Star_3', classes.iconStar)} />
                        &nbsp;
                        {rating}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                )}
                {subTitle}
            </Typography>
        </Grid>
    );
};

export default memo(ImageCard);
