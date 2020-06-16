import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle, MoreHoriz } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import CustomSwitch from '../../components/Button/CustomSwitch';

interface colDataType {
    profile: string;
    name: string;
    department: string;
    designation: string;
    action: string;
}
const PermissionList: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({pathname:'/dashboard/student/add-new-teacher', state:{
            breadcrumb: '/dashboard/teacher/Add New Teacher'
        }})
    }
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Permission"
                    btnIcon={<Add />}
                    btnTitle="Add Teacher"
                    component="select"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                width: '23%',
                                title: 'Permission',
                                field: 'permission',
                            },
                            {
                                width: '23%',

                                title: 'View',
                                field: 'view',
                                render: ()=>(<CustomSwitch/>)
                            },
                            {
                                width: '23%',

                                title: 'Update',
                                field: 'update',
                                render: ()=>(<CustomSwitch/>)
                            },
                            {
                                width: '23%',

                                title: 'Add/Delete',
                                field: 'addDelete',
                                render: ()=>(<CustomSwitch/>)
                            },
                            {
                                width: '10%',
                                title: 'Action',
                                field: 'action',
                                render: () => (<ActionToolbar/>)
                            },
                        ]}
                        rowData={[
                            {
                                permission: "Students",
                                view: true,
                                update: false,
                                addDelete: true
                            },
                            {
                                permission: "Marks",
                                view: true,
                                update: false,
                                addDelete: true
                            },
                            {
                                permission: "Finance",
                                view: true,
                                update: false,
                                addDelete: true
                            },
                            {
                                permission: "Events",
                                view: true,
                                update: false,
                                addDelete: true
                            },
                            
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default PermissionList;
