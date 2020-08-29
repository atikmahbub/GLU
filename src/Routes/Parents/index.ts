import { lazy } from 'react';

const ParentsHomePage = lazy(() => import('../../Views/ParentsHomePage/ParentsHome'));
const ParentDashboard = lazy(() => import('../../Views/ParentDashboard/ParentDashboard'));

import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/parent/homepage', ParentsHomePage),
    createRouteObj('/parent/dashboard', ParentDashboard)
];

export default routes;