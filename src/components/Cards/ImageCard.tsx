import React, { FC, memo } from 'react';
import { ScrollPosition } from 'react-lazy-load-image-component';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AspectRatioImgCard from './AspectRationImgCard';
import IconCircle from '../Icons/IconCircle';
import RatingCard from './RatingCard';
import { ImageCardElement } from './types';

const useStyles = makeStyles({
    imgContainer: {
        marginBottom: '1.3125rem',
    },
    title: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: ({ titleMarginBottomVariant }: any) => (titleMarginBottomVariant === 1 ? '0.5rem' : '1rem'),
        whiteSpace: 'pre-wrap',
        width: 'fit-content',
        color: '#000',
        cursor: ({ onTitleClick, titleLinkTo }: any) => (onTitleClick || titleLinkTo ? 'pointer' : 'auto'),
        '&:hover': {
            textDecoration: ({ onTitleClick, titleLinkTo }: any) =>
                onTitleClick || titleLinkTo ? 'underline' : 'auto',
            color: '#000',
        },
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
    subTitleSecondary: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        color: '#000',
    },
    dateTime: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '1.5625rem',
        whiteSpace: 'pre-wrap',
        width: 'fit-content',
        color: '#000',
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
    onTitleClick?: (id: number | string) => void;
    subTitleVariant?: 1 | 2;
    titleMarginBottomVariant?: 1 | 2;
    scrollPosition?: ScrollPosition;
}

const ImageCard: FC<IImageCard> = ({
    id = '',
    img,
    imgAspectRatio = '77%',
    title,
    subTitle,
    date,
    time,
    bigTitle,
    rating,
    titleLinkTo = '',
    rootClassName,
    subTitleVariant,
    titleMarginBottomVariant,
    onTitleClick,
    scrollPosition,
}) => {
    const classes = useStyles({ imgAspectRatio, titleMarginBottomVariant, titleLinkTo, onTitleClick: !!onTitleClick });

    const handleClick = () => {
        if (onTitleClick) {
            onTitleClick(id);
        }
    };

    return (
        <Grid container direction="column" className={rootClassName}>
            <AspectRatioImgCard
                img={img}
                ratio={imgAspectRatio}
                rootClassName={classes.imgContainer}
                scrollPosition={scrollPosition}
            />
            {date && time && (
                <Typography className={classes.dateTime}>
                    <IconCircle small />
                    {getDateTime(date, time)}
                </Typography>
            )}
            <Typography
                className={classNames(classes.title, {
                    [classes.titleBig]: bigTitle,
                })}
                onClick={handleClick}
                component={titleLinkTo ? Link : 'p'}
                to={`${titleLinkTo + id}`}
            >
                {title}
            </Typography>
            <Typography
                className={classNames(classes.subTitle, {
                    [classes.subTitleSecondary]: subTitleVariant === 2,
                })}
            >
                {rating && <RatingCard rating={rating} />}
                {subTitle}
            </Typography>
        </Grid>
    );
};

ImageCard.defaultProps = {
    subTitleVariant: 1,
    titleMarginBottomVariant: 1,
};

export default memo(ImageCard);
