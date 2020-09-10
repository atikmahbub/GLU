import React, { useEffect, useState } from 'react';
import commonImg from '../../Assets/images';
import { useSelector, useDispatch } from 'react-redux';
import { studentDetailsProps } from '../../Interfaces/studentModule';
import { useLocation } from 'react-router-dom';
import ProfileTitle from '../../components/Dashobard/ProfileTitle';
import AttendenceRow from '../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../components/Dashobard/UserDetails/PresentRow';
import TimeTableRow from '../../components/Dashobard/UserDetails/TimeTableRow';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';
import FeeExamResultRow from '../../components/Dashobard/UserDetails/FeeExamResultRow';
import SubjectHomeworkRowThreeCol from '../../components/Dashobard/UserDetails/SubjectHomeworkRowThreeCol';
import SessionRow from '../../components/Dashobard/UserDetails/SessionRow';
import HeadingSubHeadingOneBtn from '../../components/Dashobard/UserDetails/HeadingSubHeadingOneBtn';

const Index: React.FunctionComponent = () => {
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
        { col1: 'Computer', col2: 5, col3: 'James Arthur' },
        { col1: 'Biology', col2: 10, col3: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 4, col3: 'Jhonny Depp' },
        { col1: 'Physics', col2: 5, col3: 'Chris Hemsworth' },
        { col1: 'Computer', col2: 5, col3: 'James Arthur' },
        { col1: 'Biology', col2: 10, col3: 'Morgan Freeman' },
        { col1: 'Chemistry', col2: 4, col3: 'Jhonny Depp' },
        { col1: 'Physics', col2: 5, col3: 'Chris Hemsworth' },
    ];
    return (
        <UserDetailsWrapper>
            <HeadingSubHeadingOneBtn
                title="Mathematics"
                subtitle="Head of Department: Shehan Abeysinghe"
                buttonText="Print"
                linkTo="/dashboard"
            />
            <AttendenceRow />
            <PresentRow />
            <SubjectHomeworkRowThreeCol
                data={data}
                tableName="Class Groups"
                colHead1="Class"
                colHead2="Year Group"
                colHead3="Teacher"
            />
            <FeeExamResultRow />
            <SessionRow />
            <TimeTableRow />
        </UserDetailsWrapper>
    );
};

export default Index;
