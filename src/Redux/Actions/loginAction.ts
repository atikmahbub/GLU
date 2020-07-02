import { API, setAuthrizationToken } from '../../Utility/API';
import { loginAuth, loginData } from '../Interfaces/auth';
import { endponts } from '../../Utility/endpoints';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { USER_LOGIN } from '../ActionTypes/authTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { handleError } from './errorHandler';
import { appAction } from '../../Interfaces';

export const userLoginAPIcall = (data: loginAuth, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.login, data)
            .then((res: any) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                toast.success('Successfully LoggedIn!', { autoClose: 2000 });
                dispatch(userLogin(res.data.data));
                dispatch(spinner(false));
                history.push(routeEndpoints.dashboard);
                setAuthrizationToken();
            })
            .catch((err: any) => {
                handleError(dispatch,err);
            });
    };
};

export const userLogin = (data: loginData): appAction => {
    return {
        type: USER_LOGIN,
        payload: data,
    };
};


export const authRegisterAPIcall = (data:{username:string, password: string, token: string}, history:any) => {
    return (dispatch: any)=>{
        API.post(endponts.authRegister, data).then(res=>{
            console.log(res.data.data)
            toast.success("You are successfully registered.");
            history.push('/');
        }).catch((err)=>{
            handleError(dispatch,err);
        })
    }
}