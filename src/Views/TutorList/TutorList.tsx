import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import TotalClasses from './TotalClasses';
import UpcomingClasses from './UpcomingClasses';
import TutorListMiddle from './TutorListMiddle';
import UpcomingClassesPartSec from './UpcomingClassesPartSec';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import TutorListBottom from './TutorListBottom';

const TutorList: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="student__classes__tutor">
            <NavigationMenu menuList={menu} />
            <div className="filter__row__container">
                <div className="button__container">
                    <Typography className="title">Classes</Typography>
                    <Typography className="title active">Tutors</Typography>
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
            <Footer/>
        </div>
    );
};

export default TutorList;
