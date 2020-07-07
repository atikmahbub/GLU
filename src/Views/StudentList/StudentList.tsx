import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { deleteStudentAPIcall } from '../../Redux/Actions/studentAction';

interface colDataType {
    id: number;
    profile: string;
    name: string;
    yearGroup: string;
    formGroup: string;
    action: string;
}
interface props {
    students: colDataType[];
}
const StudentList: React.FunctionComponent<props> = ({ students }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.student.addNewStudent,
            state: {
                breadcrumb: routeEndpoints.student.studentAdmission,
            },
        });
    };
    const redirectDetails = (id:number) => {
        routes.push({
            pathname: routeEndpoints.student.details,
            state: {
                breadcrumb: routeEndpoints.student.breadcrumb,
                id:id
            },
        });
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: routeEndpoints.student.addNewStudent,
            state: {
                breadcrumb: routeEndpoints.student.editStudent,
                studentInfo: data,
            },
        });
    };
    const handleDelete = (deleteId: number) => {
        dispatch(deleteStudentAPIcall(deleteId));
    };
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
                                title: 'Year Group',
                                field: 'yearGroup',
                            },
                            {
                                width: '23%',
                                title: 'Form Group',
                                field: 'formGroup',
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
                                render: (rowData: colDataType) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        detailClick={()=>redirectDetails(rowData.id)}
                                        deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={students}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
