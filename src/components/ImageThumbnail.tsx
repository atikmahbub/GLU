import React from 'react';
import { Typography } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface props {
    image: string;
    title?: React.ReactNode;
    subtitle?: string;
}
const ImageThumbnail: React.FunctionComponent<props> = ({ image, title, subtitle }) => {
    return (
        <div className="image-thumbnail-container">
            <div className="image-thumbnail">
                <LazyLoadImage
                    alt=""
                    width="100%"
                    effect="blur"
                    src={image} // use normal <img> attributes as props
                />
                {/* <img className="img" src={image} alt="" /> */}
            </div>
            <Typography className="title">{title}</Typography>
            <Typography className="subtitle">{subtitle}</Typography>
        </div>
    );
};

export default ImageThumbnail;
