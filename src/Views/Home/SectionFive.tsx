import React from 'react';
import { Typography } from '@material-ui/core';
import commonImg from '../../Assets/images';
import HorizontalLine from '../../components/HorizontalLine';

const SectionFive = () => {
    return (
        <div className="section-five">
            <HorizontalLine />
            <div className="row">
                <div className="col-lg-6">
                    <Typography className="learn-title">
                        Learn or teach, we have over <br /> 30 subjects to pick from, including:
                    </Typography>
                    <img className="subject" src={commonImg.subectIconSvg} />
                </div>
                <div className="col-lg-6">
                    <div className="subject-list-container">
                        <ul>
                            <li>Maths</li>
                            <li>Science</li>
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Biology</li>
                            <li>Business Studies</li>
                            <li>Language</li>
                            <li>PE</li>
                            <li>Religious Education</li>
                            <li>English</li>
                            <li>Art</li>
                            <li>Geography</li>
                            <li>History</li>
                            <li>ICT</li>
                            <li>Computer Science</li>
                            <li>Drama</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFive;
