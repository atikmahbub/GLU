import React from 'react';
import { Typography } from '@material-ui/core';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';

const NextClass: React.FunctionComponent = () => {
    return (
        <div className="next__class__card">
            <div className="row">
                <div className="col-lg-2">
                    <Typography className="title">Next Class</Typography>
                </div>
                <div className="col-lg-3">
                    <ImageThumbnail image={commonImg.running}/>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3"></div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
}

export default NextClass;
