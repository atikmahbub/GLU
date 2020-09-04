import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    parent: {
        width: '100%',
    },
    label: {
        fontSize: '1.562rem',
        lineHeight: '1.875rem',
        color: colors.darkGray,
        marginTop: '2rem',
    },
    textarea: {
        width: '100%',
        border: `1px solid ${colors.lightGray}`,
        marginTop: '2rem',
        fontSize: '1.562rem',
    },
});
interface props {
    label?: string;
    rows?: number;
    cols?: number;
}
const TextAreaWithLabel: React.FC<props> = ({ label, rows, cols }) => {
    const classes = useStyles();
    return (
        <Box className={classes.parent}>
            <Typography className={classes.label}>{label}</Typography>
            <textarea className={classes.textarea} rows={rows} cols={cols} />
        </Box>
    );
};

export default TextAreaWithLabel;
