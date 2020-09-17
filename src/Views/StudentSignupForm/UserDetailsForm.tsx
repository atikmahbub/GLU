import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { registerContext } from './Index';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';

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
                {(context.whoIam === 'parent' && context.active === 2) && (
                    <React.Fragment>
                        <div className="col-md-4">
                            <SelectFieldUnderline
                                className="custom-adornment-input"
                                label="Mobile Number"
                                options={['+91']}
                                value={mobilePre}
                                getValue={(value: string) => {
                                    handleMobilePre(value);
                                }}
                            />
                        </div>
                        <div className="col-md-8">
                            <TextField
                                className="line-input remove_mb"
                                label=""
                                type="number"
                                value={mobile}
                                onChange={handleMobile}
                                fullWidth
                            />
                        </div>
                    </React.Fragment>
                )}

                <div className="col-lg-12">
                    <UnderLineAddornmentSingleIcon
                        label="Location"
                        className="custom-adornment-input"
                        value={location}
                        onChange={handleLocation}
                        icon={<i className="icon-Locate" />}
                    />
                </div>
            </div>
        </>
    );
};

export default UserDetailsForm;
