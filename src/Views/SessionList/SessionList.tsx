import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';

interface props{
    triggerModal: () => void
}
const SessionList: React.FunctionComponent<props> = ({triggerModal}) => {
    const handleRoutes = () => {
       triggerModal()
    }
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Session"
                    btnIcon={<Add />}
                    btnTitle="Add session"
                    trigger={handleRoutes}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        columns={[
                            {
                                width: '20%',
                                title: 'Duration',
                                field: 'duration',
                            },
                            {
                                width: '20%',
                                title: 'Session',
                                field: 'session',
                            },
                            {
                                width: '20%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '20%',
                                title: 'Faculty',
                                field: 'faculty',
                            },
                            {
                                width: '10%',
                                title: 'Action',
                                field: 'action',
                                render: () => (<ActionToolbar/>)
                            },
                        ]}
                        rowData={[
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                            {
                                duration: "1h 30m",
                                session: 'Chemical Bond',
                                class: 'V Standard',
                                faculty: "John Dow",
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default SessionList;
