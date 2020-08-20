import React from 'react';
import { Typography } from '@material-ui/core';
import { ArrowDownward } from '@material-ui/icons';

const ScrollButton = () => {
    const handleScroll = () => {
        let content: any = document.querySelector('.home-wrapper');

        let animate = setInterval(() => {
            window.scrollBy(0, 40);
            addEventListener('wheel', () => {
                clearInterval(animate);
            });
            var lastScrollTop = 0;

            // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
            addEventListener(
                'scroll',
                function () {
                    // or window.addEventListener("scroll"....
                    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                    if (st < lastScrollTop) {
                        clearInterval(animate);
                    }
                    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
                },
                false
            );
            if (content.scrollHeight - (document as any).scrollingElement.scrollTop === window.innerHeight) {
                console.log('Cleared');
                clearInterval(animate);
            }
        }, 10);
    };
    return (
        <div className="scroll__container" onClick={handleScroll} >
            <Typography className="text">Scroll</Typography>
            <ArrowDownward className="icon" />
        </div>
    );
};

export default ScrollButton;
