import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import { useDispatch } from 'react-redux';
import { deleteSessionAPIcall } from '../../Redux/Actions/schoolAction';

interface props{
    triggerModal: () => void;
    availableSession: any
}
const SessionList: React.FunctionComponent<props> = ({triggerModal, availableSession}) => {
    const handleRoutes = () => {
       triggerModal()
    }
    const dispatch = useDispatch();
    const handleDelete = (id:number) => {
        dispatch(deleteSessionAPIcall(id));
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
                                title: 'Year Group',
                                field: 'yearGroup',
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
                                render: (rowData:any) => (<ActionToolbar deleteClick={()=>handleDelete(rowData.sessionId)}/>)
                            },
                        ]}
                        rowData={availableSession}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default SessionList;
