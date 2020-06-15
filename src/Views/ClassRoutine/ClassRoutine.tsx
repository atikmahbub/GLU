import React from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import AddButton from '../../components/Dashobard/AddButton';
import { AccountCircle, Add } from '@material-ui/icons';
import { colors } from '../../Styles/colors';
import CardTable from '../../components/Table/CardTable';
import ActionToolbar from '../../components/Dashobard/ActionToolbar';
import TitleCardContainer from './TitleCardContainer';
import "./routineTable.scss";

interface props{
    triggerModal: ()=> void
}
const ClassRoutine: React.FunctionComponent<props> = ({triggerModal}) => {
    return (
        <div className="content-wrapper-student">
            <CardContainer>
                <AddButton
                    style={{ backgroundColor: colors.primary }}
                    icon={<AccountCircle className="icon-circle" />}
                    title="Class Routine"
                    btnTitle="Add Routine"
                    btnIcon={<Add />}
                    trigger={triggerModal}
                />
            </CardContainer>
            <CardContainer>
                <div className="class-routine-table">
                    <CardTable
                        showToolbar={true}
                        showPagination={false}
                        columns={[
                            {
                                width: '15%',
                                title: 'Class',
                                field: 'class',
                            },
                            {
                                width: '75%',
                                title: 'Routine',
                                field: 'routine',
                                render: () => (
                                   <TitleCardContainer/>
                                ),
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
                                class: 'Monday',
                                routine: "",
                                action: '',
                            },
                            {
                                class: 'Tuesday',
                                routine: "",
                                action: '',
                            },
                            {
                                class: 'Wednesday',
                                routine: "",
                                action: '',
                            },
                            {
                                class: 'Thursday',
                                routine: "",
                                action: '',
                            },
                            {
                                class: 'Friday',
                                routine: "",
                                action: '',
                            },
                            {
                                class: 'Saturday',
                                routine: "",
                                action: '',
                            },
                        ]}
                    />
                </div>
            </CardContainer>
        </div>
    );
};

export default ClassRoutine;
