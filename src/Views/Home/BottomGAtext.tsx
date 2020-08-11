import React from 'react';
import { Typography } from '@material-ui/core';
import { Icons } from '../../Assets/Icons';

const BottomGAtext: React.FunctionComponent = () => {
    return (
        <div className="ga-text-container">
            <img className="apple-icon" src={Icons.appleBlack} alt="" />
            <img className="google-icon" src={Icons.googleBlack} alt="" />
            <Typography className="title">Coming to App Store and Google Play</Typography>
        </div>
    );
};

export default BottomGAtext;
