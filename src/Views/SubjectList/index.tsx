import React, { useState, useEffect } from 'react';

import SubjectList from './SubjectList';
import { useDispatch, useSelector } from 'react-redux';
import { getSubjectListAPIcall } from '../../Redux/Actions/subjectAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { checkValue } from '../../Helper/checkValue';

const index: React.FunctionComponent = () => {
    const [subjectList, setSubjectList] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubjectListAPIcall());
    }, []);

    const subjects = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);
    useEffect(() => {
        if (subjects) {
            console.log('data check: ', subjects);
            const data = subjects.map((item: any) => {
                return {
                    class: checkValue(item?.className),
                    children: checkValue(item?.totalStudents),
                    yearGroup: checkValue(item?.yearGroup),
                    teacher: checkValue(item?.teacherName),
                    department: checkValue(item?.departmentName),
                };
            });
            setSubjectList(data);
        }
    }, [subjects]);

    return <SubjectList subjects={subjectList} />;
};

export default index;
