import { USER_LOGIN } from '../ActionTypes/authTypes';
import { SCHOOL_INFO } from '../ActionTypes/schoolTypes';

const initialState = {
    schoolData: null,
};

export const schoolReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SCHOOL_INFO: {
            newState.schoolData = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
