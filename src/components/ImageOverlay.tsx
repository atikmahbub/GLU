import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    image: string;
    title: string;
    msg: React.ReactNode;
}
const ImageOverlay: React.FunctionComponent<props> = ({ image, title, msg }) => {
    return (
        <div className="image__overlay image-thumbnail">
            <img className="img" src={image} alt="" />
            <div className="img-overlay-container">
                <Typography className="title">{title}</Typography>
                <Typography className="msg">{msg}</Typography>
            </div>
        </div>
    );
};

export default ImageOverlay;