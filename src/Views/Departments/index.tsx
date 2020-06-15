import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import Departments from './Departments';
import ErrorMessage from '../../components/ErrorMessage';
import { useForm } from 'react-hook-form';
import { departmentFormValidation } from '../../Helper/FormValidations/departmentFormValidation';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit } = useForm({
        validationSchema: departmentFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);
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
                                Create Department
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <Departments triggerModal={handleToggler} />
        </div>
    );
};

export default index;
