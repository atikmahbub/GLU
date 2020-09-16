import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import Filters from './Filters';

interface colDataType {
    profile: string;
    name: string;
    department: string;
    designation: string;
    action: string;
}
const StaffList: React.FunctionComponent = () => {
    const routes = useHistory();
    const handleRoutes = () => {
        routes.push({
            pathname: '/dashboard/staff/add-new-staff',
            state: {
                breadcrumb: '/dashboard/staff/Add New Staff',
            },
        });
    };
    const redirectDetails = (id: number) => {
        routes.push({
            pathname: routeEndpoints.staff.details,
        });
    };
    const handleEdit = (data: colDataType) => {};
    const handleDelete = (deleteId: number) => {};
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Staffs" btnIcon={<Add />} btnTitle="Add New Staff" />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <Filters />
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
                            rowData={[
                                {
                                    name: 'Jenny Smith',
                                    profile: commonImg.photo,
                                    studentId: 'XC9382',
                                    yearGroup: '1',
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Jenny Smith',
                                    profile: commonImg.photo,
                                    studentId: 'XC9382',
                                    yearGroup: '1',
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Jenny Smith',
                                    profile: commonImg.photo,
                                    studentId: 'XC9382',
                                    yearGroup: '1',
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Jenny Smith',
                                    profile: commonImg.photo,
                                    studentId: 'XC9382',
                                    yearGroup: '1',
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Jenny Smith',
                                    profile: commonImg.photo,
                                    studentId: 'XC9382',
                                    yearGroup: '1',
                                    formGroup: 'A',
                                },
                            ]}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default StaffList;
