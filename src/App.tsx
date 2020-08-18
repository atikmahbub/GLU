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
const Signup = React.lazy(() => import('./Views/StudentSignupForm/Index'));
const ShowWelcome = React.lazy(() => import('./Views/StudentSignupForm/ShowWelcome'));
const ForgotPassword = React.lazy(() => import('./Views/Auth/ForgotPassword/ForgotPassword'));
const SetNewPassword = React.lazy(() => import('./Views/Auth/ForgotPassword/SetNewPassword'));
const verification = React.lazy(() => import('./Views/Auth/Verification/Verification'));
const Dashboard = React.lazy(() => import('./Views/Dashboard/index'));
const TutorDashboard = React.lazy(() => import('./Views/TutorDashboard/Dashboard'));
const PersonalDashboard = React.lazy(() => import('./Views/PersonalSchool/PersonalDashboard'));
const StudentHomePage = React.lazy(() => import('./Views/StudentHomepage/Index'));
const StudentClassesTutors = React.lazy(() => import('./Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const TutorList = React.lazy(() => import('./Views/TutorList/TutorList'));
const PreviousClasses = React.lazy(() => import('./Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = React.lazy(() => import('./Views/UpcomingClasses/Index'));
const StudentIndividualSubjects = React.lazy(() => import('./Views/StudentIndividualSubjects/Index'));
const StudentWatchPreviousClass = React.lazy(() => import('./Views/StudentWatchPreviousClass/Index'));
const TutorDetail = React.lazy(() => import('./Views/TutorDetail/index'));
const TutorsUpcomingClasses = React.lazy(() => import('./Views/TutorsUpcomingClasses/Index'));
const StudentTutorPreviousClasses = React.lazy(() => import('./Views/StudentTutorPreviousClasses/Index'));
const studentDashboard = React.lazy(() => import('./Views/StudentDashboard/Index'));
const studentDetail = React.lazy(() => import('./Views/StudentDashboard/StudentDetail/index'));
const studentIncompleteDetail = React.lazy(() => import('./Views/StudentDashboard/studentIncompleteDetail/index'));
const editStudentProfile = React.lazy(() => import('./Views/StudentDashboard/EditStudentProfile/index'));

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
                            <Route exact path="/admin-login" component={Login} />
                            <Route exact path="/login" component={StudentLogin} />
                            <Route exact path="/signup-success" component={ShowWelcome} />
                            <Route exact path="/student-homepage" component={StudentHomePage} />
                            <Route exact path="/student-classes" component={StudentClassesTutors} />
                            <Route exact path="/tutor-upcoming-classes" component={TutorsUpcomingClasses} />
                            <Route exact path="/student-previous-classes" component={PreviousClasses} />
                            <Route
                                exact
                                path="/student-tutors-previous-classes"
                                component={StudentTutorPreviousClasses}
                            />
                            <Route exact path="/student-upcoming-classes" component={UpcomingClasses} />
                            <Route exact path="/student-individual-subjects" component={StudentIndividualSubjects} />
                            <Route exact path="/student-watch-previous-class" component={StudentWatchPreviousClass} />
                            <Route exact path="/student-tutors" component={TutorList} />
                            <Route exact path="/tutor-dashboard" component={TutorDashboard} />
                            <Route exact path="/personal-dashboard" component={PersonalDashboard} />
                            <Route exact path="/signup" component={Signup} />
                            <Route exact path="/support" component={Support} />
                            <Route exact path="/help-support" component={HelpSupport} />
                            <Route exact path="/forgot-password" component={ForgotPassword} />
                            <Route exact path="/student-forgot-password" component={StudentForgotPassword} />
                            <Route exact path="/reset-password" component={SetNewPassword} />
                            <Route exact path="/student-reset-password" component={StudentPasswordNew} />
                            <Route exact path="/tutor-detail" component={TutorDetail} />
                            <Route path="/verification" component={verification} />
                            <PrivateRoute path="/dashboard/" component={Dashboard} />
                            <Route path="/studentDashboard/" component={studentDashboard} />
                            <Route path="/studentDetail/" component={studentDetail} />
                            <Route path="/studentIncompleteDetail/" component={studentIncompleteDetail} />
                            <Route path="/editStudentProfile/" component={editStudentProfile} />
                        </Switch>
                    </Suspense>
                </Router>
            </>
        );
    }
}

export default App;
