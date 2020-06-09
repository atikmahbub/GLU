import React from 'react';
import {
    Dashboard as DashboardIcon,
} from '@material-ui/icons';
import Sidebar from '../../components/Dashobard/Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import StudentList from '../StudentList/StudentList';
import ParentList from '../ParentList/ParentList';
import TeacherList from '../TeacherList/TeacherList';
import AddNewStudent from '../AddNewStudent/AddNewStudent';
import { NavigationMenu } from '../../Routes/SidebarRoutes/SidebarRoute';
import StaffList from '../StaffList/StaffList';
import AccountantList from '../AccountantList/AccountantList';
import AddNewTeacher from '../AddNewTeacher/AddNewTeacher';
import AddNewStaff from '../AddNewStaff/AddNewStaff';
import AddNewParent from '../AddNewParent/AddNewParent';
import AddNewAccountant from '../AddNewAccountant/AddNewAccountant';

export interface sidebarItems {
    menuName: string;
    icon: HTMLElement;
    isExpandable: boolean;
    menuList: [
        {
            menuName: string;
            icon: HTMLElement;
            isExpandable: boolean;
            routeName: string;
        }
    ];
    routeName: string;
}

const index: React.FunctionComponent = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-container">
                <Sidebar NavigationMenu={NavigationMenu} />
                <div className="dashboard-content">
                    <Header title="Dashboard" icon={<DashboardIcon className="icon" />} />
                    <div className="dashboard-main-content">
                        <Switch>
                            <Route path="/dashboard/students" component={StudentList} />
                            <Route path="/dashboard/student/add-new-student" component={AddNewStudent} />
                            <Route path="/dashboard/student/add-new-teacher" component={AddNewTeacher} />
                            <Route path="/dashboard/student/add-new-staff" component={AddNewStaff} />
                            <Route path="/dashboard/student/add-new-parent" component={AddNewParent} />
                            <Route path="/dashboard/accountant/add-new-accountant" component={AddNewAccountant} />
                            <Route path="/dashboard/parents" component={ParentList} />
                            <Route path="/dashboard/teachers" component={TeacherList} />
                            <Route path="/dashboard/Staff" component={StaffList} />
                            <Route path="/dashboard/accountant" component={AccountantList} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
