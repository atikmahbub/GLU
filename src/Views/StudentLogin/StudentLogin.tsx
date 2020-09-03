import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, FormControlLabel, Radio, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';
import { setAuthrizationToken } from '../../Utility/API';

const StudentLogin = () => {
    const [state, setState] = useState({ email: '', password: '' });
    const routes = useHistory();
    const handleForgot = () => {
        routes.push('/student-forgot-password');
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, email: e.target.value });
    };
    const handlePass = (value: string) => {
        setState({ ...state, password: value });
    };
    const route = useHistory();
    const handleSignin = () => {
        localStorage.setItem(
            'auth',
            JSON.stringify({
                access_token:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVwa0AxMjMiLCJ1c2VySWQiOjEzLCJyb2xlIjoiU2Nob29sIiwidXNlclJvbGVJZCI6MSwiaWF0IjoxNTk4NTk1NzM0LCJleHAiOjE1OTk4OTE3MzR9.UgIJ69g1zqMv58tmOy-m_jaNQRyW-0hX3fB-zHoerEg',
            })
        );
        setAuthrizationToken();
        if (state.email === 'student@gmail.com') {
            route.push('/students/home');
        } else if (state.email === 'tutor@gmail.com') {
            route.push('/tutor/');
        } else if (state.email === 'parent@gmail.com') {
            route.push('/parent/homepage');
        }
    };

    return (
        <NavigationMenu>
            <div className="credential__container">
                <div className="credential__form__container">
                    <div className="form-container">
                        <TextField
                            className="line-input mb-5"
                            label="Email Address"
                            value={state.email}
                            onChange={handleEmail}
                            fullWidth
                        />
                        <UnderLineAddornment
                            label="Password"
                            className="custom-adornment-input"
                            onChange={(value: string) => handlePass(value)}
                        />
                        <div className="button-container">
                            <OutlineButton text="Sign In" btnClick={handleSignin} />
                            <FormControlLabel
                                color="primary"
                                value=""
                                className="keep__signed radio-button"
                                control={<Radio />}
                                label="Keep me signed in"
                            />
                        </div>
                    </div>
                    <Typography className="forgot__password" onClick={handleForgot}>
                        Forgot your password?
                    </Typography>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default StudentLogin;
