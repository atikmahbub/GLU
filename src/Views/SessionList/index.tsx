import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import SessionList from './SessionList';
import { TextField, Button } from '@material-ui/core';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import SelectController from '../../components/Inputs/SelectController';
import { classes } from '../../Helper/classArray';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { useForm } from 'react-hook-form';
import { sessionFormValidation } from '../../Helper/FormValidations/sessionFormValidation';
import ErrorMessage from '../../components/ErrorMessage';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit, control } = useForm({
        validationSchema: sessionFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);
    return (
        <div>
            {toggler ? (
                <ModalBox title="Create Session" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="mb-4">
                                <DateSelector />
                            </div>
                            <TimeSelector label="Start Time" />
                            <TimeSelector label="End Time" />
                            <TextField
                                variant="outlined"
                                name="topicName"
                                inputRef={register}
                                className="custom-input"
                                fullWidth
                                label="Topic Name"
                            />
                            {errors.topicName && <ErrorMessage msg={sessionFormValidation.errorMsg.topicName} />}
                            <SelectController
                                name="class"
                                control={control}
                                options={classes}
                                label="Year Group"
                                className="custom-input"
                            />
                    
                            
                            {errors.class && <ErrorMessage msg={sessionFormValidation.errorMsg.class} />}
                            <SelectController
                                name="section"
                                control={control}
                                options={['A', 'B']}
                                label="Form Group"
                                className="custom-input"
                            />
                            {errors.section && <ErrorMessage msg={sessionFormValidation.errorMsg.section}/>}
                            <SelectController
                                className="custom-input"
                                label="Faculty Name"
                                control={control}
                                name="faculty"
                                options={['john', 'lea', 'Deven', 'Jinwie']}
                            />
                            {errors.faculty && <ErrorMessage msg={sessionFormValidation.errorMsg.faculty}/>}
                            <Button type="submit" className="session-button">
                                Create Session
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <SessionList triggerModal={handleToggler} />
        </div>
    );
};

export default index;
