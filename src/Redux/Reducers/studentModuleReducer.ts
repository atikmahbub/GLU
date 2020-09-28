import { StudentModuleState } from './types';
import { StudentModuleActionTypes } from '../Actions/studentModuleActions';
import {
    FEATURED_SUBJECT_PENDING,
    FEATURED_SUBJECT_SUCCESS,
    HOMEWORK_PENDING,
    HOMEWORK_SUCCESS,
    PREVIOUS_CLASSES_PENDING,
    PREVIOUS_CLASSES_SUCCESS,
    TEACHERS_PENDING,
    TEACHERS_SUCCESS,
    UPCOMING_CLASSES_PENDING,
    UPCOMING_CLASSES_SUCCESS,
} from '../ActionTypes/studentModuleTypes';

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
    teachers: {
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    upcomingClasses: {
        count: 0,
        data: [],
        nextClassCard: {
            img: '',
            subject: '',
            subTitle: '',
            description: '',
            name: '',
            date: '',
            startTime: '',
            endTime: '',
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    previousClasses: {
        count: 0,
        data: [],
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    featuredSubjects: {
        data: [],
        featuredSubjectsCard: {
            imgBig: '',
            imgBigTitle: '',
            imgSmall: '',
            imgSmallTitle: ''
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    }
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
                    overdueHomeworks: action.overdueHomeworks,
                },
            };
        case TEACHERS_PENDING:
            return {
                ...state,
                teachers: {
                    ...state.teachers,
                    isPending: true,
                },
            };
        case TEACHERS_SUCCESS:
            return {
                ...state,
                teachers: {
                    ...state.teachers,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                },
            };
        case UPCOMING_CLASSES_PENDING:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    isPending: true,
                },
            };
        case UPCOMING_CLASSES_SUCCESS:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    isPending: false,
                    isSuccess: true,
                    count: action.count,
                    data: action.data,
                    nextClassCard: action.nextClassCard,
                },
            };
        case PREVIOUS_CLASSES_PENDING:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: true
                }
            }
        case PREVIOUS_CLASSES_SUCCESS:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: false,
                    isSuccess: true,
                    count: action.count,
                    data: action.data
                }
            }
        case FEATURED_SUBJECT_PENDING:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: true,
                }
            }
        case FEATURED_SUBJECT_SUCCESS:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    featuredSubjectsCard: action.featuredSubjectsCard
                }
            }
        default:
            return state;
    }
}
