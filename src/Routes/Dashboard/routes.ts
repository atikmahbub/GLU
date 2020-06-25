import StudentList from '../../Views/StudentList/StudentList';
import AddNewStudent from '../../Views/AddNewStudent/AddNewStudent';
import AddNewTeacher from '../../Views/AddNewTeacher/AddNewTeacher';
import AddNewStaff from '../../Views/AddNewStaff/AddNewStaff';
import AddNewParent from '../../Views/AddNewParent/AddNewParent';
import ParentList from '../../Views/ParentList/ParentList';
import TeacherList from '../../Views/TeacherList/TeacherList';
import StaffList from '../../Views/StaffList/StaffList';
import DailyAttendance from '../../Views/DailyAttendace';
import ClassRoutine from '../../Views/ClassRoutine';
import SubjectList from '../../Views/SubjectList';
import SessionList from '../../Views/SessionList';
import ClassList from '../../Views/ClassList';
import Departments from '../../Views/Departments';
import syllabusList from '../../Views/SyllabusList';
import PermissionList from '../../Views/PermissionLIist/PermissionList';
import StudentFees from '../../Views/StudentFees';
import ExpenseCategory from '../../Views/ExpenseCategory';
import ExpenseManager from '../../Views/ExpenseManager';
import AddStudentBulk from '../../Views/AddStudentBulk/AddStudentBulk';
import AddParentBulk from '../../Views/AddParentBulk/AddParentBulk';
import AddTeacherBulk from '../../Views/AddTeacherBulk/AddTeacherBulk';
import AddStaffBulk from '../../Views/AddStaffBulk/AddStaffBulk';
import {getDashboard} from "./getDashboard";
import TeacherProfile from '../../Views/TeacherProfile/TeacherProfile';
import Admin from '../../Views/Admin/Admin';
import AddNewEvent from '../../Views/AddNewEvent/AddNewEvent';
import ECA from "../../Views/ECAList";
import StudentDetails from '../../Views/StudentDetails/StudentDetails';
import TeacherDetails from '../../Views/TeacherDetails/TeacherDetails';
import ParentDetails from '../../Views/ParentDetails/ParentDetails';
import DepartmentDetails from '../../Views/DepartmentDetails/DepartmentDetails';
import TimeTableBulk from '../../Views/TimeTableBulk/TimeTableBulk';

export const dashboardRoutes = [
    { pathname: '/dashboard', component: getDashboard() },
    { pathname: '/dashboard/students', component: StudentList },
    { pathname: '/dashboard/student/add-new-student', component: AddNewStudent },
    { pathname: '/dashboard/student/add-new-teacher', component: AddNewTeacher },
    { pathname: '/dashboard/student/add-new-staff', component: AddNewStaff },
    { pathname: '/dashboard/student/add-new-parent', component: AddNewParent },
    { pathname: '/dashboard/parents', component: ParentList },
    { pathname: '/dashboard/teachers', component: TeacherList },
    { pathname: '/dashboard/Staff', component: StaffList },
    { pathname: '/dashboard/daily-attendance', component: DailyAttendance },
    { pathname: '/dashboard/timetables', component: ClassRoutine },
    { pathname: '/dashboard/class-groups', component: SubjectList },
    { pathname: '/dashboard/sessions', component: SessionList },
    { pathname: '/dashboard/year-group', component: ClassList },
    { pathname: '/dashboard/departments', component: Departments },
    { pathname: '/dashboard/syllabus', component: syllabusList },
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
];
