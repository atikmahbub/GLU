import React from "react";
import { createRouteObj } from "../../Helper/routes";
import Dashboard from "../../Views/TutorDashboard/Dashboard";
const TutorProfile = React.lazy(() => import('../../Views/TutorProfile/TutorProfile'));
const PersonalSchoolDashboard = React.lazy(() => import('../../Views/PersonalSchool/PersonalDashboard'));
const PersonalSchoolDashboard2 = React.lazy(() => import('../../Views/PersonalSchool2/PersonalDashboard2'));
const TutorSetClass = React.lazy(() => import('../../Views/TutorSetClass/TutorClass'));
const TutorRecordClass=React.lazy(()=>import('../../Views/TutorRecordClass/TutorRecord'));
const TutorIndivisualHomework=React.lazy(()=>import('../../Views/TutorIndivisualHomework/TutorIndivisualHome'))
const TutorSetHomework=React.lazy(()=>import('../../Views/TutorSetHomework/SetHomework'))
const PersonalSchoolToggle=React.lazy(()=>import('../../Views/PersonalSchoolMain/PersonalSchoolToggle'))
export const tutorRoutes = [
    createRouteObj('/tutor/', Dashboard),
    createRouteObj('/tutor/profile', TutorProfile),
    createRouteObj('/tutor/personal-school-dashboard', PersonalSchoolDashboard),
    createRouteObj('/tutor/personal-school-dashboard-2', PersonalSchoolDashboard2),
    createRouteObj('/tutor/set-class', TutorSetClass),
    createRouteObj('/tutor/record-class', TutorRecordClass),
    createRouteObj('/tutor/indivisual-homework', TutorIndivisualHomework),
    createRouteObj('/tutor/set-homework',TutorSetHomework),
    createRouteObj('/tutor/personal-school',PersonalSchoolToggle)
]