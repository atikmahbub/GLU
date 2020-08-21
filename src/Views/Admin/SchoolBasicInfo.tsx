import React from 'react';
import { TextField, Typography } from '@material-ui/core';

const SchoolBasicInfo: React.FunctionComponent = () => {
    return (
        <div className="school-information-container">
            <div className="row">
                <div className="col-md-12">
                    <TextField className="line-input2" label="School/College Name" fullWidth />
                </div>
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
            </div>
        </div>
    );
};

export default SchoolBasicInfo;
