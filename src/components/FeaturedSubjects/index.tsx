import React from 'react';
import HeadingRowContainer from '../../components/HeadingRowContainer';
import ImageThumbnail from '../../components/ImageThumbnail';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import './style.scss';

const FeatureTutor: React.FunctionComponent = () => {
    return (
        <div className="feature__container">
            <div className="heading__image__container">
                <HeadingRowContainer className="heading" title="Featured Subjects" link="see all" />
                <div className="row image__container">
                    <div className="col-lg-6 image__first__container">
                        <div className="image__first" >
                            <img src={commonImg.chairman} />
                        </div>
                        <div >
                            <Typography className="title">
                                Languages - Johny Duke
                            </Typography>
                        </div>

                    </div>
                    <div className="col-lg-6 image__second__container">
                        <div className="image__second" >
                            <img src={commonImg.vrplayerboy} />
                        </div>
                        <div >
                            <Typography className="title">
                                Maths - Harry Stannard
                             </Typography>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default FeatureTutor;
