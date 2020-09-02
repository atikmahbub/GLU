import React, { useEffect, useState } from 'react';
import commonImg from '../../Assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { studentDetailsProps } from '../../Interfaces/studentModule';
import { useLocation } from 'react-router-dom';
import { getStudentDetailsAPIcall } from '../../Redux/Actions/studentAction';
import ProfileTitle from '../../components/Dashobard/ProfileTitle';
import AttendenceRow from '../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../components/Dashobard/UserDetails/PresentRow';
import SubjectHomeworkRow from '../../components/Dashobard/UserDetails/SubjectHomeworkRow';
import FeeExamResultRow from './FeeExamResultRow';
import ECArow from '../../components/Dashobard/UserDetails/ECArow';
import TimeTableRow from '../../components/Dashobard/UserDetails/TimeTableRow';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';

const StudentDetails: React.FunctionComponent = () => {
    const studentInfo = useSelector((state: any) => state.studentReducer.studentDetails);
    const routes = useLocation();
    const dispatch = useDispatch();
    const [details, setDetails] = useState<studentDetailsProps>({
        name: '',
        email: '',
        class: '',
        subjects: '',
        phoneNumber: '',
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
    const data = [
        { col1: 'Computer', col2: 'James Arthur' },
        { col1: 'Biology', col2: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 'Jhonny Depp' },
        { col1: 'Physics', col2: 'Chris Hemsworth' },
    ];
    return (
        <UserDetailsWrapper>
            <ProfileTitle />
            <AttendenceRow />
            <PresentRow />
            <SubjectHomeworkRow data={data} tableName="Subjects" colHead1="Class" colHead2="Teacher" />
            <FeeExamResultRow />
            <ECArow />
            <TimeTableRow />
        </UserDetailsWrapper>
    );
};

export default StudentDetails;
