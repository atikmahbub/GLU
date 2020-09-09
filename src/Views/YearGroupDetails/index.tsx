import React, { useState, useEffect } from 'react';
import YearGroupDetails from './YearGroupDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getallclassAPIcall } from '../../Redux/Actions/classAction';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const classes = useSelector((state: any) => state.classReducer.classList);
    const [classList, setclassList] = useState([]);

    useEffect(() => {
        dispatch(getallclassAPIcall());
    }, []);
    return (
        <div>
            <YearGroupDetails classList={classList} />
        </div>
    );
};

export default index;
