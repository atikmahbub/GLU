import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem',
        background: ({ background }: any) => background === 'primary' ? '#fff' : '#F7F7F7',
        paddingTop: ({ paddingTop }: any) => paddingTop ? '9.375rem' : 0
    },
});

interface ICardsGridContainer {
    background?: 'primary' | 'secondary';
    rootClassName?: string;
    paddingTop?: boolean;
}

const CardsGridContainer: FC<ICardsGridContainer> = ({ background, rootClassName, paddingTop, children }) => {
    const classes = useStyles({ background, paddingTop });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            {children}
        </Grid>
    );
};

CardsGridContainer.defaultProps = {
    background: 'primary',
    paddingTop: true
}

export default CardsGridContainer;
