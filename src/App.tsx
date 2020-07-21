import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Close } from '@material-ui/icons';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Routes/PrivateRoutes/PrivateRoute';
const Home = React.lazy(() => import('./Views/Home/Home'));
const Support = React.lazy(() => import('./Views/Support/Support'));
const HelpSupport = React.lazy(() => import('./Views/HelpSupport/HelpSupport'));
const Login = React.lazy(() => import('./Views/Auth/Login/Login'));
const StudentLogin = React.lazy(() => import('./Views/StudentLogin/StudentLogin'));
const StudentForgotPassword = React.lazy(() => import('./Views/StudentForgotPassword/StudentForgotPassword'));
const StudentPasswordNew = React.lazy(() => import('./Views/StudentPasswordNew/StudentPasswordNew'));
const Signup = React.lazy(()=> import('./Views/StudentSignupForm/Index'));
const ShowWelcome = React.lazy(()=> import('./Views/StudentSignupForm/ShowWelcome'));
const ForgotPassword = React.lazy(() => import('./Views/Auth/ForgotPassword/ForgotPassword'));
const SetNewPassword = React.lazy(() => import('./Views/Auth/ForgotPassword/SetNewPassword'));
const verification = React.lazy(() => import('./Views/Auth/Verification/Verification'));
const Dashboard = React.lazy(() => import('./Views/Dashboard/index'));
const StudentHomePage = React.lazy(()=> import('./Views/StudentHomepage/Index'));

export class App extends React.Component {
    CloseButton = ({ closeToast }: { closeToast: any }) => <Close onClick={closeToast} />;

    render() {
        return (
            <>
                <ToastContainer closeButton={this.CloseButton} />
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/student-login" component={StudentLogin} />
                            <Route exact path="/signup-success" component={ShowWelcome} />
                            <Route exact path="/student-homepage" component={StudentHomePage} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/support" component={Support} />
                            <Route exact path="/help-support" component={HelpSupport} />
                            <Route exact path="/forgot-password" component={ForgotPassword} />
                            <Route exact path="/student-forgot-password" component={StudentForgotPassword} />
                            <Route exact path="/reset-password" component={SetNewPassword} />
                            <Route exact path="/student-reset-password" component={StudentPasswordNew} />
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
