import React from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../../Redux/Actions/teacherAction';
import { activateDeactivateUser, getallSchoolAPIcall } from '../../../Redux/Actions/superAdminActions';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import Switch from '@material-ui/core/Switch';

interface colDataType {
    id: number;
    userId: number;
    schoolName: string;
    website: string;
    phoneNumber: string;
    createdAt: string;
    isActive: boolean;
}
interface props {
    schoolList: Array<string | number>;
}
const SchoolList: React.FunctionComponent<props> = ({ schoolList }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.school.addNewSchool,
            state: {
                breadcrumb: routeEndpoints.teacher.addNewTeacherBread,
            },
        });
    };
    // const redirectDetails = (data: any) => {
    //     routes.push({
    //         pathname: '/dashboard/teacher-details/class-group-details',
    //         state: {
    //             teacherData: data,
    //         },
    //     });
    // };
    const handleActiveInactive = (id: number) => {
        dispatch(activateDeactivateUser(id))
        dispatch(getallSchoolAPIcall());
    }
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
                <AddButton title="Schools" btnIcon={<Add />} btnTitle="Add New School" trigger={handleRoutes} />
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
                                    field: 'schoolName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Website',
                                    field: 'website',
                                },
                                {
                                    width: '23%',
                                    title: 'PhoneNumber',
                                    field: 'phoneNumber',
                                },

                                {
                                    width: '23%',
                                    title: 'Active/Inactive',
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isActive}
                                            onChange={() => handleActiveInactive(rowData.userId)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },

                                {
                                    width: '23%',
                                    render: (rowData: any) => (
                                        <ActionToolbar
                                            showDetail={false}
                                            // showDelete={false}
                                            // detailClick={() => redirectDetails(rowData)}
                                            // deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={schoolList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default SchoolList;
