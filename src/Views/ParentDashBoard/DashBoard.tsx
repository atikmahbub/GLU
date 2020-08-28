import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import MadeBy from '../Footer/MadeBy';
import SmallCard from '../../components/SmallCard';
import ResuableTimeline from '../../components/ReusableTimeline';
import ReusableLandscape from '../../components/ReusableLandscape';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import CalendarComponent from '../../components/CalendarComponent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Dashboard: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subject' },
        { link: '', name: 'Messages' },
    ];
    return (
        <div className="main_container">
            <NavigationMenu menuList={menu} />
            <div className="title__container">
                <Typography className="main_container_dashboard_title">Dashboard</Typography>
                <div className="dropdown">
                    <Typography variant="h5">
                        Child 1
                        </Typography>
                    <Typography variant="h5">
                        <ExpandMoreIcon
                            style={{ fontSize: "3rem" }} />
                    </Typography>
                </div>
            </div>


            <div className="main_container_dashboard">
                <div className="row set__margin">
                    <div className="col-md-6 p-0">
                        <div className="main_container_dashboard_col1 bg-white">
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
                    </div>
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col2">
                            <div className="card__row card_row1">
                                <SmallCard
                                    mainHeading={'Previous Classes'}
                                    subHeading1={'Purchased'}
                                    subHeading2={'57'} />
                                <SmallCard
                                    mainHeading={'Whiteboard'}
                                    subHeading1={'Try out what the class '}
                                    subHeading2={'will be like.'}
                                />
                            </div>
                            {/* <div className="card__row card_row2">
                                <SmallCard
                                    mainHeading={'Availablity'}
                                    subHeading1={'Status'}
                                    subHeading2={'Limited Availablity'}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Reusable Component  */}
                <div className="row wallet__date__container">
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col3">
                            <div className="card__row card_row3">
                                <SmallCard mainHeading={'Wallet'} subHeading1={'Balance'} subHeading2={'AED320'} />
                                {/* <SmallCard mainHeading={'Reviews'} subHeading1={'Current Rating'} subHeading2={'4/5'} /> */}
                            </div>
                            {/* <div className="card__row card_row4">
                                <SmallCard
                                    mainHeading={'Whiteboard'}
                                    subHeading1={'Try out what the class will be like'}
                                    subHeading2={''}
                                />
                            </div> */}
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
                </div>
                {/* <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 p-0">
                        <div className="main_container_dashboard_col5">
                            <div className="card__row card_row5">
                                <SmallCard mainHeading={'Wallet'} subHeading1={'Balance'} subHeading2={'AED15,740'} />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <div className="main_container2">
                <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
            </div> */}
            {/* <div className="horizontal__line__container">
                <div className="horizontal__line__parent"> 
                    <hr/>   
                </div>
            </div> */}

            <div className="second_component">
                <div className="main_container3">
                    {/* <hr/> */}
                    <div className="horizontal__line__parent">
                    </div>
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
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </div>
    );
};
export default Dashboard;