import {auth} from "../authTyples";
import Dashboard from '../../Views/Dashboard/Dashboard';
import TeacherDashboard from '../../Views/TeacherDashboard/TeacherDashboard';
export const getDashboard = () => {
    const getItme = localStorage.getItem('auth');
    const user: auth = getItme && JSON.parse(getItme);

    switch (user.role) {
        case 'teacher': {
            return TeacherDashboard;
        }
        case 'school': {
            return Dashboard;
        }
        default: {
            return Dashboard;
        }
    }
}