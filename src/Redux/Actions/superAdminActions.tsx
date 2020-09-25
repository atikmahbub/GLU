import { API } from '../../Utility/API';
import { handleError } from './errorHandler';
import { superAdminEndpoints } from '../../Utility/endpoints';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';

import {
    SCHOOL_LIST,
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

export const addNewSchoolAPIcall = (data: any, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(superAdminEndpoints.addSchool, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("School added successfully.");
                dispatch(registerDataRes(res.data.data));
                setTimeout(() => {
                    // history.push('/dashboard/teachers');
                }, 1000);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const schoolList = (data: any) => {
    return {
        type: SCHOOL_LIST,
        payload: data,
    };
};