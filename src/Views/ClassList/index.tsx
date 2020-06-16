import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import ClassList from './ClassList';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import { classFormValidation } from '../../Helper/FormValidations/classFormValidation';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit } = useForm({
        validationSchema: classFormValidation.validationSetting,
    });
    const submit = (data:object) => console.log(data);
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Class" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <TextField
                                variant="outlined"
                                inputRef={register}
                                name="className"
                                className="custom-input"
                                fullWidth
                                label="Class Name"
                            />
                            {errors.className && <ErrorMessage msg={classFormValidation.errorMsg.className} />}
                            <TextField
                                variant="outlined"
                                inputRef={register}
                                name="section"
                                className="custom-input"
                                fullWidth
                                label="Section Name"
                            />
                            {errors.section && <ErrorMessage msg={classFormValidation.errorMsg.section} />}
                            <Button type="submit" className="session-button">
                                Create Class
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <ClassList triggerModal={handleToggler} />
        </div>
    );
};

export default index;
