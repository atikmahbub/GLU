import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { STUDENT_INFO } from '../ActionTypes/studentTypes';
import { handleError } from './errorHandler';
import { addNewStudent } from '../Interfaces/student';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.student)
            .then((res) => {
                dispatch(studentInfo(res.data.data))
            })
            .catch((err) => {
                handleError(dispatch,err);
            });
    };
};

export const studentInfo = (data:any) => {
    return {
        type: STUDENT_INFO,
        payload: data
    }
}


export const addNewStudentAPIcall = (data:addNewStudent) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.student, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Students Added Successfully.")
            })
            .catch((err) => {
                handleError(dispatch,err);
            });
    };
};
