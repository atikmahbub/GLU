import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { deleteStudentAPIcall } from '../../Redux/Actions/studentAction';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import commonImg from '../../Assets/images';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';

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
    const redirectDetails = (id:number) => {
        routes.push({
            pathname: routeEndpoints.student.details,
            state: {
                breadcrumb: routeEndpoints.student.breadcrumb,
                id:id
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
                <AddButton
                    title="Students"
                    btnIcon={<Add />}
                    btnTitle="Add Student"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <div className="filter__column__box">
                        <div className="column__box">
                        <SelectFieldUnderline
                            className="custom-sm-txt-dashbord"
                            label="Year Group"
                            options={[]}
                            getValue={() => {}}
                        />
                        </div>
                        <div className="column__box">
                        <SelectFieldUnderline
                            className="custom-sm-txt-dashbord"
                            label="Form Group"
                            options={[]}
                            getValue={() => {}}
                        />
                        </div>
                        <div className="column__box">
                        <SelectFieldUnderline
                            className="custom-sm-txt-dashbord"
                            label="Subject"
                            options={[]}
                            getValue={() => {}}
                        />
                        </div>
                        <div className="column__box">
                        <SelectFieldUnderline
                            className="custom-sm-txt-dashbord"
                            label="Teacher"
                            options={[]}
                            getValue={() => {}}
                        />
                        </div>
                        <div className="column__box">
                        <SelectFieldUnderline
                            className="custom-sm-txt-dashbord"
                            label="Activity"
                            options={[]}
                            getValue={() => {}}
                        />
                        </div>
                        <div className="column__box">
                        <SelectFieldUnderline
                            className="custom-sm-txt-dashbord"
                            label="Department"
                            options={[]}
                            getValue={() => {}}
                        />
                        </div>
                    </div>
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
                                render: (rowData: colDataType) => (
                                   <TableUserProfile name={rowData.name} profile={rowData.profile}/>
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
                                render: (rowData: colDataType) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        detailClick={()=>redirectDetails(rowData.id)}
                                        deleteClick={() => handleDelete(rowData.id)}
                                        editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={[
                            {name:"Jenny Smith",profile:commonImg.photo, studentId:"XC9382", yearGroup:"1", formGroup:"A"},
                            {name:"Jenny Smith",profile:commonImg.photo, studentId:"XC9382", yearGroup:"1", formGroup:"A"},
                            {name:"Jenny Smith",profile:commonImg.photo, studentId:"XC9382", yearGroup:"1", formGroup:"A"},
                            {name:"Jenny Smith",profile:commonImg.photo, studentId:"XC9382", yearGroup:"1", formGroup:"A"},
                            {name:"Jenny Smith",profile:commonImg.photo, studentId:"XC9382", yearGroup:"1", formGroup:"A"},
                            
                        ]}
                    />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
