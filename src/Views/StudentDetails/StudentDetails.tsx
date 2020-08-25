import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import SubjectListTable from './SubjectListTable';
import StudentFeeTable from './StudentFeeTable';
import GraphChart from './GraphChart';
import StudentTimeTable from './StudentTimeTable';
import { studenttimetable } from './tabledata';
import ExamReportChart from './ExamReportChart';
import { useSelector, useDispatch } from 'react-redux';
import { studentDetailsProps } from '../../Interfaces/studentModule';
import { useLocation } from 'react-router-dom';
import { getStudentDetailsAPIcall } from '../../Redux/Actions/studentAction';

const StudentDetails: React.FunctionComponent = () => {
    const studentInfo = useSelector((state: any) => state.studentReducer.studentDetails);
    const routes = useLocation();
    const dispatch = useDispatch();
    const [details, setDetails] = useState<studentDetailsProps>({
        name: '',
        email: '',
        class: '',
        subjects: '',
        phoneNumber:'',
        timetable: [],
        profile: '',
    });
    // useEffect(()=>{
    //     if(routes.hasOwnProperty('state')){
    //         if ((routes as any).state.hasOwnProperty('id')) {
    //             dispatch(getStudentDetailsAPIcall((routes as any).state.id));
    //         }
    //     }
    // }, [])
    useEffect(() => {
        if (studentInfo) {
            const studentDetls = studentInfo.studentsDetail[0];
            const data = {
                name: studentDetls.first_name + ' ' + studentDetls.last_name,
                email: studentDetls.User.email,
                class: studentDetls.SchoolClassDetail.Class.name + ', ' + studentDetls.SchoolClassDetail.Section.name,
                subjects: studentDetls.SchoolClassDetail.Subjects,
                phoneNumber: studentDetls.User.phoneNumber,
                timetable: studentInfo.routine,
                profile: commonImg.photo,
            };
            setDetails(data);
        }
    }, [studentInfo]);
    return (
        <div className="details-wrapper">
            <CardContainer>
                <div className="top_container">
                    <div className="image_title_cotainer">
                        <img className="profile" src={commonImg.blueshirtman} alt=""/>
                        <div className="title_container">
                            <Typography className="heading">Olivia Preston</Typography>
                            <Typography className="title">2666 Junior Avenue, Atlanta, GA, 30303</Typography>
                        </div>
                        
                    </div>
                    <div className="button_container">
                            <Typography className="blue-text">Print</Typography>
                            <Typography className="blue-text visible">Visit details</Typography>
                        </div>
                </div>
            </CardContainer>
            <CardContainer>
                <div className="details-container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="profile-pic">
                                <img src={details.profile} />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="information-container">
                                <Typography className="heading">
                                    {details.name} <span>{details.class}</span>
                                </Typography>
                                <Typography className="title">{details.phoneNumber}</Typography>
                                <Typography className="title">{details.email}</Typography>
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
                                <ExamReportChart />
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
