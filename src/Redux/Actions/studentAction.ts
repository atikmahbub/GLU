import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { STUDENT_INFO } from '../ActionTypes/studentTypes';
import { handleError } from './errorHandler';
import { addNewStudent } from '../Interfaces/student';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { invitationAPIcall } from './InvitationAction';

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.student)
            .then((res) => {
                dispatch(studentInfo(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentInfo = (data: any) => {
    return {
        type: STUDENT_INFO,
        payload: data,
    };
};

export const addNewStudentAPIcall = (data: addNewStudent) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.student, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Students Added Successfully.');
                const ides = res.data.data.map((item: any) => {
                    return item.userData.id;
                });
                ides.map((id: number) => {
                    dispatch(invitationAPIcall({ invitee_id: id, for_role: 'student' }));
                });
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const deleteStudentAPIcall = (deleteId: number) => {
    return (dispatch: any) => {
        API.delete(`${endponts.student}/${deleteId}`)
            .then((res) => {
                console.log(res);
                toast.success('Student removed successfully.');
                dispatch(getallStudentAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const editStudentAPIcall = (data: any, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endponts.student}/${editId}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("student's updated successfully.");
                setTimeout(() => {
                    history.push('/dashboard/students');
                }, 1000);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
