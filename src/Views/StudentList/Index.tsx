import React, { useEffect, useState } from 'react';
import StudentList from './StudentList';
import { useDispatch, useSelector } from 'react-redux';
import { getallStudentAPIcall } from '../../Redux/Actions/studentAction';
import commonImg from '../../Assets/images';
import { checkValue } from '../../Helper/checkValue';
import { useLocation } from 'react-router';
import { getAllStudentTeacherAPIcall } from '../../Redux/Actions/teacherAction';

const Index = () => {
    const dispatch = useDispatch();
    const students = useSelector((state: any) => state.studentReducer.studentData);
    const [studentList, setStudentList] = useState([]);
    const [teacherdata, setTeacherdata] = useState({ name: '' });
    const [teacherMode, setTeacherMode] = useState(false);
    const findRoutes = useLocation();
    useEffect(() => {
        console.log(findRoutes);
        if (findRoutes.hasOwnProperty('state')) {
            if ((findRoutes as any)?.state?.hasOwnProperty('forTeacher')) {
                setTeacherdata((findRoutes as any).state.teacherData);
                dispatch(getAllStudentTeacherAPIcall((findRoutes as any).state.teacherData.staffId));
                setTeacherMode(true);
            } else {
                dispatch(getallStudentAPIcall());
            }
        }
    }, []);
    useEffect(() => {
        if (students) {
            const data = students.map((element: any) => {
                return {
                    profile: element.Student?.User?.profile ? element.Student?.User?.profile : commonImg.photo,
                    yearGroup: element.ClassSection ? checkValue(element.ClassSection?.Class.title) : 'first',
                    formGroup: element.ClassSection ? checkValue(element.ClassSection?.Section.sectionName) : 'A',
                    email: checkValue(element?.Student?.User?.email),
                    gender: checkValue(element.Student?.gender),
                    name: checkValue(element.Student?.firstName) + ' ' + checkValue(element.Student?.lastName),
                    id: element?.Student?.id,
                    firstName: checkValue(element.Student?.firstName),
                    lastName: checkValue(element.Student?.lastName),
                    fatherName: checkValue(element.Student?.fatherName),
                    motherName: checkValue(element.Student?.motherName),
                };
            });
            setStudentList(data);
        }
    }, [students]);

    console.log(studentList);
    return <StudentList students={studentList} teacherMode={teacherMode} teacherdata={teacherdata} />;
};

export default Index;
