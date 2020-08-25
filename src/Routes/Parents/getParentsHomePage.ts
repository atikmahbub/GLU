import {auth} from "../authTyples";
import Dashboard from '../../Views/Dashboard/Dashboard';
import ParentsHomePage from '../../Views/ParentsHomePage/ParentsHomePage';
export const getParentsHomePage= () => {
    const getItme = localStorage.getItem('auth');
    const user: auth = getItme && JSON.parse(getItme);

    switch (user.role) {
        case 'parents': {
            return ParentsHomePage;
        }
        case 'school': {
            return Dashboard;
        }
        default: {
            return Dashboard;
        }
    }
}