import React from 'react';
import { Typography } from '@material-ui/core';
import BorderCardContainer from './BorderCardContainer';
import commonImg from '../../Assets/images';
import { Apple } from '@material-ui/icons';

const PeopleSaying: React.FunctionComponent = () => {
    return (
        <div className="section-seven">
            <hr className="line" />
            <div className="row">
                <div className="col-lg-6">
                    <Typography className="people-saying">What people are saying...</Typography>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-6">
                            <BorderCardContainer
                                heading="“Best thing for school in years.”"
                                title="Jamie Lee"
                                subtitle="Teacher at FFC Academy"
                            />
                        </div>
                        <div className="col-md-6">
                            <BorderCardContainer
                                heading="“Best thing for school in years.”"
                                title="Jamie Lee"
                                subtitle="Teacher at FFC Academy"
                            />
                        </div>
                    </div>
                </div>
                <div className="break-section"></div>
                <div className="col-lg-6">
                    <img className="pen-pad-girl" src={commonImg.penpadgirl} alt="" />
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="text-section-container">
                        <Typography className="title">
                            An innovative web based app that bridges the gap between school, teachers, parents and
                            students.
                        </Typography>
                        <Typography className="subtitle">App Store and Google Play</Typography>
                        <Apple className="apple-icon" />
                        <img className="google-icon" src={commonImg.google} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSaying;
