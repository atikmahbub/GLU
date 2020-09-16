import { API, setAuthrizationToken } from '../../Utility/API';
import { loginAuth } from '../Interfaces/auth';
import { endponts } from '../../Utility/endpoints';
import { USER_LOGIN } from '../ActionTypes/authTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { handleError } from './errorHandler';
import { appAction } from '../../Interfaces';
import { Dispatch } from 'react';

export const userLoginAPIcall = (data: loginAuth, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.login, data)
            .then((res: any) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                toast.success('Successfully LoggedIn!', { autoClose: 2000 });
                dispatch(userLogin(res.data.data));
                dispatch(spinner(false));
                setAuthrizationToken();
                if (res.data.data.role === 'School') {
                    history.push('/dashboard/');
                } else if (res.data.data.role === 'Teacher') {
                    history.push('/tutor/');
                } else if (res.data.data.role === 'Guardian') {
                    history.push('/parent/home');
                } else if (res.data.data.role === 'Student') {
                    history.push('/students/home');
                }
            })
            .catch((err: any) => {
                handleError(dispatch, err);
            });
    };
};

export const userLogin = (data: any): appAction => {
    return {
        type: USER_LOGIN,
        payload: data,
    };
};

export const authRegisterAPIcall = (data: { username: string; password: string; token: string }, history: any) => {
    return (dispatch: any) => {
        API.post(endponts.authRegister, data)
            .then((res) => {
                console.log(res.data.data);
                toast.success('You are successfully registered.');
                history.push('/');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const emailSubscriber = (data: { email: string }, setEmail: Function) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.emailSubscribe, data)
            .then((res) => {
                setEmail();
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const emailVerificationAPIcall = (token: string, redirectToHome: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.get(`${endponts.emailSubscribe}/${token}`)
            .then((res) => {
                dispatch(spinner(false));
                console.log(res);
                redirectToHome();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
