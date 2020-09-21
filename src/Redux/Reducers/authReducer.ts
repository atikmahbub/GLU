import { REGSITER_DATA, USER_LOGIN } from '../ActionTypes/authTypes';

const initialState = {
    userData: null,
    registerData:null
};

export const authReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case USER_LOGIN: {
            newState.userData = action.payload;
            return newState;
        }
        case REGSITER_DATA: {
            newState.registerData = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
