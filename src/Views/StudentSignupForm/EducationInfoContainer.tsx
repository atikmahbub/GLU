import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import DateSelector from '../../components/DateTimeSelector/DateSelector';
import { registerContext } from './Index';

const EducationInfoContainer = () => {
    const context = useContext(registerContext);
    const length = context.student.education.length;
    return (
        <div className="row">
            <div className="col-lg-12">
                <TextField
                    className="line-input mb-3"
                    label="School/College"
                    value={context.student.education[length - 1].schoolName}
                    onChange={context.studentHandler.schoolName}
                    fullWidth
                />
            </div>
            <div className="col-lg-12">
                <TextField
                    className="line-input mb-3"
                    label="Qualification"
                    value={context.student.education[length - 1].qualification}
                    onChange={context.studentHandler.qualification}
                    fullWidth
                />
            </div>
            <div className="col-lg-12">
                <TextField
                    className="line-input mb-3"
                    label="Field of Study"
                    value={context.student.education[length - 1].course}
                    onChange={context.studentHandler.course}
                    fullWidth
                />
            </div>
            <div className="col-lg-6">
                <DateSelector
                    value={context.student.education[length - 1].from}
                    handler={context.studentHandler.from}
                />
            </div>
            <div className="col-lg-6">
                <DateSelector value={context.student.education[length - 1].to} handler={context.studentHandler.to} />
            </div>
        </div>
    );
};

export default EducationInfoContainer;
