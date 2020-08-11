import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';

const ScrollButton = () => {
    const handleScroll = () => {
        let content: any = document.querySelector('.home-wrapper');

        let animate = setInterval(() => {
            window.scrollBy(0, 40);
            if (content.scrollHeight - (document as any ).scrollingElement.scrollTop === window.innerHeight) {
                console.log('Cleared');
                clearInterval(animate);
            }
        }, 10);
    };
    return (
        <div className="scroll__container" onClick={handleScroll}>
            <Typography className="text">Scroll</Typography>
            <ArrowDownward className="icon"/>
        </div>
    );
}

export default ScrollButton;
