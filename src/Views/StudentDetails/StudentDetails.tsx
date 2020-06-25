import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SubjectListTable from './SubjectListTable';
import StudentFeeTable from './StudentFeeTable';
import GraphChart from './GraphChart';
import StudentTimeTable from './StudentTimeTable';
import { studenttimetable } from './tabledata';
import ExamReportChart from './ExamReportChart';

const StudentDetails: React.FunctionComponent = () => {
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
                                <Typography className="heading">John Lee <span>Year 5, A</span></Typography>
                                <Typography className="title">+91 7785844718</Typography>
                                <Typography className="title">johnlee@gmail.com</Typography>
                                <Typography className="title">2666 Junior Avenue, Atlanta, GA, 30303</Typography>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <SubjectListTable />
                        </div>
                        <div className="col-md-5">
                            <div className="data-container">
                                <StudentFeeTable />
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
                        <div className="col-md-5">
                            <GraphChart
                                marker1="Present"
                                marker2="Absent"
                                chartName="Attendance"
                                available={20}
                                notavailalbe={4}
                            />
                        </div>
                        <div className="col-md-5">
                            <GraphChart
                                marker1="Completed"
                                marker2="Not completed"
                                chartName="Homework"
                                available={50}
                                notavailalbe={20}
                            />
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
                                <Typography className="sub-heading mb-4">Exam results</Typography>
                                <ExamReportChart/>
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
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentDetails;
