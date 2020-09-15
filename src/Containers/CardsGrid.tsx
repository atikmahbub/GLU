import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: ({ rows }: any) => rows === 4 ? '1fr 1fr 1fr 1fr' : '1fr 1fr',
        gap: '4.6875rem 3.125rem',
    }
})

interface ICardsGrid {
    rows?: 4 | 2;
}

const CardsGrid: FC<ICardsGrid> = ({ children, rows }) => {
    const classes = useStyles({ rows })
    return (
        <Grid container className={classes.root}>
            {children}
        </Grid>
    )
}

CardsGrid.defaultProps = {
    rows: 4
}

export default CardsGrid
