import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { spinner } from './uiAction';
import { handleError } from './errorHandler';
import { toast } from 'react-toastify';
import {CLASS_LIST, SECTION_LIST} from '../ActionTypes/classTypes';
import { appAction } from '../../Interfaces';

export const getallclassAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.class)
            .then((res) => {
                console.log(res);
                dispatch(classList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const classList = (data: any): appAction => {
    return {
        type: CLASS_LIST,
        payload: data,
    };
};


export const addNewClassAPIcall = (data:any, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.class, data)
            .then((res) => {
                console.log(res);
                dispatch(spinner(false));
                toast.success("Class Create Successfully.");
                close()
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteClassAPIcall = (clasname:string) => {
    return (dispatch: any) => {
        API.delete(`${endponts.class}/${clasname}`)
            .then((res) => {
                console.log(res);
                toast.success("Class Deleted Successfully.");
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getSectionByClassidAPIcall = (id:number) => {
    return (dispatch: any) => {
        API.get(`${endponts.section}/${id}`)
            .then((res) => {
                console.log(res);
                dispatch(sectionListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const sectionListAPIres = (data:any)=>{
    return {
        type: SECTION_LIST,
        payload: data
    }
}
 export const addNewSectionAPIcall = (data:any, id:number, close: Function) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(`${endponts.class}/${id}/sections`,data)
            .then((res) => {
                console.log(res);
                dispatch(spinner(false));
                toast.success("Section Created Successfully.");
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const addBulkSectionAPIcall = (data:any, close: Function) => {
    console.log(data)
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(`${endponts.singleClass}`,data)
            .then((res) => {
                console.log(res);
                dispatch(spinner(false));
                toast.success("Section Created Successfully.");
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};