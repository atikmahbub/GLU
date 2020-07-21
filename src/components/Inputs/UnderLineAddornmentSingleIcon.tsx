import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, OutlinedInput,  InputAdornment, IconButton, FilledInput, Input } from '@material-ui/core';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface props{
  className?: string;
  value?:string;
  onChange?: (value: string) => void;
  label?: string;
  icon?: React.ReactNode
}
const UnderLineAddornmentSingleIcon: React.FunctionComponent<props> = ({className, value,label, onChange, icon}) => {
    const [password, setPassword] = useState('');   
    const handlePasswordVisibility = () => {
      
      };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if(onChange){
        onChange(e.target.value);
      }
    }
      useEffect(()=>{
        value && setPassword(value);
      }, [])
    return (
        <FormControl className={`${className} mb-2`} variant="outlined" fullWidth>
        <InputLabel htmlFor="password-input">{label}</InputLabel>
        <Input
          id="password-input"
          value={password}
          onChange={handlePassword}
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
}

export default UnderLineAddornmentSingleIcon;
