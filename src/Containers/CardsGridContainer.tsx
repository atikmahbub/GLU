import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: '9.375rem 3.125rem',
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
        paddingTop: ({ paddingTop, paddingTopVariant }: any) =>
            paddingTop ? (paddingTopVariant === 1 ? '9.375rem' : '6.25rem') : 0,
    },
});

interface ICardsGridContainer {
    background?: 'primary' | 'secondary';
    rootClassName?: string;
    paddingTop?: boolean;
    paddingTopVariant?: 1 | 2;
}

const CardsGridContainer: FC<ICardsGridContainer> = ({
    background,
    rootClassName,
    paddingTop,
    paddingTopVariant,
    children,
}) => {
    const classes = useStyles({ background, paddingTop, paddingTopVariant });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            {children}
        </Grid>
    );
};

CardsGridContainer.defaultProps = {
    background: 'primary',
    paddingTop: true,
    paddingTopVariant: 1,
};

export default CardsGridContainer;
