import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallParentsAPIcall } from '../../../Redux/Actions/superAdminActions';
import { checkValue } from '../../../Helper/checkValue';
import commonImg from '../../../Assets/images';
import ParentsList from './ParentsList';

const Index = () => {
    const dispatch = useDispatch();
    const parent = useSelector((state: any) => state.superAdminReducer.parentsList);
    const [parentsList, setParentsList] = useState([]);

    useEffect(() => {
        dispatch(getallParentsAPIcall());
        console.log("======= action dispatche =========Video")
    }, []);
    useEffect(() => {
        if (parent) {
            const data = parent.map((element: any) => {
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
    }, [parent]);

    // return <TeacherList teacherList={teacherList} />;
    return <ParentsList parentsList={parentsList}/>
};

export default Index;
