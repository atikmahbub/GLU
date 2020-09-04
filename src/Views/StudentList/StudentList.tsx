import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { deleteStudentAPIcall } from '../../Redux/Actions/studentAction';
import UserTable from '../../components/Dashobard/Table/UserTable';

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
                breadcrumb: routeEndpoints.student.breadcrumb,
                id: id,
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
                <AddButton title="Students" btnIcon={<Add />} btnTitle="Add Student" trigger={handleRoutes} />
            </CardContainer>
            <UserTable
                showFilter={true}
                redirectDetails={(value: any) => redirectDetails(value)}
                handleEdit={(value: any) => handleEdit(value)}
                handleDelete={(value: any) => handleDelete(value)}
            />
        </div>
    );
};

export default StudentList;
