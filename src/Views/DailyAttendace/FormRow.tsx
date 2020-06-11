import React from 'react';
import SelectField from '../../components/Inputs/SelectField';
import { TextField } from '@material-ui/core';
import AdornmentInput from '../../components/Inputs/AdornmentInput';
import { months } from '../../Helper/months';
import { classes } from '../../Helper/classArray';

const FormRow = () => {
    return (
        <div className="row">
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={months}
                    label="Select A Month"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={["2020"]}
                    label="Select A Year"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
                <SelectField
                    className="custom-input"
                    options={classes}
                    label="Select A Class"
                    getValue={() => {}}
                />
            </div>
            <div className="col-lg">
            <SelectField
                    className="custom-input"
                    options={["A", "B", "C"]}
                    label="Select A Section"
                    getValue={() => {}}
                />
            </div>
        </div>
    );
};

export default FormRow;
