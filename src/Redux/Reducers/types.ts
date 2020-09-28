import { FeaturedCardElement, NextClassCardElement } from '../../components/Cards/types';

interface AsyncState {
    isPending: boolean;
    isSuccess: boolean;
    isFailure: boolean;
}

interface HomeworkState extends AsyncState {
    homeworks: any[];
    overdueHomeworks: any[];
    count: number;
    incompleteCount: number;
    overdueCount: number;
}

interface TeachersState extends AsyncState {
    data: any[];
}

interface UpcomingClassesState extends AsyncState {
    count: number;
    data: any[];
    nextClassCard: NextClassCardElement;
}

interface PreviousClassesState extends AsyncState {
    count: number;
    data: any[];
}

interface FeaturedSubjectsState extends AsyncState {
    data: any[];
    featuredSubjectsCard: FeaturedCardElement
}

export interface StudentModuleState {
    homework: HomeworkState;
    teachers: TeachersState;
    upcomingClasses: UpcomingClassesState;
    previousClasses: PreviousClassesState;
    featuredSubjects: FeaturedSubjectsState;
}

export interface RootState {
    authReducer: any;
    uiReducer: any;
    schoolReducer: any;
    studentReducer: any;
    teacherReducer: any;
    parentReducer: any;
    classReducer: any;
    subjectReducer: any;
    filterUploadReducer: any;
    superAdminReducer: any;
    studentModule: StudentModuleState;
}
