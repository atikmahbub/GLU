import React, { useEffect } from 'react';
import StudentList from './StudentList';
import { useDispatch } from 'react-redux';
import { getallStudentAPIcall } from '../../Redux/Actions/studentAction';

const index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallStudentAPIcall());
    });
    return <StudentList />;
};

export default index;
