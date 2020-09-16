import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashBoard/ParentDashboard'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const TutorList = lazy(() => import('../../Views/TutorList/TutorList'));
import { createRouteObj } from '../../Helper/routes';

export const routes = [
    createRouteObj('/parent/home', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard),
    createRouteObj('/parent/upcoming-classes', UpcomingClasses),
    createRouteObj('/parent/tutors', TutorList),

];

export default routes;