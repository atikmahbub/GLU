import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashBoard/Dashboard'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const TutorList = lazy(() => import('../../Views/TutorList/TutorList'));
const ParentTutor = lazy(() => import('../../Views/ParentsHomePage/ParentTutor'));
import { createRouteObj } from '../../Helper/routes';

export const routes = [
    createRouteObj('/parent/homepage', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard),
    createRouteObj('/parent/upcoming-classes', UpcomingClasses),
    createRouteObj('/parent/tutors', TutorList),
    createRouteObj('/parent/tutors/tutor', ParentTutor),

];

export default routes;