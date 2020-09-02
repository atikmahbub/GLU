import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        width: 'fit-content',
        height: 40,
        padding: '0 0.75rem',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        marginRight: '0.625rem',
        marginBottom: '0.625rem'
    }
})

type TagProps = {
    title: string;
}

const Tag: FC<TagProps> = ({ title }) => {
    const classes = useStyles()
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            {title}
        </Grid>
    )
}

export default memo(Tag)
