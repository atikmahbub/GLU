export const endponts = {
    login: 'auth/login',
    school: 'schools/school',
    schoolProfile: 'school/profile',
    student: 'school/student',
    getAllStudents: 'school/students',
    teacher: 'school/teacher',
    parent: 'school/guardian',
    class: 'class',
    singleClass: 'schools/class',
    section: 'section/',
    invitation: 'auth/invite',
    authRegister: 'auth/register',
    departments: 'school/department',
    sessions: 'session',
    subject: 'schools/subjects',
    timeTable: 'schools/routines',
    emailSubscribe: 'auth/email',
    fileUpload: 'file-upload/signed-url/',
    uploadFileName: 'file-upload/uploads',
    register: 'auth/register',
    studentEdu: 'student/qualification',
    registerPhone: 'user/phone/',
    verifyOtp: 'user/verify/phone/',
    teahcerSkill: 'teacher/skill',
    // teahcerExperience: 'teacher/experience',
    teahcerEducation: 'teacher/qualification',
    techerExp: 'teacher/experience',
    teacherBio: 'auth/teacher/bio/',
    teacherFileUpload: 'file-upload/uploads/documents',
    parentChildAdd: 'guardian/children',
    forgotEmail: 'auth/forget/password',
    resetPassword: 'auth/reset/password/',
    teacherEdu: 'teacher/qualification',
    teacherHomework: 'teacher/homework',
    teacherHomeworkCount: 'teacher/homework/count',
    teacherRecommendation: 'teacher/recommend',
    teacherStudentLike: 'teacher/student/like',
    searchStudent: 'school/student/like',
    userDetails: 'user/profile',
    getUserProfile: 'user/profile',
    registerVerfiyUser: 'auth/verify/',
    updateProfile: 'user/profile',
    getStudentDetails: 'school/subject/student/',
    attendanceDetails: 'attendance/student/',
    studentExam: '/school/student/',
    studentHomework: '/school/status/homework/student/',
    teacherRecommendationCount: 'teacher/recommend/count',
    getAllSubject: '/school/class-groups',
};

export const studentsEndpoints = {
    getFeatureTeacher: 'review/featured/teachers',
    getUpcomingSessions: 'freelancer/student/session/upcoming',
    getPreviousSessions: 'freelancer/student/session/previous',
    getFeatureSubject: 'freelancer/student/featured/subject',
    getHomework: 'student/status/homework'
}


export const superAdminEndpoints = {
    getAllSchools: 'superAdmin/schools',
    addSchool: 'superAdmin/schools',
    activateDeactivateSchool: 'superAdmin/user',
    getAllVideos: 'superAdmin/recorded/session',
    activateDeactivateVideo: 'superadmin/recorded-sessions',
    getAllTeachers: 'superadmin/freelancer-teachers',
    activateDeactivateTeacher: 'superAdmin/user',
    getAllStudents: 'superadmin/students?type=external',
    getAllParents: 'superadmin/guardians',
    getAllUsersCount: 'superadmin/users/count-list'
}
