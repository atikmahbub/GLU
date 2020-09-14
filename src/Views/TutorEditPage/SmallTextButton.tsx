import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    btnText: {
        fontSize: '20px',
        color: '#5F5F5F',
        display: 'inline-block',
    },
});

interface props {
    text: string;
}
const SmallTextButton: React.FC<props> = ({ text }) => {
    const classes = useStyles();

    return <div className={classes.btnText}>{text}</div>;
};

export default SmallTextButton;
