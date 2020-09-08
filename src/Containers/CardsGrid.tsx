import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '4.6875rem 3.125rem',
    }
})

const CardsGrid: FC = ({ children }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            {children}
        </Grid>
    )
}

export default CardsGrid
