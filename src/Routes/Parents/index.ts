import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashBoard/Dashboard'));
const LiveClasses = lazy(() => import('../../Views/LiveClasses/Index'));
const TutorList = lazy(() => import('../../Views/TutorList/TutorList'));
const ParentTutor = lazy(() => import('../../Views/ParentsHomePage/ParentTutor'));
const ParentRecordedClasses = lazy(() => import('../../Views/ParentRecordedClasses/Index'));
const ParentPreviousClasses = lazy(() => import('../../Views/ParentPreviousClasses/Index'));
const ClassesTutorsWithFilter = lazy(() => import('../../Views/ClassesTutorsWithFilter/ClassesTutorsWithFilter'));
const ParentCalendar = lazy(() => import('../../Views/ParentCalendar/index'));

import { createRouteObj } from '../../Helper/routes';

export const routes = [
    createRouteObj('/parent/home', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard),
    createRouteObj('/parent/live-classes', ClassesTutorsWithFilter),
    createRouteObj('/parent/tutors', TutorList),
    createRouteObj('/parent/tutors/tutor', ParentTutor),
    createRouteObj('/parent/recorded-classes', ClassesTutorsWithFilter),
    createRouteObj('/parent/classes', ClassesTutorsWithFilter),
    createRouteObj('/parent/previous-classes', ParentPreviousClasses),
    createRouteObj('/parent/parent-calender', ParentCalendar),
];

export default routes;
