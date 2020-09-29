import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGrid from './CardsGrid';

const useStyles = makeStyles({
    root: {
        borderTop: ({ topBorder }: any) => (topBorder ? '1px solid rgba(0, 0, 0, 0.25)' : 0),
        paddingTop: ({ topBorder }: any) => (topBorder ? '3.125rem' : 0),
    },
    section: {
        padding: '0',
        borderRight: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderRight: 'none',
        },
        '&:first-child': {
            paddingRight: '3.125rem',
        }
    },
    sectionRight: {
        position: 'relative',
        top: ({ rightContentPaddingTop }: any) => (rightContentPaddingTop ? 0 : '-2.5rem'),
    },
});

interface IColumnsContainer {
    leftContent: ReactNode;
    rightContent: ReactNode;
    rightContentPaddingTop?: boolean;
    rootClassName?: string;
    topBorder?: boolean;
}

const ColumnsContainer: FC<IColumnsContainer> = ({
    leftContent,
    rightContent,
    rightContentPaddingTop,
    rootClassName,
    topBorder,
}) => {
    const classes = useStyles({ rightContentPaddingTop, topBorder });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <CardsGrid rows={2}>
                <Grid container className={classes.section}>
                    {leftContent}
                </Grid>
                <Grid container className={classNames(classes.section, classes.sectionRight)}>
                    {rightContent}
                </Grid>
            </CardsGrid>
        </Grid>
    );
};

ColumnsContainer.defaultProps = {
    topBorder: true,
    rightContentPaddingTop: true,
};

export default ColumnsContainer;
