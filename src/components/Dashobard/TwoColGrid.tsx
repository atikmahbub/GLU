import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        padding: '4.062rem 3.437rem',
        backgroundColor: colors.white,
        height: '88vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    title: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        fontWeight: 500,
        color: colors.black,
    },
});

interface props {
    titleOne?: string;
    children?: React.ReactNode;
}
const TwoColGrid: React.FunctionComponent<props> = ({ titleOne, children }) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.parent}>
            <Grid item xs={12} md={4}>
                <Typography className={classes.title}>{titleOne}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                {children}
            </Grid>
        </Grid>
    );
};

export default TwoColGrid;
