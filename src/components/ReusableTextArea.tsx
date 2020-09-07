import React from 'react';
import { makeStyles, TextareaAutosize } from '@material-ui/core';

interface props {
    noOfRows: number;
}

const useStyles = makeStyles({
    textareaClass: {
        backgroundAttachment: 'local',
        backgroundImage:
            'linear-gradient(to right, white 0px, transparent 0px),linear-gradient(to left, white 0px, transparent 0px),repeating-linear-gradient(white, white 3rem, #ccc 3rem, #ccc 3.0625rem, white 3.0625rem)',
        lineHeight: '3rem',
        padding: '0rem 1rem',
        border: 'none',
        width: '90%',
        height: '15.385rem',
        color: '#505050',
        fontSize: '1.5rem',
    },
});

const ReusableTextArea: React.FunctionComponent<props> = ({ noOfRows }) => {
    const classes = useStyles();

    return (
        <div>
            <TextareaAutosize rowsMin={noOfRows} className={classes.textareaClass} />
        </div>
    );
};

export default ReusableTextArea;
