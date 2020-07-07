import { TEACHER_LIST, TEACHER_DETAILS } from '../ActionTypes/teacherTypes';


const initialState = {
    teacherList: null,
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
        default: {
            return newState;
        }
    }
};
