import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    image: string;
    title: string;
    msg: React.ReactNode;
}
const SectionTwoReusable: React.FunctionComponent<props> = ({ image, title, msg }) => {
    return (
        <div className="section-two">
            <div className="opacity-bg"></div>
            <img className="ear-ring-girl" src={image} alt="" />
            <img className="ear-ring-girl" src={image} alt="" />
            <div className="img-overlay-container">
                <Typography className="title">{title}</Typography>
                <Typography className="msg">{msg}</Typography>
            </div>
        </div>
    );
};

export default SectionTwoReusable;
