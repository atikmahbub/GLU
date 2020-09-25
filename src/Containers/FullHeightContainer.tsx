import React, { FC } from 'react';
import { use100vh } from 'react-div-100vh';
import Grid, { GridProps } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        minHeight: ({ height }: any) => height,
    },
});

interface FullHeightContainer extends GridProps {}

const FullHeightContainer: FC<FullHeightContainer> = ({ children, ...props }) => {
    const height = use100vh();
    const classes = useStyles({ height });
    return (
        <Grid container direction="column" className={classes.root} {...props}>
            {children}
        </Grid>
    );
};

export default FullHeightContainer;
