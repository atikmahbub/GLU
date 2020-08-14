import React from 'react';
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
                <div className="row d-flex pt-3 justify-content-start" style={{ fontSize: '2rem' }}></div>
                <div className="row">
                    <div className="col-md-6  bg-white">
                        <div className="float-right p-1" style={{ fontSize: '1.25rem' }}>
                            <a href="#" style={{ color: 'blue' }}>
                                See upcomming
                            </a>
                        </div>
                        <div style={{ fontSize: '2.5rem' }}>Upcomming Classes</div>

                        <div className="row pt-5 d-flex justify-content-between">
                            <div className="col-5"></div>
                            <div className="col-7">
                                <img
                                    className="img-fluid"
                                    src={commonImg.tutorDashboard}
                                    width="250px"
                                    height="200px"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="row pt-5 d-flex justify-content-between">
                            <div className="col-5" style={{ fontSize: '2rem' }}>
                                29/09/20<br></br>
                                9am-<br></br>10.15am
                            </div>
                            <div className="col-7" style={{ fontSize: '2rem' }}>
                                Geography. Igneous, Sedimentary, and Metamorphic rocks
                            </div>
                        </div>
                        <div className="row pt-2 pb-5 d-flex justify-content-around">
                            <div className="col-5" style={{ fontSize: '2rem' }}>
                                <div style={{ fontSize: '1.1rem' }}>45min</div>
                            </div>
                            <div className="col-7" style={{ fontSize: '2rem' }}>
                                <div style={{ fontSize: '1.1rem' }}>Fully Booked</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="row  d-flex justify-content-around">
                            <div className="col-5 mh-100 bg-white">
                                <div className="row pl-2" style={{ fontSize: '2rem' }}>
                                    My Classes
                                </div>
                                <div className="row pl-2 pt-5" style={{ fontSize: '1.25rem' }}>
                                    Published<br></br>
                                    57
                                </div>
                            </div>
                            <div className="col-5  bg-white">
                                <div className="row pl-2" style={{ fontSize: '2rem' }}>
                                    Record Class
                                </div>
                                <div className="row pl-2 pt-5 " style={{ fontSize: '1.25rem' }}>
                                    Create and publish <br></br>a new class
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 d-flex justify-content-around">
                            <div className="col-5 mh-100 bg-white">
                                <div className="row pl-2" style={{ fontSize: '2rem' }}>
                                    Availablity
                                </div>
                                <div className="row pl-2 pt-5" style={{ fontSize: '1.25rem' }}>
                                    Status<br></br>
                                    Limited Availablity
                                </div>
                            </div>
                            <div className="col-5 "></div>
                        </div>
                    </div>
                </div>

                {/* Reusable Component  */}
                <div className="row">
                    <div className="col-md-6 p-0 mt-5">
                        <div className="card__row">
                            <SmallCard/>
                            <SmallCard/>
                        </div>
                    </div>
                </div>
                {/* start */}
                <div className="col-md-6  mt-5 bg-white">
                    <div className="float-right p-1" style={{ fontSize: '1.25rem' }}>
                        <a href="#" style={{ color: 'blue' }}>
                            See upcomming
                        </a>
                    </div>
                    <div style={{ fontSize: '2.5rem' }}>
                        Thursday 30th <br></br> July 2020
                    </div>
                    <div className="row pt-5 d-flex justify-content-between">
                        <div className="col-5" style={{ fontSize: '1.2rem' }}>
                            Upcomming Classes<br></br>4
                        </div>
                        <div className="col-7" style={{ fontSize: '1.2rem' }}>
                            Total Spaces<br></br>
                            37/40
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;