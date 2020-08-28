import React from "react";
const StudentsDashboard = React.lazy(() => import('../../Views/StudentsModule/Dashboard'));
import { createRouteObj } from '../../Helper/routes';
const StudentHomePage = React.lazy(() => import('../../Views/StudentHomepage/Index'));
const PreviousClasses = React.lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = React.lazy(() => import('../../Views/UpcomingClasses/Index'));
const TutorList = React.lazy(() => import('../../Views/TutorList/TutorList'));

const routes = [
    createRouteObj('/students/home', StudentHomePage),
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/previous-class', PreviousClasses),
    createRouteObj('/students/upcoming-class', UpcomingClasses),
    createRouteObj('/students/tutors', TutorList),


];

export default routes;
