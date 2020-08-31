import React from 'react';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SmallCard from '../../components/SmallCard';
import ResuableTimeline from '../../components/ReusableTimeline';
import Landscape from './Landscape';
import CalendarComponent from '../../components/CalendarComponent';

export default function Personal() {
    return (
        <div>
            
            <div className="main_container_dashboard">
                <div className="row set__margin">
                    <div className="col-md-6 p-0">
                        <div className="main_container_dashboard_col1 bg-white">
                            <Landscape
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

                        </div>
                    </div>
                </div>

                {/* Reusable Component  */}
                <div className="row wallet__date__container">
                    <div className="col-md-6  p-0">
                        <div className="main_container_dashboard_col3">
                            <div className="card__row card_row3">
                                <SmallCard mainHeading={'Wallet'} subHeading1={'Balance'} subHeading2={'AED320'} />
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
                </div>

            </div>


            <div className="second_component">
                <div className="main_container3">
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
        </div>
    )
}