import {
    TEACHER_LIST,
    TEACHER_DETAILS,
    TEACHER_DATA,
    GET_TEACHER_SKILLS,
    GET_TEACHER_EDUCATION,
    GET_TEACHER_EXPERIENCE,
    DELETE_EDUCATION,
    DELETE_EXPERIENCE,
    ADD_TEACHER_SKILL,
} from '../ActionTypes/teacherTypes';

const initialState = {
    teacherList: null,
    teacherData: null,
    teacherSkill: null,
    teacherEducation: null,
    teacherExperience: null,
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
            return {
                ...state,
                teacherExperience: action.payload,
            };
        }

        case GET_TEACHER_EDUCATION: {
            return {
                ...state,
                teacherEducation: action.payload,
            };
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

        default: {
            return newState;
        }
    }
};
