import { lazy } from 'react';
const Dashboard = lazy(() => import('../../Views/Dashboard/index'));
const StudentsModule = lazy(() => import('../../Views/StudentsModule/index'));

export const rootPrivateRoute = [
    { component: Dashboard, name:'/dashboard/' },
    { component: StudentsModule, name: '/students/' }
]
