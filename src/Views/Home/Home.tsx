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
    const menuList = [
        { link: '', name: 'Accounts' },
        { link: '', name: 'Payment' },
        { link: '', name: 'Settings' },
        { link: '', name: 'Features' },
        { link: '', name: 'Tips And Advice' },
        { link: '', name: 'Whiteboard' },
        { link: '', name: 'Tutors' },
        { link: '/help-support', name: 'Help' },
        { link: '/support', name: 'Support' },
    ];
    const [show, setShow] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const handleMenu = () => {
        setMenuShow(!menuShow);
    };
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
            <SlidingMenu show={menuShow} handler={() => handleMenu()} menus={menuList} />
            <div className="holding-container">
                <div className="rotating-box">
                    <Typography className={`slogan ${show ? 'hide' : ''}`}>Glu</Typography>
                    {showOthers && <MenuContainer handleMenu={() => handleMenu()} />}
                    {showOthers && <LaunchingSoon />}
                    {showOthers && <BottomRight />}
                </div>
            </div>
            <SectionOne />
            <SectionTwoReusable
                image={commonImg.earringgirl}
                title="Tutors"
                msg={
                    <>
                        If you are a  qualified <br />  and  experienced  teacher <br /> then   use  the  Glu  platform <br/>  to 
                        earn money  from the <br/>  comfort of your own home
                    </>
                }
            />
            <SectionThree
                image={commonImg.mobileApple}
                msg="By using Glu all concerned parties are able to view and share any relevant educational information as well as the past, present and future study skills of the student"
            />
            <SectionFour
                imageOne={commonImg.hoddygirl}
                imageTwo={commonImg.lappygirl}
                msg="Glu aims to improve the learning outcomes for a student by facilitating interactions, and
                            work in tandem, between schools, teachers, parents and students"
                show={false}
            />
            <SectionFive />
            <SectionSix />
            <SectionTwoReusable
                image={commonImg.women}
                title="Messenger"
                msg={
                    <>
                        Keep the convo <br /> going with the in app <br /> messenger
                    </>
                }
            />
            <SectionThree
                image={commonImg.menmobileview}
                msg="Our range of qualified and experienced teachers allow for 24/7 access to lessons and live classes, enabling learning in a student’s own time and environment"
            />
            <SectionFour
                imageOne={commonImg.smilegirl}
                imageTwo={commonImg.boy}
                msg="Our innovative whiteboard allows for classes with real time interactions between students and teachers, just like in a classroom, but from the comfort of your own space"
                show={true}
            />
            <PeopleSaying />
            <Footer />
        </div>
    );
};

export default Home;
