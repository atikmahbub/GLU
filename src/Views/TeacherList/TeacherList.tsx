import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import UserTable from '../../components/Dashobard/Table/UserTable';

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
    const redirectDetails = () => {
        routes.push('/dashboard/teacher-details/class-group-details');
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: routeEndpoints.teacher.addNewTeacher,
            state: {
                breadcrumb: routeEndpoints.teacher.editTeacher,
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
            <UserTable
                showFilter={true}
                redirectDetails={() => redirectDetails()}
                handleEdit={(value: any) => handleEdit(value)}
                handleDelete={(value: any) => handleDelete(value)}
            />
        </div>
    );
};

export default TeacherList;
