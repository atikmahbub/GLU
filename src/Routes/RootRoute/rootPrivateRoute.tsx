import React from "react";
const Dashboard = React.lazy(() => import('../../Views/Dashboard/index'));

export const rootPrivateRoute = [
    {component:Dashboard, name:'/dashboard/'},
    {component:Dashboard, name:'/student/'},
    {component:Dashboard, name:'/parent/'},
    {component:Dashboard, name:'/teacher/'},
]