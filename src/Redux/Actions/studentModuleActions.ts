import {
    FEATURED_SUBJECT_PENDING,
    FEATURED_SUBJECT_SUCCESS,
    HOMEWORK_PENDING,
    HOMEWORK_SUCCESS,
    INFO_PENDING,
    INFO_SUCCESS,
    PREVIOUS_CLASSES_PENDING,
    PREVIOUS_CLASSES_SUCCESS,
    TEACHERS_PENDING,
    TEACHERS_SUCCESS,
    UPCOMING_CLASSES_PENDING,
    UPCOMING_CLASSES_SUCCESS,
} from '../ActionTypes/studentModuleTypes';
import { AppThunk } from './types';
import { API } from '../../Utility/API';
import { endponts, studentsEndpoints } from '../../Utility/endpoints';
import { FeaturedCardElement, HomeworkCardElement, NextClassCardElement } from '../../components/Cards/types';
import { dataToHomeworkCards } from '../../Helper/students/homeworks';
import { dataToFeaturedCard, dataToNextClassCard } from '../../Helper/students/upcomingClasses';

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

interface SetTeacherPending {
    type: typeof TEACHERS_PENDING;
}

interface TeachersSuccess {
    type: typeof TEACHERS_SUCCESS;
    count: number;
    data: any[];
}

interface SetUpcomingClassesPending {
    type: typeof UPCOMING_CLASSES_PENDING;
}

interface UpcomingClassesSuccess {
    type: typeof UPCOMING_CLASSES_SUCCESS;
    count: number;
    data: any[];
    nextClassCard: NextClassCardElement;
}

interface SetPreviousClassesPending {
    type: typeof PREVIOUS_CLASSES_PENDING;
}

interface PreviousClassesSuccess {
    type: typeof PREVIOUS_CLASSES_SUCCESS;
    count: number;
    data: any[];
}

interface SetFeaturedSubjectsPending {
    type: typeof FEATURED_SUBJECT_PENDING;
}

interface FeaturedSubjectsSuccess {
    type: typeof FEATURED_SUBJECT_SUCCESS;
    data: any[];
    featuredSubjectsCard: FeaturedCardElement;
}

interface SetInfoPending {
    type: typeof INFO_PENDING;
}

interface InfoSuccess {
    type: typeof INFO_SUCCESS;
    img: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
}

export type StudentModuleActionTypes =
    | SetHomeworkPending
    | HomeworkSuccess
    | SetTeacherPending
    | TeachersSuccess
    | SetUpcomingClassesPending
    | UpcomingClassesSuccess
    | SetPreviousClassesPending
    | PreviousClassesSuccess
    | SetFeaturedSubjectsPending
    | FeaturedSubjectsSuccess
    | SetInfoPending
    | InfoSuccess;

function setHomeworkPending(): SetHomeworkPending {
    return {
        type: HOMEWORK_PENDING,
    };
}

function homeworkSuccess(
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

export function fetchHomework(): AppThunk {
    return (dispatch) => {
        dispatch(setHomeworkPending());
        API.get(studentsEndpoints.getHomework).then(({ data: { success, data } }) => {
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

function setTeachersPending(): SetTeacherPending {
    return {
        type: TEACHERS_PENDING,
    };
}

function teachersSuccess(count: number, data: any[]): TeachersSuccess {
    return {
        type: TEACHERS_SUCCESS,
        count,
        data,
    };
}

export function fetchTeachers(): AppThunk {
    return (dispatch) => {
        dispatch(setTeachersPending());
        API.get(studentsEndpoints.getFeatureTeacher).then(({ data: { success, data } }) => {
            if (success) {
                dispatch(teachersSuccess(data.length, data));
            }
        });
    };
}

function setUpcomingPending(): SetUpcomingClassesPending {
    return {
        type: UPCOMING_CLASSES_PENDING,
    };
}

function upcomingClassesSuccess(
    count: number,
    data: any[],
    nextClassCard: NextClassCardElement
): UpcomingClassesSuccess {
    return {
        type: UPCOMING_CLASSES_SUCCESS,
        nextClassCard,
        count,
        data,
    };
}

export function fetchUpcomingClasses(): AppThunk {
    return (dispatch) => {
        dispatch(setUpcomingPending());
        API.get(studentsEndpoints.getUpcomingSessions).then(({ data: { success, data } }) => {
            if (success) {
                const { upcomingCount, upcomingSessions } = data;
                if (upcomingCount) {
                    dispatch(
                        upcomingClassesSuccess(
                            upcomingCount,
                            upcomingSessions,
                            dataToNextClassCard(upcomingSessions[0])
                        )
                    );
                }
            }
        });
    };
}

function setPreviousClassesPending(): SetPreviousClassesPending {
    return {
        type: PREVIOUS_CLASSES_PENDING,
    };
}

function previousClassesSuccess(count: number, data: any[]): PreviousClassesSuccess {
    return {
        type: PREVIOUS_CLASSES_SUCCESS,
        count,
        data,
    };
}

export function fetchPreviousClasses(): AppThunk {
    return (dispatch) => {
        dispatch(setPreviousClassesPending());
        API.get(studentsEndpoints.getPreviousSessions).then(({ data: { success, data } }) => {
            if (success) {
                const { prerecordedSessions, previousCount } = data;
                dispatch(previousClassesSuccess(previousCount, prerecordedSessions));
            }
        });
    };
}

function setFeaturedSubjectsPending(): SetFeaturedSubjectsPending {
    return {
        type: FEATURED_SUBJECT_PENDING,
    };
}

function featuredSubjectsSuccess(data: any[], featuredSubjectsCard: FeaturedCardElement): FeaturedSubjectsSuccess {
    return {
        type: FEATURED_SUBJECT_SUCCESS,
        data,
        featuredSubjectsCard,
    };
}

export function fetchFeaturedSubject(): AppThunk {
    return (dispatch) => {
        dispatch(setFeaturedSubjectsPending());
        API.get(studentsEndpoints.getFeatureSubject).then(({ data: { success, data } }) => {
            if (success && data.length) {
                dispatch(featuredSubjectsSuccess(data, dataToFeaturedCard(data)));
            }
        });
    };
}

function setInfoPending(): SetInfoPending {
    return {
        type: INFO_PENDING,
    };
}

function infoSuccess(
    img: string,
    name: string,
    email: string,
    phone: string,
    address: string,
    about: string
): InfoSuccess {
    return {
        type: INFO_SUCCESS,
        img,
        name,
        email,
        phone,
        address,
        about,
    };
}

export function fetchInfo(): AppThunk {
    return (dispatch) => {
        dispatch(setInfoPending());
        API.get(endponts.getUserProfile).then(({ data: { success, data } }) => {
            if (success) {
                const {
                    firstName,
                    lastName,
                    phoneNumber,
                    location,
                    about,
                    User: { email, profile },
                } = data;
                dispatch(infoSuccess(profile, `${firstName} ${lastName}`, email, phoneNumber, location, about));
            }
        });
    };
}
