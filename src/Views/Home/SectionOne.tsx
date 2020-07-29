import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';

const SectionOne = () => {
    return (
        <div className="section-one">
            <div className="row">
                <div className="col-lg-6">
                    <div className="img-container">
                        <img className="spect-boy" src={commonImg.spectsboy} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-one-right-part">
                        <Typography className="title">
                            Glu is an innovative web based app that bridges the gap between schools, <br/> teachers, parents
                            and students. Glu is a <br/> platform that allows for a more <br/> collaborative learning experience.
                        </Typography>
                        <img className="sppon-girl" src={commonImg.spoongirl} alt="" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <Typography className="workable-solution">
                        Glu provides workable solutions to issues encountered, when pushing for the best learning
                        outcomes for students.
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
