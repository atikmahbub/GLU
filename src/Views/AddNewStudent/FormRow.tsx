import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';

const FormRow = () => {
    return (
            <div className="row">
                <div className="col-lg-3">
                    <TextField className="custom-input" label="Name" variant="outlined" fullWidth />
                </div>
                <div className="col-lg-3">
                    <TextField className="custom-input" label="Email" variant="outlined" fullWidth />
                </div>
                <div className="col-lg-3">
                    <SelectField
                        className="custom-input"
                        options={['Male', 'Female']}
                        label="Select Gender"
                        getValue={() => {}}
                    />
                </div>
                <div className="col-lg-3">
                    <SelectField
                        className="custom-input"
                        options={['', '']}
                        label="Select Parent"
                        getValue={() => {}}
                    />
                </div>
            </div>
    );
};

export default FormRow;
