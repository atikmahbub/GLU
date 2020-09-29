import { StudentModuleState } from './types';
import { StudentModuleActionTypes } from '../Actions/studentModuleActions';
import {
    FEATURED_SUBJECT_PENDING,
    FEATURED_SUBJECT_SUCCESS,
    HOMEWORK_PENDING,
    HOMEWORK_SUCCESS,
    INFO_PENDING,
    INFO_SUCCESS,
    PREVIOUS_CLASSES_PENDING,
    PREVIOUS_CLASSES_SUCCESS,
    SET_UPCOMING_CLASSES_FILTER,
    SUBJECTS_PENDING,
    SUBJECTS_SUCCESS,
    TEACHERS_PENDING,
    TEACHERS_SUCCESS,
    UPCOMING_CLASSES_PENDING,
    UPCOMING_CLASSES_SUCCESS,
} from '../ActionTypes/studentModuleTypes';

const initialState: StudentModuleState = {
    info: {
        data: {},
        profileCard: {
            img: '',
            name: '',
            address: '',
            email: '',
            phone: '',
        },
        editProfileForm: {
            img: '',
            firstName: '',
            lastName: '',
            about: '',
            location: '',
            password: '',
            email: '',
            phone: '',
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
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
        count: 0,
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
        filters: {
            value: null,
            data: [],
            isPending: false,
            isSuccess: false,
            isFailure: false,
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
            imgSmallTitle: '',
        },
        isPending: false,
        isSuccess: false,
        isFailure: false,
    },
    subjects: {
        count: 0,
        data: [],
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
                    count: action.count,
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
                    isPending: true,
                },
            };
        case PREVIOUS_CLASSES_SUCCESS:
            return {
                ...state,
                previousClasses: {
                    ...state.previousClasses,
                    isPending: false,
                    isSuccess: true,
                    count: action.count,
                    data: action.data,
                },
            };
        case FEATURED_SUBJECT_PENDING:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: true,
                },
            };
        case FEATURED_SUBJECT_SUCCESS:
            return {
                ...state,
                featuredSubjects: {
                    ...state.featuredSubjects,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    featuredSubjectsCard: action.featuredSubjectsCard,
                },
            };
        case INFO_PENDING:
            return {
                ...state,
                info: {
                    ...state.info,
                    isPending: true,
                },
            };
        case INFO_SUCCESS:
            return {
                ...state,
                info: {
                    ...state.info,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                    profileCard: action.profileCard,
                    editProfileForm: action.editProfileForm,
                },
            };
        case SUBJECTS_PENDING:
            return {
                ...state,
                subjects: {
                    ...state.subjects,
                    isPending: true,
                },
            };
        case SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: {
                    ...state.subjects,
                    isPending: false,
                    isSuccess: true,
                    data: action.data,
                },
            };
        case SET_UPCOMING_CLASSES_FILTER:
            return {
                ...state,
                upcomingClasses: {
                    ...state.upcomingClasses,
                    filters: {
                        ...state.upcomingClasses.filters,
                        value: action.filter
                    }
                }
            }
        default:
            return state;
    }
}
