import { menuListItem, menuTypes } from '../Interfaces/menuTypes';

export const menus:menuTypes[] = [
    { link: '', name: 'Home' },
    { link: '', name: 'Dashboard' },
    { link: '', name: 'Subjects' },
    { link: '', name: 'Messages' },
];

function createMenuListItem(name: string, link: string): menuListItem {
    return { name, link }
}

export function createLeftDrawerMenuList(userType: string): menuListItem[] {
    return [
        createMenuListItem('Live Classes',  `/${userType}/live-classes`),
        createMenuListItem('Recorded Classes', `/${userType}/recorded-classes`),
        createMenuListItem('Tutors', `/${userType}/tutors`),
        createMenuListItem('Shop', `/${userType}/shop`)
    ]
}

export function createLeftDrawerMenuListSecondary(userType: string): menuListItem[] {
    return [
        createMenuListItem('Favourites', `/${userType}/favourites`),
        createMenuListItem('Help', `/${userType}/help`),
    ]
}

export function createMenuList(userType: string): menuListItem[] {
    return [
        createMenuListItem('Home', `/${userType}/home`),
        createMenuListItem('Dashboard', `/${userType}/dashboard`),
        createMenuListItem('Messages', `/${userType}/messages`),
        createMenuListItem('Subjects', `/${userType}/subjects`)
    ]
}
