import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SmallCard from '../../components/SmallCard';
import ResuableTimeline from '../../components/ReusableTimeline';
import ReusableLandscape from '../../components/ReusableLandscape';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import CalendarComponent from '../../components/CalendarComponent';
import { common } from '@material-ui/core/colors';
const PersonalDashboard: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    return (
        <div className="main_container">
            <NavigationMenu menuList={menu} />
            <Typography className="main_container_dashboard_title">Personal <span className="school-color"> Dashboard</span></Typography>
            <div className="main_container_dashboard">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <ReusableLandscape
                            imgSrc={commonImg.tutorDashboard}
                            title1={'Upcomming'}
                            title2={'Classes'}
                            date={'29/09/20'}
                            subheading1={'45min'}
                            time1={'9am-'}
                            time2={'10.15am'}
                            subheading2={'Fully Booked'}
                            subject={'Geography.'}
                            desc={'Igneous, Sedimentary,'}
                        />
                    </div>
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col2">
                            <div className="card__row card_row1">
                                <SmallCard mainHeading={'My Classes'} subHeading1={'Published'} subHeading2={'57'} />
                                <SmallCard
                                    mainHeading={'Record Class'}
                                    subHeading1={'Create and Publish'}
                                    subHeading2={'7/20 Spaces'}
                                />
                            </div>
                            <div className="card__row card_row2">
                                <SmallCard
                                    mainHeading={'Availablity'}
                                    subHeading1={'Status'}
                                    subHeading2={'Limited Availablity'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reusable Component  */}
                <div className="row">
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col3">
                            <div className="card__row card_row3">
                                <SmallCard
                                    mainHeading={'Statistics'}
                                    subHeading1={'Average Attendance'}
                                    subHeading2={'7/20 Spaces'}
                                />
                                <SmallCard mainHeading={'Reviews'} subHeading1={'Current Rating'} subHeading2={'4/5'} />
                            </div>
                            <div className="card__row card_row4">
                                <SmallCard
                                    mainHeading={'Whiteboard'}
                                    subHeading1={'Try out what the class will be like'}
                                    subHeading2={''}
                                />
                            </div>
                        </div>
                    </div>

                    {/* start */}
                    <CalendarComponent
                        mainHeading={'Thursday 30th July 2020'}
                        heading1={'Upcomming Classes'}
                        heading2={'Total Spaces'}
                        subHeading1={'4'}
                        subHeading2={'37/40'}
                    />

                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 p-0">
                            <div className="main_container_dashboard_col5">
                                <div className="card__row card_row5">
                                    <SmallCard
                                        mainHeading={'Wallet'}
                                        subHeading1={'Balance'}
                                        subHeading2={'AED15,740'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
            <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
                <div className="second_component">
                    <div className="main_container3">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="main_container_col11">
                                    <Typography className="subtext">Your Day</Typography>
                                    <Typography className="subtext">9:21 am</Typography>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="main_container_col12">
                                    <div className="main_subcontainer">
                                        <ResuableTimeline
                                            date={'29/07/20'}
                                            time1={'9am-'}
                                            time2={'10.15am'}
                                            subject={'Geography.'}
                                            subheading1={'45min'}
                                            desc={'Igneous, Sedimentary, '}
                                            subheading2={'Fully Booked'}
                                        />
                                        <hr></hr>
                                        <ResuableTimeline
                                            date={'29/07/20'}
                                            time1={'11am-'}
                                            time2={'10.15am'}
                                            subject={'English.'}
                                            subheading1={'45min'}
                                            desc={'Organising a'}
                                            subheading2={'3/5 Spaces'}
                                        />
                                        <hr></hr>
                                        <ResuableTimeline
                                            date={'29/07/20'}
                                            time1={'3pm-'}
                                            time2={'10.15am'}
                                            subject={'French'}
                                            subheading1={'45min'}
                                            desc={'How Does Language.'}
                                            subheading2={'Fully Booked'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_container_4">
                    <div className="main_container_4_subcontainer">
                        <div className="row">{/* Resuable Component Here */}</div>
                    </div>
                </div>
        </div>
    );
};
export default PersonalDashboard;
