import React, { useState, useEffect } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDepartmentAPIcall } from '../../Redux/Actions/schoolAction';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';

interface props {
    triggerModal: () => void;
    editDepartment: Function;
}
const Departments: React.FunctionComponent<props> = ({ triggerModal, editDepartment }) => {
    const routes = useHistory();
    const dispatch = useDispatch();
    const [departments, setDepartments] = useState([]);
    const departmentList = useSelector((state: any) => state.schoolReducer.departmentList);
    const redirectDetails = () => {
        routes.push('/dashboard/department-details');
    };
    const handleDelete = (id: number) => {
        dispatch(deleteDepartmentAPIcall(id));
    };
    const handleEdit = (data: any) => {
        editDepartment(data);
    };
    useEffect(() => {
        if (departmentList) {
            const data = departmentList.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                };
            });
            setDepartments(data);
        }
    }, [departmentList]);
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Departments"
                    component="notification"
                    showNotification={true}
                    notificationIcon={<MailOutline />}
                    notificationText="Send notification"
                    btnIcon={<Add />}
                    btnTitle="Add department"
                    trigger={triggerModal}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        selectable={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '40%',
                                title: 'Department',
                                field: 'department',
                            },
                            {
                                width: '15%',
                                title: 'No.of Students',
                                field: 'students',
                            },

                            {
                                width: '15%',
                                title: 'No.of Teachers',
                                field: 'teachers',
                            },
                            {
                                width: '23%',
                                title: 'Head of Department',
                                field: 'hod',
                            },
                            {
                                width: '23%',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                        showDetail={true}
                                        detailClick={() => redirectDetails()}
                                        // deleteClick={() => handleDelete(rowData.id)}
                                        // editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={[
                            {
                                students: '122',
                                teachers: 20,
                                teacher: 'Mr.Shehan Abeysinghe',
                                department: 'Mathematics',
                                hod: 'Mr.Shehan Abeysinghe',
                            },
                            {
                                students: '122',
                                teachers: 10,
                                teacher: 'Mrs. Angelina Jolie',
                                department: 'Business Studies',
                                hod: 'Mrs. Angelina Jolie',
                            },
                            {
                                students: '122',
                                teachers: 2,
                                teacher: 'Mr. Robert Stark',
                                department: 'Science',
                                hod: 'Mr. Robert Stark',
                            },
                            {
                                students: '122',
                                teachers: 10,
                                teacher: 'Mrs. Alexandra Smith',
                                department: 'Mathematics',
                                hod: 'Mrs. Alexandra Smith',
                            },
                            {
                                students: '122',
                                teachers: 11,
                                teacher: 'Mr.Shehan Abeysinghe',
                                department: 'Mathematics',
                                hod: 'Mr.Shehan Abeysinghe',
                            },
                        ]}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default Departments;
