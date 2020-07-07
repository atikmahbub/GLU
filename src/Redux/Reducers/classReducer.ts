import { CLASS_LIST } from '../ActionTypes/classTypes';



const initialState = {
    classList: null,
};

export const classReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case CLASS_LIST: {
            newState.classList = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
