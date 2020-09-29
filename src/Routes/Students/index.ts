import { lazy } from 'react';
import { createRouteObj } from '../../Helper/routes';
const Wallet = lazy(() => import('../../Views/StudentsModule/Wallet'));
const Tutors = lazy(() => import('../../Views/StudentsModule/Tutors'));
const LiveClasses = lazy(() => import('../../Views/StudentsModule/LiveClasses'));
const RecordedClasses = lazy(() => import('../../Views/StudentsModule/RecordedClasses'));
const Reports = lazy(() => import('../../Views/StudentsModule/Reports'));
const StudentsDashboard = lazy(() => import('../../Views/StudentsModule/Dashboard'));
const StudentHomePage = lazy(() => import('../../Views/StudentHomepage/Index'));
const PreviousClasses = lazy(() => import('../../Views/PreviousClasses/PreviousClasses'));
const UpcomingClasses = lazy(() => import('../../Views/UpcomingClasses/Index'));
const StudentClassesTutors = lazy(() => import('../../Views/StudentAllClassesTutors/StudentAllClassesTutors'));
const StudentWatchPreviousClass = lazy(() => import('../../Views/StudentWatchPreviousClass/Index'));
const SchoolInfo = lazy(() => import('../../Views/Merits/SchoolInfo'));
const MyPreviousClasses = lazy(() => import('../../Views/StudentsModule/MyPreviousClasses'));
const Homework = lazy(() => import('../../Views/StudentsModule/Homework'));
const IndividualHomework = lazy(() => import('../../Views/StudentsModule/IndividualHomework'));
const Favourites = lazy(() => import('../../Views/StudentFavourite/Index'));
const HelpSupport = lazy(() => import('../../Views/HelpSupport/HelpSupport'));
const TutorProfile = lazy(() => import('../../Views/StudentsModule/TutorProfile'));
const WalletTopOn = lazy(() => import('../../Views/StudentsModule/WalletTopOn'));
const IndividualSubject = lazy(() => import('../../Views/StudentsModule/IndividualSubject'));
const Messages = lazy(() => import('../../Views/StudentsModule/Messages'));
const Calendar = lazy(() => import('../../Views/StudentsModule/Calendar'));
const EditProfile = lazy(() => import('../../Views/StudentsModule/EditProfile'));
const ViewProfile = lazy(() => import('../../Views/StudentsModule/ViewProfile'));

const routes = [
    createRouteObj('/students/home', StudentHomePage),
    createRouteObj('/students/dashboard', StudentsDashboard),
    createRouteObj('/students/reports', Reports),
    createRouteObj('/students/previous-classes', PreviousClasses),
    createRouteObj('/students/upcoming-classes', UpcomingClasses),
    createRouteObj('/students/classes', StudentClassesTutors),
    createRouteObj('/students/live-classes', LiveClasses),
    createRouteObj('/students/recorded-classes', RecordedClasses),
    createRouteObj('/students/tutors', Tutors),
    createRouteObj('/students/favourites', Favourites),
    createRouteObj('/students/help', HelpSupport),
    createRouteObj('/students/watch-previous-classes', StudentWatchPreviousClass),
    createRouteObj('/students/schoolInfo', SchoolInfo),
    createRouteObj('/students/my-previous-classes', MyPreviousClasses),
    createRouteObj('/students/wallet', Wallet),
    createRouteObj('/students/homework', Homework),
    createRouteObj('/students/homework/:id', IndividualHomework),
    createRouteObj('/students/tutor/:id', TutorProfile),
    createRouteObj('/students/wallet/top-on', WalletTopOn),
    createRouteObj('/students/subject/:id', IndividualSubject),
    createRouteObj('/students/messages', Messages),
    createRouteObj('/students/calendar', Calendar),
    createRouteObj('/students/profile/edit', EditProfile),
    createRouteObj('/students/profile', ViewProfile),
];

export default routes;
