import { TEACHER_LIST, TEACHER_DETAILS,TEACHER_DATA,GET_TEACHER_SKILLS } from '../ActionTypes/teacherTypes';


const initialState = {
    teacherList: null,
    teacherData:null,
    teacherSkill:[]
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
        case TEACHER_DATA:{
            return{
                ...state,
                tutorData:action.payload
            }
        }
        case GET_TEACHER_SKILLS:{
            return{
                ...state,
                teacherSkill:action.payload
            }
        }
        default: {
            return newState;
        }
    }
};
