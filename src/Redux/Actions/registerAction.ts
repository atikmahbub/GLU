import { Dispatch } from 'react';
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

export const registerPhoneNumberAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.registerPhone, data)
            .then(() => {
                goToNextPage();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const verifyOTPAPIcall = (data: any, goToNextPage: () => void) => {
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.verifyOtp, data)
            .then(() => {
                goToNextPage();
            })
            .catch((err) => {
                console.log(err);
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
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
