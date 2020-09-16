import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { registerContext } from './Index';

const ExperienceContainer: React.FunctionComponent = () => {
    const context = useContext(registerContext);
    let length = context.state.teacher.experience.length - 1;
    const teacher = context.state.teacher.experience;
    if (context.editMode) {
        length = context.currentActive;
    }

    const workspaceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].workplace = e.target.value;
        context.setState(data);
    };
    const positionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].position = e.target.value;
        context.setState(data);
    };
    const departmentHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.experience[length].designation = e.target.value;
        context.setState(data);
    };

    const fromDateHandler = (value: Date) => {
        const data = { ...context.state };
        data.teacher.experience[length].from = value;
        context.setState(data);
    };
    const toDateHandler = (value: Date) => {
        const data = { ...context.state };
        data.teacher.experience[length].to = value;
        context.setState(data);
    };

    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-3"
                        label="Workplace"
                        value={teacher[length].workplace}
                        onChange={workspaceHandler}
                        fullWidth
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-3"
                        label="Position"
                        value={teacher[length].position}
                        onChange={positionHandler}
                        fullWidth
                    />
                </div>
                <div className="col-lg-12">
                    <TextField
                        className="line-input mb-3"
                        label="Department"
                        value={teacher[length].designation}
                        onChange={departmentHandler}
                        fullWidth
                    />
                </div>
                <div className="col-lg-6">
                    <DateSelector
                        value={teacher[length].from}
                        handler={(value: Date) => {
                            fromDateHandler(value);
                        }}
                    />
                </div>
                <div className="col-lg-6">
                    <DateSelector
                        value={teacher[length].to}
                        handler={(value: Date) => {
                            toDateHandler(value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceContainer;
