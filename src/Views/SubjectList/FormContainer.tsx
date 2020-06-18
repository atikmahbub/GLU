import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { Button } from '@material-ui/core';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';

const FormContainer: React.FunctionComponent = () => {
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
                            width: '90%',
                            title: 'Subject',
                            field: 'subject',
                        },
                        {
                            width: '10%',
                            title: 'Action',
                            field: 'action',
                            render: () => <ActionToolbar />,
                        },
                    ]}
                    rowData={[
                        {
                            subject: 'Art',
                            action: '',
                        },
                        {
                            subject: 'Biology',
                            action: '',
                        },
                        {
                            subject: 'English Literature',
                            action: '',
                        },
                        {
                            subject: 'English Grammer',
                            action: '',
                        },
                        {
                            subject: 'Physics',
                            action: '',
                        },
                        {
                            subject: 'Chemistry',
                            action: '',
                        },
                        {
                            subject: 'Mathematics',
                            action: '',
                        },
                        {
                            subject: 'Hindi',
                            action: '',
                        },
                        {
                            subject: 'History & Civics',
                            action: '',
                        },
                        {
                            subject: 'Geography',
                            action: '',
                        },
                    ]}
                />
            </div>
        </CardContainer>
    );
};

export default FormContainer;
