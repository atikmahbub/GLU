import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import TableUserProfile from '../../components/Dashobard/TableUserProfile';
import CardTable from '../../components/Table/CardTable';
import FormFilter from './FormFilter';

interface props {
    groupList?: any[];
    filters?:any
}
const FormGroup: React.FunctionComponent<props> = ({ groupList, filters }) => {
    const [toggler, setToggler] = useState(false);
    const routes = useHistory();

    const handleToggler = () => {
        routes.push({pathname:'/dashboard/edit-form-group', state:{
            classId: filters.class,
            sectionId: filters.section
        }});
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
                            rowData={groupList}
                        />
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default FormGroup;
