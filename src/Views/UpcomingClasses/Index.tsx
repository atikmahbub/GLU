import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import TotalClasses from './TotalClasses';
import UpcomingClasses from './UpcomingClasses';
import TutorListMiddle from './TutorListMiddle';
import UpcomingClassesPartSec from './UpcomingClassesPartSec';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import TutorListBottom from '../StudentAllClassesTutors/TutorListBottom';
import SlidingDrawer from '../../components/SlidingDrawer';
import FixedNavigation from '../../Containers/FixedNavigation';
import SlidingDrawerContent from './SlidingDrawerContent';
import { studentMenus } from '../../Helper/studentMenus';

const Index: React.FunctionComponent = () => {
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
        <div className="student__classes__tutor">
            <SlidingDrawer title="Upcoming Class" show={openDrawer} handler={handleDrawer}>
                <SlidingDrawerContent />
            </SlidingDrawer>
            <FixedNavigation>
                <NavigationMenu menuList={studentMenus} handler={handleDrawer} />
            </FixedNavigation>
            <div className="spacing">
                <div className="filter__row__container">
                    <div className="button__container">
                        <Typography className="title active">Upcoming Classes</Typography>
                    </div>
                    <div className="sort__container">
                        <ExpandMore className="arrow__downward" />
                        <Typography className="sort__title">Sort</Typography>
                    </div>
                </div>
                <TotalClasses />
                <UpcomingClasses />
                <TutorListMiddle />
                <UpcomingClassesPartSec />
                <TutorListBottom />
                <div className="row">
                    <div className="show__more__wrapper">
                        <div className="show__more__contianer">
                            <OutlineButton text="Show more" />
                            <Typography className="title">Showing 50 of 5488</Typography>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;
