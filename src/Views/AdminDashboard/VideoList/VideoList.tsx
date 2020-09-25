import React from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTeacherAPIcall } from '../../../Redux/Actions/teacherAction';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import TableUserProfile from '../../../components/Dashobard/TableUserProfile';

interface colDataType {
    id: number,
    userId: number,
    schoolName: string,
    website: string
    phoneNumber: string,
    createdAt: string
}
interface props {
    schoolList: Array<string | number>;
}
const SchoolList: React.FunctionComponent<props> = ({ schoolList }) => {
    // alert(JSON.stringify(schoolList))

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
    console.log("==== the school list =====", schoolList)
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Videos" btnIcon={<Add />} btnTitle="Add New Video" trigger={handleRoutes} />
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
                                    title: 'Link',
                                    field: 'website',
                                },
                                {
                                    width: '23%',
                                    title: 'Review',
                                    field: 'phoneNumber',
                                },
                                {
                                    width: '23%',
                                    title: 'Accept',
                                    field: 'createdAt',
                                },

                                {
                                    width: '23%',
                                    title: 'Reject',
                                    field: 'createdAt',
                                },

                                {
                                    width: '23%',
                                    render: (rowData: any) => (
                                        <ActionToolbar
                                            showDetail={true}
                                            // detailClick={() => redirectDetails(rowData)}
                                            deleteClick={() => handleDelete(rowData.id)}
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
