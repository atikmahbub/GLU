import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        height: 'fit-content',
        position: 'relative',
        paddingTop: ({ ratio }: any) => ratio,
    },
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    }
})

interface IAspectRatioImgCard {
    ratio: string;
    img: string;
    alt?: string;
    rootClassName?: string;
}

const AspectRatioImgCard: FC<IAspectRatioImgCard> = ({ ratio, img, alt = 'preview', rootClassName }) => {
    const classes = useStyles({ ratio })
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <img src={img} alt={alt} className={classes.img} />
        </Grid>
    )
}

export default memo(AspectRatioImgCard)
