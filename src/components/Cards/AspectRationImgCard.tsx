import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const useStyles = makeStyles({
    root: {
        height: 'fit-content',
        position: 'relative',
        paddingTop: ({ ratio }: any) => ratio,
        '& span, img': {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
        },
    },
});

interface IAspectRatioImgCard {
    ratio: string;
    img: string;
    alt?: string;
    rootClassName?: string;
}

const AspectRatioImgCard: FC<IAspectRatioImgCard> = ({
    ratio,
    img,
    alt = 'preview',
    rootClassName,
}) => {
    const classes = useStyles({ ratio });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <LazyLoadImage effect="blur" src={img} alt={alt} />
        </Grid>
    );
};

export default AspectRatioImgCard;
