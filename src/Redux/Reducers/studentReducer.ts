import { STUDENT_INFO, STUDENT_DETAILS } from '../ActionTypes/studentTypes';

const initialState = {
    studentData: null,
    studentDetails: null
};

export const studentReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case STUDENT_INFO: {
            newState.studentData = action.payload;
            return newState;
        }
        case STUDENT_DETAILS: {
            newState.studentDetails = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
