import React, { useState } from 'react';
import {
    Typography,
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Button,
    IconButton,
} from '@material-ui/core';

const WhoIam = () => {
    const [value, setValue] = useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="whoareu" name="whoareu" value={value} onChange={handleChange}>
                <FormControlLabel
                    value="female"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="I am a Student"
                />
                <FormControlLabel
                    value="male"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="I am a Parent"
                />
                <FormControlLabel
                    value="other"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="I am a Tutor"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default WhoIam;
