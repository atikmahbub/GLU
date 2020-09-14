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
import { studentMenus } from '../../Helper/studentMenus';
import TopDrawerMenuContent from '../../Containers/Menus/TopDrawerMenuContent';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu
            menuList={studentMenus}
            absolute
            background="transparent"
            colorWhite
            TopDrawerMenuComponent={<TopDrawerMenuContent />}
        >
            <div className="homepage__wrapper">
                <div className="banner">
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
                <NextClass route="/students/classes" />
                <FeatureSubject />
                <TotalUpcomingClasses heading="Previous Classes" route="/students/previous-classes" />
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
                <TotalUpcomingClasses heading="Upcoming Classes" route="/students/upcoming-classes" />
                <FeatureTutor />
                <SectionTwoReusable
                    image={commonImg.lappygirl}
                    mobileImg={commonImg.lappygirl}
                    leftTitle="Charlie Ray"
                    desktopTitle="AED200/h"
                    title="Tutors"
                    msg={<>ICT. 13 Upcoming Classes 97 Previous Classes</>}
                />
                <Tutors route="/students/tutors" />
                <Footer />
            </div>
        </NavigationMenu>
    );
};

export default Index;
