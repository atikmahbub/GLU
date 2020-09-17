import React, { useEffect, useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, Button, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory, useLocation } from 'react-router';
import { resetPasswordAPIcall } from '../../Redux/Actions/loginAction';
import { useDispatch } from 'react-redux';

const StudentPasswordNew = () => {
    const [state, setState] = useState({ password: '', confirmPassword: '' });
    const handlePassword = (value: string) => {
        setState({ ...state, password: value });
    };
    const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, confirmPassword: e.target.value });
    };
    const route = useLocation();
    const dispatch = useDispatch();
    const rotuePath = useHistory();
    const redirectToHome = () =>{
        setTimeout(()=>{
            rotuePath.push("/login")
        },5000)
    }
    const handleSubmit = () => {
        const getToken = route.search.split('ref=');
        if (getToken[1]) {
            const data = {password:state.password};
            dispatch(resetPasswordAPIcall(data, getToken[1], redirectToHome));
        }
    }

    return (
        <NavigationMenu absolute>
            <div className="credential__container">
                <div className="credential__form__container">
                    <div className="form-container">
                        <Typography className="title">Make New Password</Typography>
                        <Typography className="sub__title">
                            Enter a password that you’ll be able to remember. Make sure it contains one uppercase and
                            one special character.
                        </Typography>
                        <UnderLineAddornment
                            label="New Password"
                            className="custom-adornment-input mb-5"
                            value={state.password}
                            onChange={handlePassword}
                        />
                        <TextField
                            className="line-input mb-5"
                            type="password"
                            label="Confirm Password"
                            fullWidth
                            value={state.confirmPassword}
                            onChange={handleNewPassword}
                        />
                        <div className="button-container">
                            <Button className="outline-button" onClick={handleSubmit}>Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default StudentPasswordNew;
