import {
    SCHOOL_LIST,
} from '../ActionTypes/superAdminTypes';

const initialState = {
    schoolList: null,

};
export const superAdminReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SCHOOL_LIST: {
            newState.schoolList = action.payload;
            return newState;
        }

        default: {
            return newState;
        }
    }
};
