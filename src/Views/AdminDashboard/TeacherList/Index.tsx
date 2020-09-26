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
    }, []);
    useEffect(() => {
        if (video) {
            const data = video.map((element: any) => {
                return {
                    userId: checkValue(element.userId),
                    teacherId: checkValue(element.teacherId),
                    firstName: checkValue(element.firstName),
                    lastName: checkValue(element.lastName),
                    gender: checkValue(element.gender),
                    phoneNumber: checkValue(element.phoneNumber),
                    location: checkValue(element.location),
                    registeredOn: checkValue(element.registeredOn),
                    docType: 'Driving Licence',
                    docStatus: 'Pending'
                };
            });
            setTeacherList(data);
        }
    }, [video]);

    // return <TeacherList teacherList={teacherList} />;
    return <TeacherList teacherList={teacherList} />;
};

export default Index;
