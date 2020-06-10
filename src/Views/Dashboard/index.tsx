import React from 'react';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import Sidebar from '../../components/Dashobard/Sidebar';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import { NavigationMenu } from '../../Routes/SidebarRoutes/SidebarRoute';
import { dashboardRoutes } from '../../Routes/Dashboard/routes';

const index: React.FunctionComponent = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                <Sidebar NavigationMenu={NavigationMenu} />
                <div className="dashboard-content">
                    <Header title="Dashboard" icon={<DashboardIcon className="icon" />} />
                    <div className="dashboard-main-content">
                        <Switch>
                            {dashboardRoutes.map((route) => (
                                <Route path={route.pathname} component={route.component} />
                            ))}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
