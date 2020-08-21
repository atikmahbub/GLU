import React from 'react';

const Home = React.lazy(() => import('../../Views/Home/Home'));
const Support = React.lazy(() => import('../../Views/Support/Support'));
const HelpSupport = React.lazy(() => import('../../Views/HelpSupport/HelpSupport'));
const Login = React.lazy(() => import('../../Views/Auth/Login/Login'));
const StudentLogin = React.lazy(() => import('../../Views/StudentLogin/StudentLogin'));
const StudentForgotPassword = React.lazy(() => import('../../Views/StudentForgotPassword/StudentForgotPassword'));
const StudentPasswordNew = React.lazy(() => import('../../Views/StudentPasswordNew/StudentPasswordNew'));
const Signup = React.lazy(() => import('../../Views/StudentSignupForm/Index'));
const ShowWelcome = React.lazy(() => import('../../Views/StudentSignupForm/ShowWelcome'));
const ForgotPassword = React.lazy(() => import('../../Views/Auth/ForgotPassword/ForgotPassword'));
const SetNewPassword = React.lazy(() => import('../../Views/Auth/ForgotPassword/SetNewPassword'));
const verification = React.lazy(() => import('../../Views/Auth/Verification/Verification'));
const PersonalDashboard = React.lazy(() => import('../../Views/PersonalSchool/PersonalDashboard'));
const StudentHomePage = React.lazy(() => import('../../Views/StudentHomepage/Index'));
const StudentClassesTutors = React.lazy(() => import('../../Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const TutorList = React.lazy(() => import('../../Views/TutorList/TutorList'));
const PreviousClasses = React.lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = React.lazy(() => import('../../Views/UpcomingClasses/Index'));
const StudentIndividualSubjects = React.lazy(() => import('../../Views/StudentIndividualSubjects/Index'));
const StudentWatchPreviousClass = React.lazy(() => import('../../Views/StudentWatchPreviousClass/Index'));
const TutorDetail = React.lazy(() => import('../../Views/TutorDetail/index'));
const TutorsUpcomingClasses = React.lazy(() => import('../../Views/TutorsUpcomingClasses/Index'));
const StudentTutorPreviousClasses = React.lazy(() => import('../../Views/StudentTutorPreviousClasses/Index'));
const studentDashboard = React.lazy(() => import('../../Views/StudentDashboard/Index'));
const studentDetail = React.lazy(() => import('../../Views/StudentDashboard/StudentDetail/Index'));
const studentIncompleteDetail = React.lazy(() => import('../../Views/StudentDashboard/StudentIncompleteDetail/Index'));
const editStudentProfile = React.lazy(() => import('../../Views/StudentDashboard/EditStudentProfile/Index'));
const studentSchoolInfo = React.lazy(() => import('../../Views/StudentSchoolInfo/Index'));
const studentNoFavourite = React.lazy(() => import('../../Views/StudentNoFavourite/Index'));
const studentNoPreviousClass = React.lazy(() => import('../../Views/StudentNoPreviousClass/Index'));
const studentFavourite = React.lazy(() => import('../../Views/StudentFavourite/Index'));
const TutorDashboard = React.lazy(() => import('../../Views/TutorDashboard/Dashboard'));
const TutorProfile = React.lazy(() => import('../../Views/TutorProfile/TutorProfile'));
const PersonalSchoolDashboard = React.lazy(() => import('../../Views/PersonalSchool/PersonalDashboard'));
const PersonalSchoolDashboard2 = React.lazy(() => import('../../Views/PersonalSchool2/PersonalDashboard2'));
const TutorSetClass = React.lazy(() => import('../../Views/TutorSetClass/TutorClass'));
export const rootRoute = [
    { component: Home, name: '/' },
    { component: Support, name: '/support' },
    { component: HelpSupport, name: '/help-support' },
    { component: Login, name: '/admin-login' },
    { component: StudentLogin, name: '/login' },
    { component: StudentForgotPassword, name: '/student-forgot-password' },
    { component: StudentPasswordNew, name: '/student-reset-password' },
    { component: Signup, name: '/signup' },
    { component: ShowWelcome, name: '/signup-success' },
    { component: ForgotPassword, name: '/forgot-password' },
    { component: SetNewPassword, name: '/reset-password' },
    { component: verification, name: '/verification' },
    { component: PersonalDashboard, name: '/personal-dashboard' },
    { component: StudentHomePage, name: '/student-homepage' },
    { component: StudentClassesTutors, name: '/student-classes' },
    { component: TutorList, name: '/student-tutors' },
    { component: PreviousClasses, name: '/student-previous-classes' },
    { component: UpcomingClasses, name: '/student-upcoming-classes' },
    { component: StudentIndividualSubjects, name: '/student-individual-subjects' },
    { component: StudentWatchPreviousClass, name: '/student-watch-previous-class' },
    { component: TutorDetail, name: '/tutor-detail' },
    { component: TutorsUpcomingClasses, name: '/tutor-upcoming-classes' },
    { component: StudentTutorPreviousClasses, name: '/student-previous-classes' },
    { component: studentDashboard, name: '/student-dashboard' },
    { component: studentDetail, name: '/student-detail' },
    { component: studentIncompleteDetail, name: '/student-incomplete-detail' },
    { component: editStudentProfile, name: '/edit-student-profile' },
    { component: studentSchoolInfo, name: '/student-school-info' },
    { component: studentNoFavourite, name: '/student-no-favourite' },
    { component: studentNoPreviousClass, name: '/student-no-previous-class' },
    { component: studentFavourite, name: '/student-favourite' },
    { component: TutorDashboard, name: '/tutor-dashboard' },
    {component:TutorProfile, name: '/tutor-profile'},
    {component:PersonalSchoolDashboard, name: '/personal-school-dashboard'},
    {component:PersonalSchoolDashboard2, name: '/personal-school-dashboard-2'},
    {component:TutorSetClass, name: '/tutor-set-class'},
];
