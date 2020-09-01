import React, { FC, ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        borderTop: '1px solid rgba(0, 0, 0, 0.25)',
        paddingTop: '2.0625rem',
    },
    section: {
        padding: '0 1.5625rem',
        borderRight: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderRight: 'none',
        },
    }
})

type ColumnsContainerProps = {
    leftContent: ReactNode;
    rightContent: ReactNode;
}

const ColumnsContainer: FC<ColumnsContainerProps> = ({ leftContent, rightContent }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid container item xs={6} className={classes.section}>
                {leftContent}
            </Grid>
            <Grid container item xs={6} className={classes.section}>
                {rightContent}
            </Grid>
        </Grid>
    )
}

export default ColumnsContainer
