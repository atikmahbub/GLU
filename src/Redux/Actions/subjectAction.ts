import { Dispatch } from 'react';
import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { SUBJECT_LIST } from '../ActionTypes/subjectTypes';

export const addNewSubjectAPIcall = (
    className: string,
    sectionName: string,
    departmentName: string,
    data: { name: string },
    close: Function
) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.post(`${endponts.subject}/${className}/${sectionName}/${departmentName}`, data)
            .then(() => {
                toast.success('Subject Added Successfully.');
                dispatch(spinner(false));
                close();
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getSubjectListAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        API.get(`${endponts.getAllStudents}`)
            .then((res) => {
                console.log(res);
                dispatch(subjectListAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const subjectListAPIres = (data: any) => {
    return {
        type: SUBJECT_LIST,
        payload: data,
    };
};

export const updateSubjectAPIcall = (
    className: string,
    sectionName: string,
    departmentName: string,
    subjectId: number,
    data: { name: string },
    close: Function
) => {
    return (dispatch: Dispatch<any>) => {
        dispatch(spinner(true));
        API.put(`${endponts.subject}/${className}/${sectionName}/${departmentName}/${subjectId}`, data)
            .then(() => {
                toast.success('Subject Updated Successfully.');
                dispatch(spinner(false));
                close();
                dispatch(getSubjectListAPIcall(className, sectionName));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteSubjectAPIcall = (className: string, sectionName: string, deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.subject}/${className}/${sectionName}/${deleteId}`)
            .then((res) => {
                console.log(res);
                toast.success('Subject deleted successfully.');
                dispatch(getSubjectListAPIcall(className, sectionName));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
