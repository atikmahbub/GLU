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
const ClassReview = React.lazy(() => import('../../Views/TutorReviewPage/ClassReview'));
const TutorReview = React.lazy(() => import('../../Views/TutorReviewPage/TutorReview'));
const TutorEdit = React.lazy(() => import('../../Views/TutorEditPage/TutorEdit'));
const TutorUpcomingClasses = React.lazy(() => import('../../Views/TutorUpcomingClass/Index'));
const TutorExtraCurr = React.lazy(() => import('../../Views/TutorExtraCurr/Index'));
const TutorCalender = React.lazy(() => import('../../Views/TutorCalender/index'));
const StudentHomework = React.lazy(() => import('../../Views/StudentHomework/StudentHomework'));
const TutorSchoolInfo = React.lazy(() => import('../../Views/TutorSchoolInfo/SchoolInfo'));
const TutorEduEditForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/EditFormEdu'));
const TutorExpEditForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/EditFormExp'));
const TutorAddExpForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/AddFormExp'));
const TutorAddEduForm = React.lazy(() => import('../../Views/TutorEdExpEditForm/AddFormEdu'));

// const TutorAvailablity= React.lazy(() => import('../../Views/TutorAvailablity/TutorAvailablity'));
const TutorExams = React.lazy(() => import('../../Views/TutorExams/TutorExams'));
const TutorRecommend = React.lazy(() => import('../../Views/TutorRecommend/TutorRecommend'));
const TutorUpcomingClass = React.lazy(() => import('../../Views/TutorUpcommingClass/TutorUpcoming'));
const TutorReviews = React.lazy(() => import('../../Views/TutorReviews/TutorReview'));
const TutorIndivisualExtraCurricular = React.lazy(
    () => import('../../Views/TutorIndivisualExtraCurricular/IndivisualExtraCurricular')
);
const TutorIndividualExtraCurricular2 = React.lazy(
    () => import('../../Views/TutorIndividualExtraCurricular2/TutorIndividualExtraCurricular2')
);
const TutorPrivate = React.lazy(() => import('../../Views/TutorPrivate/TutorPrivate'));
const TutorTotalRecommendations = React.lazy(
    () => import('../../Views/TutorTotalRecommendations/TotalRecommendations')
);
const TutorMyClasses = React.lazy(() => import('../../Views/TutorClasses/TutorMyclass'));
const TutorHomework = React.lazy(() => import('../../Views/TutorHomework/TutorHomework'));

export const tutorRoutes = [
    createRouteObj('/tutor/', PersonalSchoolToggle),
    createRouteObj('/tutor/profile', TutorProfile),
    createRouteObj('/tutor/set-class', TutorSetClass),
    createRouteObj('/tutor/record-class', TutorRecordClass),
    createRouteObj('/tutor/individual-homework', TutorIndivisualHomework),
    createRouteObj('/tutor/set-homework', TutorSetHomework),
    createRouteObj('/tutor/upcoming-classes', UpcomingClasses),
    createRouteObj('/tutor/school-table', SchoolTimetable),
    createRouteObj('/tutor/tutor-availablity', TutorAvailablity),
    createRouteObj('/tutor/class-review', ClassReview),
    createRouteObj('/tutor/tutor-review', TutorReview),
    createRouteObj('/tutor/availability', TutorAvailablity),
    createRouteObj('/tutor/exams', TutorExams),
    createRouteObj('/tutor/recommend', TutorRecommend),
    createRouteObj('/tutor/upcoming-class', TutorUpcomingClass),
    createRouteObj('/tutor/reviews', TutorReviews),
    createRouteObj('/tutor/individual-extra-curricular', TutorIndivisualExtraCurricular),
    createRouteObj('/tutor/individual-extra-curricular-edit', TutorIndividualExtraCurricular2),
    createRouteObj('/tutor/tutor-private', TutorPrivate),
    createRouteObj('/tutor/total-recommendations', TutorTotalRecommendations),
    createRouteObj('/tutor/my-classes', TutorMyClasses),
    createRouteObj('/tutor/homework', TutorHomework),
    createRouteObj('/tutor/tutor-edit', TutorEdit),
    createRouteObj('/tutor/tutor-edit/education-edit-form/:id', TutorEduEditForm),
    createRouteObj('/tutor/tutor-edit/experience-edit-form/:id', TutorExpEditForm),
    createRouteObj('/tutor/tutor-edit/add-experience', TutorAddExpForm),
    createRouteObj('/tutor/tutor-edit/add-education', TutorAddEduForm),
    createRouteObj('/tutor/tutor-upcoming-classes', TutorUpcomingClasses),
    createRouteObj('/tutor/extra-curriculam', TutorExtraCurr),
    createRouteObj('/tutor/tutor-calender', TutorCalender),
    createRouteObj('/tutor/mark-student-homework', StudentHomework),
    createRouteObj('/tutor/school-info', TutorSchoolInfo),
];
