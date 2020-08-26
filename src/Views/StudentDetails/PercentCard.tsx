import React from 'react';
import { Typography } from '@material-ui/core';

interface props{
    heading?:string;
    percent?:string;
    title?:string;
}
const PercentCard: React.FunctionComponent<props> = ({heading, percent, title}) => {
    return (
        <div className="percentage__card bg-white">
            <Typography className="heading">{heading}</Typography>
            <Typography className="percent">{percent}</Typography>
            <Typography className="title">{title}</Typography>

        </div>
    );
}

export default PercentCard;
