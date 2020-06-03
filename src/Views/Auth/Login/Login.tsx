import React from "react";
import { Link } from "react-router-dom";
import AuthCard from "../../../components/Cards/AuthCard";
import SocialLogin from '../../../components/Auth/SocialLogin';
import AdornmentInput from '../../../components/Inputs/AdornmentInput';
import { Typography, TextField, Checkbox, Button } from '@material-ui/core';

class Login extends React.PureComponent {
  render() {
    return (
      <div className="login-wrapper">
        <AuthCard>
          <>
            <Typography variant="h3" className="logo">
              Glu.
            </Typography>
            <Typography className="slogan">Great learning umbrella.</Typography>
            <TextField
              className="mb-4"
              variant="outlined"
              label="Email Address"
              fullWidth
            />
           <AdornmentInput/>
            <div className="remember-me-container">
              <Checkbox className="remember-me-checkbox" color="primary" />
              <Link to="forgot-password">Forgot Passowrd ?</Link>
            </div>
            <Button className="gradient-button" fullWidth>
              Login to Account
            </Button>
              <SocialLogin/>
            <Link className="register-now" to="signup">
              Don't have an account? Register Now
            </Link>
          </>
        </AuthCard>
      </div>
    );
  }
}

export default Login;
