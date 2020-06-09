import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';

interface colDataType {
    profile: string;
    name: string;
    class: string;
    id: string;
    action: string;
}
const StudentList: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({pathname:'/dashboard/student/add-new-student', state:{
            breadcrumb: '/dashboard/student/student Admission'
        }})
    }
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Students"
                    btnIcon={<Add />}
                    btnTitle="Add Student"
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

                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '23%',

                                title: 'id',
                                field: 'id',
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
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                            {
                                profile: commonImg.photo,
                                name: 'Rebacco Elision',
                                class: 'Vth Standard',
                                id: 'SMG1039cd10',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
