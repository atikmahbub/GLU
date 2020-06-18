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
        menuName: 'My Profile',
        icon: <AccountCircle />,
        isOpen: false,
        isExpandable: true,
        menuList: [
            {
                menuName: 'Personal Details',
                isExpandable: true,
                isOpen: false,
                menuList: [
                    {
                        menuName: 'Designation',
                        isExpandable: false,
                        isOpen: false,
                        menuList: [],
                        routeName: '/personal-details/designation',
                    },

                    {
                        menuName: 'Alloted Classes',
                        isExpandable: false,
                        isOpen: false,
                        menuList: [],
                        routeName: '/personal-details/alloted-classes',
                    },
                    {
                        menuName: 'Joining Date/Other Date',
                        isExpandable: false,
                        isOpen: false,
                        menuList: [],
                        routeName: '/personal-details/joining-date/other-date',
                    },
                ],
                routeName: '',
            },
        ],
        routeName: '/',
    },
    {
        menuName: 'My classroom',
        icon: <School />,
        isExpandable: true,
        menuList: [
            {
                menuName: 'Classes Details',
                isExpandable: false,
                menuList: [],
                routeName: '/classes-details',
            },
            {
                menuName: 'Department Details',
                isExpandable: false,
                menuList: [],
                routeName: '/department-details',
            },
            {
                menuName: 'Student Detail',
                isExpandable: false,
                menuList: [],
                routeName: '/student-details',
            },
            {
                menuName: 'Subject Details',
                isExpandable: false,
                menuList: [],
                routeName: '/subject-details',
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
