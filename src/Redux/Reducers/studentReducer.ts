import { STUDENT_INFO } from '../ActionTypes/studentTypes';

const initialState = {
    studentData: null,
};

export const studentReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case STUDENT_INFO: {
            newState.studentData = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
