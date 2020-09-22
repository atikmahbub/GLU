import React, { useState, useEffect } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';

interface props {
    departmentList?: any;
}
const Departments: React.FunctionComponent<props> = ({ departmentList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();

    const redirectDetails = () => {
        routes.push('/dashboard/department-details');
    };
    const handleDelete = (id: number) => {
        dispatch(deleteDepartmentAPIcall(id));
    };
    const handleEdit = (data: any) => {};
    const handleRoute = () => {
        routes.push('/dashboard/department/add-new-department');
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Departments"
                    component="notification"
                    showNotification={true}
                    notificationIcon={<MailOutline />}
                    notificationText="Send notification"
                    btnIcon={<Add />}
                    btnTitle="Add department"
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
                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '15%',
                                title: 'No.of Students',
                                field: 'students',
                            },

                            {
                                width: '15%',
                                title: 'No.of Teachers',
                                field: 'teachers',
                            },
                            {
                                width: '23%',
                                title: 'Head of Department',
                                field: 'hod',
                            },
                            {
                                width: '23%',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        detailClick={() => redirectDetails()}
                                        // deleteClick={() => handleDelete(rowData.id)}
                                        // editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={departmentList}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default Departments;
