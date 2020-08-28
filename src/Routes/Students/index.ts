import StudentsDashboard from '../../Views/StudentsModule/Dashboard';
import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/students/', StudentsDashboard)
];

export default routes;
