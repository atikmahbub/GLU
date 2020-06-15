import React, { useState } from 'react';
import ModalBox from '../../components/Modal/ModalBox';
import { Button } from '@material-ui/core';
import SelectController from '../../components/Inputs/SelectController';
import { classes } from '../../Helper/classArray';
import ClassRoutine from './ClassRoutine';
import { dayNames } from '../../Helper/dayNames';
import TimeSelector from '../../components/DateTimeSelector/TimeSelector';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../components/ErrorMessage';
import { routineFormValidation } from '../../Helper/FormValidations/routineFormValidation';

const index: React.FunctionComponent = () => {
    const [toggler, setToggler] = useState(false);
    const handleToggler = () => {
        setToggler(!toggler);
    };
    const { register, errors, handleSubmit, control } = useForm({
        validationSchema: routineFormValidation.validationSetting,
    });
    const submit = (data: object) => console.log(data);

    return (
        <div>
            {toggler ? (
                <ModalBox title="Take Attendance" modalHandler={handleToggler}>
                    <div className="modal-form">
                        <form onSubmit={handleSubmit(submit)}>
                            <SelectController
                                className="custom-input"
                                label="Select Class"
                                control={control}
                                options={classes}
                                name="class"
                            />
                            {errors.class && <ErrorMessage msg={routineFormValidation.errorMsg.class} />}
                            <SelectController
                                className="custom-input"
                                label="Select Section"
                                control={control}
                                options={['A', 'B', 'C']}
                                name="section"
                            />
                            {errors.section && <ErrorMessage msg={routineFormValidation.errorMsg.section} />}
                            <SelectController
                                className="custom-input"
                                label="Select Subject"
                                control={control}
                                options={['Hindi', 'English', 'Math']}
                                name="subject"
                            />
                            {errors.subject && <ErrorMessage msg={routineFormValidation.errorMsg.subject} />}
                            <SelectController
                                className="custom-input"
                                label="Select Teacher"
                                control={control}
                                options={['John', 'Alex', 'david']}
                                name="teacher"
                            />
                            {errors.teacher && <ErrorMessage msg={routineFormValidation.errorMsg.teacher} />}

                            <SelectController
                                className="custom-input"
                                label="Select Day"
                                control={control}
                                options={dayNames}
                                name="day"
                            />
                            {errors.day && <ErrorMessage msg={routineFormValidation.errorMsg.day} />}
                            <TimeSelector label="Start Time" />
                            <TimeSelector label="End Time" />
                            <Button className="session-button" type="submit">
                                Update Attendance
                            </Button>
                        </form>
                    </div>
                </ModalBox>
            ) : null}
            <ClassRoutine triggerModal={handleToggler} />
        </div>
    );
};

export default index;
