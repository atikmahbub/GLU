import { API } from '../../Utility/API';
import { handleError } from './errorHandler';
import { superAdminEndpoints } from '../../Utility/endpoints';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';

import {
    SCHOOL_LIST,
    VIDEO_LIST,
    ADMIN_TEACHER_LIST,
} from '../ActionTypes/superAdminTypes';

export const getallSchoolAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminEndpoints.getAllSchools)
            .then((res) => {
                console.log(res);
                dispatch(schoolList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getallVideoAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminEndpoints.getAllVideos)
            .then((res) => {
                console.log(res);
                dispatch(videoList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};


export const getallTeacherAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminEndpoints.getAllTeachers)
            .then((res) => {
                console.log(res);
                dispatch(adminTeacherList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const addNewSchoolAPIcall = (data: any, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(superAdminEndpoints.addSchool, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Invite Sent successfully.");
                dispatch(registerDataRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const activateDeactivateUser = (id: number) => {
    return (dispatch: any) => {
        console.log("========= id =========", id)
        API.put(superAdminEndpoints.activateDeactivateSchool + "/" + id )
        .then((res) => {
            dispatch(spinner(false));
            toast.success("Video Status Updated");
        })
        .catch((err) => {
            handleError(dispatch, err);
        });       
    }
}


export const activateDeactivateVideo = (id: number) => {
    return (dispatch: any) => {
        API.put(superAdminEndpoints.activateDeactivateVideo + "/" + id)
        .then((res) => {
            dispatch(spinner(false));
            toast.success("School Status Updated");
        })
        .catch((err) => {
            handleError(dispatch, err);
        });       
    }
}


export const activateDeactivateTeacher = (id: number) => {
    return (dispatch: any) => {
        API.put(superAdminEndpoints.activateDeactivateTeacher + "/" + id)
        .then((res) => {
            dispatch(spinner(false));
            toast.success("Teacher Status Updated");
        })
        .catch((err) => {
            handleError(dispatch, err);
        });       
    }
}

export const schoolList = (data: any) => {
    return {
        type: SCHOOL_LIST,
        payload: data,
    };
};


export const videoList = (data: any) => {
    return {
        type: VIDEO_LIST,
        payload: data,
    };
};

export const adminTeacherList = (data: any) => {
    return {
        type: ADMIN_TEACHER_LIST,
        payload: data,
    };
};