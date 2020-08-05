import React from 'react';
import { Typography } from '@material-ui/core';
import { Apple } from '@material-ui/icons';
import { Icons } from '../../Assets/Icons';

const BottomGAtext: React.FunctionComponent = () => {
    return (
        <div className="ga-text-container">
            <img className="google-icon" src={Icons.appleIcon} alt="" />
            <img className="google-icon" src={Icons.googleIconWhite} alt="" />
            <Typography className="title">Coming to App Store and Google Play</Typography>
        </div>
    );
};

export default BottomGAtext;
