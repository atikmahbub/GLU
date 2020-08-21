import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const SchoolContactInfo: React.FunctionComponent = () => {
    return (
        <div className="school-information-container">
            <div className="row">
                <div className="lanline_num__container">
                    <Typography className="title">Land Line Number</Typography>
                    <Typography className="add_btn">Add new number</Typography>
                </div>
                <div className="phone__container">
                <div className="prefix">
                    <SelectFieldUnderline
                        value="UK / +44"
                        className="custom-adornment-input2"
                        options={['UK / +44']}
                        getValue={() => {}}
                    />
                </div>
                <div className="phone__number">
                    <TextField className="line-input2" fullWidth />
                </div>
                </div>
                <div className="col-md-12">
                    <TextField className="line-input2" label="Email Address" fullWidth />
                </div>
                <div className="col-md-12">
                    <TextField className="line-input2" label="Website" fullWidth />
                </div>
            </div>
        </div>
    );
};

export default SchoolContactInfo;
