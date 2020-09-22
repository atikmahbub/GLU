import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { deleteStudentAPIcall } from '../../Redux/Actions/studentAction';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import TableFilter from '../../components/Dashobard/Table/TableFilter';
import CardTable from '../../components/Table/CardTable';

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
    const redirectDetails = (id: number) => {
        routes.push({
            pathname: routeEndpoints.student.details,
            state: {
               studentId: id
            },
        });
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: routeEndpoints.student.addNewStudent,
            state: {
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
                <AddButton title="Students" btnIcon={<Add />} btnTitle="Add Student" trigger={handleRoutes} />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <TableFilter />
                    <div className="table__container">
                        <CardTable
                            showToolbar={false}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '23%',
                                    title: 'Name',
                                    field: 'name',
                                    render: (rowData: any) => (
                                        <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                    ),
                                },
                                {
                                    width: '23%',
                                    title: 'Student ID',
                                    field: 'studentId',
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
                                    title: 'Action',
                                    field: 'action',
                                    render: (rowData: any) => (
                                        <ActionToolbar
                                            showDetail={true}
                                            detailClick={() => redirectDetails(rowData.id)}
                                            deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={students}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
