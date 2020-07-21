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
                    <TextField className="line-input mb-3" label="First Name" fullWidth />
                </div>
                <div className="col-lg-6">
                    <TextField className="line-input mb-3" label="Last Name" fullWidth />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField className="line-input mb-3" label="Email Address" fullWidth />
                </div>
                <div className="col-lg-4">
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label="Mobile Number"
                        options={[]}
                        getValue={() => {}}
                    />
                </div>
                <div className="col-lg-8">
                    <SelectFieldUnderline
                        className="custom-adornment-input mb-3"
                        label=""
                        options={[]}
                        getValue={() => {}}
                    />
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
