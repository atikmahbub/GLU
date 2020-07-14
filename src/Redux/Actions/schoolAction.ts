import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { SCHOOL_INFO, DEPARTMENT_LIST, SESSION_LIST } from '../ActionTypes/schoolTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { handleError } from './errorHandler';
import { dispatch } from '../Store/Store';
import { Dispatch } from 'react';

export const getSchoolAPIcall = () => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.get(endponts.school)
            .then((res) => {
                console.log(res);
                dispatch(schoolInfo(res.data.data));
                dispatch(spinner(false));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const updateSchoolAPIcall = (data: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(endponts.school, data)
            .then(() => {
                dispatch(spinner(false));
                toast.success('School Information Updated Successfully.');
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const schoolInfo = (data: any) => {
    return {
        type: SCHOOL_INFO,
        payload: data,
    };
};

export const addNewDepartmentAPIcall = (data: any, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.departments, data)
            .then((res) => {
                console.log(res);
                dispatch(getAllDepartmentAPIcall());
                close();
                dispatch(spinner(false));
                toast.success('Department Added Successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getAllDepartmentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.departments)
            .then((res) => {
                dispatch(getDepartmentAPIres(res.data.data));
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getDepartmentAPIres = (data: any) => {
    return {
        type: DEPARTMENT_LIST,
        payload: data,
    };
};

export const deleteDepartmentAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.departments}/${id}`)
            .then((res) => {
                dispatch(getAllDepartmentAPIcall());
                toast.success('Department deleted successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const updateDepartmentAPIcall = (id: number, data: { name: string }, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endponts.departments}/${id}`, data)
            .then((res) => {
                console.log(res);
                dispatch(getAllDepartmentAPIcall());
                close();
                dispatch(spinner(false));
                toast.success('Department Updated Successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getAllSessionsAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(endponts.sessions)
            .then((res) => {
                console.log(res);
                dispatch(getAllSessionAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllSessionAPIres = (data: any) => {
    return {
        type: SESSION_LIST,
        payload: data,
    };
};

export const addSessionsAPIcall = (data: any, close: Function) => {
    dispatch(spinner(true));
    return (dispatch: Dispatch<any>) => {
        API.post(endponts.sessions, data)
            .then((res) => {
                dispatch(spinner(false));
                console.log(res);
                toast.success("Session Added Successfully.");
                dispatch(getAllSessionsAPIcall());
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteSessionAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.sessions}/${id}`)
            .then(() => {
                dispatch(getAllSessionsAPIcall());
                toast.success('Session deleted successfully.');
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
