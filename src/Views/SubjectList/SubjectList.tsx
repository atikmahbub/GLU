import React, { useState, useEffect } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import FormContainer from './FormContainer';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';

interface props {
    triggerModal: () => void;
    setEditData: Function
}
const SubjectList: React.FunctionComponent<props> = ({ triggerModal, setEditData }) => {
    const [subjects, setSubjects] = useState([]);
    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);

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
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Subject"
                    btnTitle="Create Class Group"
                    btnIcon={<Add />}
                    trigger={triggerModal}
                />
            </CardContainer>
            <FormContainer setEditData={setEditData} subjectList={subjects} onClick={triggerModal} />
        </div>
    );
};

export default SubjectList;
