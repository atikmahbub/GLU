import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Login = React.lazy(()=> import('./Views/Auth/Login/Login'));
const Signup = React.lazy(()=> import('./Views/Auth/Signup/Signup'));
const ForgotPassword = React.lazy(()=> import('./Views/Auth/ForgotPassword/ForgotPassword'));
const SetNewPassword = React.lazy(()=> import('./Views/Auth/ForgotPassword/SetNewPassword'));
const SignupForm = React.lazy(()=> import('./Views/SignupForm'));
const Dashboard = React.lazy(()=> import('./Views/Dashboard/index'));





export class App extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/reset-password" component={SetNewPassword} />
                    <Route  path="/signup-as" component={SignupForm} />
                    <Route  path="/dashboard/" component={Dashboard} />
                </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;
