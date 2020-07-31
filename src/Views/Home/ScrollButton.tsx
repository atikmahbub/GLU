import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';

const ScrollButton = () => {
    const ele = document.getElementById("root");
    const height = ele?.offsetHeight;
    const handleScroll = () => {
        window.scrollTo({
            top: height,
            behavior: 'smooth',
          })
    }
    return (
        <div className="scroll__container" onClick={handleScroll}>
            <Typography className="text">Scroll</Typography>
            <ArrowDownward className="icon"/>
        </div>
    );
}

export default ScrollButton;
