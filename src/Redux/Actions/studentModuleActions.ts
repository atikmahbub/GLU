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
    UPCOMING_CLASSES_FILTER_PENDING,
    UPCOMING_CLASSES_FILTER_SUCCESS,
    UPCOMING_CLASSES_PENDING,
    UPCOMING_CLASSES_SUCCESS,
} from '../ActionTypes/studentModuleTypes';
import { AppThunk } from './types';
import { API } from '../../Utility/API';
import { endponts, studentsEndpoints } from '../../Utility/endpoints';
import {
    FeaturedCardElement,
    HomeworkCardElement,
    NextClassCardElement,
    ProfileCardElement,
} from '../../components/Cards/types';
import { dataToHomeworkCards } from '../../Helper/students/homeworks';
import { dataToFeaturedCard, dataToNextClassCard } from '../../Helper/students/upcomingClasses';
import { dataToEditProfileForm, dataToProfileCard } from '../../Helper/students/profileInfo';
import { EditProfileForm } from '../../Interfaces/students/forms';
import { SelectedFilterValue } from '../../Containers/FilterContainer/types';

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
    data: any;
    profileCard: ProfileCardElement;
    editProfileForm: EditProfileForm;
}

interface SetSubjectsPending {
    type: typeof SUBJECTS_PENDING;
}

interface SubjectsSuccess {
    type: typeof SUBJECTS_SUCCESS;
    count: number;
    data: any[];
}

interface SetUpcomingClassesFilter {
    type: typeof SET_UPCOMING_CLASSES_FILTER;
    filter: SelectedFilterValue;
}

interface SetUpcomingClassesFilterPending {
    type: typeof UPCOMING_CLASSES_FILTER_PENDING;
}

interface UpcomingClassesFilterSuccess {
    type: typeof UPCOMING_CLASSES_FILTER_SUCCESS;
    data: any[];
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
    | InfoSuccess
    | SetSubjectsPending
    | SubjectsSuccess
    | SetUpcomingClassesFilterPending
    | SetUpcomingClassesFilter
    | UpcomingClassesFilterSuccess;

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

function setUpcomingClassesFilter(filter: SelectedFilterValue): SetUpcomingClassesFilter {
    return {
        type: SET_UPCOMING_CLASSES_FILTER,
        filter,
    };
}

function setUpcomingClassesFilterPending(): SetUpcomingClassesFilterPending {
    return {
        type: UPCOMING_CLASSES_FILTER_PENDING,
    };
}

function upcomingClassesFilterSuccess(data: any[]): UpcomingClassesFilterSuccess {
    return {
        type: UPCOMING_CLASSES_FILTER_SUCCESS,
        data,
    };
}

export function fetchUpcomingClassesFilter(filter: SelectedFilterValue): AppThunk {
    return (dispatch) => {
        dispatch(setUpcomingClassesFilter(filter));
        if (filter) {
            dispatch(setUpcomingClassesFilterPending());
            API.get(
                `/${studentsEndpoints.getUpcomingClassesFilter}/${filter.value}`
            ).then(({ data: { success, data } }) => {
                if (success) {
                    console.log(data)
                }
            });
        }
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

function infoSuccess(data: any, profileCard: ProfileCardElement, editProfileForm: EditProfileForm): InfoSuccess {
    return {
        type: INFO_SUCCESS,
        data,
        profileCard,
        editProfileForm,
    };
}

export function fetchInfo(): AppThunk {
    return (dispatch) => {
        dispatch(setInfoPending());
        API.get(endponts.getUserProfile).then(({ data: { success, data } }) => {
            if (success) {
                dispatch(infoSuccess(data, dataToProfileCard(data), dataToEditProfileForm(data)));
            }
        });
    };
}

function setSubjectsPending(): SetSubjectsPending {
    return {
        type: SUBJECTS_PENDING,
    };
}

function subjectsSuccess(count: number, data: any[]): SubjectsSuccess {
    return {
        type: SUBJECTS_SUCCESS,
        count,
        data,
    };
}

export function fetchSubjects(): AppThunk {
    return (dispatch) => {
        dispatch(setSubjectsPending());
        API.get(studentsEndpoints.getSubjects).then(({ data: { success, data } }) => {
            if (success) {
                const { schoolSubjects, schoolSubjectCount } = data;
                dispatch(subjectsSuccess(schoolSubjectCount, schoolSubjects));
            }
        });
    };
}
