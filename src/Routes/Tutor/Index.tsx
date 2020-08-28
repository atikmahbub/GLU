import React from "react";
import { createRouteObj } from "../../Helper/routes";
import Dashboard from "../../Views/TutorDashboard/Dashboard";
const TutorProfile = React.lazy(() => import('../../Views/TutorProfile/TutorProfile'));
export const tutorRoutes = [
    createRouteObj('/tutor/', Dashboard),
    createRouteObj('/tutor/profile', TutorProfile),

]