import StudentsDashboard from '../../Views/StudentsModule/Dashboard';
import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/students/dashboard/', StudentsDashboard)
];

export default routes;
