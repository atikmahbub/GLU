import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';

const ScrollButton = () => {
    return (
        <div className="scroll__container">
            <Typography className="text">Scroll</Typography>
            <ArrowDownward className="icon"/>
        </div>
    );
}

export default ScrollButton;
