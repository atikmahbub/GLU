import React, { useContext } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { registerContext } from './Index';

const Identity: React.FunctionComponent = () => {
    const context = useContext(registerContext);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.teacher.identity = event.target.value;
        context.setState(data);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="whoareu"
                name="whoareu"
                value={context.state.teacher.identity}
                onChange={handleChange}
            >
                <FormControlLabel
                    value="dl"
                    className="title textBlack"
                    control={<Radio className="radio-button" />}
                    label="Drivers License"
                />
                <FormControlLabel
                    value="passport"
                    className="title textBlack"
                    control={<Radio className="radio-button" />}
                    label="Passport"
                />
                <FormControlLabel
                    value="nationalId"
                    className="title textBlack"
                    control={<Radio className="radio-button" />}
                    label="National ID"
                />
            </RadioGroup>
        </FormControl>
    );
};

export default Identity;
