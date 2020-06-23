import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { TextField, Button } from '@material-ui/core';
import { classes } from '../../Helper/classArray';
import SubjectList from './SubjectList';
import SelectController from '../../components/Inputs/SelectController';
import ErrorMessage from '../../components/ErrorMessage';
import { subjectFormValidation } from '../../Helper/FormValidations/subjectFormValidation';
import { useForm } from 'react-hook-form';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit, control } = useForm({
        validationSchema: subjectFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Class Group" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                        <SelectController
                                className="custom-input"
                                label="Select Department"
                                options={["science", "computer"]}
                                name="department"
                                control={control}
                            />
                            {errors.department && <ErrorMessage msg={subjectFormValidation.errorMsg.department} />}
                            <SelectController
                                className="custom-input"
                                label="Year Group"
                                options={classes}
                                name="yearGroup"
                                control={control}
                            />
                            {errors.yearGroup && <ErrorMessage msg={subjectFormValidation.errorMsg.yearGroup} />}
                            <SelectController
                                className="custom-input"
                                label="Form Group"
                                options={classes}
                                name="formGroup"
                                control={control}
                            />
                            {errors.formGroup && <ErrorMessage msg={subjectFormValidation.errorMsg.formGroup} />}
                            <TextField
                                variant="outlined"
                                className="custom-input"
                                inputRef={register}
                                label="Select Subject"
                                name="subject"
                                fullWidth
                            />
                            {errors.subject && <ErrorMessage msg={subjectFormValidation.errorMsg.subject} />}
                            <Button className="session-button" type="submit">
                            Create Class Group
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <SubjectList triggerModal={handleToggler} />
        </div>
    );
};

export default index;
