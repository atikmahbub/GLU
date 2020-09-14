import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    chips: {
        display: 'inline-block',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        padding: '5px 16px 8px 10px',
        fontSize: '1.25rem',
        marginRight: '0.625rem',
        marginBottom: '0.625rem',
    },
});

interface props {
    skill: string;
}
const SkillsChip: React.FC<props> = ({ skill }) => {
    const classes = useStyles();

    return <div className={classes.chips}>{skill}</div>;
};

export default SkillsChip;
