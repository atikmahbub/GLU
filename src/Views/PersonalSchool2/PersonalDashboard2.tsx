import React from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SmallCard from '../../components/SmallCard';
import MadeBy from '../Footer/MadeBy';
import BackgroundTemplate from '../../components/BackgroundTemplate';
import ProgressBar from './ProgressBar';
import CalendarComponent from '../../components/CalendarComponent';
import { common } from '@material-ui/core/colors';
const PersonalDashboard2: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Set Class' },
        { link: '', name: 'Messages' },
        { link: '', name: 'Shop' },
    ];
    return (
        <div className="personal_school">
            <NavigationMenu menuList={menu} />
            <Typography className="personal_school_dashboard_title">
                Personal <span className="school-color"> Dashboard</span>
            </Typography>
            <div className="personal_school_container">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col1 ">
                            <div className="card__row card_row1">
                                <SmallCard mainHeading={'My Classes'} subHeading1={'Published'} subHeading2={'57'} />
                                <SmallCard
                                    mainHeading={'Record Class'}
                                    subHeading1={'Create and publish'}
                                    subHeading2={'a new class'}
                                />
                            </div>
                            <div className="card__row card_row2">
                            <SmallCard
                                    mainHeading={'Extra Curricular'}
                                    subHeading1={'Published'}
                                    subHeading2={'13'}
                                />
                                <SmallCard
                                    mainHeading={'Whiteboard'}
                                    subHeading1={'Try out what the class '}
                                    subHeading2={'be like'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col2">
                            <div className="card__row card_row3">
                                <SmallCard mainHeading={'Availablity'} subHeading1={'Status'} subHeading2={'Limited Availablity'} />
                                <SmallCard
                                    mainHeading={'Homework'}
                                    subHeading1={'Assigned'}
                                    subHeading2={'17'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row set__margin">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col3 ">
                            <div className="card__row card_row4">
                                <SmallCard mainHeading={'Exam Results'} subHeading1={'Marks Due'} subHeading2={'3'} />
                                <SmallCard
                                    mainHeading={'Recommendation'}
                                    subHeading1={'Total'}
                                    subHeading2={'57'}
                                />
                            </div>
                        </div>
                    </div>

                    <CalendarComponent
                        mainHeading={'Thursday 30th July 2020'}
                        heading1={'Upcomming Classes'}
                        heading2={'Total Spaces'}
                        subHeading1={'4'}
                        subHeading2={'37/40'}
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col4 "></div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_col5">
                            <div className="card__row card_row5">
                                <SmallCard mainHeading={'My Classes'} subHeading1={'Published'} subHeading2={'57'} />
                                <SmallCard
                                    mainHeading={'Record Class'}
                                    subHeading1={'Create and Publish'}
                                    subHeading2={'7/20 Spaces'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal_school_background">
                <div className="main_container p-0">
                    <BackgroundTemplate imgSrc={commonImg.ladyProfile} />
                </div>
            </div>
            <div className="personal_school_container_2">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_2_col6">
                            <Typography className="subtext">Your Day</Typography>
                            <Typography className="subtext">9:21 am</Typography>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="personal_school_container_2_col7">
                            <div className="main_subcontainer">
                                <ProgressBar
                                    time={'8:30-9:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Attendance'}
                                    typeNumber={'34/40'}
                                    classType={'8A'}
                                    progress={85}
                                />
                                <div className="row">
                                    <div className="line"></div>
                                </div>
                                <ProgressBar
                                    time={'9:30-10:25am'}
                                    subject={'Maths'}
                                    typeClassroom={'Classroom'}
                                    type={'Students'}
                                    typeNumber={'35'}
                                    classType={'8A'}
                                    progress={10}
                                />
                                <div className="row">
                                    <div className="line"></div>
                                </div>
                                <ProgressBar time={'10:30-11:25am'} subject={'Break'} progress={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal_footer">
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </div>
    );
};
export default PersonalDashboard2;