import React, { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

const Identity: React.FunctionComponent = () => {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="whoareu" name="whoareu" value={value} onChange={handleChange}>
                <FormControlLabel
                    value="dl"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="Drivers License"
                />
                <FormControlLabel
                    value="passport"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="Passport"
                />
                <FormControlLabel
                    value="nationalId"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="National ID"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default Identity;
