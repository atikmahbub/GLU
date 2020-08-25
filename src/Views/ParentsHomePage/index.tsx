import React from 'react';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
// import Sidebar from '../../components/Dashobard/Sidebar';
// import Header from './Header';
import { Switch, Route } from 'react-router-dom';
// import { getNavigationMenu } from '../../Routes/SidebarRoutes';
import { parentsRoutes } from '../../Routes/Parents/routes';

import {v4 as uuidv4} from "uuid";
const index: React.FunctionComponent = () => {
    // useEffect(()=>{
    //     const element = document.getElementsByTagName('html');
    //     console.log(element);
    //     element[0].style.fontSize="16px";
    // },[])
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-main-content">
                <h1>Parents Home Page</h1>
                {/* <Switch>
                     {parentsDashboardRoutes.map((route) => (
                        <Route exact key={uuidv4()} path={route.pathname} component={route.component} />
                    ))}
                </Switch> */}
            </div>
        </div>
    );
};

export default index;
