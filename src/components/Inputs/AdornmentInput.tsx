import React, { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface props{
  className?: string
}
const AdornmentInput: React.FunctionComponent<props> = ({className}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
      };
    return (
        <FormControl className={`${className} mb-2`} variant="outlined" fullWidth>
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <OutlinedInput
          id="password-input"
          label="Password"
          type={isShowPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className="eye-button"
                aria-label="toggle password visibility"
                onClick={handlePasswordVisibility}
                edge="end"
              >
                {isShowPassword ? (
                  <VisibilityOffIcon className="off-eye" />
                ) : (
                  <VisibilityIcon className="on-eye" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
}

export default AdornmentInput;
