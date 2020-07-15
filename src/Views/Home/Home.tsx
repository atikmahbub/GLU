import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import MenuContainer from './MenuContainer';
import LaunchingSoon from './LaunchingSoon';
import BottomRight from './BottomRight';

const Home: React.FunctionComponent = () => {
    const [show, setShow] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 800);
        setTimeout(()=>{
            setShowOthers(true);
        },1000)
    }, []);
    return (
        <div className="home-wrapper">
            <div className="rotating-box">
                <Typography className={`slogan ${show ? 'hide' : ''}`}>Glu</Typography>
                {showOthers && <MenuContainer />}
                {showOthers && <LaunchingSoon />}
                {showOthers && <BottomRight />}
            </div>
        </div>
    );
};

export default Home;
