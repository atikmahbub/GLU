import { SUBJECT_LIST } from '../ActionTypes/subjectTypes';



const initialState = {
    subjectList: null
};

export const subjectReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SUBJECT_LIST: {
            newState.subjectList = action.payload;
            return newState;
        }
        
        default: {
            return newState;
        }
    }
};
