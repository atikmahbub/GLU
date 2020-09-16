import React from 'react';
import { FormControl, InputLabel, InputAdornment, IconButton, Input } from '@material-ui/core';

interface props {
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    icon?: React.ReactNode;
}
const UnderLineAddornmentSingleIcon: React.FunctionComponent<props> = ({ className, value, label, onChange, icon }) => {
    const handlePasswordVisibility = () => {};

    return (
        <FormControl className={`${className}`} variant="outlined" fullWidth>
            <InputLabel htmlFor="password-input">{label}</InputLabel>
            <Input
                id="password-input"
                value={value}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            className="eye-button"
                            aria-label="toggle password visibility"
                            onClick={handlePasswordVisibility}
                            edge="end"
                        >
                            {icon}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export default UnderLineAddornmentSingleIcon;
