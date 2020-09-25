import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallSchoolAPIcall } from '../../../Redux/Actions/superAdminActions';
import SchoolList from './SchoolList'

const Index = () => {
    const dispatch = useDispatch();
    const school = useSelector((state: any) => state.superAdminReducer.schoolList);
    const [schoolList, setSchoolList] = useState([]);

    useEffect(() => {
        dispatch(getallSchoolAPIcall());
    }, []);
    useEffect(() => {
        if (school) {
            const data = school.map((element: any) => {
                return {
                    schoolName: element.schoolName,
                    website: element.website,
                    phoneNumber: element.phoneNumber,
                    id: element.id,
                    createdAt: element.createdAt,
                    isActive: element.User.isActive == null ? true : element.User.isActive,
                    userId: element.User.id,
                };
            });

            setSchoolList(data);
        }
    }, [school]);
    return <SchoolList schoolList={schoolList}/>
};

export default Index;
