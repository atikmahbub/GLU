import {
    TEACHER_LIST,
    TEACHER_DETAILS,
    TEACHER_DATA,
    GET_TEACHER_SKILLS,
    GET_TEACHER_EXPERIENCE,
    GET_TEACHER_EDUCATION,
    GET_TEACHER_HOMEWORK_COUNT,
    GET_TEACHER_HOMEWORK,
    GET_TEACHER_RECOMMENDATION,
    GET_TEACHER_STUDENT_LIKE,
    DELETE_EDUCATION,
    DELETE_EXPERIENCE,

    ADD_TEACHER_SKILL,
    POST_TEACHER_RECOMMENDATION,
    GET_TEACHER_RECOMMENDATION_COUNT,
    POST_TEACHER_HOMEWORK
} from '../ActionTypes/teacherTypes';
const initialState = {
    teacherList: null,
    teacherData: null,
    teacherSkill: null,
    teacherExperience: null,
    teacherEducation: null,
    teacherHomework: null,
    teacherHomeworkCount: null,
    teacherRecommendations: null,
    teacherStudentLike: null,
    teacherPostRecommendation:null,
    teacherRecommendationCount:null,
    teacherCreateHomework:null,
};
export const teacherReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case TEACHER_LIST: {
            newState.teacherList = action.payload;
            return newState;
        }
        case TEACHER_DETAILS: {
            newState.teacherList = action.payload;
            return newState;
        }
        case TEACHER_DATA: {
            return {
                ...state,
                tutorData: action.payload,
            };
        }
        case GET_TEACHER_SKILLS: {
            newState.teacherSkill = action.payload;
            return newState;
        }
        case GET_TEACHER_EXPERIENCE: {
            newState.teacherExperience = action.payload;
            return newState;
        }
        case GET_TEACHER_EDUCATION: {
            newState.teacherEducation = action.payload;
            return newState;
        }
        case GET_TEACHER_HOMEWORK: {
            newState.teacherHomework = action.payload;
            return newState;
        }
        case GET_TEACHER_HOMEWORK_COUNT: {
            newState.teacherHomeworkCount = action.payload;
            return newState;
        }
        case GET_TEACHER_RECOMMENDATION: {
            newState.teacherRecommendations = action.payload;
            return newState;
        }
        case GET_TEACHER_STUDENT_LIKE: {
            newState.teacherStudentLike = action.payload;
            return newState;
        }

        case DELETE_EDUCATION: {
            const id = action.payload;
            return {
                ...state,
                teacherEducation: state.teacherEducation.filter((item) => item.qualificationId !== id),
            };
        }

        case DELETE_EXPERIENCE: {
            const id = action.payload;
            return {
                ...state,
                teacherExperience: state.teacherExperience.filter((item) => item.experienceId !== id),
            };
        }

        case ADD_TEACHER_SKILL: {
            return {
                ...state,
                teacherSkill: [...state.teacherSkill, action.payload],
            };
        }
        case POST_TEACHER_RECOMMENDATION:{
            newState.teacherPostRecommendation=action.payload;
            return newState;
        }
        case GET_TEACHER_RECOMMENDATION_COUNT:{
            newState.teacherRecommendationCount=action.payload;
            return newState;
        }
        case POST_TEACHER_HOMEWORK:{
            newState.teacherCreateHomework=action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
