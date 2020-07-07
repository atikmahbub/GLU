import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { PARENT_LIST, PARENT_DETAILS } from '../ActionTypes/parentTypes';
import { addParentFormDataType, addparentArray } from '../../Interfaces/parentModule';
import { routeEndpoints } from '../../Utility/routeEndpoints';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';

export const getallparentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.parent)
            .then((res) => {
                console.log(res);
                dispatch(parentList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const parentList = (data: any) => {
    return {
        type: PARENT_LIST,
        payload: data,
    };
};

export const addNewParentAPIcall = (data: addparentArray, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.parent, data)
            .then((res) => {
                console.log(res);
                dispatch(getallparentAPIcall());
                history.push(routeEndpoints.parent.parentList);
                dispatch(spinner(false));
                toast.success("Parent Added Successfully.");
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const editParentAPIcall = (data: addParentFormDataType, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endponts.parent}/${editId}`, data)
            .then((res) => {
                console.log(res);
                dispatch(getallparentAPIcall());
                history.push(routeEndpoints.parent.parentList);
                dispatch(spinner(false));
                toast.success("Parent updated Successfully.");
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};

export const deleteParentAPIcall = ( deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.parent}/${deleteId}`)
            .then((res) => {
                dispatch(getallparentAPIcall());
                toast.success("Parent deleted Successfully.");
            })
            .catch((err) => {
                console.log(err);
                handleError(dispatch, err);
            });
    };
};


export const getParentDetailsAPIcall = (id:number) => {
    return (dispatch: any) => {
        API.get(`${endponts.parent}/${id}`)
            .then((res) => {
                console.log(res.data)
                dispatch(parentDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const parentDetailAPIres = (data:any) => {
    return {
        type: PARENT_DETAILS,
        payload: data
    }
}