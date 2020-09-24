import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import {
    STUDENT_INFO,
    STUDENT_DETAILS,
    STUDENT_SEARCH,
    STUDNET_ATTENDANCE,
    STUDENT_EXAM,
    STUDENT_HOMEWORK,
    STUDENT_TERM_RESULT,
} from '../ActionTypes/studentTypes';
import { handleError } from './errorHandler';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';
import { NumberLocale } from 'yup';

export const getallStudentAPIcall = () => {
    return (dispatch: any) => {
        API.get(endponts.getAllStudents)
            .then((res) => {
                console.log(res.data.data);
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

export const addNewStudentAPIcall = (data: any, history?: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.post(endponts.student, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success('Students Added Successfully.');
                dispatch(registerDataRes(res.data.data));
                setTimeout(() => {
                    // history.push('/dashboard/students');
                }, 1000);
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

export const getStudentDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endponts.getStudentDetails}${id}`)
            .then((res) => {
                console.log(res.data);
                dispatch(studentDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentDetailAPIres = (data: any) => {
    return {
        type: STUDENT_DETAILS,
        payload: data,
    };
};

export const searchStudentAPIcall = (data: any) => {
    return (dispatch: any) => {
        API.post(endponts.searchStudent, data)
            .then((res) => {
                console.log(res.data);
                dispatch(searchStudentRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const searchStudentRes = (data: any) => {
    return {
        type: STUDENT_SEARCH,
        payload: data,
    };
};

export const studentAttDetailAPIcall = (id: number, startData: string, endDate: string) => {
    return (dispatch: any) => {
        API.get(`${endponts.attendanceDetails}${id}?startDate=${startData}&endDate=${endDate}`)
            .then((res) => {
                console.log(res.data);
                dispatch(studentAttDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentAttDetailsRes = (data: any) => {
    return {
        type: STUDNET_ATTENDANCE,
        payload: data,
    };
};

export const studentHomeworkDetailsAPIcall = (id: NumberLocale) => {
    return (dispatch: any) => {
        API.get(`${endponts.studentHomework}${id}`)
            .then((res) => {
                console.log(res.data);
                dispatch(studentHomeworkDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentHomeworkDetailsRes = (data: any) => {
    return {
        type: STUDENT_HOMEWORK,
        payload: data,
    };
};

export const studentExamDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endponts.studentExam}${id}/exam`)
            .then((res) => {
                console.log(res.data);
                dispatch(studenExamDetailsRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studenExamDetailsRes = (data: any) => {
    return {
        type: STUDENT_EXAM,
        payload: data,
    };
};

export const studentTermResultAPIcall = (id: number, term: string) => {
    return (dispatch: any) => {
        API.get(`${endponts.studentExam}${id}/term/${term}`)
            .then((res) => {
                console.log(res.data);
                dispatch(studentTermResultRes(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const studentTermResultRes = (data: any) => {
    return {
        type: STUDENT_TERM_RESULT,
        payload: data,
    };
};
