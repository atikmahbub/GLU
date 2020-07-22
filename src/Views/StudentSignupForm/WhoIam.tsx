import React, { useState, useEffect } from 'react';
import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from '@material-ui/core';

interface props {
    whoAmIHandler: (value: string) => void; 
}
const WhoIam: React.FunctionComponent<props> = ({whoAmIHandler}) => {
    const [value, setValue] = useState('student');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    useEffect(()=>{
        whoAmIHandler(value);
    }, [value])
    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="whoareu" name="whoareu" value={value} onChange={handleChange}>
                <FormControlLabel
                    value="student"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="I am a Student"
                />
                <FormControlLabel
                    value="parent"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="I am a Parent"
                />
                <FormControlLabel
                    value="teacher"
                    className="title"
                    control={<Radio className="radio-button" />}
                    label="I am a Tutor"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default WhoIam;
