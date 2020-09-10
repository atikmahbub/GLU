import React, { useState, useEffect } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import Departments from './Departments';
import ErrorMessage from '../../components/ErrorMessage';
import { useForm } from 'react-hook-form';
import { departmentFormValidation } from '../../Helper/FormValidations/departmentFormValidation';
import { useDispatch } from 'react-redux';
import { addNewDepartmentAPIcall, getAllDepartmentAPIcall, updateDepartmentAPIcall } from '../../Redux/Actions/schoolAction';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const [editDepartment, setEditDepartment] = useState();
    const dispatch = useDispatch();
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit, reset } = useForm({
        validationSchema: departmentFormValidation.validationSetting,
    });
    const submit = (data: any) => {
        console.log(data);
        if (editDepartment) {
            dispatch(updateDepartmentAPIcall(editDepartment.id, {name: data.department}, handleToggler));
        }else{
            dispatch(addNewDepartmentAPIcall({ name: data.department }, handleToggler));
        }
    };
    useEffect(() => {
        dispatch(getAllDepartmentAPIcall());
    }, []);
    useEffect(() => {
        if (editDepartment) {
            reset({ department: (editDepartment as any).name });
            handleToggler();
        }
    }, [editDepartment]);
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Department" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <TextField
                                variant="outlined"
                                name="department"
                                inputRef={register}
                                className="custom-input"
                                fullWidth
                                label="Department Name"
                            />
                            {errors.department && <ErrorMessage msg={departmentFormValidation.errorMsg.department} />}
                            <Button type="submit" className="session-button">
                                {editDepartment ? 'Update Department' : 'Create Department'}
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <Departments editDepartment={setEditDepartment}/>
        </div>
    );
};

export default index;
