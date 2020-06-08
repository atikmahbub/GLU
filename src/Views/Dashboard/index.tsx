import React from 'react';
import {
    Dashboard as DashboardIcon,
    AccountBalanceWallet,
    Settings,
    AccountCircle,
    School,
    Book,
} from '@material-ui/icons';
import Sidebar from '../../components/Dashobard/Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import StudentList from '../StudentList/StudentList';
import ParentList from '../ParentList/ParentList';
import TeacherList from '../TeacherList/TeacherList';

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
const NavigationMenu: any[] = [
    {
        menuName: 'Dashboard',
        icon: <DashboardIcon />,
        isExpandable: false,
        isOpen: false,
        menuList: [],
        routeName: '/dashboard',
    },
    {
        menuName: 'Users',
        icon: <AccountCircle />,
        isExpandable: true,
        menuList: [
            {
                menuName: 'Admin',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/admin',
            },
            {
                menuName: 'Student',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/students',
            },

            {
                menuName: 'Teacher',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/teachers',
            },
            {
                menuName: 'Parent',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/parents',
            },
            {
                menuName: 'Accountant',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/accountent',
            },
        ],
        routeName: '',
    },
    {
        menuName: 'Academic',
        icon: <School />,
        isExpandable: true,
        menuList: [],
        routeName: '',
    },
    {
        menuName: 'Exam',
        icon: <Book />,
        isExpandable: true,
        routeName: '',
        menuList: [
            {
                menuName: 'Marks',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/marks',
            },
            {
                menuName: 'Exams',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/exams',
            },
            {
                menuName: 'Grades',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/grades',
            },
            {
                menuName: 'Promotion',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/promotion',
            },
        ],
    },
    {
        menuName: 'Accounts',
        icon: <AccountBalanceWallet />,
        isExpandable: true,
        routeName: '',
        menuList: [
            {
                menuName: 'Student Fee Manager',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/studen-free-manager',
            },
            {
                menuName: 'Expense Category',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/expense-category',
            },
            {
                menuName: 'Expense Manager',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/expense-manager',
            },
        ],
    },
    // {
    //     menuName: 'Back Office',
    //     icon: <Business />,
    //     isExpandable: true,
    //     menuList: [
    //         {
    //             menuName: 'Library',
    //             isExpandable: true,
    //             menuList: [
    //                 {
    //                     menuName: 'Book List Manager',
    //                     isExpandable: false,
    //                     isOpen: false,
    //                     menuList: [],
    //                     routeName: '/book-list-Manager',
    //                 },
    //                 {
    //                     menuName: 'Book Issue Report',
    //                     isExpandable: false,
    //                     isOpen: false,
    //                     menuList: [],
    //                     routeName: '/book-issue-report',
    //                 },
    //             ],
    //             routeName: '',
    //         },
    //         {
    //             menuName: 'Session Manager',
    //             isExpandable: false,
    //             isOpen: false,
    //             menuList: [],
    //             routeName: '',
    //         },
    //         {
    //             menuName: 'Addon Manager',
    //             isExpandable: false,
    //             isOpen: false,
    //             menuList: [],
    //             routeName: '/book-list-Manager',
    //         },
    //     ],
    //     routeName: '',
    // },
    {
        menuName: 'Settings',
        icon: <Settings />,
        isExpandable: true,
        menuList: [
            {
                menuName: 'System Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: 'system-settings',
            },
            {
                menuName: 'Website Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: 'website-settings',
            },
            {
                menuName: 'School Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: 'school-settings',
            },
            {
                menuName: 'Payment Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: 'payment-settings',
            },
            {
                menuName: 'SMTP Settings',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: 'smtp-settings',
            },
            {
                menuName: 'About',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: 'about',
            },
        ],
        routeName: '',
    },
];
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
                            <Route path="/dashboard/parents" component={ParentList} />
                            <Route path="/dashboard/teachers" component={TeacherList} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
