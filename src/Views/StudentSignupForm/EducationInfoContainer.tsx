import React from 'react';
import { TextField, Button } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';

const EducationInfoContainer = () => {
    return (
        <div className="row">
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="School/College" fullWidth />
                </div>
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="Qualification" fullWidth />
                </div>
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="Field of Study" fullWidth />
                </div>
                <div className="col-lg-6">
                <DateSelector handler={(value: Date) => {}} />
                </div>
                <div className="col-lg-6">
                <DateSelector handler={(value: Date) => {}} />
                </div>
            </div>
    );
}

export default EducationInfoContainer;
