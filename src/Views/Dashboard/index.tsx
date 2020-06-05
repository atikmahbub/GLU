import React from 'react';
import {
    Dashboard as DashboardIcon,
    People,
    Home,
    MenuBook,
    AccountBalanceWallet,
    Business,
    Settings,
} from '@material-ui/icons';
import Sidebar from '../../components/Dashobard/Sidebar';
import Dashboard from './Dashboard';
import Header from './Header';

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
        icon: <People />,
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
                routeName: '/student',
            },
            {
                menuName: 'Admission',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/admission',
            },
            {
                menuName: 'Teachers',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/teachers',
            },
            {
                menuName: 'Teacher Permission',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/teacher-permission',
            },
            {
                menuName: 'Parent',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/parent',
            },
            {
                menuName: 'Accountant',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/accountent',
            },
            {
                menuName: 'Librarrian',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/librarrian',
            },
        ],
        routeName: '',
    },
    {
        menuName: 'Academic',
        icon: <Home />,
        isExpandable: true,
        menuList: [],
        routeName: '',
    },
    {
        menuName: 'Exam',
        icon: <MenuBook />,
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
                icon: <DashboardIcon />,
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
        menuName: 'Accounting',
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
    {
        menuName: 'Back Office',
        icon: <Business />,
        isExpandable: true,
        menuList: [
            {
                menuName: 'Library',
                isExpandable: true,
                menuList: [
                    {
                        menuName: 'Book List Manager',
                        isExpandable: false,
                        isOpen: false,
                        menuList: [],
                        routeName: '/book-list-Manager',
                    },
                    {
                        menuName: 'Book Issue Report',
                        isExpandable: false,
                        isOpen: false,
                        menuList: [],
                        routeName: '/book-issue-report',
                    },
                ],
                routeName: '',
            },
            {
                menuName: 'Session Manager',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '',
            },
            {
                menuName: 'Addon Manager',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/book-list-Manager',
            },
        ],
        routeName: '',
    },
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
                    <div className="dashboard-main-content">
                        <Header title="Dashboard" icon={<DashboardIcon className="icon" />} />
                        <Dashboard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
