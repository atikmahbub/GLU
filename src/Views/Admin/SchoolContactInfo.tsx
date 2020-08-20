import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const SchoolContactInfo: React.FunctionComponent = () => {
    return (
        <div className="school-information-container">
            <div className="row">
                <div className="col-4 col-sm-12 col-md-12">
                    <SelectFieldUnderline
                        className="custom-adornment-input2"
                        label="Land Line Number"
                        options={[]}
                        getValue={() => {}}
                    />
                </div>
                <div className="col-8 col-sm-12 col-md-12">
                    <TextField className="line-input2" label="dg" fullWidth />
                </div>
                {/* <div className="col-md-6">
                                        <TextField
                                            value={state.email}
                                            onChange={emailHandler}
                                            className="custom-input"
                                            label="School Email"
                                            fullWidth
                                        />
                                    </div> */}
                {/* <div className="col-md-6">
                                        <TextField
                                            value={state.phone_number}
                                            onChange={phoneHandler}
                                            type="number"
                                            className="custom-input"
                                            label="Telephone Number"
                                            fullWidth
                                        />
                                    </div> */}
                <div className="col-md-12">
                    <TextField className="line-input2" label="Address" fullWidth />
                </div>
                <div className="col-md-12">
                    <div className="biograpghy__container">
                        <Typography className="title">Short Bio</Typography>
                        <textarea rows={5} className="textbox" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="biograpghy__container">
                        <Typography className="title">Long Bio</Typography>
                        <textarea rows={10} className="textbox" />
                    </div>
                </div>
                {/* <div className="col-md-6">
                                        <TextField
                                            value={state.website}
                                            onChange={websiteHandler}
                                            className="custom-input"
                                            label="School Website"
                                            fullWidth
                                        />
                                    </div> */}
            </div>
        </div>
    );
};

export default SchoolContactInfo;
