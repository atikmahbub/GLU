import React from 'react';
import { TextField } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';

const ExperienceContainer: React.FunctionComponent = () => {
    return (
        <div className="mb-3">
            <div className="row">
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="Workplace" fullWidth />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="Position" fullWidth />
                </div>
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="Department" fullWidth />
                </div>
                <div className="col-lg-6">
                    <DateSelector handler={(value: Date) => {}} />
                </div>
                <div className="col-lg-6">
                    <DateSelector handler={(value: Date) => {}} />
                </div>
            </div>
        </div>
    );
};

export default ExperienceContainer;
