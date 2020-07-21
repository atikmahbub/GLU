import React from 'react';
import { Typography } from '@material-ui/core';

interface props {
    image: string;
    title?: string;
    subtitle?: string;
}
const ImageThumbnail: React.FunctionComponent<props> = ({ image, title, subtitle }) => {
    return (
        <div className="image-thumbnail-container">
            <div className="image-thumbnail">
                <img className="img" src={image} alt="" />
            </div>
            <Typography className="title">{title}</Typography>
            <Typography className="subtitle">{subtitle}</Typography>
        </div>
    );
};

export default ImageThumbnail;
