import React, { useEffect, useState } from 'react';
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
import { getallStudentAPIcall, activateDeactivateUser } from '../../../Redux/Actions/superAdminActions';
import OutlineButton from '../../../components/Button/OutlineButton';
interface props {
    studentList: Array<string | number>;
}
const StudentList: React.FunctionComponent<props> = ({ studentList }) => {
    const [students, setStudents] = useState<any>([]);
    useEffect(() => {
        if (studentList) {
            setStudents(studentList);
        }
    }, [studentList]);
    const routes = useHistory();
    const dispatch = useDispatch();
    const handleDetails = (data: any) => {
        routes.push({
            pathname: '/admin/student/detail',
            state: {
                studentDetails: data,
            },
        });
    };
    const handleActiveInactive = (id: number, i: number) => {
        const data = [...students];
        data[i].isVerified = !data[i].isVerified;
        setStudents(data);
        dispatch(activateDeactivateUser(id, callGetParents));
    };
    const callGetParents = () => {
        dispatch(getallStudentAPIcall());
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                {/* <AddButton title="Videos" btnIcon={<Add />} btnTitle="Add New Video" trigger={handleRoutes} /> */}
                <AddButton title="Students" />
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
                                    width: '23%',
                                    title: 'First Name',
                                    field: 'firstName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Last Name',
                                    field: 'lastName',
                                    // render: (rowData: any) => (
                                    //     <TableUserProfile name={rowData.schoolName}/>
                                    // ),
                                },
                                {
                                    width: '23%',
                                    title: 'Gender',
                                    field: 'gender',
                                },
                                {
                                    width: '23%',
                                    title: 'Phone Number',
                                    field: 'phoneNumber',
                                },
                                {
                                    width: '23%',
                                    title: 'Location',
                                    field: 'location',
                                },

                                {
                                    width: '23%',
                                    title: 'Approve/Reject',
                                    render: (rowData: any) => (
                                        <Switch
                                            checked={rowData.isVerified}
                                            onChange={() => handleActiveInactive(rowData.userId, rowData.index)}
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
                            rowData={studentList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
