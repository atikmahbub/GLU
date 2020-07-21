import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SelectFieldUnderline from '../../components/Inputs/SelectFieldUnderline';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import UnderLineAddornmentSingleIcon from '../../components/Inputs/UnderLineAddornmentSingleIcon';
import { LocationSearching } from '@material-ui/icons';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
const InfoContainer: React.FunctionComponent = () => {
    const [value, setValue] = useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <div className="info__container">
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
                        label="Mobile Number"
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
                <div className="col-lg-12">
                    <UnderLineAddornment label="New Password" className="custom-adornment-input" />
                </div>
            </div>
            <FormControl component="fieldset">
                <RadioGroup aria-label="whoareu" name="whoareu" value={value} onChange={handleChange}>
                    <FormControlLabel
                        value="tc"
                        className="title"
                        control={<Radio className="radio-button" />}
                        label="I accept the Terms and Conditions"
                    />
                    <FormControlLabel
                        value="po"
                        className="title"
                        control={<Radio className="radio-button" />}
                        label="Send me promotional offers and surverys via email or SMS"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default InfoContainer;
