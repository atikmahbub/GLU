import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';

import {
    TEACHER_LIST,
    TEACHER_DETAILS,
    DELETE_EDUCATION,
    DELETE_EXPERIENCE,
    ADD_TEACHER_SKILL,
    GET_TEACHER_SKILLS,
    GET_TEACHER_EXPERIENCE,
    GET_TEACHER_EDUCATION,
    GET_TEACHER_HOMEWORK,
    GET_TEACHER_HOMEWORK_COUNT,
    GET_TEACHER_RECOMMENDATION,
    GET_TEACHER_STUDENT_LIKE,
    POST_TEACHER_RECOMMENDATION,
    GET_TEACHER_RECOMMENDATION_COUNT,
    POST_TEACHER_HOMEWORK,
    DELETE_SKILL,
    ADD_DETAILS,
    INDIVIDUAL_HOMEWORK,
} from '../ActionTypes/teacherTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { registerDataRes } from './loginAction';
import { studentInfo } from './studentAction';

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

export const editTeacherAPIcall = (data: any, editId: number, history: any) => {
    return (dispatch: any) => {
        dispatch(spinner(true));
        API.put(`${endponts.teacher}/${editId}`, data)
            .then((res) => {
                dispatch(spinner(false));
                toast.success("Teacher's updated successfully.");
                setTimeout(() => {
                    history.push('/dashboard/teachers');
                }, 1000);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
// export const getTeacherSkills = () => {
//     return (dispatch: any) => {
//         API.get(endponts.getSkill)
//             .then((res) => {
//                 dispatch(getSkillAction(res.data.Skills));
//             })
//             .catch((err) => {
//                 handleError(dispatch, err);
//             });
//     };
// };
export const getTeacherSkills = () => {
    return (dispatch: any) => {
        API.get(endponts.teahcerSkill)
            .then((res) => {
                // console.log('skill Array' + JSON.stringify(res.data.data[0].Skills));

                dispatch(getSkillAction(res.data.data[0].Skills));
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
                console.log(res);
                toast.success('Teacher removed successfully.');
                dispatch(getallTeacherAPIcall());
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getSkillAction = (data: any) => {
    return {
        type: GET_TEACHER_SKILLS,
        payload: data,
    };
};

export const getTeacherDetailsAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endponts.teacher}/${id}`)
            .then((res) => {
                console.log(res.data);
                dispatch(teacherDetailAPIres(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const teacherDetailAPIres = (data: any) => {
    return {
        type: TEACHER_DETAILS,
        payload: data,
    };
};

export const getTeachersUpcomingClasses = () => {
    return async () => {
        try {
            const techerUpcomingClasses = await API.get(endponts.teacherUpcomingClass);
            console.log('techerUpcomingClasses: ', techerUpcomingClasses);
        } catch (err) {
            console.error(err);
        }
    };
};
////////////////////////////////////////////////////////////////////////////
// Add Skill
export const addSkill = (data: any) => {
    return {
        type: ADD_TEACHER_SKILL,
        payload: data,
    };
};

export const getTeacherExperience = () => {
    return (dispatch: any) => {
        API.get(endponts.techerExp)
            .then((res) => {
                dispatch(getTeacherExpData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherExpData = (data: any) => {
    return {
        type: GET_TEACHER_EXPERIENCE,
        payload: data,
    };
};
export const addTeacherSkill = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endponts.teahcerSkill, data);
            console.log('ress: ', res.data.success);
            if (res.data.success) dispatch(addSkill(data[0]));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
//////////////////////////////////////////////////////////////////////////////////////////////////

export const getTeacherExperienceApiCall = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endponts.techerExp);
            console.log('teacher experience: ', res);
            dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherEducationApiCall = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endponts.teahcerEducation);

            console.log('teacher qualification: ', res);
            dispatch(getEducationList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getExperienceList = (data: any) => {
    return {
        type: GET_TEACHER_EXPERIENCE,
        payload: data,
    };
};
export const getTeacherEducation = () => {
    return (dispatch: any) => {
        API.get(endponts.teacherEdu)
            .then((res) => {
                dispatch(getTeacherEduData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherEduData = (data: any) => {
    return {
        type: GET_TEACHER_EDUCATION,
        payload: data,
    };
};
export const getTeacherHomework = () => {
    return (dispatch: any) => {
        API.get(endponts.teacherHomework)
            .then((res) => {
                dispatch(getTeacherHomeworkData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherHomeworkData = (data: any) => {
    return {
        type: GET_TEACHER_HOMEWORK,
        payload: data,
    };
};
export const getTeacherHomeworkCount = () => {
    return (dispatch: any) => {
        API.get(endponts.teacherHomeworkCount)
            .then((res) => {
                dispatch(getTeacherHomeworkCountData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherHomeworkCountData = (data: any) => {
    return {
        type: GET_TEACHER_HOMEWORK_COUNT,
        payload: data,
    };
};
export const getTeacherRecommendation = () => {
    return (dispatch: any) => {
        API.get(endponts.teacherRecommendation)
            .then((res) => {
                dispatch(getTeacherRecommendationData(res.data.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const getTeacherRecommendationData = (data: any) => {
    return {
        type: GET_TEACHER_RECOMMENDATION,
        payload: data,
    };
};
export const getEducationList = (data: any) => {
    return {
        type: GET_TEACHER_EDUCATION,
        payload: data,
    };
};

///////////////////////////////////////////////////////////////////////////////////////////////
// Delete education
export const deleteEducation = (data: any) => {
    return {
        type: DELETE_EDUCATION,
        payload: data,
    };
};

export const deleteTeacherEducationApiCall = (id: number) => {
    return async (dispatch: any) => {
        try {
            console.log('Delete Button pressed');
            const res = await API.delete(`${endponts.teahcerEducation}/${id}`);
            console.log('delete response: ', res.data.success);
            if (res.data.success) dispatch(deleteEducation(id));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
// Delete experience
export const deleteExperience = (data: any) => {
    return {
        type: DELETE_EXPERIENCE,
        payload: data,
    };
};

export const deleteTeacherExperienceApiCall = (deleteId: number) => {
    return async (dispatch: any) => {
        try {
            console.log('Delete Button pressed');
            console.log(`${endponts.techerExp}/${deleteId}`);
            console.log(deleteId);

            const res = await API.delete(`${endponts.techerExp}/${deleteId}`);

            if (res.data.success) dispatch(deleteExperience(deleteId));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

export const addTeacherEducationApiCall = (data, history) => {
    return async (dispatch: any) => {
        try {
            console.log(`${endponts.teahcerEducation}`);
            console.log(data);
            await API.post(`${endponts.teahcerEducation}`, data);
            console.log('history: ', history);
            history.push(`/tutor/tutor-edit`);
            // dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const addTeacherExperienceApiCall = (data, history) => {
    return async (dispatch: any) => {
        try {
            console.log(`${endponts.techerExp}`);
            console.log(data);
            await API.post(`${endponts.techerExp}`, data);
            console.log('history: ', history);
            history.push(`/tutor/tutor-edit`);
            // dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherStudentLike = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endponts.teacherStudentLike, data);
            console.log('in rec' + JSON.stringify(res.data.data));
            dispatch(getTeacherStudentLikeData(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const getTeacherStudentLikeData = (data: any) => {
    return {
        payload: data,
        type: GET_TEACHER_STUDENT_LIKE,
    };
};
export const postTeacherRecommendation = (data: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.post(endponts.teacherRecommendation, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherEducationById = (id) => {
    return async (dispatch: any) => {
        try {
            const data = await API.get(`${endponts.teahcerEducation}/${id}`);

            return data.data.data;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const editEducationApiCall = (id: any, data: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endponts.teacherEdu}/${id}`, data);
            if (res.data.success) history.push('/tutor/tutor-edit');
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const getTeacherExperienceById = (id) => {
    return async (dispatch: any) => {
        try {
            const data = await API.get(`${endponts.techerExp}/${id}`);

            return data.data.data;
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const editExperienceApiCall = (id: any, data: any, history: any) => {
    return async (dispatch: any) => {
        try {
            const res = await API.put(`${endponts.techerExp}/${id}`, data);
            if (res.data.success) history.push('/tutor/tutor-edit');
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const postTeacherRecommendationData = (data: any) => {
    return {
        type: POST_TEACHER_RECOMMENDATION,
        payload: data,
    };
};
export const getTeacherRecommendationCount = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(endponts.teacherRecommendationCount);
            dispatch(getTeacherRecommendationCountData(res.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const getTeacherRecommendationCountData = (data: any) => {
    return {
        type: GET_TEACHER_RECOMMENDATION_COUNT,
        payload: data,
    };
};
export const postTeacherHomework = (data: any) => {
    return (dispatch: any) => {
        API.post(endponts.teacherHomework, data)
            .then((res) => {
                dispatch(postTeacherHomeworkData(res.data));
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};
export const postTeacherHomeworkData = (data: any) => {
    return {
        type: POST_TEACHER_HOMEWORK,
        payload: data,
    };
};

/////////////////////////////////////////////////////////////////////////////
// Delete skill by id
export const deleteSkillById = (id) => {
    return async (dispatch: any) => {
        try {
            const res = await API.delete(`${endponts.teahcerSkill}/${id}`);
            console.log(res.data.success);
            if (res.data.success) dispatch(deleteSkill(id));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const deleteSkill = (data: any) => {
    return {
        type: DELETE_SKILL,
        payload: data,
    };
};
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Get teacher Detail
export const getTeacherDetails = () => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endponts.userDetails}`);
            console.log('respp: ', res);
            if (res.data.success) dispatch(addDetails(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const addDetails = (data: any) => {
    return {
        type: ADD_DETAILS,
        payload: data,
    };
};
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//cms get all student list for teacher
export const getAllStudentTeacherAPIcall = (id: number) => {
    return (dispatch: any) => {
        API.get(`${endponts.teacher}/${id}/students`)
            .then((res) => {
                dispatch(studentInfo(res.data.data));
                console.log(res.data.data);
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

///////////////////////////////////////////////////////////////////////////////////////////////
// Get homework by id
export const homeworkById = (data: any) => {
    return {
        type: INDIVIDUAL_HOMEWORK,
        payload: data,
    };
};

export const getHomeworkById = (id: number) => {
    return async (dispatch: any) => {
        try {
            const res = await API.get(`${endponts.teacherHomework}/${id}`);
            console.log('individual homework: ', res);
            dispatch(homeworkById(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
