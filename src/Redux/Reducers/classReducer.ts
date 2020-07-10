import { CLASS_LIST, SECTION_LIST } from '../ActionTypes/classTypes';



const initialState = {
    classList: null,
    sectionList: null
};

export const classReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case CLASS_LIST: {
            newState.classList = action.payload;
            return newState;
        }
        case SECTION_LIST: {
            newState.sectionList = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
