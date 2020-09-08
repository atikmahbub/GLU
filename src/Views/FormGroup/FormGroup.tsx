import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import CardTable from '../../components/Table/CardTable';
import commonImg from '../../Assets/images';
import FormFilter from './FormFilter';

interface props {
    groupList?: any[];
}
const FormGroup: React.FunctionComponent<props> = ({ groupList }) => {
    const [toggler, setToggler] = useState(false);
    const routes = useHistory();

    const handleToggler = () => {
        routes.push('/dashboard/edit-form-group');
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Form Groups"
                    btnTitle="Edit Form Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <FormFilter />
                    <div className="table__container">
                        <CardTable
                            showToolbar={false}
                            showPagination={true}
                            selectable={true}
                            tableHeight="100vh"
                            columns={[
                                {
                                    width: '70%',
                                    title: 'Name',
                                    field: 'name',
                                    render: (rowData: any) => (
                                        <TableUserProfile name={rowData.name} profile={rowData.profile} />
                                    ),
                                },
                                {
                                    width: '18%',
                                    title: 'Student ID',
                                    field: 'studentId',
                                },
                                {
                                    title: 'Form Group',
                                    field: 'formGroup',
                                },
                            ]}
                            rowData={[
                                {
                                    name: 'Jenny Smith',
                                    studentId: 'XC9382',
                                    profile: commonImg.photo,
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Shehan Abeysinghe',
                                    studentId: 'XC9382',
                                    profile: commonImg.photo,
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Gemma Abigail Holmes',
                                    studentId: 'XC9382',
                                    profile: commonImg.photo,
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Gwanda Betty Cooper',
                                    studentId: 'XC9382',
                                    profile: commonImg.photo,
                                    formGroup: 'A',
                                },
                                {
                                    name: 'Jenny Smith',
                                    studentId: 'XC9382',
                                    profile: commonImg.photo,
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

export default FormGroup;
