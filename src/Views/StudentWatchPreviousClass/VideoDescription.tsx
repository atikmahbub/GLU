import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { PlayArrow, FavoriteBorder, Link } from '@material-ui/icons';
import IconTextRow from '../../components/IconTextRow';
import IconTextWrapper from '../../Containers/IconTextWrapper';
import PlayButton from '../../components/Button/PlayButton';

const VideoDescription = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <Typography className="title__name">Jordan Day</Typography>
            </div>
            <div className="col-md-6">
                <div className="video__description">
                    <Typography className="heading">English.</Typography>
                    <Typography className="heading">How to structure narrative in fiction</Typography>
                    
                    <IconTextWrapper>
                        <PlayButton/>
                        <IconTextRow icon={<FavoriteBorder className="icon" />} title="Favourite" />
                        <IconTextRow icon={<Link className="icon" />} title="Copy link" />
                    </IconTextWrapper>
                </div>
            </div>
        </div>
    );
};

export default VideoDescription;
