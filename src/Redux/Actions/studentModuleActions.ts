import { HOMEWORK_PENDING, HOMEWORK_SUCCESS } from '../ActionTypes/studentModuleTypes';
import { AppThunk } from './types';
import { API } from '../../Utility/API';
import { studentsEndpoints } from '../../Utility/endpoints';
import { HomeworkCardElement } from '../../components/Cards/types';
import { dataToHomeworkCards } from '../../Helper/students/homeworks';

interface SetHomeworkPending {
    type: typeof HOMEWORK_PENDING;
}

interface HomeworkSuccess {
    type: typeof HOMEWORK_SUCCESS;
    incompleteCount: number;
    overdueCount: number;
    count: number;
    homeworks: HomeworkCardElement[];
    overdueHomeworks: HomeworkCardElement[];
}

export type StudentModuleActionTypes = SetHomeworkPending | HomeworkSuccess;

export function fetchHomework(): AppThunk {
    return (dispatch) => {
        dispatch(setHomeworkPending());
            API.get(studentsEndpoints.getHomework)
                .then(({ data: { success, data } }) => {
                    if (success) {
                        const { incompleteCount, overDueCount, allHomeworkCount, overDueHW, nonOverDueHW } = data;
                        dispatch(
                            homeworkSuccess(
                                incompleteCount,
                                overDueCount,
                                allHomeworkCount,
                                dataToHomeworkCards(nonOverDueHW),
                                dataToHomeworkCards(overDueHW)
                            )
                        );
                    }
                });
    };
}

export function setHomeworkPending(): SetHomeworkPending {
    return {
        type: HOMEWORK_PENDING,
    };
}

export function homeworkSuccess(
    incompleteCount: number,
    overdueCount: number,
    count: number,
    homeworks: HomeworkCardElement[],
    overdueHomeworks: HomeworkCardElement[]
): HomeworkSuccess {
    return {
        type: HOMEWORK_SUCCESS,
        incompleteCount,
        overdueCount,
        count,
        homeworks,
        overdueHomeworks,
    };
}
