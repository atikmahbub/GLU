import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        paddingTop: '3.125rem',
    },
    section: {
        padding: '0',
        borderRight: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderRight: 'none',
        },
    },
    sectionRight: {
        position: 'relative',
        top: ({ rightContentPaddingTop }: any) => (rightContentPaddingTop ? 0 : '-2.5rem'),
    },
    sectionLeftPadding: {
        paddingLeft: '3.125rem',
    },
});

type ColumnsContainerProps = {
    leftContent: ReactNode;
    rightContent: ReactNode;
    rightContentPaddingTop?: boolean;
    rootClassName?: string;
};

const ColumnsContainer: FC<ColumnsContainerProps> = ({
    leftContent,
    rightContent,
    rightContentPaddingTop,
    rootClassName,
}) => {
    const classes = useStyles({ rightContentPaddingTop });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <Grid container item xs={6} className={classes.section}>
                {leftContent}
            </Grid>
            <Grid
                container
                item
                xs={6}
                className={classNames(classes.section, classes.sectionRight, classes.sectionLeftPadding)}
            >
                {rightContent}
            </Grid>
        </Grid>
    );
};

ColumnsContainer.defaultProps = {
    rightContentPaddingTop: true,
};

export default ColumnsContainer;
