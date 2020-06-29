import React, { useState } from 'react';
import CardContainer from '../../Containers/Cards/CardContainer';
import FormRow from './FormRow';
import { IconButton, Button } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { addNewTeacherAPIcall, editTeacherAPIcall } from '../../Redux/Actions/teacherAction';
import { useHistory } from 'react-router-dom';

const FormContainer: React.FunctionComponent = () => {
    const [rows, setRows] = useState([1]);
    const [formdata, setFormdata] = useState<Array<object>>([]);
    const routes = useHistory();
    const loader = useSelector((state: any) => state.uiReducer.loader);
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
                            editable ? null : (
                                <IconButton onClick={addRows} className="button-container">
                                    <Add className="icon-btn" />
                                </IconButton>
                            )
                        ) : editable ? null : (
                            <IconButton onClick={() => deleteRows(index)} className="button-container delete-btn">
                                <Delete className="icon-btn" />
                            </IconButton>
                        )}
                    </div>
                ))}
                <Button className="gray-btn" onClick={submitData} disabled={loader}>
                    {loader ? <Loader /> : 'Add & Invite'}
                </Button>
            </div>
        </CardContainer>
    );
};

export default FormContainer;
