import { API } from '../../Utility/API';
import { loginAuth, loginData } from '../Interfaces/auth';
import { endponts } from '../../Utility/endpoints';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { USER_LOGIN } from '../ActionTypes/authTypes';
import { spinner } from './uiAction';
import { getSchoolAPIcall } from './schoolAction';
import { toast } from 'react-toastify';

export const userLoginAPIcall = (data: loginAuth, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.login, data)
            .then((res: any) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                toast.success('Successfully LoggedIn!', { autoClose: 2000 });
                dispatch(userLogin(res.data.data));
                dispatch(spinner(false));
                dispatch(getSchoolAPIcall());
                history.push(routeEndpoints.dashboard);
            })
            .catch((error: any) => {
                dispatch(spinner(false));
                if (error.response) {
                    toast.warn(error.response.data.message);
                } else {
                    toast.error('Something Went Wrong!');
                }
            });
    };
};

export const userLogin = (data: loginData) => {
    return {
        type: USER_LOGIN,
        payload: data,
    };
};
