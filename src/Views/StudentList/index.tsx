import React, { useEffect, useState } from 'react';
import StudentList from './StudentList';
import { useDispatch, useSelector } from 'react-redux';
import { getallStudentAPIcall } from '../../Redux/Actions/studentAction';
import commonImg from '../../Assets/images';

const Index = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: any) => state.studentReducer.studentData);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        if (students) {
            const data = students.map((element: any) => {
                return {
                    profile: element.profile ? element.profile : commonImg.photo,
                    name: element.first_name + ' ' + element.last_name,
                    yearGroup: element.SchoolClassDetail.Class.name,
                    formGroup: element.SchoolClassDetail.Section.name,
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
    return <StudentList students={studentList}/>;
};

export default Index;
