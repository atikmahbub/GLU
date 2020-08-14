import React from 'react';
import { Typography } from '@material-ui/core';

const SmallCard: React.FunctionComponent = ({mainHeading,subHeading1,subHeading2}) => {
    return (
        <div className="small__card">
            <Typography className="heading">{mainHeading}</Typography>
            <Typography className="title first__title"> {subHeading1}</Typography>
            <Typography className="title second_title">{subHeading2}</Typography>
        </div>
    );
};

export default SmallCard;
