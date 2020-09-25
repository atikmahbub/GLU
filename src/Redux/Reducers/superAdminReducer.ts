import {
    SCHOOL_LIST,
    VIDEO_LIST,
    ADMIN_TEACHER_LIST,
    ADMIN_STUDENT_LIST,
    ADMIN_PARENTS_LIST,
    ADMIN_ALL_USERS_COUNT,
    
} from '../ActionTypes/superAdminTypes';

const initialState = {
    schoolList: null,
    videoList: null,
    teacherList: null,
    studentList: null,
    parentsList: null,
    allUsersCount: null,


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

        case ADMIN_STUDENT_LIST: {
            newState.studentList = action.payload;
            return newState;
        }

        case ADMIN_PARENTS_LIST: {
            newState.parentsList = action.payload;
            return newState;
        }


        case ADMIN_ALL_USERS_COUNT: {
            newState.allUsersCount = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
