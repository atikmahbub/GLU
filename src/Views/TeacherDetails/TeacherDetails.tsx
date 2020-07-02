import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import StudentListTable from './StudentListTable';
import SubjectListTable from './SubjectListTable';
import StudentTimeTable from './StudentTimeTable';
import { studenttimetable, studentECA } from './tabledata';
import ColumnChart from './ColumnChart';
import StudentAttendanceChart from './StudentAttendanceChart';

const TeacherDetails: React.FunctionComponent = () => {
    return (
        <div className="details-wrapper">
            <CardContainer>
                <div className="details-container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="profile-pic">
                                <img src={commonImg.photo} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="information-container">
                                <Typography className="heading">Alex chen</Typography>
                                <Typography className="title">#89795</Typography>
                                <Typography className="title">+91 7785844718</Typography>
                                <Typography className="title">alexchen@gmail.com</Typography>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <StudentListTable />
                        </div>
                        <div className="col-md-6">
                            <div className="data-container">
                                <SubjectListTable />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <StudentAttendanceChart />
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="divider"></div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <ColumnChart clickHandler={()=>{}} marker1="Completed" marker2="not Completed" chartName="Homework" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="exam-report-status-container">
                                <ColumnChart clickHandler={()=>{}} marker1="Passed" marker2="Failed" chartName="Exam" selectType="exam" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <StudentTimeTable tableName="Timetable" data={studenttimetable} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-10">
                            <StudentTimeTable tableName="Extra curricular activity" data={studentECA} />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default TeacherDetails;
