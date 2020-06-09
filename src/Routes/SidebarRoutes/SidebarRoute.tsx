import React from 'react';
import {
    Dashboard as DashboardIcon,
    AccountBalanceWallet,
    Settings,
    AccountCircle,
    School,
    Book,
} from '@material-ui/icons';

export const NavigationMenu: any[] = [
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
                menuName: 'Staff',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/staff',
            },
            {
                menuName: 'Accountant',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/accountant',
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