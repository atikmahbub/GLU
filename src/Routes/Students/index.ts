import StudentsDashboard from '../../Views/StudentsModule/Dashboard';
import Reports from '../../Views/StudentsModule/Reports';
import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/reports', Reports),
];

export default routes;
