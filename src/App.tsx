import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Close } from '@material-ui/icons';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Routes/PrivateRoutes/PrivateRoute';
const Home = React.lazy(() => import('./Views/Home/Home'));
const Login = React.lazy(() => import('./Views/Auth/Login/Login'));
const Signup = React.lazy(() => import('./Views/Auth/Signup/Signup'));
const ForgotPassword = React.lazy(() => import('./Views/Auth/ForgotPassword/ForgotPassword'));
const SetNewPassword = React.lazy(() => import('./Views/Auth/ForgotPassword/SetNewPassword'));
const verification = React.lazy(()=>import('./Views/Auth/Verification/Verification'))
const SignupForm = React.lazy(() => import('./Views/SignupForm'));
const Dashboard = React.lazy(() => import('./Views/Dashboard/index'));


export class App extends React.Component {
    CloseButton = ({ closeToast }: { closeToast: any }) => <Close onClick={closeToast} />;

    render() {
        return (
            <>
                <ToastContainer closeButton={this.CloseButton} />
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/forgot-password" component={ForgotPassword} />
                            <Route exact path="/reset-password" component={SetNewPassword} />
                            <Route path="/signup-as" component={SignupForm} />
                            <Route path="/verification" component={verification} />
                            <PrivateRoute path="/dashboard/" component={Dashboard} />
                        </Switch>
                    </Suspense>
                </Router>
            </>
        );
    }
}

export default App;
