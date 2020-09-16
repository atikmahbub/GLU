import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import { Add, AccountCircle } from '@material-ui/icons';
import AddButton from '../../components/Dashobard/AddButton';
import { useDispatch } from 'react-redux';
import { deleteSessionAPIcall } from '../../Redux/Actions/schoolAction';
import TableFilter from '../../components/Dashobard/Table/TableFilter';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import SessionRightPart from './SessionRightPart';

interface props {
    triggerModal: () => void;
    availableSession: any;
}
const SessionList: React.FunctionComponent<props> = ({ triggerModal, availableSession }) => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);
    const handleRoutes = () => {
        triggerModal();
    };
    const dispatch = useDispatch();
    const handleDelete = (id: number) => {
        dispatch(deleteSessionAPIcall(id));
    };
    return (
        <div className="student-wrapper">
            <CardContainer>
                <AddButton title="Session" />
            </CardContainer>
            <CardContainer>
                <div className="bg-white">
                    <TableFilter />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pl-2">
                                <DateRangePicker
                                    onChange={(item: any) => setState([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <SessionRightPart />
                        </div>
                    </div>
                </div>
            </CardContainer>
        </div>
    );
};

export default SessionList;
