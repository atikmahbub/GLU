export interface rootReducerType {
    authReducer: authReducerType;
    uiReducer: uiReducerType;
    schoolReducer: schoolReducerType;
    studentReducer: studentReducerType;
    teacherReducer: teacherReducerType;
    parentReducer: parentReducerType;
    classReducer: classReducerType;
    subjectReducer: subjectReducerType;
}

export interface authReducerType {
    userData: any;
}
export interface uiReducerType {
    loader: boolean;
}
export interface schoolReducerType {
    schoolData: any;
    departmentList: any;
    sessionList: any;
}
export interface studentReducerType {
    studentData: any,
    studentDetails: any
}
export interface teacherReducerType {
    teacherList:any
}
export interface parentReducerType {
    parentData: any,
    parentDetails: any,
}
export interface classReducerType {
    classList: any;
    sectionList: any;
}

export interface subjectReducerType {
    subjectList: any
}