import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import UserTable from '../../components/Dashobard/Table/UserTable';
import { useHistory } from 'react-router';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';

interface props {
    classList?: any[];
}
const ClassList: React.FunctionComponent<props> = ({ classList }) => {
    const routes = useHistory();

    const handleToggler = () => {
        routes.push('/dashboard/add-year-group');
    };
    const handleRow = () => {
        routes.push('/dashboard/year-group/details');
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Year Groups"
                    btnIcon={<Add />}
                    btnTitle="Add Year Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        rowClick={handleRow}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '23%',
                                title: 'Group',
                                field: 'group',
                            },
                            {
                                width: '23%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '23%',
                                title: 'Form Groups',
                                field: 'formGroup',
                            },
                            {
                                width: '23%',
                                title: 'Head of Year',
                                field: 'hoy',
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
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                group: 'Year 4',
                                children: '122',
                                formGroup: 'A',
                                hoy: 'Mr.Shehan Abeysinghe',
                            },
                        ]}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default ClassList;
