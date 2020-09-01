import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import commonImg from '../../Assets/images';
import { Typography } from '@material-ui/core';
import StudentFeeTable from './StudentFeeTable';
import StudentTimeTable from './StudentTimeTable';
import { studenttimetable } from './tabledata';
import ExamReportChart from './ExamReportChart';
import { useSelector, useDispatch } from 'react-redux';
import { studentDetailsProps } from '../../Interfaces/studentModule';
import { useLocation } from 'react-router-dom';
import { getStudentDetailsAPIcall } from '../../Redux/Actions/studentAction';
import ProfileTitle from '../../components/Dashobard/ProfileTitle';
import AttendenceRow from './AttendenceRow';
import PresentRow from './PresentRow';
import SubjectHomeworkRow from './SubjectHomeworkRow';
import FeeExamResultRow from './FeeExamResultRow';
import ECArow from './ECArow';
import TimeTableRow from './TimeTableRow';

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
        <div className="details-wrapper change_card_pd">
            <ProfileTitle/>
            <AttendenceRow/>
            <PresentRow/>
            <SubjectHomeworkRow/>
            <FeeExamResultRow/>
            <ECArow/>
            <TimeTableRow/>









            {/* <CardContainer>
                <div className="details-container">
                   
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            
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
                           
                        </div>
                        <div className="col-md-5">
                            
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
            </CardContainer> */}
      
        </div>
    );
};

export default StudentDetails;
