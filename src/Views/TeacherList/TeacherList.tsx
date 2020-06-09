import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle, MoreHoriz } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';

interface colDataType {
    profile: string;
    name: string;
    department: string;
    designation: string;
    action: string;
}
const TeacherList: React.FunctionComponent = () => {
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
                    title="Teachers"
                    btnIcon={<Add />}
                    btnTitle="Add Teacher"
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
                                title: 'Profile',
                                field: 'profile',
                                render: (rowData: colDataType) => (
                                    <img src={rowData.profile} style={{ width: 35, height: 35, borderRadius: '50%' }} />
                                ),
                            },
                            {
                                width: '23%',

                                title: 'Name',
                                field: 'name',
                            },
                            {
                                width: '23%',

                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '23%',

                                title: 'Designation',
                                field: 'designation',
                            },
                            {
                                width: '23%',

                                title: 'Action',
                                field: 'action',
                                render: () => (<ActionToolbar/>)
                            },
                        ]}
                        rowData={[
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                department: 'English Department',
                                designation: 'Senior Lecturer',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                department: 'English Department',
                                designation: 'Senior Lecturer',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                department: 'English Department',
                                designation: 'Senior Lecturer',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                department: 'English Department',
                                designation: 'Senior Lecturer',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                department: 'English Department',
                                designation: 'Senior Lecturer',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default TeacherList;
