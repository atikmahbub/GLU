import React from 'react';
import {  TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const ReusableDateTime: React.FunctionComponent<props> = () => {
    return (
        <>
            <div className="reusableDateandTime">
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextField className="line-input-3" label="Date" fullWidth value="9:25AM" />
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="row">
                                            <div className="col-6">
                                                <SelectFieldUnderline
                                                    label="Start Time"
                                                    value="9.25am"
                                                    className="custom-adornment-input"
                                                    options={['UK / +44']}
                                                    getValue={() => {}}
                                                />
                                            </div>
                                            <div className="col-6">
                                                <SelectFieldUnderline
                                                    label="End Time"
                                                    value="9.25am"
                                                    className="custom-adornment-input"
                                                    options={['UK / +44']}
                                                    getValue={() => {}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <SelectFieldUnderline
                                            label="Repeat"
                                            value="NEVER"
                                            className="custom-adornment-input"
                                            options={['NEVER']}
                                            getValue={() => {}}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 horizontalline"></div>
                            </div>
        </>
    );
};

export default ReusableDateTime;
