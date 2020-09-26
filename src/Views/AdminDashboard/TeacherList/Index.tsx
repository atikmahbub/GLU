import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallTeacherAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import TeacherList from './TeacherList';

const Index = () => {
    const dispatch = useDispatch();
    const video = useSelector((state: any) => state.superAdminReducer.teacherList);
    const [teacherList, setTeacherList] = useState([]);

    useEffect(() => {
        dispatch(getallTeacherAPIcall());
        console.log('======= action dispatche =========Video');
    }, []);
    useEffect(() => {
        if (video) {
            const data = video.map((element: any) => {
                return {
                    userId: element.userId,
                    teacherId: element.teacherId,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    gender: element.gender,
                    phoneNumber: element.phoneNumber,
                    location: element.location,
                    registeredOn: element.registeredOn,
                };
            });
            setTeacherList(data);
        }
    }, [video]);

    // return <TeacherList teacherList={teacherList} />;
    return <TeacherList teacherList={teacherList} />;
};

export default Index;
