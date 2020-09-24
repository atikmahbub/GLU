import { lazy } from 'react';
import { createRouteObj } from '../../Helper/routes';
import { linkTo } from '../../Helper/linkTo';
const Wallet = lazy(() => import('../../Views/StudentsModule/Wallet'));
const Tutors = lazy(() => import('../../Views/StudentsModule/Tutors'));
const LiveClasses = lazy(() => import('../../Views/StudentsModule/LiveClasses'));
const RecordedClasses = lazy(() => import('../../Views/StudentsModule/RecordedClasses'));
const Reports = lazy(() => import('../../Views/StudentsModule/Reports'));
const StudentsDashboard = lazy(() => import('../../Views/StudentsModule/Dashboard'));
const StudentHomePage = lazy(() => import('../../Views/StudentHomepage/Index'));
const PreviousClasses = lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const StudentClassesTutors = lazy(() => import('../../Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const StudentWatchPreviousClass = lazy(() => import('../../Views/StudentWatchPreviousClass/Index'));
const TutorDetail = lazy(() => import('../../Views/TutorDetail/index'));
const editStudentProfile = lazy(() => import('../../Views/StudentDashboard/EditStudentProfile/Index'));
const SchoolInfo = lazy(() => import('../../Views/Merits/SchoolInfo'));
const MyPreviousClasses = lazy(() => import('../../Views/StudentsModule/MyPreviousClasses'));
const Favourites = lazy(() => import('../../Views/StudentFavourite/Index'));
const HelpSupport = lazy(() => import('../../Views/HelpSupport/HelpSupport'));
const TutorProfile = lazy(() => import('../../Views/StudentsModule/TutorProfile'));

const routes = [
    createRouteObj('/students/home', StudentHomePage),
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/reports', Reports),
    createRouteObj('/students/previous-classes', PreviousClasses),
    createRouteObj('/students/upcoming-classes', UpcomingClasses),
    createRouteObj('/students/classes', StudentClassesTutors),
    createRouteObj('/students/live-classes', LiveClasses),
    createRouteObj('/students/recorded-classes', RecordedClasses),
    createRouteObj('/students/tutors', Tutors),
    createRouteObj('/students/favourites', Favourites),
    createRouteObj('/students/help', HelpSupport),
    createRouteObj('/students/watch-previous-classes', StudentWatchPreviousClass),
    createRouteObj(linkTo.tutorDetails, TutorDetail),
    createRouteObj(linkTo.studentProfile, editStudentProfile),
    createRouteObj('/students/schoolInfo', SchoolInfo),
    createRouteObj('/students/my-previous-classes', MyPreviousClasses),
    createRouteObj('/students/wallet', Wallet),
    createRouteObj('/students/tutors/tutor', TutorProfile),
];

export default routes;
