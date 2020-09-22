import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { API, setAuthrizationToken } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { userLogin } from './loginAction';

export const registerAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.register, data)
            .then((res) => {
                localStorage.setItem('auth', JSON.stringify(res.data.data));
                dispatch(userLogin(res.data.data));
                setAuthrizationToken();
                goToNextPage();
                toast.success('Your information saved successfully.');
            })
            .catch((err) => {
                handleError(dispatch, err);
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
                toast.success('Your education saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const registerPhoneNumberAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.registerPhone, data)
            .then(() => {
                goToNextPage();
                toast.success('Your mobile number saved successfully. please enter OTP.');
            })
            .catch((err) => {
                handleError(dispatch, err);
                console.log(err);
            });
    };
};

export const verifyOTPAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.verifyOtp, data)
            .then(() => {
                goToNextPage();
                toast.success('Your mobile number verified successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const teacherExperienceAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.techerExp, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your experience saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const teacherAddSkillAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.teahcerSkill, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your skills saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const teacherAddBioAPIcall = (data: any, id: number, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.put(`${endponts.teacherBio}${id}`, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your bio saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
export const teacherDocUploadAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.put(endponts.teacherFileUpload, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your document saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const parentChildAddAPIcall = (data: any, goToNextPage?: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.parentChildAdd, data)
            .then((res) => {
                console.log(res);
                if (goToNextPage) {
                    goToNextPage();
                }
                toast.success('Your children information saved successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
