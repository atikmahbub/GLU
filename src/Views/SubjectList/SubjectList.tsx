import React, { useState, useEffect } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { Add, MailOutline } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router';

interface props {
    setEditData: Function;
}
const SubjectList: React.FunctionComponent<props> = ({ setEditData }) => {
    const [subjects, setSubjects] = useState([]);
    const subjectList = useSelector((state: rootReducerType) => state.subjectReducer.subjectList);
    console.log(subjectList);
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
                return { ...data, classGroup: item.name, subjectId: item.id };
            });
            setSubjects(subjects);
        }
    }, [subjectList]);

    const route = useHistory();
    const handleRoute = () => {
        route.push('/dashboard/class-group/add-class-group');
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Class Groups"
                    btnTitle="New Class Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    btnIcon={<Add />}
                    trigger={handleRoute}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '40%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '15%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '15%',
                                title: 'Year Group',
                                field: 'yearGroup',
                            },
                            {
                                width: '23%',
                                title: 'Teacher',
                                field: 'teacher',
                            },
                            {
                                width: '23%',
                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '23%',
                                title: 'Action',
                                field: 'action',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                    // showDetail={true}
                                    // detailClick={() => redirectDetails(rowData.id)}
                                    // deleteClick={() => handleDelete(rowData.id)}
                                    // editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={[
                            {
                                class: 'Year 4 Maths Set 5',
                                children: '122',
                                yearGroup: 'A',
                                teacher: 'Mr.Shehan Abeysinghe',
                                department:'Mathematics'
                            },
                            {
                                class: 'Year 4 Business Studies Set 1',
                                children: '122',
                                yearGroup: 'A',
                                teacher: 'Mrs. Angelina Jolie',
                                department:'Business Studies'
                            },
                            {
                                class: 'Year 9 Science Set 2',
                                children: '122',
                                yearGroup: 'A',
                                teacher: 'Mr. Robert Stark',
                                department:'Science'
                            },
                            {
                                class: 'Year 4 Maths Set 5',
                                children: '122',
                                yearGroup: 'A',
                                teacher: 'Mrs. Alexandra Smith',
                                department:'Mathematics'
                            },
                            {
                                class: 'Year 4 Business Studies Set 1',
                                children: '122',
                                yearGroup: 'A',
                                teacher: 'Mr.Shehan Abeysinghe',
                                department:'Mathematics'
                            },
                        ]}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default SubjectList;
