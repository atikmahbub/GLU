import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

function getGridTemplateColumns(rows: number | string): string {
    switch (rows) {
        case 4:
            return '1fr 1fr 1fr 1fr'
        case 2:
            return '1fr 1fr'
        case '1/2':
            return '2fr 1fr 1fr'
        default:
            return '1fr 1fr 1fr 1fr'
    }
}

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: ({ rows }: any) => getGridTemplateColumns(rows),
        gap: '4.6875rem 3.125rem',
    }
})

interface ICardsGrid {
    rows?: 4 | 2 | '1/2';
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
