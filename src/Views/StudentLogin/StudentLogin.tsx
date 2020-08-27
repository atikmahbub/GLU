import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, FormControlLabel, Radio, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';

const StudentLogin = () => {
    const routes = useHistory();
    const handleForgot = () => {
        routes.push('/student-forgot-password');
    };
    return (
        
        <div className="credential__container">
            <NavigationMenu/>
            <div className="credential__form__container">
                <div className="form-container">
                    <TextField className="line-input mb-5" label="Email Address" fullWidth />
                    <UnderLineAddornment label="Password" className="custom-adornment-input"/>
                    <div className="button-container">
                    <OutlineButton text="Sign In"/>
                    <FormControlLabel color="primary" value="" className="keep__signed radio-button" control={<Radio />} label="Keep me signed in" />
                    </div>
                </div>
                <Typography className="forgot__password" onClick={handleForgot}>Forgot your password</Typography>
            </div>
        </div>
    );
};

export default StudentLogin;


