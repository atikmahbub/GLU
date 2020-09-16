import { Dispatch } from 'react';
import { API, setAuthrizationToken } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { userLogin } from './loginAction';

export const registerAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.register, data)
            .then((res) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                dispatch(userLogin(res.data.data));
                setAuthrizationToken();
                goToNextPage();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const studentEduAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.studentEdu, data)
            .then((res) => {
                if (goToNextPage) {
                    goToNextPage();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const registerPhoneNumberAPIcall = (data: any) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.registerPhone, data)
            .then(() => {})
            .catch((err) => {
                console.log(err);
            });
    };
};
