import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import CardTable from '../../components/Table/CardTable';
import AddButton from '../../components/Dashobard/AddButton';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';

interface props{
    triggerModal: ()=> void
}
const ClassList: React.FunctionComponent<props> = ({triggerModal}) => {
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton
                    icon={<AccountCircle className="icon-circle" />}
                    title="Year Group"
                    btnIcon={<Add />}
                    btnTitle="Add Year Group"
                    trigger={triggerModal}
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
                                title: 'Year',
                                field: 'year',
                            },
                            {
                                width: '20%',
                                title: 'Form Group',
                                field: 'formGroup',
                            },
                            {
                                width: '20%',
                                title: 'Teacher\'s',
                                field: 'teacher',
                            },
                            {
                                width: '20%',
                                title: 'Student',
                                field: 'student',
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
                                year: "One",
                                formGroup: 'A, B, C',
                                teacher: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                year: "Two",
                                formGroup: 'A, B, C',
                                teacher: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                year: "Three",
                                formGroup: 'A, B, C, D',
                                teacher: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                year: "Four",
                                formGroup: 'A, B',
                                teacher: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                year: "Five",
                                formGroup: 'A, B',
                                teacher: 'John Dow',
                                student: "25",
                                action: '',
                            },
                        
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default ClassList;
