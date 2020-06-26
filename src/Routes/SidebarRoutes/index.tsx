import { SuperAdminMenu } from './SuperAdminMenu';
import { TeacherMenu } from './TeacherMenu';
import { auth } from '../authTyples';


export const getNavigationMenu = (): any => {
    const getItme = localStorage.getItem('auth');
    const user: auth = getItme && JSON.parse(getItme);

    switch (user.role) {
        case 'teacher': {
            return TeacherMenu;
        }
        case 'school': {
            return SuperAdminMenu;
        }
        default: {
            return SuperAdminMenu;
        }
    }
};
