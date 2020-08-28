import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';

const FeatureTutor: React.FunctionComponent = () => {
    return (
        <div className="feature__container">
            <HeadingRowContainer title="Featured Tutors" link="see all" />
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <div className="vrboy__container">
                        <ImageThumbnail image={commonImg.vrplayerboy} />
                        <Typography variant="h6" className="title">
                            Maths - Harry Stannard
                        </Typography>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <ImageThumbnail image={commonImg.chairman} />
                    <Typography variant="h6" className="title">
                        Languages - Johny Duke
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default FeatureTutor;
