import { lazy } from 'react';
import { createRouteObj } from '../../Helper/routes';
import { linkTo } from '../../Helper/linkTo';
const Reports = lazy(() => import('../../Views/StudentsModule/Reports'));
const StudentsDashboard = lazy(() => import('../../Views/StudentsModule/Dashboard'));
const StudentHomePage = lazy(() => import('../../Views/StudentHomepage/Index'));
const PreviousClasses = lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const TutorList = lazy(() => import('../../Views/TutorList/TutorList'));
const StudentClassesTutors = lazy(() => import('../../Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const StudentWatchPreviousClass = lazy(() => import('../../Views/StudentWatchPreviousClass/Index'));
const TutorDetail = lazy(() => import('../../Views/TutorDetail/index'));
const editStudentProfile = lazy(() => import('../../Views/StudentDashboard/EditStudentProfile/Index'));
const SchoolInfo = lazy(() => import('../../Views/Merits/SchoolInfo'));
const StudentHomework = lazy(() => import('../../Views/StudentHomework/StudentHomework'));

const routes = [
    createRouteObj('/students/home', StudentHomePage),
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/reports', Reports),
    createRouteObj('/students/previous-classes', PreviousClasses),
    createRouteObj('/students/upcoming-classes', UpcomingClasses),
    createRouteObj('/students/tutors', TutorList),
    createRouteObj('/students/classes', StudentClassesTutors),
    createRouteObj('/students/watch-previous-classes', StudentWatchPreviousClass),
    createRouteObj(linkTo.tutorDetails, TutorDetail),
    createRouteObj(linkTo.studentProfile, editStudentProfile),
    createRouteObj('/students/schoolInfo', SchoolInfo),
    createRouteObj('/students/student-homework', StudentHomework),
];

export default routes;
