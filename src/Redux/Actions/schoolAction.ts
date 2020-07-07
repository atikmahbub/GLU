import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { SCHOOL_INFO, DEPARTMENT_LIST } from '../ActionTypes/schoolTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { handleError } from './errorHandler';

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
                close()
                dispatch(spinner(false));
                toast.success("Department Added Successfully.");
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getAllDepartmentAPIcall = () => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.get(endponts.departments)
            .then((res) => {
                console.log(res);
                dispatch(getDepartmentAPIres(res.data.data))
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const getDepartmentAPIres = (data:any) => {
    return {
        type: DEPARTMENT_LIST,
        payload: data
    }
}

export const deleteDepartmentAPIcall = (id:number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.departments}/${id}`)
            .then((res) => {
                dispatch(getAllDepartmentAPIcall());
                toast.success('Department deleted successfully.')
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const updateDepartmentAPIcall = (id:number, data: {name: string}, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endponts.departments}/${id}`, data)
            .then((res) => {
                console.log(res);
                dispatch(getAllDepartmentAPIcall());
                close()
                dispatch(spinner(false));
                toast.success("Department Updated Successfully.");
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};
