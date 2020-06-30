import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import HeadDepartment from './HeadDepartment';
import { Typography } from '@material-ui/core';
import SessionList from './SessionList';
import SubjectListTable from './SubjectListTable';
import TeacherList from './TeacherList';
import DepartmentTimeTable from './DepartmentTimeTable';
import GraphChart from '../../components/Charts/GraphChart';
import { teachertimetable } from './tabledata';
import EventCalender from '../../components/Dashobard/EventCalender';

const DepartmentDetails: React.FunctionComponent = () => {
    return (
        <div className="details-wrapper">
            <CardContainer>
                <div className="details-container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="main-head-container">
                                <Typography className="sub-heading text-center mb-4">Head Of Department</Typography>
                                <HeadDepartment name="Ching Wing" phone="xxxxxxxxx" email="xyz@gmail.com" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="comming-session-container">
                                <Typography className="sub-heading text-center mb-4">Upcomming Session</Typography>
                                <SessionList />
                            </div>
                            <div className="divider"></div>
                            <div className="event-calender-container mb-4">
                                <EventCalender />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <TeacherList />
                                </div>
                                <div className="col-md-6">
                                    <SubjectListTable />
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <GraphChart
                                        marker1="Present"
                                        marker2="Absent"
                                        chartName="Attendance"
                                        available={100}
                                        notavailalbe={20}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <GraphChart
                                        marker1="Present"
                                        marker2="Absent"
                                        chartName="Homework"
                                        available={100}
                                        notavailalbe={50}
                                    />
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="teacher-time-table">
                                <DepartmentTimeTable tableName="Department Timetable" data={teachertimetable} />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default DepartmentDetails;
