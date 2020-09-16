import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, FormControlLabel, Radio, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';
import { userLoginAPIcall } from '../../Redux/Actions/loginAction';
import { useDispatch } from 'react-redux';

const StudentLogin = () => {
    const [state, setState] = useState({ email: 'upk@123', password: 'Test@1234' });
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
    const dispatch = useDispatch();
    const handleSignin = () => {
        dispatch<any>(userLoginAPIcall(state, route));
    };

    return (
        <NavigationMenu absolute>
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
