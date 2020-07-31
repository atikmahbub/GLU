import React from 'react';
import HorizontalLine from '../../components/HorizontalLine';
import { Typography } from '@material-ui/core';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';

const WatchNext = () => {
    return (
        <div className="watch__next__container">
            <HorizontalLine />
            <div className="row">
                <div className="col-md-6 mb-3">
                    <Typography className="heading">Watch Next</Typography>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <ImageThumbnail image={commonImg.chasmisman} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="video__information__container">
                                <Typography className="heading set__margin">Watch Next</Typography>
                                <Typography className="heading">
                                    Science. <br /> Looking into the <br /> periodic table
                                </Typography>
                                <Typography className="sub__heading">AED200 / 45mins</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchNext;
