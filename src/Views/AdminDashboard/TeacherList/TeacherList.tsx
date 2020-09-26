import React from 'react';
import CardContainer from '../../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../../Utility/routeEndpoints';
import ActionToolbar from '../../../components/Dashobard/ActionToolbar';
import CardTable from '../../../components/Table/CardTable';
import TableUserProfile from '../../../components/Dashobard/TableUserProfile';
import Switch from '@material-ui/core/Switch';
import { activateDeactivateTeacher, getallTeacherAPIcall } from '../../../Redux/Actions/superAdminActions';
import { Typography } from '@material-ui/core';
import { colors } from '../../../Styles/colors';
import OutlineButton from '../../../components/Button/OutlineButton';

interface props {
    teacherList: Array<string | number>;
}
const TeacherList: React.FunctionComponent<props> = ({ teacherList }) => {
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

    const handleDetails = (data:any)=> {
        routes.push({
            pathname: '/admin/teacher/detail',
            state: {
                teacherDetails: data,
            },
        });
    };

    const handleActiveInactive = (id: number) => {
        // setSwitchState(!switchState)
        dispatch(activateDeactivateTeacher(id));
        dispatch(getallTeacherAPIcall());
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                {/* <AddButton title="Teachers" btnIcon={<Add />} btnTitle="Add New Teacher" trigger={handleRoutes} /> */}
                <AddButton title="Teachers" />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <div className="table__container">
                        <CardTable
                            width="23rem"
                            disableExport={true}
                            showToolbar={true}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    title: 'First Name',
                                    field: 'firstName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    title: 'Last Name',
                                    field: 'lastName',
                                },
                                {
                                    title: 'Gender',
                                    field: 'gender',
                                },
                                {
                                    title: 'Phone Number',
                                    field: 'phoneNumber',
                                },
                                {
                                    title: 'Location',
                                    field: 'location',
                                },
                                {
                                    title: 'Document Type',
                                    field: 'docType',
                                },
                                {
                                    title: 'Document Status',
                                    field: 'docStatus',
                                    render: () => (
                                        <Typography style={{ color: colors.primary, fontSize: '1.25rem' }}>
                                            Pending
                                        </Typography>
                                    ),
                                },

                                {
                                    title: 'Active/Inactvie',
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isActive}
                                            onChange={() => handleActiveInactive(rowData)}
                                            color="primary"
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    ),
                                },
                                {
                                    title: 'Action',
                                    field: 'docStatus',
                                    render: (rowData:any) => (
                                        <OutlineButton
                                            btnClick={()=>handleDetails(rowData)}
                                            style={{ width: '12rem' }}
                                            text="View Details"
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
