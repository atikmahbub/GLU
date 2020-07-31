import React from 'react';
import HorizontalLine from '../../components/HorizontalLine';
import { Typography } from '@material-ui/core';
import PlayButton from '../../components/Button/PlayButton';
import IconTextWrapper from '../../Containers/IconTextWrapper';

const ResourcesContainer = () => {
    return (
        <div className="resource__container">
            <HorizontalLine />
            <div className="row">
                <div className="col-md-6 mb-3">
                    <Typography className="title__heading">Resources</Typography>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="resources__names__container">
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <div className="resource">
                                    <Typography className="heading">Text Books</Typography>
                                    <Typography className="subheading">
                                        How to structure narrative in fiction
                                    </Typography>
                                    <Typography className="blue__text">Download</Typography>
                                    <Typography className="subheading">Guide for first time writers</Typography>
                                    <Typography className="blue__text">Download</Typography>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <div className="resource">
                                    <Typography className="heading">Audio </Typography>
                                    <Typography className="subheading">An extract from the book</Typography>
                                    <div className="action__controller">
                                        <IconTextWrapper>
                                            <PlayButton />
                                        </IconTextWrapper>
                                        <Typography className="duration">Play / 3.21</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesContainer;
