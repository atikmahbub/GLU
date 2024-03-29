import React, { useEffect, useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { deleteStudentAPIcall } from '../../Redux/Actions/studentAction';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import TableFilter from '../../components/Dashobard/Table/TableFilter';
import CardTable from '../../components/Table/CardTable';

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
    teacherdata?: any;
    teacherMode?: boolean;
}
const StudentList: React.FunctionComponent<props> = ({ students, teacherdata, teacherMode }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const [studentData, setStudentData] = useState<any>([]);
    const [searchValue, setSearchValue] = useState('');

    const handleRoutes = () => {
        routes.push({
            pathname: routeEndpoints.student.addNewStudent,
            state: {
                breadcrumb: routeEndpoints.student.studentAdmission,
            },
        });
    };
    const redirectDetails = (data: any) => {
        if (teacherMode) {
        } else {
            routes.push({
                pathname: routeEndpoints.student.details,
                state: {
                    studentDetails: data,
                },
            });
        }
    };
    const handleEdit = (data: colDataType) => {
        routes.push({
            pathname: routeEndpoints.student.addNewStudent,
            state: {
                studentInfo: data,
            },
        });
    };
    useEffect(() => {
        setStudentData(students);
    }, [students]);

    const handleDelete = (deleteId: number) => {
        dispatch(deleteStudentAPIcall(deleteId));
    };
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    useEffect(() => {
        if (searchValue === '') {
            setStudentData(students);
        } else {
            setTimeout(() => {
                const data = studentData.filter((item: any) => {
                    if (
                        String(item.name).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.yearGroup).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1 ||
                        String(item.formGroup).toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) > -1
                    ) {
                        return item;
                    }
                });
                setStudentData(data);
            }, 1000);
        }
    }, [searchValue]);

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Students"
                    subtitle={`${teacherdata.name ? 'Students' : ''}${teacherdata.name} `}
                    btnIcon={<Add />}
                    btnTitle="Add Student"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <TableFilter searchOnchange={handleSearchChange} searchValue={searchValue} />
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
                                    field: 'id',
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
                                            detailClick={() => redirectDetails(rowData)}
                                            deleteClick={() => handleDelete(rowData.id)}
                                            editClick={() => handleEdit(rowData)}
                                        />
                                    ),
                                },
                            ]}
                            rowData={studentData}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default StudentList;
