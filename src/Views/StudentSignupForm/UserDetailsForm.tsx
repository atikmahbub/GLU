import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { LocationSearching } from '@material-ui/icons';
import { registerContext } from './Index';

interface props {
    firstName: string;
    lastName: string;
    email: string;
    mobilePre: string;
    location: string;
    mobile: string;
    handleFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMobilePre: (value: string) => void;
    handleMobile: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLocation: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const UserDetailsForm: React.FunctionComponent<props> = ({
    firstName,
    lastName,
    email,
    mobilePre,
    mobile,
    location,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleMobilePre,
    handleMobile,
    handleLocation,
}) => {
    const context = useContext(registerContext);
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <TextField
                        className="line-input"
                        value={firstName}
                        onChange={handleFirstName}
                        label="First Name"
                        fullWidth
                    />
                </div>
                <div className="col-lg-6">
                    <TextField
                        className="line-input"
                        value={lastName}
                        onChange={handleLastName}
                        label="Last Name"
                        fullWidth
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <TextField
                        className="line-input"
                        value={email}
                        onChange={handleEmail}
                        label="Email Address"
                        fullWidth
                    />
                </div>
                {/* <div className="col-lg-12">
                    <SelectFieldUnderline
                        className="custom-adornment-input"
                        label="Gender"
                        options={['male', 'female']}
                        value={mobilePre}
                        getValue={(value: string) => {
                            handleMobilePre(value);
                        }}
                    />
                </div> */}
                {/* <div className="col-lg-8">
                    <TextField
                        className="line-input remove_mb"
                        label=""
                        type="number"
                        value={mobile}
                        onChange={handleMobile}
                        fullWidth
                    />
                </div> */}
                <div className="col-lg-12">
                    <UnderLineAddornmentSingleIcon
                        label="Location"
                        className="custom-adornment-input"
                        value={location}
                        onChange={handleLocation}
                        icon={<LocationSearching className="search-loc" />}
                    />
                </div>
            </div>
        </>
    );
};

export default UserDetailsForm;
