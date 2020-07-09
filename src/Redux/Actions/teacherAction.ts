import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { TEACHER_LIST, TEACHER_DETAILS } from '../ActionTypes/teacherTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';

export const getallTeacherAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.teacher)
            .then((res) => {
                console.log(res);
                dispatch(teacherList(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherList = (data: any) => {
    return {
        type: TEACHER_LIST,
        payload: data,
    };
};

export const addNewTeacherAPIcall = (data: any, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.teacher, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Teacher's added successfully.");
                setTimeout(()=>{
                    history.push('/dashboard/teachers');
                },1000)
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const editTeacherAPIcall = (data: any, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endponts.teacher}/${editId}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Teacher's updated successfully.");
                setTimeout(()=>{
                    history.push('/dashboard/teachers');
                },1000)
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteTeacherAPIcall = (deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.teacher}/${deleteId}`)
            .then((res) => {
                console.log(res)
                toast.success("Teacher removed successfully.");
               dispatch(getallTeacherAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};


export const getTeacherDetailsAPIcall = (id:number) => {
    return (dispatch: any) => {
        API.get(`${endponts.teacher}/${id}`)
            .then((res) => {
                console.log(res.data)
                dispatch(teacherDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherDetailAPIres = (data:any) => {
    return {
        type: TEACHER_DETAILS,
        payload: data
    }
}