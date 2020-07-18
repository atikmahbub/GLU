import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import MenuContainer from '../../components/MenuContainer';
import LaunchingSoon from './LaunchingSoon';
import BottomRight from './BottomRight';
import commonImg from '../../Assets/images';
import SectionOne from './SectionOne';
import SectionTwoReusable from './SectionTwoReusable';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import PeopleSaying from './PeopleSaying';
import Footer from '../Footer/Footer';
import SlidingMenu from '../../components/SlidingMenu';

const Home: React.FunctionComponent = () => {
    const menuList  = ['Accounts', 'Payment', 'Settings', 'Features', 'Tips And Advice', 'Whiteboard', 'Tutors'];
    const [show, setShow] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const handleMenu = () => {
        setMenuShow(!menuShow);
    }
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
             <SlidingMenu show={menuShow} handler={()=>handleMenu()} menus={menuList}/>
            <div className="holding-container">
                <div className="rotating-box">
                    <Typography className={`slogan ${show ? 'hide' : ''}`}>Glu</Typography>
                    {showOthers && <MenuContainer handleMenu={()=>handleMenu()} />}
                    {showOthers && <LaunchingSoon />}
                    {showOthers && <BottomRight />}
                </div>
            </div>
            <SectionOne />
            <SectionTwoReusable image={commonImg.earringgirl} title="Tutors" msg={<> Access to qualified <br /> and experienced <br /> tutors.</>} />
            <SectionThree />
            <SectionFour imageOne={commonImg.shorthair} imageTwo={commonImg.lappygirl} />
            <SectionFive/>
            <SectionSix/>
            <SectionTwoReusable image={commonImg.women} title="Messanger" msg={<> Keep the convo <br/> going with the in app <br/> messenger.</>} />
            <SectionThree/>
            <SectionFour imageOne={commonImg.smilegirl} imageTwo={commonImg.boy} />
            <PeopleSaying/>
            <Footer/>
        </div>
    );
};

export default Home;
