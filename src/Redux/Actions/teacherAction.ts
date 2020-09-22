import { API } from '../../Utility/API';
import { endponts } from '../../Utility/endpoints';
import { handleError } from './errorHandler';
import { TEACHER_LIST, TEACHER_DETAILS, GET_TEACHER_SKILLS, GET_TEACHER_EXPERIENCE ,GET_TEACHER_EDUCATION,GET_TEACHER_HOMEWORK,GET_TEACHER_HOMEWORK_COUNT, GET_TEACHER_RECOMMENDATION,GET_TEACHER_STUDENT_LIKE} from '../ActionTypes/teacherTypes';
import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { dispatch } from '../Store/Store';
import data from '../../components/Notifications/data';

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
                setTimeout(() => {
                    history.push('/dashboard/teachers');
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
}
export const addTeacherSkill = (data: any) => {
    return async (dispatch: any) => {
        try {
            await API.post(endponts.teahcerSkill, data);
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

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
        API.get(endponts.teacherEdu).then((res)=>{
            dispatch(getTeacherEduData(res.data.data));
        }).catch((err)=>{
            handleError(dispatch, err);
        })
    };
};
export const getTeacherEduData=(data:any)=>{
    return{
        type:GET_TEACHER_EDUCATION,
        payload:data
    }
}
export const getTeacherHomework=()=>{
    return(dispatch:any)=>{
        API.get(endponts.teacherHomework).then((res)=>{
            dispatch(getTeacherHomeworkData(res.data.data))
        }).catch((err)=>{
            handleError(dispatch,err);
        })
    }
}
export const getTeacherHomeworkData=(data:any)=>{
    return{
        type:GET_TEACHER_HOMEWORK,
        payload:data
    }
}
export const getTeacherHomeworkCount=()=>{
    return(dispatch:any)=>{
        API.get(endponts.teacherHomeworkCount).then((res)=>{
            dispatch(getTeacherHomeworkCountData(res.data.data));
        }).catch((err)=>{
            handleError(dispatch,err);
        })
    }   
}
export const getTeacherHomeworkCountData=(data:any)=>{
    return{
        type:GET_TEACHER_HOMEWORK_COUNT,
        payload:data
    }
}
export const getTeacherRecommendation=()=>{
    return(dispatch:any)=>{
        API.get(endponts.teacherRecommendation).then((res)=>{
            dispatch(getTeacherRecommendationData(res.data.data));
        }).catch((err)=>{
            handleError(dispatch,err);
        })
    }
}
export const getTeacherRecommendationData=(data:any)=>{
    return{
        type:GET_TEACHER_RECOMMENDATION,
        payload:data
    }
}
export const getEducationList = (data: any) => {
    return {
        type: GET_TEACHER_EDUCATION,
        payload: data,
    };
};

export const deleteTeacherEducationApiCall = (id) => {
    return async (dispatch: any) => {
        try {
            console.log('Delete Button pressed');
            await API.delete(`${endponts.teahcerEducation}/${id}`);

            dispatch(getEducationList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};

export const deleteTeacherExperienceApiCall = (deleteId: number) => {
    return async (dispatch: any) => {
        try {
            console.log('Delete Button pressed');
            console.log(`${endponts.techerExp}/${deleteId}`);
            console.log(deleteId);

            const res = await API.delete(`${endponts.techerExp}/${deleteId}`);

            dispatch(getExperienceList(res.data.data));
        } catch (err) {
            handleError(dispatch, err);
        }
    };
};
export const getTeacherStudentLike=(data:any)=>{
    return async(dispatch:any)=>{
        try{
            const res=await API.post(endponts.teacherStudentLike,data)
            console.log("in rec"+JSON.stringify(res.data.data))
            dispatch(getTeacherStudentLikeData(res.data.data));
        }
        catch(err){
            handleError(dispatch, err);
        }
    };
}
export const getTeacherStudentLikeData=(data:any)=>{
    return{
        payload:data,
        type:GET_TEACHER_STUDENT_LIKE
    }
}
export const postTeacherRecommendation=(data:any)=>{
    return async(dispatch:any)=>{
        try{
            const res=await API.post(endponts.teacherRecommendation,data)
        }
        catch(err){
            handleError(dispatch, err);
        }
    };
}