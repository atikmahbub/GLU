import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';

interface props {
    triggerModal: () => void;
}
const Departments: React.FunctionComponent<props> = ({triggerModal}) => {
    const routes = useHistory();
    const redirectDetails = () => {
        routes.push({pathname:'/dashboard/department-details', state:{
            breadcrumb: '/dashboard/department details'
        }})
    }
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Departments"
                    btnIcon={<Add />}
                    btnTitle="Add department"
                    trigger={triggerModal}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                width: '90%',
                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '10%',
                                title: 'Action',
                                field: 'action',
                                render: () => <ActionToolbar showDetail={true} detailClick={redirectDetails}/>,
                            },
                        ]}
                        rowData={[
                            {
                                department: 'Art Department',
                                action: '',
                            },
                            {
                                department: 'Biology Department',
                                action: '',
                            },
                            {
                                department: 'Business Studies Department',
                                action: '',
                            },
                            {
                                department: 'Chemistry Department',
                                action: '',
                            },
                            {
                                department: 'Computer Department',
                                action: '',
                            },
                            {
                                department: 'English Department',
                                action: '',
                            },
                            {
                                department: 'Mathematics Department',
                                action: '',
                            },
                            {
                                department: 'Physical Education Department',
                                action: '',
                            },
                            {
                                department: 'Physics Department',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default Departments;
