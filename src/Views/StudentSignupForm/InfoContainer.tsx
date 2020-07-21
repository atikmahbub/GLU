import React, { useState } from 'react';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import UserDetailsForm from './UserDetailsForm';
const InfoContainer: React.FunctionComponent = () => {
    const [value, setValue] = useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <div className="info__container">
           <UserDetailsForm/>
            <div className="row">
                <div className="col-lg-12">
                    <UnderLineAddornment label="Password" className="custom-adornment-input" />
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
