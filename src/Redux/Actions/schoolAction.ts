import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { SCHOOL_INFO } from '../ActionTypes/schoolTypes';
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
