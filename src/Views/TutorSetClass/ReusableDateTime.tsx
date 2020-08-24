import React from 'react';
import { TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const ReusableDateTime: React.FunctionComponent<props> = () => {
    return (
        <>
            <div className="reusableDateandTime">
                <div className="row">
                    <div className="col-md-5 p-0">
                        <TextField className="line-input" label="Date" fullWidth value="9:25AM" />
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="sub_rows">
                            <div className="input_row">
                                <div className="input_text">
                                    <SelectFieldUnderline
                                        label="Start Time"
                                        value="9.25am"
                                        className="custom-adornment-input"
                                        options={['UK / +44']}
                                        getValue={() => {}}
                                    />
                                </div>
                                <div className="input_text">
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
                </div>
                <div className="row">
                    <div className="col-12 p-0">
                        <SelectFieldUnderline
                            label="Repeat"
                            value="NEVER"
                            className="custom-adornment-input"
                            options={['NEVER']}
                            getValue={() => {}}
                        />
                    </div>
                    <div className="col-md-12 p-0 horizontalline"></div>
                </div>
            </div>
        </>
    );
};

export default ReusableDateTime;
