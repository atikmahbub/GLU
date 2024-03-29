import Dashboard from '../../Views/AdminDashboard/Dashboard';
import StudentList from '../../Views/StudentList/Index';
import AddNewStudent from '../../Views/AddNewStudent/AddNewStudent';
import AddNewStaff from '../../Views/AddNewStaff/AddNewStaff';
import AddNewParent from '../../Views/AddNewParent/AddNewParent';
import ParentList from '../../Views/ParentList/Index';
import TeacherList from '../../Views/TeacherList/Index';
import StaffList from '../../Views/StaffList/StaffList';
import DailyAttendance from '../../Views/DailyAttendace';
import ClassRoutine from '../../Views/ClassRoutine';
import SubjectList from '../../Views/SubjectList';
import SessionList from '../../Views/SessionList';
import ClassList from '../../Views/ClassList';
import Departments from '../../Views/Departments';
import syllabusList from '../../Views/SyllabusList';
import AddSyllabus from '../../Views/AddSyllabus/AddSyllabus';
import PermissionList from '../../Views/PermissionLIist/PermissionList';
import StudentFees from '../../Views/StudentFees';
import ExpenseCategory from '../../Views/ExpenseCategory';
import ExpenseManager from '../../Views/ExpenseManager';
import AddStudentBulk from '../../Views/AddStudentBulk/AddStudentBulk';
import AddParentBulk from '../../Views/AddParentBulk/AddParentBulk';
import AddTeacherBulk from '../../Views/AddTeacherBulk/AddTeacherBulk';
import AddStaffBulk from '../../Views/AddStaffBulk/AddStaffBulk';
import TeacherProfile from '../../Views/TeacherProfile/TeacherProfile';
import Admin from '../../Views/Admin/Admin';
import AddNewEvent from '../../Views/AddNewEvent/AddNewEvent';
import ECA from '../../Views/ECAList';
import StudentDetails from '../../Views/StudentDetails/StudentDetails';
import TeacherDetails from '../../Views/TeacherDetails/TeacherDetails';
import ParentDetails from '../../Views/AddNewParent/ParentDetails';
import DepartmentDetails from '../../Views/DepartmentDetails/Index';
import TimeTableBulk from '../../Views/TimeTableBulk/TimeTableBulk';
import ECAbulk from '../../Views/ECAbulk/ECAbulk';
import StudentHWdetails from '../../Views/StudentDetails/StudentHomeWork/Index';
import StudentExamReport from '../../Views/StudentDetails/StudentSubjectDetail/Index';
import StaffDetails from '../../Views/StaffDetails/StaffDetails';
import MeritsSanction from '../../Views/Merits/Index';
import Feedback from '../../Views/Feedback/Index';
import AddYearGroup from '../../Views/AddYearGroup/Index';
import FormGroup from '../../Views/FormGroup/index';
import AddFormGroup from '../../Views/AddFormGroup/Index';
import Notification from '../../Views/SendNotification/Index';
import YearGroupDetail from '../../Views/YearGroupDetails/index';
import AddNewYearGroup from '../../Views/AddNewYearGroup/Index';
import AddNewClassGroup from '../../Views/AddNewClassGroup/Index';
import AddNewDepartment from '../../Views/AddNewDepartments/Index';
import TeacherClassGroupDetails from '../../Views/TeacherDetails/ClassGroups/Index';
import TeacherCGAttendance from '../../Views/TeacherDetails/ClassGroups/Attendance/Index';
import TeacherCGPerticularAttendance from '../../Views/TeacherDetails/ClassGroups/PerticularAttendace/Index';
import TeacherCGExamResult from '../../Views/TeacherDetails/ClassGroups/ExamResult/Index';
import TeacherCGHomework from '../../Views/TeacherDetails/ClassGroups/HomeWork/Index';
import CmsNotification from '../../Views/CmsNotification/CmsNotification';
import SchoolList from '../../Views/AdminDashboard/SchoolList/Index';
import VideoList from '../../Views/AdminDashboard/VideoList/Index';
import AdminTeacherList from '../../Views/AdminDashboard/TeacherList/Index';
import TeacherDetailAdminPage from '../../Views/AdminDashboard/TeacherList/TeacherDetail/TeacherDetail';
import AdminStudentList from '../../Views/AdminDashboard/StudentList/Index';
import AdminParentList from '../../Views/AdminDashboard/ParentsList/Index';

import AddNewSchool from '../../Views/AddNewSchool/Index';
import StudentDetailAdminPage from '../../Views/AdminDashboard/StudentList/StudentDetail/StudentDetail';
import SchoolDetailAdminPage from '../../Views/AdminDashboard/SchoolList/SchoolDetail/SchoolDetail';
import ParentDetailAdminPage from '../../Views/AdminDashboard/ParentsList/ParentDetail/ParentDetail';
import AddNewTeacher from '../../Views/AddNewTeacherSuperAdmin/Index';


export const dashboardRoutes = [
    { pathname: '/admin/dashboard', component: Dashboard },
    { pathname: '/admin/school', component: SchoolList },
    { pathname: '/admin/videos', component: VideoList },
    { pathname: '/admin/teacher', component: AdminTeacherList },
    { pathname: '/admin/student', component: AdminStudentList },
    { pathname: '/admin/parent', component: AdminParentList },
    { pathname: '/admin/parent/detail', component: ParentDetailAdminPage },
    { pathname: '/admin/school/add-new-school', component: AddNewSchool },
    { pathname: '/admin/teacher/add-new-teacher', component: AddNewTeacher },

    { pathname: '/admin/teacher/detail', component: TeacherDetailAdminPage },
    { pathname: '/admin/student/detail', component: StudentDetailAdminPage },
    { pathname: '/admin/school/detail', component: SchoolDetailAdminPage },
    

    { pathname: '/admin/dashboard/students', component: StudentList },
    { pathname: '/dashboard/student/add-new-student', component: AddNewStudent },
    { pathname: '/dashboard/staff/add-new-staff', component: AddNewStaff },
    { pathname: '/dashboard/parent/add-new-parent', component: AddNewParent },
    { pathname: '/dashboard/parents', component: ParentList },
    // { pathname: '/dashboard/teachers', component: TeacherList },
    { pathname: '/dashboard/Staff', component: StaffList },
    { pathname: '/dashboard/daily-attendance', component: DailyAttendance },
    { pathname: '/dashboard/timetables', component: ClassRoutine },
    { pathname: '/dashboard/class-groups', component: SubjectList },
    { pathname: '/dashboard/sessions', component: SessionList },
    { pathname: '/dashboard/year-group', component: ClassList },
    { pathname: '/dashboard/departments', component: Departments },
    { pathname: '/dashboard/syllabus', component: syllabusList },
    { pathname: '/dashboard/add-syllabus', component: AddSyllabus },
    { pathname: '/dashboard/permissions', component: PermissionList },
    { pathname: '/dashboard/studen-free-manager', component: StudentFees },
    { pathname: '/dashboard/expense-category', component: ExpenseCategory },
    { pathname: '/dashboard/expense-manager', component: ExpenseManager },
    { pathname: '/dashboard/student/bulk-upload', component: AddStudentBulk },
    { pathname: '/dashboard/teacher/bulk-upload', component: AddTeacherBulk },
    { pathname: '/dashboard/parent/bulk-upload', component: AddParentBulk },
    { pathname: '/dashboard/staff/bulk-upload', component: AddStaffBulk },
    { pathname: '/dashboard/teacher-profile', component: TeacherProfile },
    { pathname: '/dashboard/admin', component: Admin },
    { pathname: '/dashboard/event-calender', component: AddNewEvent },
    { pathname: '/dashboard/extra-curricular-activities', component: ECA },
    { pathname: '/dashboard/student-details', component: StudentDetails },
    { pathname: '/dashboard/teacher-details', component: TeacherDetails },
    { pathname: '/dashboard/parent-details', component: ParentDetails },
    { pathname: '/dashboard/department-details', component: DepartmentDetails },
    { pathname: '/dashboard/timetable-bulk-upload', component: TimeTableBulk },
    { pathname: '/dashboard/extra-curricular-activities-bulk-upload', component: ECAbulk },
    { pathname: '/dashboard/student-details/homework', component: StudentHWdetails },
    { pathname: '/dashboard/student-details/exam', component: StudentExamReport },
    { pathname: '/dashboard/staff-details', component: StaffDetails },
    { pathname: '/dashboard/merits-sanctions', component: MeritsSanction },
    { pathname: '/dashboard/feedback', component: Feedback },
    { pathname: '/dashboard/edit-year-group', component: AddYearGroup },
    { pathname: '/dashboard/form-group', component: FormGroup },
    { pathname: '/dashboard/edit-form-group', component: AddFormGroup },
    { pathname: '/dashboard/parent/send-notification', component: Notification },
    { pathname: '/dashboard/year-group/details', component: YearGroupDetail },
    { pathname: '/dashboard/year-group/add-year-group', component: AddNewYearGroup },
    { pathname: '/dashboard/class-group/add-class-group', component: AddNewClassGroup },
    { pathname: '/dashboard/department/add-new-department', component: AddNewDepartment },
    { pathname: '/dashboard/teacher-details/class-group-details', component: TeacherClassGroupDetails },
    {
        pathname: '/dashboard/teacher-details/class-group-details/attendance/punctuality',
        component: TeacherCGAttendance,
    },
    { pathname: '/dashboard/teacher-details/class-group-details/perticular', component: TeacherCGPerticularAttendance },
    {
        pathname: '/dashboard/teacher-details/class-group-details/exam-results',
        component: TeacherCGExamResult,
    },
    {
        pathname: '/dashboard/teacher-details/class-group-details/homework',
        component: TeacherCGHomework,
    },
    {
        pathname: '/dashboard/teacher-details/class-group-details/students',
        component: StudentList,
    },
    {
        pathname: '/dashboard/teacher-details/class-group-details/feedback',
        component: Feedback,
    },
    {
        pathname: '/dashboard/teacher-details/class-group-details/merits/sanctions',
        component: MeritsSanction,
    },
    {
        pathname: '/dashboard/message',
        component: CmsNotification,
    },
];
