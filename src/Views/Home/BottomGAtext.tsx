import React from 'react';
import { Typography } from '@material-ui/core';
import { Icons } from '../../Assets/Icons';

const BottomGAtext: React.FunctionComponent = () => {
    return (
        <div className="ga-text-container">
            <img className="icon" src={Icons.appleIcon} alt="" />
            <img className="google-icon" src={Icons.googleIconBlack} alt="" />
            <Typography className="title">Coming to App Store and Google Play</Typography>
        </div>
    );
};

export default BottomGAtext;