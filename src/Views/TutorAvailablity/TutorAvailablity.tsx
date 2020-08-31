import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography } from '@material-ui/core';
import Banner from '../../components/ReusableBanner';
// import MadeBy from '../Footer/MadeBy';
const PersonalSchoolToggle: React.FunctionComponent = () => {
    const menu = [
        { link: '/tutor/', name: 'Dashboard' },
        { link: '/tutor/set-class', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    const weeklySchedule = [
        { day: 'Monday', start: '9.25am', end: '11.25am' },
        { day: 'Tuesday', start: '9.25am', end: '11.25am' },
        { day: 'Wednesday', start: '9.25am', end: '11.25am' },
        { day: 'Thursday', start: '9.25am', end: '11.25am' },
        { day: 'Friday', start: '9.25am', end: '11.25am' },
        { day: 'Saturday', start: '9.25am', end: '11.25am' },
        { day: 'Sunday', start: '9.25am', end: '11.25am' },
    ];
    return (
        <div className="tutor_availablity_container">
            <NavigationMenu menuList={menu} />
            <div className="tutor_availablity_subcontainer">
                <div className="tutor_availablity_subcontainer_banner">
                    <Banner heading={'Availability'} description={'Configure your general availability.'} />
                </div>
                <div className="row horizontalline"></div>
                <div className="tutor_availablity_subcontainer_weekly">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <Typography className="weeklyText">Weekly Schedule</Typography>
                        </div>
                        <div className="col-md-6 p-0 weeklyborderline">
                            <div className="weeklyDays">
                                <div className="row">
                                    <div className="col-4">
                                        <Typography className="weeklySubtext">Date</Typography>
                                    </div>
                                    <div className="col-4">
                                        <Typography className="weeklySubtext">Start</Typography>
                                    </div>
                                    <div className="col-4">
                                        <Typography className="weeklySubtext">End</Typography>
                                    </div>
                                </div>
                                {/* {weeklySchedule.map((val: any, index: any) => (
                                    <div className="row">
                                        <div className="col-4">
                                            <Typography className={`${}`}>{val.day}</Typography>
                                        </div>
                                        <div className="col-4">
                                            <Typography className="weeklySubtext">{val.start}</Typography>
                                        </div>
                                        <div className="col-4">
                                            <Typography className="weeklySubtext">{val.end}</Typography>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="profile_footer">
                <div className="footer">
                    <MadeBy />
                </div>
            </div> */}
        </div>
    );
};
export default PersonalSchoolToggle;
