import React from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import commonImg from '../../Assets/images';
import { FiberManualRecord } from '@material-ui/icons';
import ViewerOverlay from './ViewerOverlay';
import SmallImageText from './SmallImageText';
import ListSession from './ListSession';

const useStyle = makeStyles(() => ({
    rootParent: {
        borderLeft: '1px solid #e7e7e7',
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    heading: {
        fontSize: '3.125rem',
        lineHeight: '3.125rem',
        color: '#000',
        width: '30rem',
        marginTop: '2rem',
        marginBottom: '4rem',
    },
    icon: {
        fontSize: '1rem',
        marginBottom: '0.5rem',
        marginRight: '1rem',
    },
    mediumImg: {
        width: '15.937rem',
        maxHeight: '12.187rem',
        marginRight: '2rem',
    },
    mediumTitle: {
        fontSize: '1.875rem',
        lineHeight: '1.875rem',
        color: '#000',
    },
    mediumSmallTitle: {
        fontSize: '1.25rem',
        color: '#5F5F5F',
    },
    mediumSubTitle: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
    },
    mediumBottomText: {
        fontSize: '1.562rem',
        lineHeight: '1.562rem',
        color: '#000',
        marginTop: '4rem',
    },
}));
const SessionRightPart = () => {
    const classes = useStyle();
    return (
        <Box component="div" className={classes.rootParent}>
            <Typography className={classes.heading}>24th July 2020 Friday</Typography>
            <SmallImageText
                imgwidth="15.937rem"
                imgHeight="12.187rem"
                fontSize="1.875rem"
                titleFontSize="1.25rem"
                marginTop="4rem"
            />
            <ViewerOverlay mt='2rem'/>
            <ListSession />
        </Box>
    );
};

export default SessionRightPart;
