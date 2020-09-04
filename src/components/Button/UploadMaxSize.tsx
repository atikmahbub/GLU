import React from 'react';
import OutlineButton from './OutlineButton';
import { Typography, makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStlyes = makeStyles({
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth:'18rem',
        marginTop:'2rem'
    },
    maxSize: {
        fontSize: '1rem',
        color: colors.black,
    },
});
const UploadMaxSize = () => {
    const classes = useStlyes();
    return (
        <div className={classes.parent}>
            <OutlineButton text="Upload" />
            <Typography className={classes.maxSize}>Max file size 5MB</Typography>
        </div>
    );
};

export default UploadMaxSize;
