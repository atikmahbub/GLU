import React from "react";
import { Link,  withRouter } from "react-router-dom";
import AuthCard from "../../../Containers/Cards/AuthCard";
import SocialLogin from '../../../components/Auth/SocialLogin';
import AdornmentInput from '../../../components/Inputs/AdornmentInput';
import { Typography, TextField, Checkbox, Button } from '@material-ui/core';
import SelectField from '../../../components/Inputs/SelectField';
import {RouteComponentProps} from "react-router-dom";

const loginAs = ["Superadmin", "Admin", "Teacher", "Parent", "Student", "Account", "Librarrian"];
class Login extends React.PureComponent<RouteComponentProps> {
  state = {
    loginAs:'',
    email:'',
    password: ''
  }
  handleLoginAs = (value: string) => {
    this.setState({...this.state, loginAs: value})
  }
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({...this.state, email: e.target.value})
  }
  handlePassword = (value: string) => {
    this.setState({...this.state, password: value});
  }
  handleForm = () => {
    localStorage.setItem('auth', JSON.stringify(this.state));
    this.props.history.push("/dashboard")
  }
  render() {
    return (
      <div className="login-wrapper">
        <AuthCard>
          <>
            <Typography variant="h3" className="logo">
              Glu.
            </Typography>
            <Typography className="slogan">Great learning umbrella.</Typography>
            <SelectField label="Login As" className="mb-4" getValue={(value)=>this.handleLoginAs(value)} options={loginAs}/>
            <TextField
              className="mb-4"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleEmail}
              label="Email Address"
              fullWidth
            />
           <AdornmentInput value={this.state.password} onChange={(value)=> this.handlePassword(value)}/>
            <div className="remember-me-container">
              <Checkbox className="remember-me-checkbox" color="primary" />
              <Link to="forgot-password">Forgot Passowrd ?</Link>
            </div>
            <Button className="gradient-button" onClick={this.handleForm}  fullWidth>
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

export default withRouter(Login);
