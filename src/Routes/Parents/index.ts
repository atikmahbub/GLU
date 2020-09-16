import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashBoard/Dashboard'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const TutorList = lazy(() => import('../../Views/TutorList/TutorList'));
const ParentTutor = lazy(() => import('../../Views/ParentsHomePage/ParentTutor'));
const ParentRecordedClasses = lazy(() => import('../../Views/ParentRecordedClasses/Index'));

import { createRouteObj } from '../../Helper/routes';

export const routes = [
    createRouteObj('/parent/home', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard),
    createRouteObj('/parent/upcoming-classes', UpcomingClasses),
    createRouteObj('/parent/tutors', TutorList),
    createRouteObj('/parent/tutors/tutor', ParentTutor),
    createRouteObj('/parent/recorded-classes', ParentRecordedClasses)

];

export default routes;