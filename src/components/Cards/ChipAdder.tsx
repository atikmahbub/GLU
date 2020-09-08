import React from 'react';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import InputWithLabel from '../Inputs/InputWithLabel';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        width: '100%',
        marginTop: '1rem',
    },
    titleBox: {
        width: 'auto',
        padding: '0.5rem',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
        border: `1px solid ${colors.lightGray}`,
        marginTop: '1rem',
    },
    title: {
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        fontWeight: 500,
        color: colors.black,
    },
});

interface props {
    fieldName?: string;
}
const ChipAdder: React.FunctionComponent<props> = ({ fieldName }) => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.parent}>
            <InputWithLabel fieldName={fieldName} />
            <Grid container alignItems="center" justify="flex-start">
                <Box component="div" className={classes.titleBox}>
                    <Typography className={classes.title}>Maths</Typography>
                </Box>
                <Box component="div" className={classes.titleBox}>
                    <Typography className={classes.title}>Computer Science</Typography>
                </Box>
                <Box component="div" className={classes.titleBox}>
                    <Typography className={classes.title}>English</Typography>
                </Box>
            </Grid>
        </Box>
    );
};

export default ChipAdder;
