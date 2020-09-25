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
    ADMIN_STUDENT_LIST,
    ADMIN_PARENTS_LIST,
    ADMIN_ALL_USERS_COUNT,
} from '../ActionTypes/superAdminTypes';

export const getallUsersCountAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminEndpoints.getAllUsersCount)
            .then((res) => {
                console.log(res);
                dispatch(allUsersCount(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

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

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminEndpoints.getAllStudents)
            .then((res) => {
                console.log(res);
                dispatch(adminStudentList(res.data.data));
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


export const getallParentsAPIcall = () => {
    return (dispatch: any) => {
        API.get(superAdminEndpoints.getAllParents)
            .then((res) => {
                console.log(res);
                dispatch(adminParentsList(res.data.data));
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


export const adminStudentList = (data: any) => {
    return {
        type: ADMIN_STUDENT_LIST,
        payload: data,
    };
};


export const adminParentsList = (data: any) => {
    return {
        type: ADMIN_PARENTS_LIST,
        payload: data,
    };
};



export const allUsersCount = (data: any) => {
    return {
        type: ADMIN_ALL_USERS_COUNT,
        payload: data,
    };
};