import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SmallCard from './SmallCard';
const Dashboard: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    return (
        <div className="main_container">
            <NavigationMenu menuList={menu} />
            <div className="main_container_dashboard">
                <Typography className="main_container_dashboard_title">Dashboard</Typography>
                <div className="row">
                    <div className="col-md-6">
                        <div className="main_container_dashboard_col1 bg-white">
                            <div className="main_container_dashboard_card_subtitle">
                                <Link to="" style={{ color: 'blue' }}>
                                    See upcomming
                                </Link>
                            </div>
                            <Typography className="main_container_dashboard_card_title">Upcomming Classes</Typography>

                            <div className="row">
                                <div className="col-5"></div>
                                <div className="col-7 main_container_dashboard_card_image">
                                    <img
                                        className="img-fluid"
                                        src={commonImg.tutorDashboard}
                                        width="418px"
                                        height="324px"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="row main_container_dashboard_card_text">
                                <Typography className="col-5 main_container_dashboard_card_text1">
                                    29/09/20 9am-10.15am
                                </Typography>
                                <Typography className="col-7 main_container_dashboard_card_text2">
                                    Geography. Igneous, Sedimentary, and Metamorphic rocks
                                </Typography>
                            </div>
                            <div className="row main_container_dashboard_card_subtext">
                                <div className="col-5">
                                    <div>45min</div>
                                </div>
                                <div className="col-7">
                                    <div>Fully Booked</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="main_container_dashboard_col2">
                            <div className="card__row card_row1">
                                <SmallCard
                                    mainHeading={'My Classes'}
                                    subHeading1={'Published'}
                                    subHeading2={'Create and publish a new class'}
                                />
                                <SmallCard
                                    mainHeading={'Record Class'}
                                    subHeading1={'Average Attendance'}
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
                    <div className="col-md-6 main_container_dashboard_col3 p-0">
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

                    {/* start */}
                    <div className="col-md-6 main_container_dashboard_col4">
                        <div className="bg-white">
                            <div className="main_container_dashboard_card_subtitle">
                                <Link to="" style={{ color: 'blue' }}>
                                    See upcomming
                                </Link>
                            </div>
                            <Typography className="main_container_dashboard_card_title">
                                Thursday 30th July 2020
                            </Typography>
                            <div className="row main_container_dashboard_card_subtext">
                                <div className="col-5">
                                    <div>45min</div>
                                </div>
                                <div className="col-7">
                                    <div>Fully Booked</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_container2"></div>
            </div>
        </div>
    );
};
export default Dashboard;
