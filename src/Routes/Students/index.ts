import React from "react";
import { createRouteObj } from '../../Helper/routes';
const StudentsDashboard = React.lazy(() => import('../../Views/StudentsModule/Dashboard'));
const StudentHomePage = React.lazy(() => import('../../Views/StudentHomepage/Index'));
const PersonalDashboard = React.lazy(() => import('../../Views/PersonalSchool/PersonalDashboard'));
const routes = [
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/home', StudentHomePage),
    createRouteObj('/students/personal', PersonalDashboard),

];

export default routes;
