import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { Button } from '@material-ui/core';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';

interface props{
    onClick?: ()=> void
}
const FormContainer: React.FunctionComponent<props> = ({onClick}) => {
    return (
        <CardContainer>
            <div className="subject-container">
                <CardTable
                    filterRender={
                        <div className="subject-form-row  w-100">
                            <FormRow />
                            <Button className="filter-btn">Filter</Button>
                        </div>
                    }
                    showToolbar={true}
                    showPagination={true}
                    columns={[
                        {
                            width: '20%',
                            title: 'Class Groups',
                            field: 'classGroups',
                        },
                        {
                            width: '20%',
                            title: 'Department',
                            field: 'department',
                        },
                        {
                            width: '20%',
                            title: 'Year Group',
                            field: 'yearGroup',
                        },
                        {
                            width: '20%',
                            title: 'Form Group',
                            field: 'formGroup',
                        },
                        {
                            width: '20%',
                            title: 'Teacher',
                            field: 'teacher',
                        },
                        {
                            width: '20%',
                            title: 'Student',
                            field: 'student',
                        },
                        {
                            width: '10%',
                            title: 'Action',
                            field: 'action',
                            render: () => <ActionToolbar renderComponent={<li>
                                <Button onClick={onClick} className="edit-btn" fullWidth>
                                    Section
                                </Button>
                            </li>}/>,
                        },
                    ]}
                    rowData={[
                        {
                            classGroups: 'Art',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'Biology',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'English Literature',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'English Grammer',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'Physics',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'Chemistry',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'Mathematics',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'Hindi',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'History & Civics',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                        {
                            classGroups: 'Geography',
                            department: 'Art',
                            yearGroup: '9th',
                            formGroup: 'A',
                            teacher: 'john',
                            student: 28,
                            action: '',
                        },
                    ]}
                />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
