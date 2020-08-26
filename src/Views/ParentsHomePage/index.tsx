import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import SectionTwoReusable from '../../components/Home/SectionTwoReusable';
import NextClass from '../../components/NextClass';
import FeaturedSubjects from '../../components/FeaturedSubjects';
import RecordedClasses from './RecordedClasses';
import FeaturedTutors from '../../components/FeaturedTutors';

import Tutors from './Tutors';

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
                <NavigationMenu menuList={menu}/>
            </div>

            <SectionTwoReusable
                image={commonImg.smilegirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Charlie Ray"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            <NextClass/>
            <FeaturedSubjects 
                    imageFirstURL={commonImg.chairman}
                    imageFirstTitle="Languages - Johny Duke"
                    imageSecondURL={commonImg.vrplayerboy}
                    imageSecondTitle="Maths - Harry Stannard"
                    />
            <RecordedClasses/>
            <SectionTwoReusable
                image={commonImg.laptopgirl}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Sarah Frost"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={<>Maths.<br />An Introduction to trignometry</>}
            />
            <RecordedClasses/>
            <FeaturedTutors 
                    imageFirstURL={commonImg.chairman}
                    imageFirstTitle="Languages - Johny Duke"
                    imageSecondURL={commonImg.vrplayerboy}
                    imageSecondTitle="Maths - Harry Stannard"
                    />
            <Tutors/>
        </div>
    );
};

export default index;
