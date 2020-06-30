import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { IconButton } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addNewTeacherAPIcall, editTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router-dom';
import AddInviteBtn from '../../components/Button/AddInviteBtn';
import EditableAddBtn from '../../components/Dashobard/EditableAddBtn';
import EditableDeleteBtn from '../../components/Dashobard/EditableDeleteBtn';


const FormContainer: React.FunctionComponent = () => {
    const [rows, setRows] = useState([1]);
    const [formdata, setFormdata] = useState<Array<object>>([]);
    const routes = useHistory();
    const [editable, setEditable] = useState(false);
    const [editId, setEditId] = useState(-1);
    const dispatch = useDispatch();
    const addRows = () => {
        const total = [...rows];
        total.push(1);
        setRows(total);
    };

    const deleteRows = (index: number) => {
        const total = [...rows];
        total.splice(index, 1);
        setRows(total);
        const data = [...formdata];
        data.splice(index, 1);
        setFormdata(data);
    };

    const handleChange = (value: object, index: number) => {
        const data = [...formdata];
        data[index] = value;
        setFormdata(data);
    };

    const submitData = () => {
        const data:any = { ...formdata[0] };
        if(formdata.length!==0){
            delete data.gender;
            delete data.phoneNumber;
        }
        if (editable) {
            dispatch(editTeacherAPIcall(data, editId, routes));
        } else {
            dispatch(addNewTeacherAPIcall({ teachers: formdata }, routes));
        }
    };

    return (
        <CardContainer>
            <div className="student-container">
                {rows.map((value, index) => (
                    <div className="student-form-row  w-100">
                        <FormRow
                            disable={editable}
                            setId={setEditId}
                            editable={() => setEditable(true)}
                            onChange={(value) => handleChange(value, index)}
                        />
                        {index === 0 ? (
                            <EditableAddBtn editable={editable} click={addRows}/>
                        ) : <EditableDeleteBtn editable={editable} click={()=> deleteRows(index)}/> }
                    </div>
                ))}
                <AddInviteBtn click={submitData}/>
            </div>
        </CardContainer>
    );
};

export default FormContainer;
