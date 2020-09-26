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

export interface StudentModuleState {
    homework: HomeworkState;
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
