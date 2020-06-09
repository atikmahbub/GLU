import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import AdornmentInput from '../../components/Inputs/AdornmentInput';

const FormRow = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <TextField className="custom-input" label="Name" variant="outlined" fullWidth />
            </div>
            <div className="col-lg-4">
                <TextField className="custom-input" label="Email" variant="outlined" fullWidth />
            </div>
            <div className="col-lg-4">
                <SelectField
                    className="custom-input"
                    options={['Male', 'Female']}
                    label="Select Gender"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg-3">
                <SelectField className="custom-input" options={['computer', 'English', 'science']} label="Department" getValue={() => {}} />
            </div>
            <div className="col-lg-3">
                <SelectField className="custom-input" options={['senior lecturer', 'junior lecturer']} label="Designation" getValue={() => {}} />
            </div>
            <div className="col-lg-3">
                <TextField className="custom-input" label="Phone Number" variant="outlined" fullWidth />
            </div>
            <div className="col-lg-3">
                <AdornmentInput className="custom-input mb-4" />
            </div>
        </div>
    );
};

export default FormRow;
