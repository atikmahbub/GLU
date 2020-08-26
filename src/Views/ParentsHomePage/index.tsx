import React from 'react';
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


import './style.scss';
import commonImg from '../../Assets/images';

const index: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="homepage__wrapper">
            <div className="navigation__menu">
                <NavigationMenu menuList={menu} />
            </div>

            <SectionTwoReusable
                image={commonImg.smilegirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Charlie Ray"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            <NextClass />
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
                image={commonImg.earringgirl}
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
                <LiveClasses/>
            </div>
            
            <FeaturedTutors
                imageFirstURL={commonImg.blueshirtman}
                imageFirstTitle="Languages - Johny Duke"
                imageSecondURL={commonImg.smillingmanspects}
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
            {/* <div className="made__by__footer"> */}
                 <MadeByFooter/>
            {/* </div> */}

        </div>
    );
};

export default index;
