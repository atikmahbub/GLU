import { PARENT_LIST } from '../ActionTypes/parentTypes';


const initialState = {
    parentData: null,
};

export const parentReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case PARENT_LIST: {
            newState.parentData = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
