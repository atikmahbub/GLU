import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: ({ padding }: any) => (padding ? '9.375rem 3.125rem' : 0),
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
        paddingTop: ({ paddingTop, paddingTopVariant }: any) =>
            paddingTop ? (paddingTopVariant === 1 ? '9.375rem' : '6.25rem') : 0,
        paddingBottom: ({ paddingBottomVariant }: any) => (paddingBottomVariant === 1 ? '9.375rem' : '6.25rem'),
    },
});

interface ICardsGridContainer {
    background?: 'primary' | 'secondary';
    rootClassName?: string;
    padding?: boolean;
    paddingTop?: boolean;
    paddingTopVariant?: 1 | 2;
    paddingBottomVariant?: 1 | 2;
}

const CardsGridContainer: FC<ICardsGridContainer> = ({
    background,
    rootClassName,
    padding,
    paddingTop,
    paddingTopVariant,
    paddingBottomVariant,
    children,
}) => {
    const classes = useStyles({ background, padding, paddingTop, paddingTopVariant, paddingBottomVariant });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            {children}
        </Grid>
    );
};

CardsGridContainer.defaultProps = {
    background: 'primary',
    padding: true,
    paddingTop: true,
    paddingTopVariant: 1,
    paddingBottomVariant: 1,
};

export default CardsGridContainer;
