import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import NextClass from './NextClass';
import FeatureSubject from './FeatureSubject';
import commonImg from '../../Assets/images';
import UpcomingClass from './UpcomingClass';
import CalenderContainer from './CalenderContainer';
import TotalUpcomingClasses from '../../components/TotalUpcomingClasses';
import FeatureTutor from './FeatureTutor';
import Footer from '../Footer/Footer';
import SectionTwoReusable from '../../components/Home/SectionTwoReusable';
import Tutors from '../ParentsHomePage/Tutors';

const Index: React.FunctionComponent = () => {
    const menu = [
        { link: '/students/home', name: 'Home' },
        { link: '/students/dashboard', name: 'Dashboard' },
        { link: '/students/subject', name: 'Subjects' },
        { link: '/students/message', name: 'Messages' },
    ];
    return (
        <div className="homepage__wrapper">
            <div className="banner">
                <NavigationMenu menuList={menu} />
                <SectionTwoReusable
                    image={commonImg.smilegirl}
                    mobileImg={commonImg.curlygirlcroped}
                    leftTitle="Charlie Ray"
                    desktopTitle="AED200 / 45mins"
                    title="Tutors"
                    msg={
                        <>
                            Maths.
                            <br />
                            An Introduction to trignometry
                        </>
                    }
                />
            </div>
            <NextClass />
            <FeatureSubject />
            <TotalUpcomingClasses heading="Previous Classes" route="/students/previous-class" />
            <SectionTwoReusable
                image={commonImg.earingGirlWithTab}
                mobileImg={commonImg.curlygirlcroped}
                leftTitle="Sarah Frost"
                desktopTitle="AED200 / 45mins"
                title="Tutors"
                msg={
                    <>
                        Maths.
                        <br />
                        An Introduction to trignometry
                    </>
                }
            />
            <UpcomingClass />
            <CalenderContainer />
            <TotalUpcomingClasses heading="Upcoming Classes" route="/students/upcoming-class" />
            <FeatureTutor />
            <SectionTwoReusable
                image={commonImg.lappygirl}
                mobileImg={commonImg.lappygirl}
                leftTitle="Charlie Ray"
                desktopTitle="AED200/h"
                title="Tutors"
                msg={<>ICT. 13 Upcoming Classes 97 Previous Classes</>}
            />
            <Tutors route="/students/tutors"/>
            <Footer />
        </div>
    );
};

export default Index;
