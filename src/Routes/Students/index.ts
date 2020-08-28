import React from "react";
const StudentsDashboard = React.lazy(() => import('../../Views/StudentsModule/Dashboard'));
import { createRouteObj } from '../../Helper/routes';
import { linkTo } from '../../Helper/LinkTo';
const StudentHomePage = React.lazy(() => import('../../Views/StudentHomepage/Index'));
const PreviousClasses = React.lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = React.lazy(() => import('../../Views/UpcomingClasses/Index'));
const TutorList = React.lazy(() => import('../../Views/TutorList/TutorList'));
const StudentClassesTutors = React.lazy(() => import('../../Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const StudentWatchPreviousClass = React.lazy(() => import('../../Views/StudentWatchPreviousClass/Index'));
const TutorDetail = React.lazy(() => import('../../Views/TutorDetail/index'));

const routes = [
    createRouteObj('/students/home', StudentHomePage),
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/previous-classes', PreviousClasses),
    createRouteObj('/students/upcoming-classes', UpcomingClasses),
    createRouteObj('/students/tutors', TutorList),
    createRouteObj('/students/classes', StudentClassesTutors),
    createRouteObj(linkTo.watchPreviousClass, StudentWatchPreviousClass),
    createRouteObj(linkTo.tutorDetails, TutorDetail),

];

export default routes;
