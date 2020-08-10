import React from 'react';
const ReactPlayer =  React.lazy(()=>import('react-player'));

const VideoPlayerContainer = () => {
    return (
        <div className="video__player">
            <ReactPlayer className="video" url="https://youtu.be/HhjHYkPQ8F0" controls={true}  width="100%" height="85vh" />
        </div>
    );
};

export default VideoPlayerContainer;
