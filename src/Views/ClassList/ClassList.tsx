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
                    title="Classes"
                    btnIcon={<Add />}
                    btnTitle="Add class"
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
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '20%',
                                title: 'Section',
                                field: 'section',
                            },
                            {
                                width: '20%',
                                title: 'Faculty Head',
                                field: 'facultyHead',
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
                                class: "One",
                                section: 'A, B, C',
                                facultyHead: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                class: "Two",
                                section: 'A, B, C',
                                facultyHead: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                class: "Three",
                                section: 'A, B, C, D',
                                facultyHead: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                class: "Four",
                                section: 'A, B',
                                facultyHead: 'John Dow',
                                student: "25",
                                action: '',
                            },
                            {
                                class: "Five",
                                section: 'A, B',
                                facultyHead: 'John Dow',
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
