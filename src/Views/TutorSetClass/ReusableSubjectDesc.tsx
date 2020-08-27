import React from 'react';
import { TextField,Typography } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

const ReusableSubjectDesc: React.FunctionComponent =() => {
    return (
        <>
            <div className="row">
                <div className="col-md-5 p-0">
                    <SelectFieldUnderline
                        label="Subject"
                        value="English"
                        className="custom-adornment-input"
                        options={['English']}
                        getValue={() => {}}
                    />
                </div>
                <div className="col-md-7 p-0">
                    <div className="sub_rows">
                            <div className="input_row">
                                <div className="input_text">
                                <TextField className="line-input" label="No. Of Students" fullWidth value="25" />
                                </div>
                                <div className="input_text">
                                <TextField className="line-input" label="No. Of Students" fullWidth value="25" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 p-0">
                    <TextField className="line-input" label="Title (45 Characters)" fullWidth value=" " />
                </div>
                <div className="col-md-12 p-0">
                    <div className="description_container">
                        <Typography className="title">Description</Typography>
                        <textarea rows={5} style={{width:"100%"}} className="textbox" />
                    </div>
                </div>
                <div className="col-md-12 p-0">Resources</div>

                <div className="upload_component">
                    <div className="upload_button" >
                        <Typography className="text">Upload</Typography>
                    </div>
                    <div>
                        <Typography className="subtext">Max size (500mb)</Typography>
                    </div>
                    <input type="file" style={{ display: 'none' }} />
                </div>
                <div className="col-12 p-0 horizontalline"></div>
            </div>
            
        </>
    );
};

export default ReusableSubjectDesc;
