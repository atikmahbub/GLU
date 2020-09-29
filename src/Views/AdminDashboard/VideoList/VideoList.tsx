import React from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import CardTable from '../../../components/Table/CardTable';
import Switch from '@material-ui/core/Switch';
import { activateDeactivateVideo, getallVideoAPIcall } from '../../../Redux/Actions/superAdminActions';
import OutlineButton from '../../../components/Button/OutlineButton';

interface props {
    videoList: Array<string | number>;
}
const VideoList: React.FunctionComponent<props> = ({ videoList }) => {
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
    const handleDetails = (data: any) => {
        console.log("parent Detail")
        // routes.push({
        //     pathname: '/admin/student/detail',
        //     state: {
        //         studentDetails: data,
        //     },
        // });
    };
    const handleActiveInactive = (id: number) => {
        // setSwitchState(!switchState)
        dispatch(activateDeactivateVideo(id));
        dispatch(getallVideoAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <div className="student-table">
                    <div className="table__container">
                        <CardTable
                            width="23rem"
                            showToolbar={true}
                            disableExport={true}
                            showPagination={true}
                            selectable={false}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '23%',
                                    title: 'Title',
                                    field: 'title',
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
                                            onChange={() => handleActiveInactive(rowData.id)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },
                                {
                                    width: '23%',
                                    title: 'View Details',
                                    field: '',
                                    render: (rowData: any) => (
                                        <OutlineButton text="View Details" btnClick={() => handleDetails(rowData)} />
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
