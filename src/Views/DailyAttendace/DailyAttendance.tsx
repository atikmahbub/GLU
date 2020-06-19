import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import FormRow from './FormRow';
import { Button } from '@material-ui/core';

interface props {
    triggerModal?: () => void;
}
const DailyAttendance: React.FunctionComponent<props> = ({ triggerModal }) => {
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Daily Attendance"
                    btnTitle="Take Attendance"
                    btnIcon={<Add />}
                    trigger={triggerModal}
                />
            </CardContainer>
            <CardContainer>
                <div className="student-attendance-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={true}
                        filterRender={
                            <div className="student-form-row  w-100">
                                <FormRow />
                                <Button className="filter-btn">Filter</Button>
                            </div>
                        }
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
                                title: 'Date',
                                field: 'date',
                            },
                            {
                                width: '20%',
                                title: 'Presence',
                                field: 'presence',
                            },
                            {
                                width: '10%',
                                title: 'Action',
                                field: 'action',
                                render: () => <ActionToolbar />,
                            },
                        ]}
                        rowData={[
                            {
                                class: 'One',
                                section: 'A',
                                date: 'Dec, 10, 2020',
                                presence: '25/28',
                                action: '',
                            },
                            {
                                class: 'Two',
                                section: 'B',
                                date: 'Dec, 10, 2020',
                                presence: '25/28',
                                action: '',
                            },
                            {
                                class: 'Three',
                                section: 'A',
                                date: 'Dec, 10, 2020',
                                presence: '25/28',
                                action: '',
                            },
                            {
                                class: 'Four',
                                section: 'A',
                                date: 'Dec, 10, 2020',
                                presence: '25/28',
                                action: '',
                            },
                            {
                                class: 'Five',
                                section: 'A',
                                date: 'Dec, 10, 2020',
                                presence: '25/28',
                                action: '',
                            },
                            {
                                class: 'Six',
                                section: 'A',
                                date: 'Dec, 10, 2020',
                                presence: '25/28',
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default DailyAttendance;
