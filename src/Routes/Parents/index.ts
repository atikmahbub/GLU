import ParentsHomePage from '../../Views/ParentsHomePage/ParentsHome';
import { createRouteObj } from '../../Helper/routes';

const routes = [
    createRouteObj('/parent-homepage', ParentsHomePage),
    createRouteObj('/parent/', ParentsHomePage)
];

export default routes;