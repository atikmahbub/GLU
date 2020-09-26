import { StudentModuleState } from './types';
import { StudentModuleActionTypes } from '../Actions/studentModuleActions';
import { HOMEWORK_PENDING, HOMEWORK_SUCCESS } from '../ActionTypes/studentModuleTypes';

const initialState: StudentModuleState = {
    homework: {
        homeworks: [],
        overdueHomeworks: [],
        count: 0,
        incompleteCount: 0,
        overdueCount: 0,
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
};

export default function (state = initialState, action: StudentModuleActionTypes): StudentModuleState {
    switch (action.type) {
        case HOMEWORK_PENDING:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    isPending: true,
                },
            };
        case HOMEWORK_SUCCESS:
            return {
                ...state,
                homework: {
                    ...state.homework,
                    isPending: false,
                    isSuccess: true,
                    incompleteCount: action.incompleteCount,
                    overdueCount: action.overdueCount,
                    count: action.count,
                    homeworks: action.homeworks,
                    overdueHomeworks: action.overdueHomeworks
                }
            }
        default:
            return state;
    }
}
