import React, { useEffect, useState } from 'react';

import Departments from './Departments';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [departments, setDepartments] = useState([]);
    const departmentList = useSelector((state: any) => state.schoolReducer.departmentList);

    useEffect(() => {
        dispatch(getAllDepartmentAPIcall());
    }, []);
    useEffect(() => {
        if (departmentList) {
            const data = departmentList.map((item: any) => {
                return {
                    students: item.Students.length,
                    teachers: item.Teachers.length,
                    hod: item.hod,
                    department: item.departmentName,
                };
            });
            setDepartments(data);
        }
    }, [departmentList]);

    return <Departments departmentList={departments} />;
};

export default index;
