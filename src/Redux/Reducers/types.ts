import {
    FeaturedCardElement,
    ImageCardElement,
    NextClassCardElement,
    ProfileCardElement,
} from '../../components/Cards/types';
import { EditProfileForm } from '../../Interfaces/students/forms';
import { IFilterDataElement } from '../../Containers/FilterContainer/types';

interface AsyncState {
    isPending: boolean;
    isSuccess: boolean;
    isFailure: boolean;
}

interface FilterState extends AsyncState {
    value: IFilterDataElement | null;
    data: ImageCardElement[];
}

interface HomeworkState extends AsyncState {
    homeworks: any[];
    overdueHomeworks: any[];
    count: number;
    incompleteCount: number;
    overdueCount: number;
}

interface TeachersState extends AsyncState {
    count: number;
    data: any[];
}

interface UpcomingClassesState extends AsyncState {
    count: number;
    data: any[];
    nextClassCard: NextClassCardElement;
    filters: FilterState;
}

interface PreviousClassesState extends AsyncState {
    count: number;
    data: any[];
}

interface FeaturedSubjectsState extends AsyncState {
    data: any[];
    featuredSubjectsCard: FeaturedCardElement;
}

interface InfoState extends AsyncState {
    data: any;
    profileCard: ProfileCardElement;
    editProfileForm: EditProfileForm;
}

interface UpdateInfoState extends AsyncState {}

interface SubjectsState extends AsyncState {
    count: number;
    data: any[];
}

export interface StudentModuleState {
    homework: HomeworkState;
    teachers: TeachersState;
    upcomingClasses: UpcomingClassesState;
    previousClasses: PreviousClassesState;
    featuredSubjects: FeaturedSubjectsState;
    subjects: SubjectsState;
    info: InfoState;
    updateInfo: UpdateInfoState;
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
    fileUploadReducer: any;
    superAdminReducer: any;
    studentModule: StudentModuleState;
}
