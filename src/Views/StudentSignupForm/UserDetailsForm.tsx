import React from 'react';
import { TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { LocationSearching } from '@material-ui/icons';

const UserDetailsForm: React.FunctionComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <TextField className="line-input" label="First Name" fullWidth />
                </div>
                <div className="col-lg-6">
                    <TextField className="line-input" label="Last Name" fullWidth />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField className="line-input" label="Email Address" fullWidth />
                </div>
                <div className="col-lg-4">
                    <SelectFieldUnderline
                        className="custom-adornment-input"
                        label="Mobile Number"
                        options={[]}
                        getValue={() => {}}
                    />
                </div>
                <div className="col-lg-8">
                <TextField className="line-input remove_mb" label="" fullWidth />
                </div>
                <div className="col-lg-12">
                    <UnderLineAddornmentSingleIcon
                        label="Location"
                        className="custom-adornment-input"
                        icon={<LocationSearching className="search-loc" />}
                    />
                </div>
            </div>
        </>
    );
};

export default UserDetailsForm;
