import React, { useState, useEffect } from 'react';
import SessionList from './SessionList';
import AddSessionContainer from './AddSessionContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSessionsAPIcall } from '../../Redux/Actions/schoolAction';
import { rootReducerType } from '../../Interfaces/reducerInterfaces';
import { checkValue } from '../../Helper/checkValue';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const sessions = useSelector((state: rootReducerType) => state.schoolReducer.sessionList);
    const [availableSession, setavailableSession] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSessionsAPIcall());
    }, []);
    useEffect(() => {
        if (sessions) {
            const data = sessions.map((item: any) => {
                return {
                    sessionId: item.id,
                    duration: checkValue(item.duration),
                    session: checkValue(item.Subject.name),
                    yearGroup: checkValue(item.Class.name),
                    faculty: checkValue(item.Teacher?.first_name) + ' ' + checkValue(item.Teacher?.last_name),
                };
            });
            setavailableSession(data);
        }
    }, [sessions]);
    const handleToggler = () => {
        setToggler(!toggler);
    };

    return (
        <div>
            {toggler ? <AddSessionContainer handleToggler={handleToggler} /> : null}
            <SessionList availableSession={availableSession} triggerModal={handleToggler} />
        </div>
    );
};

export default index;
