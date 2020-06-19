import React from 'react';
import { Dashboard as DashboardIcon, AccountBalanceWallet, AccountCircle, School } from '@material-ui/icons';

export const TeacherMenu: any[] = [
    {
        menuName: 'Dashboard',
        icon: <DashboardIcon />,
        isExpandable: false,
        isOpen: false,
        menuList: [],
        routeName: '/dashboard',
    },
    {
        menuName: 'Profile',
        icon: <AccountCircle />,
        isOpen: false,
        isExpandable: false,
        menuList: [],
        routeName: '/',
    },
    {
        menuName: 'classroom',
        icon: <School />,
        isExpandable: true,
        menuList: [
            {
                menuName: 'Classes',
                isExpandable: false,
                menuList: [],
                routeName: '/classes',
            },
            {
                menuName: 'Departments',
                isExpandable: false,
                menuList: [],
                routeName: '/departments',
            },
            {
                menuName: 'Students',
                isExpandable: false,
                menuList: [],
                routeName: '/students',
            },
            {
                menuName: 'Subjects',
                isExpandable: false,
                menuList: [],
                routeName: '/subjects',
            },
        ],
        routeName: '',
    },
    {
        menuName: 'Academics',
        icon: <AccountBalanceWallet />,
        isExpandable: true,
        routeName: '',
        menuList: [
            {
                menuName: 'Student Attendacne',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/studen-attendance',
            },
            {
                menuName: 'Exam Reports',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/exam-reports',
            },
            {
                menuName: 'Homework Details',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/homework-details',
            },
            {
                menuName: 'Student Sanction',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/student-sanction',
            },
            {
                menuName: 'Reports',
                isExpandable: false,
                isOpen: false,
                menuList: [],
                routeName: '/reports',
            },
        ],
    },
];
