import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';
import SkillChip from './SkillsChip';

const useStyles = makeStyles({
    details: {
        width: '55.375rem',
    },
    detailsText: {
        fontSize: '2.625rem',
    },
    inputLabel: {
        display: 'inline-block',
        marginTop: '1.9375rem',
        fontSize: '1.5625rem',
        font: 'normal normal normal 25px/30px CircularXXSub-RegularSubset',
        marginBottom: '0',
    },
    btnContainer: {
        display: 'inline-block',
        transform: 'translateX(40rem)',
    },
    infoText: {
        fontSize: '2.265rem',
        width: '23.81rem',
        lineHeight: 1,
        marginTop: '0.5625rem',
    },
    hr: {
        marginTop: '2.5rem',
    },
    inputBox: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        fontSize: '2.625rem',
        font: 'normal normal normal 42px/30px CircularXXWeb',
        letterSpacing: '0px',
        height: '3.19rem',

        '&:focus': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
        '&:active': {
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid rgba(0,0,0, 0.25 )',
        },
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '2.6875rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginBottom: '6.0625rem',
    },

    chipContainer: {
        marginTop: '3.1875rem',
    },
});

const Skills = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.details}>
                <div className={classes.detailsText}>Skills</div>
                <label htmlFor="skills" className={classes.inputLabel}>
                    Add new
                </label>
                <input type="text" id="skills" className={classes.inputBox}></input>
            </div>
            <div className={classes.chipContainer}>
                <SkillChip skill="Maths" />
                <SkillChip skill="Computer Science" />
                <SkillChip skill="English" />
                <SkillChip skill="Languages" />
                <SkillChip skill="Project Management" />
                <SkillChip skill="Multilingual" />
                <SkillChip skill="Japanese" />
            </div>
        </div>
    );
};

export default Skills;
