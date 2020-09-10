import React from 'react';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';

const useStyles = makeStyles({
    details: {
        width: '55.375rem',
    },
    detailsText: {
        fontSize: '2.265rem',
    },
    labelText: {
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
});

const Education = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.details}>
                <div className={classes.detailsText}>Experience</div>
                <div className={classes.labelText}>2018-Now</div>
                <div className={classes.btnContainer}>
                    <SmallTextButton text="Edit" />
                    <div style={{ marginLeft: '2rem', display: 'inline-block' }}>
                        <SmallTextButton text="Delete" />
                    </div>
                </div>
                <div className={classes.infoText}>GEMS Intl School Head of Department Geography</div>
            </div>
            <hr className={classes.hr} />
            <div>
                <div className={classes.labelText}>2015-2018</div>
                <div className={classes.btnContainer}>
                    <SmallTextButton text="Edit" />
                    <div style={{ marginLeft: '2rem', display: 'inline-block' }}>
                        <SmallTextButton text="Delete" />
                    </div>
                </div>
                <div className={classes.infoText}>GEMS Intl School Head of Department Geography</div>
                <div className={classes.upload}>Upload</div>
            </div>
        </div>
    );
};

export default Education;
