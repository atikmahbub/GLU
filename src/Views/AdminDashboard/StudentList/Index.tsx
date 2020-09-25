import React, { useEffect, useState } from 'react';
import TeacherList from '../../TeacherList';
import { useDispatch, useSelector } from 'react-redux';
import { getallStudentAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import StudentList from './StudentList';

const Index = () => {
    const dispatch = useDispatch();
    const student = useSelector((state: any) => state.superAdminReducer.studentList);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        dispatch(getallStudentAPIcall());
        console.log("======= action dispatche =========student")
    }, []);
    useEffect(() => {
        // alert(JSON.stringify(data))
        if (student) {
            const data = student.map((element: any) => {
                return {
                    userId: element.userId,
                    studentId: element.studentId,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    gender: element.gender,
                    phoneNumber: element.phoneNumber,
                    location: element.location,
                    registeredOn: element.registeredOn,
                    isVerified: element.isVerified,

                };
            });
            
            setStudentList(data);
        }
    }, [student]);

    // return <TeacherList teacherList={teacherList} />;
    return <StudentList studentList={studentList}/>
};

export default Index;
