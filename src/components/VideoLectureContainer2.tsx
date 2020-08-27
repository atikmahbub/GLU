import React from 'react';
import { Typography } from '@material-ui/core';
import VideoPlayerContainer from './VideoPlayerContainer';

const VideoLectureContainer2 = () => {
    return (
        <div className="lecture__video__player__container">
        <div className="row">
            <div className="col-md-2 p-0">
                <Typography className="timing">
                    00.00/ <br /> 05.20
                </Typography>
            </div>
            <div className="col-md-10 p-0">
                <VideoPlayerContainer/>
            </div>
        </div>
    </div>
    );
}

export default VideoLectureContainer2;
