import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../Redux/Actions/teacherAction';

interface colDataType {
    id: number;
    profile: string;
    first_name: string;
    last_name: string;
    gender: string;
    department: string;
    designation: string;
    action: string;
}
interface props {
    teacherList: Array<string | number>;
}
const TeacherList: React.FunctionComponent<props> = ({ teacherList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/teacher/add-new-teacher',
            state: {
                breadcrumb: '/dashboard/teacher/Add New Teacher',
            },
        });
    };
    const redirectDetails = () => {
        routes.push({
            pathname: '/dashboard/teacher-details',
            state: {
                breadcrumb: '/dashboard/teacher/Add New Teacher',
            },
        });
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: '/dashboard/teacher/add-new-teacher',
            state: {
                breadcrumb: '/dashboard/teacher/Edit Teacher',
                teacherInfo: data,
            },
        });
    };
    const handleDelete = (deleteId: number) => {
        dispatch(deleteTeacherAPIcall(deleteId));
    };
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
                                render: (rowData: colDataType) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                        detailClick={redirectDetails}
                                    />
                                ),
                            },
                        ]}
                        rowData={teacherList}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default TeacherList;
