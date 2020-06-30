import React, { useState, useEffect } from 'react';
import ClassList from './ClassList';
import AddClassModal from './AddClassModal';
import { useDispatch } from 'react-redux';
import {getallclassAPIcall} from '../../Redux/Actions/classAction';

const index: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    useEffect(()=>{
        dispatch(getallclassAPIcall())
    },)
    return (
        <div>
            {toggler ? (
                <AddClassModal handleToggler={handleToggler}/>
            ) : null}
            <ClassList triggerModal={handleToggler} />
        </div>
    );
};

export default index;
