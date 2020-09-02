import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        width: 418
    },
    img: {
        width: 'inherit',
        height: 324,
        marginBottom: '1.3125rem',
        objectFit: 'cover'
    },
    title: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
        marginBottom: '0.5rem'
    },
    subTitle: {
        fontSize: '1.125rem',
        lineHeight: '1.5625rem',
        color: '#5F5F5F'
    }
})

type ImageCardProps = {
    img: string;
    title: string;
    subTitle: string;
    rootClassName?: string
}

const ImageCard: FC<ImageCardProps> = ({ img, title, subTitle, rootClassName }) => {
    const classes = useStyles()
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <img src={img} alt="preview" className={classes.img} />
            <Typography className={classes.title}>{title}</Typography>
            <Typography className={classes.subTitle}>{subTitle}</Typography>
        </Grid>
    )
}

export default memo(ImageCard)