import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import SectionTwoReusable from '../../components/Home/SectionTwoReusable';
import NextClass from '../../components/NextClass';
import FeaturedSubjects from '../../components/FeaturedSubjects';
import FeaturedTutors from '../../components/FeaturedTutors';
import ClassesRowWithImages from '../../components/ClassesRowWithImages';
import MadeByFooter from '../../components/MadeByFooter';

import Tutors from './Tutors';
import UpcomingClasses from './UpcomingClasses';
import LiveClasses from './LiveClasses';
// import MadeByFooter from './MadeByFooter';
import SlidingDrawer from '../../components/SlidingDrawer';
import SlidingDrawerContent from './SlidingDrawerContent';


import './style.scss';
import commonImg from '../../Assets/images';

const index: React.FunctionComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    return (
        <div className="homepage__wrapper">
            <div className="drawer">
                <SlidingDrawer title="Upcoming Class" show={openDrawer} handler={handleDrawer}>
                    <SlidingDrawerContent />
                </SlidingDrawer>
            </div>

            <div className="navigation__menu">
                <NavigationMenu menuList={menu} handler={handleDrawer}/>
            </div>

            <SectionTwoReusable
                image={commonImg.smilegirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Charlie Ray"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            <div className="next__class">
                <NextClass />
            </div>
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
            <Tutors />
            <MadeByFooter />

        </div>
    );
};

export default index;
