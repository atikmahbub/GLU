import React, { useState, useEffect } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import {  Add } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import UserTable from '../../components/Dashobard/Table/UserTable';

interface props {
    triggerModal: () => void;
    setEditData: Function
}
const SubjectList: React.FunctionComponent<props> = ({ triggerModal, setEditData }) => {
    const [subjects, setSubjects] = useState([]);
    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);
    console.log(subjectList)
    useEffect(() => {
        if (subjectList) {
            const data = {
                department: subjectList.class_section_subject_details.Department.name,
                yearGroup: subjectList.class_section_subject_details.Class.name,
                formGroup: subjectList.class_section_subject_details.Section.name,
                teacher: 'john',
                student: subjectList.class_section_subject_details.student_count,
                action: '',
            };
            const subjects = subjectList.class_section_subject_details.Subjects.map((item: any) => {
                return {...data, classGroup: item.name, subjectId: item.id}
            });
            setSubjects(subjects);
        }
    }, [subjectList]);

    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    title="Class Groups"
                    btnTitle="Create Class Group"
                    btnIcon={<Add />}
                    trigger={triggerModal}
                />
            </CardContainer>
            <UserTable
                showFilter={true}
                redirectDetails={(value: any) => {}}
                handleEdit={(value: any) => {}}
                handleDelete={(value: any) => {}}
            />
        </div>
    );
};

export default SubjectList;
