import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import CardTable from '../../components/Table/CardTable';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';

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
            pathname: routeEndpoints.teacher.addNewTeacher,
            state: {
                breadcrumb: routeEndpoints.teacher.addNewTeacherBread,
            },
        });
    };
    const redirectDetails = (data: any) => {
        routes.push({
            pathname: '/dashboard/teacher-details/class-group-details',
            state: {
                teacherData: data,
            },
        });
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: routeEndpoints.teacher.addNewTeacher,
            state: {
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
                <AddButton title="Teachers" btnIcon={<Add />} btnTitle="Add New Teacher" trigger={handleRoutes} />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
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
                                    title: 'Staff ID',
                                    field: 'staffId',
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
                                    render: (rowData: any) => (
                                        <ActionToolbar
                                            showDetail={true}
                                            detailClick={() => redirectDetails(rowData)}
                                            deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={teacherList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default TeacherList;
