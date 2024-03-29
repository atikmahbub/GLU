export interface rootReducerType {
    authReducer: authReducerType;
    uiReducer: uiReducerType;
    schoolReducer: schoolReducerType;
    studentReducer: studentReducerType;
    teacherReducer: teacherReducerType;
    parentReducer: parentReducerType;
    classReducer: classReducerType;
    subjectReducer: subjectReducerType;
    fileUploadReducer: FileUploadReducerType;
}

export interface authReducerType {
    userData: any;
    registerData: any;
    verifyUser: any;
    childTokens: any;
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
    studentData: any;
    studentDetails: any;
    searchStudent: any;
}
export interface teacherReducerType {
    teacherList:any
    teacherSkill:any
    teacherExperience:any
    teacherHomework:any
    teacherEducation:any
    teacherRecommendations:any
    teacherPostRecommendation:any
    teacherStudentLike:any
    teacherRecommendationCount:any
    teacherCreateHomework:any
}
export interface parentReducerType {
    parentData: any;
    parentDetails: any;
}
export interface classReducerType {
    classList: any;
    sectionList: any;
}

export interface subjectReducerType {
    subjectList: any;
}

export interface FileUploadReducerType {
    fileData: any;
}
