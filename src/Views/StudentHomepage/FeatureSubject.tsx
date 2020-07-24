import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';

const FeatureSubject: React.FunctionComponent = () => {
    return (
        <div className="feature__container">
            <HeadingRowContainer title="Featured Subjects" link="see all" />
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <div className="subject-teacher-container">
                        <ImageThumbnail image={commonImg.chairman} />
                        <Typography variant="h6" className="title">
                            Business Studies
                        </Typography>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="vrboy__container">
                        <ImageThumbnail image={commonImg.vrplayerboy} />
                        <Typography variant="h6" className="title">
                            Computer Science
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSubject;
