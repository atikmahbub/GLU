import {
    SCHOOL_LIST,
    VIDEO_LIST,
    ADMIN_TEACHER_LIST,
    
} from '../ActionTypes/superAdminTypes';

const initialState = {
    schoolList: null,
    videoList: null,
    teacherList: null,


};
export const superAdminReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SCHOOL_LIST: {
            newState.schoolList = action.payload;
            return newState;
        }

        case VIDEO_LIST: {
            newState.videoList = action.payload;
            return newState;
        }

        case ADMIN_TEACHER_LIST: {
            newState.teacherList = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
