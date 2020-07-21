import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const StudentForgotPassword = () => {
    const routes = useHistory();
    const handleSend = () => {
        routes.push('/student-reset-password')
    }
    return (
        <div className="credential__container">
            <NavigationMenu />
            <div className="credential__form__container">
                <div className="form-container">
                    <Typography className="title">Reset Password</Typography>
                    <Typography className="sub__title">
                        We will send a link to the email address your account is registered with, so you can reset your
                        password.
                    </Typography>
                    <TextField className="line-input mb-4" label="Email Address" fullWidth />
                    <div className="button-container">
                        <Button className="outline-button" onClick={handleSend}>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentForgotPassword;
