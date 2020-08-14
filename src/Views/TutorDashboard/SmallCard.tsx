import React from 'react';
import { Typography } from '@material-ui/core';

const SmallCard: React.FunctionComponent = () => {
    return (
        <div className="small__card">
            <Typography className="heading">Statistics</Typography>
            <Typography className="title first__title"> Average Attendance</Typography>
            <Typography className="title">7/10 Spaces</Typography>
        </div>
    );
};

export default SmallCard;
