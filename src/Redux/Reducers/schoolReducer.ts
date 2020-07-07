import { SCHOOL_INFO, DEPARTMENT_LIST } from '../ActionTypes/schoolTypes';

const initialState = {
    schoolData: null,
    departmentList: null,
};

export const schoolReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case SCHOOL_INFO: {
            newState.schoolData = action.payload;
            return newState;
        }
        case DEPARTMENT_LIST: {
            newState.departmentList = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
