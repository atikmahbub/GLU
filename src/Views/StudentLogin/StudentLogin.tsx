import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, FormControlLabel, Radio, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory } from 'react-router';

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
                    <Button className="outline-button">Sign In</Button>
                    <FormControlLabel color="primary" value="" className="keep__signed radio-button" control={<Radio />} label="Keep me signed in" />
                    </div>
                </div>
                <Typography className="forgot__password">Forgot your password</Typography>
            </div>
        </div>
    );
};

export default StudentLogin;


