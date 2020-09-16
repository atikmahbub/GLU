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

export function createMenuList(userType: string): menuListItem[] {
    return [
        createMenuListItem('Home', `/${userType}/home`),
        createMenuListItem('Dashboard', `/${userType}/dashboard`),
        createMenuListItem('Messages', `/${userType}/messages`),
        createMenuListItem('Subjects', `/${userType}/subjects`)
    ]
}
