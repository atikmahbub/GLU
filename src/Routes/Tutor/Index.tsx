import React from 'react';
import { createRouteObj } from '../../Helper/routes';
// import Dashboard from "../../Views/TutorDashboard/Dashboard";
const TutorProfile = React.lazy(() => import('../../Views/TutorProfile/TutorProfile'));
const TutorSetClass = React.lazy(() => import('../../Views/TutorSetClass/TutorClass'));
const TutorRecordClass = React.lazy(() => import('../../Views/TutorRecordClass/TutorRecord'));
const TutorIndivisualHomework = React.lazy(() => import('../../Views/TutorIndivisualHomework/TutorIndivisualHome'));
const TutorSetHomework = React.lazy(() => import('../../Views/TutorSetHomework/SetHomework'));
const PersonalSchoolToggle = React.lazy(() => import('../../Views/PersonalSchoolMain/PersonalSchoolToggle'));
const UpcomingClasses = React.lazy(() => import('../../Views/UpcomingClasses/Index'));
const SchoolTimetable = React.lazy(() => import('../../Views/SchoolTimeTable/SchoolTimeTable'));
const TutorAvailablity = React.lazy(() => import('../../Views/TutorAvailablity/TutorAvailablity'));

// Added by Vivek
const TutorReview = React.lazy(() => import('../../Views/TutorReviewPage/TutorReview'));

export const tutorRoutes = [
    createRouteObj('/tutor/', PersonalSchoolToggle),
    createRouteObj('/tutor/profile', TutorProfile),
    createRouteObj('/tutor/set-class', TutorSetClass),
    createRouteObj('/tutor/record-class', TutorRecordClass),
    createRouteObj('/tutor/indivisual-homework', TutorIndivisualHomework),
    createRouteObj('/tutor/set-homework', TutorSetHomework),
    createRouteObj('/tutor/upcoming-classes', UpcomingClasses),
    createRouteObj('/tutor/school-table', SchoolTimetable),
    createRouteObj('/tutor/tutor-availablity', TutorAvailablity),
    createRouteObj('/tutor/tutor-review', TutorReview),
];
