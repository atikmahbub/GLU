import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    imgContainer: {
        width: 'inherit',
        paddingTop: '77%',
        marginBottom: '1.3125rem',
        position: 'relative',
    },
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    title: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '0.5rem',
        whiteSpace: 'pre-wrap',
        width: 'fit-content'
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
});

export interface IImageCard {
    img: string;
    title: string;
    subTitle: string;
    bigTitle?: boolean;
    rootClassName?: string;
}

const ImageCard: FC<IImageCard> = ({ img, title, subTitle, bigTitle, rootClassName }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={rootClassName}>
            <Grid container className={classes.imgContainer}>
                <img src={img} alt="preview" className={classes.img} />
            </Grid>
            <Typography
                className={classNames(classes.title, {
                    [classes.titleBig]: bigTitle,
                })}
            >
                {title}
            </Typography>
            <Typography className={classes.subTitle}>{subTitle}</Typography>
        </Grid>
    );
};

export default memo(ImageCard);
