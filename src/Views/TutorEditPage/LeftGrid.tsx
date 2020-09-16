import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import SmallTextButton from './SmallTextButton';

const useStyles = makeStyles({
    headerText: {
        fontSize: '2.625rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    leftGrid: {
        // float: 'left',
        top: '8.4375',
        position: 'absolute',
        width: '985px',
    },
    confirm: {
        marginTop: '50.5625rem',
        display: 'inline-block',
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        border: '1.2px solid #A8A8A8',
        textAlign: 'center',
        paddingTop: '4.1px',
        paddingBottom: '8.99px',
        marginTop: '1.53125rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        marginRight: '1.875rem',
        fontFamily: 'CircularXXWeb-Book',
    },
});

const LeftGrid = () => {
    const classes = useStyles();

    return (
        <div className={classes.leftGrid}>
            <Typography className={classes.headerText}>Edit Profile</Typography>
            <div className={classes.confirm}>
                <div className={classes.upload}>Save Changes</div>
                <SmallTextButton text="Cancel" /> and go back
            </div>
        </div>
    );
};

export default LeftGrid;
