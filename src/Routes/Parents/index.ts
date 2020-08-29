import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentsDashboard = lazy(() => import('../../Views/ParentDashboard/Dashboard'));

import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/parent/homepage', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentsDashboard)
];

export default routes;