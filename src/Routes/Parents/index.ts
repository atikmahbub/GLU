import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashBoard/Dashboard'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));

import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/parent/homepage', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard),
    createRouteObj('/students/upcoming-classes', UpcomingClasses),
];

export default routes;