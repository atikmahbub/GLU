import React, { useState, useEffect } from 'react';

import SubjectList from './SubjectList';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubjectAPIcall, updateSubjectAPIcall } from '../../Redux/Actions/subjectAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

import { getAllDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [editData, setEditData] = useState<any>();
    const [state, setState] = useState<any>({ class: '' });
    const departmentList = useSelector((state: any) => state.schoolReducer.departmentList);

    const loader = useSelector((state: rootReducerType) => state.uiReducer.loader);
    const handleToggler = () => {
        setToggler(!toggler);
    };

    const dispatch = useDispatch();
    useEffect(() => {
       
    }, []);

    useEffect(() => {
       
    }, [departmentList]);

    return <SubjectList setEditData={setEditData} />;
};

export default index;
