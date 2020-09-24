import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { API, setAuthrizationToken } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { userLogin } from './loginAction';
import { VERIFIY_USER } from '../ActionTypes/authTypes';
import { spinner } from './uiAction';

export const registerAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.register, data)
            .then((res) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                dispatch(userLogin(res.data.data));
                setAuthrizationToken();
                goToNextPage();
                toast.success('Your information saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const updateRegisterAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(endponts.updateProfile, data)
            .then((res) => {
                goToNextPage();
                console.log(res);
                toast.success('Your information updated successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentEduAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.studentEdu, data)
            .then((res) => {
                if (goToNextPage) {
                    goToNextPage();
                }
                dispatch(spinner(false));
                toast.success('Your education saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const registerPhoneNumberAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.registerPhone, data)
            .then(() => {
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your mobile number saved successfully. please enter OTP.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
                console.log(err);
            });
    };
};

export const verifyOTPAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.verifyOtp, data)
            .then(() => {
                goToNextPage();
                toast.success('Your mobile number verified successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const teacherExperienceAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.techerExp, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your experience saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const teacherAddSkillAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.teahcerSkill, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your skills saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const teacherAddBioAPIcall = (data: any, id: number, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(`${endponts.teacherBio}${id}`, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your bio saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
export const teacherDocUploadAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(endponts.teacherFileUpload, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your document saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const parentChildAddAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(endponts.parentChildAdd, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your children information saved successfully.');
                dispatch(spinner(false));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const verfiyRegisterUserAPIcall = (token: string) => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endponts.registerVerfiyUser}${token}`)
            .then((res: any) => {
                console.log(res);
                const data = {
                    access_token: `Bearer ${token}`,
                };
                localStorage.setItem('auth', JSON.stringify(data));
                dispatch(userLogin(data));
                setAuthrizationToken();
                dispatch(verifyRegisterUserRes(res.data.data));
            })
            .catch((err: any) => {
                console.log(err);
            });
    };
};

export const verifyRegisterUserRes = (data: any) => {
    return {
        type: VERIFIY_USER,
        payload: data,
    };
};
