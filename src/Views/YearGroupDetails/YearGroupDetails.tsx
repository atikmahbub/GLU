import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, MailOutline } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useHistory } from 'react-router';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import BorderTableContainer from '../../Containers/Dashboard/BorderTableContainer';

interface props {
    classList?: any[];
    groupId?:number
}
const YearGroupDetails: React.FunctionComponent<props> = ({ classList, groupId }) => {
    const routes = useHistory();
    const handleToggler = () => {
        routes.push({pathname:'/dashboard/edit-year-group', state:{
            id:groupId
        }});
    };

    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    title="Year 4"
                    subtitle="Head: Mr.John Krasinski"
                    btnIcon={<Add />}
                    btnTitle="Edit Form Group"
                    component="notification"
                    showNotification={true}
                    notificationText="Send notification"
                    notificationIcon={<MailOutline />}
                    trigger={handleToggler}
                />
            </CardContainer>
            <CardContainer>
                <BorderTableContainer>
                    <CardTable
                        showToolbar={false}
                        showPagination={true}
                        tableHeight="100vh"
                        columns={[
                            {
                                width: '60%',
                                title: 'Form Group',
                                field: 'formGroup',
                            },
                            {
                                width: '15%',
                                title: 'No.of Children',
                                field: 'children',
                            },

                            {
                                width: '20%',
                                title: 'Teacher',
                                field: 'teacher',
                            },
                            {
                                width: '5%',
                                title: '',
                                field: '',
                                render: (rowData: any) => (
                                    <ActionToolbar
                                    // showDetail={true}
                                    // detailClick={() => redirectDetails(rowData.id)}
                                    // deleteClick={() => handleDelete(rowData.id)}
                                    // editClick={() => handleEdit(rowData)}
                                    />
                                ),
                            },
                        ]}
                        rowData={classList}
                    />
                </BorderTableContainer>
            </CardContainer>
        </div>
    );
};

export default YearGroupDetails;
