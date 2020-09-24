import React, { useState, useEffect } from 'react';

import SubjectList from './SubjectList';
import { useDispatch, useSelector } from 'react-redux';
import { addNewSubjectAPIcall, updateSubjectAPIcall, getSubjectListAPIcall } from '../../Redux/Actions/subjectAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    // const [departments, setDepartments] = useState([]);
    const [editData, setEditData] = useState<any>();
    const [state, setState] = useState<any>({ class: '' });
    // const departmentList = useSelector((state: any) => state.schoolReducer.departmentList);

    const loader = useSelector((state: rootReducerType) => state.uiReducer.loader);
    const handleToggler = () => {
        setToggler(!toggler);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSubjectListAPIcall());
    }, []);

    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);
    console.log(subjectList);
    useEffect(() => {
        if (subjectList) {
            console.log('data check: ', subjectList);
            //     const data = {
            //         department: subjectList.class_section_subject_details.Department.name,
            //         yearGroup: subjectList.class_section_subject_details.Class.name,
            //         formGroup: subjectList.class_section_subject_details.Section.name,
            //         teacher: 'john',
            //         student: subjectList.class_section_subject_details.student_count,
            //         action: '',
            //     };
            //     const subjects = subjectList.class_section_subject_details.Subjects.map((item: any) => {
            //         return { ...data, classGroup: item.name, subjectId: item.id };
            //     });
            //     setSubjects(subjects);
        }
    }, [subjectList]);

    return <SubjectList setEditData={setEditData} />;
};

export default index;
