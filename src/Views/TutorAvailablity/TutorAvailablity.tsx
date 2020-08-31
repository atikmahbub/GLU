import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import Banner from '../../components/ReusableBanner';
import AddCancelButton from './AddCancelButton';
import MadeBy from '../Footer/MadeBy';
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
    const daysOffArray = ['03/08/20', '25/08/20'];
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
                            <div className="schedule_text_padding1">
                                <Typography className="weeklyText">Weekly Schedule</Typography>
                            </div>
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
                                <div className="weekScheduleMap">
                                    {weeklySchedule.map((val: any, index: any) => (
                                        <div className="row" key={index}>
                                            <div className="col-4">
                                                <Typography
                                                    className={`${
                                                        val.day == 'Wednesday' ||
                                                        val.day == 'Saturday' ||
                                                        val.day == 'Sunday'
                                                            ? 'weeklyActive'
                                                            : 'weeklyInactive'
                                                    }`}
                                                >
                                                    {val.day}
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography
                                                    className={`${
                                                        val.day == 'Wednesday' ||
                                                        val.day == 'Saturday' ||
                                                        val.day == 'Sunday'
                                                            ? 'weeklyActive'
                                                            : 'weeklyInactive'
                                                    }`}
                                                >
                                                    {val.start}
                                                </Typography>
                                            </div>
                                            <div className="col-4">
                                                <Typography
                                                    className={`${
                                                        val.day == 'Wednesday' ||
                                                        val.day == 'Saturday' ||
                                                        val.day == 'Sunday'
                                                            ? 'weeklyActive'
                                                            : 'weeklyInactive'
                                                    }`}
                                                >
                                                    {val.end}
                                                </Typography>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="weekhorizontalline  col-12"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="schedule_text_padding2">
                                <Typography className="weeklyText">Days Off</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 weeklyborderline">
                            <div className="daysoff_container">
                                <div className="row">
                                    <div className="col-12">
                                        <Typography className="weeklySubtext">Days Off</Typography>
                                    </div>
                                </div>
                                <div className="editDelete_maincontainer">
                                    {daysOffArray.map((val: any, index: any) => (
                                        <div className="row" key={index}>
                                            <div className="col-8">
                                                <Typography className="weeklyText">{val}</Typography>
                                            </div>
                                            <div className="col-4">
                                                <div className="editDelete_container">
                                                    <Typography className="weeklySubtext">Edit</Typography>
                                                    <Typography className="weeklySubtext">Delete</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="addNew_container">
                                    <div className="row">
                                        <div className="col-4">
                                            <TextField
                                                className="line-input3"
                                                label="Add New"
                                                value="DD/MM/YYY"
                                                fullWidth
                                            />
                                        </div>
                                    </div>
                                    <div className="addCancel_container">
                                        <AddCancelButton firstButton={'Add'} secondButton={'Cancel'} />
                                    </div>
                                    <div className="weekhorizontalline  col-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="schedule_text_padding2">
                                <Typography className="weeklyText">Your Fee</Typography>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 weeklyborderline">
                            <div className="yourfee_container">
                                <div className="row">
                                    <div className="col-4">
                                        <TextField className="line-input3" label="Aed Per Hour" value="250" fullWidth />
                                    </div>
                                </div>
                                <div className="savecancel_container">
                                    <AddCancelButton firstButton={'Save'} secondButton={'Cancel'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile_footer">
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </div>
    );
};
export default PersonalSchoolToggle;
