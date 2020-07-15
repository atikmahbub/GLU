import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import MenuContainer from './MenuContainer';
import LaunchingSoon from './LaunchingSoon';
import BottomRight from './BottomRight';
import commonImg from '../../Assets/images';

const Home: React.FunctionComponent = () => {
    const [show, setShow] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 800);
        setTimeout(() => {
            setShowOthers(true);
        }, 1000);
    }, []);
    return (
        <div className="home-wrapper">
            <div className="holding-container">
                <div className="rotating-box">
                    <Typography className={`slogan ${show ? 'hide' : ''}`}>Glu</Typography>
                    {showOthers && <MenuContainer />}
                    {showOthers && <LaunchingSoon />}
                    {showOthers && <BottomRight />}
                </div>
            </div>
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
                                Glu is an innovative web based app that bridges the gap between schools, teachers,
                                parents and students. Glu is a platform that allows for a more collaborative learning
                                experience.
                            </Typography>
                            <img className="sppon-girl" src={commonImg.spoongirl} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <Typography className="workable-solution">
                            It provides 24/7 access to workable solutions, to issues encountered, when pushing for the
                            best learning outcomes for students.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="section-two">
                <img className="ear-ring-girl" src={commonImg.earringgirl} alt="" />
                <div className="img-overlay-container">
                    <Typography className="title">Tutors</Typography>
                    <Typography className="msg">
                        Access to qualified <br /> and experienced <br /> tutors.
                    </Typography>
                </div>
            </div>
            <div className="section-three">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-part">
                            <div className="mobile"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="right-part">
                            <Typography className="title">
                                An innovative web based app that bridges the gap between school, teachers, parents and
                                students. A platform that allows for a more collaborative learning experience for
                                everyone involved.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-four">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="short-hair-girl-container">
                            <img className="short-hair-girl" src={commonImg.shorthair} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-four-right-part-container">
                            <Typography className="title">
                                Glu is an innovative web based app that bridges the gap between schools, teachers,
                                parents and students. Glu is a platform that allows for a more collaborative learning
                                experience.
                            </Typography>
                            <Typography className="real-time-intraction">Real-time interactive whiteboard</Typography>
                            <img className='board-icon' src={commonImg.whiteBoardSvg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
