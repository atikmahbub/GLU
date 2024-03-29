import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { studentDetailsProps } from '../../Interfaces/studentModule';
import { useLocation } from 'react-router-dom';
import {
    getStudentDetailsAPIcall,
    studentAttDetailAPIcall,
    studentExamDetailsAPIcall,
    studentHomeworkDetailsAPIcall,
} from '../../Redux/Actions/studentAction';
import ProfileTitle from '../../components/Dashobard/ProfileTitle';
import AttendenceRow from '../../components/Dashobard/UserDetails/AttendenceRow';
import PresentRow from '../../components/Dashobard/UserDetails/PresentRow';
import SubjectHomeworkRow from '../../components/Dashobard/UserDetails/SubjectHomeworkRow';
import FeeExamResultRow from './FeeExamResultRow';
import ECArow from '../../components/Dashobard/UserDetails/ECArow';
import TimeTableRow from '../../components/Dashobard/UserDetails/TimeTableRow';
import UserDetailsWrapper from '../../Containers/Dashboard/UserDetailsWrapper';
import { checkValue } from '../../Helper/checkValue';

const StudentDetails: React.FunctionComponent = () => {
    const studentInfo = useSelector((state: any) => state.studentReducer.studentDetails);
    const studentAttendance = useSelector((state: any) => state.studentReducer.studentAttendance);
    const examDetails = useSelector((state: any) => state.studentReducer.examDetails);
    const studentHwDetails = useSelector((state: any) => state.studentReducer.studentHwDetails);

    const [teacherSubject, setTeacherSubject] = useState([]);
    const [studentDetails, setStudentDetails] = useState<any>();
    const [studentId, setStudentId] = useState(0);


    const [examData, setExamData] = useState([0, 0, 0]);
    const [yearPercentage, setYearPercentage] = useState<any>(0);

    const [homeWorkData, setHomeWorkData] = useState({
        complete: 40,
        incomplete: 40,
    });

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
    useEffect(() => {
        if (routes.hasOwnProperty('state')) {
            if ((routes as any).state.hasOwnProperty('studentDetails')) {
                const id = (routes as any).state.studentDetails.id;
                dispatch(getStudentDetailsAPIcall(id));
                dispatch(studentExamDetailsAPIcall(id));
                dispatch(studentHomeworkDetailsAPIcall(id));
                setStudentDetails((routes as any).state.studentDetails);
                setStudentId((routes as any).state.studentDetails.id);
                console.log(routes)
            }
        }
    }, []);
    useEffect(() => {
        if (studentInfo) {
            const data = studentInfo.map((item: any) => {
                const teacher = item?.Teacher;
                return {
                    col1: checkValue(teacher?.TeacherSubjects[0]?.Subject?.subjectName),
                    col2: checkValue(teacher?.firstName) + ' ' + checkValue(teacher?.lastName),
                };
            });
            setTeacherSubject(data);
        }
    }, [studentInfo]);

    const handleDateRange = (data: any) => {
        const startDate = data[0].startDate.toISOString().split('T')[0];
        const endDate = data[0].endDate.toISOString().split('T')[0];
        console.log(startDate, endDate);
        if (studentId !== 0) {
            dispatch(studentAttDetailAPIcall(studentId, startDate, endDate));
        }
    };
    useEffect(() => {
        if (examDetails) {
            const data = examDetails.result.map((item: any) => {
                return item.total;
            });
            setExamData(data);
            setYearPercentage(Number(examDetails.yearPercent).toFixed(2))
        }
    }, [examDetails]);
    useEffect(() => {
        if (studentHwDetails) {
            const data = {
                complete: studentHwDetails.allHomeworkCount,
                incomplete: studentHwDetails.incompleteCount,
            };
            setHomeWorkData(data);
        }
    }, [studentHwDetails]);

    return (
        <UserDetailsWrapper>
            <ProfileTitle data={studentDetails} />
            <AttendenceRow attendance={studentAttendance} dateRange={handleDateRange} />
            <PresentRow attendance={studentAttendance} />
            <SubjectHomeworkRow
                data={teacherSubject}
                hwDetails={homeWorkData}
                tableName="Subjects"
                colHead1="Class"
                colHead2="Teacher"
            />
            <FeeExamResultRow toalPercent={yearPercentage} studentId={studentId} studentDetails={studentDetails} barData={examData} />
            <ECArow />
            <TimeTableRow />
        </UserDetailsWrapper>
    );
};

export default StudentDetails;
