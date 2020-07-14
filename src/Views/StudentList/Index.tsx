import React, { useEffect, useState } from 'react';
import StudentList from './StudentList';
import { useDispatch, useSelector } from 'react-redux';
import { getallStudentAPIcall } from '../../Redux/Actions/studentAction';
import commonImg from '../../Assets/images';
import { checkValue } from '../../Helper/checkValue';

const Index = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: any) => state.studentReducer.studentData);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        if (students) {
            const data = students.map((element: any) => {
                return {
                    profile: element.profile ? element.profile : commonImg.photo,
                    class: element.SchoolClassDetail ? checkValue(element.SchoolClassDetail?.Class.name) : 'first',
                    section: element.SchoolClassDetail ? checkValue(element.SchoolClassDetail?.Section.name) : 'A',
                    email: checkValue(element.User?.email),
                    gender: checkValue(element.User?.gender),
                    name: checkValue(element?.first_name) + ' ' + checkValue(element?.last_name),
                    first_name: checkValue(element?.first_name),
                    last_name: checkValue(element?.last_name),
                    yearGroup: element.SchoolClassDetail ? checkValue(element.SchoolClassDetail?.Class.name) : 'first',
                    formGroup: element.SchoolClassDetail ? checkValue(element.SchoolClassDetail?.Section.name) : 'A',
                    id: element.id,
                    action: '',
                };
            });
            setStudentList(data);
        }
    }, [students]);
    useEffect(() => {
        dispatch(getallStudentAPIcall());
    }, []);
    return <StudentList students={studentList} />;
};

export default Index;
