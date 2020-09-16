import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem',
        background: ({ background }: any) => background === 'primary' ? '#fff' : '#F7F7F7'
    },
});

interface ICardsGridContainer {
    background?: 'primary' | 'secondary'
}

const CardsGridContainer: FC<ICardsGridContainer> = ({ background, children }) => {
    const classes = useStyles({ background });
    return (
        <Grid container className={classes.root}>
            {children}
        </Grid>
    );
};

CardsGridContainer.defaultProps = {
    background: 'primary'
}

export default CardsGridContainer;
