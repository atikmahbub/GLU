import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import SectionTwoReusable from '../../components/Home/SectionTwoReusable';
import NextClassMUI from '../../components/NextClassMUI';
import NextClass from '../../components/NextClass';
import FeaturedSubjects from '../../components/FeaturedSubjects';
import FeaturedTutors from '../../components/FeaturedTutors';
import ClassesRowWithImages from '../../components/ClassesRowWithImages';
import MadeByFooter from '../../components/MadeByFooter';
import Tutors from './Tutors';
import UpcomingClasses from './UpcomingClasses';
import LiveClasses from './LiveClasses';
import Drawer from './Drawer';
import SlidingDrawerContent from './SlidingDrawerContent';
import SlidingPushDrawerContent from './SlidingPushDrawerContent';



import './style.scss';
import commonImg from '../../Assets/images';


const index: React.FunctionComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openPushDrawer, setOpenPushDrawer] = useState(false);
    const navigations = [
        { name: 'Home', link: '/parent/homepage' },
        { name: 'Dashboard', link: '/parent/dashboard' },
        { name: 'Subject', link: '/parent/homepage' },
        { name: 'Messages', link: '/parent/homepage' },
    ];
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    const handlePushDrawer = () => {
        setOpenPushDrawer(!openPushDrawer);
        let screen = document.getElementById("root")
        console.log("===== push drawer clicked ==========", screen)

        //Code for screen left shift
        // if(false){
        //     if(openPushDrawer === false && screen){
        //         // screen.style.marginRight = "32.312rem";
        //         // screen.style.marginLeft = "-32.312rem";
        //         // screen.style.transition =  "all 0.75s ease";

        //         // screen.style.transform = `translateX(-32.312rem)` 
        //         screen.style.transform = `translateX(-32.312rem)` 

        //         // screen.style.marginLeft = "-32.312rem";
        //         // screen.style.transition =  "all 0.75s ease";
        //         screen.style.transition =  "all 0.55s ease";
        //         // screen.style.transition =  "none";


        //     }
        //     else{
        //         screen.style.transform = `translateX(0rem)`
        //         // screen.style.marginRight = "0px";
        //         // screen.style.marginLeft = "0px";
        //         screen.style.transition =  "all 0.75s ease";
        //     }

        //     // screen.addEventListener("transitionend", function(){
        //     //     screen.style.transform = '';
        //     // }, false);
        // }



    };
    return (
        <div className="homepage__wrapper">
            <div className="drawer">
                <Drawer 
                    open={openDrawer} 
                    onClose={handleDrawer}
                    width="68.875rem"
                    heading={true}>
                    <SlidingDrawerContent />
                </Drawer>
            </div>

            <div className="drawer push__drawer">
                    <Drawer 
                        open={openPushDrawer} 
                        onClose={handlePushDrawer}
                        width="32.312rem"
                        heading={false}>
                        <SlidingPushDrawerContent />
                    </Drawer>
            </div>

            <div className="navigation__menu">
                <NavigationMenu menuList={navigations} handler={handleDrawer} handlerNotification={handlePushDrawer}/>
            </div>

            <SectionTwoReusable
                image={commonImg.smilegirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Charlie Ray"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            {/* <div className="next__class">  */}
                {/* <NextClass /> */}
                <NextClassMUI/>
            {/* </div> */}
            <FeaturedSubjects
                imageFirstURL={commonImg.chairman}
                imageFirstTitle="Languages - Johny Duke"
                imageSecondURL={commonImg.vrplayerboy}
                imageSecondTitle="Maths - Harry Stannard"
            />
            <div className="recorded__class">
                <ClassesRowWithImages
                    title="Recorded Classes"
                />
            </div>
            <SectionTwoReusable
                image={commonImg.earingGirlWithTab}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Sarah Frost"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            <div className="parent__upcoming__classes__container">
                <UpcomingClasses />
            </div>
            <div className="live__classes">
                <LiveClasses />
            </div>

            <FeaturedTutors
                imageFirstURL={commonImg.blueshirtman}
                imageFirstTitle="Languages - Johny Duke"
                imageSecondURL={commonImg.blueShirtRedSpecBoy}
                imageSecondTitle="Maths - Harry Stannard"
            />
            <SectionTwoReusable
                image={commonImg.laptopgirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Sarah Frost"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>ICT.<br />13 Upcomming Classes <br /> 97 Previous Classes</>}
            />
            <Tutors route="/parent/tutors" />
            <MadeByFooter />

        </div>
    );
};

export default index;
