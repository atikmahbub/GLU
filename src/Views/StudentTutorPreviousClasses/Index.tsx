import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';
import Footer from '../Footer/Footer';
import SlidingDrawerContent from './SlidingDrawerContent';
import TotalClasses from './TotalClasses';
import SortDropdown from '../../components/SortDropdown';

const Index: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];

    return (
        <NavigationMenu
            menuList={menu}
            menuDrawerWidth="65vw"
            menuDrawerAnimation={false}
            MenuDrawerComponent={<SlidingDrawerContent />}
        >
            <div className="student__classes__tutor">
                <div className="spacing">
                    <div className="filter__previous__row__container">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <div className="button__container">
                                    <Typography className="title active">Ray Smith</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <div className="title__sort__container">
                                    <Typography className="title">Previous Classes</Typography>
                                    <SortDropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TotalClasses />
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
        </NavigationMenu>
    );
};

export default Index;
