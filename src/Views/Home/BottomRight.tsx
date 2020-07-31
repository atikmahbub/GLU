import React from 'react';
import { Typography } from '@material-ui/core';
import { Apple } from '@material-ui/icons';
import { Icons } from '../../Assets/Icons';

const BottomRight: React.FunctionComponent = () => {
    return (
        <div className="bottom-right-container">
            <Typography className="title">Coming to App Store and Google Play</Typography>
            <Apple className="apple-icon" />
            <img className="google-icon" src={Icons.googleIconWhite} alt="" />
        </div>
    );
};

export default BottomRight;
