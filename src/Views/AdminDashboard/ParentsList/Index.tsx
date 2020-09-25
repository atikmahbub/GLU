import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallTeacherAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import ParentsList from './ParentsList';

const Index = () => {
    const dispatch = useDispatch();
    const video = useSelector((state: any) => state.superAdminReducer.teacherList);
    const [parentsList, setParentsList] = useState([]);

    useEffect(() => {
        dispatch(getallTeacherAPIcall());
        console.log("======= action dispatche =========Video")
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
            setParentsList(data);
        }
    }, [video]);

    // return <TeacherList teacherList={teacherList} />;
    return <ParentsList parentsList={parentsList}/>
};

export default Index;
