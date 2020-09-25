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
import Switch from '@material-ui/core/Switch';

interface colDataType {
    title: number,
    description: number,
    resource: string,
    coverImage: string
    videoLink: string,
    maxStudent: string
}
interface props {
    videoList: Array<string | number>;
}
const VideoList: React.FunctionComponent<props> = ({ videoList }) => {
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
                                    title: 'Title',
                                    field: 'tittle',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Description',
                                    field: 'description',
                                },
                                {
                                    width: '23%',
                                    title: 'Review',
                                    field: 'phoneNumber',
                                },
                                {
                                    width: '23%',
                                    title: 'Video',
                                    field: 'videoLink',
                                },

                                {
                                    width: '23%',
                                    title: 'Approve/Reject',
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isActive}
                                            // onChange={() => handleActiveInactive(rowData.userId)}
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
                                            showDetail={true}
                                            // detailClick={() => redirectDetails(rowData)}
                                            deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={videoList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default VideoList;
