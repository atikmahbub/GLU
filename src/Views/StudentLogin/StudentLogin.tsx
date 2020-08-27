import React, { useState } from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { TextField, FormControlLabel, Radio, Typography } from '@material-ui/core';
import UnderLineAddornment from '../../components/Inputs/UnderLineAddornment';
import { useHistory } from 'react-router';
import OutlineButton from '../../components/Button/OutlineButton';

const StudentLogin = () => {
    const [state, setState] = useState({email:'', password:''});
    const routes = useHistory();
    const handleForgot = () => {
        routes.push('/student-forgot-password');
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setState({...state, email:e.target.value});
    }
    const handlePass = (value: string)=>{
        setState({...state, password: value});
    }
    const route = useHistory();
    const handleSignin =() =>{
        if(state.email==="student@gmail.com"){
            route.push('/students/')
        }else if(state.email==="teacher@gmail.com"){

        }else if(state.email==="parent@gmail.com"){

        }
    }
   
    return (
        <div className="credential__container">
            <NavigationMenu/>
            <div className="credential__form__container">
                <div className="form-container">
                    <TextField className="line-input mb-5" label="Email Address" value={state.email} onChange={handleEmail} fullWidth />
                    <UnderLineAddornment label="Password" className="custom-adornment-input"  onChange={(value:string)=>handlePass(value)}/>
                    <div className="button-container">
                    <OutlineButton text="Sign In" btnClick={handleSignin} />
                    <FormControlLabel color="primary" value="" className="keep__signed radio-button" control={<Radio />} label="Keep me signed in" />
                    </div>
                </div>
                <Typography className="forgot__password" onClick={handleForgot}>Forgot your password</Typography>
            </div>
        </div>
    );
};

export default StudentLogin;


