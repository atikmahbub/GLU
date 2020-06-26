import { USER_LOGIN } from '../ActionTypes/authTypes';

const initialState = {
    userData: null,
};

export const authReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case USER_LOGIN: {
            newState.userData = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
